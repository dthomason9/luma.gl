/*! For license information please see 29234193.85530d51.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[6620],{4050:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=n(4848),i=n(8453);const t={},o="Overview",l={id:"README",title:"Overview",description:"luma.gl is a modern GPU toolkit for the Web, focused on processing and visualization of big data.",source:"@site/../docs/README.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",next:{title:"What's New",permalink:"/docs/whats-new"}},a={},h=[{value:"Highlights",id:"highlights",level:2},{value:"API Philosophy",id:"api-philosophy",level:2},{value:"Supported Environments",id:"supported-environments",level:2},{value:"Showcases",id:"showcases",level:2},{value:"Open Governance",id:"open-governance",level:2},{value:"Learning Resources",id:"learning-resources",level:2},{value:"Primary Contributors",id:"primary-contributors",level:2},{value:"History",id:"history",level:2},{value:"Roadmap",id:"roadmap",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:"luma.gl is a modern GPU toolkit for the Web, focused on processing and visualization of big data."}),"\n",(0,r.jsxs)("center",{children:[(0,r.jsx)("a",{href:"https://www.w3.org/TR/webgpu/",children:(0,r.jsx)("img",{style:{height:80,marginRight:30},src:"https://raw.githubusercontent.com/gpuweb/gpuweb/3b3a1632ff1ad6a573330a58710e341bb9d65576/logo/webgpu-horizontal.svg"})}),(0,r.jsx)("a",{href:"https://registry.khronos.org/webgl/specs/latest/2.0/",children:(0,r.jsx)("img",{style:{height:80,marginRight:40},src:"https://raw.github.com/visgl/deck.gl-data/master/images/whats-new/webgl2.jpg"})}),(0,r.jsx)("a",{href:"https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html",children:(0,r.jsx)("img",{style:{height:80},src:"https://raw.github.com/visgl/deck.gl-data/master/images/gltf.png"})})]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("i",{children:"luma.gl supports the latest web GPU standards from W3C and Khronos."})}),"\n",(0,r.jsx)(s.p,{children:"\xa0"}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("a",{href:"https://openvisualization.org",children:(0,r.jsx)("img",{style:{height:80},src:"https://raw.github.com/visgl/deck.gl-data/master/images/logos/openjsf-color-textg.png"})})}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("i",{children:"luma.gl is an OpenJS Foundation / Linux Foundation project."})}),"\n",(0,r.jsx)(s.p,{children:"\xa0"}),"\n",(0,r.jsxs)(s.p,{children:["This documentation describes luma.gl ",(0,r.jsx)(s.strong,{children:"v9.0"}),". See our ",(0,r.jsx)(s.a,{href:"/docs/whats-new",children:(0,r.jsx)(s.strong,{children:"release notes"})})," to learn what is new.\nDocs for older versions are available on github:\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/visgl/luma.gl/blob/8.5-release/docs/README.md",children:"v8.5"})}),",\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/visgl/luma.gl/blob/7.3-release/docs/README.md",children:"v7.3"})}),",\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/visgl/luma.gl/blob/6.4-release/docs/README.md",children:"v6.4"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(s.p,{children:"luma.gl is a modern GPU toolkit for the Web, created to facilitate processing and visualization of big data."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Portable GPU API"})," - for working with GPUs in JavaScript."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"TypeScript"})," - All APIs are rigorously typed."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Pluggable backends"})," - for WebGPU and WebGL ."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Engine-level classes"})," - ",(0,r.jsx)(s.code,{children:"Model"}),", ",(0,r.jsx)(s.code,{children:"Transform"})," and ",(0,r.jsx)(s.code,{children:"AnimationLoop"}),", as well as scenegraph support."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"glTF"})," support."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Shader management system"})," - supports shader modules, dependencies, injection etc."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Shader module library"})," - Pre-optimized moduls for compute, visual effects and post processing."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"For 3D math and data loading, luma.gl uses companion framworks:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://loaders.gl",children:(0,r.jsx)(s.strong,{children:"loaders.gl"})})," - wide range of 3D and geospatial data format standards."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://uber-web.github.io/math.gl/docs",children:(0,r.jsx)(s.strong,{children:"math.gl"})})," - a variety of high precision geospatial and 3D math logic."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"luma.gl is intended to be a foundation on top of which to build higher-level GPU frameworks. The primary example is"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://deck.gl",children:(0,r.jsx)(s.strong,{children:"deck.gl"})})," - geospatial GPU visualization and compute via a high-performance functional programming API."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"api-philosophy",children:"API Philosophy"}),"\n",(0,r.jsx)(s.p,{children:'Many 3D / GPU libraries provide portable, higher level "3D engine" type abstractions\nthat shield the user from the details of how the GPU works. This is great for\nmany use cases but not always ideal.'}),"\n",(0,r.jsx)(s.p,{children:"In contrast, luma.gl is designed to give developers full access to GPU programming and\nallow you to work directly with shaders and GPU data structures.\nluma.gl offers APIs that are similar to the underlying WebGPU and WebGL APIs.\nThis maximizes knowledge reuse, as well as your understanding of what is actually happening under the hood."}),"\n",(0,r.jsxs)(s.p,{children:["For more information, refer to ",(0,r.jsx)(s.a,{href:"/docs/api-guide/background/api-design",children:"luma.gl API philosophy"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"supported-environments",children:"Supported Environments"}),"\n",(0,r.jsx)(s.p,{children:"luma.gl supports recent versions of the most commonly used evergreen browsers (i.e. Chrome, Firefox, Safari, Edge)."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Mobile browsers"})," should be supported (assuming the mobile browser is an updated evergreen browser), though CPU and GPU memory limits will be lower."]}),"\n",(0,r.jsxs)(s.li,{children:["Pre-chrome ",(0,r.jsx)(s.strong,{children:"Edge"})," is not supported, and IE11 is absolutely not supported."]}),"\n",(0,r.jsxs)(s.li,{children:["Running on top of ",(0,r.jsx)(s.strong,{children:"software emulated GPUs"})," is possible but known to have occasional issues. Check your Chrome settings to make sure you are not using the SwiftShader."]}),"\n",(0,r.jsxs)(s.li,{children:["Running in ",(0,r.jsx)(s.strong,{children:"virtual machines"})," is not officially supported. It may or may not work."]}),"\n",(0,r.jsxs)(s.li,{children:["Running under ",(0,r.jsx)(s.strong,{children:"Node.js"})," may be possible if your Node.js environment can create WebGPU or WebGL contexts. Note that additional work may be required to load images into textures etc."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Most luma.gl development is done on desktop Chrome on MacBooks.\nIn case you think you have found an issue and want to check if it is specific to your environment,\nit could be worth testing if you can reproduce your issue on Chrome before you report the bug."}),"\n",(0,r.jsxs)(s.p,{children:["If you have a confirmed bug that affects a supported environment, feel free to ",(0,r.jsx)(s.a,{href:"https://github.com/visgl/luma.gl/issues",children:"open an issue"}),".\nHowever, if you are not yet sure, please help us keep issue noise down and start in the ",(0,r.jsx)(s.a,{href:"https://github.com/visgl/luma.gl/discussions",children:"discussions"}),".\nIf you can provide a fix, you are welcome to open a pull request. It often makes sense to discuss before surprising maintainers with a big PR."]}),"\n",(0,r.jsx)(s.h2,{id:"showcases",children:"Showcases"}),"\n",(0,r.jsx)(s.p,{children:"Some examples of applications built on top of luma.gl:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"center"},children:(0,r.jsx)("img",{style:{width:250,height:250},src:"https://deck.gl/images/showcase/kepler-gl.jpg"})}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:(0,r.jsx)("img",{style:{width:250,height:250},src:"https://deck.gl/images/showcase/avs.jpg"})}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:(0,r.jsx)("img",{style:{width:250,height:250},src:"https://deck.gl/images/showcase/viv.jpg"})})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:(0,r.jsxs)("center",{children:[(0,r.jsx)("b",{children:"kepler.gl"}),(0,r.jsx)("p",{children:(0,r.jsx)("i",{children:"open source geospatial analysis tool for large-scale data sets"})})]})}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:(0,r.jsxs)("center",{children:[(0,r.jsx)("b",{children:"AVS / streetscape.gl"}),(0,r.jsx)("p",{children:(0,r.jsx)("i",{children:"A visualization toolkit for autonomy and robotics data"})})]})}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:(0,r.jsxs)("center",{children:[(0,r.jsx)("b",{children:"VIV"}),(0,r.jsx)("p",{children:(0,r.jsx)("i",{children:"Visualization of cellular biological samples"})})]})})]})})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://kepler.gl/",children:"kepler.gl"})," (",(0,r.jsx)(s.a,{href:"https://github.com/keplergl/kepler.gl",children:"GitHub"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://deck.gl/#/",children:"deck.gl"})," (",(0,r.jsx)(s.a,{href:"https://github.com/visgl/deck.gl",children:"GitHub"}),") a WebGL-powered framework for visual exploratory data analysis of large data sets"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://avs.auto/#/",children:"avs.auto"})," and ",(0,r.jsx)(s.a,{href:"https://github.com/uber/streetscape.gl",children:"streetscape.gl"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"open-governance",children:"Open Governance"}),"\n",(0,r.jsx)(s.p,{children:"luma.gl is provided under MIT license and is under open governance as a part of:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsx)(s.a,{href:"https://openvisualization.org",children:"OpenJS foundation"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsx)(s.a,{href:"https://vis.gl",children:"vis.gl framework suite"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"learning-resources",children:"Learning Resources"}),"\n",(0,r.jsx)(s.p,{children:"To learn more for learning and discussions."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["check out the ",(0,r.jsx)(s.a,{href:"https://medium.com/vis-gl",children:"vis.gl Medium blog"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["join the community in the ",(0,r.jsx)(s.a,{href:"https://www.openvisualization.org/#get-involved",children:"OpenJS Slack workspace"}),"\nIf you wish to contribute in a structured way, beyond isolated PRs, or join the open governance activities,\nstart by joining the forums above and introduce yourself."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"primary-contributors",children:"Primary Contributors"}),"\n",(0,r.jsx)(s.p,{children:"luma.gl is developed and maintained by the vis.gl community but has benefitted from the support of various companies:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["From 2021 onwards, luma.gl has been developed and maintained by ",(0,r.jsx)(s.a,{href:"https://location.foursquare.com/products/studio/",children:(0,r.jsx)(s.strong,{children:"Foursquare"})}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["From 2019-2021, luma.gl was developed and maintained by ",(0,r.jsx)(s.a,{href:"https://unfolded.ai",children:(0,r.jsx)(s.strong,{children:"Unfolded"})}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["From 2015-2019, luma.gl was created and developed by ",(0,r.jsx)(s.a,{href:"https://uber.com",children:(0,r.jsx)(s.strong,{children:"Uber"})}),"."]}),"\n"]}),"\n",(0,r.jsx)("p",{style:{marginTop:-60,marginBottom:-20,marginLeft:30},children:(0,r.jsx)("a",{href:"https://location.foursquare.com/products/studio/",children:(0,r.jsx)("img",{style:{height:160},src:"https://raw.github.com/visgl/deck.gl-data/master/images/logos/foursquare.png"})})}),"\n",(0,r.jsx)("a",{href:"https://unfolded.ai",children:(0,r.jsx)("img",{style:{height:50,marginLeft:20},src:"https://raw.github.com/visgl/deck.gl-data/master/images/logos/unfolded.png"})}),"\n",(0,r.jsx)(s.p,{children:"\xa0"}),"\n",(0,r.jsx)("a",{href:"https://uber.com",children:(0,r.jsx)("img",{style:{height:100},src:"https://raw.github.com/visgl/deck.gl-data/master/images/logos/uber-black.jpg"})}),"\n",(0,r.jsx)(s.h2,{id:"history",children:"History"}),"\n",(0,r.jsx)(s.p,{children:"luma.gl was originally created at Uber in 2015 as an open source project to support deck.gl."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"2022: luma.gl was accepted into the OpenJS foundation together with the vis.gl framework stack."}),"\n",(0,r.jsx)(s.li,{children:"2019: Uber put luma.gl under open governance in the Linux Foundation."}),"\n",(0,r.jsxs)(s.li,{children:["2015: luma.gl started out as a fork of the ",(0,r.jsx)(s.a,{href:"https://github.com/senchalabs/philogl",children:"PhiloGL"})," WebGL library."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,r.jsx)(s.p,{children:"luma.gl keeps evolving based on the needs of vis.gl frameworks and applications.\nWe share information about the direction of luma.gl in the following ways:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://medium.com/@vis.gl",children:"Blog"})})," - We use the vis.gl blog to share information about what we are doing."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/visgl/luma.gl/issues",children:"Github Issues"})})," - The traditional way to start or join a discussion."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/visgl/luma.gl/tree/master/dev-docs/RFCs",children:"RFCs"})})," - RFCs are technical writeups that describe proposed features in upcoming releases."]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1020:(e,s,n)=>{var r=n(6540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function h(e,s,n){var r,t={},h=null,d=null;for(r in void 0!==n&&(h=""+n),void 0!==s.key&&(h=""+s.key),void 0!==s.ref&&(d=s.ref),s)o.call(s,r)&&!a.hasOwnProperty(r)&&(t[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===t[r]&&(t[r]=s[r]);return{$$typeof:i,type:e,key:h,ref:d,props:t,_owner:l.current}}s.Fragment=t,s.jsx=h,s.jsxs=h},4848:(e,s,n)=>{e.exports=n(1020)},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var r=n(6540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);