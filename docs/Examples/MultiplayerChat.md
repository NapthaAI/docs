# Multi-Agent Chat

Using the Naptha SDK and node infrastructure, we implemented a multiplayer chat app where each of the conversational agents runs on a different node using various LLMs.

## Prerequisites

- Make sure you have the [Naptha SDK installed](/GettingStarted/Installation).

## Modules Used

This multi-agent, multi-node workflow is made of the following components, which you can find on the Naptha GitHub:

<!-- * [Multi-Agent Chat Orchestrator](https://github.com/NapthaAI/multiagent_chat)
* [Simple Chat Agent](https://github.com/NapthaAI/simple_chat_agent) -->

| Module | Description | Repository |
|--------|-------------|------------|
| Multi-Agent Chat Orchestrator | Multi-agent chat across a network of multiple nodes. | [GitHub](https://github.com/NapthaAI/multiagent_chat) |
| Simple Chat Agent | Agent for running simple chat with LLMs. | [GitHub](https://github.com/NapthaAI/simple_chat_agent) |

## Create Deployment

You can download and install the modules for an orchestrator without running first using:

```bash
naptha create orchestrator:multiagent_chat --agent_modules "agent:simple_chat_agent,agent:simple_chat_agent" --agent_nodes "node.naptha.ai,node1.naptha.ai" --kb_modules "kb:groupchat_kb" --kb_nodes "node.naptha.ai"
```

## Run

You can run it using the Naptha SDK on hosted nodes using the following command:

```bash
naptha run orchestrator:multiagent_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --agent_nodes "node.naptha.ai,node1.naptha.ai" --kb_nodes "node.naptha.ai"
```

Or on local nodes:

```bash
naptha run orchestrator:multiagent_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --agent_nodes "localhost,localhost" --kb_nodes "localhost"
```

### Configuration Breakdown:
- `prompt`: Your initial message to start the conversation
- `agent_nodes`: Comma-separated list of agent node URLs where chat agents will run
- `kb_nodes`: Comma-separated list of knowledge base node URLs for storing chat history

:::note Node Distribution
This runs the flow across multiple nodes:
- One orchestrator node (set as `NODE_URL` in your .env file) that coordinates the chat
- Two agent nodes (specified via `--agent_nodes`) that run the chat agents
- One knowledge base node (specified via `--kb_nodes`) that stores the chat history
:::

## Example Conversation Starters

Try these prompts to see different interaction patterns:
- Counting game: `"I would like to count up to ten, one number at a time. ill start. one."`
- Story creation: `"Let's create a story together. I'll start: Once upon a time..."`
- Word association: `"Let's play word association. I'll say a word, and you respond with related words. Starting with: Ocean"`

:::tip
Start with simple interactions to understand the flow, then try more complex conversations as you get familiar with the system.
:::

:::info
Each agent in this chat system runs independently on its own node, demonstrating true distributed AI interaction!
:::