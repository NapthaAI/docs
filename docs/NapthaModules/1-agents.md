# Agent Modules

You can think of the Agent Module as the loop that an agent runs.

Agent modules can come in several forms:

- **Chat Agents**  
  Simple conversational agents that can engage in dialogue
- **Task-Solving Agents** 
  Agents that can break down and complete specific tasks
- **ReAct Agents**
  Agents that follow the Reason-Act pattern for structured problem solving
- **BDI Agents**
  Belief-Desire-Intention agents for complex autonomous behavior
- **SOAR Agents**
  State, Operator, And Result agents for cognitive architectures
- **RL Agents**
  Reinforcement Learning agents that follow the Perceive-Act-Reflect loop

## Deploying and Calling an Agent Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### In Python

You can run an agent in Python using:

```python
from naptha_sdk.agent import Agent

agent_deployment = {
    "module": {"name": "simple_chat_agent"},
    "worker_node_url": "https://node.naptha.ai"
}

# Instantiate the agent
agent = Agent()

# Deploy the agent
response = await agent.create(agent_deployment)

# Call the agent
response = await agent.call_agent_func(
    tool_name="chat", 
    tool_input_data="What is an AI agent?", 
)
```

Under the hood, `call_agent_func` makes a call to the worker node via API, which executes the agent module. This makes it possible for agents built using different agent frameworks to interoperate.

### From the CLI

#### Interact with the Agent Hub

You can also use the CLI to explore available agents that you can run on a node:

```bash
naptha agents
```

For each agent, you will see a url where you can check out the code.

#### Create a New Agent

```bash
naptha agents agent_name -p "description='Agent description' parameters='{tool_name: str, tool_input_data: str}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

#### Delete an Agent

```bash
naptha agents -d agent_name
```

#### Run an Agent

Now you've found a node and a agent you'd like to run, so let's run it locally! You can use the commandline tool to connect with the node and run the workflow. 

```bash
# usage: naptha run <agent_name> <agent args>
naptha run agent:hello_world_agent -p "firstname=sam surname=altman"
```

Try an agent that uses the local LLM running on your node:

```bash
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='what is an ai agent?'"
```

You can also run agents from docker images (if running your own node, make sure the `DOCKER_JOBS=True` in the config):

```bash
naptha run docker_hello_world -p "docker_image=hello-world"
```

## Examples

Check out these sample agent modules:
- [Simple Chat Agent](https://github.com/NapthaAI/simple_chat_agent)
- [Hello World Agent](https://github.com/NapthaAI/hello_world_agent)
- [Random Number Agent](https://github.com/NapthaAI/random_number_agent)
- [Debate Agent](https://github.com/NapthaAI/debate_agent)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)