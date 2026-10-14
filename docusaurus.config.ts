import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Onam Cloud Documentation',
  tagline: 'Your cloud. Your data. Your rules.',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://onamcloud.com',
  baseUrl: '/',
  organizationName: 'onamcloud',
  projectName: 'documentation',
  onBrokenLinks: 'throw',
 
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: false,
      defaultMode: 'light',
      disableSwitch: false,
    },
    navbar: {
      logo: {
        alt: 'Onam Cloud',
        src: 'img/onam-cloud-logo.svg',
        href: '/home',
      },
      items: [
        {
          to: '/docs/intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          label: 'Get started',
          position: 'left',
          items: [
            {label: 'Onam Cloud overview', to: '/docs/intro'},
            {
              label: 'Choose a deployment model',
              to: '/docs/platform/choose-deployment-model',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Solutions',
          position: 'left',
          items: [
            {label: 'OnPublic', to: '/docs/solutions/onpublic'},
            {label: 'OnPrivate', to: '/docs/solutions/onprivate'},
            {label: 'OnBYOPC', to: '/docs/solutions/onbypc'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Platform',
          position: 'left',
          items: [
            {
              label: 'Security and sovereignty',
              to: '/docs/platform/security-and-sovereignty',
            },
            {
              label: 'Infrastructure and regions',
              href: 'https://onamcloud.com/infrastructure',
            },
          ],
        },
        {to: '/faq', label: 'FAQ', position: 'left'},
        {
          type: 'dropdown',
          label: 'Onam Cloud',
          position: 'left',
          items: [
            {label: 'About', href: 'https://onamcloud.com/about'},
            {label: 'Plans', href: 'https://onamcloud.com/plans'},
          ],
        },
        {href: 'https://onamcloud.com/contact', label: 'Talk to us', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting started', to: '/docs/intro'},
            {label: 'Choose a deployment model', to: '/docs/platform/choose-deployment-model'},
            {label: 'Security and sovereignty', to: '/docs/platform/security-and-sovereignty'},
            {label: 'FAQ', to: '/faq'},
          ],
        },
        {
          title: 'Solutions',
          items: [
            {label: 'OnPublic', href: 'https://onamcloud.com/solutions/on-public'},
            {label: 'OnPrivate', href: 'https://onamcloud.com/solutions/on-private'},
            {label: 'OnBYOPC', href: 'https://onamcloud.com/solutions/on-byopc'},
          ],
        },
        {
          title: 'Onam Cloud',
          items: [
            {label: 'About', href: 'https://onamcloud.com/about'},
            {label: 'Infrastructure', href: 'https://onamcloud.com/infrastructure'},
            {label: 'Plans', href: 'https://onamcloud.com/plans'},
            {label: 'Contact', href: 'https://onamcloud.com/contact'},
            {label: 'Compliance', href: 'https://onamcloud.com/compliance'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy', href: 'https://onamcloud.com/privacy'},
            {label: 'Terms', href: 'https://onamcloud.com/terms'},
            {label: 'Acceptable use', href: 'https://onamcloud.com/acceptable-use'},
            {label: 'SLA', href: 'https://onamcloud.com/sla'},
            {label: 'Escalation matrix', href: 'https://onamcloud.com/escalation-matrix'},
          ],
        },
      ],
      logo: {
        alt: 'Onam Cloud',
        src: 'img/onam-cloud-logo.svg',
        href: 'https://onamcloud.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Onam Cloud. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
