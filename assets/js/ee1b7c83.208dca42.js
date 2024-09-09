"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[477],{8100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var a=n(4848),i=n(8453);const r={},s="Multiplayer Chat",o={id:"Examples/Multiplayer Chat",title:"Multiplayer Chat",description:"Autogen by Microsoft is a framework for building apps with multiple agents that can converse with each other in various patterns, as shown in the original image below.",source:"@site/docs/Examples/Multiplayer Chat.md",sourceDirName:"Examples",slug:"/Examples/Multiplayer Chat",permalink:"/docs/Examples/Multiplayer Chat",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/napthaai.github.io/tree/main/docs/Examples/Multiplayer Chat.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hello World",permalink:"/docs/Examples/Hello World"},next:{title:"BabyAGI",permalink:"/docs/Examples/BabyAGI"}},l={},h=[{value:"Prerequisities",id:"prerequisities",level:2},{value:"Modules Used",id:"modules-used",level:2},{value:"Run",id:"run",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"multiplayer-chat",children:"Multiplayer Chat"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://microsoft.github.io/autogen/docs/Getting-Started",children:"Autogen"})," by Microsoft is a framework for building apps with multiple agents that can converse with each other in various patterns, as shown in the original image below."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(9413).A+"",width:"1254",height:"674"})}),"\n",(0,a.jsx)(t.p,{children:"However, the framework is designed for agents running on one node, with the same codebase and data."}),"\n",(0,a.jsx)(t.p,{children:"Using the Naptha SDK and node infrastructure, we implemented a multiplayer chat app where each of the conversational agents runs on a different node using different LLMs."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisities",children:"Prerequisities"}),"\n",(0,a.jsx)(t.p,{children:"Make sure you have the Naptha SDK installed."}),"\n",(0,a.jsx)(t.h2,{id:"modules-used",children:"Modules Used"}),"\n",(0,a.jsx)(t.p,{children:"The Multiplayer Chat multi-node workflow is made up of the following components, which you can find on the Naptha HuggingFace:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://huggingface.co/NapthaAI/multiplayer_chat/tree/v0.6",children:"Multiplayer Chat Orchestrator Flow"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/NapthaAI/module_chat/tree/v0.4",children:"Chat Task"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"run",children:"Run"}),"\n",(0,a.jsx)(t.p,{children:"You can run the Multiplayer Chat flow from the SDK using the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'naptha run multiplayer_chat -p "prompt=\'i would like to count up to ten, one number at a time. ill start. one.\'" --worker_nodes "http://node.naptha.ai:7001,http://node1.naptha.ai:7001"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["This will run the flow across three different nodes in total - one orchestrator node (whichever you have set as the ",(0,a.jsx)(t.code,{children:"NODE_URL"})," in the .env file of the Naptha SDK), and two worker nodes (that you have set using the ",(0,a.jsx)(t.code,{children:"--worker_nodes"})," flag)."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9413:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/autogen-c23435244dd52099d9e3f5b7e8702009.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(6540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);