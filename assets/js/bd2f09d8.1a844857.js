/*! For license information please see bd2f09d8.1a844857.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[1072],{9494:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var s=r(4848),i=r(8453);const d={},t="RenderPipeline",l={id:"api-reference/core/resources/render-pipeline",title:"RenderPipeline",description:"A RenderPipeline contains a matched pair of vertex and fragment shaders that can be exectued on the GPU by calling RenderPipeline.draw(). handle compilation and linking of shaders, and store uniform values. They provide draw call which allows the application to run the shaders on specified input data.",source:"@site/../docs/api-reference/core/resources/render-pipeline.md",sourceDirName:"api-reference/core/resources",slug:"/api-reference/core/resources/render-pipeline",permalink:"/docs/api-reference/core/resources/render-pipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/core/resources/render-pipeline.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"RenderPass",permalink:"/docs/api-reference/core/resources/render-pass"},next:{title:"Sampler",permalink:"/docs/api-reference/core/resources/sampler"}},c={},a=[{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:2},{value:"RenderPipelineProps",id:"renderpipelineprops",level:3},{value:"PrimitiveTopology",id:"primitivetopology",level:3},{value:"Members",id:"members",level:2},{value:"Methods",id:"methods",level:2},{value:"constructor",id:"constructor",level:2},{value:"destroy()",id:"destroy",level:3},{value:"draw(opts) : RenderPipeline",id:"drawopts--renderpipeline",level:3},{value:"setBindings()",id:"setbindings",level:3},{value:"setUniformsWebGL()",id:"setuniformswebgl",level:3},{value:"WebGL notes",id:"webgl-notes",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"renderpipeline",children:"RenderPipeline"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"RenderPipeline"})," contains a matched pair of vertex and fragment ",(0,s.jsx)(n.a,{href:"/docs/api-reference/core/resources/shader",children:"shaders"})," that can be exectued on the GPU by calling ",(0,s.jsx)(n.code,{children:"RenderPipeline.draw()"}),". handle compilation and linking of shaders, and store uniform values. They provide ",(0,s.jsx)(n.code,{children:"draw"})," call which allows the application to run the shaders on specified input data."]}),"\n",(0,s.jsx)(n.p,{children:"A RenderPipeline controls the vertex and fragment shader stages, and can be used in GPURenderPassEncoder as well as GPURenderBundleEncoder."}),"\n",(0,s.jsx)(n.p,{children:"Render pipeline inputs are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"bindings, according to the given bindingLayout"}),"\n",(0,s.jsx)(n.li,{children:"vertex and index buffers"}),"\n",(0,s.jsx)(n.li,{children:"the color attachments, Framebuffer"}),"\n",(0,s.jsx)(n.li,{children:"the optional depth-stencil attachment, described by Framebuffer"}),"\n",(0,s.jsx)(n.li,{children:"parameters"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Render pipeline outputs are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'buffer bindings with a type of "storage"'}),"\n",(0,s.jsx)(n.li,{children:'storageTexture bindings with a access of "write-only"'}),"\n",(0,s.jsx)(n.li,{children:"the color attachments, described by Framebuffer"}),"\n",(0,s.jsx)(n.li,{children:"the depth-stencil optional attachment, described by Framebuffer"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A render pipeline is comprised of the following render stages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Vertex fetch, from the buffers buffers"}),"\n",(0,s.jsx)(n.li,{children:"Vertex shader, props.vs"}),"\n",(0,s.jsx)(n.li,{children:"Primitive assembly, controlled by"}),"\n",(0,s.jsx)(n.li,{children:"Rasterization controlled by parameters (GPUPrimitiveState, GPUDepthStencilState, and GPUMultisampleState)"}),"\n",(0,s.jsx)(n.li,{children:"Fragment shader, controlled by props.fs"}),"\n",(0,s.jsx)(n.li,{children:"Stencil test and operation, controlled by GPUDepthStencilState"}),"\n",(0,s.jsx)(n.li,{children:"Depth test and write, controlled by GPUDepthStencilState"}),"\n",(0,s.jsx)(n.li,{children:"Output merging, controlled by GPUFragmentState.targets"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Creating a pipeline"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const pipeline = device.createRenderPipeline({\n  id: 'my-pipeline',\n  vs: device.createShader({type: 'vertex', source: vertexShaderSource}),\n  fs: device.createShader({type: 'fragment', source: fragmentShaderSource})\n  topology: 'triangle-list',\n  parameters: {\n    depthTest: true\n  }\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set or update uniforms, in this case world and projection matrices"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"pipeline.setUniforms({\n  uMVMatrix: view,\n  uPMatrix: projection\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"VertexArray"})," to store buffer values for the vertices of a triangle and drawing"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const pipeline = device.createRenderPipeline({vs, fs});\n\nconst vertexArray = new VertexArray(gl, {pipeline});\n\nvertexArray.setAttributes({\n  aVertexPosition: new Buffer(gl, {data: new Float32Array([0, 1, 0, -1, -1, 0, 1, -1, 0])})\n});\n\npipeline.draw({vertexArray, ...});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Creating a pipeline for transform feedback, specifying which varyings to use"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const pipeline = device.createRenderPipeline({vs, fs, varyings: ['gl_Position']});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.h3,{id:"renderpipelineprops",children:"RenderPipelineProps"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Mutable?"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Shader"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vs?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Shader"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"null"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Compiled vertex shader"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vertexEntryPoint?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Vertex shader entry point (defaults to 'main'). WGSL only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vsConstants?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Record<string, number>"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Constants to apply to compiled vertex shader (WGSL only)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fs?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Shader"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"null"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Compiled fragment shader"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fragmentEntryPoint?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"stringy"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Fragment shader entry point (defaults to 'main'). WGSL only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fsConstants?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:" Record<string, number>"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Constants to apply to compiled fragment shader (WGSL only)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ShaderLayout"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"topology?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PrimitiveTopology;"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Determines how vertices are read from the 'vertex' attributes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"shaderLayout?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ShaderLayout"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"null"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Describes the attributes and bindings exposed by the pipeline shader(s)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bufferLayout?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"BufferLayout"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GPU Parameters"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"parameters?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RenderPipelineParameters"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Parameters that are controlled by pipeline"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Dynamic settings"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vertexCount?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Number of \"rows\" in 'vertex' buffers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"instanceCount?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Number of \"rows\" in 'instance' buffers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"indices?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Buffer"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"null"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Optional index buffer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"attributes?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Record<string, Buffer>"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Buffers for attributes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bindings?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Record<string, Binding>"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Buffers, Textures, Samplers for the shader bindings"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uniforms?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Record<string, any>"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"uniforms (WebGL only)"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A default mapping of one buffer per attribute is always created."}),"\n",(0,s.jsx)(n.li,{children:"@note interleaving attributes into the same buffer does not increase the number of attributes"}),"\n",(0,s.jsx)(n.li,{children:"that can be used in a shader (16 on many systems)."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"primitivetopology",children:"PrimitiveTopology"}),"\n",(0,s.jsx)(n.p,{children:"Describes how primitives (points, lines or triangles) are formed from vertexes."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"WebGL"}),(0,s.jsx)(n.th,{children:"WebGPU"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'point-list'"})}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"Each vertex defines a point primitive."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'line-list'"})}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"Each consecutive pair of two vertices defines a line primitive."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'line-strip'"})}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"Each vertex after the first defines a line primitive between it and the previous vertex."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'triangle-list'"})}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"Each consecutive triplet of three vertices defines a triangle primitive."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'triangle-strip'"})}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"Each vertex after the first two defines a triangle primitive between it and the previous two vertices."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"members",children:"Members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"})," : ",(0,s.jsx)(n.code,{children:"String"})," - ",(0,s.jsx)(n.code,{children:"id"})," string for debugging."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"device"}),": ",(0,s.jsx)(n.code,{children:"Device"})," - holds a reference to the ",(0,s.jsx)(n.code,{children:"Device"})," that created this ",(0,s.jsx)(n.code,{children:"Buffer"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"handle"}),": ",(0,s.jsx)(n.code,{children:"unknown"})," - holds the underlying WebGL or WebGPU shader object"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"props"}),": ",(0,s.jsx)(n.code,{children:"BufferProps"})," - holds a copy of the ",(0,s.jsx)(n.code,{children:"BufferProps"})," used to create this ",(0,s.jsx)(n.code,{children:"Buffer"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h2,{id:"constructor",children:"constructor"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RenderPipeline"})," is an abstract class and cannot be instantiated directly. Create with ",(0,s.jsx)(n.code,{children:"device.createRenderPipeline(...)"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Creates a new pipeline using the supplied vertex and fragment shaders. The shaders are compiled into WebGLShaders and is created and the shaders are linked."}),"\n",(0,s.jsx)(n.p,{children:"Creates a new pipeline using the supplied vertex and fragment shaders. The shaders are compiled into WebGLShaders and is created and the shaders are linked."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const pipeline = device.createRenderPipeline(props: RenderProps);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const pipeline = device.createRenderPipeline({\n  id: 'my-identifier',\n  vs: vertexShaderSource,\n  fs: fragmentShaderSource,\n  varyings: ['gl_Position', 'vColor']\n});\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"})," (",(0,s.jsx)(n.code,{children:"string"}),", optional) - string id (to help indentify the pipeline during debugging)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vs"})," (",(0,s.jsx)(n.code,{children:"VertexShader"}),"|",(0,s.jsx)(n.code,{children:"String"}),") - A vertex shader object, or source as a string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fs"})," (",(0,s.jsx)(n.code,{children:"FragmentShader"}),"|",(0,s.jsx)(n.code,{children:"String"}),") - A fragment shader object, or source as a string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"varyings"})," WebGL (",(0,s.jsx)(n.code,{children:"String[]"}),") - a list of names of varyings."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["WebGL References ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram",children:"WebGLProgram"}),", ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram",children:"gl.createProgram"})]}),"\n",(0,s.jsx)(n.h3,{id:"destroy",children:"destroy()"}),"\n",(0,s.jsx)(n.p,{children:"Deletes resources held by pipeline. Note: Does not currently delete shaders (to enable shader sharing and caching)."}),"\n",(0,s.jsx)(n.h3,{id:"drawopts--renderpipeline",children:"draw(opts) : RenderPipeline"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RenderPipeline.draw()"})," is the entry point for running shaders, rendering and (optionally calculating data using transform feedback techniques)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"  RenderPipeline.draw({\n    vertexArray,\n\n    uniforms = {},\n    transformFeedback = null,\n    samplers = {},\n    parameters = {},\n\n    topology: 'triangle-list,\n    vertexCount,\n    offset = 0,\n    isInstanced = false,\n    instanceCount = 0,\n\n    start = 0,\n    end=\n  })\n"})}),"\n",(0,s.jsx)(n.p,{children:"Main parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uniforms"}),"=",(0,s.jsx)(n.code,{children:"{}"})," - a map of uniforms that will be set just before the draw call (and remain set after the call)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bindings"}),"=",(0,s.jsx)(n.code,{children:"{}"})," - a map of ",(0,s.jsx)(n.code,{children:"TextureViews"}),", ",(0,s.jsx)(n.code,{children:"Samplers"})," and uniform ",(0,s.jsx)(n.code,{children:"Buffers"})," that will be bound before the draw call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parameters"})," - temporary gl settings to be applied to this draw call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transformFeedback"}),"=",(0,s.jsx)(n.code,{children:"null"})," - optional ",(0,s.jsx)(n.code,{children:"TransformFeedback"})," object containing buffers that will receive the output of the transform feedback operation."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Potentially auto deduced parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"topology"}),"=",(0,s.jsx)(n.code,{children:"triangle-list"})," - geometry primitive format of vertex data"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vertexCount"})," - number of vertices to draw"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"offset"}),"=",(0,s.jsx)(n.code,{children:"0"})," - first vertex to draw"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"isInstanced"}),"=",(0,s.jsx)(n.code,{children:"false"})," - Set to enable instanced rendering."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"instanceCount"}),"=",(0,s.jsx)(n.code,{children:"0"})," - Number of instances"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Parameters for drawing a limited range"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start"})," - hint to GPU, activates ",(0,s.jsx)(n.code,{children:"gl.drawElementsRange"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"end"})," - hint to GPU, activates ",(0,s.jsx)(n.code,{children:"gl.drawElementsRange"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"true"})," if successful, ",(0,s.jsx)(n.code,{children:"false"})," if draw call is blocked due to resources (the pipeline itself or textures) not yet being initialized."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Notes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Runs the shaders in the pipeline, on the attributes and uniforms."}),"\n",(0,s.jsx)(n.li,{children:"Indexed rendering is used if the vertex array has an IndexBuffer set."}),"\n",(0,s.jsxs)(n.li,{children:["If a ",(0,s.jsx)(n.code,{children:"TransformFeedback"})," object is supplied, ",(0,s.jsx)(n.code,{children:"transformFeedback.begin()"})," and ",(0,s.jsx)(n.code,{children:"transformFeedback.end()"})," will be called before and after the draw call."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"Sampler"})," will only be bound if there is a matching Texture with the same key in the supplied ",(0,s.jsx)(n.code,{children:"uniforms"})," object."]}),"\n",(0,s.jsx)(n.li,{children:"Once a uniform is set, it's size should not be changed. This is only a concern for array uniforms."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following WebGL APIs are called in this function:"}),"\n",(0,s.jsx)(n.h3,{id:"setbindings",children:"setBindings()"}),"\n",(0,s.jsx)(n.h3,{id:"setuniformswebgl",children:"setUniformsWebGL()"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"WebGL only, deprecated"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"renderPipeline.setUniformsWebGL(uniforms: Object): void\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sets named uniforms from a map, ignoring names"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," (",(0,s.jsx)(n.em,{children:"String"}),") - The name of the uniform to be set. The name of the uniform will be matched with the name of the uniform declared in the shader. You can set more uniforms on the RenderPipeline than its shaders use, the extra uniforms will simply be ignored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"})," (",(0,s.jsx)(n.em,{children:"mixed"}),") - The value to be set. Can be a float, an array of floats, a typed array, a boolean, ",(0,s.jsx)(n.code,{children:"Texture"})," etc. The values must match the declarations in the shader."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/useProgram",children:"gl.useProgram"})}),"\n",(0,s.jsx)(n.h3,{id:"webgl-notes",children:"WebGL notes"}),"\n",(0,s.jsx)(n.p,{children:"The following WebGL APIs are called by the WEBGLRenderPipeline:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/useProgram",children:"gl.useProgram"}),",\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements",children:"gl.drawElements"}),",\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawRangeElements",children:"gl.drawRangeElements"}),",\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays",children:"gl.drawArrays"}),",\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced",children:"gl.drawElementsInstanced"}),",\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced",children:"gl.drawArraysInstanced"}),",\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getExtension",children:"gl.getExtension"}),", ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays",children:"ANGLE_instanced_arrays"}),",\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE",children:"gl.drawElementsInstancedANGLE"}),",\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE",children:"gl.drawArraysInstancedANGLE"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1020:(e,n,r)=>{var s=r(6540),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var s,d={},a=null,o=null;for(s in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(o=n.ref),n)t.call(n,s)&&!c.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:i,type:e,key:a,ref:o,props:d,_owner:l.current}}n.Fragment=d,n.jsx=a,n.jsxs=a},4848:(e,n,r)=>{e.exports=r(1020)},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(6540);const i={},d=s.createContext(i);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);