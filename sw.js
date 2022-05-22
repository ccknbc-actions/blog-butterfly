importScripts('https://cdn1.tianli0.top/npm/workbox-sw/build/workbox-sw.js');

workbox.core.setCacheNameDetails({
  prefix: "CC的部落格"
});

self.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST,{
  directoryIndex: null
});

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
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
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

workbox.precaching.cleanupOutdatedCaches();

// workbox.googleAnalytics.initialize();

const CACHE_NAME = 'CDNCache';
let cachelist = [];
self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cachelist);
            })
    );
});
self.addEventListener('fetch', async event => {
    try {
        event.respondWith(handle(event.request))
    } catch (msg) {
        event.respondWith(handleerr(event.request, msg))
    }
});
const handleerr = async (req, msg) => {
    return new Response(`<h1>CDN分流器遇到了致命错误</h1>
    <b>${msg}</b>`, { headers: { "content-type": "text/html; charset=utf-8" } })
}
let cdn = {
    "gh": {
        jsdelivr_fastly: {
            "url": "https://fastly.jsdelivr.net/gh"
        },
        jsdelivr_gcore: {
            "url": "https://gcore.jsdelivr.net/gh"
        },
        jsdelivr_cloudflare: {
            "url": "https://test1.jsdelivr.net/gh"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/gh"
        }
    },
    "combine": {
        jsdelivr_fastly: {
            "url": "https://fastly.jsdelivr.net/combine"
        },
        jsdelivr_gcore: {
            "url": "https://gcore.jsdelivr.net/combine"
        },
        jsdelivr_cloudflare: {
            "url": "https://test1.jsdelivr.net/combine"
        },
        pigax_jsd: {
            "url": "https://u.pigax.cn/combine"
        },
        pigax_chenyfan_jsd: {
            "url": "https://cdn-jsd.pigax.cn/combine"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/combine"
        }
    },
    "npm": {
        eleme: {
            "url": "https://npm.elemecdn.com"
        },
        jsdelivr_fastly: {
            "url": "https://fastly.jsdelivr.net/npm"
        },
        jsdelivr_gcore: {
            "url": "https://gcore.jsdelivr.net/npm"
        },
        jsdelivr_cloudflare: {
            "url": "https://test1.jsdelivr.net/npm"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/npm"
        }
    }
}
const handle = async function (req) {
    const urlStr = req.url
    const domain = (urlStr.split('/'))[2]
    let urls = []
    for (let i in cdn) {
        for (let j in cdn[i]) {
            if (domain == cdn[i][j].url.split('https://')[1].split('/')[0] && urlStr.match(cdn[i][j].url)) {
                urls = []
                for (let k in cdn[i]) {
                    urls.push(urlStr.replace(cdn[i][j].url, cdn[i][k].url))
                }
                if (urlStr.indexOf('@latest/') > -1) {
                    return lfetch(urls, urlStr)
                } else {
                    return caches.match(req).then(function (resp) {
                        return resp || lfetch(urls, urlStr).then(function (res) {
                            return caches.open(CACHE_NAME).then(function (cache) {
                                cache.put(req, res.clone());
                                return res;
                            });
                        });
                    })
                }
            }
        }
    }
    return fetch(req)
}
const lfetch = async (urls, url) => {
    let controller = new AbortController();
    const PauseProgress = async (res) => {
        return new Response(await (res).arrayBuffer(), { status: res.status, headers: res.headers });
    };
    if (!Promise.any) {
        Promise.any = function (promises) {
            return new Promise((resolve, reject) => {
                promises = Array.isArray(promises) ? promises : []
                let len = promises.length
                let errs = []
                if (len === 0) return reject(new AggregateError('All promises were rejected'))
                promises.forEach((promise) => {
                    promise.then(value => {
                        resolve(value)
                    }, err => {
                        len--
                        errs.push(err)
                        if (len === 0) {
                            reject(new AggregateError(errs))
                        }
                    })
                })
            })
        }
    }
    return Promise.any(urls.map(urls => {
        return new Promise((resolve, reject) => {
            fetch(urls, {
                signal: controller.signal
            })
                .then(PauseProgress)
                .then(res => {
                    if (res.status == 200) {
                        controller.abort();
                        resolve(res)
                    } else {
                        reject(res)
                    }
                })
        })
    }))
}