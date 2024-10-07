# Installation

## Steps
1. Install Poetry
2. Install Naptha SDK
3. Setup dev environment

## Guide
### 1. Install Poetry with pipx
Naptha uses a Python dependency management tool called Poetry. Learn more about Poetry in their official [docs](https://python-poetry.org/docs).

> Poetry should always be installed in a dedicated virtual environment to isolate it from the rest of your system.

##### Run this command:
```bash
pipx install poetry
```

### 2. Install Naptha SDK
The best place to start is our [Naptha SDK](https://github.com/NapthaAI/naptha-sdk) code base on GitHub. Follow these steps to install it from source:

#### Clone the Repository
```bash
git clone https://github.com/NapthaAI/naptha-sdk.git && cd naptha-sdk
```
#### Install Dependencies
```bash
poetry install
```
#### Activate Environment
```bash
poetry shell
```

### 3. Setup Dev Environment
Next, create a copy of the .env file:

```bash
cp .env.example .env
```
#### Configure ```NODE_URL```
Choose whether you want to interact with a *local* or *hosted* Naptha node.

##### Local
For a local node, set ```NODE_URL=http://localhost:7001``` in the .env file.

##### Hosted
To use a hosted node, set ```NODE_URL=http://node.naptha.ai:7001``` or ```NODE_URL=http://node1.naptha.ai:7001``` in the .env file.

#### Sign Up

You can create an account on the Naptha Hub (and generate a public/private keypair) using the command-line tool:

```bash
naptha signup
```

### All Systems Go!
You can check your installation by running:

```bash
naptha
```
