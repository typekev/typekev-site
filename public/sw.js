if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1xHYKQnYeGpxy6n2pOVVa/_buildManifest.js",revision:"1ba6ee07d4cb4816227b93bb14864b8f"},{url:"/_next/static/1xHYKQnYeGpxy6n2pOVVa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e72c9cc-b847c33d8ee2bb6e.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/101.61dcccbbb692809a.js",revision:"61dcccbbb692809a"},{url:"/_next/static/chunks/221.38262728f7c44997.js",revision:"38262728f7c44997"},{url:"/_next/static/chunks/435.6f7fe2bdc273e09c.js",revision:"6f7fe2bdc273e09c"},{url:"/_next/static/chunks/460.7f2e805899c6eac4.js",revision:"7f2e805899c6eac4"},{url:"/_next/static/chunks/726-25f1e878aa933fb9.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/783-c715e263682f1dc1.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/834-f321260b9c3e904d.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-432fa9cbb4426917.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-0be7b6d97dede461.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/app/_not-found-9bf1d6048945ea10.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/b9b32b16-f55266366e81bd8b.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/d1509622-934c5fcf39e01d7e.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/framework-c25027af42eb8c45.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/main-1815ea9a578326a4.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/main-app-279dfdc0b0f9e65a.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/pages/_app-8d1e7357470aa0f0.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/pages/_error-1848e207554da5d9.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-43b7cc32fce70fe7.js",revision:"1xHYKQnYeGpxy6n2pOVVa"},{url:"/_next/static/css/4e5a18afcdfb44c2.css",revision:"4e5a18afcdfb44c2"},{url:"/_next/static/media/0662b626da5db789-s.woff2",revision:"7092f7117afa134bee383085e5baffcb"},{url:"/_next/static/media/10939feefdad71be-s.woff2",revision:"72b3ae37567ee5efdf2254b657c36ba9"},{url:"/_next/static/media/1b097aa12b72d9f9-s.woff2",revision:"ba40202b1c1dcacbdbb7bcd2042a410f"},{url:"/_next/static/media/1fe84a733deddad4-s.woff2",revision:"c9f346d5d19d0d10e27b26904f5f6d7f"},{url:"/_next/static/media/376dd8dc38524313-s.p.woff2",revision:"af4d371a10271dafeb343f1eace762bc"},{url:"/_next/static/media/3828f203592f7603-s.woff2",revision:"e9fd398a43c9e51f9ee14e757eaf95d9"},{url:"/_next/static/media/7a78f1ce0329757f-s.p.woff2",revision:"15ef609d3bea2ccc8a36910ba440e1f3"},{url:"/_next/static/media/8d1a51bb45dd4d14-s.woff2",revision:"185244e129c78b5a1e8de9b0319e5f93"},{url:"/_next/static/media/953974ac5e9ff354-s.woff2",revision:"6731e1ba3788bda094c89ee8fc131aef"},{url:"/_next/static/media/ac614beb32f7a7c2-s.woff2",revision:"20f5992a9c019fb146a38e1cc0c101d3"},{url:"/_next/static/media/aefc8ad6d88b3354-s.woff2",revision:"6a4298fc0390ec22c52f618daa0e82bf"},{url:"/_next/static/media/c04551857776278f-s.p.woff2",revision:"8d91ec1ca2d8b56640a47117e313a3e9"},{url:"/_next/static/media/d36a2a2bb416f59e-s.p.woff2",revision:"a7f7eebec745ef48ccf7a3d08c66d84a"},{url:"/_next/static/media/d869208648ca5469-s.p.woff2",revision:"72993dddf88a63e8f226656f7de88e57"},{url:"/_next/static/media/e025c64520263018-s.woff2",revision:"dc820d9f0f62811268590ff631f36be9"},{url:"/black-hole.glb",revision:"eb1facf696850ac67f1978e5ac1b4fad"},{url:"/icons/favicon.ico",revision:"99d4de21976c51e160e4c40d950dc285"},{url:"/manifest.json",revision:"83d61d9da7a0461db57be680653d6946"},{url:"/robots.txt",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
