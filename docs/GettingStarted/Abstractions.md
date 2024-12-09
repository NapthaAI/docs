## Abstractions

Naptha provides several key abstractions to help you build powerful distributed multi-agentsAI applications. Let's explore each component:

### Agents Modules

Agents are autonomous entities that can perform tasks using:

* **System Prompts** - Define the agent's personality and core behaviors
* **Tools/Skills** - Capabilities that agents can use to interact with external systems
* **Memory** - Contextual storage enabling agents to maintain state and learn from interactions

[Learn more about Agents →](/NapthaModules/agents)

### Multi-Agent Workflows / Protocols

Coordinate multiple agents to solve complex tasks through defined interaction patterns and workflows. Perfect for:
- Task decomposition
- Parallel processing
- Multi-agent collaboration


### Environments:

Environments in Naptha provide the essential infrastructure that powers multi-agent interactions. They serve as the shared operational space where agents can:

- Exchange information seamlessly
- Maintain persistent state across executions  
- Access shared resources and context
- Coordinate complex workflows


Interact with the Environment Hub
You can also use the CLI to explore available environments that you can use with orchestrators:

```bash
naptha environments
```
