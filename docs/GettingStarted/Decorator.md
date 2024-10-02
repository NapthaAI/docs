# Agent Decorator
With only a few lines of code, builders can easily deploy existing AI agents to the Naptha network.

### Step-by-step Guide

1. First, import required tools:
```python
import asyncio
from dotenv import load_dotenv
import os
from naptha_sdk.client.naptha import Naptha

load_dotenv()
```

2. Next, create an instance of the Naptha class:
```python
naptha = Naptha(hub_url="...", node_url="...", ...)
```

3. Then, place the decorator to label your main function:
```python
@naptha.agent(name="agent_name", worker_node_url="http://worker-node-url")
def agent_function(inputs, worker_nodes=None, orchestrator_node=None, flow_run=None, cfg: dict=None):
    # agent logic here
    return some_result
```

4. Finally, call this method to process, package, and publish your agent.
```python
naptha.publish()
```

### How does this work?

Let's break it down:

`@naptha.agent(...)` is the decorator itself, called with two parameters:

* `name` ~ string used to identify the agent
* `worker_node_url` ~ where the agent will run

You can define your agent functionality as you normally would.

When you use this decorator, a few things happen behind the scenes:

* An `Agent` object is created with the details you specified.
* This `Agent` object is added to the list of agents on Naptha.

Later, when you call `naptha.publish()`, the decorated function will be registered as an agent in the Naptha system.

## Examples
### Hello World
```python
from naptha import Naptha

naptha = Naptha(hub_url="...", node_url="...", ...)

@naptha.agent(name="greeter", worker_node_url="http://node.naptha.ai")
def greeter(inputs, worker_nodes=None, orchestrator_node=None, flow_run=None, cfg: dict=None):
    name = inputs.get("name", "World")
    return f"Hello, {name}!"
```

### CrewAI Stock Analysis
```python
async def run_naptha():
    naptha = Naptha(os.getenv("HUB_URL"), os.getenv("NODE_URL"), hub_username=os.getenv("HUB_USERNAME"), hub_password=os.getenv("HUB_PASSWORD"), gh_username=os.getenv("GH_USERNAME"), gh_access_token=os.getenv("GH_ACCESS_TOKEN"))

    @naptha.agent("investment_advisor_agent", "http://localhost:7001")
    def investment_advisor_agent(self) -> Agent:
        return Agent(
            config=self.agents_config['investment_advisor'],
            verbose=True,
            tools=[
                ScrapeWebsiteTool(),
                WebsiteSearchTool(),
                CalculatorTool(),
            ]
        )

    async with naptha:
        await naptha.publish()

if __name__ == "__main__":
    asyncio.run(run_naptha())
```
