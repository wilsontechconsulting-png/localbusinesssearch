export const site = {
  baseUrl: 'https://localbusinesssearch.com',
  title: 'Local Business Search - Business Growth, Marketing, Websites, and Automation',
  language: 'en-us',
  description:
    'Local Business Search helps businesses grow with digital marketing, search visibility, professional websites, paid advertising, automation, analytics, and practical consulting.',
  author: 'Local Business Search',
  businessName: 'Local Business Search',
  businessTagline: 'Business Growth Systems',
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
    'digital marketing for local businesses',
    'local SEO and search visibility',
    'professional website strategy',
    'digital advertising management',
    'paid advertising management',
    'business process automation',
    'CRM and operations integration',
    'marketing attribution',
    'AI automation for local businesses',
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
    name: 'Services',
    href: '/services/',
    children: [
      { name: 'Services Overview', href: '/services/', group: 'Growth Services' },
      { name: 'Digital Advertising', href: '/advertising/', group: 'Growth Services' },
      { name: 'Search Visibility', href: '/blog/?category=SEO', group: 'Growth Services' },
      { name: 'Websites & Conversion', href: '/baselayer/', group: 'Growth Services' },
      { name: 'Business Software', href: '/business-operations/', group: 'Technology & Operations' },
      { name: 'Automation', href: '/ai-automation/', group: 'Technology & Operations' },
      { name: 'Analytics & Reporting', href: '/platform/', group: 'Technology & Operations' },
      {
        name: 'Artificial Analysis Models',
        href: 'https://artificialanalysis.ai/leaderboards/models',
        group: 'AI Research Links',
        external: true,
      },
      {
        name: 'Vellum LLM Leaderboard',
        href: 'https://www.vellum.ai/open-llm-leaderboard',
        group: 'AI Research Links',
        external: true,
      },
      {
        name: 'Hugging Face Leaderboard',
        href: 'https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard',
        group: 'AI Research Links',
        external: true,
      },
      {
        name: 'OpenRouter Rankings',
        href: 'https://openrouter.ai/rankings',
        group: 'AI Research Links',
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

export const navGroups = ['Growth Services', 'Technology & Operations', 'Markets & Proof', 'Resources', 'Company', 'AI Research Links'];

export const footerGroups = [
  {
    title: 'Services',
    links: [
      { name: 'Services Overview', href: '/services/' },
      { name: 'Advertising', href: '/advertising/' },
      { name: 'Websites & Conversion', href: '/baselayer/' },
      { name: 'Automation', href: '/ai-automation/' },
      { name: 'Analytics', href: '/platform/' },
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
