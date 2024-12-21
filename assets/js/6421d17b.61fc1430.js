"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[440],{6744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>h,toc:()=>l});var a=n(4848),r=n(8453);const o={},s="Agent Orchestrator Modules",h={id:"NapthaModules/orchestrators",title:"Agent Orchestrator Modules",description:"Agent orchestrators are modules that manage the orchestration of agents, tools, environments, and personas. Examples of agent orchestrators include:",source:"@site/docs/NapthaModules/2-orchestrators.md",sourceDirName:"NapthaModules",slug:"/NapthaModules/orchestrators",permalink:"/NapthaModules/orchestrators",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/docs/tree/main/docs/NapthaModules/2-orchestrators.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Agent Modules",permalink:"/NapthaModules/agents"},next:{title:"Environment Modules",permalink:"/NapthaModules/environments"}},i={},l=[{value:"Deploying and Calling an Agent Module",id:"deploying-and-calling-an-agent-module",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"In Python",id:"in-python",level:3},{value:"From the CLI",id:"from-the-cli",level:3},{value:"Need Help?",id:"need-help",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"agent-orchestrator-modules",children:"Agent Orchestrator Modules"})}),"\n",(0,a.jsx)(t.p,{children:"Agent orchestrators are modules that manage the orchestration of agents, tools, environments, and personas. Examples of agent orchestrators include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Orchestration of multiple social agents e.g. agents that take part in debate or social simulations"}),"\n",(0,a.jsx)(t.li,{children:"Orchestration of multiple task-solving agents e.g. agents that work together to solve a problem or write code (like BabyAGI or MetaGPT)"}),"\n",(0,a.jsx)(t.li,{children:"Orchestration of multiple market agents e.g. agents that work together to make predictions"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"deploying-and-calling-an-agent-module",children:"Deploying and Calling an Agent Module"}),"\n",(0,a.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.p,{children:["Install the Naptha SDK using the ",(0,a.jsx)(t.a,{href:"https://github.com/NapthaAI/naptha-sdk",children:"instructions here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"in-python",children:"In Python"}),"\n",(0,a.jsx)(t.p,{children:"You can run an orchestrator in Python using:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from naptha_sdk.orchestrator import Orchestrator\n\norchestrator_deployment = {\n    "module": {"name": "multiagent_chat"},\n    "orchestrator_node_url": "https://node.naptha.ai",\n    "worker_node_urls": ["http://node.naptha.ai:7001", "http://node1.naptha.ai:7001"]\n    "environment_node_url": "http://node.naptha.ai:7001"\n}\n\n# Instantiate the orchestrator\norchestrator = Orchestrator(orchestrator_deployment)\n\n# Deploy the orchestrator\nresponse = await orchestrator.create(orchestrator_deployment)\n\n# Call the orchestrator\nresponse = await orchestrator.call_orchestrator_func(\n    function_name="multiagent_chat", \n    tool_input_data="i would like to count up to ten, one number at a time. ill start. one.", \n)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Under the hood, ",(0,a.jsx)(t.code,{children:"call_orchestrator_func"})," makes a call to the orchestrator node via API, which executes the orchestrator module. T"]}),"\n",(0,a.jsx)(t.h3,{id:"from-the-cli",children:"From the CLI"}),"\n",(0,a.jsx)(t.p,{children:"You can deploy an orchestrator via CLI using:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'naptha create orchestrator:multiagent_chat --orchestrator_node "https://node.naptha.ai" --worker_nodes "https://node.naptha.ai:7001,https://node1.naptha.ai:7001" --environment_node "https://node.naptha.ai:7001"\n'})}),"\n",(0,a.jsx)(t.p,{children:"You can call an orchestrator module via CLI using:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"naptha run orchestrator:multiagent_chat -p \"function_name='multiagent_chat' tool_input_data='i would like to count up to ten, one number at a time. ill start. one.'\"\n"})}),"\n",(0,a.jsx)(t.h2,{id:"need-help",children:"Need Help?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Join our ",(0,a.jsx)(t.a,{href:"https://naptha.ai/naptha-community",children:"Community"})]}),"\n",(0,a.jsxs)(t.li,{children:["Submit issues on ",(0,a.jsx)(t.a,{href:"https://github.com/NapthaAI",children:"GitHub"})]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>h});var a=n(6540);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);