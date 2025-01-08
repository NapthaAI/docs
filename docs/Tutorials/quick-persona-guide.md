---
sidebar_label: 'Create Your First AI Persona'
---

# Create and Use Your First AI Persona on Naptha in 5 Minutes

Want to give your AI agent a unique personality? This guide shows you how to quickly create and use a persona module on Naptha.

<details>
<summary>Using Existing Personas</summary>

The easiest way to understand how persona modules work on Naptha is to use an existing persona from our collections:

>Run `naptha personas` to see all available personas.

For example, to use the "interstellarninja_twitter" persona:
```bash
naptha run agent:simple_chat_agent -p "tool_name='chat' tool_input_data='who are you?'" --persona_modules "interstellarninja_twitter"
```
</details>

## Creating Your Own Persona

### 1. Generate Character Data
The fastest way to create a persona is by converting your social media data into a structured character profile:

1. Download your X (Twitter) data archive from [X Settings](https://twitter.com/settings/download_your_data)
   :::note
   The download request can take 24+ hours to process
   :::
   ![](/img/xarchive.png)

2. Install and run the tweets2character tool:
```bash
npx tweets2character
```

This will generate a `character.json` file containing your persona's traits and characteristics, generated using either Claude or OpenAI's API. You can rename this file to match your desired persona name.

### 2. Register Your Persona

- Next, follow and request to join the [Naptha organization on Hugging Face](https://huggingface.co/NapthaAI), then create a PR to upload your `character.json` to the [Twitter personas collection](https://huggingface.co/datasets/NapthaAI/twitter_personas/tree/main).

- Once your PR is merged, you can register your persona module using:
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

You can also register your persona without uploading to HuggingFace by following these steps:

1. Clone the [persona template](https://github.com/NapthaAI/persona_template)
2. Place your `character.json` file in the template's `data` folder
:::info
The template contains all the necessary files and structure for a persona module, with examples. You can also find it on [HuggingFace](https://huggingface.co/datasets/NapthaAI/persona_template/tree/main).
:::

3. Make the files accessible by either:
   - Pushing to a public GitHub repository
   - Uploading to IPFS using: `naptha write_storage -i folder_name`
   - or both

4. Register it like this:
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
