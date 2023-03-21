/*! For license information please see index.5b2ece78.js.LICENSE.txt */
!function(){var e,t,n,r,o,s={59481:function(e,t,n){"use strict";var r=n(67294),o=n(73935),s=n(70798),a=n(90510),i=n(9669),c=n.n(i),f=n(87462),d=n(67090),u=d.V5.model("Page",{id:d.V5.identifier,icon:"",path:"",label:"",schema:d.V5.frozen({})}).views((function(e){return{}})).actions((function(e){return{updateSchema:function(t){e.schema=t}}})),l=n(22188),j=1,m=d.V5.model("MainStore",{pages:d.V5.optional(d.V5.array(u),[{id:""+j,path:"hello-world",label:"Hello world",icon:"fa fa-file",schema:{type:"page",title:"Hello world",body:"初始页面"}}]),theme:"cxd",asideFixed:!0,asideFolded:!1,offScreen:!1,addPageIsOpen:!1,preview:!1,isMobile:!1,schema:d.V5.frozen()}).views((function(e){return{get fetcher(){return(0,d.dU)(e).fetcher},get notify(){return(0,d.dU)(e).notify},get alert(){return(0,d.dU)(e).alert},get copy(){return(0,d.dU)(e).copy}}})).actions((function(e){return{toggleAsideFolded:function(){e.asideFolded=!e.asideFolded},toggleAsideFixed:function(){e.asideFixed=!e.asideFixed},toggleOffScreen:function(){e.offScreen=!e.offScreen},setAddPageIsOpen:function(t){e.addPageIsOpen=t},addPage:function(t){e.pages.push(u.create((0,f.Z)({},t,{id:""+ ++j})))},removePageAt:function(t){e.pages.splice(t,1)},updatePageSchemaAt:function(t){e.pages[t].updateSchema(e.schema)},updateSchema:function(t){e.schema=t},setPreview:function(t){e.preview=t},setIsMobile:function(t){e.isMobile=t},afterCreate:function(){if("undefined"!=typeof window&&window.localStorage){var t=window.localStorage.getItem("store");t&&(0,d.Xx)(e,JSON.parse(t)),(0,l.U5)((function(){return(0,d.vM)(e)}),(function(e){window.localStorage.setItem("store",JSON.stringify(e))}))}}}})),b=n(5513),p=n(26709),h=r.lazy((function(){return n.e(7578).then(n.bind(n,27578))})),g=r.lazy((function(){return Promise.all([n.e(3565),n.e(649)]).then(n.bind(n,20649))})),y=(0,s.Pi)((function(e){return e.store,r.createElement(b.UT,null,r.createElement("div",{className:"routes-wrapper"},r.createElement(a.qRY,{key:"toast",position:"top-right"}),r.createElement(a.wxo,{key:"alert"}),r.createElement(r.Suspense,{fallback:r.createElement(a.$jN,{overlay:!0,className:"m-t-lg",size:"lg"})},r.createElement(p.rs,null,r.createElement(p.l_,{to:"/hello-world",from:"/",exact:!0}),r.createElement(p.AW,{path:"/edit/:id",component:g}),r.createElement(p.AW,{component:h})))))})),v=n(20640),w=n.n(v);function k(){var e=window.store=m.create({},{fetcher:function(e){var t=e.url,n=e.method,r=e.data,o=e.config,s=e.headers;return(o=o||{}).headers=o.headers||s||{},o.withCredentials=!0,"post"!==n&&"put"!==n&&"patch"!==n?(r&&(o.params=r),c()[n](t,o)):(r&&r instanceof FormData||!r||"string"==typeof r||r instanceof Blob||r instanceof ArrayBuffer||(r=JSON.stringify(r),o.headers["Content-Type"]="application/json"),c()[n](t,r,o))},isCancel:function(e){return c().isCancel(e)},notify:function(e,t){a.Amu[e]?a.Amu[e](t,"error"===e?"系统错误":"系统消息"):console.warn("[Notify]",e,t),console.log("[notify]",e,t)},alert:a.Z9G,confirm:a.iGu,copy:function(e,t){void 0===t&&(t={});var n=w()(e,t);return n&&(!t||!0!==t.shutup)&&a.Amu.info("内容已拷贝到剪切板"),n}});return r.createElement(s.zt,{store:e},r.createElement(y,{store:e}))}n(23449),n(65637),n(52064),n(89061),n(73354),n(16923),n(75785),o.render(r.createElement(k,null),document.getElementById("root"))},22933:function(){},46700:function(e,t,n){var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=46700},75785:function(e,t,n){var r=n(22933);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(45346).Z)("4fcb2709",r,!1,{sourceMap:!1})}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return s[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=s,i.amdO={},e=[],i.O=function(t,n,r,o){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(d--,1);var f=r();void 0!==f&&(t=f)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var s={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){s[t]=function(){return e[t]}}));return s.default=function(){return e},i.d(o,s),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"scripts/chunk/"+e+"."+{180:"944dec0c",249:"d1c0b2f4",365:"ac06fc33",438:"e1afd2d9",525:"58d8a34c",649:"a8338857",790:"3fdb5f2a",848:"b47c7d59",854:"6d8ccee6",911:"9fbb67e0",996:"9d7f3e22",1065:"06caa6e2",1134:"1e776e90",1147:"a4a86921",1156:"8717d023",1205:"1ec80c35",1259:"09c8a85e",1448:"a31f70af",1471:"f37de0f0",1614:"45490b8c",1813:"13aa1494",1886:"3db0e3f4",1960:"2306c6ab",1961:"0fc28503",1966:"62e92462",2060:"59464e77",2075:"e057ef27",2140:"381d1bde",2240:"96db2bb6",2527:"b51ee777",2571:"b0d343e1",2794:"ff649d76",2798:"20f873a2",2814:"2a572fe0",2835:"6467977e",2892:"8a706827",2911:"52a96d83",2954:"4582a26b",3036:"0072f91a",3116:"e3fb7788",3565:"340168a7",3585:"b558fe5f",3632:"f036ecd5",3682:"84cc1b67",3760:"af32fa89",3919:"7066dda0",4028:"91372ae0",4129:"2990c665",4188:"5a341fb5",4295:"1e07963c",4368:"52cd464c",4386:"1712cc69",4407:"324e4476",4631:"f8b85324",4902:"a7b7613e",4912:"17ca2e22",4946:"5c7f731f",5062:"47233bdc",5593:"9fb19112",5703:"5a177806",5849:"94e1c0cb",5962:"8df25d72",6082:"be8619cb",6241:"bef2bc36",6424:"5146ed2a",6449:"0dba6758",6489:"258fb08e",6531:"f2630aec",6587:"1d244ed2",6590:"9f22daee",6717:"60645828",6876:"8681eb8b",7043:"9ccabb20",7093:"703d54a7",7131:"f8e84a82",7287:"454e7398",7460:"78399248",7562:"f1c0e6cc",7578:"53808ddf",7631:"62564c36",7637:"660fd9c3",7778:"f4fb4d3d",7835:"3d9c7a9a",7850:"bebb52c1",7868:"e75eaebf",8070:"11c0bf96",8084:"08930706",8180:"2da262aa",8183:"5af7e2c0",8424:"6cd9c67e",8448:"7edbd673",8670:"62156b37",8715:"96c11c2b",8719:"961e7701",8906:"db0efb23",8946:"fd7e1288",9284:"cb87c95b",9343:"e62f7a41",9398:"e75fd970",9400:"7e6dd2b8",9537:"7364da8f",9684:"490dd93b",9775:"ff3924ad",9907:"7782c0b1"}[e]+".js"},i.miniCssF=function(e){return"css/"+e+"."+{649:"6c219813",1813:"df21b4ad"}[e]+".css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="amis-editor-demo:",i.l=function(e,t,n,s){if(r[e])r[e].push(t);else{var a,c;if(void 0!==n)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var u=f[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+n){a=u;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(j);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},j=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.j=4826,i.p="https://aisuda.github.io/amis-widget-demo/demo/",function(){if("undefined"!=typeof document){var e={4826:0};i.f.miniCss=function(t,n){e[t]?n.push(e[t]):0!==e[t]&&{649:1,1813:1}[t]&&n.push(e[t]=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),o=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){var a;if((o=(a=s[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onerror=s.onload=function(n){if(s.onerror=s.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,s.parentNode&&s.parentNode.removeChild(s),o(c)}},s.href=t,document.head.appendChild(s)}(e,o,0,t,n)}))}(t).then((function(){e[t]=0}),(function(n){throw delete e[t],n})))}}}(),function(){var e={4826:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var s=i.p+i.u(t),a=new Error;i.l(s,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,r[1](a)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,s=n[0],a=n[1],c=n[2],f=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(c)var d=c(i)}for(t&&t(n);f<s.length;f++)o=s[f],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},n=self.webpackChunkamis_editor_demo=self.webpackChunkamis_editor_demo||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var c=i.O(void 0,[4736],(function(){return i(59481)}));c=i.O(c)}();