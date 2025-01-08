# Inference Client

One of the main functions of a Naptha Module is to access model inference. Naptha Nodes can run inference locally , and do so via the Naptha Inference API. The advantage of using Naptha Nodes for inference is that the inference runs locally and is private.

Naptha Modules can import the `InferenceClient` class from the `naptha_sdk.inference` module to interact with the inference provider.


```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.inference import InferenceClient

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
inference_client = InferenceClient(node)

messages = [{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": "What is the capital of France?"}]

response = asyncio.run(inference_client.run_inference({"model": "phi3:mini",
                                             "messages": messages,
                                             "temperature": 0.5,
                                             "max_tokens": 1000}))
                                          
content = response['choices'][0]['message']['content']
print("Output: ", content)
```

You can also run inference on a node using the `naptha inference` CLI command:

```bash
naptha inference "How can we create scaling laws for multi-agent systems?" -m "phi3:mini"
```