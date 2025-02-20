---
slug: /
---

## Welcome to Naptha!

**Let's build a Web of Agents and unlock a new era of AI.**

The dominant world view is that AGI will be a single, monolithic system that can be deployed on a single node. We believe that AGI is much more likely to be a network of billions or trillions of heterogeneous agents, competing and cooperating with each other to achieve common goals.

Naptha is a framework and infrastructure for developing and running multi-agent systems at scale with heterogeneous models, architectures and data. Agents and other modules can run on separate devices, while still interacting over the network. Our mission is to reimagine the internet - to bring forth the Web of Agents - by enabling the next-generation of AI applications and use cases.

Overall, the Naptha web not only enables growth *within* organizations and platforms, but also *across* various organizations and platforms.

![](/img/multi-node-flow.png)

### Benefits

Distributed multi-agent workflows can run on one or more Naptha nodes (rather than on just one central server), using a variety of LLMs and local data sources.

The Web of Agents can bring about increased performance compared to monolithic systems through:

* **Heterogeneity:** Diversity in model ensembles contributes to improved overall performance [^1]. There is a phenomenon called "collaborativeness" where LLMs tend to generate better responses when given outputs from other models even if those other models are less capable [^2]. Diversity of architectures, knowledge, and tools also improves performance [^3].
* **Scalability:** Brute-force ensemble of smaller LLMs can achieve comparable or superior performance to larger LLMs [^4]. Just as increasing neurons in a neural network leads to emergent capabilities, increasing agents in a multi-agent system may too enablle emergent capabilities [^5].

Furthermore, agents running across a network of nodes can lead to enhanced:

* **Privacy:** Leverage proprietary data securely while working with other agents.
* **Safety:** If one agent fails or goes rogue, the system remains robust.

Scaling multi-agent systems is equivalent to scaling coordination in society. Understanding multi-agent systems at scale will allow us to unlock levels of coordination as a society that were never before possible. 

Come and join us to bring about an ecosystem of trillions of agents!

[^1]: [Diversity of Thought Elicits Stronger Reasoning Capabilities in Multi-Agent Debate Frameworks](https://arxiv.org/abs/2410.12853)
[^2]: [Mixture-of-Agents Enhances Large Language Model Capabilities](https://arxiv.org/abs/2406.04692)
[^3]: [Internet of Agents: Weaving a Web of Heterogeneous Agents for Collaborative Intelligence](https://arxiv.org/abs/2407.07061)
[^4]: [More Agents is all you Need](https://arxiv.org/abs/2402.05120)
[^5]: [Scaling Large-Language-Model-based Multi-Agent Collaboration](https://arxiv.org/abs/2406.07155)

import CardGrid from '@site/src/components/CardGrid';

export const featureCards = [
  {
    title: 'Quickstarts',
    description: 'Get started in 2 minutes with our example agents and workflows',
    icon: '🚀',
    link: 'Examples/HelloWorld'
  },
  {
    title: 'Naptha Modules',
    description: 'Build and deploy agents, tools, environments, and more',
    icon: '🤖',
    link: 'NapthaModules/overview'
  },
  {
  title: 'Naptha Nodes',
  description: 'Run your own node and join the decentralized AI network',
  icon: '🌐',
  link: 'NapthaNodes/quickstart'
  },
  {
    title: 'Naptha Inference',
    description: 'Access AI model inference on Naptha Nodes',
    icon: '🧠',
    link: 'NapthaInference/inference'
  },
  {
    title: 'Naptha Storage',
    description: 'Manage data with our flexible storage solutions',
    icon: '💾',
    link: 'NapthaStorage/overview'
  },
  {
    title: 'Documentation',
    description: 'Explore our comprehensive guides and references',
    icon: '📚',
    link: '/GettingStarted/Installation'
  }
];

<CardGrid cards={featureCards} />
