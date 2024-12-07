import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'Overview',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'GettingStarted/Installation',
        'GettingStarted/Architecture',
        'GettingStarted/Modules',
        'GettingStarted/Decorators',
        // 'GettingStarted/BuildAgent',
        // 'GettingStarted/SDK',
        // 'GettingStarted/UseCases',
        // 'GettingStarted/Abstractions',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'Examples/HelloWorld',
        'Examples/GenerateImage',
        'Examples/Image2Image',
        'Examples/MultiOlas',
        'Examples/MultiplayerChat',
        'Examples/OlasPrediction', 
        'Examples/SimpleRAG',
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
