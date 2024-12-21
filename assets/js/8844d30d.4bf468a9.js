"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[60],{7995:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(4848),a=i(8453);const r={},s="Image2Image",l={id:"Examples/Image2Image",title:"Image2Image",description:"Transform and modify existing images using our image-to-image module. This example demonstrates how to apply different styles and modifications to your images using Naptha.",source:"@site/docs/Examples/Image2Image.md",sourceDirName:"Examples",slug:"/Examples/Image2Image",permalink:"/Examples/Image2Image",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/docs/tree/main/docs/Examples/Image2Image.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Generate Image",permalink:"/Examples/GenerateImage"},next:{title:"Multi-Agent Chat",permalink:"/Examples/MultiplayerChat"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Clone Repository",id:"1-clone-repository",level:3},{value:"2. Install Dependencies",id:"2-install-dependencies",level:3},{value:"3. Store Your Input Image",id:"3-store-your-input-image",level:3},{value:"4. Transform Your Image",id:"4-transform-your-image",level:3},{value:"Parameters Explained:",id:"parameters-explained",level:4},{value:"5. Retrieve Your Image",id:"5-retrieve-your-image",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"image2image",children:"Image2Image"})}),"\n",(0,t.jsx)(n.p,{children:"Transform and modify existing images using our image-to-image module. This example demonstrates how to apply different styles and modifications to your images using Naptha."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/GettingStarted/Installation",children:"Naptha SDK"})," installed"]}),"\n",(0,t.jsxs)(n.li,{children:["An input image (you can generate one using our ",(0,t.jsx)(n.a,{href:"/Examples/GenerateImage",children:"Generate Image"})," example)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(n.h3,{id:"1-clone-repository",children:"1. Clone Repository"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NapthaAI/image2image\ncd image2image\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-install-dependencies",children:"2. Install Dependencies"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"poetry install\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-store-your-input-image",children:"3. Store Your Input Image"}),"\n",(0,t.jsx)(n.p,{children:"Store your input image in Naptha's storage system:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha write_storage -i ./files/output.png\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Keep note of the folder ID returned by this command - you'll need it in the next step!"})}),"\n",(0,t.jsx)(n.h3,{id:"4-transform-your-image",children:"4. Transform Your Image"}),"\n",(0,t.jsx)(n.p,{children:"Run the image transformation with your desired style:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha run image_to_image -p \"prompt='snowy mountains; digital art; realistic' input_dir=<folder_id>\"\n"})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-explained",children:"Parameters Explained:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prompt"}),": Describe the style or modifications you want to apply"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"input_dir"}),": The folder ID from step 3 containing your input image"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"Be specific in your style prompts! For example:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"watercolor painting; soft colors"'}),"\n",(0,t.jsx)(n.li,{children:'"cyberpunk style; neon lights"'}),"\n",(0,t.jsx)(n.li,{children:'"oil painting; impressionist style"'}),"\n"]})]}),"\n",(0,t.jsx)(n.h3,{id:"5-retrieve-your-image",children:"5. Retrieve Your Image"}),"\n",(0,t.jsx)(n.p,{children:"Once the transformation is complete, download your modified image:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha read_storage -id <save_folder_id>\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"If the transformation isn't quite right, try:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Adjusting your style prompt to be more specific"}),"\n",(0,t.jsx)(n.li,{children:"Using different artistic styles or descriptive terms"}),"\n"]})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);