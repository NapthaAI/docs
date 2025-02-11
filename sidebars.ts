import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'Overview', // Changed from 'Introduction' to 'Overview' as that's what exists
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'Contributing/module-builder',
        'Contributing/infrastructure-contributor',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'GettingStarted/Architecture',
        'GettingStarted/UseCases',
        'GettingStarted/create-a-new-user',
        'GettingStarted/SDK',
        'GettingStarted/NapthaCLI',
        'GettingStarted/NapthaHub',
      ],
    },
    {
      type: 'category',
      label: 'Naptha Modules',
      items: [
        'NapthaModules/overview',
        'NapthaModules/agents',
        'NapthaModules/tools',
        'NapthaModules/knowledge-bases',
        'NapthaModules/memories',
        'NapthaModules/personas',
        'NapthaModules/orchestrators',
        'NapthaModules/environments',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'Integrations/Decorators',
        'Integrations/CrewAI',
        'Integrations/Autogen',
        'Integrations/LangChain', // Fixed capitalization
        'Integrations/LlamaIndex',
      ],
    },
    {
      type: 'category',
      label: 'Naptha Inference',
      items: [
        'NapthaInference/overview', // Changed from 0-overview
        'NapthaInference/inference', // Changed from 1-inference
      ],
    },
    {
      type: 'category',
      label: 'Naptha Storage',
      items: [
        'NapthaStorage/overview',
        'NapthaStorage/database',
        'NapthaStorage/files',
        'NapthaStorage/ipfs',
      ],
    },
    {
      type: 'category',
      label: 'Run a Naptha Node',
      items: [
        'NapthaNodes/quickstart', // Changed from what-are-nodes
        'NapthaNodes/custom',     // Added existing pages
        'NapthaNodes/advanced',
        'NapthaNodes/docker',
        'NapthaNodes/systemd',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'Examples/index',
        'Examples/HelloWorld',
        'Examples/GenerateImage',
        'Examples/MultiplayerChat',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'Tutorials/index',
        'Tutorials/module-guide',
        'Tutorials/quick-persona-guide',
      ],
    },
    'reference',
  ],
};

export default sidebars;