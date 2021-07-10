// importScripts("https://cdn.webpushr.com/sw-server.min.js");
importScripts('https://cdn.jsdelivr.net/npm/workbox-sw/build/workbox-sw.js');

workbox.core.setCacheNameDetails({
  prefix: "CC的部落格"
});

self.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST,{
  directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// workbox.googleAnalytics.initialize();