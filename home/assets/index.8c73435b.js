import{d as q,a as z,b as E,r as $,o as d,c as m,e as c,w as p,f as F,n as T,u as i,g as w,h as x,i as D,j as P,k as C,l as k,m as R,p as W,q as j,v as K,s as S,t as B,x as A,T as V,y as H,K as Y,z as b,A as G,F as U,B as X,C as Q}from"./vendor.b0c01671.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}};Z();const J="modulepreload",O={},ee="./",L=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${ee}${o}`,o in O)return;O[o]=!0;const n=o.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":J,n||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),n)return new Promise((y,h)=>{l.addEventListener("load",y),l.addEventListener("error",h)})})).then(()=>t())};var _;(function(e){e.phone="phone",e.desktop="desktop"})(_||(_={}));var f;(function(e){e.light="light",e.dark="dark",e.auto="auto"})(f||(f={}));var v;(function(e){e.follow="\u5706\u70B9\u8DDF\u968F",e.take="\u5706\u70B9",e.none="\u65E0\u7279\u6548"})(v||(v={}));var r=q({id:"app",state(){return{engine:null,engines:null,hover:!1,caret:!1,debug:!1,deviceClass:_.desktop,systemTheme:f.light,compactMode:window.localStorage.getItem("compactMode")=="true",userThemeSetting:window.localStorage.getItem("userThemeSetting")||f.auto,hoverEngine:null,cursorEffect:window.localStorage.getItem("cursorEffect")||v.none,userAgent:{str:"",isFirefox:!1,isWindows:!1,isChrome:!1,isSafari:!1,isWebKit:!1}}},actions:{async doSearch(e){var s;const t=(s=this.engine)==null?void 0:s.urlPattern.replace("{query}",e);await this.postRecord(e,this.engine),window.location.href=t||" "},async postRecord(e,t){await z.post("http://101.43.89.12:8888/add-record",{title:t.title,url_pattern:t.urlPattern,engine_id:t.id,tags:t.tags,search_string:e,client_class:"web"}).then(s=>{}).catch(s=>console.error(s))},switchEngineByAdd(e){var s;let t=0;for(let o=0;o<this.engines.length;o++)this.engines[o].title==((s=this.engine)==null?void 0:s.title)&&(t=o);t=t+e,t>=this.engines.length?t=t-this.engines.length:t<0&&(t=t+this.engines.length),this.engine=this.engines[t]},selectEngine(e){this.engine=e},selectEngineByIndex(e){this.engine=this.engines[e]},selectEngineByTitle(e){for(let t of this.engines)if(t.title==e){this.engine=t;break}},selectEngineByCommand(e){for(let t of this.engines)if(t.command==e){this.engine=t;break}},changeCursorEffect(e){this.cursorEffect=e,window.localStorage.setItem("cursorEffect",e)},changeThemeSetting(e){this.userThemeSetting=e,window.localStorage.setItem("userThemeSetting",e)},changeCompactMode(e){this.compactMode=e,window.localStorage.setItem("compactMode",e?"true":"false")}},getters:{theme(){return this.userThemeSetting==f.auto?this.systemTheme:this.userThemeSetting}}});function te(){z.get("https://catrefuse-server-1302682122.cos.ap-nanjing.myqcloud.com/engines.json").then(e=>{r().engines=e.data,r().engine=e.data[0]}).catch(e=>{alert(e.message)})}const Re="https://catrefuse-server-1302682122.cos.ap-nanjing.myqcloud.com/icons/",se={class:"fixed bottom-4 right-4 w-[300px] flex flex-col rounded-lg overflow-hidden bg-zinc-800 shadow-2xl"},oe={id:"debugger-header",class:"w-full text-center flex flex-row items-center justify-center text-white h-8 text-sm"},ne=c("div",{class:"select-none"},"debugger",-1),re=c("div",{class:"rounded-full bg-red-500 h-3 w-3"},null,-1),ie=c("div",{class:"rounded-full bg-yellow-500 h-3 w-3"},null,-1),ae=c("div",{class:"rounded-full bg-gray-500 h-3 w-3"},null,-1),le=[re,ie,ae],ce={id:"debugger-body",class:"font-mono text-green-600 bg-overlayshadow-xl p-5"},de={class:"flex flex-col gap-1"},ue=E({emits:["close"],setup(e,{emit:t}){return(s,o)=>{const n=$("text-hover");return d(),m("div",se,[c("div",oe,[ne,c("div",{id:"dot-controller",class:"flex flex-row items-center gap-2 absolute left-0 p-3 hover:cursor-pointer",onClick:o[0]||(o[0]=a=>t("close"))},le)]),p((d(),m("div",ce,[c("div",de,[F(s.$slots,"default")])])),[[n]])])}}}),me={class:"my-2"},he=w(" \xA9 2020 - 2021 \u{1F353} "),fe={href:"http:///bad-strawberry.com",target:"_blank",class:"decoration-none hover:underline"},ge=w("Bad Strawberry"),pe=[ge],_e=w(". "),ve=c("span",null,"All rights reserved.",-1),ye={href:"https://www.craft.do/s/Gi8HESIcZQsSIY",target:"_blank",class:"decoration-none hover:underline"},we=w("\u7528\u6237\u534F\u8BAE"),xe=[we],be=w(" \xB7 "),Ee={href:"https://beian.miit.gov.cn/#/Integrated/index",target:"_blank",class:"decoration-none hover:underline"},Ce=w("\u6D59 ICP \u5907 2020033146 \u53F7 - 2"),ke=[Ce],Se=E({setup(e){return(t,s)=>{const o=$("dot-hover");return d(),m("div",{class:T(["invisible md:visible md:fixed md:z-[100] md:bottom-6 select-text text-sm mt-4 font-medium text-tertiary",i(r)().compactMode?"md:w-[100vw] text-center":" md:right-[28px] md:text-right"])},[c("p",me,[he,p((d(),m("a",fe,pe)),[[o]]),_e,ve]),c("p",null,[p((d(),m("a",ye,xe)),[[o]]),be,p((d(),m("a",Ee,ke)),[[o]])])],2)}}});function $e(){let e=x({x:0,y:0});return document.addEventListener("mousemove",function(s){e.x=s.clientX,e.y=s.clientY}),e}function Te(){function e(){r().deviceClass=window.innerWidth>=736?_.desktop:_.phone}function t(){r().systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?f.dark:f.light}D(()=>{e(),window.addEventListener("resize",()=>{e()}),t(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{t()})}),P(()=>{r().theme=="dark"?document.getElementsByTagName("html")[0].classList.add("dark"):document.getElementsByTagName("html")[0].classList.remove("dark")}),setTimeout(()=>{document.body.classList.add("transition")},50)}var Be=(e,t)=>{const s=e.__vccOpts||e;for(const[o,n]of t)s[o]=n;return s};const Ae=E({props:{follow:{type:Boolean,default:!1},shape:{default:"dot"}},setup(e){const t=e;let s=x({x:0,y:0});C(!1),document.addEventListener("mousemove",function(u){s.x=u.clientX,s.y=u.clientY});let o=C(!1);document.addEventListener("mousedown",()=>{o.value=!0}),document.addEventListener("mouseup",()=>{o.value=!1});function n(g){const u=g.getBoundingClientRect();return{x:(u.left+u.right)/2,y:(u.top+u.bottom)/2}}let a=x({x:0,y:0});const l=x({grow:1,degree:0}),y=C(null);D(()=>{setInterval(()=>{a.x=s.x,a.y=s.y;const g=n(y.value),u=s.x-g.x,M=s.y-g.y,N=Math.sqrt(u*u+M*M);l.grow=Math.max(1,Math.min(Math.pow(N/(t.follow?15:5),1/4),2.5)),l.degree=Math.atan2(M,u)*180/Math.PI,a.x=s.x,a.y=s.y},10)});let h=C(!0);return document.getElementsByTagName("html")[0].addEventListener("mouseleave",()=>{h.value=!0,l.grow=1,l.degree=0}),document.getElementsByTagName("html")[0].addEventListener("mouseenter",()=>h.value=!1),(g,u)=>(d(),m("div",{id:"dot-cursor",class:"cursor-container",ref_key:"visualCursorDOM",ref:y,style:k({transform:`translate(${i(a).x-25}px,${i(a).y-25}px)`,transition:`all ${t.follow?"0.12s":"0.04s"} cubic-bezier(0.1, 0.28, 0.45, 0.75)`})},[c("div",{class:T({cursor:!0,hover:t.shape=="hover",clicked:i(o),caret:t.shape=="caret"}),style:k({transform:t.shape=="caret"?"none":`rotate(${i(l).degree}deg) scale(${i(l).grow}, ${Math.cbrt(1/i(l).grow)})  `})},null,6)],4))}});var Le=Be(Ae,[["__scopeId","data-v-9d077728"]]);function Ie(){r().userAgent.str=window.navigator.userAgent;const e=window.navigator.userAgent;r().userAgent.isFirefox=e.includes("Firefox"),r().userAgent.isWindows=e.toLowerCase().includes("Windows".toLowerCase()),r().userAgent.isChrome=e.includes("Chrome"),r().userAgent.isSafari=e.includes("Safari")&&!r().userAgent.str.includes("Chrome"),r().userAgent.isWebKit=e.toLowerCase().includes("WebKit".toLowerCase()),r().userAgent.isWebKit||(r().cursorEffect=v.none)}const Me=E({props:{name:{default:"bx-left-arrow-alt"},size:{default:"m"},full:{type:Boolean,default:!1}},setup(e){const t=e,s={xs:1,s:1.25,m:1.5,l:2,xl:3,xxl:4};let o=x({"font-size":`${s[t.size]}rem`,transform:`${t.full?"scale(1.5)":""}`}),n=x({width:`${s[t.size]}rem`,height:`${s[t.size]}rem`});return(a,l)=>(d(),m("div",{id:"container",style:k(i(n))},[c("i",{class:T(`bx ${t.name}`),style:k(i(o))},null,6)],4))}}),De=[{path:"/",name:"Home",component:()=>L(()=>import("./Home.9bc707ac.js"),["assets/Home.9bc707ac.js","assets/Home.ad37b306.css","assets/vendor.b0c01671.js"]),meta:{depth:0}},{path:"/preference",name:"Preference",component:()=>L(()=>import("./Preference.afccc2c3.js"),["assets/Preference.afccc2c3.js","assets/vendor.b0c01671.js"]),meta:{depth:1}},{path:"/search",name:"SearchRedirect",component:()=>L(()=>import("./SearchRedrirect.d229907f.js"),["assets/SearchRedrirect.d229907f.js","assets/vendor.b0c01671.js"]),props:e=>({query:e.query.query,engine:e.query.engine})}],I=R({history:W(),routes:De});I.afterEach((e,t)=>{const s=e.path.split("/").length,o=t.path.split("/").length;e.meta.transition=s<o?"slide-left":"slide-right"});const Pe={class:"grid grid-cols-12 gap-2 text-gray-800 select-none"},ze=["src"],Oe=E({setup(e){Te(),Ie();const t=$e();D(()=>{te()}),P(()=>{r().deviceClass==_.phone&&document.getElementById("no-cursor-link")&&document.getElementsByTagName("head")[0].removeChild(document.getElementById("no-cursor-link"))}),P(()=>{if(r().cursorEffect==v.take){var o=document.createElement("link");o.href=r().userAgent.isSafari?"./css/no-cusor-safari.css":"./css/no-cusor.css",o.rel="stylesheet",o.type="text/css",o.id="no-cursor-link",document.getElementsByTagName("head")[0].appendChild(o)}else document.getElementById("no-cursor-link")&&document.getElementsByTagName("head")[0].removeChild(document.getElementById("no-cursor-link"))});let s=C("slide-left");return I.beforeEach((o,n)=>{n.meta.depth!=null?s.value=o.meta.depth<n.meta.depth?"slide-left":"slide-right":s.value="fade"}),(o,n)=>{const a=j("router-view"),l=$("dot-hover"),y=$("text-hover");return d(),m(U,null,[c("div",Pe,[p(S(Le,{follow:i(r)().cursorEffect==i(v).follow,shape:i(r)().hover?"hover":i(r)().caret?"caret":"dot"},null,8,["follow","shape"]),[[K,i(r)().cursorEffect!=i(v).none&&i(r)().deviceClass!=i(_).phone]]),p(S(Me,{name:"bxs-cog",class:"text-secondary hover:cursor-pointer absolute top-4 right-4",size:"l",onClick:n[0]||(n[0]=h=>i(I).push("/preference"))},null,512),[[l]]),c("div",{id:"grid-container",class:T(["col-start-2 col-end-12 mt-12 relative md:min-w-[512px] md:max-w-[764px]",i(r)().compactMode?"md:mx-auto md:w-[640px] md:mt-[12%]":" md:col-start-2 md:col-end-9  md:mt-16 "])},[S(a,null,{default:B(({Component:h,route:g})=>[(d(),A(Y,null,[S(V,{name:i(s),mode:"out-in"},{default:B(()=>[(d(),A(H(h)))]),_:2},1032,["name"])],1024))]),_:1})],2),c("img",{name:"background-img",class:"fixed z-[-1000] -right-1 -bottom-1 pointer-events-none select-none",src:i(r)().theme==i(f).light?"/assets/quasar_logo_bg.svg":"/assets/quasar_logo_bg_dark.svg",style:k({transform:"none"})},null,12,ze)]),S(G,{name:"slide-down"},{default:B(()=>[i(r)().debug?(d(),A(ue,{key:0,onClose:n[1]||(n[1]=h=>i(r)().debug=!1)},{default:B(()=>[c("p",null,"cursor: "+b(i(t).x)+", "+b(i(t).y),1),c("p",null,"deviceClass: "+b(i(r)().deviceClass),1),c("p",null,"systemTheme: "+b(i(r)().systemTheme),1),c("p",null,"compactMode: "+b(i(r)().compactMode),1),c("p",null,"userAgent: "+b(i(r)().userAgent.str),1)]),_:1})):p((d(),A(Se,{key:1},null,512)),[[y]])]),_:1})],64)}}});function Ne(e){e.directive("dot-hover",(t,s)=>{t.onmouseenter=()=>{r().hover=s.value==null?!0:!s.value},t.onmouseleave=()=>{r().hover=!1}}),e.directive("text-hover",{mounted(t,s){t.onmouseenter=()=>{r().caret=!0},t.onmouseleave=()=>{r().caret=!1}}})}L(()=>Promise.resolve({}),["assets/transition.b2fa5aae.css"]);const qe=X(Oe);qe.use(Ne).use(I).use(Q()).mount("#app");export{v as C,_ as D,f as T,Be as _,Me as a,Re as i,I as r,r as u};
