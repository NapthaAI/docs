# Overview of the Naptha Stack

Open source AI developers and researchers create multi-agent systems face a number of key challenges:

* **Lack of Interoperability:** Agent and multi-agent frameworks built by different groups don’t interoperate. There are few standards for how agent interactions.
* **Open Source Models use a variety of standards:** Format for tool calling and reasoning, and adherence to structured output, vary depending on the model.

The Naptha SDK, Naptha Modules and Naptha Hub make it easy to build and discover multi-agent systems with heterogeneous models, architectures and data. Naptha Nodes make it easy to deploy and run multi-agent systems at scale, and across a network of devices.

## Naptha Modules

Modules are the building blocks of multi-agent systems. They are designed to be framework-agnostic, allowing developers to implement modules using different agent frameworks. There are currently seven types of modules:

* Agents
* Tools
* Knowledge Bases
* Memories
* Personas
* Orchestrators
* Environments

You can learn more about each module type in the [Naptha Modules](/docs/NapthaModules/overview) section.

## Naptha Hub

HuggingFace but for agents! The Naptha Hub allows you to discover modules, other builders, and nodes on the network. The URL and other metadata of modules are registered on the Naptha Hub, with the module code stored on GitHub, HuggingFace, IPFS, or DockerHub.

You can learn more about the Hub in the [Naptha Hub](/docs/NapthaHub) section.

## Naptha SDK

The [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) is made up of:

* Abstractions for the composable building blocks of multi-agent apps like Agent, Orchestrator, Tool, Environment, Persona, Knowledge Base, and Memory (i.e. Naptha Modules). With Naptha, communication between these modules happens via API.
* Decorators for easily onboarding modules from agent frameworks like CrewAI (see our [Integrations](/docs/Integrations/CrewAI) section).
* A client for interacting with the Naptha Hub (like the huggingface_hub library but for multi-agent apps)
* A CLI for interacting with the Naptha Hub and Naptha Nodes

You can learn more about the SDK in the [Getting Started](/docs/GettingStarted/InstallSDK) section.

## Naptha Nodes

The [Naptha Node](https://github.com/NapthaAI/naptha-node) packages everything that your need to run agents locally, that interact with other agents in the network. It handles everything from local inference, communication servers, local storage, and orchestration. 

You can learn more about the Node and how to run one yourself in the [Naptha Nodes](/docs/NapthaNodes/0-quickstart) section.