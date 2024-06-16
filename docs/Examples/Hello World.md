# Hello World

Hello World is usually used as the first function when using a new framework. 

## Prerequisities

Make sure you have the Naptha SDK installed. 

## Modules Used

The Hello World single-node workflow is made up of the following component, which you can find on the Naptha HuggingFace:

* [Hello World](https://github.com/NapthaAI/module_hello_world/releases/tag/v0.11)

## Run

You can run the Hello World flow from the SDK using the following command:

```bash
# usage: naptha run <module_name> <module args>
naptha run hello_world -p "param1=world param2=naptha"
```

This will run the task on one node, whichever you have set as the ```NODE_URL``` in the .env file of the Naptha SDK. 
