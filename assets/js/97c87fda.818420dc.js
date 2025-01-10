"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[2908],{9174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var l=t(4848),a=t(8453);const s={},i="Install Naptha SDK",r={id:"GettingStarted/InstallSDK",title:"Install Naptha SDK",description:"1. Install Poetry with pipx",source:"@site/docs/GettingStarted/InstallSDK.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/InstallSDK",permalink:"/GettingStarted/InstallSDK",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/docs/tree/main/docs/GettingStarted/InstallSDK.md",tags:[],version:"current",frontMatter:{}},o={},h=[{value:"1. Install Poetry with pipx",id:"1-install-poetry-with-pipx",level:2},{value:"Run this command:",id:"run-this-command",level:5},{value:"2. Install Naptha SDK",id:"2-install-naptha-sdk",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:4},{value:"Install Dependencies",id:"install-dependencies",level:4},{value:"Activate Environment",id:"activate-environment",level:4},{value:"3. Setup Environment",id:"3-setup-environment",level:2},{value:"Configure Variables",id:"configure-variables",level:3},{value:"All Systems Go!",id:"all-systems-go",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"install-naptha-sdk",children:"Install Naptha SDK"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Install Poetry with pipx"}),"\n",(0,l.jsx)(n.li,{children:"Install Naptha SDK"}),"\n",(0,l.jsx)(n.li,{children:"Setup dev environment"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"1-install-poetry-with-pipx",children:"1. Install Poetry with pipx"}),"\n",(0,l.jsxs)(n.p,{children:["Naptha uses a Python dependency management tool called Poetry. Learn more about Poetry in their official ",(0,l.jsx)(n.a,{href:"https://python-poetry.org/docs",children:"docs"}),"."]}),"\n",(0,l.jsx)(n.h5,{id:"run-this-command",children:"Run this command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pipx install poetry\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Poetry should always be installed in a dedicated virtual environment to isolate it from the rest of your system."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"2-install-naptha-sdk",children:"2. Install Naptha SDK"}),"\n",(0,l.jsxs)(n.p,{children:["The best place to start is our ",(0,l.jsx)(n.a,{href:"https://github.com/NapthaAI/naptha-sdk",children:"Naptha SDK"})," code base on GitHub. Follow these steps to install it from source:"]}),"\n",(0,l.jsx)(n.h4,{id:"clone-the-repository",children:"Clone the Repository"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NapthaAI/naptha-sdk.git && cd naptha-sdk\n"})}),"\n",(0,l.jsx)(n.h4,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"poetry install\n"})}),"\n",(0,l.jsx)(n.h4,{id:"activate-environment",children:"Activate Environment"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"poetry shell\n"})}),"\n",(0,l.jsx)(n.h2,{id:"3-setup-environment",children:"3. Setup Environment"}),"\n",(0,l.jsx)(n.p,{children:"Next, create a copy of the .env file:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,l.jsx)(n.h3,{id:"configure-variables",children:"Configure Variables"}),"\n",(0,l.jsxs)(n.p,{children:["To set up a ",(0,l.jsx)(n.code,{children:"PRIVATE_KEY"})," in your environment, first **generate one by  the Naptha CLI tool to enter this command: ",(0,l.jsx)(n.code,{children:"naptha user"})]}),"\n",(0,l.jsx)(n.p,{children:"Then, copy and paste the value into the .env file."}),"\n",(0,l.jsx)(n.h2,{id:"all-systems-go",children:"All Systems Go!"}),"\n",(0,l.jsx)(n.p,{children:"To check the installation, run:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"naptha\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var l=t(6540);const a={},s=l.createContext(a);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);