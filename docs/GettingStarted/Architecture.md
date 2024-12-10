# Architecture

Our tech stack is made of three things:

* Naptha SDK
* Naptha Nodes
* Naptha Hub

This architecture is designed with principles of modularity, scalability, and flexibility in mind. Naptha enables distributed multi-agent systems to grow and support a wide range of AI applications.

### Naptha SDK

Our toolkit empowers developers to build agentic solutions on the Naptha web, infrastructure for decentralized AI.

The [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) is used for prototyping and running Ai agents and multi-agent workflows. It also contains a CLI for interacting with Naptha Nodes and the Naptha Hub.

![](/img/naptha-sdk-diagram.png)

### Naptha Nodes

Nodes are where the code of a decentralized AI application executes, i.e., they manage task execution, user verification, and storage operations. Our network supports both HTTP and WebSocket communication protocols. Nodes can interact both directly and indirectly (routed).

There are two types of nodes in our network:

* **Orchestrators:** server, task queue, and database
* **Workers:** local LLM and module manager


:::info
Our [node repository](https://github.com/NapthaAI/node) demonstrates how we build and scale multi-agent systems. While currently private, we plan to open source it in early 2025.

Want early access? [Join our Discord](https://naptha.ai/naptha-community).
:::

### Naptha Hub

The Hub involves a registry and storage for modules, along with registries for nodes and tasks. This platform handles user authentication and data management, and it provides methods for listing and managing nodes, modules, tasks, and proposals. Also, it leverages SurrealDB for data persistence.
