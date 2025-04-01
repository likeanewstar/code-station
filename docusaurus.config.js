// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Code Station - Newstarion',
  tagline: '개발자 코드 아카이브 저장소',
  favicon: 'img/favicon.ico',

  // GitHub Pages 설정
  url: 'https://likeanewstar.github.io',
  baseUrl: process.env.NODE_ENV === 'production' ? '/code-station/' : '/',
  organizationName: 'likeanewstar', // GitHub username
  projectName: 'code-station', // repository name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/likeanewstar/code-station/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/likeanewstar/code-station/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Code Station',
        logo: {
          alt: 'Code Station Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '문서',
          },
          { to: '/blog', label: '블로그', position: 'left' },
          {
            href: 'https://github.com/likeanewstar/code-station',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '문서',
            items: [
              {
                label: '시작하기',
                type: 'docSidebar',
                sidebarId: 'tutorialSidebar',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '커뮤니티',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/likeanewstar/code-station',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Code Station - Newstarion. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
}

module.exports = config
