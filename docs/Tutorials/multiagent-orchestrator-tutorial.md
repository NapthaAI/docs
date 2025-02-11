---
sidebar_label: 'Create a Multiagent System on Naptha'
---

# Create Your First Multiagent System on Naptha

In today's information-rich world, the ability to combine authoritative knowledge with real-time web data is invaluable. We'll build an orchestrator that does exactly this by combining a Wikipedia knowledge agent with a web scraping agent. This powerful combination will allow us to create comprehensive research reports that blend established facts with current information.

This tutorial is exciting because it leverages a couple of Naptha's exciting modules and features:
- **Wikipedia Agent**: Agent Module that uses a KnowledgeBase module to provide verified, encyclopedic knowledge
- **Firecrawl Agent**: Agent Module that uses a Tool module to extract current information from websites
- **Orchestrator**: Orchestrator Module that coordinates the two agents to create a comprehensive research report
- **Inference Client**: Inference Client Module that uses a Node hosted LLM to run inference and generate a report

By the end of this tutorial, you'll understand how to:
1. Create an orchestrator that manages multiple agents
2. Execute concurrent research tasks efficiently
3. Synthesize information from multiple sources
4. Deploy your orchestrator to the Naptha ecosystem

<details>
<summary>Prerequisites</summary>

Before we begin, ensure you have:
- Python 3.8 or higher installed
- Poetry package manager (`pipx install poetry`)
- The Naptha SDK installed (`pip install naptha-sdk`)
- Access to a Naptha Node for inference
- Basic understanding of async Python
</details>

## 1. Getting Started

### Set Up Your Environment
First, clone the module template and set up your workspace. We'll name our project `research_orchestrator`
```bash
git clone https://github.com/NapthaAI/module_template research_orchestrator
cd research_orchestrator
poetry install
cp .env.example .env
```

The directory structure should look like this:
```
research_orchestrator/
├── research_orchestrator/
│   ├── __init__.py
│   ├── run.py
│   ├── schemas.py
│   └── configs/
│       └── deployment.json
├── pyproject.toml
└── .env
```

<details>
<summary>Schema Configuration</summary>

Let's start by creating clear schemas that define how our orchestrator will handle data. Edit the `schemas.py` file:

```python
from pydantic import BaseModel
from typing import Optional

class ResearchInput(BaseModel):
    """Schema for research orchestration input.
    
    This schema defines what users need to provide to our orchestrator:
    - query: The main topic to research (e.g., "Elon Musk")
    - question: Specific question about the topic
    - website_url: Website to scrape for additional information
    - extract_query: Optional specific data to look for on the website
    """
    query: str
    question: str
    website_url: str
    extract_query: Optional[str] = None

class InputSchema(BaseModel):
    """Wrapper schema for orchestrator input.
    
    This follows Naptha's convention for structuring module inputs,
    making our orchestrator compatible with the broader ecosystem.
    """
    research_input: ResearchInput
```

</details>

<details>
<summary>Deployment Configuration</summary>

We will have three deployment files in the `configs` folder: `deployment.json` for the orchestrator, `agent_deployments.json` for the agents, and `llm_configs.json` for the inference client.

Edit the `deployment.json` file:

```json
[
  {
    "name": "orchestrator_1",
    "module": { "name": "research_orchestrator" },
    "node": { "ip": "localhost" },
    "config": {
      "config_name": "orchestrator_config_1",
      "llm_config": { "config_name": "model_2" }
    },
    "agent_deployments": [
      { "name": "agent_deployment_1" },
      { "name": "agent_deployment_2" }
    ]
  }
]
```
Edit the `agent_deployments.json` file:

```json
[
  {
    "name": "agent_deployment_1",
    "module": {
      "name": "wikipedia_agent"
    },
    "node": {
      "ip": "node.naptha.ai",
      "server_type": "http",
      "http_port": 7001
    },
    "config": {
      "config_name": "agent_config_1",
      "llm_config": {
        "config_name": "model_2"
      },
      "system_prompt": {
        "role": "You are a Wikipedia agent that provides verified, encyclopedic knowledge",
        "persona": ""
      }
    }
  },
  {
    "name": "agent_deployment_2",
    "module": {
      "name": "firecrawl_agent"
    },
    "node": {
      "ip": "node.naptha.ai",
      "server_type": "http",
      "http_port": 7001
    },
    "config": {
      "config_name": "agent_config_2",
      "llm_config": {
        "config_name": "model_2"
      },
      "system_prompt": {
        "role": "You are a Firecrawl agent that extracts current information from websites",
        "persona": ""
      }
    }
  }
]
```

Edit the `llm_configs.json` file:

```json
[
    {
        "config_name": "model_1",
        "client": "ollama",
        "model": "ollama/phi",
        "temperature": 0.7,
        "max_tokens": 1000,
        "api_base": "http://localhost:11434"
    },
    {
        "config_name": "model_2",
        "client": "openai",
        "model": "gpt-4o-mini",
        "temperature": 0.7,
        "max_tokens": 1000,
        "api_base": "https://api.openai.com/v1"
    }
]
```

</details>


## 2. Building Our Smart Research Orchestrator

Now let's create our orchestrator setup in `run.py`. This will be the brain that coordinates our agents and synthesizes their findings:

<details>
<summary>Full Orchestrator Code Implementation</summary>

```python
#!/usr/bin/env python
import logging
import json
import os
import asyncio
from dotenv import load_dotenv
from typing import Dict, Any, Optional
from naptha_sdk.modules.agent import Agent
from naptha_sdk.schemas import OrchestratorRunInput, OrchestratorDeployment, AgentRunInput
from naptha_sdk.inference import InferenceClient
from naptha_sdk.user import sign_consumer_id
from research_orchestrator.schemas import ResearchInput, InputSchema

load_dotenv()
logger = logging.getLogger(__name__)

class ResearchOrchestrator:
    """Orchestrator that combines Wikipedia knowledge with web data.
    
    This orchestrator coordinates two specialized agents:
    1. Wikipedia Agent: Provides verified, encyclopedic knowledge
    2. Firecrawl Agent: Extracts current information from websites
    """
    def __init__(self, orchestrator_deployment: OrchestratorDeployment, *args, **kwargs):
        self.orchestrator_deployment = orchestrator_deployment
        self.agent_deployments = self.orchestrator_deployment.agent_deployments
        
        # Initialize our specialized agents
        self.wiki_agent = Agent(deployment=self.agent_deployments[0], *args, **kwargs)
        self.firecrawl_agent = Agent(deployment=self.agent_deployments[1], *args, **kwargs)
        
        # Keep track of our agents in a list for management
        self.agents = [
            self.wiki_agent,
            self.firecrawl_agent
        ]
        
        # Set up our inference client for report generation
        self.node = InferenceClient(self.orchestrator_deployment.node)
        self.inputs: Optional[ResearchInput] = None

    async def query_wikipedia(self, input_data: ResearchInput, 
                            module_run: OrchestratorRunInput) -> Dict:
        """Query Wikipedia knowledge base for authoritative information."""
        logger.info(f"Querying Wikipedia for: {input_data.query}")
        agent_run_input = AgentRunInput(
            consumer_id=module_run.consumer_id,
            inputs={
                "function_name": "run_query",
                "query": input_data.query,
                "question": input_data.question
            },
            deployment=self.agent_deployments[0],
            signature=sign_consumer_id(module_run.consumer_id, os.getenv("PRIVATE_KEY"))
        )
        return await self.wiki_agent.call_agent_func(agent_run_input)

    async def scrape_web_data(self, input_data: ResearchInput, 
                             module_run: OrchestratorRunInput) -> Dict:
        """Extract current information from specified websites."""
        logger.info(f"Scraping website: {input_data.website_url}")
        agent_run_input = AgentRunInput(
            consumer_id=module_run.consumer_id,
            inputs={
                "tool_name": "scrape_website",
                "tool_input_data": {
                    "website_url": input_data.website_url,
                    "extract_query": input_data.extract_query
                }
            },
            deployment=self.agent_deployments[1],
            signature=sign_consumer_id(module_run.consumer_id, os.getenv("PRIVATE_KEY"))
        )
        return await self.firecrawl_agent.call_agent_func(agent_run_input)

    async def generate_comprehensive_report(self, wiki_data: Dict, web_data: Dict) -> str:
        """Synthesize information from both sources into a coherent report."""
        logger.info("Generating comprehensive research report...")
        messages = [{
            "role": "user",
            "content": f"""Create a comprehensive research report combining Wikipedia knowledge and current web data:

Wikipedia Information:
{json.dumps(wiki_data, indent=2)}

Current Web Data:
{json.dumps(web_data, indent=2)}

Please create a detailed report including:
1. Overview and Background
2. Key Facts from Wikipedia
3. Current Information and Updates
4. Analysis and Integration
5. Additional Insights
6. Sources and References"""
        }]
        
        response = await self.node.run_inference({
            "model": self.orchestrator_deployment.config.llm_config.model,
            "messages": messages
        })
        return response.choices[0].message.content

    async def orchestrate(self, module_run: OrchestratorRunInput, *args, **kwargs):
        """Main orchestration function that coordinates the research process."""
        try:
            self.inputs = module_run.inputs.research_input
            logger.info(f"Starting research orchestration for: {self.inputs.query}")
            
            # Execute both research tasks concurrently
            wiki_data, web_data = await asyncio.gather(
                self.query_wikipedia(self.inputs, module_run),
                self.scrape_web_data(self.inputs, module_run),
                return_exceptions=True
            )
            
            # Check for any errors in our concurrent tasks
            for result in [wiki_data, web_data]:
                if isinstance(result, Exception):
                    logger.error(f"Research task failed: {str(result)}")
                    raise result
            
            # Generate our comprehensive report
            final_report = await self.generate_comprehensive_report(wiki_data, web_data)

            return {
                "final_report": final_report,
                "components": {
                    "wikipedia_data": wiki_data,
                    "web_data": web_data
                }
            }

        except Exception as e:
            logger.error(f"Error in research orchestration: {str(e)}")
            raise


# Testing Our Orchestrator

if __name__ == "__main__":
    import asyncio
    from naptha_sdk.client.naptha import Naptha
    from naptha_sdk.configs import setup_module_deployment

    naptha = Naptha()

    # Set up our deployment configuration
    deployment = asyncio.run(setup_module_deployment(
        "orchestrator",
        "research_orchestrator/configs/deployment.json",
        node_url=os.getenv("NODE_URL")
    ))

    # Example: Researching Elon Musk
    input_params = {
        "research_input": {
            "query": "Elon Musk",
            "question": "What are Elon Musk's major business ventures and current net worth?",
            "website_url": "https://www.tesla.com/elon-musk",
            "extract_query": "Current role and recent accomplishments"
        }
    }
            
    module_run = {
        "inputs": input_params,
        "deployment": deployment,
        "consumer_id": naptha.user.id,
        "signature": sign_consumer_id(naptha.user.id, os.getenv("PRIVATE_KEY"))
    }

    # Run the orchestration and display results
    response = asyncio.run(run(module_run))
    print("\nResearch Results:")
    print(json.dumps(response, indent=2))
```

</details>


## 3. Testing Your Orchestrator

### Local Testing  
Test your orchestrator module using Poetry:

```bash
poetry run python research_orchestrator/run.py
```

This will execute the example in your main block i.e `if __name__ == "__main__"`:


## 4. Publishing to Naptha Hub

You have two methods to getting your orchestrator module ready for registration: IPFS or Github.

:::tip
    Add versioning before pushing to either Github or IPFS or Both.
```bash
# Add version tag
git tag v0.1.0
git push --tags
```
:::

### IPFS
If you want to publish using IPFS, you can do so by running after running `poetry build`:
```bash
naptha write_storage -i dist/research_orchestrator-0.1.0.tar.gz --ipfs
```
You'll receive an IPFS `Folder ID` upon success like:

```
Writing storage
{'message': 'Files written to storage', 'folder_id': '********************************'}
```

Save the returned IPFS `Folder ID` - you'll need it for registration.

### Github
If you would like to use `Github` instead, replace the `module_url` value in the command with your repository url. Remember to: 
- git add and commit your files
- create a new repository on Github and push your code. 
:::

## 5. Deployment and Publication

Now that we've built our orchestrator, let's make it available to others:

```bash
naptha orchestrators research_orchestrator -p "
description='Smart research orchestrator combining Wikipedia knowledge with web data'
parameters='{
    "research_input": {
        "query": "str",
        "question": "str", 
        "website_url": "str",
        "extract_query": "Optional[str]"
    }
}'
module_url='ipfs://YOUR_FOLDER_ID'" # or use Github "https://github.com/YOUR_USERNAME/YOUR_REPO"
```

## Using Your Orchestrator

Other developers can now use your orchestrator with a simple command:

```bash
naptha run orchestrator:research_orchestrator -p "
research_input={
    'query': 'Elon Musk',
    'question': 'What is Elon Musks current net worth and business ventures?',
    'website_url': 'https://www.tesla.com/elon-musk',
    'extract_query': 'Current role and recent accomplishments'
}"
```

## Next Steps and Advanced Features

You can enhance your orchestrator by:
1. Adding more specialized agents (news aggregators, social media analyzers)
2. Adding source validation and fact-checking
3. Creating custom report templates for different use cases



## Best Practices

### Error Handling
- Implement robust error handling for agent failures
- Provide clear error messages
- Handle concurrent execution gracefully

### Configuration
- Use environment variables for sensitive data
- Keep agent configurations flexible
- Document required agent deployments

## Troubleshooting

<details>
<summary>Agent Connection Issues</summary>

If you're having trouble with agent connections:
1. Verify agent deployments are active
2. Check your environment variables
3. Ensure proper node setup
</details>

<details>
<summary>Orchestration Issues</summary>

For orchestration problems:
1. Validate agent responses
2. Check concurrent execution handling
3. Verify LLM configurations
</details>

## Need Help?
- Join our [Discord Community](https://naptha.ai/naptha-community)
- Follow us on [Twitter](https://twitter.com/NapthaAI)
- Join us on [Farcaster](https://warpcast.com/naptha)
- Get help with technical issues on [GitHub](https://github.com/NapthaAI/naptha-sdk/issues)