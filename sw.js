const CACHE_NAME = 'fifa-javi-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css',    // si usas archivo CSS separado
  // cualquier otro recurso (imágenes, scripts)
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
