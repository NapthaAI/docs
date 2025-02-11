---
sidebar_label: 'Module Builder'
---

# Contributing as a Module Builder

Modules are the fundamental building blocks of Naptha multi-agent applications. This guide will help you become a module builder in the Naptha community through these steps:

1. Understand Naptha modules
2. Run existing modules
3. Create your first module
4. Get funded for module development

## Understand Naptha Modules

Naptha supports seven distinct module types:

- **Agent Modules**: Core AI agents that perform specific tasks
- **Agent Orchestrator Modules**: Coordinate multiple agents working together
- **Environment Modules**: Provide the context and workspace for agents
- **Tool Modules**: Equip agents with specific capabilities
- **Persona Modules**: Define agent personalities and behaviors
- **Knowledge Base Modules**: Supply agents with specialized information
- **Memory Modules**: Enable agents to maintain context and learn from interactions

### Who Should Build Which Modules?

**AI Engineers**
- Create specialized agent modules for tasks like:
  - Natural language processing
  - Code generation and analysis
  - Data analysis and visualization
  - Content creation and editing
- Build orchestrators that:
  - Coordinate complex multi-agent workflows
  - Handle task decomposition and delegation
  - Manage agent communication patterns
  - Optimize resource allocation between agents
  - Monitor and debug agent interactions
- Design memory modules that:
  - Implement different types of memory and architectures
  - Optimize memory storage and access
  - Enable long-term learning capabilities

**RL Researchers**
- Develop environment modules for specific use cases and research scenarios
- Create training environments with custom reward functions and state spaces
- Design multi-agent environments for studying emergent behaviors
- Build evaluation environments to benchmark agent performance
- Implement environments that interface with simulation platforms

**Application Developers**
- Create tool modules to extend agent capabilities:
  - Build API integrations with external services
  - Create data scraping, processing and transformation tools
- Build knowledge base modules to provide domain expertise:
  - Structure and organize domain-specific data
  - Create specialized databases and data stores
  - Build search and retrieval systems
  - Develop knowledge graph implementations
  - Create ontologies and taxonomies for specific domains

**AI Users**
- Create persona modules to customize agent behavior and personality:
  - Export your social media data (X/Twitter, LinkedIn, etc.)
  - Define custom traits and behavioral parameters to reflect your personality
  - Test and validate the persona with sample conversations
  - Enable AI agents to represent you in automated interactions

  :::tip
  Use our [interactive tutorial](/docs/Tutorials/quick-persona-guide.md) to transform your data into a persona module.
  :::

For comprehensive information about module types, see the [Naptha Modules Overview](/docs/NapthaModules/0-overview.md).

## Run Existing Modules

1. Start with the [Naptha SDK README](https://github.com/NapthaAI/naptha-sdk/)
2. Explore examples of modules in the [Examples section](/docs/Examples/index.md) of the docs.
3. Browse available modules on Naptha Hub using these commands:
   ```bash
   naptha agents
   naptha orchestrators
   naptha environments
   naptha tools
   naptha personas
   naptha knowledge bases
   naptha memories
   ```

:::info
Browse our [Github repositories](https://github.com/orgs/NapthaAI/repositories?type=all) for module examples and source code.
:::

## Create your first module

### Choose your preferred approach

To build your first module manually, you can:

1. Follow the [module template README](https://github.com/NapthaAI/module_template) 
2. Follow our interactive tutorial ["Your First Agent Module"](/docs/Tutorials/module-guide.md) in the docs.

To automatically convert an existing agent application from frameworks like CrewAI, you should:

1. Read the documentation on [Naptha Decorators](/Integrations/Decorators) 
2. Inspect examples of decorated agents e.g. [crewAI-examples](https://github.com/NapthaAI/crewAI-examples)

To get up to speed with building more complex applications, composed of many modules, check out the tutorials in the Naptha Learn Hub.

:::info
Get Involved:
- Check out modules that we need via open issues with the module label on the [module contributor board](https://github.com/orgs/NapthaAI/projects/3/views/1)
- Join our weekly module developer calls (link in our [calendar](https://calendar.google.com/calendar/u/0?cid=Y19lZjlmM2Y3YmE4YmQ3OWE2MjhkMzBiNjIxZDllNTY0ZWIzZjQxNjA0MjNiZmFmNzlkMGU3NGVhMTQyZGU4YTQ5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20))
:::

### Make use of Naptha Node APIs

Modules can make use of various APIs from the Naptha Nodes:

1. Modules API
2. Inference API
3. Storage API

1. **Modules API**: Make calls to modules running on the same or different Naptha Nodes, using the `Agent`, `Orchestrator`, `Environment`, `Tool`, `KB`, and `Memory` module classes.
2. **Inference API**: Make inference calls to a variety of open source and proprietary LLMs via Naptha Nodes with a standard interface for requests and tool calls using the `InferenceClient` class.
3. **Storage API**: Persist and retrieve data with a variety of storage solutions on Naptha Nodes, including databases, file systems and IPFS using the `StorageProvider` class.

### Testing Your Module

To test the modules:

1. Local Testing: Validate functionality in your development environment
2. Production Testing: Deploy and verify on a hosted Naptha node

## Get funded for module development

We provide grants for advanced module development, particularly focusing on:
- Complex multi-agent orchestrations
- Sophisticated environment modules
- Novel agent interaction patterns

:::note
Simple agent, tool, or persona modules typically don't qualify for funding. We prioritize innovative, complex implementations.
:::

:::info
View successful funded projects in our [Discord community](https://naptha.ai/naptha-community) #projects channel.
:::

Have an innovative module idea? Contact us at [team@naptha.ai](mailto:team@naptha.ai)