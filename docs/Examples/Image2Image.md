# Image2Image

### 1. Download​
Start by cloning the `image2image` repository from our GitHub:
```bash
git clone https://github.com/NapthaAI/image2image && cd image2image
```

### 2. Install
```bash
poetry install
```

### 3. Store Image
```bash
naptha write_storage -i ./files/output.png
```

### 4. Run
```bash
naptha run image_to_image -p "prompt='snowy mountains; digital art; realistic' input_dir=<folder_id>"
```

### 5. Get Image
```bash
naptha read_storage -id <save_folder_id>
```
