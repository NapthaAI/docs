# Image2Image

Transform and modify existing images using our image-to-image module. This example demonstrates how to apply different styles and modifications to your images using Naptha.

## Prerequisites
- [Naptha SDK](/docs/GettingStarted/Installation) installed
- An input image (you can generate one using our [Generate Image](/Examples/GenerateImage) example)

## Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/NapthaAI/image2image
cd image2image
```

### 2. Install Dependencies
```bash
poetry install
```

### 3. Store Your Input Image
Store your input image in Naptha's storage system:
```bash
naptha write_storage -i ./files/output.png
```
:::note
Keep note of the folder ID returned by this command - you'll need it in the next step!
:::

### 4. Transform Your Image
Run the image transformation with your desired style:
```bash
naptha run image_to_image -p "prompt='snowy mountains; digital art; realistic' input_dir=<folder_id>"
```

#### Parameters Explained:
- `prompt`: Describe the style or modifications you want to apply
- `input_dir`: The folder ID from step 3 containing your input image

:::tip
Be specific in your style prompts! For example:
- "watercolor painting; soft colors"
- "cyberpunk style; neon lights"
- "oil painting; impressionist style"
:::

### 5. Retrieve Your Image
Once the transformation is complete, download your modified image:
```bash
naptha read_storage -id <save_folder_id>
```

:::tip
If the transformation isn't quite right, try:
- Adjusting your style prompt to be more specific 
- Using different artistic styles or descriptive terms
:::