importScripts("https://cdn2.chuqis.com/npm/workbox-sw/build/workbox-sw.js");
importScripts("https://cdn.webpushr.com/sw-server.min.js");

// 提示
if (workbox) {
    console.log("Workbox 加载成功🎉");
} else {
    console.log("Workbox 加载失败😬");
}

workbox.precaching.cleanupOutdatedCaches();

// 安装
self.addEventListener("install", async () => {
    await self.skipWaiting();
    console.log("Service Worker 开始安装🎊");
});

// 激活
self.addEventListener("activate", async () => {
    await self.clients.claim();
    console.log("Service Worker 安装完成，开始启动✨");
    self.clients.matchAll().then((clients) => {
        clients.forEach((client) => client.postMessage({ type: "refresh" }));
    });
});

// 控制台输出开关
self.__WB_DISABLE_DEV_LOGS = true;

const fallbackCdnUrls = [
    'https://cdn2.chuqis.com',
    'https://cdn.chuqis.com',
    'https://jsd.cdn.zzko.cn',
    'https://jsdelivr.goodboyboy.top'
];

// 函数用于判断是否为备用CDN URL
function isFallbackCdnUrl(url) {
    return fallbackCdnUrls.some(fallbackUrl => url.startsWith(fallbackUrl));
}

// 函数用于处理备用CDN请求
function handleFallbackCdn(request) {
    let failedUrls = [];

    const fallbackRequest = fallbackCdnUrls.reduce((acc, fallbackUrl) => {
        if (!failedUrls.includes(fallbackUrl)) {
            const fallbackRequest = new Request(fallbackUrl + request.url.substring(request.url.indexOf('/', 8)));
            acc = acc.catch(() => {
                failedUrls.push(fallbackUrl);
                return fetch(fallbackRequest, { cache: 'reload' });
            });
        }
        return acc;
    }, Promise.reject());

    return fallbackRequest;
}

// 函数用于判断是否为需要空引用URL的域名
function requiresEmptyReferrerDomain(domain) {
    const referrerDomains = [
        'cdn.nlark.com',
        'pic1.afdiancdn.com',
        'f.video.weibocdn.com',
        'api.icodeq.com'
    ];
    return referrerDomains.includes(domain);
}

// 函数用于处理带有空引用的请求
function handleEmptyReferrer(request) {
    return fetch(request, { referrerPolicy: "no-referrer" });
}

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    const domain = url.hostname;

    if (isFallbackCdnUrl(url.href)) {
        // 备用CDN逻辑
        event.respondWith(handleFallbackCdn(request));
    } else if (requiresEmptyReferrerDomain(domain)) {
        // 空引用URL逻辑
        event.respondWith(handleEmptyReferrer(request));
    } else {
        // 其他情况直接返回原始请求
        event.respondWith(fetch(request));
    }
});

// 缓存名称
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

