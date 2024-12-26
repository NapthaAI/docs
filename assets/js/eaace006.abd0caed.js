"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[128],{3033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>a,nextStepsCards:()=>h,toc:()=>c});var i=t(4848),r=t(8453),o=t(604);const l={},s="Hello World",a={id:"Examples/HelloWorld",title:"Hello World",description:"Start your journey with Naptha by running a simple Hello World example. This introductory example demonstrates the basics of running an agent on a Naptha node.",source:"@site/docs/Examples/HelloWorld.md",sourceDirName:"Examples",slug:"/Examples/HelloWorld",permalink:"/Examples/HelloWorld",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/docs/tree/main/docs/Examples/HelloWorld.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"List of Examples",permalink:"/Examples/"},next:{title:"Generate Image",permalink:"/Examples/GenerateImage"}},d={},h=[{title:"Generate Images",description:"Create AI-generated images using text prompts",icon:"\ud83c\udfa8",link:"/Examples/GenerateImage"},{title:"Multiplayer Chat",description:"Experience multi-agent interactions in real-time",icon:"\ud83d\udcac",link:"/Examples/MultiplayerChat"},{title:"Simple RAG",description:"Run our basic RAG setup",icon:"\ud83d\udd0d",link:"/Examples/SimpleRAG"},{title:"Join Our Community",description:"Connect with other Naptha developers and builders",icon:"\ud83d\udc65",link:"https://naptha.ai/naptha-community"}],c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Modules Used",id:"modules-used",level:3},{value:"Run",id:"run",level:2},{value:"Configuration Options:",id:"configuration-options",level:3},{value:"Expected Output",id:"expected-output",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"hello-world",children:"Hello World"})}),"\n",(0,i.jsx)(n.p,{children:"Start your journey with Naptha by running a simple Hello World example. This introductory example demonstrates the basics of running an agent on a Naptha node."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before you begin, ensure you have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/GettingStarted/Installation",children:"Naptha SDK"})," installed and configured"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"modules-used",children:"Modules Used"}),"\n",(0,i.jsx)(n.p,{children:"This basic, single-node workflow is made of the following component, which you can find on the Naptha GitHub:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/NapthaAI/hello_world_agent",children:"Hello World"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,i.jsx)(n.p,{children:'You can run this "Hello World" example using the Naptha CLI with the following command:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'naptha run hello_world_agent -p "firstname=Sam surname=Altman"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"configuration-options",children:"Configuration Options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"firstname"}),": The first name to use in the greeting"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"surname"}),": The last name to use in the greeting"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This will run on whichever node you've configured as ",(0,i.jsx)(n.code,{children:"NODE_URL"})," in the .env file of the Naptha SDK."]})}),"\n",(0,i.jsx)(n.h2,{id:"expected-output",children:"Expected Output"}),"\n",(0,i.jsx)(n.p,{children:"The agent will respond with a personalized greeting using the provided name parameters."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Try modifying the name parameters to see how the agent responds with different inputs!"})}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n","\n","\n",(0,i.jsx)(o.A,{cards:h}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This is just the beginning! Each Naptha example builds on these basics to showcase more advanced features of our distributed AI infrastructure."})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},604:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var i=t(4848);const r={display:"block",position:"relative",margin:"0.5rem 0",padding:"1rem 1.5rem",backgroundColor:"white",border:"1px solid rgba(17, 24, 39, 0.1)",borderRadius:"0.75rem",overflow:"hidden",width:"100%",cursor:"pointer",textDecoration:"none",color:"inherit",transition:"border-color 0.2s ease"},o={fontSize:"1.5rem",marginBottom:"0.25rem"},l={fontSize:"1rem",fontWeight:600,color:"#111827",marginTop:"0.5rem",marginBottom:"0.5rem"},s={fontSize:"0.875rem",lineHeight:"1.25rem",color:"#4B5563",margin:0};function a(e){let{cards:n}=e;return(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",marginTop:"1rem",marginBottom:"1rem"},children:n.map((e=>(0,i.jsxs)("a",{href:e.link,style:r,children:[(0,i.jsx)("div",{style:o,children:e.icon}),(0,i.jsx)("h2",{style:l,children:e.title}),(0,i.jsx)("p",{style:s,children:e.description})]},e.title)))})}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var i=t(6540);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);