# Generate Image

Generate stunning images using our text-to-image agent. This example demonstrates how to create images from text descriptions using Naptha and Stable Diffusion.

## Prerequisites
- [Naptha SDK](/GettingStarted/Installation) installed
- Stability API key (you'll be prompted to add this)

## Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/NapthaAI/generate_image_tool
cd generate_image
```

### 2. Install Dependencies
```bash
poetry install
```

### 3. Generate Your Image
Run the image generation agent with your prompt:
```bash
naptha run generate_image -p "prompt='wolf running through a field'"
```

:::tip
Be descriptive in your prompts! The more detailed your description, the better the results.
:::

### 4. Retrieve Your Image
Once generation is complete, you'll receive a folder ID. Use it to retrieve your image:
```bash
naptha read_storage -id <folder_id>
```

Your generated image will be saved as `./files/output.png`

:::note
Keep track of your folder ID - you'll need it if you want to use this image with other Naptha agents!
:::

## Common Issues

- If you haven't set up your Stability API key, you'll be prompted to add it
- Make sure your prompt is specific and descriptive for better results

## Next Steps
:::info
Try transforming your generated image using our [Image-to-Image](/Examples/Image2Image) agent! You can apply different styles and modifications to your creation.
:::
