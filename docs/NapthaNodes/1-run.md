---
title: Install Node
---

## Quick Start
To get started initially, you can run the Naptha SDK using a hosted node. 
:::info
When you're ready to run your own node, please reach out the Naptha team at team@naptha.ai. We'll add you to the [Naptha Node](https://github.com/NapthaAI/node) repository. With the installation script, it's super easy to set up and takes about 5 minutes to install on a fresh instance. 
:::

From source:

```bash

# Clone the repository
git clone https://github.com/NapthaAI/node.git
cd node
```

Then run the node:

```bash
bash launch.sh
```

### First Launch Setup
During your first launch, you'll be prompted to:
1. Generate a private key
2. Input a Stability API key (optional, needed for image modules examples)

If you choose not to, you can always modify the `.env` file later.

### Verify Installation
After a few minutes, you should see:
```bash
[System] Setup complete. Applications are running.
```

### Check Server Status
Before running agents and multi-agent orchestrators via the [Naptha SDK](https://github.com/NapthaAI/naptha-sdk), you should wait to check that the 
servers set up correctly by running the following in a new terminal window.

**Linux:**
```bash
journalctl -u nodeapp_http -n 100 -f
```

**MacOS:**
```bash
tail -n 100 -f /tmp/nodeapp_http.err
```
You should see ```Uvicorn running on http://0.0.0.0:7001```. 
    
## Troubleshooting

If you get an unexpected error when running agents and multi-agent orchestrators, you can check the logs for the servers using:


```bash
journalctl -u nodeapp_http -n 100 -f
```

**On MacOS:**
```bash
tail -n 100 -f /tmp/nodeapp_http.out
```

### Worker Logs
You can also check the logs of the workers, which may show an error if you e.g. have a bug in the code you wrote for an agent package. On Linux:

**Linux:**
```bash
journalctl -u celeryworker -n 100 -f
```

**MacOS:**
```bash
tail -n 100 -f /tmp/celeryworker.err
```

## Managing Your Node

### Stopping the Node
Using systemd:
```bash
bash stop_service.sh
```

Using docker:
```bash
bash stop_docker.sh
```

### Cleanup
Remove all node components:
```bash
make remove
```

## Need Help?
- Join our [Community](https://naptha.ai/naptha-community)
- Submit issues on [GitHub](https://github.com/NapthaAI)