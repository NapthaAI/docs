# Generate Image

Generate stunning images using our text-to-image tool module. This tool demonstrates how to create images from text descriptions using Naptha and Stable Diffusion and can be used independently or as part of a multi-agent system.

## Prerequisites
- [Naptha SDK](/GettingStarted/Installation) installed
- Stability API key (you'll be prompted to add this)

## Quick Start

### 1. Run as a Tool Module
You can run the image generation tool directly:
```bash
naptha run tool:generate_image_tool -p "tool_name='generate_image_tool', tool_input_data='expansive landscape rolling greens with gargantuan yggdrasil, intricate world-spanning roots towering under a blue alien sky, masterful, ghibli'"
```

### 2. Run via an Agent
Use the Generate Image Agent which wraps the tool with additional capabilities:
```bash
naptha run agent:generate_image_agent -p "prompt='expansive landscape rolling greens with gargantuan yggdrasil, intricate world-spanning roots towering under a blue alien sky, masterful, ghibli'" --tool_nodes "node.naptha.ai"
```

:::tip
Be descriptive in your prompts! The more detailed your description, the better the results.
:::

