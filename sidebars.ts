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
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'Examples/HelloWorld',
        'Examples/MultiplayerChat',
        'Examples/BabyAGI',
        'Examples/GenerateImage',
        'Examples/SimpleRAG',
        'Examples/OlasPrediction',
        'Examples/MultiOlas',
      ],
    },
  ],
};

export default sidebars;
