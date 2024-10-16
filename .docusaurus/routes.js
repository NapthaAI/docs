import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'e3c'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '769'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '1d1'),
            routes: [
              {
                path: '/Examples/BabyAGI',
                component: ComponentCreator('/Examples/BabyAGI', '15c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Examples/GenerateImage',
                component: ComponentCreator('/Examples/GenerateImage', 'bbe'),
                exact: true
              },
              {
                path: '/Examples/HelloWorld',
                component: ComponentCreator('/Examples/HelloWorld', 'fe0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Examples/Image2Image',
                component: ComponentCreator('/Examples/Image2Image', '999'),
                exact: true
              },
              {
                path: '/Examples/MultiOlas',
                component: ComponentCreator('/Examples/MultiOlas', '716'),
                exact: true
              },
              {
                path: '/Examples/MultiplayerChat',
                component: ComponentCreator('/Examples/MultiplayerChat', '23c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Examples/OlasPrediction',
                component: ComponentCreator('/Examples/OlasPrediction', 'b61'),
                exact: true
              },
              {
                path: '/Examples/SimpleRAG',
                component: ComponentCreator('/Examples/SimpleRAG', '6f4'),
                exact: true
              },
              {
                path: '/GettingStarted/Abstractions',
                component: ComponentCreator('/GettingStarted/Abstractions', '5f0'),
                exact: true
              },
              {
                path: '/GettingStarted/Architecture',
                component: ComponentCreator('/GettingStarted/Architecture', 'd16'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/GettingStarted/BuildAgent',
                component: ComponentCreator('/GettingStarted/BuildAgent', '10a'),
                exact: true
              },
              {
                path: '/GettingStarted/Installation',
                component: ComponentCreator('/GettingStarted/Installation', 'd37'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/GettingStarted/InstallNode',
                component: ComponentCreator('/GettingStarted/InstallNode', '9bb'),
                exact: true
              },
              {
                path: '/GettingStarted/InstallSDK',
                component: ComponentCreator('/GettingStarted/InstallSDK', '1c3'),
                exact: true
              },
              {
                path: '/GettingStarted/Modules',
                component: ComponentCreator('/GettingStarted/Modules', '849'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/GettingStarted/NapthaCLI',
                component: ComponentCreator('/GettingStarted/NapthaCLI', '2fc'),
                exact: true
              },
              {
                path: '/GettingStarted/SDK',
                component: ComponentCreator('/GettingStarted/SDK', '28f'),
                exact: true
              },
              {
                path: '/GettingStarted/UseCases',
                component: ComponentCreator('/GettingStarted/UseCases', '304'),
                exact: true
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '9b6'),
                exact: true
              },
              {
                path: '/',
                component: ComponentCreator('/', '998'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
