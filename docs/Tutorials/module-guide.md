---
sidebar_label: 'Your First Agent Module'
---

# A Quick Guide to Creating and Publishing Your First Agent Module on Naptha

<a href="https://colab.research.google.com/drive/1HwrR49T5c1CQDKprYPYSVHeUJCA5uf5V?usp=sharing" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

While other projects allow you to deploy agents on the cloud, Naptha allows you to create and deploy them on an entire Web built especially for agents. Here, they can interact with other agents, tools, and environments (such as group chats, auctions, and virtual worlds), running on top of a decentralized network of devices.

In this guide, we'll walk through creating and publishing your first Naptha agent module, from initial setup to deployment. Whether you're an AI researcher, developer, or enthusiast, you'll be able to contribute to the Naptha ecosystem in no time.

## What is an Agent Module?
Naptha Modules are the building blocks of multi-agent applications on, which enable them to run across multiple nodes. There are currently five types of Modules:

- **Agent Modules** e.g. Chat Agents, Task-solving Agents, ReAct Agents, etc.
- **Agent Orchestrator Modules** e.g. Organizations of Coding Agents, Social Simulations, etc.
- **Environment Modules** e.g. Group Chats (like WhatsApp for Agents), Information Board (Reddit for Agents), Auctions (eBay for Agents), etc.
- **Tool Modules** e.g. Web Search, Python Code Execution, etc.
- **Persona Modules** e.g. Social Personas generated from exported Twitter data, or synthetically-generated Market Personas

Modules are stored on GitHub, HuggingFace, IPFS, or DockerHub with the URL registered on the Naptha Hub.

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

## Building Your Agent - Making Changes to the Code
The core agent's module functionality lives in the main [`run.py`](https://github.com/NapthaAI/module_template/blob/main/module_template/run.py) file.

Some popular agent modules on Naptha include:
- [simple_chat_agent](https://github.com/NapthaAI/simple_chat_agent/blob/main/simple_chat_agent/run.py)
- [image2image](https://github.com/NapthaAI/image2image/blob/main/image_to_image/run.py)
- [generate_image](https://github.com/NapthaAI/generate_image/blob/main/generate_image/run.py)

:::info
You can also find a list of agent modules on Naptha:
- with the Naptha SDK via the CLI `naptha agents` or the Client `await naptha.hub.list_agents()`
- on [Naptha's Github homepage](https://github.com/NapthaAI)
:::


For example, here's that of the simple_chat_agent:

```python
#!/usr/bin/env python
from dotenv import load_dotenv
import json
from litellm import completion
from naptha_sdk.schemas import AgentDeployment, AgentRunInput
import os
from simple_chat_agent.schemas import InputSchema, SystemPromptSchema
from simple_chat_agent.utils import get_logger

load_dotenv()

logger = get_logger(__name__)

class SimpleChatAgent:

    def __init__(self, agent_deployment: AgentDeployment):
        self.agent_deployment = agent_deployment
        self.system_prompt = SystemPromptSchema(role=agent_deployment.agent_config.system_prompt["role"], persona=agent_deployment.agent_config.persona_module["data"])

    def chat(self, inputs: InputSchema):
        if isinstance(inputs.tool_input_data, list):
            messages = [msg for msg in inputs.tool_input_data if msg["role"] != "system"]
        elif isinstance(inputs.tool_input_data, str):
            messages = [{"role": "user", "content": inputs.tool_input_data}]
        messages.insert(0, {"role": "system", "content": json.dumps(self.agent_deployment.agent_config.system_prompt)})

        api_key = None if self.agent_deployment.agent_config.llm_config.client == "ollama" else ("EMPTY" if self.agent_deployment.agent_config.llm_config.client == "vllm" else os.getenv("OPENAI_API_KEY"))

        response = completion(
            model=self.agent_deployment.agent_config.llm_config.model,
            messages=messages,
            temperature=self.agent_deployment.agent_config.llm_config.temperature,
            max_tokens=self.agent_deployment.agent_config.llm_config.max_tokens,
            api_base=self.agent_deployment.agent_config.llm_config.api_base,
            api_key=api_key
        )

        response = response.choices[0].message.content
        logger.info(f"Response: {response}")

        messages.append({"role": "assistant", "content": response})

        return messages

def run(agent_run: AgentRunInput, *args, **kwargs):
    logger.info(f"Running with inputs {agent_run.inputs.tool_input_data}")

    simple_chat_agent = SimpleChatAgent(agent_run.agent_deployment)

    method = getattr(simple_chat_agent, agent_run.inputs.tool_name, None)

    return method(agent_run.inputs)


if __name__ == "__main__":
    from naptha_sdk.client.naptha import Naptha
    from naptha_sdk.configs import load_agent_deployments

    naptha = Naptha()

    # Configs
    agent_deployments = load_agent_deployments("simple_chat_agent/configs/agent_deployments.json")

    input_params = InputSchema(
        tool_name="chat",
        tool_input_data=[{"role": "user", "content": "tell me a joke"}],
    )

    agent_run = AgentRunInput(
        inputs=input_params,
        agent_deployment=agent_deployments[0],
        consumer_id=naptha.user.id,
    )

    response = run(agent_run)
```

Don't forget to update your `pyproject.toml` with your agent's details:
```toml
[tool.poetry]
name = "my-first-agent"
version = "0.1.0"
description = "My first Naptha agent"
authors = ["Your Name <your.email@example.com>"]
```

## Testing
To test your code locally, run:

```bash
poetry run python my-first-agent/run.py
```

If you're interested in testing your agent module on a local node, please follow the instructions [here](https://github.com/NapthaAI/node?tab=readme-ov-file)

## Packaging Your Agent
Once your agent is ready, it's time to package it with Poetry by running:

```bash
poetry build
```

This creates distribution files in your `dist` directory.

## Publishing to Naptha Hub
Publishing involves two key steps:

:::tip
    Add versioning before pushing to either Github or IPFS or Both.
```bash
# Add version tag
git tag v0.1.0
git push --tags
```
:::

### 1. Upload to IPFS 
```bash
naptha write_storage -i dist/my-first-agent-0.1.0.tar.gz --ipfs
```
You'll receive an IPFS `Folder ID` upon success like:

```
Writing storage
{'message': 'Files written to storage', 'folder_id': '********************************'}
```
:::info  

Save the returned IPFS `Folder ID` - you'll need it for registration.

:::

:::note

If you would like to use `Github` instead, replace the `module_url` value in the *register agent* command with your repository url. Remember to: 
- git add and commit your files
- create a new repository on Github and push your code. 

:::

### 2. Register Your Agent
```bash
naptha agents my-first-agent -p "description='My first Naptha agent' parameters='{tool_name: str, tool_input_data: str}' module_url='ipfs://YOUR_FOLDER_ID'"
```

## Verifying Your Publication
To ensure your agent is properly registered, run:

```bash
naptha agents
```

Look for your agent in the listing. 

Voila! Others can now use your agent like depending on the input schema you defined. For example:

```bash
naptha run agent:my-first-agent -p "input_data='Hello, Naptha!'"
```

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