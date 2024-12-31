# Knowledge Base Modules

Knowledge Base modules provide agents with access to structured information repositories. These modules enable agents to query, retrieve, and reason about domain-specific knowledge, making them more effective at specialized tasks.

Knowledge Base modules can be used for:

- **Domain Knowledge**: Store and query specialized information
- **Historical Data**: Access and analyze past events or data
- **Documentation**:  Reference technical or procedural information
- **Training Data**: Provide examples and patterns for learning

## Prerequisites

Install the Naptha SDK using the [instructions from source](https://github.com/NapthaAI/naptha-sdk/) or [`pip install naptha-sdk`](https://pypi.org/project/naptha-sdk/)

### Managing Knowledge Bases via CLI

#### List available knowledge bases:
```bash
naptha kbs
```

#### Register a new knowledge base:
```bash
naptha kbs kb_name -p "description='Knowledge Base description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'"
```

#### Delete a Knowledge Base module:
```bash
naptha kbs -d kb_name
```

### Working with Knowledge Base Content

#### Create a new Knowledge Base module:
```bash
naptha create kb:wikipedia_kb
```

#### Initialize content:
```bash
naptha run kb:wikipedia_kb -p "mode='init'"
```

#### List content in the knowledge base:
```bash
naptha kbs wikipedia_kb -l
```

#### Add new content to the knowledge base module:
```bash
naptha kbs wikipedia_kb -a -c "url='https://en.wikipedia.org/wiki/Socrates' title='Socrates' text='Socrates was a Greek philosopher from Athens who is credited as the founder of Western philosophy and as among the first moral philosophers of the ethical tradition of thought.'"
```

### Querying Knowledge Bases

#### Query the knowledge base:
```bash
naptha run kb:wikipedia_kb -p "mode='query' query='Socrates'"
```

### Integration with Agents

#### Run an agent with knowledge base access:
<!-- ```python
from naptha_sdk.agent import Agent
from naptha_sdk.kb import KnowledgeBase

# Setup knowledge base
kb_deployment = {
    "module": {"name": "wikipedia_kb"},
    "kb_node_url": "http://localhost:7001"
}

kb = KnowledgeBase(kb_deployment)

# Setup agent with knowledge base
agent_deployment = {
    "module": {"name": "wikipedia_agent"},
    "worker_node_url": "http://localhost:7001",
    "kb_node_urls": ["http://localhost:7001"]
}

agent = Agent(agent_deployment)

# Query via agent
response = await agent.call_agent_func(
    query="Socrates",
    question="Who is Socrates?"
)
```

Or via CLI: -->
```bash
naptha run agent:wikipedia_agent -p "query='Socrates' question='Who is Socrates?'" --kb_node_urls "http://localhost:7001"
```

## Examples

Check out these knowledge base implementations:
- [Wikipedia Knowledge Base](https://github.com/NapthaAI/wikipedia_kb)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI) 