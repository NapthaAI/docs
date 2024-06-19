import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'fcd'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4ef'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c91'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6a8'),
            routes: [
              {
                path: '/docs/Examples/BabyAGI',
                component: ComponentCreator('/docs/Examples/BabyAGI', 'fbf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Examples/Hello World',
                component: ComponentCreator('/docs/Examples/Hello World', '457'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Examples/Multiplayer Chat',
                component: ComponentCreator('/docs/Examples/Multiplayer Chat', '56b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Getting Started/Build a Module',
                component: ComponentCreator('/docs/Getting Started/Build a Module', '312'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Getting Started/Installation',
                component: ComponentCreator('/docs/Getting Started/Installation', '743'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Getting Started/Naptha Stack',
                component: ComponentCreator('/docs/Getting Started/Naptha Stack', 'ec9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'a6e'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c61'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
