---
title: List of Tutorials
---

# Tutorials


Learn how to build and deploy your own modules on Naptha with our tutorial collection.

import CardGrid from '@site/src/components/CardGrid';

export const tutorialCards = [
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
  }
];

<CardGrid cards={tutorialCards} /> 