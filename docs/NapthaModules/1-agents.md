# Agent Modules

In this section, we'll cover:

- [🤖 What is an Agent Module?](#-what-is-an-agent-module)
- [📝 Agent Configurations](#-agent-configurations)
- [🐋 Agent Deployments](#-agent-deployments)
- [🚀 Running an Agent Module](#-running-an-agent-module)

## 🤖 What is an Agent Module?

The core of the Agent Module is the loop or logic that an agent runs. Some examples of agents that use different loops include: 

- **Chat Agents**  
  Simple conversational agents that can engage in dialogue. These agents receive a request and send a response. 
- **ReAct Agents**
  Agents that follow the Reason-Act pattern for structured problem solving. First a reasoning step is performed to determine the best action to take. Then an action is executed. 
- **Cognitive Agents**
  Agents that follow the Perceive-Act-Reflect loop, where they perceive their environment, take actions, and reflect on the outcomes to improve future decisions. This kind of loop is used by cognitive architectures like SOAR and ACT-R.

The code for this loop is usually contained in the `run.py` file of the agent module (for a detailed breakdown of the structure of an agent module, see the [overview](/NapthaModules/overview) page).

## 📝 Agent Configurations

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

## 🐋 Agent Deployments

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

## 🚀 Running an Agent Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### Example

The [Hello World Agent](https://github.com/NapthaAI/hello_world_agent) is the simplest example of an agent that prints hello. You can deploy the agent (without running) using:

```bash
# usage: naptha create <agent_name>
naptha create agent:hello_world_agent
```

Run the agent:

```bash
# usage: naptha run <agent_name> <agent args>
naptha run agent:hello_world_agent -p "firstname=sam surname=altman"
```

Try running the [Simple Chat Agent](https://github.com/NapthaAI/simple_chat_agent) that uses the local LLM running on your node:

```bash
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='what is an ai agent?'"
```

:::note
You can modify the `llm_config` of the agent run from the default value by passing in a config object in the command line: `--config '{"llm_config": {"config_name": "model_1"}}'`
:::

The configuration of an agent module is specified in the `deployment.json` file in the `configs` folder of the module.

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

:::info
For details on how to run LLM inference within modules, see the [LLM Inference](/NapthaInference/inference) page.
:::

For an example of calling an agent from Python (within an orchestrator module that uses an agent module), see the [Orchestrator Modules](/NapthaModules/orchestrators) page.

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

import CardGrid from '@site/src/components/CardGrid';

export const featureCards = [
  {
    title: 'Create Your First Module',
    description: 'Follow our tutorial to create your first agent module',
    icon: '✨',
    link: '/Tutorials/module-guide'
  },
  {
    title: 'Onboard your Agent from Other Frameworks', 
    description: 'Find out how to automatically create a Naptha module from other agent frameworks',
    icon: '🔄',
    link: '/Integrations/Decorators'
  },
  {
    title: 'Run LLM Inference',
    description: 'Learn how to make LLM calls within your agent module',
    icon: '🧠',
    link: '/NapthaInference/inference'
  },
  {
    title: 'Tool Modules',
    description: 'Learn how to use Agents with Tool Modules',
    icon: '🛠️',
    link: '/NapthaModules/tools'
  },
  {
    title: 'Knowledge Base Modules',
    description: 'Learn how to use Agents with Knowledge Base Modules',
    icon: '📚',
    link: '/NapthaModules/knowledge-bases'
  },
  {
    title: 'Memory Modules',
    description: 'Learn how to use Agents with Memory Modules',
    icon: '💭',
    link: '/NapthaModules/memories'
  },
  {
    title: 'Persona Modules',
    description: 'Learn how to use Agents with Persona Modules',
    icon: '🎭',
    link: '/NapthaModules/personas'
  },
  {
    title: 'Orchestrator Modules',
    description: 'Learn how to use Agents within Orchestrator Modules',
    icon: '🎮',
    link: '/NapthaModules/orchestrators'
  }
];

<CardGrid cards={featureCards} />
