var E=Object.defineProperty;var P=(t,e,s)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>(P(t,typeof e!="symbol"?e+"":e,s),s);import{d as L,a as _,b as q,o as w,r as x,w as R,c as S,e as I,f as b,g as k,h as u,n as M,u as c,i as v,j as T,k as D,t as f,l as N,m as O,p as $,q as A,s as B}from"./vendor.a6db5cbf.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};j();const z="modulepreload",C={},H="./",y=function(e,s){return!s||s.length===0?e():Promise.all(s.map(n=>{if(n=`${H}${n}`,n in C)return;C[n]=!0;const r=n.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":z,r||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),r)return new Promise((l,d)=>{i.addEventListener("load",l),i.addEventListener("error",d)})})).then(()=>e())};var V="./assets/quasar_logo_bg.20a7d8f1.svg";class W{constructor(e,s,n,r,a,i,l){h(this,"id");h(this,"title");h(this,"iconName");h(this,"command");h(this,"loginRequire");h(this,"urlPattern");h(this,"tags");this.id=i,this.title=e,this.iconName=s,this.command=n,this.loginRequire=r,this.urlPattern=a,this.tags=l}}var m;(function(t){t.phone="phone",t.desktop="desktop"})(m||(m={}));var g;(function(t){t.light="light",t.dark="dark"})(g||(g={}));var o=L({id:"app",state(){return{engine:new W("","","",0,"",0,""),engines:[],hover:!1,mousedown:!1,caret:!1,debug:!1,deviceClass:m.desktop,systemTheme:g.light}},actions:{async doSearch(t){var s;const e=(s=this.engine)==null?void 0:s.urlPattern.replace("{query}",t);await this.postRecord(t,this.engine),window.location.href=e||" "},async postRecord(t,e){await _.post("https://api.catrefuse.com/add-record",{title:e.title,url_pattern:e.urlPattern,engine_id:e.id,tags:e.tags,search_string:t}).then(s=>{}).catch(s=>console.error(s))},switchEngineByAdd(t){var s;let e=0;for(let n=0;n<this.engines.length;n++)this.engines[n].title==((s=this.engine)==null?void 0:s.title)&&(e=n);e=e+t,e>=this.engines.length?e=e-this.engines.length:e<0&&(e=e+this.engines.length),this.engine=this.engines[e]},selectEngine(t){this.engine=t},selectEngineByIndex(t){this.engine=this.engines[t]},selectEngineByTitle(t){for(let e of this.engines)if(e.title==t){this.engine=e;break}},selectEngineByCommand(t){for(let e of this.engines)if(e.command==t){this.engine=e;break}}}});function F(){_.get("https://cdn.catrefuse.com/engines.json").then(t=>{o().engines=t.data,o().engine=t.data[0]}).catch(t=>{console.error(t.message)})}const K={class:"grid grid-cols-12 gap-2 text-gray-800"},U={class:"fixed bottom-4 right-4 width-[200px] font-['Fira_Code']"},X={key:0},Y=u("h3",{class:"mb-1"},"debugger",-1),G=q({setup(t){function e(){o().deviceClass=window.innerWidth>=700?m.desktop:m.phone}function s(){o().systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?g.dark:g.light}w(()=>{e(),window.addEventListener("resize",()=>{e()}),s(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{s()})});const n=x({cursor:{x:0,y:0},visualCursor:{x:0,y:0}}),r=x({grow:1,degree:0});R(()=>n.visualCursor,(i,l)=>{const d={x:i.x-l.x,y:i.y-l.y},p=Math.sqrt(d.x*d.x+d.y*d.y);r.grow=Math.min(Math.max(p/20,1),2),r.degree=Math.atan2(d.y,d.x)*180/Math.PI}),w(()=>{F(),document.onmousemove=function(l){n.cursor={x:l.clientX,y:l.clientY}},document.onmousedown=()=>{o().mousedown=!0},document.onmouseup=()=>{o().mousedown=!1},setInterval(()=>{n.visualCursor={x:n.cursor.x,y:n.cursor.y}},50)});function a(){o().debug=!o().debug}return(i,l)=>{const d=S("router-view"),p=I("dot-hover");return b(),k("div",K,[u("div",{class:"cursor-container invisible md:visible",style:v({transform:`translate(${c(n).visualCursor.x-25}px,${c(n).visualCursor.y-25}px)`})},[u("div",{class:M({cursor:!0,hover:c(o)().hover,clicked:c(o)().mousedown,caret:c(o)().caret}),style:v({transform:c(o)().caret?"none":`rotate(${c(r).degree}deg) scale(${c(r).grow}, 1)  `})},null,6)],4),T(d,{class:"mb-8"}),u("img",{name:"background-img",class:"fixed z-[-1000] -right-1 -bottom-1 pointer-events-none select-none",src:V,style:v({transform:"none"})},null,4),u("div",U,[D(u("div",{class:"fixed top-1 right-1 w-12 h-12 hover:cursor-pointer",onClick:a},null,512),[[p]]),c(o)().debug?(b(),k("div",X,[Y,u("p",null,"cursor: "+f(c(n).cursor.x)+", "+f(c(n).cursor.y),1),u("p",null,"deviceClass: "+f(c(o)().deviceClass),1),u("p",null,"systemTheme: "+f(c(o)().systemTheme),1)])):N("",!0)])])}}});function J(t){t.directive("dot-hover",(e,s)=>{e.onmouseenter=()=>{o().hover=s.value==null?!0:!s.value},e.onmouseleave=()=>{o().hover=!1}}),t.directive("text-hover",{mounted(e,s){e.onmouseenter=()=>{o().caret=!0},e.onmouseleave=()=>{o().caret=!1}}})}const Q=[{path:"/",name:"Home",component:()=>y(()=>import("./Home.f5c7a786.js"),["assets/Home.f5c7a786.js","assets/Home.107cd3c9.css","assets/vendor.a6db5cbf.js"])},{path:"/search",name:"SearchRedirect",component:()=>y(()=>import("./SearchRedrirect.189b00c4.js"),["assets/SearchRedrirect.189b00c4.js","assets/vendor.a6db5cbf.js"]),props:t=>({query:t.query.query,engine:t.query.engine})}],Z=O({history:$(),routes:Q});y(()=>Promise.resolve({}),["assets/transition.f598f98a.css"]);const ee=A(G);ee.use(J).use(Z).use(B()).mount("#app");export{o as u};
