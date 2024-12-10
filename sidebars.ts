import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'Overview',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
         // Core Concepts
         'GettingStarted/Architecture',
         'GettingStarted/Abstractions',
         'GettingStarted/UseCases',

         
        
        // Installation & Setup
        'GettingStarted/Installation',
        'GettingStarted/SDK',
        //'GettingStarted/InstallSDK',
        //'GettingStarted/InstallNode', deprecated
 
        
        // Development
        'GettingStarted/NapthaCLI',
        
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
        'Examples/BuildAgent',
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
