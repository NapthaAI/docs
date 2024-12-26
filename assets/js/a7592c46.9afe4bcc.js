"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[238],{1375:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=a(4848),r=a(8453);const s={},o="Naptha CLI Usage",l={id:"GettingStarted/NapthaCLI",title:"Naptha CLI Usage",description:"Here's a list of commands you can use with the Naptha CLI.",source:"@site/docs/GettingStarted/NapthaCLI.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/NapthaCLI",permalink:"/GettingStarted/NapthaCLI",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/docs/tree/main/docs/GettingStarted/NapthaCLI.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Use the Naptha SDK",permalink:"/GettingStarted/SDK"},next:{title:"List of Tutorials",permalink:"/Tutorials/"}},i={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Available Commands",id:"available-commands",level:3},{value:"Global Options",id:"global-options",level:3},{value:"User Management",id:"user-management",level:2},{value:"Nodes",id:"nodes",level:2},{value:"Agents",id:"agents",level:2},{value:"Create an agent:",id:"create-an-agent",level:4},{value:"Delete an agent:",id:"delete-an-agent",level:4},{value:"Run an Agent",id:"run-an-agent",level:3},{value:"Tools",id:"tools",level:2},{value:"Interact with the Tool Hub",id:"interact-with-the-tool-hub",level:3},{value:"Create a New Tool",id:"create-a-new-tool",level:3},{value:"Delete a Tool",id:"delete-a-tool",level:3},{value:"Run a Tool",id:"run-a-tool",level:3},{value:"Run an Agent that interacts with the Tool",id:"run-an-agent-that-interacts-with-the-tool",level:3},{value:"Agent Orchestrators",id:"agent-orchestrators",level:2},{value:"Interact with the Agent Orchestrator Hub",id:"interact-with-the-agent-orchestrator-hub",level:3},{value:"Create a New Agent Orchestrator",id:"create-a-new-agent-orchestrator",level:3},{value:"Delete an Agent Orchestrator",id:"delete-an-agent-orchestrator",level:3},{value:"Run an Agent Orchestrator across a network of nodes:",id:"run-an-agent-orchestrator-across-a-network-of-nodes",level:3},{value:"Environment Modules",id:"environment-modules",level:2},{value:"Interact with the Environment Hub",id:"interact-with-the-environment-hub",level:3},{value:"Create a New Environment Module",id:"create-a-new-environment-module",level:3},{value:"Delete an Environment Module",id:"delete-an-environment-module",level:3},{value:"Run an Environment Module",id:"run-an-environment-module",level:3},{value:"Knowledge Base Modules",id:"knowledge-base-modules",level:2},{value:"Interact with the Knowledge Base Hub",id:"interact-with-the-knowledge-base-hub",level:3},{value:"Register a New Knowledge Base Module on the Hub",id:"register-a-new-knowledge-base-module-on-the-hub",level:3},{value:"Delete a Knowledge Base Module",id:"delete-a-knowledge-base-module",level:3},{value:"Create a New Knowledge Base on a Node",id:"create-a-new-knowledge-base-on-a-node",level:3},{value:"Initialize the content in the Knowledge Base",id:"initialize-the-content-in-the-knowledge-base",level:3},{value:"List content in the Knowledge Base",id:"list-content-in-the-knowledge-base",level:3},{value:"Add to the Knowledge Base",id:"add-to-the-knowledge-base",level:3},{value:"Query the Knowledge Base Module",id:"query-the-knowledge-base-module",level:3},{value:"Run an Agent that interacts with the Knowledge Base",id:"run-an-agent-that-interacts-with-the-knowledge-base",level:3},{value:"Personas",id:"personas",level:2},{value:"Interact with the Persona Hub",id:"interact-with-the-persona-hub",level:3},{value:"Create a New Persona",id:"create-a-new-persona",level:3},{value:"Delete a Persona",id:"delete-a-persona",level:3},{value:"Inference",id:"inference",level:2},{value:"Storage Operations",id:"storage-operations",level:2},{value:"Interact with Node Storage",id:"interact-with-node-storage",level:4},{value:"Write to node storage:",id:"write-to-node-storage",level:4},{value:"Read from node storage:",id:"read-from-node-storage",level:4},{value:"Interact with IPFS thorugh Node:",id:"interact-with-ipfs-thorugh-node",level:4},{value:"Community",id:"community",level:3},{value:"Bounties and Microgrants",id:"bounties-and-microgrants",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"naptha-cli-usage",children:"Naptha CLI Usage"})}),"\n",(0,t.jsx)(n.p,{children:"Here's a list of commands you can use with the Naptha CLI."}),"\n",(0,t.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha [command] [options]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"available-commands",children:"Available Commands"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Command"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"nodes"})}),(0,t.jsx)(n.td,{children:"List available nodes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"agents"})}),(0,t.jsx)(n.td,{children:"List available agents"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"orchestrators"})}),(0,t.jsx)(n.td,{children:"List available orchestrators"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"environments"})}),(0,t.jsx)(n.td,{children:"List available environments"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"personas"})}),(0,t.jsx)(n.td,{children:"List available personas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"run"})}),(0,t.jsx)(n.td,{children:"Execute run command"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"inference"})}),(0,t.jsx)(n.td,{children:"Run model inference"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"read_storage"})}),(0,t.jsx)(n.td,{children:"Read from storage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"write_storage"})}),(0,t.jsx)(n.td,{children:"Write to storage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"signup"})}),(0,t.jsx)(n.td,{children:"Sign up a new user"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"publish"})}),(0,t.jsx)(n.td,{children:"Publish agents"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"global-options",children:"Global Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"-h, --help            Show help message and exit\n"})}),"\n",(0,t.jsx)(n.h2,{id:"user-management",children:"User Management"}),"\n",(0,t.jsx)(n.p,{children:"Create or manage your Naptha account:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha signup  # Create new account and generate a private key\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This command will prompt you to create an account by entering a username and password. It also automatically generates a private key and stores it in your .env file."})}),"\n",(0,t.jsx)(n.h2,{id:"nodes",children:"Nodes"}),"\n",(0,t.jsx)(n.p,{children:"See a list of available nodes on the network:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha nodes\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Make note of a Node ID for running a workflow below."})}),"\n",(0,t.jsx)(n.h2,{id:"agents",children:"Agents"}),"\n",(0,t.jsx)(n.p,{children:"Explore available agents that you can run on a node:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha agents\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"For each agent, you will see a url where you can check out the code."})}),"\n",(0,t.jsx)(n.h4,{id:"create-an-agent",children:"Create an agent:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha agents agent_name -p \"description='about' parameters='{tool_name: str, tool_input_data: str}' module_url='https://github.com/NapthaAI/<agent_name>'\" \n"})}),"\n",(0,t.jsx)(n.h4,{id:"delete-an-agent",children:"Delete an agent:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha agents -d agent_name\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-an-agent",children:"Run an Agent"}),"\n",(0,t.jsx)(n.p,{children:"Now you've found a node and a agent you'd like to run, so let's run it locally! You can use the commandline tool to connect with the node and run the workflow."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# usage: naptha run <agent_name> <agent args>\nnaptha run agent:hello_world_agent -p "firstname=sam surname=altman"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Try an agent that uses the local LLM running on your node:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha run agent:simple_chat_agent -p \"tool_name='chat' tool_input_data='what is an ai agent?'\"\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also run agents from docker images (if running your own node, make sure the DOCKER_JOBS=True in the config):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'naptha run docker_hello_world -p "docker_image=hello-world"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"tools",children:"Tools"}),"\n",(0,t.jsx)(n.h3,{id:"interact-with-the-tool-hub",children:"Interact with the Tool Hub"}),"\n",(0,t.jsx)(n.p,{children:"You can also use the CLI to explore available tools that you can use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha tools\n"})}),"\n",(0,t.jsx)(n.p,{children:"For each tool, you will see a url where you can check out the code."}),"\n",(0,t.jsx)(n.h3,{id:"create-a-new-tool",children:"Create a New Tool"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha tools tool_name -p \"description='Tool description' parameters='{tool_input_1: str, tool_input_2: str}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'\" \n"})}),"\n",(0,t.jsx)(n.h3,{id:"delete-a-tool",children:"Delete a Tool"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha tools -d tool_name\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-a-tool",children:"Run a Tool"}),"\n",(0,t.jsx)(n.p,{children:"Now you've found a node and a tool you'd like to run, so let's run it locally! You can use the commandline tool to connect with the node and run the workflow."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# usage: naptha run <tool_name> -p \"<tool args>\"\nnaptha run tool:generate_image_tool -p \"tool_name='generate_image_tool' tool_input_data='A beautiful image of a cat'\"\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-an-agent-that-interacts-with-the-tool",children:"Run an Agent that interacts with the Tool"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha run agent:generate_image_agent -p \"tool_name='generate_image_tool' tool_input_data='A beautiful image of a cat'\" --tool_node_urls \"http://localhost:7001\"\n"})}),"\n",(0,t.jsx)(n.h2,{id:"agent-orchestrators",children:"Agent Orchestrators"}),"\n",(0,t.jsx)(n.h3,{id:"interact-with-the-agent-orchestrator-hub",children:"Interact with the Agent Orchestrator Hub"}),"\n",(0,t.jsx)(n.p,{children:"You can also use the CLI to explore available agent orchestrators that you can run on a network of nodes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha orchestrators\n"})}),"\n",(0,t.jsx)(n.p,{children:"For each orchestrator, you will see a url where you can check out the code."}),"\n",(0,t.jsx)(n.h3,{id:"create-a-new-agent-orchestrator",children:"Create a New Agent Orchestrator"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha orchestrators orchestrator_name -p \"description='Orchestrator description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://folder_id'\" \n"})}),"\n",(0,t.jsx)(n.h3,{id:"delete-an-agent-orchestrator",children:"Delete an Agent Orchestrator"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha orchestrators -d orchestrator_name\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-an-agent-orchestrator-across-a-network-of-nodes",children:"Run an Agent Orchestrator across a network of nodes:"}),"\n",(0,t.jsx)(n.p,{children:"You can download and install the modules for an orchestrator without running first using:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'naptha create orchestrator:multiagent_chat --agent_modules "agent:simple_chat_agent,agent:simple_chat_agent" --worker_node_urls "http://node.naptha.ai:7001,http://node1.naptha.ai:7001" --environment_modules "environment:groupchat_environment" --environment_node_urls "http://node.naptha.ai:7001"\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can run the orchestrator module on hosted nodes using:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'naptha run orchestrator:multiagent_chat -p "prompt=\'i would like to count up to ten, one number at a time. ill start. one.\'" --worker_node_urls "http://node.naptha.ai:7001,http://node1.naptha.ai:7001" --environment_node_urls "http://node.naptha.ai"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or on local nodes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'naptha run orchestrator:multiagent_chat -p "prompt=\'i would like to count up to ten, one number at a time. ill start. one.\'" --worker_node_urls "http://localhost:7001,http://localhost:7001" --environment_node_urls "http://localhost:7001"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'naptha run orchestrator:babyagi -p "objective=\'Research the history of football\'" --worker_node_urls "http://node.naptha.ai:7001,http://node1.naptha.ai:7001"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha run orchestrator:multiagent_debate -p \"initial_claim='Teslas price will exceed $250 in 2 weeks.' max_rounds=2 context='Teslas current price is $207, and recent innovations and strong Q2 results will drive the price up.\n\nNews Summary 1:\nTesla stock was lower to start a new week of trading, falling as investors worry about global growth. Shares of the electric-vehicle giant were down 7.3% in premarket trading Monday at $192.33. Stocks around the world were falling as investors fretted that weak economic data signal a recession ahead. Despite positive comments from CEO Elon Musk about Tesla\u2019s sales, the stock has fallen about 16% this year and is struggling to overcome negative global investor sentiment.\n\nNews Summary 2:\nTesla faces growing competition and softening demand, impacting its stock price which is trading 43% below its all-time high. The company\u2019s profitability is declining, with earnings per share shrinking 46% year-over-year in Q2 2024. Despite recent price cuts and a plan to produce a low-cost EV model, sales growth has decelerated. Tesla is also involved in autonomous self-driving software, humanoid robots, and solar energy, but these segments may take years to significantly impact revenue.\n'\" --worker_node_urls \"http://node.naptha.ai:7001\"\n"})}),"\n",(0,t.jsx)(n.h2,{id:"environment-modules",children:"Environment Modules"}),"\n",(0,t.jsx)(n.p,{children:'Environment modules in Naptha provide shared state and communication infrastructure for multi-agent workflows. They act as a common space where agents can interact, share information, and maintain persistent state across workflow executions. Think of them as the "world" or "environment" in which agents operate and communicate.'}),"\n",(0,t.jsx)(n.p,{children:"For example, an environment module might:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maintain a shared conversation history for a group chat"}),"\n",(0,t.jsx)(n.li,{children:"Store and manage a knowledge base that multiple agents can read from and write to"}),"\n",(0,t.jsx)(n.li,{children:"Provide a shared task queue for coordinating work between agents"}),"\n",(0,t.jsx)(n.li,{children:"Manage game state for multi-agent simulations"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"interact-with-the-environment-hub",children:"Interact with the Environment Hub"}),"\n",(0,t.jsx)(n.p,{children:"You can also use the CLI to explore available environments that you can use with orchestrators:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha environments # list all environment modules\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-a-new-environment-module",children:"Create a New Environment Module"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha environments environment_name -p \"description='Environment description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://folder_id'\" \n"})}),"\n",(0,t.jsx)(n.h3,{id:"delete-an-environment-module",children:"Delete an Environment Module"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha environments -d environment_name\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-an-environment-module",children:"Run an Environment Module"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha run environment:groupchat_environment -p \"function_name='get_global_state'\"\n"})}),"\n",(0,t.jsx)(n.h2,{id:"knowledge-base-modules",children:"Knowledge Base Modules"}),"\n",(0,t.jsx)(n.h3,{id:"interact-with-the-knowledge-base-hub",children:"Interact with the Knowledge Base Hub"}),"\n",(0,t.jsx)(n.p,{children:"You can also use the CLI to explore available knowledge bases that you can use with agents:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha kbs\n"})}),"\n",(0,t.jsx)(n.h3,{id:"register-a-new-knowledge-base-module-on-the-hub",children:"Register a New Knowledge Base Module on the Hub"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha kbs kb_name -p \"description='Knowledge Base description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'\" \n"})}),"\n",(0,t.jsx)(n.h3,{id:"delete-a-knowledge-base-module",children:"Delete a Knowledge Base Module"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha kbs -d kb_name\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-a-new-knowledge-base-on-a-node",children:"Create a New Knowledge Base on a Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha create kb:wikipedia_kb \n"})}),"\n",(0,t.jsx)(n.h3,{id:"initialize-the-content-in-the-knowledge-base",children:"Initialize the content in the Knowledge Base"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha run kb:wikipedia_kb -p \"mode='init'\"\n"})}),"\n",(0,t.jsx)(n.h3,{id:"list-content-in-the-knowledge-base",children:"List content in the Knowledge Base"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha kbs wikipedia_kb -l\n"})}),"\n",(0,t.jsx)(n.h3,{id:"add-to-the-knowledge-base",children:"Add to the Knowledge Base"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha kbs wikipedia_kb -a -c \"url='https://en.wikipedia.org/wiki/Socrates' title='Socrates' text='Socrates was a Greek philosopher from Athens who is credited as the founder of Western philosophy and as among the first moral philosophers of the ethical tradition of thought.'\" \n"})}),"\n",(0,t.jsx)(n.h3,{id:"query-the-knowledge-base-module",children:"Query the Knowledge Base Module"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha run kb:wikipedia_kb -p \"mode='query' query='Socrates'\"\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-an-agent-that-interacts-with-the-knowledge-base",children:"Run an Agent that interacts with the Knowledge Base"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha run agent:wikipedia_agent -p \"query='Socrates' question='Who is Socrates?'\" --kb_node_urls \"http://localhost:7001\"\n"})}),"\n",(0,t.jsx)(n.h2,{id:"personas",children:"Personas"}),"\n",(0,t.jsx)(n.h3,{id:"interact-with-the-persona-hub",children:"Interact with the Persona Hub"}),"\n",(0,t.jsx)(n.p,{children:"You can also use the CLI to explore available personas that you can use with agents:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha personas # list all persona modules\n"})}),"\n",(0,t.jsx)(n.p,{children:"For each persona, you will see a url where you can check out the data."}),"\n",(0,t.jsx)(n.h3,{id:"create-a-new-persona",children:"Create a New Persona"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha personas persona_name -p \"description='Persona description' module_url='ipfs://folder_id'\" \n"})}),"\n",(0,t.jsx)(n.h3,{id:"delete-a-persona",children:"Delete a Persona"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha personas -d persona_name\n"})}),"\n",(0,t.jsx)(n.h2,{id:"inference",children:"Inference"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'naptha inference "How can we create scaling laws for multi-agent systems?" -m "phi3:mini"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"storage-operations",children:"Storage Operations"}),"\n",(0,t.jsx)(n.h4,{id:"interact-with-node-storage",children:"Interact with Node Storage"}),"\n",(0,t.jsx)(n.p,{children:"After the agent runs finish, you can download the file from the node using:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha read_storage -id <agent_run_id>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"write-to-node-storage",children:"Write to node storage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha write_storage -i files/<filename>.jpg\n\n"})}),"\n",(0,t.jsx)(n.h4,{id:"read-from-node-storage",children:"Read from node storage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha read_storage -id <agent_run_id>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"interact-with-ipfs-thorugh-node",children:"Interact with IPFS thorugh Node:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha write_storage -i files/<filename>.jpg --ipfs  # Write to IPFS\n"})}),"\n",(0,t.jsx)(n.h3,{id:"community",children:"Community"}),"\n",(0,t.jsxs)(n.admonition,{title:"Join Our Community!",type:"info",children:[(0,t.jsxs)(n.p,{children:["\ud83c\udf10 ",(0,t.jsx)(n.a,{href:"https://naptha.ai",children:"naptha.ai"})," - Check out our Website"]}),(0,t.jsxs)(n.p,{children:["\ud83d\udcbb ",(0,t.jsx)(n.a,{href:"https://github.com/NapthaAI",children:"naptha/naptha"})," - Contribute on GitHub"]}),(0,t.jsxs)(n.p,{children:["\ud83e\udd17 ",(0,t.jsx)(n.a,{href:"https://huggingface.co/NapthaAI",children:"naptha/naptha"})," - Join our HuggingFace Community"]}),(0,t.jsxs)(n.p,{children:["X ",(0,t.jsx)(n.a,{href:"https://twitter.com/NapthaAI",children:"@naptha_ai"}),"  - Follow us on Twitter"]}),(0,t.jsxs)(n.p,{children:["\u26a1 ",(0,t.jsx)(n.a,{href:"https://warpcast.com/naptha_ai",children:"@naptha_ai"})," - Connect on Farcaster"]}),(0,t.jsxs)(n.p,{children:["\ud83d\udcfa ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/channel/UCoDwQ3DZa1bRJPrIz_4_02w",children:"naptha.ai"})," - Subscribe to our YouTube channel"]})]}),"\n",(0,t.jsx)(n.h3,{id:"bounties-and-microgrants",children:"Bounties and Microgrants"}),"\n",(0,t.jsxs)(n.p,{children:["Have an idea for a cool use case to build with our SDK? Get in touch at ",(0,t.jsx)(n.a,{href:"mailto:team@naptha.ai",children:"team@naptha.ai"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var t=a(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);