self.addEventListener('install', event => {
    console.log('Service Worker instalado');
    event.waitUntil(
        caches.open('pwa-cache').then(cache => {
            return cache.addAll([
                '/',
                '/manifest.json',
                '/index.html',
                '/styles/formLogin.css',
                '/js/main.js'
            ]).catch(err => {
                console.error('Falha ao adicionar arquivos ao cache:', err);
            });
        }).catch(err => {
            console.error('Falha ao abrir o cache:', err);
        })
    );
});
