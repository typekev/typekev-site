if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const r=e=>s(e,n),f={module:{uri:n},exports:t,require:r};a[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/QHiG4A41v_juRgEmaUAno/_buildManifest.js",revision:"deeb54465820d005c56b052c8df9aa3d"},{url:"/_next/static/QHiG4A41v_juRgEmaUAno/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/19c89501.94aff2a7965aa6e8.js",revision:"94aff2a7965aa6e8"},{url:"/_next/static/chunks/2c7bdfb3-e15eeabf294d803e.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/308.f6e273f1452ddff7.js",revision:"f6e273f1452ddff7"},{url:"/_next/static/chunks/399-af25b3b34faa5e83.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/480.1543ef6d925a8ac0.js",revision:"1543ef6d925a8ac0"},{url:"/_next/static/chunks/567.221e55cfe9bdcc47.js",revision:"221e55cfe9bdcc47"},{url:"/_next/static/chunks/598-ce96a01f3f32baec.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/59c7669b.945266479a8b7277.js",revision:"945266479a8b7277"},{url:"/_next/static/chunks/68ad62ac.fb7a3f42a2258e20.js",revision:"fb7a3f42a2258e20"},{url:"/_next/static/chunks/743-7235efbb26b21e6c.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/791cac4d.6e43dbe16b96c15b.js",revision:"6e43dbe16b96c15b"},{url:"/_next/static/chunks/7b5698cc.89cbc3bba8b8653e.js",revision:"89cbc3bba8b8653e"},{url:"/_next/static/chunks/8065e23b.8a9fab91100a63de.js",revision:"8a9fab91100a63de"},{url:"/_next/static/chunks/825079ae.d07fa1c22c4a21a5.js",revision:"d07fa1c22c4a21a5"},{url:"/_next/static/chunks/86cc6189.e6ea5f5d748753f3.js",revision:"e6ea5f5d748753f3"},{url:"/_next/static/chunks/8a57ce4b.089e8d8e96147c40.js",revision:"089e8d8e96147c40"},{url:"/_next/static/chunks/8ccde698.9c7fdec719fb662c.js",revision:"9c7fdec719fb662c"},{url:"/_next/static/chunks/966.8eab816a622f9961.js",revision:"8eab816a622f9961"},{url:"/_next/static/chunks/a01974ca.83bf73b44671d417.js",revision:"83bf73b44671d417"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-56529b0017ea379f.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-94fb9337904d9b9a.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/app/_not-found/page-c3c046a34680ad6f.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/b32a722f.aa365bbfc68980bb.js",revision:"aa365bbfc68980bb"},{url:"/_next/static/chunks/db406514-5b359cffd6251646.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/dbb14f29.57bbbce8ad9c0c9b.js",revision:"57bbbce8ad9c0c9b"},{url:"/_next/static/chunks/e241cb6a.63e6ffb3cfe76013.js",revision:"63e6ffb3cfe76013"},{url:"/_next/static/chunks/e409566d.632677b7ff7cbf3c.js",revision:"632677b7ff7cbf3c"},{url:"/_next/static/chunks/e8764e8f.e047a251af3a44b1.js",revision:"e047a251af3a44b1"},{url:"/_next/static/chunks/framework-ded83d71b51ce901.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/main-app-3989df2e75f4f731.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/main-e762949b4e9f44a4.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/pages/_app-32032a0a4b432897.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/pages/_error-86ef8741c4899909.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-e709f207aa15c17e.js",revision:"QHiG4A41v_juRgEmaUAno"},{url:"/_next/static/css/6c23d6a300ffd7e0.css",revision:"6c23d6a300ffd7e0"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/4489c60a5712b87e-s.p.woff2",revision:"8e4c42865a2ec4f3a6d7bd34349ed3c9"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/_next/static/media/7108afb8b1381ad1-s.p.woff2",revision:"d5a9cbc34d22ffd5c4eb636dcca02f5d"},{url:"/_next/static/media/7db6c35d839a711c-s.p.woff2",revision:"de2b6fe4e663c0669007e5b501c2026b"},{url:"/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/_next/static/media/8d346445d24062b5-s.woff2",revision:"c965abed1310982a4d2148cb81765b56"},{url:"/_next/static/media/9241e91d2768972f-s.woff2",revision:"cee6d00de4ddc24939240f139e37573a"},{url:"/_next/static/media/94575ae3783e7c88-s.woff2",revision:"a56bc9adab4ad49a6e6d19f72ac23bc0"},{url:"/_next/static/media/9e82d62334b205f4-s.p.woff2",revision:"1c2ea932e7620e3a752301d0e54d3d91"},{url:"/_next/static/media/cfaa46c318124433-s.woff2",revision:"ca32cb52c1a2325b40e299668056bb35"},{url:"/_next/static/media/dfa2ccbeca9e77a8-s.woff2",revision:"4d88c8f550833714f8721257780b9000"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/f5767adec246cdc1-s.woff2",revision:"7a1c6501aa2b3327c1cf556362a851cb"},{url:"/_next/static/media/f7099cae2a5aa83f-s.woff2",revision:"8717ab2d20ae5ec51c6ac277e0331511"},{url:"/_next/static/media/v1.352e6b3c.jpeg",revision:"08b9e7a3f196ac41f667e3fe6e7f7d9e"},{url:"/_next/static/media/v2.3fe1aa76.jpeg",revision:"48885e471f137c1c944ad0a9a361dd07"},{url:"/_next/static/media/v3.ec9a8ce1.jpeg",revision:"6b4d5e739891cc4107aa807360d39d2b"},{url:"/_next/static/media/v4.7234091e.jpeg",revision:"89dffe9decb81226c5bd0c5845df5b68"},{url:"/android-chrome-192x192.png",revision:"d45bf3488b5ffb44697e3e97a0e05be6"},{url:"/android-chrome-512x512.png",revision:"23550614781c88ea12244c12e6b32e79"},{url:"/apple-touch-icon.png",revision:"e08f6bd787c8dc92e50437326282a84d"},{url:"/black-hole.glb",revision:"eb1facf696850ac67f1978e5ac1b4fad"},{url:"/favicon.ico",revision:"9a1d76f924cfb38ad5614a5b3de5b416"},{url:"/favicon.svg",revision:"82f30eea781fb68209c6e405f1379256"},{url:"/robots.txt",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/site.webmanifest",revision:"88a6d53427e5db35086de1cdeb13a301"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
