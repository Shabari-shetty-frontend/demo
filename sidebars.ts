import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  onamCloudSidebar: [
    {type: 'doc', id: 'intro', label: 'Documentation'},
    {
      type: 'category',
      label: 'Get started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'platform/choose-deployment-model',
          label: 'Choose a deployment model',
        },
      ],
    },
    {
      type: 'category',
      label: 'Solutions',
      collapsed: false,
      items: [
        {type: 'doc', id: 'solutions/onpublic', label: 'OnPublic'},
        {type: 'doc', id: 'solutions/onprivate', label: 'OnPrivate'},
        {type: 'doc', id: 'solutions/onbypc', label: 'OnBYOPC'},
      ],
    },
    {
      type: 'category',
      label: 'Platform',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'platform/security-and-sovereignty',
          label: 'Security and sovereignty',
        },
        {
          type: 'link',
          label: 'Infrastructure and regions',
          href: 'https://onamcloud.com/infrastructure',
        },
      ],
    },
    {type: 'link', label: 'FAQ', href: '/faq'},
  ],
};

export default sidebars;
