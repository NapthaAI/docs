import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Naptha Docs',
  tagline: 'Collaborative Intelligence',
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
  deploymentBranch: 'gh-pages', // Branch for deployment

  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
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
    image: 'img/naptha-social.png',
    navbar: {
      title: 'Naptha AI',
      logo: {
        alt: '',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Website',
          href: 'https://naptha.ai',
          position: 'left',
        },
        {
          href: 'https://github.com/NapthaAI',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
      ],
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
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/NapthaAI',
            },
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NapthaAI',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Naptha AI`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
