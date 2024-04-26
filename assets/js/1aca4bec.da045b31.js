/*! For license information please see 1aca4bec.da045b31.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[6151],{7006:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var d=s(4848),i=s(8453);const r={},o="ShaderModule",l={id:"api-reference/shadertools/shader-module",title:"ShaderModule",description:"In luma.gl, reusable shader modules are defined by objects that conform to the ShaderModule type.",source:"@site/../docs/api-reference/shadertools/shader-module.md",sourceDirName:"api-reference/shadertools",slug:"/api-reference/shadertools/shader-module",permalink:"/docs/api-reference/shadertools/shader-module",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/shadertools/shader-module.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/api-reference/shadertools/"},next:{title:"ShaderAssembler",permalink:"/docs/api-reference/shadertools/shader-assembler"}},t={},c=[{value:"Usage",id:"usage",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>name</code>",id:"name",level:4},{value:"<code>vs</code>",id:"vs",level:4},{value:"<code>fs</code>",id:"fs",level:4},{value:"<code>uniforms</code> (<em>Object</em>)",id:"uniforms-object",level:4},{value:"<code>inject</code> (<em>Object</em>) - injections the module will make into shader hooks, see below",id:"inject-object---injections-the-module-will-make-into-shader-hooks-see-below",level:4},{value:"<code>dependencies</code> (<em>Array</em>) - a list of other shader modules that this module is dependent on",id:"dependencies-array---a-list-of-other-shader-modules-that-this-module-is-dependent-on",level:4},{value:"<code>deprecations</code> (<em>Array</em>) - a list of deprecated APIs.",id:"deprecations-array---a-list-of-deprecated-apis",level:4},{value:"Defining Uniforms",id:"defining-uniforms",level:3},{value:"Defining Injections",id:"defining-injections",level:2},{value:"Functions",id:"functions",level:2},{value:"<code>getShaderModuleUniforms()</code>",id:"getshadermoduleuniforms",level:4},{value:"<code>getShaderModuleDependencies()</code>",id:"getshadermoduledependencies",level:4},{value:"TODO",id:"todo",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"shadermodule",children:"ShaderModule"}),"\n",(0,d.jsxs)(n.p,{children:["In luma.gl, reusable shader modules are defined by objects that conform to the ",(0,d.jsx)(n.code,{children:"ShaderModule"})," type.\nFor more information see ",(0,d.jsx)(n.a,{href:"/docs/api-guide/shaders/shader-modules",children:"Shader Module System Guide"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ShaderModule"}),"s are used by the luma.gl ",(0,d.jsx)(n.a,{href:"./shader-assembler",children:"shader assembler"}),". The shader assembler imports chunks of reusable shader code from the module into your shader program source code."]}),"\n",(0,d.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(n.p,{children:"To define a new shader module, you create a descriptor object that brings together all the necessary pieces:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"export const MY_SHADER_MODULE = {\n  name: 'my-shader-module',\n  vs: '...',\n  fs: '...',\n  inject: {},\n  dependencies: [],\n  deprecations: [],\n  getUniforms\n};\n"})}),"\n",(0,d.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,d.jsx)(n.h4,{id:"name",children:(0,d.jsx)(n.code,{children:"name"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"name"})," (string) - The name of the shader module."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"vs",children:(0,d.jsx)(n.code,{children:"vs"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"vs?"})," - (string | null)"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"fs",children:(0,d.jsx)(n.code,{children:"fs"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"fs"})," - (string | null)"]}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"uniforms-object",children:[(0,d.jsx)(n.code,{children:"uniforms"})," (",(0,d.jsx)(n.em,{children:"Object"}),")"]}),"\n",(0,d.jsxs)(n.h4,{id:"inject-object---injections-the-module-will-make-into-shader-hooks-see-below",children:[(0,d.jsx)(n.code,{children:"inject"})," (",(0,d.jsx)(n.em,{children:"Object"}),") - injections the module will make into shader hooks, see below"]}),"\n",(0,d.jsxs)(n.h4,{id:"dependencies-array---a-list-of-other-shader-modules-that-this-module-is-dependent-on",children:[(0,d.jsx)(n.code,{children:"dependencies"})," (",(0,d.jsx)(n.em,{children:"Array"}),") - a list of other shader modules that this module is dependent on"]}),"\n",(0,d.jsxs)(n.h4,{id:"deprecations-array---a-list-of-deprecated-apis",children:[(0,d.jsx)(n.code,{children:"deprecations"})," (",(0,d.jsx)(n.em,{children:"Array"}),") - a list of deprecated APIs."]}),"\n",(0,d.jsxs)(n.p,{children:["If ",(0,d.jsx)(n.code,{children:"deprecations"})," is supplied, ",(0,d.jsx)(n.code,{children:"assembleShaders"})," will scan shader source code for the deprecated constructs and issue a console warning if found. Each API is described in the following format:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"type"}),": ",(0,d.jsx)(n.code,{children:"uniform <type>"})," or ",(0,d.jsx)(n.code,{children:"function"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"old"}),": name of the deprecated uniform/function"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"new"}),": name of the new uniform/function"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"deprecated"}),": whether the old API is still supported."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"defining-uniforms",children:"Defining Uniforms"}),"\n",(0,d.jsxs)(n.p,{children:["If the uniforms of this module can be directly pulled from user settings, they may declaratively defined by a ",(0,d.jsx)(n.code,{children:"uniforms"})," object:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"{\n  name: 'my-shader-module',\n  uniforms: {\n    strength: {type: 'number', value: 1, min: 0, max: 1},\n    center: [0.5, 0.5]\n  }\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["At runtime, this map will be used to generate the uniforms needed by the shaders. If either ",(0,d.jsx)(n.code,{children:"strength"})," or ",(0,d.jsx)(n.code,{children:"center"})," is present in the user's module settings, then the user's value will be used; otherwise, the default value in the original definition will be used."]}),"\n",(0,d.jsx)(n.p,{children:"Each uniform definition may contain the following fields:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"type"})," (string ",(0,d.jsx)(n.code,{children:"number"}),", ",(0,d.jsx)(n.code,{children:"boolean"}),", ",(0,d.jsx)(n.code,{children:"array"})," or ",(0,d.jsx)(n.code,{children:"object"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"value"})," - the default value of this uniform"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["With ",(0,d.jsx)(n.code,{children:"type: 'number'"}),", the following additional fields may be added for validation:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"min"})," (",(0,d.jsx)(n.em,{children:"Number"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"max"})," (",(0,d.jsx)(n.em,{children:"Number"}),")"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Note: ",(0,d.jsx)(n.code,{children:"uniforms"})," is ignored if ",(0,d.jsx)(n.code,{children:"getUniforms"})," is provided."]}),"\n",(0,d.jsx)(n.h2,{id:"defining-injections",children:"Defining Injections"}),"\n",(0,d.jsxs)(n.p,{children:["A map of hook function signatures to either the injection code string, or an object containing the injection code and an ",(0,d.jsx)(n.code,{children:"order"})," option indicating ordering within the hook function. See ",(0,d.jsx)(n.a,{href:"/docs/api-reference/shadertools/shader-assembler",children:"assembleShaders"})," documentation for more information on shader hooks."]}),"\n",(0,d.jsx)(n.p,{children:"For example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"{\n  picking: {\n    'vs:VERTEX_HOOK_FUNCTION': 'picking_setPickingColor(color.rgb);',\n    'fs:FRAGMENT_HOOK_FUNCTION': {\n      injection: 'color = picking_filterColor(color);',\n      order: Number.POSITIVE_INFINITY\n    },\n    'fs:#main-end': 'gl_FragColor = picking_filterColor(gl_FragColor);'\n  }\n}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,d.jsx)(n.h4,{id:"getshadermoduleuniforms",children:(0,d.jsx)(n.code,{children:"getShaderModuleUniforms()"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"getShaderModuleUniforms(module: ShaderModule)\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{}),"\n",(0,d.jsx)(n.li,{children:"JavaScript function that maps JavaScript parameter keys to uniforms used by this module"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Each shader module provides a method to get a map of uniforms for the shader. This function will be called with two arguments:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"opts"})," - the module settings to update. This argument may not be provided when ",(0,d.jsx)(n.code,{children:"getUniforms"})," is called to generate a set of default uniform values."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"context"})," - the uniforms generated by this module's dependencies."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The function should return a JavaScript object with keys representing uniform names and values representing uniform values."}),"\n",(0,d.jsxs)(n.p,{children:["The function should expect the shape of the dependency uniforms to vary based on what's passed in ",(0,d.jsx)(n.code,{children:"opts"}),". This behavior is intended because we only want to recalculate a uniform if the uniforms that it depends on are changed. An example is the ",(0,d.jsx)(n.code,{children:"project"})," and ",(0,d.jsx)(n.code,{children:"project64"})," modules in deck.device. When ",(0,d.jsx)(n.code,{children:"opts.viewport"})," is provided, ",(0,d.jsx)(n.code,{children:"project64"})," will receive the updated projection matrix generated by the ",(0,d.jsx)(n.code,{children:"project"})," module. If ",(0,d.jsx)(n.code,{children:"opts.viewport"})," is empty, then the ",(0,d.jsx)(n.code,{children:"project"})," module generates nothing and so should ",(0,d.jsx)(n.code,{children:"project64"})]}),"\n",(0,d.jsx)(n.h4,{id:"getshadermoduledependencies",children:(0,d.jsx)(n.code,{children:"getShaderModuleDependencies()"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"getShaderModuleDependencies(module: ShaderModule): ShaderModule[]\n"})}),"\n",(0,d.jsx)(n.h2,{id:"todo",children:"TODO"}),"\n",(0,d.jsxs)(n.admonition,{type:"caution",children:[(0,d.jsx)(n.p,{children:"This page is not complete:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Describe props to uniforms mapping system"}),"\n",(0,d.jsx)(n.li,{children:"Better documentation of getShaderModuleUniforms"}),"\n",(0,d.jsx)(n.li,{children:"Describe all functions working on shader modules"}),"\n",(0,d.jsx)(n.li,{children:"Better reference information for injections"}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},1020:(e,n,s)=>{var d=s(6540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var d,r={},c=null,a=null;for(d in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,d)&&!t.hasOwnProperty(d)&&(r[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===r[d]&&(r[d]=n[d]);return{$$typeof:i,type:e,key:c,ref:a,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},4848:(e,n,s)=>{e.exports=s(1020)},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var d=s(6540);const i={},r=d.createContext(i);function o(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);