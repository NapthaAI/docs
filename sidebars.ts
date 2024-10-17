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
        // 'Examples/GenerateImage',
        // 'Examples/SimpleRAG',
        'Examples/MultiplayerChat',
        'Examples/BabyAGI',
      ],
    },
  ],
};

export default sidebars;
