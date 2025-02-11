import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'Introduction',
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
        // 'GettingStarted/Abstractions',
        // 'GettingStarted/UseCases',
        'GettingStarted/InstallSDK',
        // 'GettingStarted/SDK',
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
        'Integrations/Langchain',
        'Integrations/LlamaIndex',
      ],
    },
    {
      type: 'category',
      label: 'Naptha Inference',
      items: [
        'NapthaInference/0-overview',
        'NapthaInference/1-inference',
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
        'NapthaNodes/what-are-nodes',
        'NapthaNodes/run',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'Examples/index',
        'Examples/HelloWorld',
        'Examples/GenerateImage',
        'Examples/Image2Image',
        'Examples/MultiplayerChat',
        'Examples/BabyAGI', 
        'Examples/BuildAgent',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'Tutorials/index',
        'Tutorials/create-a-new-user',
        'Tutorials/module-guide',
        'Tutorials/quick-persona-guide',
      ],
    },
  ],
};

export default sidebars;
