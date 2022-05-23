importScripts('https://npm.elemecdn.com/workbox-sw/build/workbox-sw.js');

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
    prefix: 'CC的部落格'
    // suffix: 'v1',
    // precache: 'custom-precache-name',
    // runtime: 'custom-runtime-name',
    // googleAnalytics: 'custom-google-analytics-name'
});

//直接激活跳过等待阶段
self.skipWaiting();
workbox.core.clientsClaim();

// 预缓存
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
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

// CDN
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'assets',
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
        cacheName: 'assets',
        plugins: [
            // Ensure that only requests that result in a 200 status are cached
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    }),
);

// Catch routing errors, like if the user is offline
// setCatchHandler(async ({ event }) => {
//     // Return the precached offline page if a document is being requested
//     if (event.request.destination === 'document') {
//         return matchPrecache('/404.html');
//     }
//     return Response.error();
// });

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