# Installation

1. Install Poetry with pipx
2. Install Naptha SDK
3. Setup dev environment

## 1. Install Poetry with pipx
Naptha uses a Python dependency management tool called Poetry. Learn more about Poetry in their official [docs](https://python-poetry.org/docs).

> Poetry should always be installed in a dedicated virtual environment to isolate it from the rest of your system.

##### Run this command:
```bash
pipx install poetry
```

## 2. Install Naptha SDK
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

## 3. Setup Environment
Next, create a copy of the .env file:

```bash
cp .env.example .env
```
### Configure Variables
You will need to store a private key in your .env file. Generate one using the Naptha CLI tool.

##### Run this command:
```bash
naptha user
```

Then, copy and paste the output into your .env file, like this:

```PRIVATE_KEY=<your-private-key>```

## All Systems Go!
You can check your installation by running:

```bash
naptha
```
