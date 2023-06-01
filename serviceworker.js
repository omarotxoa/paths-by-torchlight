self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("pwa-assets").then(cache => {
            return cache.addAll([
                "./", 
                // "./main.js",
                // "form.js", 
                // "develop.html", 
                "./img/icon-48.png", 
                "./img/icon-96.png",  
                "./img/icon-256.png", 
                "./img/icon-512.png",
            ]);
        })
    ); 
 });

 self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
 });