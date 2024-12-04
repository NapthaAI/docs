# What are Naptha Modules?

Naptha Modules are the building blocks of Naptha multi-agent applications, which enable them to run across multiple nodes. There are currently five types of modules:

- Agent modules  
- Agent orchestrator modules
- Environment modules
- Tool modules
- Persona modules

Modules are stored on GitHub, HuggingFace, IPFS, or DockerHub with the URL registered on the Naptha Hub.

![](/img/nodes.png)

As shown in the diagram above, modules can be:
- Deployed across different nodes
- Combined on single nodes for efficiency
- Scaled horizontally as needed



## Running a Module

You can run modules locally, or deploy to a Naptha Node using `naptha run` commands from the [Naptha SDK](https://github.com/NapthaAI/naptha-sdk). Modules are executed within Poetry virtual environments or Docker containers on Naptha Nodes.


## Structure of a Module

If you're familiar with Kubeflow Pipelines, modules are a bit like Components. Modules are based on Poetry Python packages, with some additions like schemas, configs, and an entrypoint. A typical module has the following structure:

```
my_module/
├── my_module/
│   ├── __init__.py
│   ├── configs/
│   │   ├── agent_deployments.json
│   │   ├── environment_deployments.json
│   │   ├── llm_configs.json
│   │   └── orchestrator_configs.json
│   ├── run.py
│   └── schemas.py
├── tests/
│   └── __init__.py
├── pyproject.toml
├── poetry.lock
├── README.md
├── LICENSE
├── .env
├── .gitignore
└── Dockerfile
```


The [Naptha Module template](https://github.com/NapthaAI/module_template) provides the basic structure for creating new:
- Agent modules
- Agent orchestrator modules
- Environment modules
- Tool modules

### Explore Examples
You can also browse our [GitHub repositories](https://github.com/orgs/NapthaAI/repositories) for real-world examples e.g. The [simple chat agent](https://github.com/NapthaAI/simple_chat_agent) for running simple chat with LLMs.


### Discover Available Modules
To see a full list of modules currently registered on the Naptha Hub, install the [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) and use these CLI commands:
```bash
naptha agents         # explore available agent modules
naptha orchestrators  # explore available orchestrator modules
naptha environments   # explore availenvironment modules
naptha tools         # explore available tool modules
naptha personas      # explore available persona modules
```

