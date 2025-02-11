# IPFS Storage

Naptha's storage client also provides decentralized file storage via the IPFS network.

## Upload a File

Store files on the IPFS network

**Via CLI:**

```
naptha storage ipfs create test -f README.md
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import CreateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

upload_request = CreateStorageRequest(
    storage_type=StorageType.IPFS,
    path="test",
    file="README.md"
)
    
upload_result = asyncio.run(await storage_client.execute(upload_request))
print("Basic IPFS upload result:", upload_result)
```

## Download a File

Retrieve files from IPFS using their unique hash.

**Via CLI:**

```
naptha storage ipfs read <IPFS_HASH>
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import ReadStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

read_request = ReadStorageRequest(
    storage_type=StorageType.IPFS,
    path=ipfs_hash
)

read_result = asyncio.run(await storage_client.execute(read_request))
print("IPFS read result:", read_result)
```

## Upload a File with IPNS


**Via CLI:**

```
naptha storage ipfs create test -f README.md -o '{"ipns_operation": "create"}'
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import CreateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

ipns_request = CreateStorageRequest(
    storage_type=StorageType.IPFS,
    path="test",
    file="README.md",
    data={
        "ipns_operation": "create"
    }
)
ipns_result = asyncio.run(await storage_client.execute(ipns_request))
print("IPNS upload result:", ipns_result)
```

## Download a File with IPNS

Retrieve the latest version of a file using its IPNS name.

**Via CLI:**

```
naptha storage ipfs read <IPNS_NAME>
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import ReadStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

ipns_read_request = ReadStorageRequest(
    storage_type=StorageType.IPFS,
    path=ipns_hash,
    options={
        "resolve_ipns": True
    }
)

ipns_read_result = asyncio.run(await storage_client.execute(ipns_read_request))
print("IPNS read result:", ipns_read_result)
```

## Update a File with IPNS

**Via CLI:**

```
naptha storage ipfs create test -f pyproject.toml -o '{
    "ipns_operation": "update",
    "ipns_name": "k51qzi5uqu5djw7nqlbxf6smmx51vksu1pes119ooomwd7h4swpg0d5iyjcdp5",
    "unpin_previous": "True",
    "previous_hash": "QmPKjW53SLwb2YAoPV47Guvva4bGBgynhVa91M9MwSjLj9"
}'
```
