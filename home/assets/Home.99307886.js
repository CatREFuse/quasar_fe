import{b as v,r as T,v as M,x as C,w as S,e as w,f as l,g as h,h as r,k as _,y as D,u,z as $,i as b,t as k,o as A,n as q,F as I,A as W,B as z,j as E,l as K,C as f,D as L}from"./vendor.a6db5cbf.js";import{u as t}from"./index.7d9d62fc.js";var P="./assets/quasar_logo.ebe1606d.svg",R="./assets/icon_right.6e42ab05.svg";const V={class:"w-full"},j={class:"inline-flex flex-row items-center h-14 w-full gap-2 py-0 pl-4 pr-2 rounded-[1rem] bg-white text-sm md:text-base align-middle sticky top-2 md:static"},Q=["src"],U=["placeholder"],Y=v({props:{urlPattern:{type:String,default:"https://www.baidu.com/s?wd={query}",required:!1},iconName:{type:String,default:"baidu.svg",required:!1}},setup(d){const s=d;function n(){t().caret=!0}function i(){t().caret=!1}const e=T({tip:"",searchStr:"",placeholder:"",isComposing:!1});let m=M(()=>s.urlPattern.replace("{query}",e.searchStr));function a(){e.isComposing=!0}function c(){setTimeout(()=>{e.isComposing=!1},10)}function g(o){e.searchStr!=""&&(e.isComposing||(t().engine,t().postRecord(e.searchStr,t().engine),window.open(m.value,"_blank")))}const x=C(null);S(()=>t().engine,()=>{setTimeout(()=>{var o;return(o=x.value)==null?void 0:o.focus()},100)}),S(()=>e.searchStr,()=>{if(!e.searchStr.startsWith("\\")){for(let o of t().engines)if(e.searchStr==o.command||e.searchStr==o.title){e.tip=`\u6309\u4E0B\u7A7A\u683C\u9009\u62E9\u300C${o.title}\u300D ${o.loginRequire==1?" / \u9700\u8981\u767B\u5F55":""}`;break}else e.tip="";for(let o of t().engines)(e.searchStr.startsWith(o.command+" ")||e.searchStr.startsWith(o.title+" "))&&(t().selectEngine(o),e.searchStr="")}}),S(()=>t().hoverEngine,(o,p)=>{e.searchStr==""&&(o?e.placeholder=`\u8F93\u5165\u300C${o.command}\u300D\u53EF\u5FEB\u901F\u9009\u62E9\u300C${o.title}\u300D`:e.placeholder="Search for Your Quasar")});function B(){e.searchStr!=""}function F(){e.searchStr!=""&&(e.tip="")}return(o,p)=>{const N=w("dot-hover");return l(),h("div",V,[r("div",j,[r("img",{src:`https://gitee.com/CatREFuse/img-base/raw/master/icons/${d.iconName}`,class:"w-6 h-6 select-none"},null,8,Q),_(r("input",{type:"text",class:"h-14 font-bold w-full placeholder:text-gray-300 placeholder:font-bold outline-none",placeholder:u(e).placeholder,onKeydown:p[0]||(p[0]=$(y=>g(),["enter"])),"onUpdate:modelValue":p[1]||(p[1]=y=>u(e).searchStr=y),ref_key:"input",ref:x,onMouseenter:n,onMouseleave:i,onCompositionstart:a,onCompositionend:c},null,40,U),[[D,u(e).searchStr]]),r("p",{class:"text-xs font-medium text-right whitespace-nowrap",style:b({color:u(e).tip=="\u70B9\u51FB\u4EE5\u641C\u7D22"?"var(--text-mian)":"var(--text-disabled)"})},k(u(e).tip),5),_(r("img",{src:R,class:"select-none hover:cursor-pointer w-8 h-8",onClick:p[2]||(p[2]=y=>g()),style:b({opacity:u(e).searchStr==""?.3:1}),onMouseenter:B,onMouseleave:F,onCompositionstart:a,onCompositionend:c},null,36),[[N]])])])}}});var G=(d,s)=>{const n=d.__vccOpts||d;for(const[i,e]of s)n[i]=e;return n};const H={class:"w-4 h-4 md:w-6 md:h-6 overflow-hidden"},O=["src"],Z=v({props:{iconName:{default:"baidu.svg"},title:{default:"\u767E\u5EA6"},chosen:{type:Boolean,default:!1},index:null,engine:null},emits:["chose"],setup(d){const s=d;function n(){t().hoverEngine=s.engine}function i(){t().hoverEngine=void 0}const e=C(null),m=C(0);A(()=>{var c;m.value=((c=e.value)==null?void 0:c.clientWidth)||0});function a(){t().selectEngine(s.engine)}return(c,g)=>{const x=w("dot-hover");return _((l(),h("div",{class:"relative inline-flex items-center gap-2 py-0 px-4 bg-white rounded-2xl h-11 md:h-12 md:transition-all select-none md:hover:shadow-2xl md:hover:transition-all hover:cursor-pointer group",onTouchstart:a,onMousedown:a,style:b({"background-color":s.chosen?"var(--accent-color)":"white"}),onMouseenter:n,onMouseleave:i,ref_key:"label",ref:e},[r("div",H,[r("img",{class:q({white:s.chosen}),src:`https://gitee.com/CatREFuse/img-base/raw/master/icons/${s.iconName}`},null,10,O)]),r("p",{class:"font-bold text-base md:text[17px]",style:b({color:s.chosen?"white":"var(--text-main)"})},k(s.title),5)],36)),[[x]])}}});var J=G(Z,[["__scopeId","data-v-745eebc4"]]);const X={class:"flex flex-row items-start p-0 gap-3 md:gap-4 flex-wrap w-full user-select-none"},ee=v({emits:["engine-change"],setup(d){function s(n,i){t().selectEngineByIndex(i)}return(n,i)=>(l(),h("div",X,[(l(!0),h(I,null,W(u(t)().engines,(e,m)=>{var a;return l(),z(J,{key:m,title:e.title,"icon-name":e.iconName,index:m,onChose:c=>s(c,m),chosen:((a=u(t)().engine)==null?void 0:a.title)==e.title,engine:e},null,8,["title","icon-name","index","onChose","chosen","engine"])}),128))]))}}),te=r("img",{src:P,class:"w-40 md:w-60 select-none"},null,-1),oe={key:0,name:"footer",class:"text-center md:fixed md:bottom-6 md:right-[28px] md:text-right md:z-[100] select-text text-sm mt-4 font-medium opacity-30"},se={class:"my-2"},ne=f(" \xA9 2020 - 2021 \u{1F353} "),re={href:"http:///bad-strawberry.com",target:"_blank",class:"decoration-none hover:underline"},ie=f("Bad Strawberry"),ae=[ie],ce=f(". "),le=r("span",null,"All rights reserved.",-1),ue={href:"https://www.craft.do/s/Gi8HESIcZQsSIY",target:"_blank",class:"decoration-none hover:underline"},de=f("\u7528\u6237\u534F\u8BAE"),he=[de],me=f(" \xB7 "),pe={href:"https://beian.miit.gov.cn/#/Integrated/index",target:"_blank",class:"decoration-none hover:underline"},_e=f("\u6D59 ICP \u5907 2020033146 \u53F7 - 2"),fe=[_e],ge=v({setup(d){function s(n){t().switchEngineByAdd((n==null?void 0:n.shiftKey)?-1:1)}return(n,i)=>{var a,c;const e=w("dot-hover"),m=w("text-hover");return l(),h("div",{class:"flex flex-col gap-4 md:gap-6 overflow-auto",onKeydown:i[0]||(i[0]=$(L(g=>s(g),["prevent"]),["tab"]))},[te,E(Y,{class:"w-full",iconName:(a=u(t)().engine)==null?void 0:a.iconName,"url-pattern":(c=u(t)().engine)==null?void 0:c.urlPattern},null,8,["iconName","url-pattern"]),E(ee),u(t)().debug?K("",!0):_((l(),h("div",oe,[r("p",se,[ne,_((l(),h("a",re,ae)),[[e]]),ce,le]),r("p",null,[_((l(),h("a",ue,he)),[[e]]),me,_((l(),h("a",pe,fe)),[[e]])])])),[[m]])],32)}}}),ve={class:"col-start-2 col-end-12 md:col-start-2 md:col-end-7 md:min-w-[512px] md:max-w-[720px] mt-12 md:mt-16"},be=v({setup(d){return(s,n)=>(l(),h("div",ve,[E(ge,{class:"w-full"})]))}});export{be as default};
