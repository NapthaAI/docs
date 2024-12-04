# What are Naptha Modules?

Naptha Modules are the building blocks of Naptha multi-agent applications, which enable them to run across multiple nodes. There are currently five types of modules:

- Agent modules  
- Agent orchestrator modules
- Environment modules
- Tool modules
- Persona modules

Modules are stored on GitHub, HuggingFace, IPFS, or DockerHub with the URL registered on the Naptha Hub.

![](/img/nodes.png)

## Running a Module

You can run modules locally, or deploy to a Naptha Node using `naptha run` commands from the [Naptha SDK](https://github.com/NapthaAI/naptha-sdk). Modules are executed within Poetry virtual environments or Docker containers on Naptha Nodes.



## Structure of a Module

If you're familiar with Kubeflow Pipelines, Modules are a bit like Components. Modules are based on Poetry Python packages, with some additions like schemas, configs, and an entrypoint. A typical module has the following structure:

```
- my_module/
  - my_module/
    - __init__.py
    - configs/
      - agent_deployments.json
      - environment_deployments.json
      - llm_configs.json
      - orchestrator_configs.json
    - run.py
    - schemas.py
  - tests/
    - __init__.py
  - pyproject.toml
  - poetry.lock
  - README.md
  - LICENSE
  - .env
  - .gitignore
  - Dockerfile
```

The [Naptha Module template](https://github.com/NapthaAI/module_template) provides the basic structure for creating new modules. To see examples of real modules, you can browse repositories on the [Naptha GitHub](https://github.com/orgs/NapthaAI/repositories) (e.g. the [simple chat agent](https://github.com/NapthaAI/simple_chat_agent) module). To see a full list of modules registered on the Naptha Hub, install the [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) and use the CLI commands `naptha agents`, `naptha orchestrators`, `naptha environments`, `naptha tools`, and `naptha personas`. 

