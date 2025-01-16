# Memory Modules

Memory modules enable agent modules on Naptha to store, retrieve, and manage their experiences and knowledge over time. These modules are crucial for maintaining context and learning from past interactions.

Memory modules can be used for:

- **Chat History**: Store conversation threads and context
- **Task History**: Track completed actions and their outcomes
- **Cognitive Memory**: Store reflections and learned insights
- **Episodic Memory**: Record sequential experiences
- **Working Memory**: Maintain short-term context

## Managing Memory via CLI

### Prerequisites

Install the Naptha SDK using the [instructions from source](https://github.com/NapthaAI/naptha-sdk/)

### Interact with the Memory Hub

Explore available memory modules that you can use with agents:

```bash
naptha memories
```

### Register a New Memory Module on the Hub

```bash
naptha memories memory_name -p "description='Memory description' parameters='{input_parameter_1: str, input_parameter_2: int}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

### Delete a Memory Module

```bash
naptha memories -d memory_name
```

### Create a Memory Table

```bash
naptha run memory:cognitive_memory -p "func_name='init'"
```

### Add to Memory

```bash
naptha run memory:cognitive_memory -p '{
    "func_name": "store_cognitive_item",
    "func_input_data": {
        "cognitive_step": "reflection",
        "content": "I am reflecting."
    }
}'
```

### Query Memory

```bash
naptha run memory:cognitive_memory -p '{
    "func_name": "get_cognitive_items",
    "func_input_data": {
        "cognitive_step": "reflection"
    }
}'
```

### Delete a row in Memory

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

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)
