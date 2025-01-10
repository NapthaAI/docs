---
sidebar_label: 'Inference Client'
---

# Inference Client

One of the main functions of a Naptha Module is to access model inference. Naptha Nodes run inference locally on your hardware, and can do so via the Naptha Inference API. The key advantage of using Naptha Nodes for inference is that the inference runs locally and is completely private.

Naptha Modules can import the `InferenceClient` class from the `naptha_sdk.inference` module to interact with the inference provider.

```python
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.inference import InferenceClient

# Configure your node connection
node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
inference_client = InferenceClient(node)

# Prepare your messages
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is the capital of France?"}
]

# Run inference
response = asyncio.run(inference_client.run_inference({
    "model": "phi3:mini", # The model to use for inference
    "messages": messages,
    "temperature": 0.5,
    "max_tokens": 1000
}))
                                          
# Extract the response
content = response['choices'][0]['message']['content']
print("Output: ", content)
```

You can also run inference on a node using the `naptha inference` CLI command:

```bash
# Format: naptha inference "<prompt>" -m "<model_name>"
naptha inference "How can we create scaling laws for multi-agent systems?" -m "phi3:mini"
```

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)