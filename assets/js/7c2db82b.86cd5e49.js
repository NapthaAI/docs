"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[737],{598:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=l(4848),s=l(8453);const a={},i="Modules",r={id:"GettingStarted/Modules",title:"Modules",description:"Visit our GitHub to discover building blocks for distributed multi-agent systems.",source:"@site/docs/GettingStarted/Modules.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/Modules",permalink:"/GettingStarted/Modules",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/docs/tree/main/docs/GettingStarted/Modules.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Architecture",permalink:"/GettingStarted/Architecture"},next:{title:"Decorators",permalink:"/GettingStarted/Decorators"}},o={},d=[{value:"Examples",id:"examples",level:3},{value:"Template",id:"template",level:2},{value:"Usage Guide",id:"usage-guide",level:3},{value:"1. Clone",id:"1-clone",level:4},{value:"2. Install",id:"2-install",level:4},{value:"3. Run",id:"3-run",level:4},{value:"Files",id:"files",level:3},{value:"Content",id:"content",level:3},{value:"run.py",id:"runpy",level:4},{value:"component.yaml",id:"componentyaml",level:4},{value:"schemas.py",id:"schemaspy",level:4},{value:"utils.py",id:"utilspy",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"modules",children:"Modules"})}),"\n",(0,t.jsxs)(n.p,{children:["Visit our ",(0,t.jsx)(n.a,{href:"https://github.com/napthaai",children:"GitHub"})," to discover building blocks for distributed multi-agent systems."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Also, you can explore Naptha modules on ",(0,t.jsx)(n.a,{href:"https://huggingface.co/NapthaAI",children:"HuggingFace"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/Examples/HelloWorld",children:"Hello World"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/Examples/MultiplayerChat",children:"Multiplayer Chat"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/Examples/BabyAGI",children:"BabyAGI"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"template",children:"Template"}),"\n",(0,t.jsx)(n.h3,{id:"usage-guide",children:"Usage Guide"}),"\n",(0,t.jsx)(n.h4,{id:"1-clone",children:"1. Clone"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to this ",(0,t.jsx)(n.a,{href:"https://huggingface.co/NapthaAI/template",children:"minimal example"})," for how to create basic agents:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NapthaAI/agent_template && cd agent_template\n"})}),"\n",(0,t.jsx)(n.h4,{id:"2-install",children:"2. Install"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"poetry install\n"})}),"\n",(0,t.jsx)(n.h4,{id:"3-run",children:"3. Run"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"poetry run python agent_template/run.py\n"})}),"\n",(0,t.jsx)(n.h3,{id:"files",children:"Files"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"agent_template/..."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"__init__.py"})," (empty) ~ allow exports"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"run.py"})," ~ basic module code in Python"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"component.yaml"})," ~ configuration file"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"schemas.py"})," ~ input/output schemas"]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"utils.py"})," ~ utility functions"]})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"content",children:"Content"}),"\n",(0,t.jsx)(n.h4,{id:"runpy",children:"run.py"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from naptha_sdk.utils import get_logger, load_yaml\nfrom module_name.schemas import InputSchema\nimport yaml\n\nlogger = get_logger(__name__)\n\ndef run(inputs: InputSchema, worker_nodes=None, orchestrator_node=None, flow_run=None, cfg=None):\n    logger.info(f"Inputs: {inputs}")\n    return None\n\nif __name__ == "__main__":\n    cfg_path = "template/component.yaml"\n    cfg = load_yaml(cfg_path)\n    inputs = {"prompt": "hi"}\n    run(inputs, cfg=cfg)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"componentyaml",children:"component.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'name: template\nauthor: naptha\nversion: 0.1.0\ndescription: blueprint\nlicense: MIT\n\nmodels:\n  default_model_provider: ollama\n  ollama:\n    model: ollama/phi\n    max_tokens: 1000\n    temperature: 0\n    api_base: http://localhost:11434\n  vllm:\n    model: openai/NousResearch/Hermes-3-Llama-3.1-8B\n    api_base: http://localhost:8000/v1\n    max_tokens: 1000\n    temperature: 0\n\ninputs:\n    system_message: "You are a helpful AI assistant."\n    save: false\n    location: ipfs\n\noutputs:\n    save: false\n    location: node\n\nimplementation:\n    package:\n        entrypoint: run.py\n'})}),"\n",(0,t.jsx)(n.h4,{id:"schemaspy",children:"schemas.py"}),"\n",(0,t.jsx)(n.p,{children:"Create a model for your inputs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from pydantic import BaseModel\n\nclass InputSchema(BaseModel):\n    prompt: str\n    llm_backend: str = "ollama"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Learn how to use Pydantic by reviewing their docs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.pydantic.dev/1.10/usage/models",children:"Models"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.pydantic.dev/1.10/usage/schema",children:"Schema"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"utilspy",children:"utils.py"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import logging\n\n\ndef get_logger(name):\n    logger = logging.getLogger(name)\n    logger.setLevel(logging.DEBUG)\n    handler = logging.StreamHandler()\n    handler.setLevel(logging.DEBUG)\n    formatter = logging.Formatter(\n        "%(asctime)s - %(name)s - %(levelname)s - %(message)s"\n    )\n    handler.setFormatter(formatter)\n    logger.addHandler(handler)\n    return logger\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>r});var t=l(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);