# Storing Secrets on the Naptha Hub

The `deploy-secrets` command allows you to securely store and manage secrets such as API keys and tokens in the Naptha Hub for use within your Naptha modules. These secrets are encrypted before being stored in the Naptha Hub.

## Prerequisites

Install the Naptha SDK using the [instructions here](/GettingStarted/InstallSDK).

## Create an account on the Naptha Hub

You can create an account on the Naptha Hub by running the following command:

```bash
naptha signup
```

## Storing Secrets

You can store secrets in the Naptha Hub by running the following command:

```bash
naptha deploy-secrets
```

This will prompt you to enter the name of the secret you want to add, and then the value of the secret.

## Using Environment Variables

You can add secrets from your environment variables:

```bash
naptha deploy-secrets -e
```

This will read all variables from your `.env` file and securely store them on the node.

## Override Existing Secrets

To update existing secrets with new values from your environment file:

```bash
naptha deploy-secrets -e -o
```

All modules can now access these secrets by referencing them from the `os.environ` dictionary.

## Security Notes

- Secrets are encrypted using RSA encryption before being stored
- Each secret is encrypted with the node's public key before being sent to the node
- Only the modules running on the node can access the secrets
- Secrets are never logged or exposed in plaintext

:::info
During our initial audit of the `deploy-secrets` command, we found that while your secrets are not currently visible to other users, this method is not fully secure. We are actively working on implementing a more secure method for storing and accessing secrets in the future.
:::
