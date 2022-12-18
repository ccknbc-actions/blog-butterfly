// noinspection JSUnresolvedVariable

"use strict"

const fs = require('fs')
const logger = require('hexo-log')()
const fetch = require('node-fetch')
const path = require('path')

const findScript = () => path.resolve('./', 'sw-cache')

const config = hexo.config
const pluginConfig = config.swpp
const root = config.url + config.root
const { cacheList, replaceList } = pluginConfig?.enable ? require(findScript()) : undefined

if (pluginConfig?.enable) {
    // 生成 update.json
    hexo.on('exit', async () => {
        if (!fs.existsSync('public/index.html'))
            return logger.info('跳过生成 update.json')
        const cachePath = 'cacheList.json'
        const updatePath = 'update.json'
        const oldCache = await getJsonFromNetwork(cachePath)
        const oldUpdate = await getJsonFromNetwork(updatePath)
        const newCache = buildNewJson(cachePath)
        const dif = compare(oldCache, newCache)
        buildUpdateJson(updatePath, dif, oldUpdate)
    })

    // 生成 sw.js
    hexo.extend.generator.register('buildSw', () => {
        if (pluginConfig.sw.custom) return
        const absPath = module.path + '/sw-template.js'
        const rootPath = path.resolve('./')
        const relativePath = path.relative(rootPath, absPath)
        const template = fs.readFileSync(relativePath, 'utf8')
        const cache = fs.readFileSync('sw-cache.js', 'utf8')
            .replace('module.exports.cacheList', 'const cacheList')
            .replace('module.exports.replaceList', 'const replaceList')
        return {
            path: 'sw.js',
            data: template.replace('const { cacheList, replaceList } = require(\'../sw-cache\')', cache)
        }
    })

    // 生成注册 sw 的代码
    hexo.extend.injector.register('head_begin', () => {
        return `<script>
              (() => {
                const sw = navigator.serviceWorker
                const error = () => ${pluginConfig.sw.onerror}
                if (!sw?.register('/sw.js')?.then(() => {
                  if (!sw.controller) ${pluginConfig.sw.onsuccess}
                })?.catch(error)) error()
              })()
          </script>`
    }, "default")

    if (!pluginConfig.dom?.custom) {
        hexo.extend.injector.register('body_begin', () => {
            // noinspection HtmlUnknownTarget
            return `<script src="/js/sw-dom.js"></script>`
        })
        hexo.extend.generator.register('buildDomJs', () => {
            const relativePath = './sw-dom.js'
            const template = fs.readFileSync(relativePath, 'utf-8')
                .replaceAll('// ${onSuccess}', pluginConfig.dom.onsuccess)
            return {
                path: 'sw-dom.js',
                data: template
            }
        })
    }
}

/** 遍历指定目录下的所有文件 */
const eachAllFile = (root, cb) => {
    const stats = fs.statSync(root)
    if (stats.isFile()) cb(root)
    else {
        const files = fs.readdirSync(root)
        if (!root.endsWith('/')) root += '/'
        files.forEach(it => eachAllFile(root + it, cb))
    }
}

/** 判断指定文件是否需要排除 */
const isExclude = pathname => {
    for (let reg of pluginConfig.exclude) {
        if (pathname.match(new RegExp(reg, 'i'))) return true
    }
    return false
}

/**
 * 构建 md5 缓存表并写入到发布目录中
 *
 * 格式为 `{"[path]": "[md5Value]"}`
 *
 * @param path 相对于根目录的路径
 * @return {Object} 生成的 json 对象
 */
const buildNewJson = path => {
    const crypto = require('crypto')    // 用于计算 md5
    const result = {}                   // 存储新的 MD5 表
    const removeIndex = config.pretty_urls?.trailing_index
    const removeHtml = config.pretty_urls?.trailing_html
    eachAllFile(config.public_dir, path => {
        if (!fs.existsSync(path)) return logger.error(`${path} 不存在！`)
        let endIndex
        if (removeIndex && path.endsWith('/index.html')) endIndex = path.length - 10
        else if (removeHtml && path.endsWith('.html')) endIndex = path.length - 5
        else endIndex = path.length
        const url = new URL(root + path.substring(7, endIndex))
        if (findCache(url) && !isExclude(url.pathname)) {
            const content = fs.readFileSync(path)
            const key = decodeURIComponent(url.pathname)
            result[key] = crypto.createHash('md5').update(content).digest('hex')
        }
    })
    let publicRoot = config.public_dir || 'public/'
    if (!publicRoot.endsWith('/')) publicRoot += '/'
    fs.writeFileSync(`${publicRoot}${path}`, JSON.stringify(result), 'utf-8')
    logger.info(`Generated: ${path}`)
    return result
}

/**
 * 从网络拉取 json 文件
 * @param path 文件路径（相对于根目录）
 */
const getJsonFromNetwork = async path => {
    const url = root + path
    try {
        const result = await fetch(url, {
            headers: {
                referer: new URL(url).hostname,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.62'
            }
        })
        if (result.status < 200 || result.status >= 400)
            // noinspection ExceptionCaughtLocallyJS
            throw `拉取 ${url} 时出现异常（${result.status}）`
        return await result.json()
    } catch (e) {
        // noinspection SpellCheckingInspection
        if (e.code === 'ENOTFOUND')
            logger.error(`拉取 ${url} 时出现 404，如果您是第一次构建请忽略这个错误`)
        else throw e
    }
}

/**
 * 对比两个 md5 缓存表的区别
 * @return [string] 需要更新的文件路径
 */
const compare = (oldCache, newCache) => {
    const result = []
    if (!oldCache) return result
    for (let path in oldCache) {
        if (newCache[path] !== oldCache[path]) result.push(path)
    }
    return result
}

/** 判断指定资源是否需要合并 */
const isMerge = (pathname, tidied) => {
    const optional = pluginConfig.merge
    if (pathname.includes(`/${config.tag_dir}/`)) {
        if (optional.tags ?? true) {
            tidied.tags = true
            return true
        }
    } else if (pathname.includes(`/${config.archive_dir}/`)) {
        if (optional.archives ?? true) {
            tidied.archives = true
            return true
        }
    } else if (pathname.includes(`/${config.category_dir}/`)) {
        if (optional.categories ?? true) {
            tidied.categories = true
            return true
        }
    } else if (pathname.startsWith('/page/') || pathname.length <= 1) {
        if (optional.index ?? true) {
            tidied.index = true
            return true
        }
    }
}

/**
 * 从一个字符串中提取最后两个 / 之间的内容
 * @param it {string} 要操作的字符串
 * @param keep {boolean} 是否保留最后一个 / 及其后面的内容
 */
const clipPageName = (it, keep) => {
    const end = it.lastIndexOf('/')
    let index = end - 1
    for (; index > 0; --index) {
        if (it[index] === '/') break
    }
    return it.substring(index + 1, keep ? it.length : end)
}

/** 构建新的 update.json */
const buildUpdateJson = (name, dif, oldUpdate) => {
    /** 将对象写入文件，如果对象为 null 或 undefined 则跳过写入 */
    const writeJson = json => {
        if (json) {
            logger.info(`Generated: ${name}`)
            fs.writeFileSync(`public/${name}`, JSON.stringify(json), 'utf-8')
        }
    }
    // 读取拓展 json
    const expand = fs.existsSync(name) ? JSON.parse(fs.readFileSync(name, 'utf-8')) : undefined
    // 获取上次最新的版本
    let oldVersion = oldUpdate?.info?.at(0)?.version ?? 0
    if (typeof oldVersion !== 'number') {
        // 当上次最新的版本号不是数字是尝试对其进行转换，如果无法转换则直接置零
        if (oldVersion.match('\D')) oldVersion = 0
        else oldVersion = Number.parseInt(oldVersion)
    }
    // 存储本次更新的内容
    const newInfo = {
        version: oldVersion + 1,
        change: expand?.change ?? []
    }
    // 整理更新的数据
    const tidied = tidyDiff(dif, expand)
    if (expand.all) return writeJson({
        global: (oldUpdate?.global ?? 0) + (tidied.updateGlobal ? 1 : 0),
        info: [newInfo]
    })
    // 如果没有更新的文件就直接退出
    if (
        tidied.page.size === 0 && tidied.file.size === 0 &&
        !(tidied.archives || tidied.categories || tidied.tags || tidied.index)
    ) return writeJson(oldUpdate)
    pushUpdateToInfo(newInfo, tidied)
    const result = mergeUpdateWithOld(newInfo, oldUpdate, tidied)
    return writeJson(result)
}

const mergeUpdateWithOld = (newInfo, oldUpdate, tidied) => {
    const result = {
        global: (oldUpdate?.global ?? 0) + (tidied.updateGlobal ? 1 : 0),
        info: [newInfo]
    }
    const charLimit = pluginConfig.charLimit ?? 1024
    if (JSON.stringify(result).length > charLimit) {
        return {
            global: result.global,
            info: [{version: newInfo.version}]
        }
    }
    if (!oldUpdate) return result
    for (let it of oldUpdate.info) {
        if (it.change) it.change = zipInfo(newInfo, it)
        result.info.push(it)
        if (JSON.stringify(result).length > charLimit) {
            result.info.pop()
            break
        }
    }
    return result
}

// 压缩相同项目
const zipInfo = (newInfo, oldInfo) => {
    oldInfo = oldInfo.change
    newInfo = newInfo.change
    const result = []
    for (let i = oldInfo.length - 1; i !== -1; --i) {
        const value = oldInfo[i]
        if (value.flag === 'page' && newInfo.find(it => it.flag === 'html')) continue
        const newValue = newInfo.find(it => it.flag === value.flag)
        if (!newValue) {
            result.push(value)
            continue
        }
        if (!value.value) continue
        const isArray = Array.isArray(newValue.value)
        if (Array.isArray(value.value)) {
            const array = value.value
                .filter(it => isArray ? !newValue.value.find(that => that === it) : it !== newValue.value)
            if (array.length === 0) continue
            result.push({flag: value.flag, value: array.length === 1 ? array[0] : array})
        } else if (isArray) {
            if (!newValue.value.find(it => it === value.value))
                result.push(value)
        } else {
            if (newValue.value !== value.value)
                result.push(value)
        }
    }
    return result
}

// 将更新推送到 info
const pushUpdateToInfo = (info, tidied) => {
    // 推送页面更新
    if (tidied.page.size > (pluginConfig.maxHtml ?? 15)) {
        // 如果 html 数量超过阈值就直接清掉所有 html
        info.change.push({flag: 'html'})
    } else {
        const pages = []        // 独立更新
        const merges = []       // 要合并的更新
        tidied.page.forEach(it => pages.push(it))
        if (tidied.tags) merges.push(config.tag_dir)
        if (tidied.archives) merges.push(config.archive_dir)
        if (tidied.categories) merges.push(config.category_dir)
        if (tidied.index) {
            pages.push(clipPageName(root, false))
            merges.push('page')
        }
        if (merges.length > 0)
            info.change.push({flag: 'str', value: merges.map(it => `/${it}/`)})
        if (pages.length > 0)
            info.change.push({flag: 'page', value: pages})
    }
    // 推送文件更新
    if (tidied.file.size > 0) {
        const list = []
        tidied.file.forEach(it => list.push(it))
        info.change.push({flag: 'file', value: list})
    }
}

// 将 diff 整理分类，并将 expand 整合到
const tidyDiff = (dif, expand) => {
    const tidied = {
        /** 所有 HTML 页面 */
        page: new Set(),
        /** 所有文件 */
        file: new Set(),
        /** 标记 tags 是否更新 */
        tags: false,
        /** 标记 archives 是否更新 */
        archives: false,
        /** 标记 categories 是否更新 */
        categories: false,
        /** 标记 index 是否更新 */
        index: false,
        /** 标记是否更新 global 版本号 */
        updateGlobal: expand?.global
    }
    const mode = pluginConfig.precisionMode
    for (let it of dif) {
        const url = new URL(root + it)  // 当前文件的 URL
        const cache = findCache(url)    // 查询缓存
        if (!cache) {
            logger.error(`[buildUpdate] 指定 URL(${url.pathname}) 未查询到缓存规则！`)
            continue
        }
        if (cache.clean) tidied.updateGlobal = true
        if (it.match(/(\/|\.html)$/)) { // 判断缓存是否是 html
            if (isMerge(it, tidied)) continue
            if (mode.html ?? false) tidied.page.add(url.pathname)
            else tidied.page.add(clipPageName(url.href, !it.endsWith('/')))
        } else {
            const extendedName = (it.includes('.') ? it.match(/[^.]+$/)[0] : null) ?? 'default'
            const setting = mode[extendedName] ?? (mode.default ?? false)
            if (setting) tidied.file.add(url.pathname)
            else {
                let name = url.href.match(/[^/]+$/)[0]
                if (!name) throw `${url.href} 格式错误`
                tidied.file.add(name)
            }
        }
    }
    return tidied
}

function findCache(url) {
    url = new URL(replaceRequest(url.href))
    for (let key in cacheList) {
        const value = cacheList[key]
        if (value.match(url)) return value
    }
    return null
}

function replaceRequest(url) {
    for (let key in replaceList) {
        const value = replaceList[key]
        for (let source of value.source) {
            if (url.match(source)) {
                url = url.replace(source, value.dist)
            }
        }
    }
    return url
}

/** 对 hexo 的全局变量进行排序，以保证每次生成的结果一致 */
(() => {
    const locals = hexo.locals
    const compare = (a, b) => a < b ? -1 : 1
    const sort = (name, value) => locals.get(name).data.sort((a, b) => compare(a[value], b[value]))
    const list = {
        posts: 'title',
        pages: 'title',
        tags: 'name',
        categories: 'name'
    }
    for (let key in list) sort(key, list[key])
    locals.get('posts').forEach(it => {
        it.tags.data.sort((a, b) => compare(a.name, b.name))
        it.categories.data.sort((a, b) => compare(a.name, b.name))
    })
})()