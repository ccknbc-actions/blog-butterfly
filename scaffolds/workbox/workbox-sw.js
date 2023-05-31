importScripts("https://cdn1.tianli0.top/npm/workbox-sw/build/workbox-sw.js");
importScripts("https://cdn.webpushr.com/sw-server.min.js");

if (workbox) {
    console.log("Workbox 加载成功🎉");
} else {
    console.log("Workbox 加载失败😬");
}

workbox.precaching.cleanupOutdatedCaches();

self.addEventListener("install", async () => {
    await self.skipWaiting();
    console.log("Service Worker 开始安装🎊");
});

self.addEventListener("activate", async () => {
    await self.clients.claim();
    console.log("Service Worker 安装完成，开始启动✨");
});

self.__WB_DISABLE_DEV_LOGS = true;

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url)
    const domain = url.hostname

    if (domain === 'http://cdn.nlark.com' || domain === 'http://pic1.afdiancdn.com' || domain === 'http://f.video.weibocdn.com' || domain === 'http://api.icodeq.com') {
        event.respondWith(
            fetch(event.request, {
                referrerPolicy: "no-referrer"
            })
        )
    }

    if (event.request.url.endsWith('/prompt/bell')) {
        event.respondWith(
            fetch('http://webpushr.com/prompt/bell', {
                mode: 'no-cors'
            })
        )
    }
})

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

workbox.routing.setDefaultHandler(new workbox.strategies.NetworkOnly());

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

// json
workbox.routing.registerRoute(
    ({ request }) => request.url.endsWith('.json'),
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

// busuanzi
workbox.routing.registerRoute(
    ({ url }) => String(url).includes('busuanzi?') || String(url).includes('busuanzi='),
    new workbox.strategies.NetworkOnly()
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

