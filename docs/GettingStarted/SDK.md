# Use the Naptha SDK

## Quick Start
```bash
pip install naptha-sdk
```

## Core Concepts
The Naptha SDK provides a powerful client interface for Naptha Hub and Nodes, with core abstractions for building multi-agent AI workflows. It includes Agents, Orchestrators, Tools, Environments, and Personas modules that communicate via API, along with helpful decorators for easy module onboarding. 

Here's how to get started:

### 1. Initialize the Client
```python
from naptha_sdk.client.naptha import Naptha

naptha_client = await Naptha(
    user=public_key,                         # Your public key from PRIVATE_KEY env var
    hub_username="your_username",            # Naptha Hub username
    hub_url="https://hub.naptha.ai",         # Hub endpoint
    node_url="https://node.naptha.ai",       # Node endpoint
    routing_url="https://routing.naptha.ai", # Routing endpoint
    indirect_node_id="your_indirect_node_id" # Node ID for indirect access
)

# Client automatically initializes Node with:
#   node_url="https://node.naptha.ai"
#   routing_url="https://routing.naptha.ai"
#   indirect_node_id="your_indirect_node_id"

# Note: These values can be set in your .env file:
# PRIVATE_KEY=your_private_key (via naptha signup)
# HUB_USER=your_username
# HUB_URL=https://hub.naptha.ai
# NODE_URL=https://node.naptha.ai
# ROUTING_URL=https://routing.naptha.ai
# INDIRECT_NODE_ID=your_indirect_node_id
```

### 2. Hub Interactions
Query available resources on the Naptha network:
```python
# List available nodes
nodes = await naptha_client.hub.list_nodes()

# List available agents
agents = await naptha_client.hub.list_agents()

# List available orchestrators 
orchestrators = await naptha_client.hub.list_orchestrators()

# List available environments
environments = await naptha_client.hub.list_environments()

# List available personas
personas = await naptha_client.hub.list_personas()
```

<!-- ### 3. Create and Run Workflows
Build decentralized workflows using the Flow API:
```python
from naptha_sdk.flows import Flow

# Initialize your workflow
flow = Flow(
    name="my_flow",
    user_id=naptha_client.user['id'],
    worker_nodes=[naptha_client.node],
    module_params={"param1": "value1", "param2": "value2"}
)

# Execute the workflow
result = await flow.run()
``` -->

### 3. Task Management
Create and execute individual tasks:
```python
from naptha_sdk.task import Task

# Define a task
task = Task(
    name="my_task",
    fn=your_task_function,
    worker_node=naptha_client.node,
    orchestrator_node=naptha_client.node,  # Assuming the same node is used for orchestration
    flow_run=flow.flow_run
)

# Run the task
result = await task()
```

<!-- ### 5. Service Management
```python
# Check your available credits
credits = naptha_client.services.show_credits()

# List available services
services = naptha_client.services.list_services()

# Get service details
service_url = naptha_client.services.get_service_url("service_did")
service_details = naptha_client.services.get_service_details("service_did")
``` -->

### 4. Working with Storage
Read from storage
```python
data = await naptha_client.node.read_storage("module_run_id", "output_dir", ipfs=True)
```

### Write to storage
```python
result = await naptha_client.node.write_storage("storage_input", ipfs=True, publish_to_ipns=False)
```

:::tip Need Help?
Join our [Discord community](https://naptha.ai/naptha-community) for support and discussions!
:::

:::info Modules
Check out our [Modules](/NapthaModules/overview) for how to leverage Naptha's Agents, Orchestrators, Environments, Tools, and Personas.
:::
