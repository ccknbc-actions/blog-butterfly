importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
};

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