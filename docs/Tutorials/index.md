---
title: List of Tutorials
---

# Tutorials


Learn how to build and deploy your own modules on Naptha with our tutorial collection.

import CardGrid from '@site/src/components/CardGrid';

export const tutorialCards = [
  {
    title: 'Create a New User',
    description: 'Learn how to create a new user on Naptha',
    icon: '👤',
    link: 'Tutorials/create-a-new-user'
  },
  {
    title: 'Your First Agent Module',
    description: 'Create and publish your first Naptha agent module',
    icon: '🛠️',
    link: 'Tutorials/module-guide'
  },
  {
    title: 'Create Your First AI Persona',
    description: 'Learn how to create and use persona modules in 5 minutes',
    icon: '🎭',
    link: 'Tutorials/quick-persona-guide'
  },
  {
    title: 'Create Your First Tool Module',
    description: 'Learn how to create and use tool modules in 5 minutes',
    icon: '🛠️',
    link: 'Tutorials/tool-module-tutorial'
  }
];

<CardGrid cards={tutorialCards} /> 