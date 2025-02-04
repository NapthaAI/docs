# Agent Modules

The core of the Agent Module is the loop or logic that an agent runs. Some examples of agents that use different loops include: 

- **Chat Agents**  
  Simple conversational agents that can engage in dialogue. These agents receive a request and send a response. 
- **ReAct Agents**
  Agents that follow the Reason-Act pattern for structured problem solving. First a reasoning step is performed to determine the best action to take. Then an action is executed. 
- **Cognitive Agents**
  Agents that follow the Perceive-Act-Reflect loop, where they perceive their environment, take actions, and reflect on the outcomes to improve future decisions. This kind of loop is used by cognitive architectures like SOAR and ACT-R.

The code for this loop is usually contained in the `run.py` file of the agent module (for a detailed breakdown of the structure of an agent module, see the [overview](/NapthaModules/0-overview) page).

## Agent Configurations

As well as the core loop, Agent Modules are configured by specifying:

* **An LLM Configuration** - The language model that the agent uses to generate responses
* **System Prompts** - Define the data that will be passed to the LLM along with inputs
* **Persona Module** - Additional personality traits and characteristics loaded into the system prompt

The configuration of an agent module can be specified using the `AgentConfig` class:

```python
#naptha-sdk AgentConfig
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

:::info Agent Configuration Details
- The `system_prompt` defines core agent behavior
- `llm_config` specifies which language model to use under the hood
- `persona_module` is loaded as a dictionary and merged into the system prompt
- Tools/Skills are currently part of agent modules (moving to separate modules soon)
- Memory system will also become a separate module in future updates
:::

## Agent Deployments

Agent deployments allow you to specify other modules that the agent uses:

* **Tools/Skills** - Capabilities that agents can use to interact with external systems
* **Environments** - Environments that the agent interacts with
* **Knowledge Bases** - Knowledge bases that the agent can interact with
* **Memory** - Contextual storage enabling agents to maintain state and learn from interactions

They also allow you to specify the node that the agent will run on.

```python
#naptha-sdk AgentDeployment
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
- [Wikipedia Agent](https://github.com/NapthaAI/wikipedia_agent)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)