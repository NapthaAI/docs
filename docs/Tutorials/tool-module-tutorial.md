---
sidebar_label: 'Create Your First Tool Module'
---

# Creating Your First Tool Module on Naptha

## What is a Tool Module?

Tool Modules are specialized components in the Naptha ecosystem that provide specific functionalities to agents. They act as bridges between 
your agents and external services, handling everything from API interactions to data processing. Our PDF Chat Tool, for example, allows us 
to create an intelligent document analysis system that agents can use to analyze and chat with PDF documents.

This guide will walk you through creating your first tool module using our PDF Chat Tool as an example.

<details>
<summary>Prerequisites</summary>

Before we begin, ensure you have:
- Python 3.8 or higher installed
- Poetry package manager (`pipx install poetry`)
- The Naptha SDK installed (`pip install naptha-sdk`)
- A Google API key for Gemini access
</details>

## 1. Getting Started

### Set Up Your Environment
First, clone the module template and set up your workspace:
```bash
git clone https://github.com/NapthaAI/module_template
cd module_template
poetry install
cp .env.example .env
```

## 2. Building Your Tool Module

Your tool module will consist of three main components:

### Schema Definition (schemas.py)
Define what your tool expects as input:
```python
from pydantic import BaseModel
from typing import Optional

class InputSchema(BaseModel):
    tool_name: str
    tool_input_data: str
    query: Optional[str] = "Summarize this document"
```
This schema defines what our tool expects as input: a tool name, PDF data (as URL, file path, or base64), and an optional query.

### Deployment Configuration (deployment.json)

```json
[
  {
    "name": "tool_deployment_1",
    "module": {
      "name": "pdf_chat_tool",
      "description": "PDF chat module using Gemini for document analysis, Q&A, and information extraction from text and visual content.",
      "parameters": "{tool_name: str, tool_input_data: str, query: str}",
      "module_type": "tool",
      "module_version": "v0.1",
      "module_entrypoint": "run.py",
      "execution_type": "package"
    },
    "node": {
      "ip": "localhost"
    },
    "config": {
      "config_name": "tool_config_1",
      "llm_config": {
        "config_name": "model_1"
      }
    }
  }
]
```

### Core Implementation (run.py)
Implement your tool's main functionality:

<details>
<summary>Full run.py file</summary>

```python       
import os
import base64
import requests
import logging
from pathlib import Path
from typing import Dict
from dotenv import load_dotenv
from pdf_chat.schemas import InputSchema
from naptha_sdk.schemas import ToolDeployment, ToolRunInput
from naptha_sdk.user import sign_consumer_id

logger = logging.getLogger(__name__)
load_dotenv()

class PDFChatTool:
    def __init__(self, tool_deployment: ToolDeployment):
        self.tool_deployment = tool_deployment
        self.api_key = os.environ.get('GOOGLE_API_KEY')
        self.api_base = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro"
        
        if self.api_key is None:
            raise ValueError("Google API key not set")

    def _get_pdf_data(self, input_data: str) -> str:
        if input_data.startswith(('http://', 'https://')):
            response = requests.get(input_data)
            return base64.b64encode(response.content).decode('utf-8')
        elif os.path.exists(input_data):
            with open(input_data, 'rb') as f:
                return base64.b64encode(f.read()).decode('utf-8')
        elif ',' in input_data:
            return input_data
        else:
            raise ValueError("Invalid input: Must be URL, file path, or base64 encoded data")

    def generate_chat(self, inputs: InputSchema) -> str:
        logger.info(f"Processing PDF query: {inputs.query}")
        pdf_data = self._get_pdf_data(inputs.tool_input_data)
        
        url = f"{self.api_base}:generateContent?key={self.api_key}"
        data = {
            "contents": [{
                "parts": [
                    {"inline_data": {"mime_type": "application/pdf", "data": pdf_data}},
                    {"text": inputs.query}
                ]
            }]
        }

        try:
            response = requests.post(url, json=data)
            response.raise_for_status()
            return response.json()["candidates"][0]["content"]["parts"][0]["text"]
        except Exception as e:
            logger.error(f"Failed to generate response: {str(e)}")
            raise ValueError(f"Failed to generate response: {str(e)}")
        
def run(module_run: Dict, *args, **kwargs) -> str:
    """Run the module for document analysis from text prompt and pdf input using Gemini API"""
    module_run = ToolRunInput(**module_run)
    module_run.inputs = InputSchema(**module_run.inputs)
    
    chat_tool = PDFChatTool(module_run.deployment)
    method = getattr(chat_tool, module_run.inputs.tool_name, None)
    
    if not method:
        raise ValueError(f"Method {module_run.inputs.tool_name} not found")
    
    return method(module_run.inputs)

if __name__ == "__main__":
    import asyncio
    from naptha_sdk.client.naptha import Naptha
    from naptha_sdk.configs import setup_module_deployment
    
    naptha = Naptha()
    
    deployment = asyncio.run(setup_module_deployment(
        "tool", 
        "pdf_chat/configs/deployment.json",
        node_url=os.getenv("NODE_URL")
    ))
    
    # Example usage:
    # naptha run tool:pdf_chat_tool -p "tool_name='generate_chat', tool_input_data='path/to/document.pdf', query='What are the main findings?'"

    input_params = {
        "tool_name": "generate_chat",
        # "tool_input_data": "https://arxiv.org/pdf/2406.00392",
        "tool_input_data": "pdf_chat/input_files/test.pdf",
        "query": "Summarize this document"
    }
    
    module_run = {
        "inputs": input_params,
        "deployment": deployment,
        "consumer_id": naptha.user.id,
        "signature": sign_consumer_id(naptha.user.id, os.getenv("PRIVATE_KEY"))
    }
    
    print(run(module_run))
```
</details>

```python
class PDFChatTool:
    def __init__(self, tool_deployment: ToolDeployment):
        self.tool_deployment = tool_deployment
        self.api_key = os.environ.get('GOOGLE_API_KEY')
        self.api_base = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro"
        
        if self.api_key is None:
            raise ValueError("Google API key not set")

     def _get_pdf_data(self, input_data: str) -> str:
        if input_data.startswith(('http://', 'https://')):
        # Implementation details...
```

Our tool class handles:
- API configuration
- PDF data processing
- Chat generation with Gemini
- Error handling

### Entry Point (`run function`)
Create the entry point for your tool:
```python
def run(module_run: Dict, *args, **kwargs) -> str:
    """Run the module for document analysis from text prompt and pdf input using Gemini API"""
    module_run = ToolRunInput(**module_run)
    module_run.inputs = InputSchema(**module_run.inputs)
    
    chat_tool = PDFChatTool(module_run.deployment)
    method = getattr(chat_tool, module_run.inputs.tool_name, None)
    
    if not method:
        raise ValueError(f"Method {module_run.inputs.tool_name} not found")
    
    return method(module_run.inputs)
```

## 3. Testing Your Tool

### Local Testing  
Test your tool module using Poetry:
```bash
poetry run python pdf_chat/run.py
```

This will execute the example in your main block i.e `if __name__ == "__main__"`:
```python
input_params = {
        "tool_name": "generate_chat",
        # "tool_input_data": "https://arxiv.org/pdf/2406.00392",
        "tool_input_data": "pdf_chat/input_files/test.pdf",
        "query": "Summarize this document"
    }
```

## 4. Publishing to Naptha Hub

You have two methods to publish your tool module:

### Method 1: Publish from GitHub (Recommended)

If your code is on GitHub, you can publish directly from your repository:

- Push to GitHub repository
```bash
git add .
git commit -m "Initial tool module release"
git push origin main
```

- Version your module (also recommended for the IPFS method):
```bash
git tag v0.1
git push --tags
```

- Publish to Naptha Hub:
```bash
naptha publish -r https://github.com/YourUsername/your-tool-repo
```

This will:
- Validate your module structure
- Register it on the Naptha Hub
- Make it available to other users

### Method 2: Publish via IPFS

Alternatively, you can publish your module to IPFS:

1. Build your package:
```bash
poetry build
```



3. Publish to IPFS:
```bash
naptha publish -r
```

You'll receive output like:
```
Successfully published to IPFS!
IPFS Hash: QmX...
Test download: http://provider.akash.pro:30584/ipfs/QmX...
```

:::info
Save the IPFS hash - you can use it to verify your module is accessible
:::

## 5. Verify Your Publication

Check that your tool is registered:
```bash
naptha tools
```

Test your published tool:
```bash
naptha run tool:pdf_chat_tool -p "tool_name='generate_chat', tool_input_data='path/to/document.pdf', query='What are the main findings?'"
```

## Best Practices

### Error Handling
- Validate inputs early
- Provide clear error messages
- Handle API errors gracefully

### Configuration
- Use environment variables for sensitive data
- Keep API endpoints configurable
- Document required configurations

## Troubleshooting

<details>
<summary>API Connection Issues</summary>

If you're having trouble with API connections:
1. Verify your API key in `.env`
2. Check API endpoint URLs
3. Ensure proper network connectivity
</details>

<details>
<summary>Input/Output Issues</summary>

For data processing problems:
1. Validate input formats
2. Check file permissions
3. Verify output paths
</details>



Your PDF Chat Tool is now ready to be used by agents across the Naptha ecosystem! Remember to maintain and update your tool as needed, and don't hesitate to reach out to our community for support.

## Need Help?
- Join our [Discord Community](https://naptha.ai/naptha-community)
- Follow us on [Twitter](https://twitter.com/NapthaAI)
- Join us on [Farcaster](https://warpcast.com/naptha)
- Get help with technical issues on [GitHub](https://github.com/NapthaAI/naptha-sdk/issues)