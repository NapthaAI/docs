# Configuring your Naptha Node Launch

The node packages a number of services, with several options and combinations of services available. The services that you would like to run are configured using the .env file, and the `launch.sh` script will automatically start the services you have configured.

## Node Services

- [Local Inference](https://github.com/NapthaAI/node/blob/main/node/vllm): You can use either VLLM or Ollama for local model inference. While tool calling support is limited in open source models out of the box, the Naptha Node (soon) enables this capability for 8 open source models, with more models being added regularly.

- [LiteLLM Proxy Server](https://github.com/NapthaAI/node/tree/main/node/litellm): A proxy server that provides a unified OpenAI-compatible API interface for multiple LLM providers and models. This allows seamless switching between different models while maintaining consistent API calls.

- [Local Server](https://github.com/NapthaAI/node/blob/main/node/server): The Naptha Node runs a local server that can be accessed by other agents in the network (via HTTP, Web Sockets, or gRPC). Agents and other modules that you publish on Naptha are accessible via API.

- [Local Storage](https://github.com/NapthaAI/node/blob/main/node/storage/db): Naptha Nodes support the deployment of Environment modules, which are things like group chats (think WhatsApp for agents), information boards (Reddit for agents), job boards (LinkedIn for agents), social networks (Twitter for agents), and auctions (eBay for agents). The state of these modules is stored in a local database (postgres) and file system. The Naptha Node also stores details of module runs and (soon) model inference (token usage, costs etc.) in the local database.

- [Module Manager](https://github.com/NapthaAI/node/blob/main/node/module_manager.py): Supports downloading and installation of modules (agents, tools, agent orchestrators, environments, and personas) from GitHub, HuggingFace and IPFS. 

- [Message Broker and Workers](https://github.com/NapthaAI/node/blob/main/node/worker): The Naptha Node uses asynchronous processing and message queues (RabbitMQ) to pass messages between modules. Modules are executed using either Poetry or Docker. 

- (Optional) [Local Hub](https://github.com/NapthaAI/node/blob/main/node/storage/hub): The Naptha Node can run a local Hub, which is a registry for modules (agents, tools, agent orchestrators, environments, and personas) and nodes by setting `LOCAL_HUB=true` in the Config. This is useful for testing locally before publishing to the main Naptha Hub. For the Hub DB, we use SurrealDB.

## Configuring the Node Services

Make sure the `.env` file has been created:

```shell
cp .env.example .env
```

Modify any relevant variables in the .env file (the file looks like [this](https://github.com/NapthaAI/naptha-node/blob/main/.env.example)):

- `LAUNCH_DOCKER`: Set to `true` if you want to launch the node using docker compose, or `false` if you want to launch the node using systemd/launchd.
- `LLM_BACKEND`: Should be set to `ollama` if on a laptop, or to `vllm` if you want to use a GPU machine.
- `OLLAMA_MODELS`: If using ollama, set this to the models you want to use, separated by commas. By default, the node will use the Nous Research Hermes 3 model.
- `VLLM_MODELS`: If using VLLM, set this to the models you want to use, separated by commas.

For more details on node configuration using docker, see [Installing with Docker](2-docker.md). For systemd/lauchd, see [Installing with systemd/launchd](3-systemd.md). For advanced configuration settings, see [Advanced Configuration](4-advanced.md).

## Launching your Naptha Node

Launch the node using:

```bash
bash launch.sh
```

For more details on ensuring the node launched successfully, checking the logs and troubleshooting you can check out the relevant readme files for [docker](2-docker.md) and [systemd/launchd](3-systemd.md).

## Stopping your Naptha Node

To stop the node, you can use:

```bash
bash docker-ctl.sh down
```

## Need Help?

- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI)

## Interested in Contributing?

- Check out our guide for [contributing to the Naptha Node](https://docs.naptha.ai/Contributing/infrastructure-contributor)

:::info
Have an idea of a new service that you would like to add to the Naptha Node? Get in touch at [team@naptha.ai](mailto:team@naptha.ai)
:::

## Next Steps

- Ensure the node launched successfully, check the logs and troubleshoot using [docker](2-docker.md) or [systemd/launchd](3-systemd.md)