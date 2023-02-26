const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
   'index.html',
   'offline.html'
];

//Install SW
self.addEventListener('install', function(event) {
   // Perform install steps
   event.waitUntil(
       caches.open(CACHE_NAME)

         .then(function(cache) {
             console.log('Opened cache');
               return cache.addAll(urlsToCache);
         })
   );
});

//listen request
// self.addEventListener('fetch', function(event) {
//    // Perform listen steps
 
// });
// //activate the SW
// self.addEventListener('activate', function(event) {
//    // Perform active steps
  
// });