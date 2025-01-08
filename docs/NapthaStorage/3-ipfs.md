# IPFS Storage

## Upload a File

Via CLI:

```
naptha storage ipfs create test -f README.md
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import CreateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

upload_request = CreateStorageRequest(
    storage_type=StorageType.IPFS,
    path="test",
    file="README.md"
)
    
upload_result = asyncio.run(await storage_provider.execute(upload_request))
print("Basic IPFS upload result:", upload_result)
```

## Download a File

Via CLI:

```
naptha storage ipfs read <IPFS_HASH>
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import ReadStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

read_request = ReadStorageRequest(
    storage_type=StorageType.IPFS,
    path=ipfs_hash
)

read_result = asyncio.run(await storage_provider.execute(read_request))
print("IPFS read result:", read_result)
```

## Upload a File with IPNS

Via CLI:

```
naptha storage ipfs create test -f README.md -o '{"ipns_operation": "create"}'
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import CreateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

ipns_request = CreateStorageRequest(
    storage_type=StorageType.IPFS,
    path="test",
    file="README.md",
    data={
        "ipns_operation": "create"
    }
)
ipns_result = asyncio.run(await storage_provider.execute(ipns_request))
print("IPNS upload result:", ipns_result)
```

## Download a File with IPNS

Via CLI:

```
naptha storage ipfs read <IPNS_NAME>
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import ReadStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

ipns_read_request = ReadStorageRequest(
    storage_type=StorageType.IPFS,
    path=ipns_hash,
    options={
        "resolve_ipns": True
    }
)

ipns_read_result = asyncio.run(await storage_provider.execute(ipns_read_request))
print("IPNS read result:", ipns_read_result)
```

## Update a File with IPNS

Via CLI:

```
naptha storage ipfs create test -f pyproject.toml -o '{"ipns_operation":"update", "ipns_name":"k51qzi5uqu5djw7nqlbxf6smmx51vksu1pes119ooomwd7h4swpg0d5iyjcdp5", "unpin_previous":"True", "previous_hash":"QmPKjW53SLwb2YAoPV47Guvva4bGBgynhVa91M9MwSjLj9"}'
```
