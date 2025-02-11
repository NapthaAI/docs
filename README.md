[![Website](https://img.shields.io/badge/Visit-naptha.ai-FF4B45?style=flat-square&logo=safari&logoColor=white)](https://naptha.ai/?utm_source=github_docs) [![Discord](https://img.shields.io/badge/Join-Discord-7289DA?style=flat-square&logo=discord&logoColor=white)](https://form.typeform.com/to/Cgiz63Yp?utm_source=github_docs) [![Hugging Face](https://img.shields.io/badge/Hugging%20Face-NapthaAI-ffbc1c?style=flat-square&logo=huggingface&logoColor=white)](https://huggingface.co/NapthaAI)
# 🌟 Naptha Documentation
[![Deploy Docs](https://github.com/NapthaAI/docs/actions/workflows/deploy.yml/badge.svg?branch=main&style=flat-square&logo=github)](https://github.com/NapthaAI/docs/actions/workflows/deploy.yml) 

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
