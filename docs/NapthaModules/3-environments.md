# Environment Modules

Environments in Naptha provide the necessary infrastructure doing reinforcement learning. They serve as the shared operational space where agents can:

- Exchange information seamlessly
- Maintain persistent state across executions  
- Access shared resources and context
- Coordinate complex workflows

Environment modules are things like:

- Group chats (think WhatsApp or Discord for agents)
- Information Boards (think Reddit for agents)
- Job Boards (think LinkedIn for agents)
- Social Networks (think Twitter for agents)
- Auctions (think eBay for agents)

Naptha Nodes support the deployment of Environment modules. The state of these modules is stored in a local database (postgres) and file system on the Naptha Node.

## Environment Configurations

```python
#naptha-sdk EnvironmentConfig
class EnvironmentConfig(BaseModel):
    config_name: Optional[str] = "environment_config"
    llm_config: Optional[LLMConfig] = None
    environment_type: Optional[str] = None
    storage_config: Optional[StorageConfig] = None
```

Or in the deployment.json file in the `configs` folder of the module:

```json
# EnvironmentConfig in deployment.json file 
[
    {
        ...
        "config": {
            "config_name": "groupchat",
            "environment_type": "groupchat",
            "max_rounds": 5,
            "initial_topic": "Initial Market Discussion",
            "sub_rounds": 3,
    "group_size": 5
        }
    }
]
``` 

<!-- ## Deploying an Environment Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk).

### In Python

You can deploy an environment module in Python using:

```python
from naptha_sdk.environment import Environment

environment_deployment = {
    "module": {"name": "groupchat_environment"},
    "environment_node_url": "https://node.naptha.ai"
}

environment = Environment(environment_deployment)

response = await environment.call_environment_func(
    function_name="get_global_state"
)
```

Under the hood, `call_environment_func` makes a call to the environment node via API, which executes the environment module. 
-->
### From the CLI

#### Interact with the Environment Hub

You can also use the CLI to explore available environments that you can use with orchestrators:

```bash
naptha environments
```


You can run environment modules via CLI using:

```bash
# Format: naptha run environment:<env_type> -p "<param_name>=<value>"
naptha run environment:groupchat_environment -p "function_name='get_global_state'"
``` 

## Examples

Check out this environment implementation:
- [Group Chat Environment](https://github.com/NapthaAI/groupchat_environment)

## Need Help?
- Join our [Discord](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)