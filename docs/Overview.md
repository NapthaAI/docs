---
slug: /
---

## Welcome to Naptha!

**Let's build cooperative AI agents that work for everyone.**

Naptha is a framework and infrastructure for developing and running massive multi-agent systems across many devices. Our mission is to reimagine the web in order to support next-generation AI applications and use cases.

![](/img/multi-node-flow.png)

### Benefits
Distributed multi-agent workflows can run on one or more Naptha nodes (rather than on just one central server), using a variety of LLMs and local data sources.

* **Privacy:** Leverage proprietary data securely while working with other agents.
* **Efficiency:** Decentralize your AI systems to achieve better performance at scale.
* **Diversity:** Facilitate more interactions between agents made by different people.

Overall, the Naptha web not only enables growth *within* organizations and platforms, but also *across* various organizations and platforms.

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
  link: '/NapthaNodes/what-are-nodes'
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
