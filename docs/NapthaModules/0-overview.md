# What are Naptha Modules?

Naptha Modules are the building blocks of Naptha multi-agent applications. They provide a standardized container & interface for different agent frameworks, allowing them to coexist and interact within a larger multi-agent system. Naptha Modules are designed to be framework-agnostic, allowing developers to implement them using different agent frameworks. As shown in the diagram below, modules can run on separate devices, while still interacting with each other via API.

![](/img/nodes.png)

There are currently seven types of modules:

```python
# node/schemas.py
class ModuleType(str, Enum):
    agent = "agent"
    tool = "tool"
    environment = "environment"
    kb = "kb"
    memory = "memory"
    orchestrator = "orchestrator"
    persona = "persona"
```

Modules are executed within Poetry virtual environments or Docker containers on Naptha Nodes.

```python
# node/schemas.py
class ModuleExecutionType(str, Enum):
    package = "package"
    docker = "docker"
```

Modules are stored on GitHub, HuggingFace, IPFS, or DockerHub with the module URL and other metadata registered on the Naptha Hub.

```python
# node/schemas.py
class Module(BaseModel):
    id: str
    name: str
    description: str
    author: str
    module_url: str
    module_type: Optional[ModuleType] = ModuleType.agent
    module_version: Optional[str] = "v0.1"
    module_entrypoint: Optional[str] = "run.py"
    execution_type: Optional[ModuleExecutionType] = ModuleExecutionType.package
```

## Structure of a Module

If you're familiar with Kubeflow Pipelines, modules are a bit like Components. Modules are based on Poetry Python packages, with some additions like schemas, configs, and an entrypoint. The [Naptha Module template](https://github.com/NapthaAI/module_template) provides the basic structure for creating new modules. A typical module has the following structure:

```
my_module/
├── my_module/
│   ├── __init__.py
│   ├── configs/                        # contains the module's configuration files
│   │   ├── agent_deployments.json
│   │   ├── deployment.json
│   │   ├── kb_deployments.json
│   │   ├── llm_configs.json
│   │   └── tool_deployments.json
│   ├── run.py                          # the main code for the module        
│   └── schemas.py                      # the module's schemas
├── tests/
│   └── __init__.py
├── pyproject.toml                      # the module's dependencies
├── poetry.lock
├── README.md
├── LICENSE
├── .env                                # sensitive variables (like API keys) used by the module
├── .gitignore
└── Dockerfile
```

:::info
You can make changes to the configs in the `configs` folder. The `deployment.json` file is the main config file for the module. You may also have other config files for subdeployments such as `agent_deployments.json`, `tool_deployments.json`, `kb_deployments.json`, `memory_deployments.json`, and `environment_deployments.json`.
:::


## Explore Examples

You can also browse our [GitHub repositories](https://github.com/orgs/NapthaAI/repositories) for real-world examples e.g. The [simple chat agent module](https://github.com/NapthaAI/simple_chat_agent) for running simple chat with LLMs.

To see a full list of modules currently registered on the Naptha Hub, install the [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) and use these CLI commands:

```bash
naptha agents         # explore available agent modules
naptha tools          # explore available tool modules
naptha orchestrators  # explore available orchestrator modules
naptha kbs            # explore available knowledge base modules
naptha memories       # explore available memory modules
naptha environments   # explore available environment modules
naptha personas       # explore available personas to use with your agents
```

## Running a Module

You can run modules locally, or deploy to a Naptha Node using `naptha run` commands from the [Naptha SDK](https://github.com/NapthaAI/naptha-sdk). 


## Need Help?

- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI)

## Interested in Contributing?

- Check out our guide for [contributing to module development](https://docs.naptha.ai/Contributing/module-contributor)

## Next Steps

- Check out the tutorial for creating your first Naptha module: [Creating Your First Naptha Module](/docs/Tutorials/module-guide)
- Check out our integrations section for automatically converting agent from other frameworks to Naptha modules: [Integrations](/docs/Integrations)