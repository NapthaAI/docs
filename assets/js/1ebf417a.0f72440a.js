"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[260],{1025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(4848),a=t(8453);const r={},s="Generate Image",o={id:"Examples/GenerateImage",title:"Generate Image",description:"Generate stunning images using our text-to-image agent. This example demonstrates how to create images from text descriptions using Naptha and Stable Diffusion.",source:"@site/docs/Examples/GenerateImage.md",sourceDirName:"Examples",slug:"/Examples/GenerateImage",permalink:"/Examples/GenerateImage",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/docs/tree/main/docs/Examples/GenerateImage.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hello World",permalink:"/Examples/HelloWorld"},next:{title:"Image2Image",permalink:"/Examples/Image2Image"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Clone Repository",id:"1-clone-repository",level:3},{value:"2. Install Dependencies",id:"2-install-dependencies",level:3},{value:"3. Generate Your Image",id:"3-generate-your-image",level:3},{value:"4. Retrieve Your Image",id:"4-retrieve-your-image",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Common Issues",id:"common-issues",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"generate-image",children:"Generate Image"})}),"\n",(0,i.jsx)(n.p,{children:"Generate stunning images using our text-to-image agent. This example demonstrates how to create images from text descriptions using Naptha and Stable Diffusion."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/GettingStarted/Installation",children:"Naptha SDK"})," installed"]}),"\n",(0,i.jsx)(n.li,{children:"Stability API key (you'll be prompted to add this)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(n.h3,{id:"1-clone-repository",children:"1. Clone Repository"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NapthaAI/generate_image.git\ncd generate_image\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-install-dependencies",children:"2. Install Dependencies"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"poetry install\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-generate-your-image",children:"3. Generate Your Image"}),"\n",(0,i.jsx)(n.p,{children:"Run the image generation agent with your prompt:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"naptha run generate_image -p \"prompt='wolf running through a field'\"\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Be descriptive in your prompts! The more detailed your description, the better the results."})}),"\n",(0,i.jsx)(n.h3,{id:"4-retrieve-your-image",children:"4. Retrieve Your Image"}),"\n",(0,i.jsx)(n.p,{children:"Once generation is complete, you'll receive a folder ID. Use it to retrieve your image:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"naptha read_storage -id <folder_id>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Your generated image will be saved as ",(0,i.jsx)(n.code,{children:"./files/output.png"})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Keep track of your folder ID - you'll need it if you want to use this image with other Naptha agents!"})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(n.p,{children:["Try transforming your generated image using our ",(0,i.jsx)(n.a,{href:"/docs/Examples/Image2Image",children:"Image-to-Image"})," agent! You can apply different styles and modifications to your creation."]}),"\n",(0,i.jsx)(n.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you haven't set up your Stability API key, you'll be prompted to add it"}),"\n",(0,i.jsx)(n.li,{children:"Make sure your prompt is specific and descriptive for better results"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Check out our ",(0,i.jsx)(n.a,{href:"/docs/Examples/Image2Image",children:"Image-to-Image"})," example to learn how to modify and transform your generated images!"]})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);