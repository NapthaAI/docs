# Knowledge Base Modules

In this section, we'll cover:

- [📚 What is a Knowledge Base Module?](#-what-is-a-knowledge-base-module)
- [📝 Knowledge Base Configurations](#-knowledge-base-configurations)
- [🐋 Knowledge Base Deployments](#-knowledge-base-deployments)
- [🚀 Running a Knowledge Base Module](#-running-a-knowledge-base-module)
- [🤖 Running an Agent that uses a Knowledge Base](#-running-an-agent-that-uses-a-knowledge-base)

## 📚 What is a Knowledge Base Module?

Knowledge Base modules provide agents and other modules with access to structured information repositories. These modules enable agents to query, retrieve, and reason about domain-specific knowledge, making them more effective at specialized tasks.

Knowledge Base modules can be used for:

- **Domain Knowledge**: Store and query specialized information
- **Message History**: Store and retrieve conversation logs and message threads
- **Documentation**:  Reference technical or procedural information

Naptha Nodes support the deployment of Knowledge Base modules. The state of these modules is stored in a local database (postgres) and file system on the Naptha Node.

## 📝 Knowledge Base Configurations

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
More details on the `StorageConfig` schema can be found in the [Storage Provider](/docs/NapthaStorage/0-overview.md) section.
:::

## 🐋 Knowledge Base Deployments

Knowledge Base deployments allow you to specify the `node` that the knowledge base will run on, and the `module` that the knowledge base will use. The configuration of a knowledge base deployment can be specified using the `KBDeployment` class:

```python
#naptha_sdk/schemas.py
class KBDeployment(BaseModel):
    node: Union[NodeConfig, NodeConfigUser, Dict]
    name: Optional[str] = None
    module: Optional[Dict] = None
    config: Optional[KBConfig] = None
```

## 🚀 Running a Knowledge Base Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### Example

The [Wikipedia Knowledge Base Module](https://github.com/NapthaAI/wikipedia_kb/tree/main) is a simple example of a Knowledge Base module. It is intended to demonstrate how agents can interact with a Knowledge Base that looks like Wikipedia. 

The configuration of a knowledge base module is specified in the `deployment.json` file in the `configs` folder of the module.

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

You can deploy the knowledge base (without running) using the CLI:

```bash
# usage: naptha create <knowledge_base_name>
naptha create kb:wikipedia_kb 
```

If you take a look at the wikipedia_kb module, you'll notice the `WikipediaKB` class in the `run.py` file has a number of methods. You can think of these methods as [endpoints of the Knowledge Base](https://github.com/NapthaAI/wikipedia_kb/blob/main/wikipedia_kb/run.py#L59), which will be called using the `run` command below. For example, you can initialize the content in the Knowledge Base using:

```bash
naptha run kb:wikipedia_kb -p "function_name='init'"
```

You can list content in the Knowledge Base using:

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "list_rows",
    "function_input_data": {
        "limit": "10"
    }
}'
```

You can add to the Knowledge Base using:

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

You can query the Knowledge Base using:

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "run_query",
    "function_input_data": {
        "query": "Elon Musk"
    }
}'
```

You can delete a row from the Knowledge Base using:

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

You can delete the entire Knowledge Base using:

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "delete_table",
    "function_input_data": {
        "table_name": "wikipedia_kb"
    }
}'
```

The Wikipedia KB also instantiates the `StorageClient` class and calls the `execute` method with `CreateStorageRequest`, `ReadStorageRequest`, `DeleteStorageRequest`, `ListStorageRequest` and `UpdateStorageRequest` objects:

```python
from naptha_sdk.schemas import KBDeployment
from naptha_sdk.storage.schemas import ReadStorageRequest
from naptha_sdk.storage.storage_client import StorageClient

class WikipediaKB:
    def __init__(self, deployment: KBDeployment):
        ...
        # the arg is loaded from configs/deployment.json
        self.storage_client = StorageClient(self.deployment.node)
        self.storage_type = self.config.storage_config.storage_type
        self.table_name = self.config.storage_config.path
        self.schema = self.config.storage_config.storage_schema

    async def run_query(self, input_data: Dict[str, Any], *args, **kwargs):
        read_storage_request = ReadStorageRequest(
            storage_type=self.storage_type,
            path=self.table_name,
            options={"condition": {"title": input_data["query"]}}
        )

        read_result = await self.storage_client.execute(read_storage_request)
```

# 🤖 Running an Agent that uses a Knowledge Base

You can run an Agent that interacts with the Knowledge Base using:


```bash
# usage: naptha run agent:wikipedia_agent -p "<agent args>" --kb_nodes "<node_ips>"
naptha run agent:wikipedia_agent -p "function_name='run_query' query='Elon Musk' question='Who is Elon Musk?'" --kb_nodes "node.naptha.ai"
```

The name of the KB subdeployment that the agent uses is specified in the `configs/deployment.json`, and the full details of that KB subdeployment are loaded from the deployment with the same name in the `configs/kb_deployments.json` file.

```json
# AgentDeployment in configs/deployment.json file 
[
    {
        "node": {"name": "node.naptha.ai"},
        "module": {"name": "wikipedia_agent"},
        "config": ...,
        "kb_deployments": [{"name": "kb_deployment_1"}],
        ...
    }
]

# KBDeployment in configs/kb_deployments.json file
[
    {
        "name": "kb_deployment_1",
        "module": {"name": "wikipedia_kb"},
        "node": {"ip": "node.naptha.ai"},
        "config": {
            "llm_config": {"config_name": "model_1"},
            "storage_config": ...
        },
    }
]
```

There is a `WikipediaAgent` class in the `run.py` [file](https://github.com/NapthaAI/wikipedia_agent/blob/main/wikipedia_agent/run.py#L15), which imports the `KnowledgeBase` class and calls the `KnowledgeBase.run` method:

```python
from naptha_sdk.modules.kb import KnowledgeBase
from naptha_sdk.schemas import AgentDeployment, AgentRunInput, KBRunInput
from naptha_sdk.user import sign_consumer_id

class WikipediaAgent:
    async def create(self, deployment: AgentDeployment, *args, **kwargs):
        self.deployment = deployment
        self.wikipedia_kb = KnowledgeBase()
        # the arg below is loaded from configs/kb_deployments.json
        kb_deployment = await self.wikipedia_kb.create(deployment=self.deployment.kb_deployments[0])
        self.system_prompt = SystemPromptSchema(role=self.deployment.config.system_prompt["role"])
        self.inference_client = InferenceClient(self.deployment.node)

    async def run(self, module_run: AgentRunInput, *args, **kwargs):
        ...
        kb_run_input = KBRunInput(
            consumer_id=module_run.consumer_id,
            inputs={"func_name": "run_query", "func_input_data": {"query": module_run.inputs.query}},
            deployment=self.deployment.kb_deployments[0],
            signature=sign_consumer_id(module_run.consumer_id, os.getenv("PRIVATE_KEY"))
        )
        page = await self.wikipedia_kb.run(kb_run_input)
        ...
```

:::info
Under the hood, `KnowledgeBase.run` makes a call to the worker node via API, which executes the knowledge base module. This makes it possible for agents and knowledge bases built using different frameworks or languages to interoperate.
:::

## Examples

Check out these knowledge base implementations:
- [Wikipedia Knowledge Base](https://github.com/NapthaAI/wikipedia_kb)
- [Group Chat Knowledge Base](https://github.com/NapthaAI/groupchat_kb)
- [Embedding Knowledge Base](https://github.com/NapthaAI/embedding_kb)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI) 

## Next Steps

import CardGrid from '@site/src/components/CardGrid';

export const featureCards = [
  {
    title: 'Create Your First Knowledge Base Module',
    description: 'Use the Naptha Learn Hub to create your first knowledge base module',
    icon: '✨',
    link: 'https://naptha-ai-learn.vercel.app/learn/expert/knowledge-base-modules/introduction'
  },
  {
    title: 'Interact with Storage Providers',
    description: 'Learn how to use storage within your knowledge base module', 
    icon: '💾',
    link: 'NapthaStorage/0-overview'
  },
  {
    title: 'Orchestrator Modules',
    description: 'Learn how to use Knowledge Base Modules within Orchestrator Modules',
    icon: '🎮',
    link: 'NapthaModules/6-orchestrator'
  }
];
