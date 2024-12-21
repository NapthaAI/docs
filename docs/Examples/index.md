---
title: List of Examples
---

# Examples

Explore our collection of example projects and workflows to help you get started with Naptha.

import CardGrid from '@site/src/components/CardGrid';

export const exampleCards = [
  {
    title: 'Hello World',
    description: 'Get started with a simple Hello World agent',
    icon: '👋',
    link: 'Examples/HelloWorld'
  },
  {
    title: 'BabyAGI',
    description: 'Run a true multi-agent BabyAGI implementation',
    icon: '🤖',
    link: 'Examples/BabyAGI'
  },
  {
    title: 'Generate Image',
    description: 'Create AI-generated images from text descriptions',
    icon: '🎨',
    link: 'Examples/GenerateImage'
  },
  {
    title: 'Image2Image',
    description: 'Transform and modify existing images with AI',
    icon: '🖼️',
    link: 'Examples/Image2Image'
  },
  {
    title: 'Multiplayer Chat',
    description: 'Experience multi-agent chat across different nodes',
    icon: '💬',
    link: 'Examples/MultiplayerChat'
  },
];

<CardGrid cards={exampleCards} /> 