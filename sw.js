const CACHE_NAME = 'site-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style_combined_final.css',
  '/assets/thumbnail.webp',
  '/assets/babek-mamedrzaev-princessa.mp3',
  '/assets/Alexandros Tsopozidis-Kapkan.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
