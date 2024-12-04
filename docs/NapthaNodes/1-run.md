## Install Node

To get started initially, you can run the Naptha SDK using a hosted node. 

When you're ready to run your own node, please reach out the Naptha team at team@naptha.ai. We'll add you to the [Naptha Node](https://github.com/NapthaAI/node) repository. With the installation script, it's super easy to set up and takes about 5 minutes to install on a fresh instance. 

From source:

```bash
git clone https://github.com/NapthaAI/node.git
cd node
```

Then run the node:

```bash
bash launch.sh
```

The first time you launch, you will be prompted about whether (i) to generate a private key, and (ii) to input a Stability API key, which is needed if you would like to run the image module examples. If you choose not to, you can always edit the .env file manually later.

After a few minutes you should see,```[System] Setup complete. Applications are running.```

Before running agents and multi-agent orchestrators via the [Naptha SDK](https://github.com/NapthaAI/naptha-sdk), you should wait to check that the servers set up correctly by running the following in a new terminal window. On Linux:

```bash
journalctl -u nodeapp_http -n 100 -f
```

On MacOS:

```bash
tail -n 100 -f /tmp/nodeapp_http.err
```

You should see ```Uvicorn running on http://0.0.0.0:7001```. 

# Troubleshooting

If you get an unexpected error when running agents and multi-agent orchestrators, you can check the logs for the servers using:

```bash
journalctl -u nodeapp_http -n 100 -f
```

On MacOS:

```bash
tail -n 100 -f /tmp/nodeapp_http.out
```

You can also check the logs of the workers, which may show an error if you e.g. have a bug in the code you wrote for an agent package. On Linux:

```bash
journalctl -u celeryworker -n 100 -f
```

On MacOS:

```bash
tail -n 100 -f /tmp/celeryworker.err
```

## Stop

If using systemd:

```
bash stop_service.sh
```

If using docker:

```
bash stop_docker.sh
```

## To cleanup

```
make remove
```