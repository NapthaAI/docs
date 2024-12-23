# Naptha CLI Usage

Here's a list of commands you can use with the Naptha CLI.

## Basic Usage
```bash
naptha [command] [options]
```

### Available Commands
| Command | Description |
|---------|-------------|
| `nodes` | List available nodes |
| `agents` | List available agents |
| `orchestrators` | List available orchestrators |
| `environments` | List available environments |
| `personas` | List available personas |
| `run` | Execute run command |
| `inference` | Run model inference |
| `read_storage` | Read from storage |
| `write_storage` | Write to storage |
| `signup` | Sign up a new user |
| `publish` | Publish agents |

### Global Options
```bash
-h, --help            Show help message and exit
```

## User Management
Create or manage your Naptha account:
```bash
naptha signup  # Create new account and generate a private key
```
:::info
This command will prompt you to create an account by entering a username and password. It also automatically generates a private key and stores it in your .env file.
:::

## Nodes
See a list of available nodes on the network:
```bash
naptha nodes
```
:::info
Make note of a Node ID for running a workflow below.
:::


## Agents

Explore available agents that you can run on a node:
```bash
naptha agents
```
*For each agent, you will see a url where you can check out the code.*

#### Create an agent:
```bash
naptha agents agent_name -p "description='about' parameters='{tool_name: str, tool_input_data: str}' module_url='https://github.com/NapthaAI/<agent_name>'" 
```

#### Delete an agent:
```bash
naptha agents -d agent_name
```

### Run an Agent

Now you've found a node and a agent you'd like to run, so let's run it locally! You can use the commandline tool to connect with the node and run the workflow. 

```bash
# usage: naptha run <agent_name> <agent args>
naptha run agent:hello_world_agent -p "firstname=sam surname=altman"
```

Try an agent that uses the local LLM running on your node:

```bash
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='what is an ai agent?'"
```

You can also run agents from docker images (if running your own node, make sure the DOCKER_JOBS=True in the config):

```bash
naptha run docker_hello_world -p "docker_image=hello-world"
```

## Tools

### Interact with the Tool Hub

You can also use the CLI to explore available tools that you can use:

```bash
naptha tools
```

For each tool, you will see a url where you can check out the code.

### Create a New Tool

```bash
naptha tools tool_name -p "description='Tool description' parameters='{tool_input_1: str, tool_input_2: str}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

### Delete a Tool

```bash
naptha tools -d tool_name
```

### Run a Tool

Now you've found a node and a tool you'd like to run, so let's run it locally! You can use the commandline tool to connect with the node and run the workflow. 

```bash
# usage: naptha run <tool_name> -p "<tool args>"
naptha run tool:generate_image_tool -p "tool_name='generate_image_tool' tool_input_data='A beautiful image of a cat'"
```

### Run an Agent that interacts with the Tool

```bash
naptha run agent:generate_image_agent -p "tool_name='generate_image_tool' tool_input_data='A beautiful image of a cat'" --tool_node_urls "http://localhost:7001"
```


## Agent Orchestrators

### Interact with the Agent Orchestrator Hub

You can also use the CLI to explore available agent orchestrators that you can run on a network of nodes:

```bash
naptha orchestrators
```

For each orchestrator, you will see a url where you can check out the code.

### Create a New Agent Orchestrator

```bash
naptha orchestrators orchestrator_name -p "description='Orchestrator description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://folder_id'" 
```

### Delete an Agent Orchestrator

```bash
naptha orchestrators -d orchestrator_name
```

### Run an Agent Orchestrator across a network of nodes:

You can download and install the modules for an orchestrator without running first using:

```bash
naptha create orchestrator:multiagent_chat --agent_modules "agent:simple_chat_agent,agent:simple_chat_agent" --worker_node_urls "http://node.naptha.ai:7001,http://node1.naptha.ai:7001" --environment_modules "environment:groupchat_environment" --environment_node_urls "http://node.naptha.ai:7001"
```

You can run the orchestrator module on hosted nodes using:

```bash
naptha run orchestrator:multiagent_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --worker_node_urls "http://node.naptha.ai:7001,http://node1.naptha.ai:7001" --environment_node_urls "http://node.naptha.ai"
```

Or on local nodes:

```bash
naptha run orchestrator:multiagent_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --worker_node_urls "http://localhost:7001,http://localhost:7001" --environment_node_urls "http://localhost:7001"
```

```bash
naptha run orchestrator:babyagi -p "objective='Research the history of football'" --worker_node_urls "http://node.naptha.ai:7001,http://node1.naptha.ai:7001"
```

```bash
naptha run orchestrator:multiagent_debate -p "initial_claim='Teslas price will exceed $250 in 2 weeks.' max_rounds=2 context='Teslas current price is $207, and recent innovations and strong Q2 results will drive the price up.

News Summary 1:
Tesla stock was lower to start a new week of trading, falling as investors worry about global growth. Shares of the electric-vehicle giant were down 7.3% in premarket trading Monday at $192.33. Stocks around the world were falling as investors fretted that weak economic data signal a recession ahead. Despite positive comments from CEO Elon Musk about Tesla’s sales, the stock has fallen about 16% this year and is struggling to overcome negative global investor sentiment.

News Summary 2:
Tesla faces growing competition and softening demand, impacting its stock price which is trading 43% below its all-time high. The company’s profitability is declining, with earnings per share shrinking 46% year-over-year in Q2 2024. Despite recent price cuts and a plan to produce a low-cost EV model, sales growth has decelerated. Tesla is also involved in autonomous self-driving software, humanoid robots, and solar energy, but these segments may take years to significantly impact revenue.
'" --worker_node_urls "http://node.naptha.ai:7001"
```

## Environment Modules

Environment modules in Naptha provide shared state and communication infrastructure for multi-agent workflows. They act as a common space where agents can interact, share information, and maintain persistent state across workflow executions. Think of them as the "world" or "environment" in which agents operate and communicate.

For example, an environment module might:
- Maintain a shared conversation history for a group chat
- Store and manage a knowledge base that multiple agents can read from and write to
- Provide a shared task queue for coordinating work between agents
- Manage game state for multi-agent simulations

### Interact with the Environment Hub

You can also use the CLI to explore available environments that you can use with orchestrators:

```bash
naptha environments # list all environment modules
```

### Create a New Environment Module

```bash
naptha environments environment_name -p "description='Environment description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://folder_id'" 
```

### Delete an Environment Module

```bash
naptha environments -d environment_name
```

### Run an Environment Module

```bash
naptha run environment:groupchat_environment -p "function_name='get_global_state'"
```

## Knowledge Base Modules

### Interact with the Knowledge Base Hub

You can also use the CLI to explore available knowledge bases that you can use with agents:

```bash
naptha kbs
```

### Register a New Knowledge Base Module on the Hub

```bash
naptha kbs kb_name -p "description='Knowledge Base description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

### Delete a Knowledge Base Module

```bash
naptha kbs -d kb_name
```

### Create a New Knowledge Base on a Node

```bash
naptha create kb:wikipedia_kb 
```

### Initialize the content in the Knowledge Base

```bash
naptha run kb:wikipedia_kb -p "mode='init'"
```

### List content in the Knowledge Base

```bash
naptha kbs wikipedia_kb -l
```

### Add to the Knowledge Base

```bash
naptha kbs wikipedia_kb -a -c "url='https://en.wikipedia.org/wiki/Socrates' title='Socrates' text='Socrates was a Greek philosopher from Athens who is credited as the founder of Western philosophy and as among the first moral philosophers of the ethical tradition of thought.'" 
```

### Query the Knowledge Base Module

```bash
naptha run kb:wikipedia_kb -p "mode='query' query='Socrates'"
```

### Run an Agent that interacts with the Knowledge Base

```bash
naptha run agent:wikipedia_agent -p "query='Socrates' question='Who is Socrates?'" --kb_node_urls "http://localhost:7001"
```

## Personas

### Interact with the Persona Hub

You can also use the CLI to explore available personas that you can use with agents:

```bash
naptha personas # list all persona modules
```

For each persona, you will see a url where you can check out the data.

### Create a New Persona

```bash
naptha personas persona_name -p "description='Persona description' module_url='ipfs://folder_id'" 
```

### Delete a Persona

```bash
naptha personas -d persona_name
```

## Inference 

```bash
naptha inference "How can we create scaling laws for multi-agent systems?" -m "phi3:mini"
```

## Storage Operations 

#### Interact with Node Storage

After the agent runs finish, you can download the file from the node using:

```bash
naptha read_storage -id <agent_run_id>
```

#### Write to node storage:
```bash
naptha write_storage -i files/<filename>.jpg

```

#### Read from node storage:
```bash
naptha read_storage -id <agent_run_id>
```

#### Interact with IPFS thorugh Node:
```bash
naptha write_storage -i files/<filename>.jpg --ipfs  # Write to IPFS
```



### Community
:::info Join Our Community!

🌐 [naptha.ai](https://naptha.ai) - Check out our Website

💻 [naptha/naptha](https://github.com/NapthaAI) - Contribute on GitHub 

🤗 [naptha/naptha](https://huggingface.co/NapthaAI) - Join our HuggingFace Community

X [@naptha_ai](https://twitter.com/NapthaAI)  - Follow us on Twitter

⚡ [@naptha_ai](https://warpcast.com/naptha_ai) - Connect on Farcaster

📺 [naptha.ai](https://www.youtube.com/channel/UCoDwQ3DZa1bRJPrIz_4_02w) - Subscribe to our YouTube channel
:::

### Bounties and Microgrants
Have an idea for a cool use case to build with our SDK? Get in touch at [team@naptha.ai](mailto:team@naptha.ai).
