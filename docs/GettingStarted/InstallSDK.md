# Install Naptha SDK

The [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) is a Python library that allows you to interact with the Naptha ecosystem, such as the Naptha Hub and Naptha Nodes (for deploying agents and other modules, and acessing inference and storage). It can be used in Naptha Modules, and other components with other agent frameworks like CrewAI. 

## 🧩 Installing the SDK

You can install the SDK using PyPI or from source. We recommend using `uv` as a package manager. Follow the installation instructions [here](https://docs.astral.sh/uv/getting-started/installation/) to install `uv`.

### Install within an existing project

If you want to install the naptha-sdk as part of an existing project (e.g. [to deploy existing agents from third-party frameworks on the Web of Agents](https://docs.naptha.ai/Integrations/Decorators)), it is good practice to do so within a dedicated virtual environment. If you don't already have a virtual environment, create a new one using `uv`:

```bash
uv init --python ">=3.10,<3.13"
```

Then install the SDK:

```bash
uv add naptha-sdk
source .venv/bin/activate
```

Alternatively, if you have an existing project that doesn't use `uv` you can also install using:

```bash
pip install naptha-sdk
```

### Install from source

If you are a developer contributing to the Naptha SDK, you will want to install from source using:

```bash
git clone https://github.com/NapthaAI/naptha-sdk.git
cd naptha-sdk
uv venv
source .venv/bin/activate
uv pip install .
```

## 🔥 Create a User Account for using the Naptha Hub and Naptha Nodes

Your Naptha account is your identity on the Naptha platform. It allows you to:

- Deploy and run agents, tools, environments and other modules on Naptha Nodes (via a public/private keypair)
- Access and interact with the Naptha Hub's features and services (via a username and password)

The simplest way to create a new account is through the interactive CLI. Run the following command:

```bash
naptha signup
```

:::info
This command will prompt you to create an account by entering a username and password. It also automatically generates a private key and stores it in your .env file.
:::

Or if you have already have set up an identity, edit your `.env` file with your desired credentials:

```bash
# .env file
HUB_USERNAME=your_username
HUB_PASSWORD=your_password
PRIVATE_KEY=your_private_key  # Optional - will be generated if not provided
```

## ⚙️ Configure Environmental Variables

Choose whether you want to interact with a *local* or *hosted* Naptha node. For a local node, set ```NODE_URL=http://localhost:7001``` in the .env file. To use a hosted node, set e.g. ```NODE_URL=https://node.naptha.ai``` or ```NODE_URL=https://node2.naptha.ai``` in the .env file.

## Need Help?

- Join our [Community](https://naptha.ai/naptha-community) and post in the #support channel
- Submit issues on [GitHub](https://github.com/NapthaAI)

