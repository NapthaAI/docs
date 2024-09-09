# Installation

1. Install Poetry
2. Clone Naptha SDK
3. Install dependencies with Poetry
4. Setting up environment variables
5. Install Naptha Node (optional)

## Prerequisities

### Install Poetry

Naptha uses this Python dependency management tool. Learn more about Poetry in their official [docs](https://python-poetry.org/docs/#installing-with-the-official-installer).

##### Run this command:
```bash
curl -sSL https://install.python-poetry.org | python3 -
export PATH="/home/$(whoami)/.local/bin:$PATH"
```

## Install Naptha SDK

The best place to start is our GitHub repository for the [Naptha SDK](https://github.com/NapthaAI/naptha-sdk). Follow these steps to install it from source:

```bash
git clone https://github.com/NapthaAI/naptha-sdk.git
cd naptha-sdk
poetry install
poetry shell
```

Next, create a copy of the .env file:

```bash
cp .env.example .env
```

You will need to add a value to ```PRIVATE_KEY``` in .env. You can generate and output one to the commandline using ```naptha user```. Then copy and paste the value into the .env file.

To check the installation, run:

```bash
naptha
```
