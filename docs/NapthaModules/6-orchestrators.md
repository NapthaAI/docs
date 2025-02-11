# Orchestrator Modules

Agent orchestrators are modules that manage the orchestration of agents, tools, environments, and personas, as defined through interaction patterns and workflows. Examples of agent orchestrators include:

- Orchestration of numerous social agents e.g. agents that take part in debate or social simulations
- Orchestration of numerous task-solving agents e.g. agents that work together to solve a problem or write code (like BabyAGI or MetaGPT)
- Orchestration of numerous market agents e.g. agents that work together to make predictions

The code for the orchestration logic is usually contained in the `run.py` file of the orchestrator module (for a detailed breakdown of the structure of an orchestrator module, see the [overview](/NapthaModules/0-overview.md) page).

## Orchestrator Configurations

As well as the core orchestration logic, Orchestrator Modules are configured by specifying:

* **An LLM Configuration** - The language model that the orchestrator uses to generate responses
* **Max Rounds** - The maximum number of rounds of interaction between agents

The configuration of an orchestrator module can be specified using the `OrchestratorConfig` class:

```python
#naptha-sdk OrchestratorConfig
class OrchestratorConfig(BaseModel):
    config_name: Optional[str] = "orchestrator_config"
    llm_config: Optional[LLMConfig] = None
    max_rounds: Optional[int] = 5
```

Or in the deployment.json file in the `configs` folder of the module:

```json
        "config": {
            "config_name": "orchestrator_config_1",
            "llm_config": {"config_name": "model_1"},
            "max_rounds": 5,
        }
```

## Orchestrator Deployments

Orchestrator deployments allow you to specify other modules that the orchestrator module interacts with:

* **Agents** - Agents that the orchestrator module interacts with
* **Environments** - Environments that the orchestrator module interacts with
* **Knowledge Bases** - Knowledge bases that the orchestrator module interacts with
* **Memory** - Contextual storage enabling agents to maintain state and learn from interactions

They also allow you to specify the `node` that the orchestrator will run on. The configuration of an orchestrator deployment can be specified using the `OrchestratorDeployment` class:

```python
#naptha-sdk/schemas.py
class OrchestratorDeployment(BaseModel):
    node: Union[NodeConfig, NodeConfigUser, Dict]
    name: Optional[str] = None
    module: Optional[Dict] = None
    config: Optional[OrchestratorConfig] = None
    agent_deployments: Optional[List[AgentDeployment]] = None
    environment_deployments: Optional[List[EnvironmentDeployment]] = None
    kb_deployments: Optional[List[KBDeployment]] = None
    memory_deployments: Optional[List[MemoryDeployment]] = None
```

Or in the deployment.json file:

```json
# OrchestratorDeployment in deployment.json file 
[
    {
        "node": {"name": "node2.naptha.ai"},
        "module": {"name": "multiagent_chat"},
        "config": ...,
        "agent_deployments": [{"name": "agent_deployment_1"}, {"name": "agent_deployment_2"}],
        "environment_deployments": [{"name": "environment_deployment_1"}],
        "kb_deployments": [{"name": "kb_deployment_1"}],
        "memory_deployments": [{"name": "memory_deployment_1"}, {"name": "memory_deployment_2"}]
    }
]
```

## Deploying and Running an Orchestrator Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### In Python

You can run an orchestrator in Python using:

```python
from naptha_sdk.client.naptha import Naptha
from naptha_sdk.modules.orchestrator import Orchestrator
from naptha_sdk.schemas import OrchestratorRunInput

naptha = Naptha()

orchestrator_deployment = {
    "node": {"name": "node2.naptha.ai"},
    "module": {"name": "multiagent_chat"},
    ...
}

orchestrator = Orchestrator()

# Deploy the orchestrator
response = await orchestrator.create(orchestrator_deployment)

input_params = {
    "prompt": "i would like to count up to ten, one number at a time. ill start. one.", 
}

orchestrator_run_input = OrchestratorRunInput(
    consumer_id=naptha.user.id,
    inputs=input_params,
    deployment=orchestrator_deployment,
    signature=sign_consumer_id(naptha.user.id, os.getenv("PRIVATE_KEY"))
)

# Call the orchestrator
response = await orchestrator.call_orchestrator_func(orchestrator_run_input)
```

Under the hood, `call_orchestrator_func` makes a call to the orchestrator node via API, which executes the orchestrator module. 

### From the CLI

You can deploy the modules for an orchestrator (without running) using:

```bash
naptha create orchestrator:multiagent_chat --agent_modules "agent:simple_chat_agent,agent:simple_chat_agent" --agent_nodes "node.naptha.ai,node1.naptha.ai" --kb_modules "kb:groupchat_kb" --kb_nodes "node.naptha.ai"
```

You can run the orchestrator module on hosted nodes using:

```bash
naptha run orchestrator:multiagent_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --agent_nodes "node.naptha.ai,node.naptha.ai" --kb_nodes "node.naptha.ai"
```

## Examples

Check out these sample agent orchestrator modules:
- [Multiagent Chat](https://github.com/NapthaAI/multiagent_chat)
- [BabyAGI](https://github.com/NapthaAI/babyagi)
- [Multiagent Debate](https://github.com/NapthaAI/multiagent_debate)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel 
- Submit issues on [GitHub](https://github.com/NapthaAI)