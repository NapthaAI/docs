# Use the Naptha SDK

## Quick Start
```bash
pip install naptha-sdk
```

## Core Concepts
The Naptha SDK provides a powerful interface for building and managing decentralized AI workflows. Here's how to get started:

### 1. Initialize the Client
```python
from naptha_sdk.client.naptha import Naptha

naptha_client = await Naptha(
    user=your_user_dict,               # Your user credentials
    hub_username="your_username",      # Naptha Hub username
    hub_password="your_password",      # Naptha Hub password
    hub_url="https://hub.naptha.ai",   # Hub endpoint
    node_url="https://node.naptha.ai", # Node endpoint
    routing_url="https://routing.naptha.ai",
    indirect_node_id="your_indirect_node_id"
)
```

### 2. Hub Interactions
Query available resources on the Naptha network:
```python
# List available nodes
nodes = await naptha_client.hub.list_nodes()

# Discover available modules
modules = await naptha_client.hub.list_modules()

# View active tasks
tasks = await naptha_client.hub.list_tasks()
```

### 3. Create and Run Workflows
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
```

### 4. Task Management
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

### 5. Service Management
```python
# Check your available credits
credits = naptha_client.services.show_credits()

# List available services
services = naptha_client.services.list_services()

# Get service details
service_url = naptha_client.services.get_service_url("service_did")
service_details = naptha_client.services.get_service_details("service_did")
```

### 6. Working with Storage
Read from storage
```python
data = await naptha_client.node.read_storage("module_run_id", "output_dir", ipfs=True)
```

### Write to storage
```python
result = await naptha_client.node.write_storage("storage_input", ipfs=True, publish_to_ipns=False)
```

:::tip Need Help?
Join our [Discord community](https://discord.gg/naptha) for support and discussions!
:::

:::info Documentation
For detailed API reference, visit our [SDK Reference](https://docs.naptha.ai/).
:::
