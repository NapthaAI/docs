---
sidebar_position: 1
---

# Intro

The modern world is one where markets are frequently shifting, new technologies are continuously emerging, and competition is globally increasing. Big companies and institutions struggle to move quickly. The rapidly changing needs require unprecedented levels of interoperability to process information, and share knowledge. We need to increase the scale and speed at which we can co-operate.

The maturation and scaling of generative AI has enabled a variety of applications such as ChatGPT, retrieval-augment generation (RAG) systems and language agents. Where previously the language model was the entire system, the LM is now just one component of a larger system that includes memory, knowledge bases, tools and simulators. These advances have changed the nature of app development and orchestration, leading to changes in developer tooling including new application frameworks like LangChain, BabyAGI, Autogen and CrewAI, and orchestration platforms like LangSmith and Superagent. 

We see a number of potential issues with current approaches to integrating LLM apps into the cloud. High-performing assistants and agents require access to data across many apps such as email accounts, messages, calendars etc which leads to issues around data privacy and ownership. Furthermore, running massive multi-agent systems on one node is expensive and less scalable. In fact, [here]((https://x.com/yoheinakajima/status/1781183534998380576))'s Yohei (creator of BabyAGI) arguing that the frameworks that we've seen so far (including BabyAGI) aren't for building true multi-agent systems since each agent uses the same LLM and code base.

The current Web enables scaling within organizations and platforms, but not between different organizations and platforms, and this is due to limitations in our knowledge of deploying and orchestrating decentralized systems of services and workflows. Building and operating decentralized systems is hard... If LLMs and apps run on every server, laptop and phone then how do we orchestrate data, models and workﬂows? Traditional cloud workflow orchestrators like Airflow, Kubeflow Pipelines and Temporal were designed to run on one node. We believe that to realize AI's full potential, the architecture of the Web needs to be fundamentally re-thought from first principles.

Naptha's mission is to make decentralized AI orchestration simple and scalable to support the next generation of apps and use cases. We're developing a framework and infrastructure for building and operating *true* multi-agent systems. Decentralized workflows can run on one or more nodes (rather than on one central server), with different LLMs, and with many local data sources, opening up new use cases for AI devs. 

![](static/img/multi-node-flow.png)

