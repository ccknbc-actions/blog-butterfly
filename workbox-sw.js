importScripts('https://jsd.cdn.zzko.cn/npm/workbox-sw/build/workbox-sw.js');
importScripts('https://cdn.webpushr.com/sw-server.min.js');

if (workbox) {
    console.log('workbox加载成功🎉');
} else {
    console.log('workbox加载失败😬');
}

workbox.setConfig({
    debug: true,
});

// self.__WB_DISABLE_DEV_LOGS = true;

workbox.core.setCacheNameDetails({
    prefix: 'CC的部落格',
    suffix: '缓存',
    precache: '离线后备',
    runtime: '运行时',
    googleAnalytics: '谷歌分析'
});

self.addEventListener('install', async () => {
    await self.skipWaiting()
})

self.addEventListener('activate', async () => {
    await self.clients.claim()
})

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
    ignoreUrlParametersMatching: [/.*/],
    directoryIndex: null,
});

workbox.precaching.cleanupOutdatedCaches();

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

// 综合后备
// workbox.routing.setDefaultHandler(
//     new workbox.strategies.NetworkOnly({
//         networkTimeoutSeconds: 5
//     })
// );
// workbox.recipes.offlineFallback();

// 导航预加载
workbox.navigationPreload.enable();
// const navigationRoute = new workbox.routing.NavigationRoute(new workbox.strategies.NetworkOnly({
//     cacheName: '导航预加载',
//     plugins: [
//         new workbox.expiration.ExpirationPlugin({
//             maxEntries: 10,
//             maxAgeSeconds: 60
//         }),
//         new workbox.cacheableResponse.CacheableResponsePlugin({
//             statuses: [0, 200]
//         })
//     ]
// }));
// workbox.routing.registerRoute(navigationRoute);

// 一些缓存小策略预设
// workbox.recipes.pageCache();
// workbox.recipes.googleFontsCache();
// workbox.recipes.staticResourceCache();
// workbox.recipes.imageCache();
// workbox.recipes.offlineFallback();

// 暖策略（运行时）缓存
// const strategy = new workbox.strategies.StaleWhileRevalidate();
// const urls = [
//     '/offline/index.html', '/favicon.ico'
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
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);
// 谷歌字体
workbox.recipes.googleFontsCache();

workbox.routing.registerRoute(
    new RegExp('^https://(?:fonts\\.googleapis\\.com|fonts\\.gstatic\\.com)'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: '谷歌字体',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            }),
        ],
    })
);

// 图片/网页
workbox.routing.registerRoute(
    new RegExp('.*.(?:png|jpg|jpeg|svg|gif|webp|html)'),
    new workbox.strategies.NetworkOnly()
);

// json
workbox.routing.registerRoute(
    new RegExp('.*.(?:json)'),
    new workbox.strategies.NetworkFirst()
);

// 静态资源
workbox.routing.registerRoute(
    new RegExp('.*.(?:css|js)'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: '静态资源',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 7
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 离线谷歌分析
// workbox.googleAnalytics.initialize();