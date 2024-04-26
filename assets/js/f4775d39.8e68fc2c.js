/*! For license information please see f4775d39.8e68fc2c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[7268],{2373:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>f,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=d(4848),c=d(8453);const n={},t="Buffer",i={id:"api-reference/core/resources/buffer",title:"Buffer",description:"Holds a block of GPU memory. The length of a buffer cannot be changed after creation.",source:"@site/../docs/api-reference/core/resources/buffer.md",sourceDirName:"api-reference/core/resources",slug:"/api-reference/core/resources/buffer",permalink:"/docs/api-reference/core/resources/buffer",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/core/resources/buffer.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Texture Formats",permalink:"/docs/api-reference/core/texture-formats"},next:{title:"ComputePass",permalink:"/docs/api-reference/core/resources/compute-pass"}},o={},l=[{value:"Types",id:"types",level:2},{value:"<code>BufferProps</code>",id:"bufferprops",level:3},{value:"Usage",id:"usage",level:3},{value:"Members",id:"members",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>constructor(props: BufferProps)</code>",id:"constructorprops-bufferprops",level:3},{value:"<code>destroy(): void</code>",id:"destroy-void",level:3}];function h(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"buffer",children:"Buffer"}),"\n",(0,s.jsx)(r.p,{children:"Holds a block of GPU memory. The length of a buffer cannot be changed after creation."}),"\n",(0,s.jsx)(r.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(r.h3,{id:"bufferprops",children:(0,s.jsx)(r.code,{children:"BufferProps"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"usage?"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)(r.td,{children:"Bit mask of Usage flags"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"byteLength?"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)(r.td,{children:"Length of buffer (cannot be changed after creation)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"data?"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"ArrayBuffer | ArrayBufferView"})}),(0,s.jsxs)(r.td,{children:["Data to be copied into buffer. ",(0,s.jsx)(r.code,{children:"byteLength"})," will be deduced if not supplied."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"byteOffset?"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsxs)(r.td,{children:["Offset for ",(0,s.jsx)(r.code,{children:"data"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"indexType?"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"'uint16' | 'uint32'"})}),(0,s.jsx)(r.td,{children:"If props.usage & Buffer.INDEX"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(r.p,{children:"Usage expresses two things: The type of buffer and what operations can be performed on it."}),"\n",(0,s.jsx)(r.p,{children:"Note that the allowed combinations are very limited, especially in WebGPU."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Usage Flag"}),(0,s.jsx)(r.th,{children:"Value"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Buffer.INDEX"})}),(0,s.jsx)(r.td,{children:"0x0010"}),(0,s.jsx)(r.td,{children:"An index buffer (array of 16 or 32 bit unsigned integers"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Buffer.VERTEX"})}),(0,s.jsx)(r.td,{children:"0x0020"}),(0,s.jsx)(r.td,{children:"A vertex buffer (a binary column)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Buffer.UNIFORM"})}),(0,s.jsx)(r.td,{children:"0x0040"}),(0,s.jsx)(r.td,{children:"A uniform buffer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Buffer.STORAGE"})}),(0,s.jsx)(r.td,{children:"0x0080"}),(0,s.jsx)(r.td,{children:"A storage buffer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Buffer.INDIRECT"})}),(0,s.jsx)(r.td,{children:"0x0100"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Buffer.QUERY_RESOLVE"})}),(0,s.jsx)(r.td,{children:"0x0200"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Buffer.MAP_READ"})}),(0,s.jsx)(r.td,{children:"0x01"}),(0,s.jsx)(r.td,{children:"Whether the buffer can be mapped for read"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Buffer.MAP_WRITE"})}),(0,s.jsx)(r.td,{children:"0x02"}),(0,s.jsx)(r.td,{children:"Whether the buffer can be mapped for write"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Buffer.COPY_SRC"})}),(0,s.jsx)(r.td,{children:"0x0004"}),(0,s.jsxs)(r.td,{children:["Supports ",(0,s.jsx)(r.code,{children:"commandEncoder.copyBufferTo..."})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Buffer.COPY_DST"})}),(0,s.jsx)(r.td,{children:"0x0008"}),(0,s.jsxs)(r.td,{children:["Supports ",(0,s.jsx)(r.code,{children:"commandEncoder.copy...ToBuffer"})]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"members",children:"Members"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"device"}),": ",(0,s.jsx)(r.code,{children:"Device"})," - holds a reference to the ",(0,s.jsx)(r.code,{children:"Device"})," that created this ",(0,s.jsx)(r.code,{children:"Buffer"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"handle"}),": ",(0,s.jsx)(r.code,{children:"unknown"})," - holds the underlying WebGL or WebGPU shader object"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"props"}),": ",(0,s.jsx)(r.code,{children:"BufferProps"})," - holds a copy of the ",(0,s.jsx)(r.code,{children:"BufferProps"})," used to create this ",(0,s.jsx)(r.code,{children:"Buffer"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(r.h3,{id:"constructorprops-bufferprops",children:(0,s.jsx)(r.code,{children:"constructor(props: BufferProps)"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Buffer"})," is an abstract class and cannot be instantiated directly. Create with ",(0,s.jsx)(r.code,{children:"device.createBuffer(...)"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"destroy-void",children:(0,s.jsx)(r.code,{children:"destroy(): void"})}),"\n",(0,s.jsx)(r.p,{children:"Free up any GPU resources associated with this buffer immediately (instead of waiting for garbage collection)."})]})}function f(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1020:(e,r,d)=>{var s=d(6540),c=Symbol.for("react.element"),n=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,d){var s,n={},l=null,h=null;for(s in void 0!==d&&(l=""+d),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(h=r.ref),r)t.call(r,s)&&!o.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:c,type:e,key:l,ref:h,props:n,_owner:i.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},4848:(e,r,d)=>{e.exports=d(1020)},8453:(e,r,d)=>{d.d(r,{R:()=>t,x:()=>i});var s=d(6540);const c={},n=s.createContext(c);function t(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);