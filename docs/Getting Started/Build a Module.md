# Build a Module

You can check out other examples of task and flow modules (and request to join the organization!) at https://huggingface.co/NapthaAI. 

## Clone and Install the Module

Clone the [base template](https://huggingface.co/NapthaAI/template) for creating task and flow modules, 

```bash
git clone https://huggingface.co/NapthaAI/template
cd template
```

You can install the module using:

```bash
poetry install
```

Don't forget to change the name of the module.

## Prototyping the Module

Before deploying to a Naptha node, you should iterate on improvements with the module locally. You can run the module using:

```bash
poetry run python <module_name>/run.py
```

When ready, let's push to your own HuggingFace or the Naptha org. Add a version number using:

```bash
git tag v0.1
```

You'll need to [generate an SSH key](https://huggingface.co/docs/hub/security-git-ssh) on HF and add it to your account. Then you'll be able to update your Git repository using:

```bash
git remote set-url origin git@hf.co:NapthaAI/<module_name>
```

More details in the HF [docs](https://huggingface.co/blog/password-git-deprecation#switching-to-ssh-keys)

```bash
git push --tags
```

## Inspiration

* Multiplayer Coding & Collaboration apps that have hundreds of specialized agents running across many nodes (with humans in the loop) collaborating on software development and other tasks. Frameworks like MetaGPT [13] have shown that using systems of multiple specialized agents such as Engineer, Architect, Product Manager, Architect etc. improves performance, but we’ve always tested with all of the agents running on one node. Currently, some AI devs are using AI agents locally for coding, but there’s no way for them to collaborate across the Web with other human-AI pairs.
* Simulation Frameworks based on the Stanford generative agents paper that simulate millions or billions of agents using the idle compute on laptops and phones for the price of electricity? Follow on papers have used LLM agent
simulations for economic behavior, market research, predicting Twitter engagement, predicting public opinion, and simulating how historical wars might have played out.
* Synthetic Data Generation Frameworks for using LLMs to curate, process and generate new datasets.