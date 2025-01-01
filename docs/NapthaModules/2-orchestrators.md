# Agent Orchestrator Modules

Agent orchestrators are modules that manage the orchestration of agents, tools, environments, and personas. Examples of agent orchestrators include:

- Orchestration of multiple social agents e.g. agents that take part in debate or social simulations
- Orchestration of multiple task-solving agents e.g. agents that work together to solve a problem or write code (like BabyAGI or MetaGPT)
- Orchestration of multiple market agents e.g. agents that work together to make predictions

## Deploying and Calling an Agent Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk).

### In Python

You can run an orchestrator in Python using:

```python
from naptha_sdk.orchestrator import Orchestrator

orchestrator_deployment = {
    "module": {"name": "multiagent_chat"},
    "orchestrator_node_url": "https://node.naptha.ai",
    "worker_node_urls": ["http://node.naptha.ai:7001", "http://node1.naptha.ai:7001"]
    "environment_node_url": "http://node.naptha.ai:7001"
}

# Instantiate the orchestrator
orchestrator = Orchestrator(orchestrator_deployment)

# Deploy the orchestrator
response = await orchestrator.create(orchestrator_deployment)

# Call the orchestrator
response = await orchestrator.call_orchestrator_func(
    function_name="multiagent_chat", 
    tool_input_data="i would like to count up to ten, one number at a time. ill start. one.", 
)
```

Under the hood, `call_orchestrator_func` makes a call to the orchestrator node via API, which executes the orchestrator module. T

### From the CLI

You can deploy an orchestrator via CLI using:

```bash
naptha create orchestrator:multiagent_chat --orchestrator_node "https://node.naptha.ai" --worker_node_urls "https://node.naptha.ai:7001,https://node1.naptha.ai:7001" --environment_node "https://node.naptha.ai:7001"
```

You can call an orchestrator module via CLI using:

```bash
naptha run orchestrator:multiagent_chat -p "function_name='multiagent_chat' tool_input_data='i would like to count up to ten, one number at a time. ill start. one.'"
```

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)