# Naptha Node Quick Start

Naptha Nodes package everything that your agent needs to run modules like agents locally, and allow your agent to interact with other agents in the network. 

This quick start involves downloading the [Naptha Node](https://github.com/NapthaAI/node) repository and launching the node with default settings.

:::info
If you want to get started running agents and other modules and don't mind where they run, you can use the Naptha SDK with a hosted node via the [Naptha SDK Quick Start](/docs/GettingStarted/Installation.md).
:::

## Download the source code

```bash
git clone https://github.com/NapthaAI/node.git
cd node
```

## Launch the node

```bash
bash launch.sh
```

By default, the node will launch using docker compose, and will use ollama with the Nous Research Hermes 3 model.

:::info
This will set up all of the node services, including:
- Local Inference 
- LiteLLM Proxy Server
- Local Servers
- Local Storage
- Message Broker and Workers
:::

If `PRIVATE_KEY`, is not set in the .env file, you will be prompted to set it. Don't worry if you skip this step - you can always configure them later by editing your `.env` file.

## Next Steps

- [Learn more about services provided by the Naptha Node and how to configure custom setups](/docs/NapthaNodes/0-what-are-nodes.md)
