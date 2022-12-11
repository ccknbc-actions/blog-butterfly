// noinspection JSIgnoredPromiseFromCall

(() => {
    /** 缓存库名称 */
    const CACHE_NAME = 'CCBlogCache'
    /** 版本名称存储地址（必须以`/`结尾） */
    const VERSION_PATH = 'https://id.v3/'

    self.addEventListener('install', () => self.skipWaiting())

    const { cacheList, replaceList } = require('../sw-cache')

    /**
     * 删除指定缓存
     * @param list 要删除的缓存列表
     * @return {Promise<Array<string>>} 删除的缓存的URL列表
     */
    const deleteCache = list => new Promise(resolve => {
        caches.open(CACHE_NAME).then(cache => cache.keys()
            .then(keys => Promise.all(keys.map(
                it => new Promise(async resolve1 => {
                    const url = it.url
                    if (url !== VERSION_PATH && list.match(url)) {
                        await cache.delete(it)
                        resolve1(url)
                    } else resolve1(undefined)
                })
            )).then(removeList => resolve(removeList)))
        )
    })

    self.addEventListener('fetch', event => {
        const replace = replaceRequest(event.request)
        const request = replace || event.request
        const url = new URL(request.url)
        if (findCache(url)) {
            event.respondWith(new Promise(async resolve => {
                const key = new Request(`${url.protocol}//${url.host}${url.pathname}`)
                let response = await caches.match(key)
                if (!response) {
                    response = await fetchNoCache(request)
                    const status = response.status
                    if ((status > 199 && status < 400) || status === 0) {
                        const clone = response.clone()
                        caches.open(CACHE_NAME).then(cache => cache.put(key, clone))
                    }
                }
                resolve(response)
            }))
        } else if (replace !== null) {
            event.respondWith(fetch(request))
        }
    })

    self.addEventListener('message', event => {
        const data = event.data
        switch (data) {
            case 'update':
                updateJson().then(info => {
                    // noinspection JSUnresolvedVariable
                    event.source.postMessage({
                        type: 'update',
                        update: info.update,
                        version: info.version,
                    })
                })
                break
            default:
                const list = new VersionList()
                list.push(new CacheChangeExpression({'flag': 'all'}))
                deleteCache(list).then(() => {
                    if (data === 'refresh')
                        event.source.postMessage({type: 'refresh'})
                })
                break
        }
    })

    /** 忽略浏览器HTTP缓存的请求指定request */
    const fetchNoCache = request => fetch(request, {cache: "no-store"})

    /** 判断指定url击中了哪一种缓存，都没有击中则返回null */
    function findCache(url) {
        for (let key in cacheList) {
            const value = cacheList[key]
            if (value.match(url)) return value
        }
        return null
    }

    /**
     * 检查连接是否需要重定向至另外的链接，如果需要则返回新的Request，否则返回null<br/>
     * 该函数会顺序匹配{@link replaceList}中的所有项目，即使已经有可用的替换项<br/>
     * 故该函数允许重复替换，例如：<br/>
     * 如果第一个匹配项把链接由"http://abc.com/"改为了"https://abc.com/"<br/>
     * 此时第二个匹配项可以以此为基础继续进行修改，替换为"https://abc.net/"<br/>
     * @return {Request|null}
     */
    function replaceRequest(request) {
        let url = request.url;
        let flag = false
        for (let key in replaceList) {
            const value = replaceList[key]
            for (let source of value.source) {
                if (url.match(source)) {
                    url = url.replace(source, value.dist)
                    flag = true
                }
            }
        }
        return flag ? new Request(url) : null
    }

    /**
     * 根据JSON删除缓存
     * @returns {Promise<boolean>} 返回值用于标记当前页是否被刷新
     */
    function updateJson() {
        /**
         * 解析elements，并把结果输出到list中
         * @return boolean 是否刷新全站缓存
         */
        const parseChange = (list, elements, version) => {
            let result = true
            for (let element of elements) {
                const ver = element['version']
                if (ver === version) {
                    result = false
                    break
                }
                const jsonList = element['change']
                if (jsonList) {
                    for (let it of jsonList)
                        list.push(new CacheChangeExpression(it))
                }
            }
            // resul=true时表明读取了已存在的所有版本信息后依然没有找到客户端当前的版本号
            // 说明跨版本幅度过大，直接清理全站
            return result
        }
        /** 解析字符串 */
        const parseJson = json => new Promise(resolve => {
            /** 版本号读写操作 */
            const dbVersion = {
                write: (id) => new Promise((resolve, reject) => {
                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(
                            new Request(VERSION_PATH),
                            new Response(id)
                        ).then(() => resolve())
                    }).catch(() => reject())
                }), read: () => new Promise((resolve) => {
                    caches.match(new Request(VERSION_PATH))
                        .then(response => {
                            if (!response) resolve(null)
                            response.text().then(text => {
                                resolve(text)
                            })
                        }).catch(() => resolve(null)
                    )
                })
            }
            let list = new VersionList()
            dbVersion.read().then(oldData => {
                const oldVersion = JSON.parse(oldData)
                const elementList = json['info']
                const global = json['global']
                const newVersion = {global: global, local: elementList[0].version}
                //新用户不进行更新操作
                if (!oldVersion) {
                    dbVersion.write(JSON.stringify(newVersion))
                    return resolve(newVersion)
                }
                const refresh = parseChange(list, elementList, oldVersion.local)
                dbVersion.write(JSON.stringify(newVersion))
                //如果需要清理全站
                if (refresh) {
                    if (global === oldVersion.global) {
                        list._list.length = 0
                        list.push(new CacheChangeExpression({'flag': 'all'}))
                    } else list.refresh = true
                }
                resolve({list: list, version: newVersion})
            }).catch(e => {
                console.error(e)
                console.error('更新过程中发生异常，已经还原版本信息！')
                dbVersion.write('{"global":-1, "local": -1}')
            })
        })
        const url = `/update.json` //需要修改JSON地址的在这里改
        return new Promise(resolve => fetchNoCache(url)
            .then(response => {
                if (response.ok || response.status === 301 || response.status === 302)
                    response.json().then(json => {
                        parseJson(json).then(result => {
                            if (!result.list) return resolve({version: result})
                            deleteCache(result.list).then(list => resolve({
                                    update: list.filter(it => it),
                                    version: result.version
                                })
                            )
                        })
                    })
                else console.error(`加载 update.json 时遇到异常，状态码：${response.status}`)
            })
        )
    }

    /** 版本列表 */
    class VersionList {

        _list = []
        refresh = false

        push(element) {
            this._list.push(element)
        }

        clean(element = null) {
            this._list.length = 0
            if (!element) this.push(element)
        }

        match(url) {
            if (this.refresh) return true
            else {
                for (let it of this._list) {
                    if (it.match(url)) return true
                }
            }
            return false
        }

    }

    /**
     * 缓存更新匹配规则表达式
     * @param json 格式{"flag": ..., "value": ...}
     * @see https://kmar.top/posts/bcfe8408/#JSON格式
     */
    class CacheChangeExpression {

        constructor(json) {
            const checkCache = url => {
                const cache = findCache(new URL(url))
                return !cache || cache.clean
            }
            /**
             * 遍历所有value
             * @param action {function(string): boolean} 接受value并返回bool的函数
             * @return {boolean} 如果value只有一个则返回`action(value)`，否则返回所有运算的或运算（带短路）
             */
            const forEachValues = action => {
                const value = json.value
                if (Array.isArray(value)) {
                    for (let it of value) {
                        if (action(it)) return true
                    }
                    return false
                } else return action(value)
            }
            switch (json['flag']) {
                case 'all':
                    this.match = checkCache
                    break
                case 'html':
                    this.match = url => url.href.match(/(\/|\/index\.html)$/)
                    break
                case 'page':
                    this.match = url => forEachValues(
                        value => url.endsWith(`/${value}/`) || url.endsWith(`/${value}/index.html`)
                    )
                    break
                case 'file':
                    this.match = url => forEachValues(value => url.endsWith(value))
                    break
                case 'str':
                    this.match = url => forEachValues(value => url.includes(value))
                    break
                case 'reg':
                    this.match = url => forEachValues(value => url.match(new RegExp(value, 'i')))
                    break
                default: throw `未知表达式：${JSON.stringify(json)}`
            }
        }

    }
})()