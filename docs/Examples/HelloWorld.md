# Hello World

Start your journey with Naptha by running a simple Hello World example. This introductory example demonstrates the basics of running an agent on a Naptha node.

## Prerequisites

Before you begin, ensure you have:
- [Naptha SDK](/GettingStarted/Installation) installed and configured

### Modules Used

This basic, single-node workflow is made of the following component, which you can find on the Naptha GitHub:

* [Hello World](https://github.com/NapthaAI/hello_world_agent)

## Run

You can run this "Hello World" example using the Naptha CLI with the following command:

```bash
# usage: naptha run <agent_name> <agent args>
naptha run agent:hello_world_agent -p "firstname=sam surname=altman"
```

### Configuration Options:
- `firstname`: The first name to use in the greeting
- `surname`: The last name to use in the greeting

:::note
This will run on whichever node you've configured as `NODE_URL` in the .env file of the Naptha SDK.
:::

## Expected Output

The agent will respond with a personalized greeting using the provided name parameters.

:::tip
Try modifying the name parameters to see how the agent responds with different inputs!
:::

## What's Next?

import CardGrid from '@site/src/components/CardGrid';

export const nextStepsCards = [
  {
    title: 'Generate Images',
    description: 'Create AI-generated images using text prompts',
    icon: '🎨',
    link: '/Examples/GenerateImage'
  },
  {
    title: 'Multiplayer Chat',
    description: 'Experience multi-agent interactions in real-time',
    icon: '💬',
    link: '/Examples/MultiplayerChat'
  },
  {
    title: 'Join Our Community',
    description: 'Connect with other Naptha developers and builders',
    icon: '👥',
    link: 'https://naptha.ai/naptha-community'
  }
];

<CardGrid cards={nextStepsCards} />

:::info
This is just the beginning! Each Naptha example builds on these basics to showcase more advanced features of our distributed AI infrastructure.
:::