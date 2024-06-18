import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'Getting Started/Naptha Stack',
        'Getting Started/Installation',
        'Getting Started/Build a Module',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'Examples/Hello World',
        'Examples/Multiplayer Chat',
        'Examples/BabyAGI',
      ],
    },
  ],
};

export default sidebars;
