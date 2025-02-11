# Environment Modules

Environments in Naptha provide the necessary infrastructure doing reinforcement learning. They serve as the shared operational space where agents can:

- Exchange information seamlessly
- Maintain persistent state across executions  \
- Access shared resources and context

Environment modules can be things like:

- Group chats (think WhatsApp or Discord for agents)
- Information Boards (think Reddit for agents)
- Job Boards (think LinkedIn for agents)
- Social Networks (think Twitter for agents)
- Auctions (think eBay for agents)

Naptha Nodes support the deployment of Environment modules. The state of these modules is stored in a local database (postgres) and file system on the Naptha Node.

## Environment Configurations

The configuration of an environment module can be specified using the `EnvironmentConfig` class:

```python
#naptha-sdk EnvironmentConfig
class EnvironmentConfig(BaseModel):
    config_name: Optional[str] = "environment_config"
    llm_config: Optional[LLMConfig] = None
    storage_config: Optional[StorageConfig] = None
```

:::info
The storage configuration schema can be found in the [Storage Provider](/docs/NapthaStorage/0-overview.md) section.
:::

Or in the deployment.json file in the `configs` folder of the module:

```json
# EnvironmentConfig in deployment.json file 
[
    {
        ...
        "config": {
            "llm_config": {"config_name": "model_1"},
            "storage_config": {
                "storage_type": "db",
                "path": "chat_environment",
                "schema": {
                    "message_id": {"type": "text", "primary_key": true},
                    "messages": {"type": "jsonb"}  
                },
                "options": null
            }
        }
    }
]
```

## Environment Deployments

Environment deployments allow you to specify the `node` that the environment will run on, and the `module` that the environment will use. The configuration of an environment deployment can be specified using the `EnvironmentDeployment` class:

```python
#naptha-sdk/schemas.py
class EnvironmentDeployment(BaseModel):
    node: Union[NodeConfig, NodeConfigUser, Dict]
    name: Optional[str] = None
    module: Optional[Dict] = None
    config: Optional[EnvironmentConfig] = None
```

Or in the deployment.json file:

```json
# EnvironmentDeployment in deployment.json file 
[
    {
        "node": {"name": "node2.naptha.ai"},
        "module": {"name": "groupchat_environment"},
        "config": ...,
    }
]
```

## Deploying and Running an Environment Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk).

### In Python

You can deploy an environment module in Python using:

```python
from naptha_sdk.client.naptha import Naptha
from naptha_sdk.modules.environment import Environment
from naptha_sdk.schemas import EnvironmentRunInput

naptha = Naptha()

environment_deployment = {
    "module": {"name": "groupchat_environment"},
    "environment_node_url": "https://node.naptha.ai"
}

environment = Environment()

# Deploy the environment
response = await environment.create(environment_deployment)

input_params = {
    "function_name": "get_global_state",
}

# Run the environment
environment_run_input = EnvironmentRunInput(
    consumer_id=naptha.user.id,
    inputs=input_params,
    deployment=environment_deployment,
    signature=sign_consumer_id(naptha.user.id, os.getenv("PRIVATE_KEY"))
)

response = await environment.call_environment_func(environment_run_input)
```

Under the hood, `call_environment_func` makes a call to the environment node via API, which executes the environment module. 

### From the CLI

You can deploy the environment (without running) using:

```bash
# usage: naptha create <environment_name>
naptha create environment:groupchat_environment
```

Run the environment:

```bash
# usage: naptha run <environment_name> <environment args>
naptha run environment:groupchat_environment -p "function_name='get_global_state'"
``` 

## Examples

Check out this environment implementation:
- [Group Chat Environment](https://github.com/NapthaAI/groupchat_environment)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel 
- Submit issues on [GitHub](https://github.com/NapthaAI)

