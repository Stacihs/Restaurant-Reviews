const cacheName = 'v1';

const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/media_queries.css',
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js'
];

//Install service worker
self.addEventListener('install', event => {
    console.log('installed');
    //add cache file
    event.waitUntil(caches.open(cacheName).then(cache => {
            console.log('cached');
            return cache.addAll(cacheFiles);
        })
        // .then(() => self.skipWaiting())
    );
});

//Activate service worker
self.addEventListener('activate', event => {
    console.log('activated');
});

//Fetch cached files
self.addEventListener('fetch', event => {
    console.log('fetching');
    event.respondWith(caches.match(event.request)
     .then(response => {
         return response || fetch(event.request);
     })
    );
});

