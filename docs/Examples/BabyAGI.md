# BabyAGI

[BabyAGI](https://github.com/yoheinakajima/babyagi) was one of the first multi-agent systems that used LLMs for performing useful tasks. It makes use of several different types of agents, such as a task creation agent and an execution agent, as shown in the diagram below.

![BabyAGI Architecture](/img/babyagi.png)

However, here's Yohei (creator of BabyAGI) admitting that [BabyAGI isn't a true multi-agent system](https://x.com/yoheinakajima/status/1781183534998380576) since the agents use the same LLM and code base, and run on the same server. 

Using the Naptha SDK and node infrastructure, we implemented BabyAGI as a true multi-agent system for the first time. You can check out a demo video of this multi-node workflow [here](https://www.youtube.com/watch?v=nzV04zOA0f0).

<iframe width="560" height="315" src="https://www.youtube.com/embed/nzV04zOA0f0" title="BabyAGI Multi-Node Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisities

Make sure you have the Naptha SDK [installed](/GettingStarted/Installation). 

## Modules Used

The BabyAGI multi-node workflow is made up of the following components, which you can find on the Naptha GitHub:
| Module | Description | Repository |
|--------|-------------|------------|
| Orchestrator Flow | Multi-agent task solving across a network of multiple nodes. | [GitHub](https://github.com/NapthaAI/babyagi) |
| Task Initiator | BabyAGI task initiator agent. | [GitHub](https://github.com/NapthaAI/babyagi_task_initiator) |
| Task Executor | BabyAGI task executor agent. | [GitHub](https://github.com/NapthaAI/babyagi_task_executor) |
| Task Finalizer | BabyAGI task finalizer agent. | [GitHub](https://github.com/NapthaAI/babyagi_task_finalizer) |


## Run

You can run the BabyAGI flow from the SDK using the following command:

```bash
naptha run orchestrator:babyagi -p "objective='Research the history of football'" --agent_nodes "node.naptha.ai,node1.naptha.ai"
```

### Configuration Breakdown:
- `objective`: Your desired research or task objective
- `agent_nodes`: Comma-separated list of agent node URLs

This runs the flow across three nodes in total - one orchestrator node (whichever you have set as the ```NODE_URL``` in the .env file of the Naptha SDK), and two agent nodes (that you have set using the ```--agent_nodes``` flag).

:::tip
Start with simple objectives to understand the workflow, then gradually increase complexity as you become familiar with the system.
:::
