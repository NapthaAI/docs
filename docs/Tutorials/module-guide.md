---
sidebar_label: 'Your First Agent Module'
---

# A Quick Guide to Creating and Publishing Your First Agent Module on Naptha

<a href="https://colab.research.google.com/drive/1HwrR49T5c1CQDKprYPYSVHeUJCA5uf5V?usp=sharing" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

While other projects allow you to deploy agents on the cloud, Naptha allows you to create and deploy them on an entire Web built especially for agents. Here, they can interact with other agents, tools, and environments (such as group chats, auctions, and virtual worlds), running on top of a network of devices.

In this guide, we'll walk through creating and publishing your first Naptha agent module, from initial setup to deployment. Whether you're an AI researcher, developer, or enthusiast, you'll be able to contribute to the Naptha ecosystem in no time.

## What is an Agent Module?
Naptha Modules are the building blocks of multi-agent applications. They are designed to be framework-agnostic, allowing developers to implement them using different agent frameworks. Modules can run on separate devices, while still interacting with each other over the network. There are currently seven types of Modules:

- **Agent Modules** e.g. Chat Agents, Task-solving Agents, ReAct Agents, etc.
- **Tool Modules** e.g. Web Search, Python Code Execution, etc.
- **Knowledge Base Modules** e.g. Wikipedia, Google Search, etc.
- **Memory Modules** e.g. Long-term Memory, Short-term Memory, etc.
- **Persona Modules** e.g. Social Personas generated from exported Twitter data, or synthetically-generated Market Personas
- **Agent Orchestrator Modules** e.g. Organizations of Coding Agents, Social Simulations, etc.
- **Environment Modules** e.g. Group Chats (like WhatsApp for Agents), Information Board (Reddit for Agents), Auctions (eBay for Agents), etc.

:::info
For more information on modules, please refer to the [Naptha Modules](/NapthaModules/0-overview.md) section.
:::

Some popular agent modules on Naptha include:
- [simple_chat_agent](https://github.com/NapthaAI/simple_chat_agent/blob/main/simple_chat_agent/run.py)
- [generate_image](https://github.com/NapthaAI/generate_image/blob/main/generate_image/run.py)

:::info
You can also find a list of agent modules on Naptha:
- with the Naptha SDK via the CLI `naptha agents` or the Client `await naptha.hub.list_agents()`
- on [Naptha's Github homepage](https://github.com/NapthaAI)
:::


## Prerequisites
Before we dive in, make sure you have:
- Python 3.8 or higher installed
- The Naptha SDK installed (`pip install naptha-sdk`)
- Basic familiarity with Python packaging
- Poetry installed (recommended for dependency management)

## Getting Started
The journey of creating your first Naptha agent begins with our [module template](https://github.com/NapthaAI/module_template/). This template provides the essential structure and boilerplate code you need to get started quickly. To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/NapthaAI/module_template
cd module_template
```

#### Create a copy of the .env file:

```bash
cp .env.example .env
```

#### Install the dependencies:

```bash
poetry install
```

#### Making Changes to the Code

The main place to make changes to the code is in the [`run.py`](https://github.com/NapthaAI/module_template/blob/main/module_template/run.py) file. This is the default entry point that will be used when the module run is initiated. The run function can instantiate a class (e.g. an agent class) or call a function. 

#### Making Changes to the Configs

You can make changes to the configs in the ```configs``` folder. The ```deployment.json``` file is the main config file for the module. You may also have other config files for subdeployments (e.g. ```tool_deployments.json```, ```environment_deployments.json```, ```kb_deployments.json```, ```memory_deployments.json```). For example:

**MODEL**: If you would like to use a different model, you can change the ```llm_config['config_name']``` in the ```deployment.json``` file (the ```config_name``` must match the ```config_name``` in the ```llm_configs.json``` file). If using OpenAI, make sure to set the ```OPENAI_API_KEY``` environment variable.

**PERSONA**: If you would like to use a different persona, you can add ```persona_module['module_url']``` in the config dict of ```deployments.json``` file (the ```module_url``` must point to a valid Hugging Face dataset). See the [simple_chat_agent](https://github.com/NapthaAI/simple_chat_agent) module for an example of how to use a persona module with an agent.

**TOOLS**: If you would like your module to use a tool, you can add ```tool_deployments: {'name': '<tool_deployment_name>'}``` in the deployment dict of ```deployments.json``` file (the ```tool_deployment_name``` must match the ```name``` field in the ```tool_deployments.json``` file). See the [generate_image_agent](https://github.com/NapthaAI/generate_image_agent/tree/main) module for an example of how to use a tool as a subdeployment.

**ENVIRONMENT**: If you would like your module to use an environment, you can add ```environment_deployments: {'name': '<environment_deployment_name>'}``` in the deployment dict of ```deployments.json``` file (the ```environment_deployment_name``` must match the ```name``` field in the ```environment_deployments.json``` file). See the [multiagent_chat](https://github.com/NapthaAI/multiagent_chat) module for an example of how to use an environment as a subdeployment.

**KB**: If you would like your module to use a knowledge base, you can add ```kb_deployments: {'name': '<kb_deployment_name>'}``` in the deployment dict of ```deployments.json``` file (the ```kb_deployment_name``` must match the ```name``` field in the ```kb_deployments.json``` file). See the [wikipedia_agent](https://github.com/NapthaAI/wikipedia_agent/tree/main) module for an example of how to use a knowledge base as a subdeployment.

**MEMORY**: If you would like your module to use memory, you can add ```memory_deployments: {'name': '<memory_deployment_name>'}``` in the deployment dict of ```deployments.json``` file (the ```memory_deployment_name``` must match the ```name``` field in the ```memory_deployments.json``` file).

:::info
Don't forget to update your `pyproject.toml` with your agent's details:
```toml
[tool.poetry]
name = "my-first-agent"
version = "0.1.0"
description = "My first Naptha agent"
authors = ["Your Name <your.email@example.com>"]
```
:::


## 🧪 Testing the Module

After making changes to the module, testing usually involves the following steps:

1. Test the module locally without the Naptha Node
2. Publish the module on the Naptha Hub
3. Test running the module on a hosted Naptha Node

### 🖥️ Test the Module Locally without Node

You can run the module using:

```bash
poetry run python <module_name>/run.py
```

Now you can iterate on the module and commit your changes.

### 🌐 Publish the Module on the Naptha Hub

For this step, you will need to:

* Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk). To use the SDK with your local node and hub, set ```NODE_URL=http://localhost:7001``` and ```HUB_URL=wss://hub.naptha.ai/rpc``` in the .env file for the NapthaAI/naptha-sdk repository.

First, you need to push the module code to your GitHub or IPFS (or both). If using GitHub, make sure to change the remote origin. Also add a new module version number using e.g.:

```bash
git tag v0.1
```

To store on GitHub, you can use:

```bash
git push --tags
```

Before registering on the Naptha Hub, make sure the module field in your deployment.json file has a ```name```, ```description```, ```parameters```, ```module_type```, ```module_version```, ```module_entrypoint```, and ```execution_type``` fields:

 ```
 [
    {
      ...
        "module": {
            "name": "module_template",
            "description": "Module Template",
            "parameters": "{tool_name: str, tool_input_data: str}",
            "module_type": "agent",
            "module_version": "v0.1",
            "module_entrypoint": "run.py",
            "execution_type": "package"
        },
      ...
    }
 ]
 ```

You can register the module from a GitHub url by adding your specific repo url with the ```-r``` flag:

```bash
naptha publish -r https://github.com/NapthaAI/module_template
```

Alternatively, you can store the module on IPFS and register on the Naptha Hub by running:

```bash
naptha publish -r
```

If successful, you will see an output with the IPFS hash, and a link where you can test download via the browser ```http://provider.akash.pro:30584/ipfs/<ipfs_hash>```.

If your module makes use of other modules (e.g. your agent module uses a tool module or memory module), you may also want to publish those sub-modules using:

```bash
naptha publish -r -s
```

Make sure to add a list of dicts with a ```name``` field to one or more of the ```agent_deployments```, ```tool_deployments```, ```environment_deployments```, ```kb_deployments```, or ```memory_deployments``` fields in your deployment.json file:

 ```
 [
    {
      ...
        "agent_deployments": [{"name": "agent_deployment_1"}],
        "tool_deployments": [{"name": "tool_deployment_1"}],
        "environment_deployments": [{"name": "environment_deployment_1"}],
        "kb_deployments": [{"name": "kb_deployment_1"}],
        "memory_deployments": [{"name": "memory_deployment_1"}],
      ...
    }
 ]
 ```

And also add corresponding ```agent_deployments.json```, ```tool_deployments.json```, ```environment_deployments.json```, ```kb_deployments.json```, or ```memory_deployments.json``` files to the ```configs``` folder for each subdeployment. In each file, there should be a module field with a ```name```, ```description```, ```parameters```, ```module_type```, ```module_version```, ```module_entrypoint```, and ```execution_type``` fields:

 ```
 [
    {
      ...
        "module": {
            "name": "subdeployment_module",
            "description": "Subdeployment Module",
            "parameters": "{tool_name: str, tool_input_data: str}",
            "module_type": "tool",
            "module_version": "v0.1",
            "module_entrypoint": "run.py",
            "execution_type": "package"
        },
      ...
    }
 ]
 ```

You can confirm that the modules were registered on the Hub by running:

```bash
naptha agents
```

Or the equivalent command for the module type you are using (e.g. ```naptha tools```, ```naptha orchestrators```, ```naptha environments```, ```naptha kbs```, ```naptha memories```, ```naptha personas```).

### ☁️ Test the Module on a hosted Node (with the hosted Naptha Hub)

Once the module is published, you can run it on a hosted Naptha Node using the Naptha SDK (to use the hosted node you should set NODE_URL=http://node.naptha.ai in the .env file):

```bash
naptha run agent:module_template -p "func_name='func', func_input_data='gm...'" 
```

Inspect the outputs to see if the module ran successfully. We aim to provide useful error outputs to help developers to debug issues with their module using the hosted node. However, you may get error outputs that are not explanatory. If this is the case, please reach out in the #support channel of our discord or via email (team@naptha.ai). 

## Best Practices
- Documentation: Include clear documentation in your README.md
- Version Control: Use semantic versioning for releases
- Dependencies: Keep dependencies minimal and well-defined

## Next Steps
Congratulations! You've created and published your first Naptha agent module. Remember to version your agent appropriately when making updates!
- Join our [Discord Community](https://naptha.ai/naptha-community)
- Follow us on [Twitter](https://twitter.com/NapthaAI)
- Star us on [GitHub](https://github.com/NapthaAI)
- Get help with bug reports, feature requests, and technical discussions - [GitHub Issues](https://github.com/NapthaAI/naptha-sdk/issues)
