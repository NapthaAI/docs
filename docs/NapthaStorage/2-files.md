# File System Storage

## Upload a File

Via CLI:

```
naptha storage fs create test_upload -f README.md
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import CreateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

create_file_request = CreateStorageRequest(
    storage_type=StorageType.FILESYSTEM,
    path="test_upload",
    data="README.md"
)
upload_result = asyncio.run(await storage_provider.execute(create_file_request))
print("Single file upload result:", upload_result)
```

## Download a File

Via CLI:

``` 
naptha storage fs read test_upload
```

In Python:

```
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import ReadStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

read_request = ReadStorageRequest(
    storage_type=StorageType.FILESYSTEM,
    path="test_upload/test.txt"
)
read_result = asyncio.run(await storage_provider.execute(read_request))
print("Read file result:", read_result)
```

## List Files

List files in a directory.

Via CLI:

```
naptha storage fs list test_upload
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import ListStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

list_request = ListStorageRequest(
    storage_type=StorageType.FILESYSTEM,
    path="test_zip",
    options={
        "recursive": True,
        "include_dirs": True
    }
)

list_result = asyncio.run(await storage_provider.execute(list_request))
print("List directory result:", list_result)
```

## Delete a File

Via CLI:

```
naptha storage fs delete test_upload/README.md
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import DeleteStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

delete_file_request = DeleteStorageRequest(
    storage_type=StorageType.FILESYSTEM,
    path="test_upload/test.txt"
)

delete_result = asyncio.run(await storage_provider.execute(delete_file_request))
print("Delete file result:", delete_result)
```
