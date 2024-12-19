"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[637],{182:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(4848),r=t(8453);const a={},o=void 0,i={id:"GettingStarted/Abstractions",title:"Abstractions",description:"Abstractions",source:"@site/docs/GettingStarted/Abstractions.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/Abstractions",permalink:"/GettingStarted/Abstractions",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/docs/tree/main/docs/GettingStarted/Abstractions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Architecture",permalink:"/GettingStarted/Architecture"},next:{title:"Use Cases",permalink:"/GettingStarted/UseCases"}},l={},c=[{value:"Abstractions",id:"abstractions",level:2},{value:"Agents Modules",id:"agents-modules",level:3},{value:"Interact with the Agent Hub",id:"interact-with-the-agent-hub",level:4},{value:"Multi-Agent Orchestrators",id:"multi-agent-orchestrators",level:3},{value:"Interact with the Agent Orchestrator Hub",id:"interact-with-the-agent-orchestrator-hub",level:4},{value:"Environments:",id:"environments",level:3},{value:"Interact with the Environment Hub",id:"interact-with-the-environment-hub",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"abstractions",children:"Abstractions"}),"\n",(0,s.jsx)(n.p,{children:"Naptha provides several key abstractions to help you build powerful distributed multi-agentsAI applications. Let's explore each component:"}),"\n",(0,s.jsx)(n.h3,{id:"agents-modules",children:"Agents Modules"}),"\n",(0,s.jsx)(n.p,{children:"Agents are autonomous entities that can perform tasks using:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"System Prompts"})," - Define the agent's personality and core behaviors"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tools/Skills"})," - Capabilities that agents can use to interact with external systems"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Persona Module"})," - Additional personality traits and characteristics loaded into the system prompt"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Memory"})," - Contextual storage enabling agents to maintain state and learn from interactions"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'#naptha-sdk AgentConfig\nclass AgentConfig(BaseModel):\n    config_name: Optional[str] = "agent_config"\n    llm_config: Optional[LLMConfig] = LLMConfig()\n    persona_module: Optional[Union[Dict, BaseModel]] = None\n    system_prompt: Optional[Union[Dict, BaseModel]] = None\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Agent Configuration Details",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"system_prompt"})," defines core agent behavior"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"llm_config"})," specifies which language model to use under the hood"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"persona_module"})," is loaded as a dictionary and merged into the system prompt"]}),"\n",(0,s.jsx)(n.li,{children:"Tools/Skills are currently part of agent modules (moving to separate modules soon)"}),"\n",(0,s.jsx)(n.li,{children:"Memory system will also become a separate module in future updates"}),"\n"]})}),"\n",(0,s.jsx)(n.h4,{id:"interact-with-the-agent-hub",children:"Interact with the Agent Hub"}),"\n",(0,s.jsx)(n.p,{children:"You can also use the CLI to explore available agents that you can run on a node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"naptha agents\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/NapthaModules/agents",children:"Learn more about Agents \u2192"})}),"\n",(0,s.jsx)(n.h3,{id:"multi-agent-orchestrators",children:"Multi-Agent Orchestrators"}),"\n",(0,s.jsx)(n.p,{children:"Coordinate multiple agents to solve complex tasks through defined interaction patterns and workflows. Perfect for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Task decomposition"}),"\n",(0,s.jsx)(n.li,{children:"Parallel processing"}),"\n",(0,s.jsx)(n.li,{children:"Multi-agent collaboration"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'#naptha-sdk OrchestratorConfig\nclass OrchestratorConfig(BaseModel):\n    config_name: Optional[str] = "orchestrator_config"\n    max_rounds: Optional[int] = 5\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Builders can then create their own custom OrchestratorConfigs. For example, here is what a custom orchestrator config looks like for ",(0,s.jsx)(n.a,{href:"https://github.com/NapthaAI/market_agent/blob/main/market_agent/orchestrator_config.yaml",children:"MarketAgents"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'        "orchestrator_config": {\n            "config_name": "orchestrator_config_1",\n            "num_agents": 10,\n            "max_rounds": 2,\n            "environment_order": [\n                "group_chat",\n                "auction"\n            ],\n            "environment_deployments": [\n                {"name": "group_chat"},\n                {"name": "auction"}\n            ],\n            "protocol": "acl_message"\n        }\n'})})]}),"\n",(0,s.jsx)(n.h4,{id:"interact-with-the-agent-orchestrator-hub",children:"Interact with the Agent Orchestrator Hub"}),"\n",(0,s.jsx)(n.p,{children:"You can also use the CLI to explore available agent orchestrators that you can run on a network of nodes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"naptha orchestrators\n"})}),"\n",(0,s.jsx)(n.h3,{id:"environments",children:"Environments:"}),"\n",(0,s.jsx)(n.p,{children:"Environments in Naptha provide the essential infrastructure that powers multi-agent interactions. They serve as the shared operational space where agents can:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Exchange information seamlessly"}),"\n",(0,s.jsx)(n.li,{children:"Maintain persistent state across executions"}),"\n",(0,s.jsx)(n.li,{children:"Access shared resources and context"}),"\n",(0,s.jsx)(n.li,{children:"Coordinate complex workflows"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Similar to OrchestratorConfig, builders can inherit from the base to create their own custom environment config. Here is an example of the current one used for a MarketAgents module:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'{\n    "config_name": "groupchat",\n    "environment_type": "groupchat",\n    "max_rounds": 5,\n    "initial_topic": "Initial Market Discussion",\n    "sub_rounds": 3,\n    "group_size": 5\n}\n'})})]}),"\n",(0,s.jsx)(n.h4,{id:"interact-with-the-environment-hub",children:"Interact with the Environment Hub"}),"\n",(0,s.jsx)(n.p,{children:"You can also use the CLI to explore available environments that you can use with orchestrators:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"naptha environments\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);