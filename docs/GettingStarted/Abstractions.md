## Abstractions

Naptha provides several key abstractions to help you build powerful distributed multi-agentsAI applications. Let's explore each component:

### Agents Modules

Agents are autonomous entities that can perform tasks using:

* **System Prompts** - Define the agent's personality and core behaviors
* **Tools/Skills** - Capabilities that agents can use to interact with external systems
* **Persona Module** - Additional personality traits and characteristics loaded into the system prompt
* **Memory** - Contextual storage enabling agents to maintain state and learn from interactions

```python
#naptha-sdk AgentConfig
class AgentConfig(BaseModel):
    config_name: Optional[str] = "agent_config"
    llm_config: Optional[LLMConfig] = LLMConfig()
    persona_module: Optional[Union[Dict, BaseModel]] = None
    system_prompt: Optional[Union[Dict, BaseModel]] = None
```

:::info Agent Configuration Details
- The `system_prompt` defines core agent behavior
- `llm_config` specifies which language model to use under the hood
- `persona_module` is loaded as a dictionary and merged into the system prompt
- Tools/Skills are currently part of agent modules (moving to separate modules soon)
- Memory system will also become a separate module in future updates
:::

#### Interact with the Agent Hub
You can also use the CLI to explore available agents that you can run on a node:

```bash
naptha agents
```

[Learn more about Agents →](/NapthaModules/agents)



### Multi-Agent Orchestrators

Coordinate multiple agents to solve complex tasks through defined interaction patterns and workflows. Perfect for:
- Task decomposition
- Parallel processing
- Multi-agent collaboration

```python
#naptha-sdk OrchestratorConfig
class OrchestratorConfig(BaseModel):
    config_name: Optional[str] = "orchestrator_config"
    max_rounds: Optional[int] = 5
```

:::info
Builders can then create their own custom OrchestratorConfigs. For example, here is what a custom orchestrator config looks like for [MarketAgents](https://github.com/NapthaAI/market_agent/blob/main/market_agent/orchestrator_config.yaml):

```python
        "orchestrator_config": {
            "config_name": "orchestrator_config_1",
            "num_agents": 10,
            "max_rounds": 2,
            "environment_order": [
                "group_chat",
                "auction"
            ],
            "environment_deployments": [
                {"name": "group_chat"},
                {"name": "auction"}
            ],
            "protocol": "acl_message"
        }
```
:::

#### Interact with the Agent Orchestrator Hub
You can also use the CLI to explore available agent orchestrators that you can run on a network of nodes:

```bash
naptha orchestrators
```

### Environments:

Environments in Naptha provide the essential infrastructure that powers multi-agent interactions. They serve as the shared operational space where agents can:

- Exchange information seamlessly
- Maintain persistent state across executions  
- Access shared resources and context
- Coordinate complex workflows

:::info
Similar to OrchestratorConfig, builders can inherit from the base to create their own custom environment config. Here is an example of the current one used for a MarketAgents module:

```python
{
    "config_name": "groupchat",
    "environment_type": "groupchat",
    "max_rounds": 5,
    "initial_topic": "Initial Market Discussion",
    "sub_rounds": 3,
    "group_size": 5
}
``` 
:::


#### Interact with the Environment Hub
You can also use the CLI to explore available environments that you can use with orchestrators:

```bash
naptha environments
```
