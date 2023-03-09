importScripts('https://cdn.jsdelivr.ren/npm/workbox-sw/build/workbox-sw.js');
importScripts('https://cdn.webpushr.com/sw-server.min.js');

if (workbox) {
    console.log('workbox loaded success🎉');
} else {
    console.log('workbox loaded fail😬');
}

self.addEventListener('install', async () => {
    await self.skipWaiting()
})

self.addEventListener('activate', async () => {
    await self.clients.claim()
})

// self.__WB_DISABLE_DEV_LOGS = true;

workbox.core.setCacheNameDetails({
    prefix: 'CC',
    // suffix: '缓存',
    precache: '预缓存',
    runtime: '运行时',
    googleAnalytics: '谷歌分析'
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
    ignoreUrlParametersMatching: [/.*/],
    directoryIndex: null,
});

workbox.precaching.cleanupOutdatedCaches();

const MIN = 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

// workbox.recipes.googleFontsCache();
// workbox.recipes.staticResourceCache();
// workbox.recipes.imageCache();
// workbox.recipes.offlineFallback();
// workbox.recipes.pageCache();
// workbox.googleAnalytics.initialize();

// 导航预加载
workbox.navigationPreload.enable();

// 离线后备
const Offline = new workbox.routing.Route(({ request }) => {
    return request.mode === 'navigate';
}, new workbox.strategies.NetworkOnly({
    plugins: [
        new workbox.precaching.PrecacheFallbackPlugin({
            fallbackURL: '/offline/index.html'
        })
    ]
}));
workbox.routing.registerRoute(Offline);

// const CACHE_NAME = '离线后备';
// const FALLBACK_URL = '/offline/index.html';
// self.addEventListener('install', async (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => cache.add(FALLBACK_URL))
//     );
// });
// const networkOnly = new workbox.strategies.NetworkOnly();
// const navigationHandler = async (params) => {
//     try {
//         return await networkOnly.handle(params);
//     } catch (error) {
//         return caches.match(FALLBACK_URL, {
//             cacheName: CACHE_NAME,
//         });
//     }
// };
// workbox.routing.registerRoute(
//     new workbox.routing.NavigationRoute(navigationHandler)
// );


// 一些缓存小策略预设
// workbox.recipes.pageCache();
// workbox.recipes.googleFontsCache();
// workbox.recipes.staticResourceCache();
// workbox.recipes.imageCache();
// workbox.recipes.offlineFallback();

// 暖策略（运行时）缓存
// const strategy = new workbox.strategies.StaleWhileRevalidate();
// const urls = [
//     '/favicon.ico'
// ];
// workbox.recipes.warmStrategyCache({ urls, strategy });

// 字体
workbox.routing.registerRoute(
    new RegExp('.*.(?:woff2)'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "其他字体",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: MONTH
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('^https://(?:fonts\\.googleapis\\.com|fonts\\.gstatic\\.com)'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: '谷歌字体',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: MONTH
            }),
        ],
    })
);

// 图片/网页
workbox.routing.registerRoute(
    new RegExp('.*.(?:png|jpg|jpeg|svg|gif|webp)'),
    new workbox.strategies.NetworkOnly()
);

// json
// workbox.routing.registerRoute(
//     new RegExp('.*.(?:json)'),
//     new workbox.strategies.StaleWhileRevalidate({
//         cacheName: '网络资源',
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 10,
//                 maxAgeSeconds: DAY
//             }),
//             new workbox.cacheableResponse.CacheableResponsePlugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );

// 静态资源
workbox.routing.registerRoute(
    new RegExp('.*.(?:css|js|ico)'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: '静态资源',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: WEEK
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 离线谷歌分析
// workbox.googleAnalytics.initialize();