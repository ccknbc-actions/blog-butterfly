// 这个文件中所有“module.exports.cacheList”都会被替换为“const cacheList”
// 同理，“module.exports.replaceList”会被替换为“const replaceList”
// 请勿在非声明的位置使用这两个字符串，否则会被替换掉

/**
 * 缓存列表
 * @param clean 清理全站时是否删除其缓存
 * @param match 匹配规则
 */
module.exports.cacheList = {
    // 这个 [simple] 就是规则的名称，该对象下可以包含多个规则，名称不影响缓存匹配
    // 缓存匹配时按声明顺序进行匹配
    simple: {
        // [clean] 项用于声明符合该规则的缓存在进行全局清理时是否清除
        // 如果你无法确定是否需要声明为 false 的话写 true 即可
        clean: true,
        // 该项用于匹配缓存，传入的参数是 URL 类型的，返回一个 boolean
        match: url => url.pathname.match(/\.(woff2|woff|ttf|cur)$/)
    }
}

/**
 * 链接替换列表
 * @param source 源链接
 * @param dist 目标链接
 */
module.exports.replaceList = {
    // 这里 [jsd] 同样是规则名，该对象下可以包含多个规则，规则名不会影响匹配
    // 匹配时按声明顺序匹配，当查询到相符合的规则后不会停止，会继续匹配
    // 每一次 URL 的匹配和替换都基于上一次替换的结果
    // 下面这个例子是把所有 jsd 的链接都重定向到甜莉的反代
    jsd: {
        source: ['//cdn.jsdelivr.net', '//test1.jsdelivr.net', '//gcore.jsdelivr.net'],
        dist: '//cdn.jsdelivr.ren'
    }
}
