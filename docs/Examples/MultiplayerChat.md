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

## Run

You can run it using the Naptha SDK with the following command:

```bash
naptha run multiagent_chat -p "prompt='I would like to count up to ten, one number at a time. ill start. one.'" --worker_nodes "http://node.naptha.ai:7001,http://node1.naptha.ai:7001"
```

### Configuration Breakdown:
- `prompt`: Your initial message to start the conversation
- `worker_nodes`: Comma-separated list of worker node URLs

:::note Node Distribution
This runs the flow across three nodes in total - one orchestrator node (whichever you have set as the ```NODE_URL``` in the .env file of the Naptha SDK), 
and two worker nodes (that you have set using the ```--worker_nodes``` flag).
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