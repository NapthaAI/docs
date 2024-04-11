import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'category',
          label: 'What is Naptha?',
          items: [
            'Getting Started/What is Naptha/Naptha Hub',
            'Getting Started/What is Naptha/Naptha Protocol',
            'Getting Started/What is Naptha/Naptha Node',
            'Getting Started/What is Naptha/Naptha SDK',
          ],
        },
        {
          type: 'category',
          label: 'Who is Naptha for?',
          items: [
            'Getting Started/Who is Naptha for/AI Consumers',
            'Getting Started/Who is Naptha for/AI Developers',
            'Getting Started/Who is Naptha for/Node Operators',
          ],
        },
        {
          type: 'category',
          label: 'What can I build with Naptha',
          items: [
            'Getting Started/What can I build with Naptha/Use Cases',
            'Getting Started/What can I build with Naptha/Examples',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Naptha Hub',
      items: [
        {
          type: 'category',
          label: 'What is Naptha Hub?',
          items: [
            'Naptha Hub/What is Naptha Hub/Creating an account on Naptha Hub',
          ],
        },
        'Naptha Hub/Publishing a module',
        'Naptha Hub/Requesting a module (RFPs)',
        'Naptha Hub/Payments Setup',
      ],
    },
    {
      type: 'category',
      label: 'Naptha SDK (for AI Developers)',
      items: [
        'Naptha SDK (for AI Developers)/Getting Started',
        'Naptha SDK (for AI Developers)/Installation',
        'Naptha SDK (for AI Developers)/How to use the SDK',
        'Naptha SDK (for AI Developers)/Examples',
        'Naptha SDK (for AI Developers)/API Reference',
      ],
    },
    {
      type: 'category',
      label: 'Naptha Node',
      items: [
        'Naptha Node/Getting Started',
        'Naptha Node/Installation',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'Tutorials/Hello World (LLM)',
        'Tutorials/OLAS Network (Autonolas)',
        'Tutorials/Bittensor',
        'Tutorials/Multi-Agent Workflows',
      ],
    },
    {
      type: 'category',
      label: 'Ecosystem Providers',
      items: [
        {
          type: 'category',
          label: 'Centralized',
          items: [
            {
              type: 'category',
              label: 'Anthropic API',
              items: [
                'Ecosystem Providers/Centralized/Anthropic API/Claude 3',
              ],
            },
            'Ecosystem Providers/Centralized/AWS',
            {
              type: 'category',
              label: 'Azure',
              items: [
                'Ecosystem Providers/Centralized/Azure/Azure Compute',
                'Ecosystem Providers/Centralized/Azure/Azure AI APIs',
              ],
            },
            {
              type: 'category',
              label: 'Google Cloud',
              items: [
                'Ecosystem Providers/Centralized/Google Cloud/Google Cloud Compute',
                'Ecosystem Providers/Centralized/Google Cloud/Google Cloud AI APIs',
              ],
            },
            {
              type: 'category',
              label: 'Mistral API',
              items: [
                'Ecosystem Providers/Centralized/Mistral API/Mistral Medium API',
              ],
            },
            {
              type: 'category',
              label: 'OpenAI API',
              items: [
                'Ecosystem Providers/Centralized/OpenAI API/GPT-4',
              ],
            },
            'Ecosystem Providers/Centralized/OpenRouter API',
            'Ecosystem Providers/Centralized/Stability API',
          ],
        },
        {
          type: 'category',
          label: 'Decentralized',
          items: [
            'Ecosystem Providers/Decentralized/Akash',
            'Ecosystem Providers/Decentralized/Bacalhau',
            'Ecosystem Providers/Decentralized/Bittensor',
            'Ecosystem Providers/Decentralized/Ceramic',
            'Ecosystem Providers/Decentralized/Filecoin',
            'Ecosystem Providers/Decentralized/Flock',
            'Ecosystem Providers/Decentralized/Fluence',
            'Ecosystem Providers/Decentralized/Gensyn',
            'Ecosystem Providers/Decentralized/Ocean',
            'Ecosystem Providers/Decentralized/OLAS',
            'Ecosystem Providers/Decentralized/IPFS',
            'Ecosystem Providers/Decentralized/Morpheus',
            'Ecosystem Providers/Decentralized/Ritual',
            'Ecosystem Providers/Decentralized/theGraph',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
