# Discovering and Publishing Modules on the Naptha Hub

The Naptha Hub allows you to discover modules, other builders, and nodes on the network. The URL and other metadata of modules are registered on the Naptha Hub, with the module code stored on GitHub, HuggingFace, IPFS, or DockerHub.

## Prerequisites

Install the Naptha SDK using the [instructions here](/GettingStarted/InstallSDK).

## Create an account on the Naptha Hub

You can create an account on the Naptha Hub by running the following command:

```bash
naptha signup
```

## Agents on the Naptha Hub

You can use the CLI to explore available agents:

```bash
naptha agents
```

You should see something like this:

```
                                                                                                                         Available Agent                                                                                                                         
╭───────────────────────────┬────────────────────────────┬────────────────────────────┬─────────────────────────────┬────────────────────────────┬───────────────────────────────────────────────────────────┬────────────────┬─────────────┬───────────────────╮
│ Name                      │ ID                         │ Author                     │ Description                 │ Parameters                 │ Module URL                                                │ Module Version │ Module Type │ Module Entrypoint │
├───────────────────────────┼────────────────────────────┼────────────────────────────┼─────────────────────────────┼────────────────────────────┼───────────────────────────────────────────────────────────┼────────────────┼─────────────┼───────────────────┤
│ babyagi_task_executor     │ agent:babyagi_task_execut… │ user:naptha                │ A simple agent for          │ {tool_name: str,           │ https://github.com/NapthaAI/babyagi_task_executor         │ v0.2           │ agent       │ run.py            │
│                           │                            │                            │ executing tasks in BabyAGI  │ tool_input_data: str}      │                                                           │                │             │                   │
├───────────────────────────┼────────────────────────────┼────────────────────────────┼─────────────────────────────┼────────────────────────────┼───────────────────────────────────────────────────────────┼────────────────┼─────────────┼───────────────────┤
```

For each agent, you will see a module url where you can check out the code. 

To register a new agent, you can use the following command:

```bash
naptha agents agent_name -c "description='Agent description' parameters='{tool_name: str, tool_input_data: str}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

To update an agent, you can use the following command:

```bash
naptha agents agent_name -u "module_version='v0.2'" 
```

To delete an agent, you can use the following command:

```bash
naptha agents -d agent_name
```

## Tools on the Naptha Hub

You can use the CLI to explore available tools for agents to use:

```bash
naptha tools
```

For each tool, you will see a url where you can check out the code.

To create a new tool, you can use the following command:

```bash
naptha tools tool_name -p "description='Tool description' parameters='{tool_input_1: str, tool_input_2: str}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

To update a tool, you can use the following command:

```bash
naptha tools tool_name -u "module_version='v0.2'" 
```

To delete a tool, you can use the following command:

```bash
naptha tools -d tool_name
```

## Knowledge Bases on the Naptha Hub

You can use the CLI to explore available knowledge bases that you can use with agents:

```bash
naptha kbs
```

To register a new knowledge base, you can use the following command:

```bash
naptha kbs kb_name -p "description='Knowledge Base description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

To update a knowledge base, you can use the following command:

```bash
naptha kbs kb_name -u "module_version='v0.2'" 
```

To delete a knowledge base, you can use the following command:

```bash
naptha kbs -d kb_name
```

## Memories on the Naptha Hub

You can use the CLI to explore available memory modules that you can use with agents:

```bash
naptha memories
```

To register a new memory, you can use the following command:

```bash
naptha memories memory_name -p "description='Memory description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

To update a memory module, you can use the following command:

```bash
naptha memories memory_name -u "module_version='v0.2'" 
```

To delete a memory module, you can use the following command:

```bash
naptha memories -d memory_name
```

## Personas on the Naptha Hub

You can use the CLI to explore available personas that you can use with agents:

```bash
naptha personas
```

To register a new persona, you can use the following command:

```bash
naptha personas sam_altman_twitter -c "description='Persona for Sam Altman' parameters='{name: str, bio: str, openness: int}' module_url='https://huggingface.co/datasets/OpenAI/twitter_personas' module_entrypoint='data/sam.json'" 
```

Make sure that the `module_url` is the url of the main repo (e.g the huggingface dataset, github repo, or repo stored on ipfs) and the `module_entrypoint` is the path to the file in the dataset (currently can be json or yaml).

To update a persona, you can use the following command:

```bash
naptha personas sam_altman_twitter -u "module_version='v0.2'" 
```

To delete a persona, you can use the following command:

```bash
naptha personas -d sam_altman_twitter
```

## Orchestrators on the Naptha Hub

You can use the CLI to explore available agent orchestrators that you can use to orchestrate agents and other modules:

```bash
naptha orchestrators
```

For each orchestrator, you will see a url where you can check out the code.

To register a new orchestrator, you can use the following command:

```bash
naptha orchestrators orchestrator_name -p "description='Orchestrator description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

To update an orchestrator, you can use the following command:

```bash
naptha orchestrators orchestrator_name -u "module_version='v0.2'" 
```

To delete an orchestrator, you can use the following command:

```bash
naptha orchestrators -d orchestrator_name
```

## Environments on the Naptha Hub

You can use the CLI to explore available environments that you can use with orchestrators and agents:

```bash
naptha environments
```

To register a new environment, you can use the following command:

```bash
naptha environments environment_name -p "description='Environment description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

To update an environment, you can use the following command:

```bash
naptha environments environment_name -u "module_version='v0.2'" 
```

To delete an environment, you can use the following command:

```bash
naptha environments -d environment_name
```

## Node Registry

You can use the CLI to explore available nodes that you can run agents and other modules on:

```bash
naptha nodes
```

You should see something like this:


```
                                                                                                                         Available Nodes                                                                                                                         
╭─────────────────────────────────────┬───────────────────────────────────┬─────────────────────────────────────┬───────┬─────────┬──────────┬───────┬─────────┬──────────┬───────────────────────────────────────────┬──────┬──────────────────────────────────╮
│                                     │                                   │                                     │       │         │ User     │ User  │ # Node  │ Node     │                                           │      │                                  │
│                                     │                                   │                                     │       │         │ Comm     │ Comm  │ Comm    │ Comm     │ Available                                 │ #    │ Provider                         │
│ Node ID                             │ Node IP                           │ Node Owner                          │ OS    │ Arch    │ Protocol │ Port  │ Servers │ Protocol │ Models                                    │ GPUs │ Types                            │
├─────────────────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┼───────┼─────────┼──────────┼───────┼─────────┼──────────┼───────────────────────────────────────────┼──────┼──────────────────────────────────┤
│ node:4f4d23e38f2a6d18276162bda6974… │ node2.naptha.ai                   │ user:4f4d23e38f2a6d18276162bda6974… │ Linux │ x86_64  │ https    │ 7001  │ 1       │ wss      │ NousResearch/Hermes-3-Llama-3.1-8B        │ 8    │ ['models', 'storage', 'modules'] │
│                                     │                                   │                                     │       │         │          │       │         │          │ Qwen/Qwen2.5-7B-Instruct                  │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ meta-llama/Llama-3.1-8B-Instruct          │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ Team-ACE/ToolACE-8B                       │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ ibm-granite/granite-3.1-8b-instruct       │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ internlm/internlm2_5-7b-chat              │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ meetkai/functionary-small-v3.1            │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ jinaai/jina-embeddings-v2-base-en         │      │                                  │
├─────────────────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┼───────┼─────────┼──────────┼───────┼─────────┼──────────┼───────────────────────────────────────────┼──────┼──────────────────────────────────┤
│ node:90875a428e47b1f82b74423a9c89e… │ node.naptha.ai                    │ user:90875a428e47b1f82b74423a9c89e… │ Linux │ x86_64  │ http     │ 7001  │ 1       │ ws       │ phi3:mini                                 │ 0    │ ['models', 'storage', 'modules'] │
├─────────────────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┼───────┼─────────┼──────────┼───────┼─────────┼──────────┼───────────────────────────────────────────┼──────┼──────────────────────────────────┤
│ node:ac20cca492e06fbf1df7b8e60a845… │ node3.naptha.ai                   │ user:ac20cca492e06fbf1df7b8e60a845… │ Linux │ x86_64  │ https    │ 7001  │ 1       │ wss      │ katanemo/Arch-Function-7B                 │ 8    │ ['models', 'storage', 'modules'] │
│                                     │                                   │                                     │       │         │          │       │         │          │ deepseek-ai/DeepSeek-R1-Distill-Qwen-32B  │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ microsoft/phi-4                           │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ mistralai/Mistral-Small-24B-Instruct-2501 │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ Qwen/QwQ-32B-Preview                      │      │                                  │
├─────────────────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┼───────┼─────────┼──────────┼───────┼─────────┼──────────┼───────────────────────────────────────────┼──────┼──────────────────────────────────┤
╰─────────────────────────────────────┴───────────────────────────────────┴─────────────────────────────────────┴───────┴─────────┴──────────┴───────┴─────────┴──────────┴───────────────────────────────────────────┴──────┴──────────────────────────────────╯

Total nodes: 3
```

## Need Help?

- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI)