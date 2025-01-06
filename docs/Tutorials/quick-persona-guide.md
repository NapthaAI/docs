---
sidebar_label: 'Create Your First AI Persona'
---

# Create and Use Your First AI Persona on Naptha in 5 Minutes

Want to give your AI agent a unique personality? This guide shows you the fastest way to create and use a persona module on Naptha.

<details>
<summary>Using Existing Personas</summary>

The fastest way to understand how persona modules work on Naptha is to use an existing persona from our collections:

>You can run `naptha personas` to see the list of available personas you can use.

For example, to use the "interstellarninja_twitter" persona:
```bash
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='who are you?'" --persona_modules "interstellarninja_twitter"
```
</details>

## Creating Your Own Persona

### 1. Generate Character Data
The fastest way to create a persona is by converting your social media data:

1. Download your X (Twitter) data archive from [X Settings](https://twitter.com/settings/download_your_data)
   :::note
   The download request can take 24+ hours to process
   :::
   ![](/img/xarchive.png)

2. Install and run the tweets2character tool:
```bash
npx tweets2character
```

This will generate a `character.json` file using claude or openai which you can rename to your persona name.

### 2. Register Your Persona

- Next, request access and upload your `character.json` to the [Twitter personas collection ](https://huggingface.co/datasets/NapthaAI/twitter_personas) from community members.

- Once merged, register your persona like this:
```bash
naptha personas my-persona -p "description='My custom persona' parameters='{name: str, bio: str, openness: int}' module_url='https://huggingface.co/datasets/NapthaAI/twitter_personas' module_entrypoint='my-persona.json'"
```

- Try these example prompts to test your persona's behavior:

```bash
# Basic identity check
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='who are you?'" --persona_modules "your-persona"

# Topic expertise
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='can you help me with a technical problem?'" --persona_modules "your-persona"
```

You'll see an output like this:
```
running agent simple_chat_agent
completed agent simple_chat_agent
Output:  [{"role": "user", "content": "who are you?"}, {"role": "assistant", "content": "I'm interstellarninja, an AI enthusiast and developer focused on advancing open-source language models and structured output frameworks. I have a deep interest in large language models, function calling, and multi-agent systems. I actively contribute to projects in the AI community, collaborating with organizations like NousResearch and experimenting with various AI models and techniques. I'm passionate about the implications of AI technology and enjoy discussing topics related to AI, blockchain, and space exploration! How can I assist you today?"}]
```


<details>
<summary>Alternative Registration Methods</summary>

If you don't want to upload your persona to HuggingFace, you can register it directly:

- Create a Personal Module structure similar to the example here: https://huggingface.co/datasets/NapthaAI/market_agents_personas/tree/main 

- Push it to Github as an accessible public repo or on IPFS via our node storage, `naptha write_storage -i folder_name`

- Register it like this:
```bash
naptha personas my-persona -p "description='My custom persona' parameters='{name: str, bio: list, lore: list, adjectives: list}' module_url='github://YOUR_GITHUB_USERNAME/REPO_NAME or ipfs://FOLDER_ID' module_type='persona' module_version='0.1' module_entrypoint='data/character.json'"
```

</details>


## Next Steps
- Join our [Discord Community](https://naptha.ai/naptha-community) to share your personas
- Check out our [Agent Module Guide](./module-guide.md) for creating and publishing your first agent module on Naptha

:::tip
Remember to update your persona version (v0.1, v0.2, etc.) as you refine their characteristics!
:::
