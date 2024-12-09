# Build Your Own Agent

# Napthaville Tutorial

> Build your own multi-agent simulation inspired by "The Ville" research project.

## Project Overview
This guide walks through creating a small town simulation using Naptha's agent framework. [Github](https://github.com/joonspk-research/generative_agents/tree/main/environment/frontend_server/storage/base_the_ville_n25). You'll learn how to:

Create an Agent by defining its unique persona.
Submit a pull request on GitHub to become a citizen.
Run interactive simulations with generative agents.
Build your own world by customizing our example.

*Based on the ["Generative Agents: Interactive Simulacra of Human Behavior"](https://arxiv.org/abs/2304.03442) research paper.*

### Step 1: Create Your Own Agent
An Agent represents an entity that can be configured to respond to a user's messages using several parameters like model, instructions, and tools.

Example from The Ville:
```json
{
  "name": "Abigail Chen",
  "maze": "the_ville",
  "location": {
    "x": 36,
    "y": 18
  }
}
```

### Step 2: Submit a Pull Request
A Building represents a conversation between a user and one or many Assistants. You can create a Thread when a user (or your AI application) starts a conversation with your Assistant.

### Step 3: Run Simulations
The contents of the messages your users or applications create are added as Message objects to the Thread. Messages can contain both text and files.

### Step 4: Build a New World
Once all the user Messages have been added to the Thread, you can 'Run the Thread' with any Assistant. Creating a Run uses the model and tools associated with the Assistant to generate a response. These responses are added to the Thread as assistant Messages.

### What’s next?
- Deep dive into multi-agent systems with [Naptha SDK](/GettingStarted/SDK)
- Fork this [app template](https://github.com/joonspk-research/generative_agents/tree/main/environment/frontend_server/storage/base_the_ville_n25) via GitHub