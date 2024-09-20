import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '🏗 Scaffold Move Docs',
  tagline: 'Open-source toolkit for building on Aptos',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://scaffold-move-docs.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
        includeParentCategoriesInPageTitle: true,
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // sidebarCollapsible: false,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo-small.png',
    navbar: {
      title: '🏗 Scaffold Move Docs',
      items: [
        {
          href: 'https://github.com/arjanjohan/scaffold-move',
          label: 'GitHub Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/arjanjohan/scaffold-move-docs',
          label: 'GitHub Scaffold Move',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Built by arjanjohan',
          items: [
            {
              label: 'X',
              href: 'https://x.com/arjanjohan',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/arjanjohan/',
            },
          ]
        },
        {
          title: 'Github',
          items: [
            {
              label: 'Scaffold Move',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Docs',
              href: 'https://discordapp.com/invite/docusaurus',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/+lOn2MJawQlc1YjA8',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} arjanjohan. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
