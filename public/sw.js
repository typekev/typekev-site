if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/135-537b26e396b40870.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/19c89501.d8576690483a0048.js",revision:"d8576690483a0048"},{url:"/_next/static/chunks/245-bba156ec3283d6f1.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/2c7bdfb3-a7129bef820ac5c7.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/4e8ac0ea-7b71458805e1cf04.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/56cd4e49-ba047ef50570442c.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/59c7669b.c61f03b67b5bd93e.js",revision:"c61f03b67b5bd93e"},{url:"/_next/static/chunks/68ad62ac.3c7fb2b7e1db68f8.js",revision:"3c7fb2b7e1db68f8"},{url:"/_next/static/chunks/6d9db148.e38b9eda1c1a8b77.js",revision:"e38b9eda1c1a8b77"},{url:"/_next/static/chunks/7b5698cc.07b8fdae1ff4a7e1.js",revision:"07b8fdae1ff4a7e1"},{url:"/_next/static/chunks/8065e23b.d93558988a9b4513.js",revision:"d93558988a9b4513"},{url:"/_next/static/chunks/825079ae.946f1de58793ff73.js",revision:"946f1de58793ff73"},{url:"/_next/static/chunks/86cc6189.1bccc3959da29e58.js",revision:"1bccc3959da29e58"},{url:"/_next/static/chunks/8a57ce4b.73a8d9b7cb515521.js",revision:"73a8d9b7cb515521"},{url:"/_next/static/chunks/8ccde698.a96ae2115d6f25e6.js",revision:"a96ae2115d6f25e6"},{url:"/_next/static/chunks/957.cbdb3bd5b570d0e0.js",revision:"cbdb3bd5b570d0e0"},{url:"/_next/static/chunks/964-3e065c901be80594.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/967.026293680020b70d.js",revision:"026293680020b70d"},{url:"/_next/static/chunks/a01974ca.d9c36862df821461.js",revision:"d9c36862df821461"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-cd688c0cbb5f55d0.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-9fbeaf9f80ea2f13.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/app/_not-found/page-f0aebc9c56ddb603.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/b32a722f.cda2d8762cd3f0e9.js",revision:"cda2d8762cd3f0e9"},{url:"/_next/static/chunks/dbb14f29.0f8c09b554dfc36f.js",revision:"0f8c09b554dfc36f"},{url:"/_next/static/chunks/e241cb6a.7cf45192048819e4.js",revision:"7cf45192048819e4"},{url:"/_next/static/chunks/e409566d.aa99363f210bdbb4.js",revision:"aa99363f210bdbb4"},{url:"/_next/static/chunks/e8764e8f.b6129644093b7abf.js",revision:"b6129644093b7abf"},{url:"/_next/static/chunks/framework-ded83d71b51ce901.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/main-9a97fc210e7788bf.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/main-app-932f0344aecbd58f.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/pages/_app-7cd14abca358ce4b.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/pages/_error-828586a05ec74581.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-1f12860aad8736d8.js",revision:"nVI3w7pfVtHE6v6-M5KN2"},{url:"/_next/static/css/c8557e39847f067e.css",revision:"c8557e39847f067e"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/4489c60a5712b87e-s.p.woff2",revision:"8e4c42865a2ec4f3a6d7bd34349ed3c9"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/_next/static/media/7108afb8b1381ad1-s.p.woff2",revision:"d5a9cbc34d22ffd5c4eb636dcca02f5d"},{url:"/_next/static/media/7db6c35d839a711c-s.p.woff2",revision:"de2b6fe4e663c0669007e5b501c2026b"},{url:"/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/_next/static/media/8d346445d24062b5-s.woff2",revision:"c965abed1310982a4d2148cb81765b56"},{url:"/_next/static/media/9241e91d2768972f-s.woff2",revision:"cee6d00de4ddc24939240f139e37573a"},{url:"/_next/static/media/94575ae3783e7c88-s.woff2",revision:"a56bc9adab4ad49a6e6d19f72ac23bc0"},{url:"/_next/static/media/9e82d62334b205f4-s.p.woff2",revision:"1c2ea932e7620e3a752301d0e54d3d91"},{url:"/_next/static/media/cfaa46c318124433-s.woff2",revision:"ca32cb52c1a2325b40e299668056bb35"},{url:"/_next/static/media/dfa2ccbeca9e77a8-s.woff2",revision:"4d88c8f550833714f8721257780b9000"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/f5767adec246cdc1-s.woff2",revision:"7a1c6501aa2b3327c1cf556362a851cb"},{url:"/_next/static/media/f7099cae2a5aa83f-s.woff2",revision:"8717ab2d20ae5ec51c6ac277e0331511"},{url:"/_next/static/media/v1.352e6b3c.jpeg",revision:"08b9e7a3f196ac41f667e3fe6e7f7d9e"},{url:"/_next/static/media/v2.3fe1aa76.jpeg",revision:"48885e471f137c1c944ad0a9a361dd07"},{url:"/_next/static/media/v3.ec9a8ce1.jpeg",revision:"6b4d5e739891cc4107aa807360d39d2b"},{url:"/_next/static/media/v4.7234091e.jpeg",revision:"89dffe9decb81226c5bd0c5845df5b68"},{url:"/_next/static/nVI3w7pfVtHE6v6-M5KN2/_buildManifest.js",revision:"3d77e3a2679170ac3f1b6fb6300963b6"},{url:"/_next/static/nVI3w7pfVtHE6v6-M5KN2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"d45bf3488b5ffb44697e3e97a0e05be6"},{url:"/android-chrome-512x512.png",revision:"23550614781c88ea12244c12e6b32e79"},{url:"/apple-touch-icon.png",revision:"e08f6bd787c8dc92e50437326282a84d"},{url:"/black-hole.glb",revision:"eb1facf696850ac67f1978e5ac1b4fad"},{url:"/favicon.ico",revision:"9a1d76f924cfb38ad5614a5b3de5b416"},{url:"/favicon.svg",revision:"82f30eea781fb68209c6e405f1379256"},{url:"/robots.txt",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/site.webmanifest",revision:"c94849545da4b8774f7d98c278c5a4d9"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
