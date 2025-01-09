# Storage Provider

Naptha Modules often need to store and retreive data locally with the Naptha Nodes that they are running on, and do so via the Naptha Storage API. The advantage of using Naptha Storage is that the data is local and private. 

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

```python
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)
```

You can also interact with storage directly via the CLI using the `naptha storage` series of commands, followed by the storage provider type (e.g. `db` `fs`, `ipfs`). For example, you can download the file from the node using:

```
naptha storage fs read <agent_run_id>
```

or interact with IPFS thorugh Node using:

```
naptha storage ipfs create -d files/<filename>.jpg
```

## Need Help?
- Join our [Discord Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)