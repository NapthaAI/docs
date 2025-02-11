# Agent Modules

The core of the Agent Module is the loop or logic that an agent runs. Some examples of agents that use different loops include: 

- **Chat Agents**  
  Simple conversational agents that can engage in dialogue. These agents receive a request and send a response. 
- **ReAct Agents**
  Agents that follow the Reason-Act pattern for structured problem solving. First a reasoning step is performed to determine the best action to take. Then an action is executed. 
- **Cognitive Agents**
  Agents that follow the Perceive-Act-Reflect loop, where they perceive their environment, take actions, and reflect on the outcomes to improve future decisions. This kind of loop is used by cognitive architectures like SOAR and ACT-R.

The code for this loop is usually contained in the `run.py` file of the agent module (for a detailed breakdown of the structure of an agent module, see the [overview](/NapthaModules/overview) page).

## Agent Configurations

As well as the core loop, Agent Modules are configured by specifying:

* **An LLM Configuration** - The language model that the agent uses to generate responses
* **System Prompts** - Define the data that will be passed to the LLM along with inputs
* **Persona Module** - Additional personality traits and characteristics loaded into the system prompt

The configuration of an agent module can be specified using the `AgentConfig` class:

```python
#naptha_sdk/schemas.py
class AgentConfig(BaseModel):
    config_name: Optional[str] = "agent_config"
    llm_config: Optional[LLMConfig] = None
    persona_module: Optional[Union[Dict, BaseModel]] = None
    system_prompt: Optional[Union[Dict, BaseModel]] = None
```

Or in the deployment.json file in the `configs` folder of the module:

```json
# AgentConfig in deployment.json file 
[
    {
        ...
        "config": {
            "config_name": "agent_config",
            "llm_config": {"config_name": "model_1"},
            "persona_module" : {"name": "richard_twitter"},
            "system_prompt": {
                "role": "You are a helpful AI assistant.",
                "persona": ""
            }
        }
    }
]
```

## Agent Deployments

Agent deployments allow you to specify other modules that the agent module interacts with:

* **Tools/Skills** - Capabilities that agents can use to interact with external systems
* **Environments** - Environments that the agent interacts with
* **Knowledge Bases** - Knowledge bases that the agent can interact with
* **Memory** - Contextual storage enabling agents to maintain state and learn from interactions

They also allow you to specify the `node` that the agent will run on, and the `module` that the agent will use. The configuration of an agent deployment can be specified using the `AgentDeployment` class:

```python
#naptha_sdk/schemas.py
class AgentDeployment(BaseModel):
    node: Union[NodeConfigUser, NodeConfig, Dict]
    name: Optional[str] = None
    module: Optional[Dict] = None
    config: Optional[AgentConfig] = None
    data_generation_config: Optional[DataGenerationConfig] = None
    tool_deployments: Optional[List[ToolDeployment]] = None
    environment_deployments: Optional[List[EnvironmentDeployment]] = None
    kb_deployments: Optional[List[KBDeployment]] = None
    memory_deployments: Optional[List[MemoryDeployment]] = None
```

Or in the deployment.json file:

```json
# AgentDeployment in deployment.json file 
[
    {
        "node": {"name": "node.naptha.ai"},
        "module": {"name": "hello_world_agent"},
        "config": ...,
        "tool_deployments": [{"name": "tool_deployment_1"}, {"name": "tool_deployment_2"}],
        "environment_deployments": [{"name": "environment_deployment_1"}],
        "kb_deployments": [{"name": "kb_deployment_1"}],
        "memory_deployments": [{"name": "memory_deployment_1"}, {"name": "memory_deployment_2"}]
    }
]
```


## Deploying and Running an Agent Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### In Python

You can deploy andrun an agent in Python using:

```python
from naptha_sdk.modules.agent import Agent
from naptha_sdk.client.naptha import Naptha
from naptha_sdk.schemas import AgentRunInput

naptha = Naptha()

agent_deployment = {
    "node": {"name": "node.naptha.ai"},
    "module": {"name": "hello_world_agent"},
    ...
}

# Instantiate the agent
agent = Agent()

# Deploy the agent
response = await agent.create(agent_deployment)

input_params = {
    "firstname": "Sam",
    "surname": "Altman",
}

agent_run_input = AgentRunInput(
    consumer_id=naptha.user.id,
    inputs=input_params,
    deployment=agent_deployment,
    signature=sign_consumer_id(naptha.user.id, os.getenv("PRIVATE_KEY"))
)

# Run the agent
response = await agent.call_agent_func(agent_run_input)
```

Under the hood, `call_agent_func` makes a call to the worker node via API, which executes the agent module. This makes it possible for agents built using different agent frameworks to interoperate.

### From the CLI

You can deploy the agent (without running) using:

```bash
# usage: naptha create <agent_name>
naptha create agent:hello_world_agent
```

Run the agent:

```bash
# usage: naptha run <agent_name> <agent args>
naptha run agent:hello_world_agent -p "firstname=sam surname=altman"
```

## Examples

Check out these sample agent modules:
- [Hello World Agent](https://github.com/NapthaAI/hello_world_agent)
- [Simple Chat Agent](https://github.com/NapthaAI/simple_chat_agent)
- [Generate Image Agent](https://github.com/NapthaAI/generate_image_agent)
- [Wikipedia Agent](https://github.com/NapthaAI/wikipedia_agent)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel 
- Submit issues on [GitHub](https://github.com/NapthaAI)

## Next Steps

- Learn about Orchestrator Modules: [Orchestrator Modules](/NapthaModules/orchestrators)