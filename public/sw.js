if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const c=e=>i(e,n),o={module:{uri:n},exports:r,require:c};a[n]=Promise.all(s.map((e=>o[e]||c(e)))).then((e=>(t(...e),r)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/LarsRoettigCV.pdf",revision:"9c29b51fb3897c740b79a433165a2d8a"},{url:"/_next/static/RI60k_6j70fDwmPvGWvmi/_buildManifest.js",revision:"7ab5ffe3584e1abe2ffd17269883c16a"},{url:"/_next/static/RI60k_6j70fDwmPvGWvmi/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/RI60k_6j70fDwmPvGWvmi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/794.445b5c6efa197047.js",revision:"445b5c6efa197047"},{url:"/_next/static/chunks/962-de890351173623ae.js",revision:"de890351173623ae"},{url:"/_next/static/chunks/991-d046bf08a09d0c13.js",revision:"d046bf08a09d0c13"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-d4cc6c97c4f7d653.js",revision:"d4cc6c97c4f7d653"},{url:"/_next/static/chunks/pages/%5Bslug%5D-2ae9e41fc3d8c6e0.js",revision:"2ae9e41fc3d8c6e0"},{url:"/_next/static/chunks/pages/404-0137fb255ab0e157.js",revision:"0137fb255ab0e157"},{url:"/_next/static/chunks/pages/_app-4dfbdaaaddeff836.js",revision:"4dfbdaaaddeff836"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/about-7db9fc4b3e5d47e6.js",revision:"7db9fc4b3e5d47e6"},{url:"/_next/static/chunks/pages/imprint-65c2039a430b1618.js",revision:"65c2039a430b1618"},{url:"/_next/static/chunks/pages/index-00eabf3663729f4b.js",revision:"00eabf3663729f4b"},{url:"/_next/static/chunks/pages/privacy-statement-23601819d0ea1ce9.js",revision:"23601819d0ea1ce9"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-caf64d51a5326408.js",revision:"caf64d51a5326408"},{url:"/_next/static/css/867ebfb6ca2f5bf0.css",revision:"867ebfb6ca2f5bf0"},{url:"/_next/static/media/larsroettig-logo.ff2860a0.svg",revision:"6b65a3d8fa786d612d086578c6f58cb8"},{url:"/atom.xml",revision:"2f2db76b152dd38378c7f77960de8f7d"},{url:"/banner.jpg",revision:"cb3ab1883e9b4805eef6175393a96966"},{url:"/downloads/PWAStudio_PaymentFlow.jpg",revision:"8436ca0d0f44a66e08dea55fa2dd424c"},{url:"/downloads/pwa_studio_adyen_workflow.png",revision:"fd160e94062ca3263fd7ba0a48001ce7"},{url:"/gray.jpg",revision:"6ee0dd82c4dba6090235d0dcef83b39a"},{url:"/icons/android-chrome-192x192.png",revision:"d78ec55c6cc4bcdaa4b9dbbc5b670f86"},{url:"/icons/apple-touch-icon.png",revision:"708010fae9b07b528b9a470f52e92ce8"},{url:"/icons/favicon-16x16.png",revision:"69f7a5a1e386697202e6dd938d9cb532"},{url:"/icons/favicon-32x32.png",revision:"435071421904a01862d98290de68bf6e"},{url:"/icons/favicon.ico",revision:"b55314ede091fc8d35cbd4311acb845f"},{url:"/icons/icon-512x512.png",revision:"e7dd92c63a328dc3e38b18c3e200b2b2"},{url:"/icons/mstile-150x150.png",revision:"2f6d118aa88906df4ec86524bf747cb4"},{url:"/images/a-review-of-magento-pwa-studio/PWA_Studio_Teaser.jpg",revision:"7c65975598266ad3b76adeb4ba1c5272"},{url:"/images/about/Lars.jpg",revision:"14322278cc3cce51ae21682a49488b37"},{url:"/images/book-review-of-object/Review_Object_Design_Style_Guide.jpg",revision:"cfa7e3e924d172ce450d8188adf0ae21"},{url:"/images/enable-notify-magento-2/Teaser.jpg",revision:"4050bb89f3ee997183b45c21c1b2655a"},{url:"/images/enable-notify-magento-2/allow_alert_when_product_comes_back_in_Stock.jpg",revision:"503e2d81eaaad996b12a86e7c4a4a3e1"},{url:"/images/enable-notify-magento-2/display_out_of_stock_products_option.jpg",revision:"ef0b6126726dfa3d9498170e10bc6423"},{url:"/images/enable-notify-magento-2/magento2_notify_frontend.jpg",revision:"d74258048449a9d2bb6b3adcefdeb73c"},{url:"/images/enable-notify-magento-2/mail_backend.jpg",revision:"264800df52a14a270666f5ad1b5f5876"},{url:"/images/getting-started-with-magento-pwa-studio/Create_PWA.jpg",revision:"d61f9cc56a74fbda66133ae6246268fd"},{url:"/images/getting-started-with-magento-pwa-studio/FreeGiftMessage.jpg",revision:"6d91bf4e71b666ae93dc9c6bd7a88906"},{url:"/images/getting-started-with-magento-pwa-studio/PWA_Studio_Start_Teaser.jpg",revision:"4c1068ec52ecbbf9564c9834fe79b2f3"},{url:"/images/getting-started-with-software-quality/Allure.png",revision:"96d728921672919a0cf671291b772cd6"},{url:"/images/getting-started-with-software-quality/CostOfBugs.png",revision:"fddca09a38b315733311fc6aa60546fc"},{url:"/images/getting-started-with-software-quality/EconomicImpactsSoftwareTesting.png",revision:"5267127d2cd928f0d6df1368b26b93a8"},{url:"/images/getting-started-with-software-quality/Teaser.jpg",revision:"7bd613a038f73804619b724699967002"},{url:"/images/getting-started-with-software-quality/TestPyramid.jpg",revision:"299d60faad494dfc2e1c44776b54691e"},{url:"/images/getting-started-with-software-quality/businessman-3300907_1920.jpg",revision:"5c44d5c0969d4448e1e63f117cdb9a8f"},{url:"/images/how-i-learned-react/TeaserReact.jpg",revision:"d117b4039a77659d8d022396c13a69c8"},{url:"/images/how-to-create-a-graph-ql-endpoint/GrapQL_Query_Teaser.jpg",revision:"2b3d4fe2d1db245c37b08e816b2408bb"},{url:"/images/how-to-create-a-graph-ql-endpoint/GraphQL_Playground.jpg",revision:"4cbd147816395f3268022e2da78289a1"},{url:"/images/how-to-create-a-graph-ql-endpoint/store-984393_1920.jpg",revision:"7df8c0fd3c8938c3175a041ff341c3bc"},{url:"/images/how-to-create-a-graph-ql-mutation/GrapQL_Mutation_Teaser.jpg",revision:"9e4345a772c948f3869438ffa8a1b138"},{url:"/images/how-to-create-a-graph-ql-mutation/graphql-playground_mutation.jpg",revision:"6468c42fd84a9ef9aa58df78b2df2b39"},{url:"/images/how-to-create-payment-for-pwastudio/Extend_PaymentMethods.jpg",revision:"98bcf3d2263396868bf25a3c5b651b96"},{url:"/images/how-to-create-payment-for-pwastudio/PWAStudio_PaymentFlow.jpg",revision:"413c07f9915fe22161f465a9f7c556ed"},{url:"/images/how-to-create-payment-for-pwastudio/Teaser.jpg",revision:"6ce4f5e13d3039a2a32948d52567f527"},{url:"/images/how-to-write-proper-software-documentation/Software_Documentation_Teaser.jpg",revision:"c6d5b8c148a899e2a1be34d8fa2e72fc"},{url:"/images/how-to-write-proper-software-documentation/cupcake_sample.jpg",revision:"995bc5134e829af195339c16ed5b9441"},{url:"/images/larsroettig.jpg",revision:"8d5963e011f2ae12eb78a3b1600f58ba"},{url:"/images/larsroettig.png",revision:"f544ac3e33e1c22347b4544f2b434b3b"},{url:"/images/pwa-studio-extensibility-framework/Create_PWA.jpg",revision:"d61f9cc56a74fbda66133ae6246268fd"},{url:"/images/pwa-studio-extensibility-framework/Final_Module.jpg",revision:"e9dfb9ff331ee40efc4dcb07e931e141"},{url:"/images/pwa-studio-extensibility-framework/PWA_Studio_Extensibility_Teaser.jpg",revision:"8e10170f04d287cbd801ed0c3d879ac9"},{url:"/images/pwa-studio-extensibility-framework/demo.jpg",revision:"56080cfafee96682345515958e7c3206"},{url:"/images/react-advanced-london-2021/TeaserAdvanceReact.jpg",revision:"15e212b1dd03d58dae90192529d0e992"},{url:"/images/supporter/pacemaker-300x600.jpg",revision:"df81646ed165f605b344b6a784705566"},{url:"/images/supporter/pacemaker-728x90.jpg",revision:"1bd17f4bd16128c979b3e9851560146d"},{url:"/images/supporter/td-300x600.jpg",revision:"e23a05f5b64a6887d76a5b4e850eebf8"},{url:"/images/supporter/td-728x90.jpg",revision:"5814a8d340e00da36c5bbaf32d796a83"},{url:"/larsroettig-logo.svg",revision:"6b65a3d8fa786d612d086578c6f58cb8"},{url:"/manifest.json",revision:"9232d8c4b23f46ca0c75d33c8c06fd79"},{url:"/robots.txt",revision:"f2c14ff772587bab9032f4fc926bf8f5"},{url:"/rss.xml",revision:"5f5d3c016648c3f97e6685bc2bec395d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
