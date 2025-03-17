# Install Naptha SDK

## Steps
1. Install Poetry
2. Install Naptha SDK
3. Setup dev environment

## Guide
### 1. Install Poetry with pipx
:::info
Naptha uses a Python dependency management tool called Poetry. Learn more about Poetry in their official [docs](https://python-poetry.org/docs).

> Poetry should always be installed in a dedicated virtual environment to isolate it from the rest of your system.
:::

##### Run this command:
```bash
pipx install poetry
```

Verify the installation:
```bash
poetry --version
```

### 2. Install Naptha SDK
The best place to start is our [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) code base on GitHub. Follow these steps to install it from source:

#### Clone the Repository
```bash
git clone https://github.com/NapthaAI/naptha-sdk.git && cd naptha-sdk
```

#### Install Dependencies
```bash
poetry install  # This may take a few minutes
```

#### Activate Environment
```bash
eval $(poetry env activate)
```

### 3. Setup Dev Environment
Next, create a copy of the .env file:

```bash
cp .env.example .env
```

### 4. Sign Up and Configure Environment Variables
You can create an account on the Naptha Hub (and generate your ```PRIVATE_KEY```) using the Naptha CLI:

```bash
naptha signup
```
:::info
This command will prompt you to create an account by entering a username and password. It also automatically generates a private key and stores it in your .env file.
:::


<!-- Copy the generated private key into your .env file:
```bash
PRIVATE_KEY=your_generated_key_here
NODE_URL=your_chosen_node_url
``` -->

#### Configure ```NODE_URL```
Choose whether you want to interact with a *local* or *hosted* Naptha node.

##### Local Node
For a local node, set ```NODE_URL=http://localhost:7001``` in the .env file.

##### Hosted Node
To use a hosted node, set ```NODE_URL=https://node.naptha.ai``` or ```NODE_URL=https://node1.naptha.ai``` in the .env file.

### All Systems Go!
You can check your installation by running:

### Troubleshooting

<details>
<summary>Common issues and solutions</summary>

1. **Poetry installation fails**
   ```bash
   python -m pip install --user pipx
   python -m pipx ensurepath
   ```

2. **Dependencies conflict**
   ```bash
   poetry env remove python
   poetry install --no-cache
   poetry env use python3.11
   ```

3. **Node connection issues**
   - Verify your internet connection
   - Check if the selected node is operational
   - Ensure your .env file is properly configured

</details>

### Next Steps
- Read our [Quick Start Guide](./NapthaCLI) on using the Naptha CLI
- Explore [Example Projects](../Examples/)
- Join our [Discord Community](https://naptha.ai/naptha-community)
