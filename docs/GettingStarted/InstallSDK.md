# Install Naptha SDK

The [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) is a Python library that allows you to interact with the Naptha ecosystem, such as the Naptha Hub and Naptha Nodes (for deploying agents and other modules, and acessing inference and storage). It can be used in Naptha Modules, and other components with other agent frameworks like CrewAI. 

You can install the SDK using PyPI or from source.

## Install using PyPI

```bash
pip install naptha-sdk
```

## Create a User Account for using the Naptha Hub and Naptha Nodes

You can create an account on the Naptha Hub (and generate your ```PRIVATE_KEY```) using the Naptha CLI:

```bash
naptha signup
```
:::info
This command will prompt you to create an account by entering a username and password. It also automatically generates a private key and stores it in your .env file.
:::

## Configure Environmental Variables

### Configure ```NODE_URL```
Choose whether you want to interact with a *local* or *hosted* Naptha node.

#### Local Node
For a local node, set ```NODE_URL=http://localhost:7001``` in the .env file.

#### Hosted Node
To use a hosted node, set e.g. ```NODE_URL=https://node.naptha.ai``` or ```NODE_URL=https://node2.naptha.ai``` in the .env file.


## Install from Source

To install from source, follow these steps:

1. Install Poetry with pipx
2. Install Naptha SDK
3. Setup dev environment

### 1. Install Poetry with pipx

Naptha uses a Python dependency management tool called Poetry. Learn more about Poetry in their official [docs](https://python-poetry.org/docs). Run this command:

```bash
pipx install poetry
```

> Poetry should always be installed in a dedicated virtual environment to isolate it from the rest of your system.

### 2. Clone Naptha SDK

Clone the Repository and navigate to the SDK directory:

```bash
git clone https://github.com/NapthaAI/naptha-sdk.git && cd naptha-sdk
```

Install the dependencies using Poetry:

```bash
poetry install
```

Activate the virtual environment:

```bash
source .venv/bin/activate
```

Next, create a copy of the .env file:

```bash
cp .env.example .env
```

#### Configure Variables

Choose whether you want to interact with a local Naptha node or a hosted Naptha node. For a local node, set ```NODE_URL=http://localhost:7001``` in the .env file. To use a hosted node, set ```NODE_URL=http://node.naptha.ai:7001``` or ```NODE_URL=http://node1.naptha.ai:7001```.


To check the installation, run:

```bash
naptha
```

## Need Help?

- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI)

