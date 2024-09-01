importScripts("https://jsd.onmicrosoft.cn/npm/workbox-sw/build/workbox-sw.js");
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

self.__WB_DISABLE_DEV_LOGS = true;

// 定义CDN镜像的URL列表
const fallbackCdnUrls = [
    'https://jsd.onmicrosoft.cn',
    'https://cdn.jsdmirror.cn',
    'https://cdn.jsdmirror.com',
    'https://fastly.jsdelivr.net',
    'https://gcore.jsdelivr.net',
];

// 定义失效CDN镜像的URL列表
const invalidCdnUrls = [
    'https://cdn.jsdelivr.net',
    'https://cdn1.tianli0.top',
    'https://cdn.jsdelivr.ren',
    'https://cdn.chuqis.com',
    'https://cdn2.chuqis.com',
    'https://jsd.cdn.zzko.cn',
    'https://jsdelivr.goodboyboy.top',
];

// 定义空引用URL的域名列表
const referrerDomains = [
    'cdn.nlark.com',
    'pic1.afdiancdn.com',
    'f.video.weibocdn.com',
];

const MIN = 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

workbox.precaching.cleanupOutdatedCaches();

// 函数用于判断是否为 CDN URL
function isCdnUrl(url, cdnList) {
    return cdnList.some(cdnUrl => url.startsWith(cdnUrl));
}

async function handleCdnRequest(request, cdnList) {
    let failedUrls = [];

    const fallbackRequest = cdnList.reduce((acc, cdnUrl) => {
        if (!failedUrls.includes(cdnUrl)) {
            const fallbackRequest = new Request(cdnUrl + request.url.substring(request.url.indexOf('/', 8)));
            acc = acc.catch(async () => {
                try {
                    const response = await fetch(fallbackRequest, { cache: 'reload' });
                    if (response.ok) {
                        return response;
                    } else {
                        failedUrls.push(cdnUrl);
                        throw new Error('请求资源失败');
                    }
                } catch (error) {
                    failedUrls.push(cdnUrl);
                    throw new Error('所有备用 CDN 镜像请求失败');
                }
            });
        }
        return acc;
    }, Promise.reject());

    return fallbackRequest;
}

// 函数用于处理带有空引用的请求
function handleEmptyReferrer(request) {
    return fetch(request, { referrerPolicy: "no-referrer" });
}

async function raceCdnRequests(request, cdnList) {
    const promises = cdnList.map(cdnUrl => {
        const cdnRequest = new Request(cdnUrl + request.url.substring(request.url.indexOf('/', 8)));
        return fetch(cdnRequest).then(response => {
            if (response.ok) {
                return response;
            }
            throw new Error('请求资源失败');
        });
    });

    return Promise.race(promises);
}

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    const domain = url.hostname;

    if (isCdnUrl(url.href, invalidCdnUrls) || isCdnUrl(url.href, fallbackCdnUrls)) {
        event.respondWith(raceCdnRequests(request, fallbackCdnUrls).catch(() => handleCdnRequest(request, fallbackCdnUrls)));
    } else if (referrerDomains.includes(domain)) {
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

// 结合 NetworkOnly 和离线后备
const Offline = new workbox.routing.Route(
    ({ request }) => {
        return request.mode === "navigate";
    },
    new workbox.strategies.NetworkOnly({
        plugins: [
            new workbox.precaching.PrecacheFallbackPlugin({
                fallbackURL: "/offline/index.html",
            }),
        ],
    })
);
workbox.routing.registerRoute(Offline);

const currentDomain = self.location.hostname;

// 缓存备用CDN资源
workbox.routing.registerRoute(
    ({ request }) => {
        const isCurrentDomain = request.url.includes(currentDomain);
        return !isCurrentDomain && (
            request.destination === 'style' ||
            request.destination === 'script' ||
            request.destination === 'font' ||
            request.destination === 'worker' ||
            // request.url.includes('favicon') ||
            // request.url.includes('avatar') ||
            // request.url.includes('logo') ||
            request.url.endsWith('woff2')
        );
    },
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: '备用CDN资源',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 200,
                maxAgeSeconds: MONTH,
                purgeOnQuotaError: true
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    }),
);

// 缓存当前域名下的静态资源
workbox.routing.registerRoute(
    ({ request }) => {
        const isCurrentDomain = request.url.includes(currentDomain);
        return isCurrentDomain && (
            request.destination === 'style' ||
            request.destination === 'script' ||
            request.destination === 'worker' ||
            request.url.endsWith('/favicon.ico')
        );
    },
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: '静态资源',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: MONTH,
                purgeOnQuotaError: true
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    }),
);
