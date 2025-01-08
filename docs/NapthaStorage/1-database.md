# Database Storage

To interact with the database 

For CLI, the database storage provider commands start with `naptha storage db`.

## Create a Table

To create a table you need to specify a dict with a schema field.

Via CLI:

```
naptha storage db create test_embeddings -d '{
  "schema": {
    "id": {"type": "TEXT", "primary_key": true},
    "text": {"type": "TEXT", "required": true},
    "embedding": {"type": "vector", "dimension": 3}
  }
}'
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import CreateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

schema = {
    "schema": {
        "id": {"type": "TEXT", "primary_key": True},
        "text": {"type": "TEXT", "required": True},
        "embedding": {"type": "vector", "dimension": 384}
    }
}

create_table_request = CreateStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings",
    data=schema
)

create_table_result = asyncio.run(storage_provider.create_storage_object(create_table_request))
print("Create Table Result:", create_table_result)
```

## Create a Row

To create a row you need to specify a dict with a data field.

Via CLI:

```
naptha storage db create test_embeddings -d '{
  "data": {
    "id": "1",
    "text": "This is a test document",
    "embedding": [0.1, 0.1, 0.1]
  }
}'
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import CreateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

insert_data = {
    "data": {
        "id": "6",
        "text": "This is a test document",
        "embedding": [0.1] * 384
    }
}

create_row_request = CreateStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings",
    data=insert_data
)

create_row_result = asyncio.run(storage_provider.execute(create_row_request))
print("Create Row Result:", create_row_result)
```

## Update a Row

Via CLI:

```
naptha storage db update test_embeddings -d '{
  "data": {
    "text": "Updated Document 1"
  }
}' -o '{"condition": {"text": "Document 1"}}'
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import UpdateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

update_data = {
    "data": {
        "text": "Updated Document 1"
    }
}

update_request = UpdateStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings",
    data=update_data,
    options={"condition": {"text": "Document 1"}}  # Update where text = 'Document 1'
)

update_result = asyncio.run(storage_provider.execute(update_request))
print("Update Result:", update_result)
```

## Query a Table

Via CLI:

```
naptha storage db read test_embeddings -o '{
  "columns": ["text", "id"]
}'
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import ReadStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

query_request = ReadStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings",
    options={
        "columns": ["text", "id"]
    }
)

query_result = asyncio.run(storage_provider.execute(query_request))
print("Query Result:", query_result)
```

Vector similarity search

Via CLI:

```
naptha storage db read test_embeddings -o '{
  "vector_col": "embedding",
  "query_vector": [0.1, 0.1, 0.1],
  "columns": ["text"],
  "top_k": 2,
  "include_similarity": true
}'
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import ReadStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

vector_request = ReadStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings",
    options={
        "vector_col": "embedding",
        "query_vector": [0.1] * 384,
        "columns": ["text"],
        "top_k": 2,
        "include_similarity": True
    }
)

vector_result = asyncio.run(storage_provider.execute(vector_request))
print("Vector Similarity Search Result:", vector_result)
```

## List Rows

Via CLI:

```
naptha storage db list test_embeddings -o '{
  "limit": 10,
  "offset": 0
}'
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
    storage_type=StorageType.DATABASE,
    path="test_embeddings",
    options={
        "limit": 10,
        "offset": 0
    }
)

list_result = asyncio.run(storage_provider.execute(list_request))
print("List Rows Result:", list_result)
```

## Delete a Row

Via CLI:

```
naptha storage db delete test_embeddings -o '{
  "condition": {"text": "Document 1"}
}'
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import DeleteStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

delete_rows_request = DeleteStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings",
    condition={"text": "Document 1"}
)

delete_rows_result = asyncio.run(storage_provider.execute(delete_rows_request))
print("Delete Rows Result:", delete_rows_result)
```

## Delete a Table

Via CLI:

```
naptha storage db delete test_embeddings
```

In Python:

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_provider import StorageProvider
from naptha_sdk.storage.schemas import DeleteStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=7001, server_type="http")
storage_provider = StorageProvider(node)

delete_table_request = DeleteStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings"
)

delete_table_result = asyncio.run(storage_provider.execute(delete_table_request))
print("Delete Table Result:", delete_table_result)
```
