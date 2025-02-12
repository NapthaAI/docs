# Tool Modules

In this section, we'll cover:

- [🔧 What is a Tool Module?](#-what-is-a-tool-module)
- [📝 Tool Configurations](#-tool-configurations)
- [🐋 Tool Deployments](#-tool-deployments)
- [🚀 Running a Tool Module](#-running-a-tool-module)
- [🤖 Running an Agent that uses a Tool](#-running-an-agent-that-uses-a-tool)

## 🔧 What is a Tool Module?

Tool modules extend agent capabilities by providing reusable functions that can be shared across different agents. Some examples of tool modules include:

- **Web Search**: Access and retrieve information from the internet
- **Database Query**: Interact with various database systems
- **File Search**: Find and process files efficiently
- **Custom Functions**: Implement specialized capabilities

![Tool Integration](/img/tool-integration.png)

## 📝 Tool Configurations

You can configure a tool module by specifying:

- **An LLM Configuration** - The language model that the tool uses to generate responses

The configuration of a tool module can be specified using the `ToolConfig` class:

```python
#naptha_sdk/schemas.py
class ToolConfig(BaseModel):
    config_name: Optional[str] = None
    llm_config: Optional[LLMConfig] = None
```

## 🚀 Tool Deployments

Tool deployments allow you to specify the `node` that the tool will run on, and the `module` that the tool will use. The configuration of a tool deployment can be specified using the `ToolDeployment` class:

```python
#naptha_sdk/schemas.py
class ToolDeployment(BaseModel):
    node: Union[NodeConfig, NodeConfigUser, Dict]
    name: Optional[str] = None
    module: Optional[Dict] = None
    config: Optional[ToolConfig] = None
    data_generation_config: Optional[DataGenerationConfig] = None
```

## 🛠️ Running a Tool Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### Example

The [Generate Image Tool](https://github.com/NapthaAI/generate_image_tool) is a simple example of a Tool module that will be used in the examples below. It is intended to demonstrate how agents can interact with a Tool module that allows them to generate images.

You can deploy the tool (without running) using:

```bash
# usage: naptha create <tool_name>
naptha create tool:generate_image_tool
```

Run the tool:

```bash
# usage: naptha run <tool_name> -p "<tool args>"
naptha run tool:generate_image_tool -p "tool_name='generate_image_tool' tool_input_data='A beautiful image of a cat'"
```

The configuration of a tool module is specified in the `deployment.json` file in the `configs` folder of the module.

```json
# ToolConfig in deployment.json file 
[
    {
        ...
        "config": {
            "config_name": "tool_config",
            "llm_config": {"config_name": "model_1"},
        }
    }
]
```

:::info
Details on how to store secrets such as API keys securely on the Naptha Hub coming soon.
:::

## 🤖 Running an Agent that uses a Tool

The [Generate Image Agent](https://github.com/NapthaAI/generate_image_agent) is an example of an Agent module that interacts with the [Generate Image Tool](https://github.com/NapthaAI/generate_image_tool). You can run the agent module using:

```bash
# usage: naptha run agent:generate_image_agent -p "<agent args>" --tool_nodes "<node_ips>"
naptha run agent:generate_image_agent -p "tool_name='generate_image_tool' tool_input_data='A beautiful image of a cat'" --tool_nodes "node.naptha.ai"
```

The name of the tool subdeployment that the agent uses is specified in the `configs/deployment.json`, and the full details of that tool subdeployment are loaded from the deployment with the same name in the `configs/tool_deployments.json` file.


To use a tool as a subdeployment for another module, you can create a tool_deployments.json file and specify use the `tool_deployments` field in the deployment.json file:

```json
# AgentDeployment in deployment.json file 
[
    {
        "node": {"name": "node.naptha.ai"},
        "module": {"name": "generate_image_agent"},
        "config": ...,
        "tool_deployments": [{"name": "tool_deployment_1"}],
        ...
    }
]

# ToolDeployment in tool_deployments.json file
[
    {
        "name": "tool_deployment_1",
        "module": {"name": "generate_image_tool"},
        "node": {"ip": "node.naptha.ai"},
        "config": {
            "config_name": "tool_config_1",
            "llm_config": {"config_name": "model_1"}
        },
    }
]
```

There is a `GenerateImageAgent` class in the `run.py` [file](https://github.com/NapthaAI/generate_image_agent/blob/main/generate_image_agent/run.py#L16), which imports the `Tool` class and calls the `Tool.run` method:

```python
from naptha_sdk.schemas import AgentDeployment, AgentRunInput, ToolRunInput
from naptha_sdk.modules.tool import Tool
from naptha_sdk.user import sign_consumer_id

class GenerateImageAgent:
    async def create(self, deployment: AgentDeployment, *args, **kwargs):
        self.deployment = deployment
        self.tool = Tool()
        tool_deployment = await self.tool.create(deployment=deployment.tool_deployments[0])
        self.system_prompt = SystemPromptSchema(role=self.deployment.config.system_prompt["role"])

    async def run(self, module_run: AgentRunInput, *args, **kwargs):
        tool_run_input = ToolRunInput(
            consumer_id=module_run.consumer_id,
            inputs=module_run.inputs,
            deployment=self.deployment.tool_deployments[0],
            signature=sign_consumer_id(module_run.consumer_id, os.getenv("PRIVATE_KEY"))
        )
        tool_response = await self.tool.run(tool_run_input)
        return tool_response.results
```

:::info
Under the hood, `Tool.run` makes a call to the worker node via API, which executes the tool module. This makes it possible for agents and tools built using different frameworks or languages to interoperate.
:::

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel 
- Submit issues on [GitHub](https://github.com/NapthaAI)

## Next Steps

import CardGrid from '@site/src/components/CardGrid';

export const featureCards = [
  {
    title: 'Create Your First Tool Module',
    description: 'Use the Naptha Learn Hub to create your first tool module',
    icon: '✨',
    link: 'https://naptha-ai-learn.vercel.app/learn/expert/tool-modules/introduction'
  },
  {
    title: 'Run LLM Inference',
    description: 'Learn how to make LLM calls within your tool module',
    icon: '🧠',
    link: 'NapthaInference/1-inference'
  }
];
