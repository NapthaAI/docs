## How to Use the Naptha SDK

1. Installation and Setup
```
pip install naptha-sdk
```

2. Initializing the Naptha Client
```
from naptha_sdk.client.naptha import Naptha

naptha_client = await Naptha(
    user=your_user_dict,
    hub_username="your_username",
    hub_password="your_password",
    hub_url="https://hub.naptha.ai",
    node_url="https://node.naptha.ai",
    routing_url="https://routing.naptha.ai",
    indirect_node_id="your_indirect_node_id"
)
```

3. Interacting with the Naptha Hub
You can use the Hub to list available nodes, modules, and tasks:
```
nodes = await naptha_client.hub.list_nodes()
modules = await naptha_client.hub.list_modules()
tasks = await naptha_client.hub.list_tasks()
```

4. Creating and Running a Workflow
```
from naptha_sdk.flows import Flow

flow = Flow(
    name="my_flow",
    user_id=naptha_client.user['id'],
    worker_nodes=[naptha_client.node],
    module_params={"param1": "value1", "param2": "value2"}
)

result = await flow.run()
```

5. Creating and Running a Task
```
from naptha_sdk.task import Task

task = Task(
    name="my_task",
    fn=your_task_function,
    worker_node=naptha_client.node,
    orchestrator_node=naptha_client.node,  # Assuming the same node is used for orchestration
    flow_run=flow.flow_run
)

result = await task()
```

6. Using Services
### Show available credits
`credits = naptha_client.services.show_credits()`

### List available services
`services = naptha_client.services.list_services()`

### Get details of a specific service
```
service_url = naptha_client.services.get_service_url("service_did")
service_details = naptha_client.services.get_service_details("service_did")
```

7. Working with Storage
### Read from storage
`data = await naptha_client.node.read_storage("module_run_id", "output_dir", ipfs=True)`

### Write to storage
`result = await naptha_client.node.write_storage("storage_input", ipfs=True, publish_to_ipns=False)`
