# Agent Orchestrator Modules

Agent orchestrators are modules that manage the orchestration of agents, tools, environments, and personas. Examples of agent orchestrators include:

- Orchestration of multiple social agents e.g. agents that take part in debate or social simulations
- Orchestration of multiple task-solving agents e.g. agents that work together to solve a problem or write code (like BabyAGI or MetaGPT)
- Orchestration of multiple market agents e.g. agents that work together to make predictions

## Deploying and Calling an Agent Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

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

#### Interact with the Agent Orchestrator Hub

You can also use the CLI to explore available agent orchestrators that you can run on a network of nodes:

```bash
naptha orchestrators
```

For each orchestrator, you will see a url where you can check out the code.

#### Create a New Agent Orchestrator

```bash
naptha orchestrators orchestrator_name -p "description='Orchestrator description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

#### Delete an Agent Orchestrator

```bash
naptha orchestrators -d orchestrator_name
```

#### Run an Agent Orchestrator across a network of nodes:

You can download and install the modules for an orchestrator without running first using:

```bash
naptha create orchestrator:multiagent_chat --agent_modules "agent:simple_chat_agent,agent:simple_chat_agent" --agent_nodes "node.naptha.ai,node1.naptha.ai" --kb_modules "kb:groupchat_kb" --kb_nodes "node.naptha.ai"
```

You can run the orchestrator module on hosted nodes using:

```bash
naptha run orchestrator:multiagent_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --agent_nodes "node.naptha.ai,node1.naptha.ai" --kb_nodes "node.naptha.ai"
```

Or on local nodes:

```bash
naptha run orchestrator:multiagent_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --agent_nodes "localhost,localhost" --kb_nodes "localhost"
```

```bash
naptha run orchestrator:babyagi -p "objective='Research the history of football'" --agent_nodes "node.naptha.ai,node1.naptha.ai"
```

```bash
naptha run orchestrator:multiagent_debate -p "initial_claim='Teslas price will exceed $250 in 2 weeks.' max_rounds=2 context='Teslas current price is $207, and recent innovations and strong Q2 results will drive the price up.

News Summary 1:
Tesla stock was lower to start a new week of trading, falling as investors worry about global growth. Shares of the electric-vehicle giant were down 7.3% in premarket trading Monday at $192.33. Stocks around the world were falling as investors fretted that weak economic data signal a recession ahead. Despite positive comments from CEO Elon Musk about Tesla’s sales, the stock has fallen about 16% this year and is struggling to overcome negative global investor sentiment.

News Summary 2:
Tesla faces growing competition and softening demand, impacting its stock price which is trading 43% below its all-time high. The company’s profitability is declining, with earnings per share shrinking 46% year-over-year in Q2 2024. Despite recent price cuts and a plan to produce a low-cost EV model, sales growth has decelerated. Tesla is also involved in autonomous self-driving software, humanoid robots, and solar energy, but these segments may take years to significantly impact revenue.
'" --agent_nodes "node.naptha.ai,node1.naptha.ai"
```

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)