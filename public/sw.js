if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,a,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/JpsnT_k-WpjrFKMYMDrx-/_buildManifest.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/JpsnT_k-WpjrFKMYMDrx-/_ssgManifest.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/1bfc9850.35b9a819a31dc5e2f047.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/4fb9b18cbca71ebd72151f417b85c0aaf1163d1e.f2b8cf27419d5af03665.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/cfeca8435be7523937a650e9e4fa14d784973116.b133a8f9193db875c900.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/fd73fa5fb9f73f18227a47c23a9002adcbd74f44.4b5833004ba35680a81c.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/framework.f783f7e0d786735fc5cd.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/main-2a288d66743b6fd00266.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/pages/%5Bslug%5D-301cbdcfbd714b69885e.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/pages/404-f030ec2980b286ff1964.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/pages/_app-c1394dd600227894d076.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/pages/_error-d7456d83cd917f2dfea2.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/pages/imprint-c06aa9790876ab1933c6.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/pages/index-deef1c3d8cd22d0e4703.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/pages/privacy-statement-1d5a705fd37181bad7b0.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/polyfills-df541f88df35afcfaabe.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/chunks/webpack-95c2b224bccf352ee870.js",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/css/3dc4c98a1673c88c5ccb.css",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Allure-1000-57ab923a4aae460ab22023c7206184b5.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Allure-400-b0cf2103f4c21806bdf24f06aca6e553.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Allure-600-8234c8a0cc94a044f0b4cd535c574bc6.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Allure-96d728921672919a0cf671291b772cd6.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Allure-a1994b248a9579225d4591c4cc0fa3a2.png.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Allure-e2b146bb16e69d6ec21097045b4a45c0.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/CostOfBugs-1000-e11753fbe4976cc7e4ef04b5a441ccde.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/CostOfBugs-18cb3bd55c3681083c39c4a8cf087e69.png.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/CostOfBugs-23de627a0bdc7ef691359a4b4778db81.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/CostOfBugs-400-3d65f9532d5c00c3d02c09f50dab46a2.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/CostOfBugs-600-5c996f4cb9854b806cfefe9759607906.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/CostOfBugs-fddca09a38b315733311fc6aa60546fc.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA-1000-ae90aef7f6382bef694ea71c68331d99.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA-3f114243113c7c4648ff1c48ea47dc66.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA-400-a5b00bbfa9815e6b0f3f70d80ad1b194.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA-600-bc67eedfce6c7392bc6c9129e0be9730.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA-97ad76dad042680e4903f80cc973570c.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA-d61f9cc56a74fbda66133ae6246268fd.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA_WebStorm-0f5ef66a8066f99666859e060dda0e2a.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA_WebStorm-1000-52093257666821644e9b621b1098a04d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA_WebStorm-400-6817dd7851d7cdd3ba71cd2765fa74e9.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA_WebStorm-5b8002cde410ea7f02d0df308d005e61.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA_WebStorm-600-8a2851e6ab3f64d30951ae9ff806172e.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Create_PWA_WebStorm-ad58a0b8d5cfded36c63b6976dac6b9d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/EconomicImpactsSoftwareTesting-1000-76c7b5ccca8b0142f2d57f2127cfc6ca.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/EconomicImpactsSoftwareTesting-3d370207539c260c1b8a30571b5a309c.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/EconomicImpactsSoftwareTesting-400-af2a48b6b0011d67e97e2060ab3661af.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/EconomicImpactsSoftwareTesting-5267127d2cd928f0d6df1368b26b93a8.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/EconomicImpactsSoftwareTesting-600-8dfc68ec37229a49cae19e8c89bba5fa.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/EconomicImpactsSoftwareTesting-7ece9692ffe845b046475f5eb1b5f341.png.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Final_Module-1000-a582d783ad0daa559f5c9ee3e06533ad.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Final_Module-400-8846338ce5e421e1cb2c07dd9ebceb35.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Final_Module-600-f5379b064b06ce8dc4df7b558bcc074c.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Final_Module-a780a442dcea49e2ca44cefe379da0d5.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Final_Module-e702e836edab02aa9bab88f78d5e38af.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Final_Module-e9dfb9ff331ee40efc4dcb07e931e141.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Mutation_Teaser-1000-fb83c59a03d3398da8a30dc29bc83e68.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Mutation_Teaser-274b1629abecabb5d61c372905eb24ba.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Mutation_Teaser-400-49f48c96a5ec6ce799362271a6ce9709.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Mutation_Teaser-600-80799a07df18c61d45e314815f714ae1.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Mutation_Teaser-9e4345a772c948f3869438ffa8a1b138.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Mutation_Teaser-eeb69a88e1217cef44c7d4526e7fc6d9.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Query_Teaser-1000-2b9286b8710730124f74f0f540775034.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Query_Teaser-2b3d4fe2d1db245c37b08e816b2408bb.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Query_Teaser-2dc9a08dd58dcdbe20f0437d04600a3b.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Query_Teaser-400-a4c3b40994a322d15c8bf7120e5ded70.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Query_Teaser-600-d3ce800c95369a5bf74fd872d17269ef.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GrapQL_Query_Teaser-78faa974cdb081db71bea6734cd60606.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GraphQL_Playground-1000-266418cd51c8f1979762f2ecffc323ae.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GraphQL_Playground-17028bd7b5463a54fb266b4e29e6d8b3.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GraphQL_Playground-400-04f73074259c66e28669d2e76865e2f4.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GraphQL_Playground-4cbd147816395f3268022e2da78289a1.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GraphQL_Playground-600-b04e5e95ec042cbf498422dca8910055.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/GraphQL_Playground-cc75628504f413a570edba0126429ccc.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_1-0410b287efc8048a29c89419a2f43504.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_1-400-3b996ccffeebc6e977e595070ab6d2a8.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_1-4a946b9846829df590bf5f1c57e3b89d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_1-600-46e8299de2a0798c84529141be9ba9f0.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_1-637-4f063c09bdcd17c8d405e343c2b9c6dc.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_1-bedc0656733a8da0886a1e0bb9e16ae6.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_2-1000-bd58d057e2670ce0b3a6820be04ad3f0.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_2-400-fc93dd80832b7d68b14facd0e47a3a7b.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_2-600-e3fcdc1182555ee79ad8bf9e951cbdeb.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_2-97c13872353a4b31aacd18b20781eab9.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_2-bf16d75fd73091b94004246916e8e74d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Owrite_Test_2-ff7c97bace32ceb9df90f81053eec992.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Extensibility_Teaser-1000-e0d0520a79c49a3ff6d4998a81f30fe3.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Extensibility_Teaser-400-57e030c0b9e898b5e17642730499b6c6.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Extensibility_Teaser-5585b22b7c911ea10dc3b8c61aa355c4.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Extensibility_Teaser-600-351b7999ca00447d00ed1b9fb86f251a.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Extensibility_Teaser-81da21e1e72bd303ab6f70b7a5072b4e.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Extensibility_Teaser-8e10170f04d287cbd801ed0c3d879ac9.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Start_Teaser-1000-58efe528ec782f3e823c891dc08d8fdd.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Start_Teaser-400-d781a59219a59a84ef9f45900657a052.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Start_Teaser-4c1068ec52ecbbf9564c9834fe79b2f3.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Start_Teaser-600-9dc15dd478f8928b0bfad74fecc6d625.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Start_Teaser-c1381c872799464c0211f1aea501e639.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Start_Teaser-fda71084a7f972d1c7cd9abcd9b5d871.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Teaser-1000-b6c263bf0d12e01320f861e7ce9f759d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Teaser-36ea95bd23db87ab340ef70a3d1b1f89.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Teaser-400-533d6d3099bab298a2208092552d93d1.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Teaser-600-4c64efdeed505a5e4f364e6a4c92ac90.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Teaser-7c65975598266ad3b76adeb4ba1c5272.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/PWA_Studio_Teaser-d023d09d7f1ad2336ca76a918682e4fd.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Review_Object_Design_Style_Guide-1000-f67be61f1cb9e31515bbc95474354776.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Review_Object_Design_Style_Guide-400-9400733d936a2a7143898c780d556bfc.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Review_Object_Design_Style_Guide-600-20706d988762001d9a1edf70ffce1c15.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Review_Object_Design_Style_Guide-b79de6109e7e545498a099f41ba2c26c.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Review_Object_Design_Style_Guide-cfa7e3e924d172ce450d8188adf0ae21.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Review_Object_Design_Style_Guide-e90379b7445e61336a8b1fb77a092f23.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Software_Documentation_Teaser-1000-9af8b8699fb8290f15205adbdb092a0c.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Software_Documentation_Teaser-338667a88785fd7f8e4a6e1d089be4c6.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Software_Documentation_Teaser-3c285ae6206ef39a08b1915c9582fdbe.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Software_Documentation_Teaser-400-bf97d51b70900fdaa083324e38447af0.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Software_Documentation_Teaser-600-e72e6a46092819549b63ef9845b3a028.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Software_Documentation_Teaser-c6d5b8c148a899e2a1be34d8fa2e72fc.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-1000-2329b1ec548b75ec7aef16f9e343b360.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-1000-bbda85fd93f422091baedb671f9f7161.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-17553040726a8c45dfb82517e99deb0e.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-400-50e75b3b3fc2df0b8c875bc25cf2388d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-400-762c183aa60c5b81f5c66d2bb6eb30dd.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-4050bb89f3ee997183b45c21c1b2655a.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-58866024d40df3215704837301c5d7d4.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-600-6d3781e223a878c5cab57c0b294c3f27.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-600-a2fd83fd22e3b97a90436bd87d039f4d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-7bd613a038f73804619b724699967002.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-7df622190d12d9e2176b68848b203c72.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/Teaser-81ca51901df1e9b7b366d148986920fc.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/TestPyramid-0ff33c39f3fb170bcdf1cabb6a0f8b5a.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/TestPyramid-1000-e3b8b3c1257b74f74923e4616b06d000.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/TestPyramid-299d60faad494dfc2e1c44776b54691e.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/TestPyramid-400-71aeb1b13b417e66b9e95a96859a58d9.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/TestPyramid-600-e40beafafe81d28f1a854a553dcd2b9b.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/TestPyramid-9b4e7b98e6b536f3480144759a87cd92.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/allow_alert_when_product_comes_back_in_Stock-1000-000b357401502b4628ee88e712a92ee9.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/allow_alert_when_product_comes_back_in_Stock-400-d134a085d2f44f3278996b5f005d0478.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/allow_alert_when_product_comes_back_in_Stock-4211b62c16305ce0a07b2b9582cd685c.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/allow_alert_when_product_comes_back_in_Stock-600-5b96dbabe801437ef9461ce22a286622.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/allow_alert_when_product_comes_back_in_Stock-6bb0cc864c2ba7acfc8b2d3f47f9517c.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/allow_alert_when_product_comes_back_in_Stock-f79f093c8168066e3bf6f4e1a8071286.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/businessman-3300907_1920-1000-c525f65eed9c6dd7590e9296cdac946b.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/businessman-3300907_1920-16c1070572f729b8ba51dc61d492d275.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/businessman-3300907_1920-400-9d942558b87f779f4957bdf4c12316de.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/businessman-3300907_1920-5c44d5c0969d4448e1e63f117cdb9a8f.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/businessman-3300907_1920-600-7cb4f8e3dc1f2c67d4d36f96dcf89b09.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/businessman-3300907_1920-fe94ac637f640e843182068d6ada0554.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/cupcake_sample-1afd01ab301777dbefb5555513bdfefa.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/cupcake_sample-400-7ab91f642bcd77b789fe34c37f6356ff.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/cupcake_sample-4e6dd62e055482587a59075039647f86.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/cupcake_sample-600-4234be6c0096f91ac01a56efd8971b25.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/cupcake_sample-934-9f3f721581fd902a40798f962f9cbdb6.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/cupcake_sample-995bc5134e829af195339c16ed5b9441.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/demo-1000-7a71b3a749991c481bded12fb12cc649.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/demo-400-b5844decce95cc2c4d64388badcd2d7a.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/demo-4e9fdf7c43c921978956b6c040bfe181.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/demo-56080cfafee96682345515958e7c3206.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/demo-600-8d0c57469181f3e3a55ac800f1cb6fbb.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/demo-db2b9db1d8a5cab65a99d3662a95762d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/display_out_of_stock_products_option-1000-a45d028bf3394283390293bcce6514df.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/display_out_of_stock_products_option-29e35d88cf7664a63c507be4e9500412.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/display_out_of_stock_products_option-34acc8be744ec8d50b4de10fb692f392.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/display_out_of_stock_products_option-400-04e47fa127990a9b17671de64450c5e2.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/display_out_of_stock_products_option-600-e681cd2c13d1d9a0e5d771d9986b8817.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/display_out_of_stock_products_option-c3d2bf880acc8c95e4371ac743543332.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/graphql-playground_mutation-1000-f5f19a02ea7eff6a59bde68246146c08.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/graphql-playground_mutation-13cd5d5a832a67bb5c84ad77d84ce42f.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/graphql-playground_mutation-400-b0be0751c613866cd9607716f23a634c.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/graphql-playground_mutation-600-82332cd9bbc2fe7c69b30c5a9739d036.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/graphql-playground_mutation-62bfc54ec0a0d913f0d92ffafadf7a16.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/graphql-playground_mutation-6468c42fd84a9ef9aa58df78b2df2b39.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/larsroettig-0796228f31b856a094211c845342c57b.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/larsroettig-3d5d562c4a9cb63c2ec13b9b5fec2251.png.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/larsroettig-eab4ecf64a36f19ad64977f107878e7c.png",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/magento2_notify_frontend-1000-8d3406fae80b4a1180b9ad1fbc8a2196.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/magento2_notify_frontend-2a0289097c5e37c1e99db278902cbc67.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/magento2_notify_frontend-400-8c40f7b3dd20778a6a4ff99461509220.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/magento2_notify_frontend-600-b8190fbd63fd0b65059a08f0fa3f74ce.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/magento2_notify_frontend-d74258048449a9d2bb6b3adcefdeb73c.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/magento2_notify_frontend-f7f01dc3586ca193b1e72d60e28b023c.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/mail_backend-009fb8b4fa610a31a4cab89811f6bd41.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/mail_backend-1000-dede077de73f3bed39708b6f65e0da9d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/mail_backend-400-a0e52ecd2f8fee794b0e6722a4231ac1.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/mail_backend-600-e25f69dc86a00128f8fa8c4389241fa3.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/mail_backend-63681e39b5898000b643a59cc22216b5.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/mail_backend-dbb9d0c4772eab8403871f83934209fe.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/pacemaker-300x600-300-39de025a8ae2a745580ea557f6c94e48.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/pacemaker-300x600-7795382bce57b7e3d632a486665b523a.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/pacemaker-300x600-d8c96ddadc970e7dc936d2fa93f01c69.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/pacemaker-300x600-df81646ed165f605b344b6a784705566.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/pacemaker-728x90-1bd17f4bd16128c979b3e9851560146d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/pacemaker-728x90-400-b9ef084a1821e9318ac1aa71a73887fb.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/pacemaker-728x90-600-5e4772fc656a2410d81721af8e195154.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/pacemaker-728x90-6eb6d4e703d3803c1fa2f12c185028de.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/pacemaker-728x90-728-63531de5d59b38699989e9407ad26479.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/pacemaker-728x90-93d9fd1ffbf1202186e7454735862eaf.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/store-984393_1920-1000-c74333bc94f757fd31711f436f82674e.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/store-984393_1920-30776c77b54d0f78df7d9e495d1aaa36.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/store-984393_1920-400-6b4ef0de21fd08e76c27e8244ef5543c.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/store-984393_1920-464ebb9f6cf239ac2da766ff5ebd04ee.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/store-984393_1920-600-d4cc2e5ea5efb9da88d5db20c8edea8e.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/store-984393_1920-7df8c0fd3c8938c3175a041ff341c3bc.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/td-300x600-2406097054687d0f8d68697eb68c3a7d.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/td-300x600-300-5388add16dde9dfdcb04d0d9df9a99ff.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/td-300x600-e23a05f5b64a6887d76a5b4e850eebf8.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/td-300x600-e8ffe6e338a08a2ef4008387b3f53e20.jpg.webp",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/td-728x90-400-c61399fdbc70d11c617eb04fc2cc74f9.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/td-728x90-5814a8d340e00da36c5bbaf32d796a83.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/td-728x90-600-a8d88241f2c6fc02308b8902e54d56c5.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/td-728x90-728-9190b9f894958a9f7e5872ece76abf90.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/_next/static/images/td-728x90-946d5adec1ab6b8afb957bb9854c0740.jpg",revision:"JpsnT_k-WpjrFKMYMDrx-"},{url:"/atom.xml",revision:"0fcfbc1ddc9db00a492ecd3651b61ea6"},{url:"/icons/android-chrome-192x192.png",revision:"d78ec55c6cc4bcdaa4b9dbbc5b670f86"},{url:"/icons/apple-touch-icon.png",revision:"708010fae9b07b528b9a470f52e92ce8"},{url:"/icons/favicon-16x16.png",revision:"69f7a5a1e386697202e6dd938d9cb532"},{url:"/icons/favicon-32x32.png",revision:"435071421904a01862d98290de68bf6e"},{url:"/icons/favicon.ico",revision:"b55314ede091fc8d35cbd4311acb845f"},{url:"/icons/icon-512x512.png",revision:"e7dd92c63a328dc3e38b18c3e200b2b2"},{url:"/icons/mstile-150x150.png",revision:"2f6d118aa88906df4ec86524bf747cb4"},{url:"/manifest.json",revision:"9232d8c4b23f46ca0c75d33c8c06fd79"},{url:"/robots.txt",revision:"7b4dd47aa3b4fe99fbf67a60a94c7ce3"},{url:"/rss.xml",revision:"54bc98bc312e57436ed17a2b556679d6"},{url:"/sitemap.xml",revision:"a2f2402c1dcc3c0145d48067ef18d2b8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
