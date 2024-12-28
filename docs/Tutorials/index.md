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
    title: 'Building a Web Interface with Naptha SDK',
    description: 'Create a web interface for the Naptha client SDK using Streamlit',
    icon: '🌐',
    link: 'Tutorials/naptha-sdk-demo'
  },
];

<CardGrid cards={tutorialCards} /> 