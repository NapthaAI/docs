# Database Storage

We offer a powerful way to manage structured data via our database storage client. You can interact with it using Naptha's SDK, either via the CLI or Python client interface.

For the `CLI` option, the database storage client commands start with `naptha storage db`.

Here are some examples of how to interact with the database storage:

## Create a Table

To create a table in Naptha's database storage, you need to specify a dict with a schema field that specifies the structure and data types of your table. The schema is provided as a JSON object where each field defines a column's properties.

**Via CLI:**

```
naptha storage db create test_embeddings -d '{
  "schema": {
    "id": {"type": "TEXT", "primary_key": true},
    "text": {"type": "TEXT", "required": true},
    "embedding": {"type": "vector", "dimension": 3}
  }
}'
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import CreateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

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

create_table_result = asyncio.run(storage_client.create_storage_object(create_table_request))
print("Create Table Result:", create_table_result)
```

## Create a Row

Similarly, to create a row you need to specify a dict with a data field.

**Via CLI:**

```
naptha storage db create test_embeddings -d '{
  "data": {
    "id": "1",
    "text": "This is a test document",
    "embedding": [0.1, 0.1, 0.1]
  }
}'
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import CreateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

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

create_row_result = asyncio.run(storage_client.execute(create_row_request))
print("Create Row Result:", create_row_result)
```

## Update a Row

**Via CLI:**

```
naptha storage db update test_embeddings -d '{
  "data": {
    "text": "Updated Document 1"
  }
}' -o '{"condition": {"text": "Document 1"}}'
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import UpdateStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

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

update_result = asyncio.run(storage_client.execute(update_request))
print("Update Result:", update_result)
```

## Query a Table

Fetch exactly what you need with flexible query options. You can select specific columns or perform vector similarity searches.

**Via CLI:**

```
naptha storage db read test_embeddings -o '{
  "columns": ["text", "id"]
}'
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import ReadStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

query_request = ReadStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings",
    options={
        "columns": ["text", "id"]
    }
)

query_result = asyncio.run(storage_client.execute(query_request))
print("Query Result:", query_result)
```

### Vector similarity search

Leverage vector embeddings for semantic search and AI-powered queries. Perfect for finding similar content or nearest-neighbor searches.

**Via CLI:**

```
naptha storage db read test_embeddings -o '{
  "vector_col": "embedding",
  "query_vector": [0.1, 0.1, 0.1],
  "columns": ["text"],
  "top_k": 2,
  "include_similarity": true
}'
```

**In Python:**  

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import ReadStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

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

vector_result = asyncio.run(storage_client.execute(vector_request))
print("Vector Similarity Search Result:", vector_result)
```

## List Rows

**Via CLI:**

```
naptha storage db list test_embeddings -o '{
  "limit": 10,
  "offset": 0
}'
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import ListStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

list_request = ListStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings",
    options={
        "limit": 10,
        "offset": 0
    }
)

list_result = asyncio.run(storage_client.execute(list_request))
print("List Rows Result:", list_result)
```

## Delete a Row

**Via CLI:**

```
naptha storage db delete test_embeddings -o '{
  "condition": {"text": "Document 1"}
}'
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import DeleteStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

delete_rows_request = DeleteStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings",
    condition={"text": "Document 1"}
)

delete_rows_result = asyncio.run(storage_client.execute(delete_rows_request))
print("Delete Rows Result:", delete_rows_result)
```

## Delete a Table

**Via CLI:**

```
naptha storage db delete test_embeddings
```

**In Python:**

```
import asyncio
from naptha_sdk.schemas import NodeConfigUser
from naptha_sdk.storage.storage_client import StorageClient
from naptha_sdk.storage.schemas import DeleteStorageRequest, StorageType

node = NodeConfigUser(ip="node.naptha.ai", http_port=None, server_type="https")
storage_client = StorageClient(node)

delete_table_request = DeleteStorageRequest(
    storage_type=StorageType.DATABASE,
    path="test_embeddings"
)

delete_table_result = asyncio.run(storage_client.execute(delete_table_request))
print("Delete Table Result:", delete_table_result)
```
