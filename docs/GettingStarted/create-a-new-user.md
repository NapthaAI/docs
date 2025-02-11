---
sidebar_label: 'Create a New User'
---

# Creating Your Naptha User Account

## What is a Naptha User Account?

Your Naptha account is your identity on the Naptha platform. It allows you to:

- Deploy and manage agents, tools, environments and other modules on the Naptha Hub
- Access and interact with the Naptha Hub's features and services

Identity verification with Naptha Nodes is performed using private/public keypairs. Identity verification with the Naptha Hub is performed through a username and password.

This guide will walk you through the process of creating your first Naptha user account step by step.

## 1. Getting Started

### Set up a Virtual Environment

It is good practice to install the SDK in a dedicated virtual environment. We recommend using Poetry to manage your dependencies.

<details>
<summary>Install Poetry</summary>

Learn more about Poetry in their official [docs](https://python-poetry.org/docs).

Install `pipx` (or you can use `pip` instead) and run this command:

```bash
pipx install poetry
```

Verify the installation:

```bash
poetry --version
```
</details>

Create a new poetry virtual environment:

```bash
poetry new test-env
source .venv/bin/activate
pip install naptha-sdk
```

You can also use in-built Python virtual environments:

```bash
python -m venv test-env
source test-env/bin/activate
```

### Install the SDK

You can install the Naptha SDK using:

```bash
pip install naptha-sdk
```


## 2. Creating Your Account

You have two methods to choose from:

### Method 1: Interactive Signup (Recommended)

The simplest way to create a new account is through the interactive CLI. Run the following command:
```bash
naptha signup
```

:::info
This command will prompt you to create an account by entering a username and password. It also automatically generates a private key and stores everything in your .env file.
:::

If successful, you should see a message like this:

```bash
Signing up user: <username> with public key: <public_key>
Your credentials have been updated in the .env file. You can now use these credentials to authenticate in future sessions.
```

### Method 2: Pre-configured Setup
If you prefer setting credentials beforehand:

1. Edit your `.env` file with your desired credentials:

    ```bash
    # .env file
    HUB_USERNAME=your_username
    HUB_PASSWORD=your_password
    PRIVATE_KEY=your_private_key  # Optional - will be generated if not provided
    ```

2. Run signup:
    ```bash
    naptha signup
    ```

## 3. Configure an .env file

#### Configure ```NODE_URL```
Choose whether you want to interact with a *local* or *hosted* Naptha node.

##### Local Node
For a local node, set ```NODE_URL=http://localhost:7001``` in the .env file.

##### Hosted Node
To use a hosted node, set ```NODE_URL=http://node.naptha.ai:7001``` or ```NODE_URL=http://node1.naptha.ai:7001``` in the .env file.

## 4. Best Practices

### Security
- **Protect Your Private Key**
   - Never share your private key
   - Back up your `.env` file
   - Use environment variables in production

- **Password Guidelines**
   - Use strong passwords (12+ characters)
   - Mix uppercase, lowercase, numbers, symbols
   - Avoid common words or patterns

### Maintenance
- Keep the SDK updated by fetching the latest version from GitHub or PyPI
- Review registered agents periodically

## 5. Troubleshooting

<details>
<summary>Connection Issues</summary>

If you're having trouble connecting:

1. Check your node URL in `.env`:
    ```bash
    # Local node
    NODE_URL=http://localhost:7001

    # Hosted node
    NODE_URL=https://node.naptha.ai
    ```

2. Check your hub URL in `.env`:
    ```bash
    # Hosted hub
    HUB_URL=wss://hub.naptha.ai
    ```

3. Verify credentials:
    ```bash
    cat .env
    ```
</details>

<details>
<summary>Authentication Issues</summary>

If you're having trouble authenticating:
1. Ensure correct credentials in `.env`
2. Try creating a new account with a different username and password and re-run the signup command:
   
    ```bash
    naptha signup
    ```
</details>

## Next Steps

Once your account is set up, you can:

1. Explore available agents:
```bash
naptha agents
```

2. Run some existing agents:

```bash
naptha run agent:hello_world_agent -p "firstname=sam surname=altman"
```

:::info
You can follow our [Quick Guide to Creating and Publishing Your First Agent Module on Naptha](/Tutorials/module-guide) to create your 
own agent.
:::


## Need Help?
- Join our [Discord Community](https://naptha.ai/naptha-community) and post in the #support channel
- Get help with technical issues on [GitHub](https://github.com/NapthaAI/naptha-sdk/issues)
  