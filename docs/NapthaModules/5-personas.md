# Persona Modules

Persona modules define the character and behavior of AI agents. These modules enable more natural and specialized agent interactions by providing personality traits, communication styles, and behavioral patterns.

## Using Persona Modules on Naptha

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk).

### List Available Personas

You can explore available personas using the CLI:
```bash
naptha personas
```

Or using the Python SDK:
```python
from naptha_sdk.client.naptha import Naptha

async def list_personas():
    """List personas with new client"""
    try:
        async with Naptha() as naptha:
            await naptha.hub.signin(os.getenv("HUB_USER"), os.getenv("HUB_PASS"))
            personas = await naptha.hub.list_personas()
            return personas
    except Exception as e:
        print(f"Failed to list personas: {str(e)}")
        return None
```

### Create a New Persona

Via CLI:
```bash
naptha personas sam_altman_twitter -p "description='Persona for Sam Altman' parameters='{name: str, bio: str, openness: int}' module_url='https://huggingface.co/datasets/OpenAI/twitter_personas' module_entrypoint='data/sam.json'"
```

:::note
Make sure that the `module_url` points to the main repo (e.g., HuggingFace dataset, GitHub repo, or IPFS) and the `module_entrypoint` specifies the path to the file (JSON or YAML format).
:::

### Delete a Persona

```bash
naptha personas -d persona_name
```

### Run an Agent with a Persona

Via CLI:
```bash
# Using interstellarninja persona
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='who are you?'" --persona_modules "interstellarninja_twitter"

# Using market agent persona
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='who are you?'" --persona_modules "marketagents_aileenmay"
```



## Available Collections

Browse our curated persona collections:
- [Social personas](https://huggingface.co/datasets/NapthaAI/twitter_personas)
- [Market personas](https://huggingface.co/datasets/NapthaAI/market_agents_personas)

## Creating Your Own

Want to create your own persona? Check out our [Quick Persona Guide](../Tutorials/quick-persona-guide.md) for step-by-step instructions.

## Need Help?
- Join our [Discord Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)
