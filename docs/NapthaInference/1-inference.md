---
sidebar_label: 'Inference Client'
---

# Quick Inference via the CLI

You can access inference quickly using the `naptha inference` CLI command:

```bash
# Format: naptha inference completions "<prompt>" -m "<model_name>"
naptha inference completions "How can we create scaling laws for multi-agent systems?" -m "hermes3:8b"
```

# Accessing Inference in Modules via the Naptha SDK

## Configuring Inference

Inference is configured using the `LLMConfig` class:

```python
#naptha_sdk/schemas.py
class LLMConfig(BaseModel):
    config_name: Optional[str] = "llm_config"
    client: Optional[LLMClientType] = None
    model: Optional[str] = None
    max_tokens: Optional[int] = None
    temperature: Optional[float] = None
    api_base: Optional[str] = None
```

Or in the `llm_configs.json` file in the `configs` folder of the module:

```json
[
    {
        "config_name": "open",
        "client": "ollama",
        "model": "hermes3:8b",
        "temperature": 0.7,
        "max_tokens": 1000,
        "api_base": "http://localhost:11434"
    },
    {
        "config_name": "closed",
        "client": "openai",
        "model": "gpt-4o-mini",
        "temperature": 0.7,
        "max_tokens": 1000,
        "api_base": "https://api.openai.com/v1"
    }
]
```

## Running Inference

Naptha Modules can import the `InferenceClient` class from the `naptha_sdk.inference` module to interact with the inference provider.

```python
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.inference import InferenceClient

# Configure your node connection
node = NodeConfigUser(ip="node2.naptha.ai", http_port=None, server_type="https")
inference_client = InferenceClient(node)

# Prepare your messages
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is the capital of France?"}
]

# Run inference
response = asyncio.run(inference_client.run_inference({
    "model": llm_config.model, # The model to use for inference
    "messages": messages,
    "temperature": llm_config.temperature,
    "max_tokens": llm_config.max_tokens
}))
                                          
# Extract the response
content = response.choices[0].message.content
print("Output: ", content)
```

# Use the API directly

You can also write your own code to interact with the inference API. See the FastAPI docs for the [inference API](https://node2.naptha.ai/docs#/default/chat_endpoint_inference_chat_post). If you prefer, you can also interact with the [LiteLLM API](http://62.169.159.179:4000/) directly. 

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)