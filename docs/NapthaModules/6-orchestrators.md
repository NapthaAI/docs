# Orchestrator Modules

In this section, we'll cover:

- [🤖 What is an Orchestrator Module?](#-what-is-an-orchestrator-module)
- [📝 Orchestrator Configurations](#-orchestrator-configurations)
- [🐋 Orchestrator Deployments](#-orchestrator-deployments)
- [🚀 Running an Orchestrator Module](#-running-an-orchestrator-module)

## 🎮 What is an Orchestrator Module?

Agent orchestrators are modules that manage the orchestration of agents, tools, environments, and personas, as defined through interaction patterns and workflows. Examples of agent orchestrators include:

- Orchestration of numerous social agents e.g. agents that take part in debate or social simulations
- Orchestration of numerous task-solving agents e.g. agents that work together to solve a problem or write code (like BabyAGI or MetaGPT)
- Orchestration of numerous market agents e.g. agents that work together to make predictions

The code for the orchestration logic is usually contained in the `run.py` file of the orchestrator module (for a detailed breakdown of the structure of an orchestrator module, see the [overview](/NapthaModules/0-overview.md) page).

## 📝 Orchestrator Configurations

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

## 🐋 Orchestrator Deployments

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

## 🚀 Running an Orchestrator Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### Example

The [Multiagent Chat Orchestrator](https://github.com/NapthaAI/multiagent_chat) is an example of an Orchestrator module that interacts with simple chat [Agent modules](https://github.com/NapthaAI/simple_chat_agent) and a groupchat [Knowledge Base module](https://github.com/NapthaAI/groupchat_kb). The orchestrator, agents and knowledge base can all run on different nodes. You can run the orchestrator module on hosted nodes using:

The names of the Agent and KB subdeployments that the orchestrator uses are specified in the `configs/deployment.json`, and the full details of those subdeployments are loaded from the deployments with the same name in the `configs/agent_deployments.json` and `configs/kb_deployments.json` files.

```json
# OrchestratorDeployment in configs/deployment.json file 
[
    {
        "node": {"name": "node.naptha.ai"},
        "module": {"name": "multiagent_chat"},
        "config": ...,
        "agent_deployments": [
            {"name": "agent_deployment_1"},
            {"name": "agent_deployment_2"}
        ],
        "kb_deployments": [{"name": "groupchat_kb_deployment_1"}]
        ...
    }
]

# AgentDeployments in configs/agent_deployments.json file
[
    {
        "name": "agent_deployment_1",
        "module": {"name": "simple_chat_agent"},
        "node": {"ip": "node.naptha.ai"},
        "config": {
            "config_name": "agent_config_1",
            "llm_config": {"config_name": "model_1"},
            "system_prompt": ...
        }
    },
    {
        "name": "agent_deployment_2",
        "module": {"name": "simple_chat_agent"},
        "node": {"ip": "node.naptha.ai"},
        "config": {
            "config_name": "agent_config_2",
            "llm_config": {"config_name": "model_2"},
            "system_prompt": ...
        }
    }
]

# KBDeployment in configs/kb_deployments.json file
[
    {
        "name": "groupchat_kb_deployment_1",
        "module": {"name": "groupchat_kb"},
        "node": {"ip": "node.naptha.ai"},
        "config": {
            "storage_config": ...
        },
    }
]
```

There is a `MultiAgentChat` class in the `run.py` [file](https://github.com/NapthaAI/multiagent_chat/blob/main/multiagent_chat/run.py#L24C7-L24C21), which imports the `Agent` and `KnowledgeBase` classes and calls the `Agent.run` and `KnowledgeBase.run` methods:

```python
from naptha_sdk.modules.agent import Agent
from naptha_sdk.modules.kb import KnowledgeBase
from naptha_sdk.schemas import OrchestratorRunInput, OrchestratorDeployment, KBRunInput, AgentRunInput
from naptha_sdk.user import sign_consumer_id

class MultiAgentChat:
    async def create(self, deployment: OrchestratorDeployment, *args, **kwargs):
        self.deployment = deployment
        self.agent_deployments = self.deployment.agent_deployments
        self.agents = [
            Agent(),
            Agent(),
        ]
        agent_deployments = [await agent.create(deployment=self.agent_deployments[i], *args, **kwargs) for i, agent in enumerate(self.agents)]
        self.groupchat_kb = KnowledgeBase()
        kb_deployment = await self.groupchat_kb.create(deployment=self.deployment.kb_deployments[0], *args, **kwargs)

    async def run(self, module_run: OrchestratorRunInput, *args, **kwargs):
        ...
        for round_num in range(self.orchestrator_deployment.config.max_rounds):
            for agent_num, agent in enumerate(self.agents):
                    agent_run_input = AgentRunInput(
                        consumer_id=module_run.consumer_id,
                        inputs={"tool_name": "chat", "tool_input_data": messages},
                        deployment=self.agent_deployments[agent_num],
                        signature=sign_consumer_id(module_run.consumer_id, os.getenv("PRIVATE_KEY"))
                    )
                    response = await agent.run(agent_run_input)
```

:::info
Under the hood, `agent.run` makes a call to the worker node via API, which executes the agent module. This makes it possible for agents built using different agent frameworks to interoperate.
:::

You can deploy the modules for an orchestrator (without running) using:

```bash
naptha create orchestrator:multiagent_chat --agent_modules "agent:simple_chat_agent,agent:simple_chat_agent" --agent_nodes "node.naptha.ai,node1.naptha.ai" --kb_modules "kb:groupchat_kb" --kb_nodes "node.naptha.ai"
```

You can run the orchestrator module using (note that using the `--agent_nodes` and `--kb_nodes` flags overrides the values in the `deployment.json` file instead):

You can run the orchestrator module on hosted nodes using:

```bash
naptha run orchestrator:multiagent_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --agent_nodes "node.naptha.ai,node.naptha.ai" --kb_nodes "node.naptha.ai"
```

:::note
You can modify the `max_rounds` of the orchestrator run from the default value of 10 by passing in a config object in the command line: `--config '{"max_rounds": 5}'`
:::

## 🤖 Running an Orchestrator from Python

It may be useful to run an orchestrator module from Python e.g. an orchestrator module that calls another orchestrator module. The following example shows how to do this:

```python
from naptha_sdk.modules.orchestrator import Orchestrator
from naptha_sdk.client.naptha import Naptha
from naptha_sdk.schemas import AgentDeployment, KBDeployment, OrchestratorRunInput, OrchestratorDeployment, NodeConfig
from naptha_sdk.user import sign_consumer_id

naptha = Naptha()
node = NodeConfig(...)

agent_deployments = [
    AgentDeployment(module={"name": "simple_chat_agent"}, node=node),
    AgentDeployment(module={"name": "simple_chat_agent"}, node=node),
]
kb_deployment = KBDeployment(module={"name": "groupchat_kb"}, node=node)

orchestrator_deployment = OrchestratorDeployment(
    module={"name": "multiagent_chat"},
    node=node,
    kb_deployments=[kb_deployment],
    agent_deployments=agent_deployments,
)

input_params = {"prompt": "lets count up one number at a time. ill start. one."}
orchestrator_run_input = OrchestratorRunInput(
    consumer_id=naptha.user.id,
    inputs=input_params,
    deployment=orchestrator_deployment,
    signature=sign_consumer_id(naptha.user.id, os.getenv("PRIVATE_KEY"))
)

orchestrator = Orchestrator()
response = await orchestrator.run(orchestrator_run_input)
```

## Examples

Check out these sample agent orchestrator modules:
- [Multiagent Chat](https://github.com/NapthaAI/multiagent_chat)
- [BabyAGI](https://github.com/NapthaAI/babyagi)
- [Multiagent Debate](https://github.com/NapthaAI/multiagent_debate)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel 
- Submit issues on [GitHub](https://github.com/NapthaAI)

## Next Steps

import CardGrid from '@site/src/components/CardGrid';

export const featureCards = [
  {
    title: 'Create Your First Orchestrator Module',
    description: 'Use the Naptha Learn Hub to create your first orchestrator module',
    icon: '✨',
    link: 'https://naptha-ai-learn.vercel.app/learn/builder/orchestration/introduction'
  },
  {
    title: 'Run LLM Inference',
    description: 'Learn how to make LLM calls within your orchestrator module',
    icon: '🧠',
    link: 'NapthaInference/1-inference'
  },
  {
    title: 'Knowledge Base Modules',
    description: 'Learn how to use Orchestrators with Knowledge Base Modules',
    icon: '📚',
    link: 'NapthaModules/3-knowledge-bases'
  },
  {
    title: 'Environment Modules',
    description: 'Learn how to use Orchestrators with Environment Modules',
    icon: '🏢',
    link: 'NapthaModules/7-environments'
  }
];

<CardGrid cards={featureCards} />
