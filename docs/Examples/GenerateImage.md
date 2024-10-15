# Generate Image

### 1. Download​
Start by cloning the `generate_image` repository from our GitHub:
```
git clone https://github.com/NapthaAI/generate_image.git && cd generate_image
```

### 2. Install
```
poetry install
```

### 3. Run
```bash
naptha run generate_image -p "prompt='wolf running through a field'"
```

### 4. Store
Copy the folder ID and use it like this:
```bash
naptha read_storage -id <folder_id>
```
That will put the image here: `./files/output.png`

## [Next Step](/Examples/Image2Image)
Use that image for the `image_to_image` agent...
