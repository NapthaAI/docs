# Overview

Naptha Nodes are set up to serve a variety of open source models using either VLLM or Ollama, along with LiteLLM as a fully OpenAI-compatible API server. 

1. Standard API Interface
2. Standard Tool Calling for a Variety of Models
3. Structured Outputs for a Variety of Models
4. Optimized Throughput for Multi-Agent Simulations

By running Naptha Nodes locally, you can achieve complete privacy while using LLMs on your private data.

## Standard API Interface

The Naptha Node runs a [LiteLLM](https://docs.litellm.ai/docs/) proxy server to (i) provide an OpenAI-compatible proxy that can be connected to a wide variety of LLM backends, including non-OpenAI-compatible models (this means you can do neat things like call Anthropic models in an OpenAI-compatible way), and (ii) to aggregate our vLLM instances into a single endpoint. 

## Standard Tool Calling for a Variety of Models

Not many open source models support tool calling out of the box. vLLM has "native" support for _some_ SLM  models' tool-calling capabilities, but not all. The Naptha Node provides:

- OpenAI-compatible tool calling for supported models; where the model's innate tool calling capability is mapped onto OpenAI's standard for non-streaming and/or streaming requests. 
- Additional ad-hoc tool parser plugins.

Note that _only_ **non-streaming** tool extraction is currently supported. 

Please refer to the [vLLM docs](https://docs.vllm.ai/en/latest/usage/tool_calling.html) for a list of models with officially-supported SLM tool parsers that include both non-streaming and streaming tool extraction).

## Structured Outputs for a Variety of Models

The Naptha Node supports structured outputs using OpenAI-compatible "JSON mode" structured generation using guided decoding, and non-OpenAI-spec extended guided generation capabilities (e.g. regex-based, "choice"-based etc.). 

## Optimized Throughput for Multi-Agent Simulations

The configurations in the Naptha Node have been optimized for throughput for specific multi-agent simulations up to 50k agents. Since use cases vary, you may need to modify the configurations based on the performance characteristics that _you_ care about (TTFT, TPOT, ITL, E2EL, total throughput, etc.)

## Need Help?
- Join our [Discord Community](https://naptha.ai/naptha-community) and post in the #model-server channel
- Submit issues on [GitHub](https://github.com/NapthaAI)

