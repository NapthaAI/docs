import 'dotenv/config';
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

  // Add staticDirectories config
  staticDirectories: ['static'],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/NapthaAI/docs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          disableVersioning: true,
          includeCurrentVersion: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
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
          label: 'Blog',
          href: 'https://naptha.ai/blog?utm_source=docs_naptha',
          position: 'left',
        },
        {
          href: 'https://github.com/NapthaAI',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Overview',
              to: '/',
            },
            {
              label: 'Getting Started',
              to: '/GettingStarted/Installation',
            },
            {
              label: 'Examples',
              to: '/Examples',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Website',
              href: 'https://naptha.ai',
            },
            {
              label: 'Blog',
              href: 'https://naptha.ai/blog?utm_source=docs_naptha',
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
      additionalLanguages: ['bash', 'json', 'yaml', 'toml', 'python', 'typescript', 'markdown'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
      ],
      copyButton: true,
    },
    // Temporarily commented out Algolia search configuration
    /*
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'naptha',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
      replaceSearchResultPathname: {
        from: '(https?://docs.naptha.ai|http://localhost:3000)',
        to: '/',
      },
    },
    */
  } satisfies Preset.ThemeConfig,
};

export default config;
