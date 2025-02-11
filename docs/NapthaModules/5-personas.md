# Persona Modules

In this section, we'll cover:

- [🎭 What is a Persona Module?](#-what-is-a-persona-module)
- [📝 Persona Configurations](#-persona-configurations)
- [🤖 Running an Agent that uses a Persona](#-running-an-agent-that-uses-a-persona)

## 🎭 What is a Persona Module?

Persona modules define the character and behavior of AI agents. These modules enable more natural and specialized agent interactions by providing personality traits, communication styles, and behavioral patterns.

## 📝 Persona Configurations

The persona module is specified in the `AgentConfig` class:

```python
#naptha_sdk/schemas.py
class AgentConfig(BaseModel):
    config_name: Optional[str] = "agent_config"
    llm_config: Optional[LLMConfig] = None
    persona_module: Optional[Union[Dict, BaseModel]] = None
    system_prompt: Optional[Union[Dict, BaseModel]] = None
```

Or in the deployment.json file in the `configs` folder of the agent module:

```json
# AgentConfig in deployment.json file 
[
    {
        ...
        "config": {
            "config_name": "agent_config",
            "llm_config": {"config_name": "model_1"},
            "persona_module" : {"name": "richard_twitter"},
            "system_prompt": {
                "role": "You are a helpful AI assistant.",
                "persona": ""
            }
        }
    }
]
```

:::info
The `name` of the `persona_module` should exactly match the name of the persona module in the `personas` registry on the Naptha Hub. The rest of the metadata will be loaded from the Hub. The data will be loaded into the `persona` field of the `system_prompt` dict.
:::

## 🤖 Running an Agent that uses a Persona

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk).

### Examples

Below are examples of running the Simple Chat Agent with a [twitter/X persona](https://huggingface.co/datasets/NapthaAI/twitter_personas/blob/main/interstellarninja.json), generated from exported X data:

```bash
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='who are you?'" --persona_modules "interstellarninja_twitter"
```

and from a synthetically generated [market persona](https://huggingface.co/datasets/NapthaAI/market_agents_personas/blob/main/market_agents_personas/data/Aileen_May.yaml) based on census data:

```bash
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='who are you?'" --persona_modules "marketagents_aileenmay"
```

## Need Help?
- Join our [Discord Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI)

## Next Steps

import CardGrid from '@site/src/components/CardGrid';

export const featureCards = [
  {
    title: 'Create a Persona',
    description: 'Learn how to create a persona from your X data',
    icon: '🧠',
    link: 'Tutorials/quick-persona-guide'
  },
  {
    title: 'Browse Persona Datasets on Hugging Face',
    description: 'Browse our persona datasets in the Naptha Organization on Hugging Face',
    icon: '🤖',
    link: 'https://huggingface.co/datasets/NapthaAI/twitter_personas'
  },
  {
    title: 'Synthetic Demographics',
    description: 'Browse a synthetic demographics dataset created in our community',
    icon: '🤖',
    link: 'https://huggingface.co/datasets/sacrificialpancakes/synthetic_demographics_seed'
  }
];

<CardGrid cards={featureCards} />
