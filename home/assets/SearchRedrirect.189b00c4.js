import{u as r}from"./index.26ffd4a9.js";import{b as a,x as o,E as s,f as t,g as l}from"./vendor.a6db5cbf.js";const i=a({props:{query:null,engine:null},setup(u){const e=u;let n=o(!1);return s(()=>{if(!n.value)r().selectEngineByCommand(e.engine||"bd"),r().doSearch(e.query||""),n.value=!0;else return}),(c,f)=>(t(),l("h4",null,"Quasar \u6B63\u5728\u4E3A\u4F60\u8DF3\u8F6C..."))}});export{i as default};
