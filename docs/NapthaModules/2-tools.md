# Tool Modules

Tool modules extend agent capabilities by providing reusable functions that can be shared across different agents. Some examples of tool modules include:

- **Web Search**: Access and retrieve information from the internet
- **Database Query**: Interact with various database systems
- **File Search**: Find and process files efficiently
- **Custom Functions**: Implement specialized capabilities

![Tool Integration](/img/tool-integration.png)

## Tool Configurations

You can configure a tool module by specifying:

- **An LLM Configuration** - The language model that the tool uses to generate responses

The configuration of a tool module can be specified using the `ToolConfig` class:

```python
#naptha_sdk/schemas.py
class ToolConfig(BaseModel):
    config_name: Optional[str] = None
    llm_config: Optional[LLMConfig] = None
```

Or in the deployment.json file in the `configs` folder of the module:

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

## Tool Deployments

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

Or in the deployment.json file:

```json
# ToolDeployment in deployment.json file 
[
    {
        "node": {"name": "node.naptha.ai"},
        "module": {"name": "generate_image_tool"},
        "config": ...,
    }
]
```

## Deploying and Running a Tool Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### In Python

You can deploy and call a tool in Python using:

```python
from naptha_sdk.client.naptha import Naptha
from naptha_sdk.modules.tool import Tool
from naptha_sdk.schemas import ToolRunInput

naptha = Naptha()

tool_deployment = {
    "node": {"name": "node.naptha.ai"},
    "module": {"name": "generate_image_tool"},
    ...
}

tool = Tool()

# Deploy the tool
response = await tool.create(tool_deployment)

input_params = {
    "tool_name": "generate_image_tool",
    "tool_input_data": "generate an image of a cat",
}

tool_run_input = ToolRunInput(
    consumer_id=naptha.user.id,
    inputs=input_params,
    deployment=tool_deployment,
    signature=sign_consumer_id(naptha.user.id, os.getenv("PRIVATE_KEY"))
)

# Run the tool
response = await tool.call_tool_func(tool_run_input)
```

### From the CLI

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

Run an Agent that interacts with the Tool:

```bash
# usage: naptha run agent:generate_image_agent -p "<agent args>" --tool_nodes "<node_ip>"
naptha run agent:generate_image_agent -p "tool_name='generate_image_tool' tool_input_data='A beautiful image of a cat'" --tool_nodes "node.naptha.ai"
```

## Examples

Check out these sample tool modules:
- [Generate Image Tool](https://github.com/NapthaAI/generate_image_tool)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel 
- Submit issues on [GitHub](https://github.com/NapthaAI)

