importScripts("https://jsd.cdn.zzko.cn/npm/workbox-sw/build/workbox-sw.js");
importScripts("https://cdn.webpushr.com/sw-server.min.js");

if (workbox) {
    console.log("Workbox 加载成功🎉");
} else {
    console.log("Workbox 加载失败😬");
}

self.addEventListener("install", async () => {
    console.log("Service Worker 开始安装");
    await self.skipWaiting();
});

self.addEventListener("activate", async () => {
    console.log("Service Worker 安装完成，开始启动");
    await self.clients.claim();
});

self.__WB_DISABLE_DEV_LOGS = false;

workbox.core.setCacheNameDetails({
    prefix: "CC的部落格",
    suffix: "缓存",
    precache: "预先",
    runtime: "运行时",
    googleAnalytics: "离线谷歌分析",
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

// 导航预加载
workbox.navigationPreload.enable();

// 离线后备
const Offline = new workbox.routing.Route(
    ({ request }) => {
        return request.mode === "navigate";
    },
    new workbox.strategies.NetworkOnly({
        plugins: [
            new workbox.precaching.PrecacheFallbackPlugin({
                fallbackURL: "/offline/index.html",
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);
workbox.routing.registerRoute(Offline);

// 暖策略（运行时）缓存
const strategy = new workbox.strategies.StaleWhileRevalidate();
const urls = [
    '/favicon.ico'
];
workbox.recipes.warmStrategyCache({ urls, strategy });

// 字体
workbox.routing.registerRoute(
    ({ event }) => event.request.destination === 'font',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "字体",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: MONTH,
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);

// 图片/网页
workbox.routing.registerRoute(
    new RegExp(".*.(?:png|jpg|jpeg|svg|gif|webp|html)"),
    new workbox.strategies.NetworkOnly()
);

// json
workbox.routing.registerRoute(
    new RegExp(".*.(?:json)"),
    new workbox.strategies.NetworkFirst({
        cacheName: "网络资源",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: DAY,
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);

// 静态资源
workbox.routing.registerRoute(
    new RegExp(".*.(?:css|js)"),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "静态资源",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: WEEK,
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);

// 离线谷歌分析
// workbox.googleAnalytics.initialize();

// 拦截指定请求
// self.addEventListener("fetch", async (event) => {
//     console.log("运行中，拦截请求", event.request);
//     const url = new URL(event.request.url);
//     if (
//         url.pathname == "/favicon.ico" &&
//         url.searchParams.get("action") == "redirect"
//     ) {
//         // 拦截到后，处理业务再event.respondWith返回
//         request = new Request(
//             "https://jsd.cdn.zzko.cn/gh/CCKNBC/ccknbc.github.io@master/favicon.ico"
//         );
//         event.respondWith(fetch(request));
//     } else {
//         event.respondWith(fetch(event.request));
//     }
// });
