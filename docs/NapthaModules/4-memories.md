# Memory Modules

Memory modules enable agent modules on Naptha to store, retrieve, and manage their experiences over time. These modules are crucial for maintaining context and learning from past interactions.

You can create modules for different types of memories such as:

- **Cognitive Memory**: Store reflections and learned insights
- **Episodic Memory**: Record sequential experiences
- **Semantic Memory**: Store knowledge and facts

Naptha Nodes support the deployment of Memory modules. The state of these modules is stored in a local database (postgres) and file system on the Naptha Node.

## Memory Configurations

You can configure a memory module by specifying:

- **An LLM Configuration** - The language model that the memory uses to generate responses

The configuration of a memory module can be specified using the `MemoryConfig` class:

```python
#naptha_sdk/schemas.py
class MemoryConfig(BaseModel):
    config_name: Optional[str] = None
    llm_config: Optional[LLMConfig] = None
    storage_config: Optional[StorageConfig] = None
```

:::info
The storage configuration schema can be found in the [Storage Provider](/docs/NapthaStorage/0-overview.md) section.
:::

Or in the deployment.json file in the `configs` folder of the module:

```json
# MemoryConfig in deployment.json file 
[
    {
        ...
        "config": {
            "llm_config": {"config_name": "model_1"},
            "storage_config": {
                "storage_type": "db",
                "path": "cognitive_memory",
                "storage_schema": {
                    "memory_id": {"type": "INTEGER", "primary_key": true},
                    "cognitive_step": {"type": "TEXT"},
                    "content": {"type": "TEXT"},
                    "created_at": {"type": "TEXT"},
                    "metadata": {"type": "jsonb"}
                },
                "options": {
                    "query_col": "title",
                    "answer_col": "text"
                }
            }
        }
    }
]
```

## Memory Deployments

Memory deployments allow you to specify the `node` that the memory will run on, the `module` that the memory will use, and the `config` that the memory will use. The configuration of a memory deployment can be specified using the `MemoryDeployment` class:

```python
#naptha_sdk/schemas.py
class MemoryDeployment(BaseModel):
    node: Union[NodeConfig, NodeConfigUser, Dict]
    name: Optional[str] = None
    module: Optional[Dict] = None
    config: Optional[MemoryConfig] = None
```

Or in the deployment.json file in the `configs` folder of the module:

```json
# MemoryDeployment in deployment.json file 
[
    {
        "node": {"name": "node.naptha.ai"},
        "module": {"name": "wikipedia_kb"},
    }
]
```

## Deploying and Running a Memory Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### In Python

You can deploy and run memory in Python using:

```python
from naptha_sdk.modules.memory import Memory
from naptha_sdk.client.naptha import Naptha
from naptha_sdk.schemas import MemoryRunInput

naptha = Naptha()

memory_deployment = {
    "node": {"name": "node.naptha.ai"},
    "module": {"name": "wikipedia_kb"},
    ...
}

memory = Memory()

# Deploy the memory
response = await memory.create(memory_deployment)

input_params = {
    "func_name": "init",
    "func_input_data": None
}

memory_run_input = MemoryRunInput(
    consumer_id=naptha.user.id,
    inputs=input_params,
    deployment=memory_deployment,
    signature=sign_consumer_id(naptha.user.id, os.getenv("PRIVATE_KEY"))
)

# Run memory
response = await memory.call_memory_func(memory_run_input)
```

### From the CLI

You can deploy the memory (without running) using:

```bash
# usage: naptha create <memory_name>
naptha create memory:cognitive_memory 
```

Create a Memory Table:

```bash
naptha run memory:cognitive_memory -p "func_name='init'"
```

Add to Memory:

```bash
naptha run memory:cognitive_memory -p '{
    "func_name": "store_cognitive_item",
    "func_input_data": {
        "cognitive_step": "reflection",
        "content": "I am reflecting."
    }
}'
```

Query Memory:

```bash
naptha run memory:cognitive_memory -p '{
    "func_name": "get_cognitive_items",
    "func_input_data": {
        "cognitive_step": "reflection"
    }
}'
```

Delete a row in Memory:

```bash
naptha run memory:cognitive_memory -p '{
    "func_name": "delete_cognitive_items",
    "func_input_data": {
        "condition": {"cognitive_step": "reflection"}
    }
}'
```

## Examples

Check out these memory implementations:
- [Cognitive Memory](https://github.com/NapthaAI/cognitive_memory)
- [Episodic Memory](https://github.com/NapthaAI/episodic_memory)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI)
