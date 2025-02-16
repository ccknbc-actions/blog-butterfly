importScripts("https://cdn.jsdmirror.com/npm/workbox-sw/build/workbox-sw.js");
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

// 监听网络状态变化
self.addEventListener('online', () => {
    console.log('网络已恢复，通知客户端刷新页面');
    self.clients.matchAll().then((clients) => {
        clients.forEach((client) => client.postMessage({ type: "refresh" }));
    });
});

self.__WB_DISABLE_DEV_LOGS = true;

workbox.precaching.cleanupOutdatedCaches();

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

const currentDomain = self.location.hostname;

const MIN = 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

// 定义主要CDN的URL
const mainCdnUrl = 'https://cdn.jsdmirror.com';

// 定义CDN镜像的URL列表
const fallbackCdnUrls = [
    'https://cdn.jsdmirror.cn',
    'https://ccknbc.cdn.xzzo.cn',
    'https://jsd.onmicrosoft.cn',
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

// 定义主站和备用站点的URL列表
const mainSiteUrl = 'https://blog.ccknbc.cc';
const backupSiteUrls = [
    'https://vercel.blog.ccknbc.cc',
    'https://cloudflare.blog.ccknbc.cc',
    'https://netlify.blog.ccknbc.cc',
    'https://github.blog.ccknbc.cc',
    'https://gitlab.blog.ccknbc.cc',
    'https://ccknbc.bitbucket.io'
];

// 函数用于判断是否为 CDN URL
function isCdnUrl(url, cdnList) {
    return cdnList.some(cdnUrl => url.startsWith(cdnUrl));
}

// 函数用于处理带有 CDN URL 的请求
async function handleCdnRequest(request, cdnList) {
    let failedUrls = [];

    for (const cdnUrl of cdnList) {
        if (!failedUrls.includes(cdnUrl)) {
            const fallbackRequest = new Request(cdnUrl + request.url.substring(request.url.indexOf('/', 8)));
            try {
                const response = await fetch(fallbackRequest, { cache: 'reload' });

                // 仅允许200、201、204（2xx）和304（3xx）
                if (response.ok || response.status === 304) {
                    return response;
                } else {
                    console.warn(`CDN请求无效: ${cdnUrl}, 状态码: ${response.status}`);
                    failedUrls.push(cdnUrl);
                }
            } catch (error) {
                console.error(`请求失败: ${cdnUrl}`, error);
                failedUrls.push(cdnUrl);
            }
        }
    }
    throw new Error('所有备用 CDN 镜像请求失败');
}

// 函数用于处理带有空引用的请求
function handleEmptyReferrer(request) {
    return fetch(request, { referrerPolicy: "no-referrer" });
}

// 函数用于处理主站请求
async function handleMainSiteRequest(request) {
    let failedUrls = [];

    for (const backupUrl of backupSiteUrls) {
        if (!failedUrls.includes(backupUrl)) {
            const fallbackRequest = new Request(backupUrl + request.url.substring(request.url.indexOf('/', 8)));
            try {
                const response = await fetch(fallbackRequest, { cache: 'reload' });
                if (response.ok) {
                    // 修改响应的 URL 为主站的 URL
                    const modifiedResponse = new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: response.headers
                    });
                    modifiedResponse.url = request.url;
                    return modifiedResponse;
                } else {
                    failedUrls.push(backupUrl);
                }
            } catch (error) {
                failedUrls.push(backupUrl);
            }
        }
    }
    throw new Error('所有备用站点请求失败');
}

// fetch 事件监听器
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    const domain = url.hostname;

    if (url.href.startsWith(mainSiteUrl)) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    // 如果主站请求成功，直接返回响应
                    if (response.ok) {
                        return response;
                    }
                    throw new Error('主站请求失败');
                })
                .catch(() => handleMainSiteRequest(request))
        );
    } else if (url.href.startsWith(mainCdnUrl)) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    // 如果主要CDN请求成功，直接返回响应
                    if (response.ok) {
                        return response;
                    }
                    throw new Error('主要CDN请求失败');
                })
                .catch(() => handleCdnRequest(request, fallbackCdnUrls))
        );
    } else if (isCdnUrl(url.href, invalidCdnUrls) || isCdnUrl(url.href, fallbackCdnUrls)) {
        event.respondWith(handleCdnRequest(request, fallbackCdnUrls));
    } else if (referrerDomains.includes(domain)) {
        event.respondWith(handleEmptyReferrer(request));
    }
});

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

// 缓存备用CDN资源
workbox.routing.registerRoute(
    ({ request }) => {
        const isCurrentDomain = request.url.includes(currentDomain);
        return !isCurrentDomain && (
            request.destination === 'style' ||
            request.destination === 'script' ||
            request.destination === 'font' ||
            request.destination === 'worker' ||
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
