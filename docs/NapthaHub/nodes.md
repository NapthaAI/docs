# Discovering Nodes on the Naptha Hub

The Naptha Hub allows you to discover nodes that can be used for deploying agents and other modules, running inference using a variety of open source models, and storing data such as knowledge and memory for agents.

## Prerequisites

Install the Naptha SDK using the [instructions here](/GettingStarted/InstallSDK).

## Create an account on the Naptha Hub

You can create an account on the Naptha Hub by running the following command:

```bash
naptha signup
```

## Node Registry

You can use the CLI to explore available nodes that you can run agents and other modules on:

```bash
naptha nodes
```

You should see something like this:


```
                                                                                                                         Available Nodes                                                                                                                         
╭─────────────────────────────────────┬───────────────────────────────────┬─────────────────────────────────────┬───────┬─────────┬──────────┬───────┬─────────┬──────────┬───────────────────────────────────────────┬──────┬──────────────────────────────────╮
│                                     │                                   │                                     │       │         │ User     │ User  │ # Node  │ Node     │                                           │      │                                  │
│                                     │                                   │                                     │       │         │ Comm     │ Comm  │ Comm    │ Comm     │ Available                                 │ #    │ Provider                         │
│ Node ID                             │ Node IP                           │ Node Owner                          │ OS    │ Arch    │ Protocol │ Port  │ Servers │ Protocol │ Models                                    │ GPUs │ Types                            │
├─────────────────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┼───────┼─────────┼──────────┼───────┼─────────┼──────────┼───────────────────────────────────────────┼──────┼──────────────────────────────────┤
│ node:4f4d23e38f2a6d18276162bda6974… │ node2.naptha.ai                   │ user:4f4d23e38f2a6d18276162bda6974… │ Linux │ x86_64  │ https    │ 7001  │ 1       │ wss      │ NousResearch/Hermes-3-Llama-3.1-8B        │ 8    │ ['models', 'storage', 'modules'] │
│                                     │                                   │                                     │       │         │          │       │         │          │ Qwen/Qwen2.5-7B-Instruct                  │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ meta-llama/Llama-3.1-8B-Instruct          │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ Team-ACE/ToolACE-8B                       │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ ibm-granite/granite-3.1-8b-instruct       │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ internlm/internlm2_5-7b-chat              │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ meetkai/functionary-small-v3.1            │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ jinaai/jina-embeddings-v2-base-en         │      │                                  │
├─────────────────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┼───────┼─────────┼──────────┼───────┼─────────┼──────────┼───────────────────────────────────────────┼──────┼──────────────────────────────────┤
│ node:90875a428e47b1f82b74423a9c89e… │ node.naptha.ai                    │ user:90875a428e47b1f82b74423a9c89e… │ Linux │ x86_64  │ http     │ 7001  │ 1       │ ws       │ phi3:mini                                 │ 0    │ ['models', 'storage', 'modules'] │
├─────────────────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┼───────┼─────────┼──────────┼───────┼─────────┼──────────┼───────────────────────────────────────────┼──────┼──────────────────────────────────┤
│ node:ac20cca492e06fbf1df7b8e60a845… │ node3.naptha.ai                   │ user:ac20cca492e06fbf1df7b8e60a845… │ Linux │ x86_64  │ https    │ 7001  │ 1       │ wss      │ katanemo/Arch-Function-7B                 │ 8    │ ['models', 'storage', 'modules'] │
│                                     │                                   │                                     │       │         │          │       │         │          │ deepseek-ai/DeepSeek-R1-Distill-Qwen-32B  │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ microsoft/phi-4                           │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ mistralai/Mistral-Small-24B-Instruct-2501 │      │                                  │
│                                     │                                   │                                     │       │         │          │       │         │          │ Qwen/QwQ-32B-Preview                      │      │                                  │
├─────────────────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┼───────┼─────────┼──────────┼───────┼─────────┼──────────┼───────────────────────────────────────────┼──────┼──────────────────────────────────┤
╰─────────────────────────────────────┴───────────────────────────────────┴─────────────────────────────────────┴───────┴─────────┴──────────┴───────┴─────────┴──────────┴───────────────────────────────────────────┴──────┴──────────────────────────────────╯

Total nodes: 3
```

The `Node IP` column indicates the IP address of the node. You can connect to the node by setting the `NODE_URL` variable in the `.env` of the Naptha SDK to `f"https://{node_ip}"`.

The `Available Models` column indicates the open source models that are available on the node.

The `Provider Types` column indicates the capabilities of the node. For example, a node with `['models', 'storage', 'modules']` can be used for model inference, storing data, and deploying modules.

## Need Help?

- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI)