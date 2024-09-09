# Installation

1. Install Poetry with pipx
2. Install Naptha SDK
3. Setup dev environment

## 1. Install Poetry with pipx
Naptha uses a Python dependency management tool called Poetry. Learn more about Poetry in their official [docs](https://python-poetry.org/docs).

##### Run this command:
```bash
pipx install poetry
```

> Poetry should always be installed in a dedicated virtual environment to isolate it from the rest of your system.

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
To set up a ```PRIVATE_KEY``` in your environment, first **generate one by  the Naptha CLI tool to enter this command: ```naptha user```

Then, copy and paste the value into the .env file.

## All Systems Go!
To check the installation, run:

```bash
naptha
```
