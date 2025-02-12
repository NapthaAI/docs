# Memory Modules

In this section, we'll cover:

- [💭 What is a Memory Module?](#-what-is-a-memory-module)
- [📝 Memory Configurations](#-memory-configurations)
- [🐋 Memory Deployments](#-memory-deployments)
- [🚀 Running a Memory Module](#-running-a-memory-module)

## 💭 What is a Memory Module?

Memory modules enable agent modules on Naptha to store, retrieve, and manage their experiences over time. These modules are crucial for maintaining context and learning from past interactions.

You can create modules for different types of memories such as:

- **Cognitive Memory**: Store reflections and learned insights
- **Episodic Memory**: Record sequential experiences
- **Semantic Memory**: Store knowledge and facts

Naptha Nodes support the deployment of Memory modules. The state of these modules is stored in a local database (postgres) and file system on the Naptha Node.

## 📝 Memory Configurations

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
More details on the `StorageConfig` schema can be found in the [Storage Provider](/docs/NapthaStorage/0-overview.md) section.
:::

## 🐋 Memory Deployments

Memory deployments allow you to specify the `node` that the memory will run on, the `module` that the memory will use, and the `config` that the memory will use. The configuration of a memory deployment can be specified using the `MemoryDeployment` class:

```python
#naptha_sdk/schemas.py
class MemoryDeployment(BaseModel):
    node: Union[NodeConfig, NodeConfigUser, Dict]
    name: Optional[str] = None
    module: Optional[Dict] = None
    config: Optional[MemoryConfig] = None
```

## 🚀 Running a Memory Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### Example

The [Cognitive Memory module](https://github.com/NapthaAI/cognitive_memory) is a simple example of a Memory module. It is intended to demonstrate how agents can interact with a Memory module that allows them to store and retrieve cognitive steps such as reflections. You can create a memory table using:

The configuration of a memory module is specified in the `deployment.json` file in the `configs` folder of the module.

```json
# MemoryConfig in configs/deployment.json file 
[
    {
        ...
        "config": {
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

You can deploy the memory (without running) using:

```bash
# usage: naptha create <memory_name>
naptha create memory:cognitive_memory 
```

There is a CognitiveMemory class in the `run.py` file that has a number of methods. You can think of these methods as [endpoints of the Memory](https://github.com/NapthaAI/cognitive_memory/blob/main/cognitive_memory/run.py#L34), which will be called using the `run` command below. For example, you can initialize the table in Memory using:

```bash
naptha run memory:cognitive_memory -p "func_name='init'"
```

You can add to the memory table using:

```bash
naptha run memory:cognitive_memory -p '{
    "func_name": "store_cognitive_item",
    "func_input_data": {
        "cognitive_step": "reflection",
        "content": "I am reflecting."
    }
}'
```

You can query the memory table using:

```bash
naptha run memory:cognitive_memory -p '{
    "func_name": "get_cognitive_items",
    "func_input_data": {
        "cognitive_step": "reflection"
    }
}'
```

You can delete a row in the memory table using:

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

## Next Steps

import CardGrid from '@site/src/components/CardGrid';

export const featureCards = [
  {
    title: 'Interact with Storage Providers',
    description: 'Learn how to use storage within your memory module', 
    icon: '💾',
    link: 'NapthaStorage/0-overview'
  }
];
