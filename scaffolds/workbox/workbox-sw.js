importScripts("https://cdn.chuqis.com/npm/workbox-sw/build/workbox-sw.js");
importScripts("https://cdn.webpushr.com/sw-server.min.js");

// 提示
if (workbox) {
    console.log("Workbox 加载成功🎉");
} else {
    console.log("Workbox 加载失败😬");
}

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
// self.__WB_DISABLE_DEV_LOGS = true;

// 定义CDN镜像的URL列表
const fallbackCdnUrls = [
    'https://cdn.chuqis.com',
    'https://cdn2.chuqis.com',
    'https://jsd.onmicrosoft.cn',
    'https://jsd.cdn.zzko.cn',
    'https://jsdelivr.goodboyboy.top'
];

// 定义失效CDN镜像的URL列表
const invalidCdnUrls = [
    'https://cdn.jsdelivr.ren',
    'https://cdn1.tianli0.top',
];

// 定义空引用URL的域名列表
const referrerDomains = [
    'cdn.nlark.com',
    'pic1.afdiancdn.com',
    'f.video.weibocdn.com',
    'api.icodeq.com'
];

// 定义缓存时间
const MIN = 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

workbox.precaching.cleanupOutdatedCaches();

// 函数用于判断是否为备用CDN URL
function isFallbackCdnUrl(url) {
    return fallbackCdnUrls.some(fallbackUrl => url.startsWith(fallbackUrl));
}

// 函数用于判断是否为失效CDN镜像站 URL
function isInvalidCdnUrl(url) {
    return invalidCdnUrls.some(invalidUrl => url.startsWith(invalidUrl));
}

// 使用StaleWhileRevalidate策略缓存备用CDN中的js、css和woff2资源
fallbackCdnUrls.forEach(fallbackUrl => {
    workbox.routing.registerRoute(
        new RegExp('^' + fallbackUrl + '.*\\.(?:js|css|woff|woff2)$'), // 匹配js、css、woff和woff2后缀的文件
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: "备用CDN资源",
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 50,
                    maxAgeSeconds: WEEK,
                    purgeOnQuotaError: true
                }),
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [200],
                }),
            ],
        })
    );
});

// 函数用于处理备用CDN请求
function handleFallbackCdn(request) {
    let failedUrls = [];

    const fallbackRequest = fallbackCdnUrls.reduce((acc, fallbackUrl) => {
        if (!failedUrls.includes(fallbackUrl)) {
            const fallbackRequest = new Request(fallbackUrl + request.url.substring(request.url.indexOf('/', 8)));
            acc = acc.catch(async () => {
                try {
                    const response = await fetch(fallbackRequest, { cache: 'reload' });
                    if (response.ok) {
                        return response;
                    } else {
                        failedUrls.push(fallbackUrl);
                        throw new Error('请求资源失败');
                    }
                } catch (error) {
                    failedUrls.push(fallbackUrl);
                    throw new Error('所有备用 CDN 镜像请求失败');
                }
            });
        }
        return acc;
    }, Promise.reject());

    return fallbackRequest;
}

// 函数用于判断是否为需要空引用URL的域名
function requiresEmptyReferrerDomain(domain) {
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

    if (isInvalidCdnUrl(url.href) || isFallbackCdnUrl(url.href)) {
        // 失效CDN镜像站逻辑，继续尝试备用CDN
        event.respondWith(handleFallbackCdn(request));
    }
    if (requiresEmptyReferrerDomain(domain)) {
        // 空引用URL逻辑
        event.respondWith(handleEmptyReferrer(request));
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
                statuses: [200],
            }),
        ],
    })
);
workbox.routing.registerRoute(Offline);

// busuanzi 请求走网络不缓存
workbox.routing.registerRoute(
    ({ url }) => String(url).includes('busuanzi?') || String(url).includes('busuanzi='),
    new workbox.strategies.NetworkOnly()
);

// 缓存静态资源
workbox.routing.registerRoute(
    ({ request }) =>
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'font' ||
        request.destination === 'worker' ||
        request.url.endsWith('/favicon.ico'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: '静态资源',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 20, // 最大缓存条目数
                maxAgeSeconds: WEEK, // 缓存时间
                purgeOnQuotaError: true
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200],
            }),
        ],
    }),
);
