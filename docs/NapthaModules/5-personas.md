# Persona Modules

Persona modules are things like:

- [Social personas](https://huggingface.co/datasets/NapthaAI/social_agents_personas) 
- [Market personas](https://huggingface.co/datasets/NapthaAI/market_agents_personas) 

Personas can be synthetically generated or generated from real personal data, such as that exported from social or finance apps.

## Generate a Persona from your X Data

First, download an archive of your X data [here](https://help.x.com/en/managing-your-account/how-to-download-your-x-archive).

Then, run tweets2character directly from your command line:

npx tweets2character
NOTE: You need an API key to use Claude or OpenAI.

If everything is correct, you'll see a loading bar as the script processes your data and generates a character file.

It will be output as character.json in the directory where you run npx tweets2character.

Finally, submit a pull request to add your persona to this dataset on HuggingFace.



You can follow and request to join the Naptha organization on Hugging Face [here](https://huggingface.co/NapthaAI) (this could take 24 hours or more)


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

