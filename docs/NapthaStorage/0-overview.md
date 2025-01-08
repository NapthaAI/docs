# Storage Provider

Naptha Modules often need to store and retreive data locally with the Naptha Nodes that they are running on, and do so via the Naptha Storage API. The Naptha Nodes support several types of storage, including filesystem storage, database storage, and IPFS storage. When building a module, you can import the `StorageProvider` class to interact with storage providers. For example, to create a table in a database storage provider, you can use the following code:

```
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)
```


You can also interact with storage directly via the CLI using the `naptha storage` series of commands, followed by the storage provider type (e.g. `db` `fs`, `ipfs`). 



Consistent Interface: All storage types share the same basic operations (create, read, update, delete, list, search)

Options Pattern: The options parameter allows for storage-specific features without breaking the common interface


Extensible: Easy to add new storage providers by implementing the StorageProvider interface
