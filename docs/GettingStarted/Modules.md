# Modules

Visit our [GitHub](https://github.com/napthaai) to discover building blocks for distributed multi-agent systems.

> Also, you can explore Naptha modules on [HuggingFace](https://huggingface.co/NapthaAI).

### Examples
* [Hello World](/Examples/HelloWorld)
* [Generate Image](/Examples/GenerateImage)
* [Simple RAG](/Examples/SimpleRAG)
* [Multiplayer Chat](/Examples/MultiplayerChat)
* [BabyAGI](/Examples/BabyAGI)

## Module Template

### Usage Guide

#### 1. Clone

Refer to this [minimal example](https://huggingface.co/NapthaAI/template) for how to create basic task and flow modules:

```bash
git clone https://huggingface.co/NapthaAI/template && cd template
```

#### 2. Install
```bash
poetry install
```

#### 3. Run
```bash
poetry run python template/run.py
```

### Files
`module_name/...`

* `__init__.py` (empty) ~ allow exports
* `run.py` ~ basic module code in Python
* `component.yaml` ~ configuration file
* *`schemas.py` ~ input/output schemas*
* *`utils.py` ~ utility functions*

### Content
#### run.py
```python
from naptha_sdk.utils import get_logger, load_yaml
from module_name.schemas import InputSchema
import yaml

logger = get_logger(__name__)

def run(inputs: InputSchema, worker_nodes=None, orchestrator_node=None, flow_run=None, cfg=None):
    logger.info(f"Inputs: {inputs}")
    return None

if __name__ == "__main__":
    cfg_path = "template/component.yaml"
    cfg = load_yaml(cfg_path)
    inputs = {"prompt": "hi"}
    run(inputs, cfg=cfg)
```

#### component.yaml
```yaml
name: template
author: naptha
version: 0.1.0
description: blueprint
license: MIT

models:
  default_model_provider: ollama
  ollama:
    model: ollama/phi
    max_tokens: 1000
    temperature: 0
    api_base: http://localhost:11434
  vllm:
    model: openai/NousResearch/Hermes-3-Llama-3.1-8B
    api_base: http://localhost:8000/v1
    max_tokens: 1000
    temperature: 0

inputs:
    system_message: "You are a helpful AI assistant."
    save: false
    location: ipfs

outputs:
    save: false
    location: node

implementation:
    package:
        entrypoint: run.py
```

#### schemas.py
Create a model for your inputs:
```python
from pydantic import BaseModel

class InputSchema(BaseModel):
    prompt: str
    llm_backend: str = "ollama"
```
Learn how to use Pydantic by reviewing their docs:

* [Models](https://docs.pydantic.dev/1.10/usage/models)
* [Schema](https://docs.pydantic.dev/1.10/usage/schema)

#### utils.py
```python
import logging


def get_logger(name):
    logger = logging.getLogger(name)
    logger.setLevel(logging.DEBUG)
    handler = logging.StreamHandler()
    handler.setLevel(logging.DEBUG)
    formatter = logging.Formatter(
        "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    )
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    return logger
```
