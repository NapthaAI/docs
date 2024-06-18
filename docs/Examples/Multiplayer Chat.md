# Multiplayer Chat

[Autogen](https://microsoft.github.io/autogen/docs/Getting-Started) by Microsoft is a framework for building apps with multiple agents that can converse with each other in various patterns, as shown in the original image below.

![](/img/autogen.png)

However, the framework is designed for agents running on one node, with the same codebase and data.

Using the Naptha SDK and node infrastructure, we implemented a multiplayer chat app where each of the conversational agents runs on a different node using different LLMs. 

## Prerequisities

Make sure you have the Naptha SDK installed. 

## Modules Used

The Multiplayer Chat multi-node workflow is made up of the following components, which you can find on the Naptha HuggingFace:

* [Multiplayer Chat Orchestrator Flow](https://huggingface.co/NapthaAI/multiplayer_chat/tree/v0.6)
* [Chat Task](https://github.com/NapthaAI/module_chat/tree/v0.4)

## Run

You can run the Multiplayer Chat flow from the SDK using the following command:

```bash
naptha run multiplayer_chat -p "prompt='i would like to count up to ten, one number at a time. ill start. one.'" --worker_nodes "http://node.naptha.ai:7001,http://node1.naptha.ai:7001"
```

This will run the flow across three different nodes in total - one orchestrator node (whichever you have set as the ```NODE_URL``` in the .env file of the Naptha SDK), and two worker nodes (that you have set using the ```--worker_nodes``` flag).