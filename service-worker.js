//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v2';

//Add list of files to cache here.
const FILES_TO_CACHE = [
  'index.html',
  'stats.html',
  'animaux.html',
  'form.js',
  'install.js'
  ];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker]Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');

  //Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key)
        }
      }));
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);

  //Add fetch event handler here.
  if (evt.request.mode !== 'navigate') {
    return;
  }
  evt.respondWith(
    fetch(evt.request).catch(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match('/TP3inte/offline.html')
      })
    })
  )
});