# Agent Modules

You can think of the Agent Module as the loop that an agent runs.

Agent modules come in several forms:

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

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk).

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

You can deploy an agent via CLI using:

```bash

# Format: naptha create agent:<agent_type> --agent_node <node_url>
naptha create agent:simple_chat_agent --agent_node "https://node.naptha.ai"
```

You can call an agent module via CLI using:

```bash
# Format: naptha run agent:<agent_type> -p "<param_name>=<value>"
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='What is an AI agent?'"
```

The agent will execute on the specified node, making it easy to integrate with other modules.

