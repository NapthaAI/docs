import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'Overview',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        // Installation & Setup
        'GettingStarted/Installation',
        'GettingStarted/InstallSDK',
        'GettingStarted/InstallNode',
        
        // Core Concepts
        'GettingStarted/Abstractions',
        'GettingStarted/Architecture',
        'GettingStarted/BuildAgent',
        'GettingStarted/Decorators',
        'GettingStarted/Modules',
        'GettingStarted/NapthaCLI',
        'GettingStarted/SDK',
        'GettingStarted/UseCases',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'Examples/HelloWorld',
        'Examples/GenerateImage',
        'Examples/Image2Image',
        'Examples/MultiplayerChat',
        'Examples/BabyAGI', 
      ],
    },
    {
      type: 'category',
      label: 'Naptha Modules',
      items: [
        'NapthaModules/overview',
        'NapthaModules/agents',
        'NapthaModules/orchestrators',
        'NapthaModules/environments',
        'NapthaModules/tools',
        'NapthaModules/personas',
      ],
    },
    {
      type: 'category',
      label: 'Naptha Nodes',
      items: [
        'NapthaNodes/what-are-nodes',
        'NapthaNodes/run',
      ],
    },
  ],
};

export default sidebars;
