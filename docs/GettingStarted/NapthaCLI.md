# CLI Usage

### Nodes
See a list of available nodes on the network:
```bash
naptha nodes
```

### Agents
Explore available agents that you can run on a node:
```bash
naptha agents
```
*For each agent, you will see a url where you can check out the code.*

#### Create an agent:
```bash
naptha agents <agent_name> -p "description='about' url='https://github.com/NapthaAI/<agent_name>' type='flow' version='0.1'" 
```

#### Delete an agent:
```bash
naptha agents -d <agent_name>
```

#### Run agents:
Connect with a node and execute a `run.py` script.

##### Format
```bash
naptha run <agent_name> <args> --worker-nodes "http://node.naptha.ai:7001"
```

##### Examples
Try a basic "Hello world" agent:
```bash
naptha run hello_world -p '{"firstname":"Sam", "surname": "Altman"}'
```

Try an agent that uses the local LLM running on your node:
```bash
naptha run simple_chat_agent -p '{"prompt":"What is an AI agent?"}'
```

You can also run agents from docker images:
```bash
naptha run docker_hello_world -f ./example_yamls/docker_hello_world.yml
```
