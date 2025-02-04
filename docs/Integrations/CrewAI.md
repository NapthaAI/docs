
# CrewAI

[CrewAI](https://docs.crewai.com/introduction) is a framework for orchestrating autonomous AI agents with specialized roles, tools, and goals.

When running a Crew, all of the agents run on the same device, usually using the same LLM. Using CrewAI together with Naptha allows you to run your CrewAI agents on different devices, while still being able to cooperate with each other.

## Steps to run CrewAI agents on Naptha

In this guide, we will show you how to automatically convert examples from the [CrewAI examples repository](https://github.com/crewAIInc/crewAI-examples) to run on Naptha. In particular, we will show you how to run the [Stock Analysis](https://github.com/crewAIInc/crewAI-examples/tree/main/stock_analysis) example. 

You can checkout out the Naptha fork of the CrewAI examples repository to see:

1. The [decorated agent functions](https://github.com/NapthaAI/crewAI-examples/blob/main/stock_analysis/src/stock_analysis/crew.py#L18)
2. The [agent module](https://github.com/NapthaAI/crewAI-examples/tree/main/stock_analysis/agent_pkgs/financial_agent) resulting from the conversion

### Prerequisites

* Python `>= 3.10, <= 3.13`
* Poetry package manager

### 1. Add Naptha SDK

Since the CrewAI examples use poetry, we will need to add the Naptha SDK to the `pyproject.toml` file.

```toml
[tool.poetry.dependencies]
naptha-sdk = {git = "https://github.com/NapthaAI/naptha-sdk"}
```

### 2. Install dependencies:

Execute via CLI and enter the environment:

```bash
poetry install
poetry shell
```

### 3. Copy the `.env.example` file

The CrewAI example has an `.env.example` file, so we will copy it to `.env`.

```bash
cp .env.example .env
```

And add the following variables to the `.env` file:

```
HUB_URL=ws://node.naptha.ai:3001/rpc
NODE_URL=http://node.naptha.ai:7001
```

:::info
These variables are used to choose which Naptha Hub to connect to, and which Naptha Node to orchestrate the CrewAI agents.
:::

### 4. Add your Naptha Hub credentials

If you don't have a Naptha account, you can sign up for one by running the following command:

```bash
naptha signup
```

Or you can add your credentials manually to the `.env` file.

```
HUB_USERNAME=<your_naptha_hub_username>
HUB_PASSWORD=<your_naptha_hub_password>
```

#### 5. Import Naptha SDK

Put this in your main Python file: `stock_analysis/crew.py`:

```python
from naptha_sdk.client.naptha import agent as naptha_agent
```

*We recommend importing as `naptha_agent` to avoid naming conflicts.*

#### 6. Decorate

Label the agent functions that you would like to run on different devices:

```python
@agent
@naptha_agent("financial_agent")
def financial_agent(self) -> Agent:
    return Agent(
        ...
    )

...

@agent
@naptha_agent("research_analyst_agent")
def research_analyst_agent(self) -> Agent:
    return Agent(
        ...
    )

...

@agent
@naptha_agent("financial_analyst_agent")
def financial_analyst_agent(self) -> Agent:
    return Agent(
        ...
    )

...

@agent
@naptha_agent("investment_advisor_agent")
def investment_advisor_agent(self) -> Agent:
    return Agent(
        ...
    )

```

#### 7. Convert (automatically)

Process and package decorated functions:

```bash
python src/stock_analysis/crew.py
```

*This creates a folder named `agent_pkgs`, which contains your "Napthafied" agent functions. The SDK translates your code into a format compatible with other agents on Naptha.*

#### 8. Test

```bash
cd agent_pkgs/<agent_name>
```

```bash
poetry install
```

```bash
poetry run python <agent_name>/run.py
```

#### 9. Publish

Enter this command:

```bash
naptha publish
```

*This command publishes all agents in the `agent_pkgs` folder to the Naptha Hub specified in your `.env` file.*

#### 10. Deploy agent

```bash
naptha create <agent_name>
```

*This command deploys the agent to the Naptha Node specified in your `.env` file.*

#### 11. Run deployed agent

```bash
naptha run <agent_name>
```

*Check for your expected output.*

