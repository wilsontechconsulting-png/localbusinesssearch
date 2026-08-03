export type PrivateResource = {
  label: string;
  description: string;
  href: string;
};

export type PrivateClientGroup = {
  id: string;
  name: string;
  type: string;
  resources: PrivateResource[];
};

export const privateClientGroups: PrivateClientGroup[] = [
  {
    id: 'pizza-world-branson',
    name: 'Pizza World Branson',
    type: 'Restaurant / Franchise',
    resources: [
      {
        label: 'Social Advertising Estimate',
        description: 'Campaign overview and budget estimate page.',
        href: '/pizza-world-branson/',
      },
      {
        label: 'Social Advertising Quote',
        description: 'Client quote page for review and approval.',
        href: '/pizza-world-branson-quote/',
      },
      {
        label: 'May 16-31 Marketing Performance Report',
        description: 'Executive dashboard with advertising results and billing summary.',
        href: '/pizza-world-branson-may-report/',
      },
      {
        label: 'July Campaign & Billing Review',
        description: 'Google and Meta performance review with June/July billing summary.',
        href: '/pizza-world-branson-july-billing-review/',
      },
    ],
  },
  {
    id: 'pizza-world-granite-city',
    name: 'Pizza World Granite City',
    type: 'Restaurant / Franchise',
    resources: [
      {
        label: 'Facebook & Instagram Campaign Report',
        description: 'Private campaign performance report.',
        href: '/pizza-world-granite-city-facebook-report/',
      },
    ],
  },
  {
    id: 'triple-crown-chiropractic',
    name: 'Triple Crown Chiropractic',
    type: 'Healthcare / Chiropractic',
    resources: [
      {
        label: 'Social Media Advertising Proposal',
        description: 'Monthly ad spend breakdown and management fee proposal.',
        href: '/triple-crown-social/',
      },
      {
        label: 'Website Proposal',
        description: 'Website redesign proposal and strategy page.',
        href: '/triple-crown-chiropractic/',
      },
    ],
  },
  {
    id: 'emerge-it',
    name: 'Emerge IT Solutions',
    type: 'Technology / IT Services',
    resources: [
      {
        label: 'Search & AI Visibility Audit',
        description: 'Private SEO, schema, AEO, and SCO audit summary.',
        href: '/emerge-it-audit/',
      },
    ],
  },
];
