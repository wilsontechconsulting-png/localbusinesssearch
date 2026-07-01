export const site = {
  baseUrl: 'https://localbusinesssearch.com',
  title: 'Local Business Search - AI. Business Process.',
  language: 'en-us',
  description:
    'AI-driven business systems for local companies. We build intelligent systems that improve how your business operates-from lead generation to financial visibility to automated operations.',
  author: 'Local Business Search',
  businessName: 'Local Business Search',
  businessTagline: 'AI. Business Process.',
  businessType: 'ProfessionalService',
  businessEmail: 'jed@powerofadvertising.com',
  businessPhone: '+1-618-741-6143',
  businessStreet: '23343 Colina Way',
  businessCity: 'Charlotte Harbor',
  businessRegion: 'FL',
  businessPostalCode: '33980',
  businessCountry: 'US',
  businessLatitude: '26.9617',
  businessLongitude: '-82.0909',
  businessPriceRange: '$$',
  businessHours: 'Mo-Fr 09:00-17:00',
  defaultSocialImage: '/images/social-card-default.png',
  twitterHandle: '@Jed_X_Wilson',
  serviceArea: ['United States', 'Florida', 'local and regional service businesses'],
  sameAs: ['https://twitter.com/Jed_X_Wilson'],
  knowsAbout: [
    'AI automation for local businesses',
    'business process automation',
    'digital advertising management',
    'lead response automation',
    'CRM and operations integration',
    'marketing attribution',
    'local business systems',
  ],
};

export type NavItem = {
  name: string;
  href: string;
  group?: string;
  external?: boolean;
};

export const mainNav = [
  {
    name: 'Business Processes',
    href: '/platform/',
    children: [
      { name: 'The Platform', href: '/platform/', group: 'Core Systems' },
      { name: 'Business Systems', href: '/business-operations/', group: 'Core Systems' },
      { name: 'Advertising', href: '/advertising/', group: 'Core Systems' },
      { name: 'Baselayer', href: '/baselayer/', group: 'Core Systems' },
      { name: 'AI Automation', href: '/ai-automation/', group: 'AI & Model Research' },
      {
        name: 'Artificial Analysis Models',
        href: 'https://artificialanalysis.ai/leaderboards/models',
        group: 'AI & Model Research',
        external: true,
      },
      {
        name: 'Vellum LLM Leaderboard',
        href: 'https://www.vellum.ai/open-llm-leaderboard',
        group: 'AI & Model Research',
        external: true,
      },
      {
        name: 'Hugging Face Leaderboard',
        href: 'https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard',
        group: 'AI & Model Research',
        external: true,
      },
      {
        name: 'OpenRouter Rankings',
        href: 'https://openrouter.ai/rankings',
        group: 'AI & Model Research',
        external: true,
      },
      { name: 'Industries', href: '/industries/', group: 'Markets & Proof' },
      { name: 'Results', href: '/results/', group: 'Markets & Proof' },
      { name: 'All Articles', href: '/blog/', group: 'Resources' },
      { name: 'AI Automation Articles', href: '/blog/?category=AI%20Automation', group: 'Resources' },
      { name: 'Business Systems Articles', href: '/blog/?category=Business%20Systems', group: 'Resources' },
      { name: 'Advertising Articles', href: '/blog/?category=Advertising', group: 'Resources' },
      { name: 'SEO & AI Search', href: '/blog/?category=SEO', group: 'Resources' },
      { name: 'Business Tools', href: '/blog/?category=Business%20Tools', group: 'Resources' },
      { name: 'About', href: '/about/', group: 'Company' },
    ] satisfies NavItem[],
  },
];

export const navGroups = ['Core Systems', 'AI & Model Research', 'Markets & Proof', 'Resources', 'Company'];

export const footerGroups = [
  {
    title: 'Systems',
    links: [
      { name: 'The Platform', href: '/platform/' },
      { name: 'Business Systems', href: '/business-operations/' },
      { name: 'AI Automation', href: '/ai-automation/' },
      { name: 'Advertising', href: '/advertising/' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Home Services', href: '/industries/home-services/' },
      { name: 'Medical', href: '/industries/medical/' },
      { name: 'Legal', href: '/industries/legal/' },
      { name: 'Local Retail', href: '/industries/local-retail/' },
      { name: 'Franchises', href: '/industries/franchises/' },
      { name: 'Municipalities', href: '/industries/municipalities/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Results', href: '/results/' },
      { name: 'Resources', href: '/blog/' },
      { name: 'About', href: '/about/' },
      { name: 'Book a Demo', href: '/demo/' },
    ],
  },
];
