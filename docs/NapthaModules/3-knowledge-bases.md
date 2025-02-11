# Knowledge Base Modules

Knowledge Base modules provide agents and other modules with access to structured information repositories. These modules enable agents to query, retrieve, and reason about domain-specific knowledge, making them more effective at specialized tasks.

Knowledge Base modules can be used for:

- **Domain Knowledge**: Store and query specialized information
- **Message History**: Store and retrieve conversation logs and message threads
- **Documentation**:  Reference technical or procedural information

Naptha Nodes support the deployment of Knowledge Base modules. The state of these modules is stored in a local database (postgres) and file system on the Naptha Node.

## Knowledge Base Configurations

Knowledge Base modules are configured by specifying:

* **An LLM Configuration** - The language model that the agent uses to generate responses
* **Storage Configuration** - The storage configuration that the knowledge base uses to store and retrieve data

The configuration of a knowledge base module can be specified using the `KBConfig` class:

```python
#naptha_sdk/schemas.py
class KBConfig(BaseModel):
    config_name: Optional[str] = None
    llm_config: Optional[LLMConfig] = None
    storage_config: Optional[StorageConfig] = None
```

:::info
The storage configuration schema can be found in the [Storage Provider](/docs/NapthaStorage/0-overview.md) section.
:::



Or in the deployment.json file in the `configs` folder of the module:

```json
# KnowledgeBaseConfig in deployment.json file 
[
    {
        ...
        "config": {
            "llm_config": {"config_name": "model_1"},
            "storage_config": {
                "storage_type": "db",
                "path": "wikipedia_kb",
                "options": {
                    "query_col": "title",
                    "answer_col": "text"
                },
                "storage_schema": {
                    "id": {"type": "INTEGER", "primary_key": true},
                    "url": {"type": "TEXT"},
                    "title": {"type": "TEXT"},
                    "text": {"type": "TEXT"}
                }
            }
        }
    }
]
```

## Knowledge Base Deployments

Knowledge Base deployments allow you to specify the `node` that the knowledge base will run on, and the `module` that the knowledge base will use. The configuration of a knowledge base deployment can be specified using the `KBDeployment` class:

```python
#naptha_sdk/schemas.py
class KBDeployment(BaseModel):
    node: Union[NodeConfig, NodeConfigUser, Dict]
    name: Optional[str] = None
    module: Optional[Dict] = None
    config: Optional[KBConfig] = None
```

Or in the deployment.json file in the `configs` folder of the module:

```json
# KnowledgeBaseDeployment in deployment.json file 
[
    {
        "node": {"name": "node.naptha.ai"},
        "module": {"name": "wikipedia_kb"},
    }
]
```

## Deploying and Running a Knowledge Base Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### In Python

You can deploy and run a knowledge base in Python using:

```python
from naptha_sdk.modules.kb import KnowledgeBase
from naptha_sdk.client.naptha import Naptha
from naptha_sdk.schemas import KBRunInput

naptha = Naptha()

kb_deployment = {
    "node": {"name": "node.naptha.ai"},
    "module": {"name": "wikipedia_kb"},
    ...
}

knowledge_base = KnowledgeBase()

# Deploy the knowledge base
response = await knowledge_base.create(kb_deployment)

input_params = {
    "function_name": "init",
    "function_input_data": None
}

kb_run_input = KBRunInput(
    consumer_id=naptha.user.id,
    inputs=input_params,
    deployment=kb_deployment,
    signature=sign_consumer_id(naptha.user.id, os.getenv("PRIVATE_KEY"))
)

# Run the knowledge base
response = await knowledge_base.call_kb_func(kb_run_input)
```

### From the CLI

You can deploy the knowledge base (without running) using:

```bash
# usage: naptha create <knowledge_base_name>
naptha create kb:wikipedia_kb 
```

Initialize the knowledge base:

```bash
naptha run kb:wikipedia_kb -p "function_name='init'"
```

List content in the Knowledge Base:

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "list_rows",
    "function_input_data": {
        "limit": "10"
    }
}'
```

Add to the Knowledge Base:

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "add_data",
    "function_input_data": {
        "url": "https://en.wikipedia.org/wiki/Socrates",
        "title": "Socrates",
        "text": "Socrates was a Greek philosopher from Athens who is credited as the founder of Western philosophy and as among the first moral philosophers of the ethical tradition of thought."
    }
}'
```

Query the Knowledge Base Module:

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "run_query",
    "function_input_data": {
        "query": "Elon Musk"
    }
}'
```

Delete a row from the Knowledge Base:

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "delete_row",
    "function_input_data": {
        "condition": {
            "title": "Elon Musk"
        }
    }
}'
```

Delete the entire Knowledge Base:

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "delete_table",
    "function_input_data": {
        "table_name": "wikipedia_kb"
    }
}'
```

Run an Agent that interacts with the Knowledge Base:

```bash
# usage: naptha run agent:wikipedia_agent -p "<agent args>" --kb_nodes "<node_ip_>"
naptha run agent:wikipedia_agent -p "function_name='run_query' query='Elon Musk' question='Who is Elon Musk?'" --kb_nodes "node.naptha.ai"
```

## Examples

Check out these knowledge base implementations:
- [Wikipedia Knowledge Base](https://github.com/NapthaAI/wikipedia_kb)
- [Group Chat Knowledge Base](https://github.com/NapthaAI/groupchat_kb)
- [Embedding Knowledge Base](https://github.com/NapthaAI/embedding_kb)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI) 