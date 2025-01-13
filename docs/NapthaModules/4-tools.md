# Tool Modules

Tool modules extend agent capabilities by providing reusable functions that can be shared across different agents. The main purpose of tool modules is to prevent code duplication and enable distributed execution.

Tool modules can come in several forms:

- **Web Search**: Access and retrieve information from the internet
- **Database Query**: Interact with various database systems
- **File Search**: Find and process files efficiently
- **Custom Functions**: Implement specialized capabilities

![Tool Integration](/img/tool-integration.png)

As shown in the diagram above, tools play a crucial role in the agent ecosystem:
1. Agents receive tasks and use LLMs for reasoning
2. Tools provide specific capabilities that agents can leverage
3. Tools can interact with environments and return results


## Deploying and Calling a Tool Module

### Prerequisites

Install the Naptha SDK using the [instructions here](https://github.com/NapthaAI/naptha-sdk/?tab=readme-ov-file#install).

### From the CLI

#### Interact with the Tool Hub

You can also use the CLI to explore available tools that you can use:

```bash
naptha tools
```

For each tool, you will see a url where you can check out the code.

#### Create a New Tool

```bash
naptha tools tool_name -p "description='Tool description' parameters='{tool_input_1: str, tool_input_2: str}' module_url='ipfs://QmNer9SRKmJPv4Ae3vdVYo6eFjPcyJ8uZ2rRSYd3koT6jg'" 
```

#### Delete a Tool

```bash
naptha tools -d tool_name
```

#### Run a Tool

Now you've found a node and a tool you'd like to run, so let's run it locally! You can use the commandline tool to connect with the node and run the workflow. 

```bash
# usage: naptha run <tool_name> -p "<tool args>"
naptha run tool:generate_image_tool -p "tool_name='generate_image_tool' tool_input_data='A beautiful image of a cat'"
```

#### Run an Agent that interacts with the Tool

```bash
naptha run agent:generate_image_agent -p "tool_name='generate_image_tool' tool_input_data='A beautiful image of a cat'" --tool_nodes "localhost"
```

## Need Help?
- Join our [Discord](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)