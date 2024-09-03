import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Naptha Docs',
  tagline: 'Decentralized AI Simplified',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.naptha.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NapthaAI', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'main', // Branch for deployment

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/NapthaAI/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/naptha-social.jpg',
    navbar: {
      title: 'Naptha AI',
      logo: {
        alt: 'Naptha AI',
        src: 'img/logo.svg',
      },
      // items: [
      //   {
      //     type: 'docSidebar',
      //     sidebarId: 'docs',
      //     position: 'left',
      //     label: 'Docs',
      //   },
      // ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Website',
              href: 'https://naptha.ai',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/NapthaAI',
            },
          ],
        },
        {
          title: 'Code Base',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NapthaAI',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Naptha AI.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
