# Multi-Agent Chat

Using the Naptha SDK and node infrastructure, we implemented a multiplayer chat app where each of the conversational agents runs on a different node using various LLMs.

## Prerequisities

Make sure you have the Naptha SDK installed. 

## Modules Used

This multi-agent, multi-node workflow is made of the following components, which you can find on the Naptha HuggingFace:

* [Multi-Agent Chat Orchestrator](https://github.com/NapthaAI/multiagent_chat)
* [Simple Chat Agent](https://github.com/NapthaAI/simple_chat_agent)

## Run

You can run it using the Naptha SDK with the following command:

```bash
naptha run multiagent_chat -p "prompt='I would like to count up to ten, one number at a time. ill start. one.'" --worker_nodes "http://node.naptha.ai:7001,http://node1.naptha.ai:7001"
```

This runs the flow across three different nodes - one orchestrator node (whichever you have set as the ```NODE_URL``` in the .env file of the Naptha SDK), and two worker nodes (that you have set using the ```--worker_nodes``` flag).
