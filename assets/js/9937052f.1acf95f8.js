"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[390],{53:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=t(4848),o=t(8453);const s={},l=void 0,i={id:"GettingStarted/InstallNode",title:"InstallNode",description:"Install Node",source:"@site/docs/GettingStarted/InstallNode.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/InstallNode",permalink:"/GettingStarted/InstallNode",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/docs/tree/main/docs/GettingStarted/InstallNode.md",tags:[],version:"current",frontMatter:{}},r={},d=[{value:"Install Node",id:"install-node",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"install-node",children:"Install Node"}),"\n",(0,a.jsx)(n.p,{children:"To get started initially, you can run the Naptha SDK using a hosted node."}),"\n",(0,a.jsxs)(n.p,{children:["When you're ready to run your own node, please reach out the Naptha team at ",(0,a.jsx)(n.a,{href:"mailto:team@naptha.ai",children:"team@naptha.ai"}),". We'll add you to the ",(0,a.jsx)(n.a,{href:"https://github.com/NapthaAI/node",children:"Naptha Node"})," repository. With the installation script, it's super easy to set up and takes about 5 minutes to install on a fresh instance."]}),"\n",(0,a.jsx)(n.p,{children:"From source:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NapthaAI/node.git\ncd node\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then run the node:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bash launch.sh\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will install all of the components, including:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Python 3.12 (pre-Requirement)"}),"\n",(0,a.jsx)(n.li,{children:"Poetry (manages dependencies)"}),"\n",(0,a.jsx)(n.li,{children:"SurrealDB (Naptha Protocol info is stored here)"}),"\n",(0,a.jsx)(n.li,{children:"RabbitMQ (message-broker for the Naptha Protocol)"}),"\n",(0,a.jsx)(n.li,{children:"Ollama (used to run LLMs)"}),"\n",(0,a.jsx)(n.li,{children:"Docker (isolates Modules from the system)"}),"\n",(0,a.jsx)(n.li,{children:"Naptha node (orchestrates ML workflows)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The first time you launch, you will be prompted about whether (i) to generate a private key, and (ii) to input a Stability API key, which is needed if you would like to run the image module examples. If you choose not to, you can always edit the .env file manually later."}),"\n",(0,a.jsxs)(n.p,{children:["After a few minutes you should see,",(0,a.jsx)(n.code,{children:"[System] Setup complete. Applications are running."})]}),"\n",(0,a.jsx)(n.p,{children:"Then, in a new terminal window run:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"journalctl -u nodeapp -n 100 -f\n"})}),"\n",(0,a.jsx)(n.p,{children:"That's it! You're now running a local AI node."}),"\n",(0,a.jsxs)(n.p,{children:["If you want to use the SDK with your local node, change ",(0,a.jsx)(n.code,{children:"NODE_URL=http://localhost:7001"})," in the .env file."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var a=t(6540);const o={},s=a.createContext(o);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);