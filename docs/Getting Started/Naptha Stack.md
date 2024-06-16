
# Overview of the Naptha Stack

The Naptha stack is made up of the Naptha SDK, Naptha Nodes and the Naptha Hub.

## Naptha SDK

The [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) is used for prototyping and running decentralized AI apps, including workflows, agents and multi-agent systems. It also contains a CLI for interacting with Naptha Nodes and the Naptha Hub.

## Naptha Node

Naptha Nodes are where the code of the decentralized AI apps executes. Naptha Nodes are made up of orchestrator and worker components. The orchestrator is composed primarily of a server, task queue, and database. There are various types of workers, currently package worker and docker worker, which make use of a local LLM and module manager.

![](static/img/architecture-pitch-deck-new.png)

## Naptha Hub 

The Naptha Hub is made up of a registry and storage for modules, a registry for nodes, and a registry for tasks. Currently, we use a centralized database as the registries, and HuggingFace and GitHub for storing the code of Naptha modules. Using on-chain registries and decentralized storage will soon be supported.
