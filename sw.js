importScripts('https://cdn.jsdelivr.net/npm/workbox-sw/build/workbox-sw.js');

if (workbox) {
    console.log('workbox加载成功🎉');
} else {
    console.log('workbox加载失败😬');
}

// Force development builds
// workbox.setConfig({ debug: true });

// Force production builds 关闭控制台中的输出
// workbox.setConfig({ debug: false });

// self.__WB_DISABLE_DEV_LOGS = true;

//设置缓存cachestorage的名称
workbox.core.setCacheNameDetails({
    prefix: 'CC的部落格',
    // suffix: 'v1',
    precache: '预缓存',
    runtime: '运行时间',
    googleAnalytics: '谷歌分析'
});

//直接激活跳过等待阶段
self.skipWaiting();
workbox.core.clientsClaim();

// 预缓存
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
// workbox.routing.registerRoute(
//     /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
//     new workbox.strategies.CacheFirst({
//         cacheName: "images",
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 1000,
//                 maxAgeSeconds: 60 * 60 * 24 * 30
//             }),
//             new workbox.cacheableResponse.CacheableResponsePlugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );

// CDN
// workbox.routing.registerRoute(
//     /\.(?:js|css|json)$/,
//     new workbox.strategies.CacheFirst({
//         cacheName: 'assets',
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 1000,
//                 maxAgeSeconds: 60 * 60 * 24 * 30
//             }),
//             new workbox.cacheableResponse.CacheableResponsePlugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
workbox.routing.registerRoute(
    // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
    ({ request }) =>
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'worker',
    // Use a Stale While Revalidate caching strategy
    new workbox.strategies.StaleWhileRevalidate({
        // Put all cached files in a cache named 'assets'
        cacheName: '静态资源',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24,
                purgeOnQuotaError: true
            }),
            // Ensure that only requests that result in a 200 status are cached
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    }),
);

// 如果用户处于离线状态，则返回缓存的离线页面的内容，而不是生成一个浏览器错误。
workbox.routing.setCatchHandler(async ({ event }) => {
    if (event.request.destination === 'document') {
        return matchPrecache('/404.html');
    }
    return Response.error();
});

// Fonts
// workbox.routing.registerRoute(
//     /\.(?:eot|ttf|woff|woff2)$/,
//     new workbox.strategies.CacheFirst({
//         cacheName: "fonts",
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 1000,
//                 maxAgeSeconds: 60 * 60 * 24 * 30
//             }),
//             new workbox.cacheableResponse.CacheableResponsePlugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "谷歌字体样式"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: '谷歌字体',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30,
                purgeOnQuotaError: true
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
// workbox.routing.registerRoute(
//     /^https:\/\/cdn\.jsdelivr\.net/,
//     new workbox.strategies.CacheFirst({
//         cacheName: "static-libs",
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 1000,
//                 maxAgeSeconds: 60 * 60 * 24 * 30
//             }),
//             new workbox.cacheableResponse.CacheableResponsePlugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );

// workbox.googleAnalytics.initialize();

const cdn = {
    gh: {
        jsdelivr: 'https://cdn.jsdelivr.net/gh',
        fastly: 'https://fastly.jsdelivr.net/gh',
        gcore: 'https://gcore.jsdelivr.net/gh',
        testingcf: 'https://testingcf.jsdelivr.net/gh',
        test1: 'https://test1.jsdelivr.net/gh'
    },
    combine: {
        jsdelivr: 'https://cdn.jsdelivr.net/combine',
        fastly: 'https://fastly.jsdelivr.net/combine',
        gcore: 'https://gcore.jsdelivr.net/combine',
        testingcf: 'https://testingcf.jsdelivr.net/combine',
        test1: 'https://test1.jsdelivr.net/combine'
    },
    npm: {
        jsdelivr: 'https://cdn.jsdelivr.net/npm',
        fastly: 'https://fastly.jsdelivr.net/npm',
        gcore: 'https://gcore.jsdelivr.net/npm',
        testingcf: 'https://testingcf.jsdelivr.net/npm',
        test1: 'https://test1.jsdelivr.net/npm',
        unpkg: 'https://unpkg.com'
    }
}

// self.addEventListener('install', async () => {
//     await self.skipWaiting()
// })

// self.addEventListener('activate', async () => {
//     await self.clients.claim()
// })

self.addEventListener('fetch', async (event) => {
    try {
        // 如果用户当前网速慢，或是开启了省流模式，则不使用sw处理请求
        const nav = navigator
        const { saveData, effectiveType } = nav.connection || nav.mozConnection || nav.webkitConnection || {}
        if (saveData || /2g/.test(effectiveType)) return

        // 劫持请求
        event.respondWith(handleRequest(event.request))
        // eslint-disable-next-line
    } catch (e) { }
})

// 返回响应
async function progress(res) {
    return new Response(await res.arrayBuffer(), {
        status: res.status,
        headers: res.headers
    })
}

function handleRequest(req) {
    const urls = []
    const urlStr = req.url
    let urlObj = new URL(urlStr)
    // 为了获取 cdn 类型
    // 例如获取gh (https://cdn.jsdelivr.net/gh)
    const path = urlObj.pathname.split('/')[1]

    // 匹配 cdn
    for (const type in cdn) {
        if (type === path) {
            for (const key in cdn[type]) {
                const url = cdn[type][key] + urlObj.pathname.replace('/' + path, '')
                urls.push(url)
            }
        }
    }

    // 如果上方 cdn 遍历 匹配到 cdn 则直接统一发送请求
    if (urls.length) return fetchAny(urls)
    throw new Error('failure')
}

// Promise.any 的 polyfill
function createPromiseAny() {
    Promise.any = function (promises) {
        return new Promise((resolve, reject) => {
            promises = Array.isArray(promises) ? promises : []
            let len = promises.length
            let errs = []
            if (len === 0) return reject(new AggregateError('All promises were rejected'))
            promises.forEach((p) => {
                if (p instanceof Promise) {
                    p.then(
                        (res) => resolve(res),
                        (err) => {
                            len--
                            errs.push(err)
                            if (len === 0) reject(new AggregateError(errs))
                        }
                    )
                } else {
                    reject(p)
                }
            })
        })
    }
}

// 发送所有请求
function fetchAny(urls) {
    // 中断一个或多个请求
    const controller = new AbortController()
    const signal = controller.signal

    // 遍历将所有的请求地址转换为promise
    const PromiseAll = urls.map((url) => {
        return new Promise((resolve, reject) => {
            fetch(url, { signal })
                .then(progress)
                .then((res) => {
                    const r = res.clone()
                    if (r.status !== 200) reject(null)
                    controller.abort() // 中断
                    resolve(r)
                })
                .catch(() => reject(null))
        })
    })

    // 判断浏览器是否支持 Promise.any
    if (!Promise.any) createPromiseAny()

    // 谁先返回"成功状态"则返回谁的内容，如果都返回"失败状态"则返回null
    return Promise.any(PromiseAll)
        .then((res) => res)
        .catch(() => null)
}
