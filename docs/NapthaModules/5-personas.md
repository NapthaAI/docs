# Persona Modules

Persona modules define the character and behavior of AI agents. These modules have gained significant traction with the rise of AI agents, enabling more natural and specialized agent interactions.

Available collections on HuggingFace:
- [Social personas](https://huggingface.co/datasets/NapthaAI/twitter_personas) 
- [Market personas](https://huggingface.co/datasets/NapthaAI/market_agents_personas) 

Personas can be either synthetically generated using LLMs for specific use cases, or generated from real personal data (like social media and finance app exports) to preserve authentic behaviors.

## Generate a Persona from your X Data

1. Download an archive of your X data [here](https://twitter.com/settings/download_your_data).

2. Run tweets2character directly from your command line:
```bash
npx tweets2character
```
:::note
You need an API key to use Claude or OpenAI.
:::

3. If everything is correct, you'll see a loading bar as the script processes your data and generates a character file.
:::info
It will be output as `character.json` in the directory where you run `npx tweets2character`.
:::

4. Finally, submit a pull request to add your persona to this dataset on HuggingFace.

5. You can follow and request to join the Naptha organization on Hugging Face [here](https://huggingface.co/NapthaAI) (this could take 24 hours or more)

```bash
unzip twitter-2024-08-19-7604d23503c4857295c24edc2a13ec3d6d972639076041cc58eedefa8b439e62.zip twitter-2024-08-19-7604d23503c4857295c24edc2a13ec3d6d972639076041cc58eedefa8b439e62
```
```bash
naptha write_storage -i /Users/arshath/play/tweets_to_character/twitter-2024-11-14-ebb9578b384ebab9a263b7621eb86794462f7f5fa47d51d2e33a7607ed0d8f70
```
```bash
# usage: naptha run <agent_name> <agent args>
naptha run agent:tweets_to_character -p "input_dir=twitter-2024-08-19-7604d23503c4857295c24edc2a13ec3d6d972639076041cc58eedefa8b439e62"
```

## Need Help?
- Join our [Discord](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)
