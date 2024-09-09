# Architecture

Our stack is made of three things:

* Naptha SDK
* Naptha Nodes
* Naptha Hub

This architecture is designed with principles of modularity, scalability, and flexibility in mind, allowing multi-agent workflows to support a wide range of AI applications on Naptha, from simple local deployments to complex, distributed systems.

### Naptha SDK

The SDK empowers developers to build agentic solutions on the Naptha web. It combines modern software engineering practices (like containerization and message queues) with all the best AI toolkits to create a flexible, scalable platform for AI application development.

The [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) is used for prototyping and running decentralized AI applications, including workflows, agents and multi-agent systems. It also contains a CLI for interacting with Naptha Nodes and the Naptha Hub.

![](/img/naptha-sdk-diagram.png)

### Naptha Nodes

Nodes are where the code of a decentralized AI application executes, i.e., they manage task execution, user verification, and storage operations. Our network supports both HTTP and WebSocket communication protocols, and nodes can interact both directly and indirectly (routed).

There are two types of nodes in our network:

* orchestrators: server, task queue, and database
* workers: local LLM and module manager

### Naptha Hub

The Hub encompasses a registry and storage for modules, along with registries for nodes and tasks. This platform handles user authentication and data management, and it provides methods for listing and managing nodes, modules, tasks, and proposals. Also, it interacts with a SurrealDB database for data persistence.
