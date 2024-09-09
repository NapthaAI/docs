# BabyAGI

[BabyAGI](https://github.com/yoheinakajima/babyagi) was one of the first multi-agent systems that made use of LLMs for performing useful tasks. It makes use of several different types of agents, such as a task creation agent and an execution agent, as shown in the original image below.

![](/img/babyagi.png)

However, here's Yohei (creator of BabyAGI) admitting that [BabyAGI isn't a true multi-agent system]() since the agents use the same LLM and code base, and run on the same server. 

Using the Naptha SDK and node infrastructure, we implemented BabyAGI as a true multi-agent system for the first time. You can check out a demo video of this multi-node workflow [here](https://www.youtube.com/watch?v=nzV04zOA0f0). 

## Prerequisities

Make sure you have the Naptha SDK installed. 

## Modules Used

The BabyAGI multi-node workflow is made up of the following components, which you can find on the Naptha HuggingFace:

* [BabyAGI Orchestrator Flow](https://huggingface.co/NapthaAI/babyagi/tree/v0.1)
* [BabyAGI Task Initiator](https://huggingface.co/NapthaAI/babyagi_task_initiator/tree/v0.1)
* [BabyAGI Task Finalizer](https://huggingface.co/NapthaAI/babyagi_task_finalizer/tree/v0.1)
* [BabyAGI Task Executor](https://huggingface.co/NapthaAI/babyagi_task_executor/tree/v0.1)

## Run

You can run the BabyAGI flow from the SDK using the following command:

```bash
naptha run babyagi -p "objective='Research the history of football'" --worker_nodes "http://node.naptha.ai:7001,http://node1.naptha.ai:7001"
```

This will run the flow across three different nodes in total - one orchestrator node (whichever you have set as the ```NODE_URL``` in the .env file of the Naptha SDK), and two worker nodes (that you have set using the ```--worker_nodes``` flag).