---
sidebar_label: "Building a Web Interface That Interacts with Naptha's Client SDK"
---

# Building a Web Interface That Interacts with Naptha's Client SDK

## Introduction
We recently released a new version of the Naptha SDK that allows you to interact with the Naptha platform. 

This guide walks you through building a web interface that allows you to interact with Naptha's client SDK using Streamlit. We'll create an application that allows users to interact with Naptha's features including authentication, model inference, and node/agent listing.

## Features

- View available Nodes and Agents
- Test agents in the Agent Playground
- Run Chat & Inference operations


## Prerequisites
- `Python (>=3.10, <3.13)` - (`Naptha SDK requires Python >=3.10, <=3.13`)
- Basic understanding of Python and async programming
- Naptha account credentials


## Quick Setup

If you want to get started quickly, you can :

1. Clone the repository and run the application.

📦 **Complete code available at**: [https://github.com/thestriver/naptha-sdk-demo](https://github.com/thestriver/naptha-sdk-demo)

:::info
We also have a hosted version of the application available at [naptha-sdk-demo.streamlit.app](https://naptha-sdk-demo.streamlit.app) so you can skip the setup and start testing right away.
:::

2. Create a virtual environment:   
```bash
   python -m venv venv
   source venv/bin/activate  
   # On Windows: venv\Scripts\activate   
```
3. Install dependencies:   
```bash
# contains streamlit, naptha-sdk==0.2.1, python-dotenv
   pip install -r requirements.txt   
```

4. Create a `.env` file with your credentials:   
```
   HUB_USER: Your Naptha Hub username
   HUB_PASS: Your Naptha Hub password
   HUB_URL: Naptha Hub URL (default: ws://node.naptha.ai:3001/rpc)
   NODE_URL: Naptha Node URL (default: http://node.naptha.ai:7001)
   OPENAI_API_KEY: OpenAI API Key (optional to use Chat agent modules)
   STABILITY_API_KEY: Stability API Key (optional to use Image agent modules)
```
5. Run the application:   
```bash
   streamlit run app.py   
```

## Detailed Setup

### 1. Environment Setup
To get started, we'll need to create a virtual environment and install the dependencies.

```bash
# Check Python version
python --version  # Should be >=3.10, <3.13 so we can use it with the SDK

# Create project directory
mkdir naptha-streamlit-app
cd naptha-streamlit-app

# Create virtual environment
python -m venv venv

# Activate environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Update pip (if needed)
python -m pip install --upgrade pip
```

### 2. Install Dependencies
```bash
pip install streamlit naptha-sdk==0.2.1 python-dotenv
```

### 3. Configure Environment variables
Create an `.env` file:
```bash
echo "HUB_USER=your_username
HUB_PASS=your_password
HUB_URL=ws://node.naptha.ai:3001/rpc
NODE_URL=http://node.naptha.ai:7001
OPENAI_API_KEY=your_openai_api_key
STABILITY_API_KEY=your_stability_api_key" > .env
```

### 4. Implementation
Let's highlight some of the main components of the application. You can find the complete code in the [Github repo](https://github.com/thestriver/naptha-sdk-demo).

#### Basic Application Structure
Create `app.py` with initial imports and environment setup:

```python
import streamlit as st
import asyncio
from dotenv import load_dotenv
import os
from naptha_sdk.client.naptha import Naptha
from naptha_sdk.schemas import ChatCompletionRequest

# Load environment variables
load_dotenv()
```

### 2. Environment Variable Validation
```python
# Check environment variables
if not os.getenv("HUB_USER") or not os.getenv("HUB_PASS"):
    st.error("Environment variables HUB_USER and/or HUB_PASS are not set!")
    hub_user = st.text_input("Enter Hub Username")
    hub_pass = st.text_input("Enter Hub Password", type="password")
    if st.button("Save Credentials"):
        with open(".env", "w") as f:
            f.write(f"HUB_USER={hub_user}\nHUB_PASS={hub_pass}")
        st.success("Credentials saved! Please restart the app.")
        st.stop()
else:
    st.success("Environment variables loaded successfully!")
```

### 3. Credential Verification
```python
async def verify_credentials():
    """Verify Naptha credentials"""
    try:
        async with Naptha() as naptha:
            await naptha.hub.signin(os.getenv("HUB_USER"), os.getenv("HUB_PASS"))
            return True
    except Exception as e:
        st.error(f"Credential verification failed: {str(e)}")
        return False
```

### 4. Model Inference Implementation
```python
async def run_inference(model, messages):
    """Run inference with new client for each request"""
    try:
        async with Naptha() as naptha:
            await naptha.hub.signin(os.getenv("HUB_USER"), os.getenv("HUB_PASS"))
            req = ChatCompletionRequest(
                model=model,
                messages=messages
            )
            res = await naptha.node.run_inference(req)
            return res['choices'][0]['message']['content']
    except Exception as e:
        st.error(f"Inference failed: {str(e)}")
        return None
```

### 5. Node and Agent Listing
```python
async def list_agents():
    """List agents with new client"""
    try:
        async with Naptha() as naptha:
            await naptha.hub.signin(os.getenv("HUB_USER"), os.getenv("HUB_PASS"))
            # return await naptha.hub.list_agents()
            agents = await naptha.hub.list_agents()
            if agents:
                create_agents_table(agents) # check out the github repo to see the create_agents_table function
            return agents
    except Exception as e:
        st.error(f"Failed to list agents: {str(e)}")
        return None

async def list_nodes():
    """List nodes with new client"""
    try:
        async with Naptha() as naptha:
            await naptha.hub.signin(os.getenv("HUB_USER"), os.getenv("HUB_PASS"))
            # return await naptha.hub.list_nodes()
            nodes = await naptha.hub.list_nodes()
            if nodes:
                create_nodes_table(nodes) # check out the github repo to see the create_nodes_table function
            return nodes
    except Exception as e:
        st.error(f"Failed to list nodes: {str(e)}")
        return None
```

### 6. Main Application Logic
```python

def main():
    st.title("Naptha SDK Demo")
    
    # Verify credentials on startup
    if asyncio.run(verify_credentials()):
        st.success("Successfully connected to Naptha!")
        
        # Navigation
        page = st.sidebar.selectbox(
            "Select Page",
            ["Nodes & Agents", "Agent Playground", "Chat & Inference"]
        )
        
        if page == "Nodes & Agents":
            st.header("Available Nodes")
            if st.button("Refresh Nodes"):
                nodes = asyncio.run(list_nodes())
                if nodes:
                    st.write(nodes)
                
            st.header("Available Agents")
            if st.button("Refresh Agents"):
                agents = asyncio.run(list_agents())
                if agents:
                    st.write(agents)
                
        elif page == "Agent Playground":
            st.header("Agent Playground")
            
            # Agent selection
            agent_type = st.selectbox(
                "Select Agent",
                ["Hello World Agent", "Simple Chat Agent"]
            )
            
            if agent_type == "Hello World Agent":
                st.subheader("Hello World Agent")
                firstname = st.text_input("First Name")
                surname = st.text_input("Last Name")
                
                if st.button("Run Hello World"):
                    result = asyncio.run(run_hello_world_agent(firstname, surname))
                    if result:
                        st.write("Agent Response:", result.results[0] if result.results else "No response")
                        
            elif agent_type == "Simple Chat Agent":
                st.subheader("Simple Chat Agent")
                question = st.text_area("Enter your question")
                
                if st.button("Run Chat Agent"):
                    result = asyncio.run(run_simple_chat_agent(question))
                    if result:
                        st.write("Agent Response:", result.results[0] if result.results else "No response")
                
        elif page == "Chat & Inference":
            st.header("Chat & Inference")
            
            model = st.selectbox("Select Model", ["gpt-4o-mini", "phi3:mini"])
            user_input = st.text_area("Enter your message")
            
            if st.button("Send"):
                messages = [
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": user_input}
                ]
                response = asyncio.run(run_inference(model, messages))
                if response:
                    st.write("Response:", response)

    # Sidebar
    with st.sidebar:
        st.image(logo_url, width=100)

if __name__ == "__main__":
    main()
```

## Running the Application

Start the application:
```bash
streamlit run app.py
```

The interface will likely be available at `http://localhost:8501`

Congratulations! You've created a web interface that interacts with Naptha's client SDK. You can go ahead and add more models to the inference page, enhance the user interface, and add data visualization features.


## Next Steps
- Check out the [Naptha SDK Documentation](https://docs.naptha.ai)
- Join our [Discord Community](https://naptha.ai/naptha-community)
- Follow us on [Twitter](https://twitter.com/NapthaAI)
- Star us on [GitHub](https://github.com/NapthaAI)
- Get help with bug reports, feature requests, and technical discussions - [GitHub Issues](https://github.com/NapthaAI/naptha-sdk/issues)