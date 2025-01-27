# 🌟 Naptha Documentation

This repository contains the source code for [docs.naptha.ai](https://docs.naptha.ai), built with Docusaurus.

🔗 Visit our main website at [naptha.ai](https://naptha.ai) to learn more about collaborative AI! ✨


## API Reference Docs

### Setup
From the root of the naptha-sdk repository:

1. Install the documentation generator:
```bash
# https://pdoc3.github.io/pdoc/
pip install pdoc3 
```
2.
```bash
# Generate full documentation
pdoc --html naptha_sdk

# Or, to skip any code parsing errors
pdoc --html --skip-errors naptha_sdk
```

This will create an `html` directory containing the generated documentation.

### Integrate with Docs
Move the generated files to the docs repo `static/api_reference` folder:

N.B It is best to copy only the files with new changes to the static/api_reference folder to preserve the custom documentation formatting/setup.
