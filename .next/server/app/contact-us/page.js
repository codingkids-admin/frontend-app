(()=>{var e={};e.id=746,e.ids=[746],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6458:(e,n,a)=>{"use strict";a.r(n),a.d(n,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>_,pages:()=>c,routeModule:()=>p,tree:()=>d});var t=a(482),s=a(9108),r=a(2563),i=a.n(r),o=a(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);a.d(n,l);let d=["",{children:["contact-us",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,8795)),"/Users/andressetiawan/Documents/Andres/Work/codingkids-app/src/app/contact-us/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,9759)),"/Users/andressetiawan/Documents/Andres/Work/codingkids-app/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9361,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/andressetiawan/Documents/Andres/Work/codingkids-app/src/app/contact-us/page.jsx"],_="/contact-us/page",u={require:a,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/contact-us/page",pathname:"/contact-us",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1116:(e,n,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,6840,23)),Promise.resolve().then(a.t.bind(a,8771,23)),Promise.resolve().then(a.t.bind(a,3225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,3982,23))},4245:(e,n,a)=>{Promise.resolve().then(a.bind(a,3968))},5303:()=>{},3968:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>h});var t=a(5344),s=a(1428),r=a.n(s),i=a(3729),o=a(3446),l=a.n(o),d=a(6506);let c=({href:e,title:n,onClick:a})=>t.jsx(d.default,{onClick:()=>a(),href:e,className:`${l().nav_link} text-center`,children:n}),_=e=>{let[n,a]=(0,i.useState)({windowWidth:0,isDesiredWidth:!1});return(0,i.useEffect)(()=>{let n={sm:768,md:992,lg:1200,xl:1400}[e];a({windowWidth:window.innerWidth,isDesiredWidth:window.innerWidth<n});let t=e=>{let t=window.innerWidth;a({windowWidth:t,isDesiredWidth:t<n})};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[n.windowWidth,e]),n.isDesiredWidth};var u=a(4665),p=a(9410);let m=()=>(0,t.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column py-4",children:[t.jsx("span",{className:"spinner-grow text-success","aria-hidden":"true"}),t.jsx("span",{className:"loading_label",role:"status",children:"Wait a sec"})]});var v=a(6618);let x=()=>{let e=_("sm"),[n,a]=(0,i.useState)(!0),[s,r]=(0,i.useState)({isNavbarOpen:!1});return(0,i.useEffect)(()=>{a(!1)},[]),(0,t.jsxs)("nav",{className:`${l().container} ${s.isNavbarOpen?l().nav_container_open:l().nav_container_close} px-0`,children:[n&&t.jsx(m,{}),(0,t.jsxs)("div",{className:`${n&&"d-none"} ${l().nav_body} container w-100 d-flex justify-content-between align-items-center py-3 gap-4 gap-lg-0 px-4`,children:[(0,t.jsxs)(d.default,{href:"/",onClick:()=>{r({isNavbarOpen:!1})},className:`${l().nav_brand} d-flex gap-1 align-items-center text-decoration-none`,children:[t.jsx("div",{className:`position-relative ${l().nav_img_container}`,children:t.jsx(p.default,{priority:!0,src:"/logo.svg",alt:"Coding kids indonesia logo",fill:!0,sizes:"100%"})}),e&&t.jsx("p",{className:"m-0",children:"oding kids"})]}),(0,t.jsxs)("ul",{className:`${l().nav_link_container} ${e&&!s.isNavbarOpen?l().nav_link_close:l().nav_link_open} pb-4 pb-md-0 m-0 d-flex flex-column flex-lg-row flex-md-row gap-2 gap-lg-5 align-items-center list-unstyled`,children:[[{href:"/#our-class",title:"Our class"},{href:"/fun-tips",title:"Fun tips"},{href:"/contact-us",title:"Contact us"}].map(({href:e,title:n},a)=>t.jsx(c,{onClick:()=>{r({isNavbarOpen:!1})},href:e,title:n},a)),e&&t.jsx("a",{href:(0,v.Z)("Hello Sir Koding Kids!\nNama saya: <masukan_nama_kamu>\nSaya tertarik dengan kelas-kelas di koding kids, boleh bantu saya dalam memilih kelas yang cocok untuk saya/anak saya?"),target:"_blank",onClick:()=>{r({isNavbarOpen:!s.isNavbarOpen})},className:`${l().nav_btn_primary} text-decoration-none btn-primary`,children:"Join us!"})]}),t.jsx("div",{className:`${l().nav_actions_container}`,children:t.jsx("a",{href:e?"/":(0,v.Z)("Hello Sir Koding Kids!\nNama saya: <masukan_nama_kamu>\nSaya tertarik dengan kelas-kelas di koding kids, boleh bantu saya dalam memilih kelas yang cocok untuk saya/anak saya?"),target:"_blank",onClick:n=>{e&&(n.preventDefault(),r({isNavbarOpen:!s.isNavbarOpen}))},className:`${l().nav_btn_primary} text-decoration-none btn-primary`,children:e?t.jsx(u.Z,{style:{fill:"white"}}):"Join us!"})})]})]})};function h({children:e}){return(0,i.useEffect)(()=>{a(6811)},[]),t.jsx("html",{lang:"en",children:(0,t.jsxs)("body",{className:`${r().className}`,children:[t.jsx(x,{}),e]})})}a(4487),a(7532)},6618:(e,n,a)=>{"use strict";a.d(n,{Z:()=>t});let t=function(e,n="+6285161774568"){return`https://wa.me/${n}?text=${encodeURI(e)}`}},3446:e=>{e.exports={container:"Navbar_container__XYsC7",nav_container_close:"Navbar_nav_container_close__5oFWq",nav_container_open:"Navbar_nav_container_open__aPyQX",nav_body:"Navbar_nav_body__hK8nN",nav_link:"Navbar_nav_link__4lqkf",nav_brand:"Navbar_nav_brand__n5zLd",nav_img_container:"Navbar_nav_img_container__Ppr3a",nav_link_container:"Navbar_nav_link_container__exWLx",nav_link_close:"Navbar_nav_link_close__oqkaG",nav_link_open:"Navbar_nav_link_open__zP3Y0"}},8795:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>s});var t=a(5036);a(2);let s=()=>t.jsx("div",{children:"Contact us page!"})},9759:(e,n,a)=>{"use strict";a.r(n),a.d(n,{$$typeof:()=>r,__esModule:()=>s,default:()=>i});let t=(0,a(6843).createProxy)(String.raw`/Users/andressetiawan/Documents/Andres/Work/codingkids-app/src/app/layout.jsx`),{__esModule:s,$$typeof:r}=t,i=t.default},7532:()=>{}};var n=require("../../webpack-runtime.js");n.C(e);var a=e=>n(n.s=e),t=n.X(0,[225,552],()=>a(6458));module.exports=t})();