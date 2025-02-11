---
sidebar_label: 'Create a New User'
---

# Creating Your First Naptha User Account

## What is a Naptha User Account?

Your Naptha account is your identity on the Naptha platform. It allows you to:
- Deploy and manage agents, tools, environments and other modules on the Naptha Hub
- Access and interact with the Naptha Hub's features and services

This guide will walk you through the process of creating your first Naptha user account step by step.

<details>
<summary>Prerequisites</summary>

Before we begin, ensure you have:
- Python 3.8 or higher installed
- Poetry package manager (`pipx install poetry`)
- Basic familiarity with command line tools
- Git installed
</details>

## 1. Getting Started

### Install the SDK
First, clone and install the Naptha SDK:
```bash
git clone https://github.com/NapthaAI/naptha-sdk.git
cd naptha-sdk
poetry install
source .venv/bin/activate
cp .env.example .env #set up your environment variables
```

## 2. Creating Your Account

You have two methods to choose from:

### Method 1: Interactive Signup (Recommended)

The simplest way to create a new account is through the interactive CLI. Run the following command:
```bash
naptha signup
```

This will:
- Guide you through username/password creation
- Generate your cryptographic public/private keypair
- Automatically save your credentials to the .env file

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

## 3. Verifying Your Setup

### Check Available Nodes
```bash
naptha nodes
```

### Try a Sample Agent
```bash
naptha run agent:hello_world_agent -p "firstname=sam surname=altman"
```

### Verify Programmatically
You can also verify the new credentials programmatically via the [client SDK](https://pypi.org/project/naptha-sdk/):
```python
from naptha_sdk.client.naptha import Naptha

async def verify_credentials():
    try:
        async with Naptha() as naptha:
            await naptha.hub.signin(os.getenv("HUB_USERNAME"), os.getenv("HUB_PASSWORD"))
            return True
    except Exception as e:
        print(f"Credential verification failed: {str(e)}")
        return False
```

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

## Troubleshooting

<details>
<summary>Connection Issues</summary>

If you're having trouble connecting:

1. Check your node URL in `.env`:
    ```bash
    # Local node
    NODE_URL=http://localhost:7001

    # Hosted node
    NODE_URL=http://node.naptha.ai:7001
    ```

2. Verify credentials:
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

2. Create your own agent:
- Clone the [base template](https://github.com/NapthaAI/module_template?tab=readme-ov-file)
- Follow the template instructions for prototyping, testing and deploying your agent

:::info
You can also follow our [Quick Guide to Creating and Publishing Your First Agent Module on Naptha](/Tutorials/module-guide) to create your 
own agent.
:::


## Need Help?
- Join our [Discord Community](https://naptha.ai/naptha-community)
- Follow us on [Twitter](https://twitter.com/NapthaAI)
- Join us on [Farcaster](https://warpcast.com/naptha)
- Get help with technical issues on [GitHub](https://github.com/NapthaAI/naptha-sdk/issues)
  