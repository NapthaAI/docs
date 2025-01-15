# Knowledge Base Modules

Knowledge Base modules provide agents with access to structured information repositories. These modules enable agents to query, retrieve, and reason about domain-specific knowledge, making them more effective at specialized tasks.

Knowledge Base modules can be used for:

- **Domain Knowledge**: Store and query specialized information
- **Historical Data**: Access and analyze past events or data
- **Documentation**:  Reference technical or procedural information
- **Training Data**: Provide examples and patterns for learning

## Managing Knowledge Bases via CLI

### Prerequisites

Install the Naptha SDK using the [instructions from source](https://github.com/NapthaAI/naptha-sdk/)


### Interact with the Knowledge Base Hub

You can also use the CLI to explore available knowledge bases that you can use with agents:

```bash
naptha kbs
```

### Register a New Knowledge Base Module on the Hub

```bash
naptha kbs kb_name -p "description='Knowledge Base description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

### Delete a Knowledge Base Module

```bash
naptha kbs -d kb_name
```

### Create a New Knowledge Base on a Node

```bash
naptha create kb:wikipedia_kb 
```

### Initialize the content in the Knowledge Base

```bash
naptha run kb:wikipedia_kb -p "function_name='init'"
```

### List content in the Knowledge Base

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "list_rows",
    "function_input_data": {
        "limit": "10"
    }
}'
```

### Add to the Knowledge Base

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

### Query the Knowledge Base Module

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "run_query",
    "function_input_data": {
        "query": "Elon Musk"
    }
}'
```

### Delete a row from the Knowledge Base

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

### Delete the entire Knowledge Base

```bash
naptha run kb:wikipedia_kb -p '{
    "function_name": "delete_table",
    "function_input_data": {
        "table_name": "wikipedia_kb"
    }
}'
```

### Run an Agent that interacts with the Knowledge Base

```bash
naptha run agent:wikipedia_agent -p "function_name='run_query' query='Elon Musk' question='Who is Elon Musk?'" --kb_nodes "localhost"
```

## Examples

Check out these knowledge base implementations:
- [Wikipedia Knowledge Base](https://github.com/NapthaAI/wikipedia_kb)
- [Group Chat Between Agents Knowledge Base](https://github.com/NapthaAI/groupchat_kb)
- [Embedding Knowledge Base](https://github.com/NapthaAI/embedding_kb)

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI) 