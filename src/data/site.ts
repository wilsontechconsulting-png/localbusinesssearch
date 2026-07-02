import { shopCategories, shopCategoryHref } from './shopCategories';

export const site = {
  baseUrl: 'https://localbusinesssearch.com',
  title: 'Local Business Search - Business Growth, Marketing, Websites, and Automation',
  language: 'en-us',
  description:
    'Local Business Search helps businesses grow with digital marketing, search visibility, professional websites, paid advertising, automation, business tools, resources, and practical consulting.',
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
    'business tools and resource libraries',
    'practical resources for business owners',
    'local business digital resources',
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

export const mainNav: { name: string; href: string; children: NavItem[] }[] = [
  {
    name: 'Services',
    href: '/services/',
    children: [
      { name: 'Services Overview', href: '/services/', group: 'Growth Services' },
      { name: 'Professional Websites', href: '/baselayer/', group: 'Growth Services' },
      { name: 'Search & SEO', href: '/search-seo/', group: 'Growth Services' },
      { name: 'Digital Advertising', href: '/advertising/', group: 'Growth Services' },
      { name: 'Business Software', href: '/business-operations/', group: 'Technology & Operations' },
      { name: 'Automation', href: '/ai-automation/', group: 'Technology & Operations' },
      { name: 'Business Tools & Resources', href: '/platform/', group: 'Technology & Operations' },
    ] satisfies NavItem[],
  },
  {
    name: 'Industries',
    href: '/industries/',
    children: [
      { name: 'Industries Overview', href: '/industries/', group: 'Industries' },
      { name: 'Home Services', href: '/industries/home-services/', group: 'Industries' },
      { name: 'Medical', href: '/industries/medical/', group: 'Industries' },
      { name: 'Legal', href: '/industries/legal/', group: 'Industries' },
      { name: 'Local Retail', href: '/industries/local-retail/', group: 'Industries' },
      { name: 'Franchises', href: '/industries/franchises/', group: 'Industries' },
      { name: 'Municipalities', href: '/industries/municipalities/', group: 'Industries' },
    ] satisfies NavItem[],
  },
  {
    name: 'Resources',
    href: '/blog/',
    children: [
      { name: 'All Articles', href: '/blog/', group: 'Resources' },
      { name: 'Advertising Articles', href: '/blog/?category=Advertising', group: 'Resources' },
      { name: 'SEO & Search Articles', href: '/blog/?category=SEO', group: 'Resources' },
      { name: 'Automation Articles', href: '/blog/?category=AI%20Automation', group: 'Resources' },
      { name: 'Business Systems Articles', href: '/blog/?category=Business%20Systems', group: 'Resources' },
      { name: 'Business Tools Articles', href: '/blog/?category=Business%20Tools', group: 'Resources' },
    ] satisfies NavItem[],
  },
  {
    name: 'Tools',
    href: '/shop/',
    children: [
      { name: 'Tools Overview', href: '/shop/', group: 'Tools Home' },
      ...shopCategories.map((category) => ({
        name: category.name,
        href: shopCategoryHref(category),
        group: category.group,
      })),
    ] satisfies NavItem[],
  },
  {
    name: 'Results',
    href: '/results/',
    children: [
      { name: 'Results Overview', href: '/results/', group: 'Proof' },
      { name: 'Tools & Resource Platform', href: '/platform/', group: 'Proof' },
      { name: 'About Local Business Search', href: '/about/', group: 'Company' },
      { name: 'Book a Demo', href: '/demo/', group: 'Company' },
    ] satisfies NavItem[],
  },
];

export const navGroups = [
  'Growth Services',
  'Technology & Operations',
  'Industries',
  'Resources',
  'Tools Home',
  'Business Essentials',
  'Technology',
  'Home & Lifestyle',
  'Marketplace',
  'Proof',
  'Company',
];

export const footerGroups = [
  {
    title: 'Company',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about/' },
      { name: 'Results', href: '/results/' },
      { name: 'Blog / Resources', href: '/blog/' },
      { name: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Services Overview', href: '/services/' },
      { name: 'Professional Websites', href: '/baselayer/' },
      { name: 'Search / SEO', href: '/search-seo/' },
      { name: 'Advertising', href: '/advertising/' },
      { name: 'Automation', href: '/ai-automation/' },
      { name: 'Business Tools & Resources', href: '/platform/' },
      { name: 'Business Software', href: '/business-operations/' },
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
    title: 'Tools',
    links: [
      { name: 'Tools Overview', href: '/shop/' },
      { name: 'Business Tools & Software', href: '/shop/business-tools-software/' },
      { name: 'Electronics', href: '/shop/electronics/' },
      { name: 'Home & Kitchen', href: '/shop/home-kitchen/' },
      { name: 'Sports & Outdoors', href: '/shop/sports-outdoors/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy/' },
      { name: 'Terms', href: '/terms/' },
      { name: 'Book a Demo', href: '/demo/' },
    ],
  },
];
