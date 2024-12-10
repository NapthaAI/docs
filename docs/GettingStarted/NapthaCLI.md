# Naptha CLI Usage

Here's a list of commands you can use with the Naptha CLI.

### User Management
Create or manage your Naptha account:
```bash
naptha signup  # Create new account and generate a private key
```
:::info
This command will prompt you to create an account by entering a username and password. It also automatically generates a private key and stores it in your .env file.
:::

### Nodes
See a list of available nodes on the network:
```bash
naptha nodes
```

### Agents
Explore available agents that you can run on a node:
```bash
naptha agents
```
*For each agent, you will see a url where you can check out the code.*

#### Create an agent:
```bash
naptha agents <agent_name> -p "description='about' url='https://github.com/NapthaAI/<agent_name>' type='flow' version='0.1'" 
```

#### Delete an agent:
```bash
naptha agents -d <agent_name>
```

### Orchestrators
Manage multi-agent workflows:
```bash
naptha orchestrators  # List available orchestrators
naptha orchestrators <name> -p "description='desc' url='ipfs://<hash>' type='package' version='0.1'"  # Create a New Agent Orchestrator
naptha orchestrators -d <name>  # Delete an Agent Orchestrator
```

#### Run an Agent Orchestrator across a network of Nodes
```bash
naptha run orchestrator:multiagent_chat -p "prompt='your prompt'" --worker_nodes "http://node.naptha.ai:7001,http://node1.naptha.ai:7001"
```

```bash
naptha run orchestrator:babyagi -p "objective='Your research objective'" --worker_nodes "http://node.naptha.ai:7001,http://node1.naptha.ai:7001"
```

```bash
naptha run orchestrator:multiagent_debate -p "initial_claim='Your claim' max_rounds=2 context='Your context'" --worker_nodes "http://node.naptha.ai:7001"
```


### Environments
Manage shared state modules:
```bash
naptha environments  # List available environments
naptha environments <name> -p "description='desc' url='ipfs://<hash>' type='package' version='0.1' entrypoint='run.py'"  # Create a New Environment Module
naptha environments -d <name>  # Delete an Environment Module
```

```bash
naptha run environment:groupchat_environment -p "function_name='get_global_state'" # Run an Environment Module
```

### Personas
Manage agent personas:
```bash
naptha personas  # List available personas
naptha personas <name> -p "description='desc' url='ipfs://<hash>' version='0.1'"  # Create a New Persona
naptha personas -d <name>  # Delete
```


### Storage Operations

#### Write to node storage:
```bash
naptha write_storage -i files/<filename>.jpg
naptha write_storage -i files/<filename>.jpg --ipfs  # Write to IPFS
```

#### Read from node storage:
```bash
naptha read_storage -id <agent_run_id>
```

### Examples
Try a basic "Hello world" agent:
```bash
naptha run hello_world_agent -p "firstname=Sam surname=Altman"
```

Try an agent that uses the local LLM running on your node:
```bash
naptha run simple_chat_agent -p '{"prompt":"What is an AI agent?"}'
```

You can also run agents from docker images:
```bash
naptha run docker_hello_world -f ./example_yamls/docker_hello_world.yml
```

### Community
:::info Join Our Community!

🌐 [naptha.ai](https://naptha.ai) - Check out our Website

💻 [naptha/naptha](https://github.com/NapthaAI) - Contribute on GitHub 

🤗 [naptha/naptha](https://huggingface.co/NapthaAI) - Join our HuggingFace Community

X [@naptha_ai](https://twitter.com/NapthaAI)  - Follow us on Twitter

⚡ [@naptha_ai](https://warpcast.com/naptha_ai) - Connect on Farcaster

📺 [naptha.ai](https://www.youtube.com/channel/UCoDwQ3DZa1bRJPrIz_4_02w) - Subscribe to our YouTube
:::

### Bounties and Microgrants
Have an idea for a cool use case to build with our SDK? Get in touch at [team@naptha.ai](mailto:team@naptha.ai).
