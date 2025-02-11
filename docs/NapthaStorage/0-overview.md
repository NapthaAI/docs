# Storage Client

Naptha Modules often need to store and retrieve data locally on their Naptha Nodes. This can be done via the Naptha Storage API, which provides a secure way to store and manage data locally and privately.

## Core Features

- **Consistent Interface**: All storage types share the same basic operations (`create`, `read`, `update`, `delete`, `list`, `search`)
- **Options Pattern**: The options parameter allows for storage-specific features without breaking the common interface
- **Extensible**: Easy to add new storage providers by implementing the StorageProvider interface

## Available Storage Types

Naptha Nodes support several types of storage, including filesystem storage, database storage, and IPFS storage.

- **Database Storage**: For structured data and efficient queries
- **File System Storage**: For local file management and quick access
- **IPFS Storage**: For decentralized and persistent data storage

When building a module, you can import the `StorageProvider` class from the Naptha SDK to interact with storage providers. For example, to create a table in a database storage provider, you can use the following code:

# Quick Storage via the CLI

You can interact with storage quickly via the CLI using the `naptha storage` series of commands, followed by the storage provider type (e.g. `db` `fs`, `ipfs`). For example, you can download the file from the node using:

```bash
naptha storage fs read <agent_run_id>
```

or using the `ipfs` storage client:

```bash
naptha storage ipfs create -d files/<filename>.jpg
```

For more details on quickly interacting with storage via the CLI, see the database, filesystem, and IPFS storage sections.

# Accessing Storage in Modules via the Naptha SDK

## Configuring Storage

Storage is configured using the `StorageConfig` class:

```python
#naptha_sdk/schemas.py
class StorageConfig(BaseModel):
    storage_type: StorageType
    path: str
    storage_schema: Dict[str, Any]
    options: Dict[str, Any] = Field(default_factory=dict)
```

Or in the `storage_config` field of `config` in the `deployment.json` file (in the `configs` folder of the module):

```json
[
    {
        "config": {
            "storage_config": {
                "storage_type": "db",
                "path": "wikipedia_kb",
                "options": {
                    "query_col": "title",
                    "answer_col": "text"
                },
                "storage_schema": {
                    "id": {"type": "INTEGER", "primary_key": true},
                    "url": {"type": "TEXT"},
                    "title": {"type": "TEXT"},
                    "text": {"type": "TEXT"}
                }
            }
        }
    }
]
```

## Interacting with Storage

Naptha Modules can import the `StorageProvider` class from the `naptha_sdk.storage` module to interact with storage providers.

```python
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import CreateStorageRequest

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

create_table_request = CreateStorageRequest(
    storage_type=storage_config.storage_type,
    path=storage_config.path,
    data=storage_config.storage_schema
)

# Create a table
create_table_result = await storage_client.execute(create_table_request)

print(create_table_result)
```

For more details on interacting with storage via the SDK, see the database, filesystem, and IPFS storage sections.


# Use the API directly

You can also write your own code to interact with the storage API. See the FastAPI docs for the [storage API](https://node2.naptha.ai/docs#/storage).

## Need Help?
- Join our [Discord Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)