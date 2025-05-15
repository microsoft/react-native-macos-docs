import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "microsoft";
const projectName = "react-native-macos";
const projectFriendlyName = "React Native macOS";
const githubUrl = "https://github.com/" + organizationName + "/" + projectName;
const mainReadmeUrl = githubUrl + "/#readme";
const mainBranchUrl = githubUrl + "/tree/main";
const docsiteUrl = mainBranchUrl + "/docsite";

const config: Config = {
  title: 'React Native macOS',
  tagline: 'Build native macOS apps using React Native',
  favicon: 'img/favicon.ico',

  url: 'https://' + organizationName + '.github.io',
  baseUrl: "/" + projectName + "/",

  organizationName,  
  projectName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: docsiteUrl + "/",
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/react-logo.svg',
    navbar: {
      title: projectFriendlyName,
      logo: {
        alt: 'react native logo',
        src: 'img/react-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          src: "img/github-logo.svg",
          href: mainReadmeUrl,
          className: "github-mark-24px",
          position: "right",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
