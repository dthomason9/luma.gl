/*! For license information please see c427dab2.804bed7b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[5390],{599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=r(4848),o=r(8453);const s={},i="fp32 (32-bit Floating Point)",a={id:"api-reference/shadertools/shader-modules/fp32",title:"fp32 (32-bit Floating Point)",description:'Provides "improved" 32-bit math support to GPU shaders on certain platforms,',source:"@site/../docs/api-reference/shadertools/shader-modules/fp32.md",sourceDirName:"api-reference/shadertools/shader-modules",slug:"/api-reference/shadertools/shader-modules/fp32",permalink:"/docs/api-reference/shadertools/shader-modules/fp32",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/shadertools/shader-modules/fp32.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/api-reference/gltf/"},next:{title:"fp64 (64-bit Floating Point)",permalink:"/docs/api-reference/shadertools/shader-modules/fp64"}},c={},d=[{value:"Performance Implications",id:"performance-implications",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"fp32-32-bit-floating-point",children:"fp32 (32-bit Floating Point)"}),"\n",(0,n.jsx)(t.p,{children:'Provides "improved" 32-bit math support to GPU shaders on certain platforms,\nmainly compensating for non-IEEE compliant "fast-math" functions that\nGPU vendors use to trade accuracy for speed.'}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Function"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["vec2 ",(0,n.jsx)(t.code,{children:"tan_fp32"}),"(vec2 a)"]}),(0,n.jsxs)(t.td,{children:["Improved accuracy ",(0,n.jsx)(t.code,{children:"tan"})," - falls back to ",(0,n.jsx)(t.code,{children:"tan"})," on non-Intel platforms"]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"performance-implications",children:"Performance Implications"}),"\n",(0,n.jsx)(t.p,{children:"Since 32-bit floating point trigonometric is using more accurate Taylor approximations,\nthey cost more GPU cycles than built-in versions.\nIf you need the precision, it is typically worth the cost."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1020:(e,t,r)=>{var n=r(6540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,s={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:d,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},4848:(e,t,r)=>{e.exports=r(1020)},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(6540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);