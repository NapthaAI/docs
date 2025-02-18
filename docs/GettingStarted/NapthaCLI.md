# Naptha CLI Usage

Here's a list of commands you can use with the Naptha CLI.

## Basic Usage
```bash
naptha [command] [options]
```

### Available Commands
| Command | Description |
|---------|-------------|
| `signup` | Sign up a new user |
| `agents` | List available agents |
| `tools` | List available tools |
| `kbs` | List available knowledge bases |
| `memories` | List available memoriy modules |
| `personas` | List available personas |
| `orchestrators` | List available orchestrators |
| `environments` | List available environments |
| `nodes` | List available nodes |
| `create` | Create a new module deployment |
| `run` | Execute run command |
| `inference` | Run model inference |
| `storage` | Interact with storage |
| `publish` | Publish agents |

### Global Options
```bash
-h, --help            Show help message and exit
```

## User Management
Create a private key (for interacting with Naptha Nodes) and a username and password (for interacting with the Naptha Hub):

```bash
naptha signup  # Create new account and generate a private key
```

:::info
This command will prompt you to create an account by entering a username and password. It also automatically generates a private key and stores it in your .env file.
:::

The `HUB_USERNAME` and `HUB_PASSWORD` will be automatically stored in your .env file, and the `PRIVATE_KEY` in a .pem file.

## Command to interact with the Naptha Hub

The HUB_URL should be set in your .env file e.g. `HUB_URL=wss://hub.naptha.ai/rpc`, along with your `HUB_USERNAME` and `HUB_PASSWORD`.

### Agents

Explore available agents that you can run on a node:
```bash
naptha agents
```
*For each agent, you will see a url where you can check out the code.*

#### Register an agent:

```bash
naptha agents agent_name -p "description='about' parameters='{tool_name: str, tool_input_data: str}' module_url='https://github.com/NapthaAI/<agent_name>'" 
```

#### Update an agent:

```bash
naptha agents agent_name -u "module_version='v0.2'" 
```

#### Delete an agent:
```bash
naptha agents -d agent_name
```

### Tools

Explore available tools that you can use with agents:

```bash
naptha tools
```
*For each tool, you will see a url where you can check out the code.*

#### Register a New Tool

```bash
naptha tools tool_name -p "description='Tool description' parameters='{tool_input_1: str, tool_input_2: str}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

#### Update a Tool

```bash
naptha tools tool_name -u "module_version='v0.2'" 
```

#### Delete a Tool

```bash
naptha tools -d tool_name
```

### Knowledge Bases

You can explore available knowledge bases that you can use with agents:

```bash
naptha kbs
```

#### Register a New Knowledge Base Module on the Hub

```bash
naptha kbs kb_name -p "description='Knowledge Base description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

#### Update a Knowledge Base Module

```bash
naptha kbs kb_name -u "module_version='v0.2'" 
```

#### Delete a Knowledge Base Module

```bash
naptha kbs -d kb_name
```

### Memories

You can explore available memories that you can use with agents:

```bash
naptha memories
```
*For each memory, you will see a url where you can check out the code.*

#### Register a New Memory Module

```bash
naptha memories memory_name -p "description='Memory description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://folder_id'" 
```

#### Update a Memory Module

```bash
naptha memories memory_name -u "module_version='v0.2'" 
```

#### Delete a Memory Module

```bash
naptha memories -d memory_name
```

### Personas

You can explore available personas that you can use with agents:

```bash
naptha personas # list all persona modules
```

For each persona, you will see a url where you can check out the data.

#### Register a New Persona

```bash
naptha personas persona_name -p "description='Persona description' module_url='ipfs://folder_id'" 
```

#### Update a Persona

```bash
naptha personas persona_name -u "module_version='v0.2'" 
```

#### Delete a Persona

```bash
naptha personas -d persona_name
```

### Orchestrators

You can explore available agent orchestrators that you can run on a network of nodes:

```bash
naptha orchestrators
```
*For each orchestrator, you will see a url where you can check out the code.*

#### Register a New Agent Orchestrator

```bash
naptha orchestrators orchestrator_name -p "description='Orchestrator description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://folder_id'" 
```

#### Update an Agent Orchestrator

```bash
naptha orchestrators orchestrator_name -u "module_version='v0.2'" 
```

#### Delete an Agent Orchestrator

```bash
naptha orchestrators -d orchestrator_name
```

### Environments

You can explore available environments that you can use with environments:

```bash
naptha environments # list all environment modules
```

#### Register a New Environment Module

```bash
naptha environments environment_name -p "description='Environment description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://folder_id'" 
```

#### Update an Environment Module

```bash
naptha environments environment_name -u "module_version='v0.2'" 
```

#### Delete an Environment Module

```bash
naptha environments -d environment_name
```

### Nodes
See a list of available nodes on the network:
```bash
naptha nodes
```
:::info
Make note of a Node ID for running a workflow below.
:::

## Commands to interact with Naptha Nodes

The NODE_URL should be set in your .env file e.g. `NODE_URL=https://node2.naptha.ai` or `NODE_URL=http://localhost:7001`.

### Create a module deployment on a Naptha Node

Create allows you to download and install the modules for a moudle without running first.

For simple modules, you can create a new module deployment on a node:

```bash
# usage: naptha create <module_type>:<module_name> 
naptha create <module_type>:<module_name>
```

For example, to create a new knowledge base on a node:

```bash
naptha create kb:wikipedia_kb 
```

For more complex modules like orchestrators, you can download and install the modules:

```bash
# usage: naptha create <module_type>:<module_name> --agent_modules "<agent_modules>" --worker_node_urls "<worker_node_urls>" --environment_modules "<environment_modules>" --environment_node_urls "<environment_node_urls>"
naptha create orchestrator:multiagent_chat --agent_modules "agent:simple_chat_agent,agent:simple_chat_agent" --worker_node_urls "node.naptha.ai,node1.naptha.ai" --environment_modules "environment:groupchat_environment" --environment_node_urls "node.naptha.ai"
```

:::note
You can modify the `max_rounds` of the orchestrator run from the default value of 10 by passing in a config object in the command line: `--config '{"max_rounds": 5}'`
:::

### Run a module on a Naptha Node

Run allows you to run a module on a node.

#### Run an Agent Module

Now you've found a node and a agent you'd like to run, so let's run it locally! You can use the commandline tool to connect with the node and run the workflow. 

```bash
# usage: naptha run <agent_name> <agent args>
naptha run agent:hello_world_agent -p "firstname=sam surname=altman"
```

Try an agent that uses the local LLM running on your node:

```bash
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='what is an ai agent?'"
```

#### Run a Tool Module

Now you've found a node and a tool you'd like to run, so let's run it locally! You can use the commandline tool to connect with the node and run the workflow. 

```bash
# usage: naptha run <tool_name> -p "<tool args>"
naptha run tool:generate_image_tool -p "tool_name='generate_image_tool' tool_input_data='A beautiful image of a cat'"
```

#### Run an Agent that interacts with a Tool Module

```bash
# usage: naptha run <agent_name> -p "<agent args>" --tool_nodes "<tool_node_ips>"
naptha run agent:generate_image_agent -p "tool_name='generate_image_tool' prompt='A beautiful image of a cat'" --tool_nodes "node.naptha.ai"
```

#### Run a Knowledge Base Module

Initialize the content in the Knowledge Base:

```bash
naptha run kb:wikipedia_kb -p "func_name='init'"
```

Query the Knowledge Base Module:

```bash
naptha run kb:wikipedia_kb -p '{
    "func_name": "run_query",
    "func_input_data": {
        "query": "Elon Musk"
    }
}'
```

#### Run an Agent that interacts with a Knowledge Base

```bash
# usage: naptha run <agent_name> -p "<agent args>" --kb_nodes "<kb_node_ips>"
naptha run agent:wikipedia_agent -p "func_name='run_query' query='Elon Musk' question='Who is Elon Musk?'" --kb_nodes "node.naptha.ai"
```

#### Run a Memory Module

```bash
naptha run memory:cognitive_memory -p "func_name='init'"
```

#### Run an Agent Orchestrator Module

You can run the orchestrator module on hosted nodes using:

```bash
naptha run orchestrator:multiagent_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --worker_node_urls "node.naptha.ai,node1.naptha.ai" --environment_node_urls "node.naptha.ai"
```

Or on local nodes:

```bash
naptha run orchestrator:multiagent_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --worker_node_urls "localhost,localhost" --environment_node_urls "localhost"
```

#### Run an Environment Module

```bash
naptha run environment:groupchat_environment -p "function_name='get_global_state'"
```

## Inference 

The NODE_URL should be set in your .env file e.g. `NODE_URL=https://node2.naptha.ai` or `NODE_URL=http://localhost:7001`.

You can run inference on a node using the inference command:

```bash
naptha inference "How can we create scaling laws for multi-agent systems?" -m "hermes3:8b"
```

## Storage Operations 

The NODE_URL should be set in your .env file e.g. `NODE_URL=https://node2.naptha.ai` or `NODE_URL=http://localhost:7001`.

You can interact with storage quickly via the CLI using the `naptha storage` series of commands, followed by the storage provider type (e.g. `db` `fs`, `ipfs`).

For more comprehensive examples on quickly interacting with storage via the CLI, see the [database](/docs/NapthaStorage/1-database.md), [filesystem](/docs/NapthaStorage/2-files.md), and [IPFS](/docs/NapthaStorage/3-ipfs.md) storage sections.

### Database Storage

You can create a table in the database using:

```
naptha storage db create test_embeddings -d '{
  "schema": {
    "id": {"type": "TEXT", "primary_key": true},
    "text": {"type": "TEXT", "required": true},
    "embedding": {"type": "vector", "dimension": 3}
  }
}'
```

You can create a row in the database using:

```bash
naptha storage db create test_embeddings -d '{
  "data": {
    "id": "1",
    "text": "This is a test document",
    "embedding": [0.1, 0.1, 0.1]
  }
}'
```

You can read from the database using:

```bash
naptha storage db read test_embeddings -o '{
  "columns": ["text", "id"]
}'
```

### File System Storage

You can write to file storage using:

```bash
naptha storage fs create test_upload -f README.md
```

You can read from file storage using:

```bash
naptha storage fs read <agent_run_id>
```

### Interact with IPFS through Node:

You can write to IPFS using:

```bash
naptha storage ipfs create test -f README.md
```

You can read from IPFS using:

```bash
naptha storage ipfs read <IPFS_HASH>
```

## Need Help?

- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI)

### Community
:::info Join Our Community!

🌐 [naptha.ai](https://naptha.ai) - Check out our Website

💻 [naptha/naptha](https://github.com/NapthaAI) - Contribute on GitHub 

🤗 [naptha/naptha](https://huggingface.co/NapthaAI) - Join our HuggingFace Community

X [@naptha_ai](https://twitter.com/NapthaAI)  - Follow us on Twitter

⚡ [@naptha_ai](https://warpcast.com/naptha_ai) - Connect on Farcaster

📺 [naptha.ai](https://www.youtube.com/channel/UCoDwQ3DZa1bRJPrIz_4_02w) - Subscribe to our YouTube channel
:::

