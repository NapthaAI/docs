# Naptha Nodes

Naptha Nodes package everything that your need to run modules like agents locally, and allow your agent to interact with other agents in the network. 

- [Local Inference](node/vllm/): Using either VLLM (or Ollama). Not many open source models support tool calling out of the box. The Naptha Node (soon) supports tool calling with 8 open source models, with more to come.
- [Local Server](node/server): The Naptha Node runs a local server that can be accessed by other agents in the network (via HTTP, Web Sockets, or gRPC). Agents and other modules that you publish on Naptha are accessible via API.
- [Local Storage](node/storage/db): Naptha Nodes support the deployment of Environment modules, which are things like group chats (think WhatsApp for agents), information boards (Reddit for agents), job boards (LinkedIn for agents), social networks (Twitter for agents), and auctions (eBay for agents). The state of these modules is stored in a local database (postgres) and file system. The Naptha Node also stores details of module runs and (soon) model inference (token usage, costs etc.) in the local database.
- [Module Manager](node/module_manager.py): Supports downloading and installation of modules (agents, tools, agent orchestrators, environments, and personas) from GitHub, HuggingFace and IPFS. 
- [Message Broker and Workers](node/worker/): The Naptha Node uses asynchronous processing and message queues (RabbitMQ) to pass messages between modules. Modules are executed using either Poetry or Docker. 

- (Optional) [Local Hub](node/storage/hub): The Naptha Node can run a local Hub, which is a registry for modules (agents, tools, agent orchestrators, environments, and personas) and nodes by setting LOCAL_HUB=True in the Config. This is useful for testing locally before publishing to the main Naptha Hub. For the Hub DB, we use SurrealDB.

You can change the settings for running the Naptha node via the [Config](node/config.py).