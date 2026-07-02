export type ShopCategory = {
  name: string;
  slug: string;
  group: 'Business Essentials' | 'Technology' | 'Home & Lifestyle' | 'Marketplace';
  shortDescription: string;
  description: string;
  examples: string[];
  image: string;
  featured?: boolean;
};

export const shopCategories: ShopCategory[] = [
  {
    name: 'Business Tools & Software',
    slug: 'business-tools-software',
    group: 'Business Essentials',
    shortDescription: 'Software, subscriptions, and platforms that help owners run cleaner systems.',
    description:
      'Curated business software, marketing platforms, scheduling tools, finance apps, CRM options, and operational systems for owners who want practical help choosing the right stack.',
    examples: ['CRM and follow-up tools', 'Scheduling and booking', 'Marketing platforms', 'Finance and admin software'],
    image: '/images/social-card-default.png',
    featured: true,
  },
  {
    name: 'Office Products',
    slug: 'office-products',
    group: 'Business Essentials',
    shortDescription: 'Everyday office gear, supplies, furniture, and productivity essentials.',
    description:
      'Desk setups, office supplies, printers, shipping materials, signage support, and day-to-day products that keep a small business moving.',
    examples: ['Desk and workspace gear', 'Printers and paper', 'Shipping supplies', 'Organization tools'],
    image: '/images/lbs-logo.jpg',
  },
  {
    name: 'Industrial & Business Supplies',
    slug: 'industrial-business-supplies',
    group: 'Business Essentials',
    shortDescription: 'Operational supplies for service companies, shops, crews, and facilities.',
    description:
      'Work supplies, facility basics, safety products, storage, maintenance items, and operational gear for companies that need more than a laptop to do the work.',
    examples: ['Safety and PPE', 'Facility supplies', 'Storage and shelving', 'Crew basics'],
    image: '/images/pizza-world-cross-creek-location.jpg',
  },
  {
    name: 'Electronics',
    slug: 'electronics',
    group: 'Technology',
    shortDescription: 'Practical tech, devices, accessories, cameras, audio, and connectivity products.',
    description:
      'Useful electronics for business owners, teams, creators, home offices, and local operators who need dependable devices instead of trendy clutter.',
    examples: ['Phones and accessories', 'Cameras and audio', 'Networking gear', 'Charging and cables'],
    image: '/images/blog/seo-llm-2026.jpg',
    featured: true,
  },
  {
    name: 'Computers & Accessories',
    slug: 'computers-accessories',
    group: 'Technology',
    shortDescription: 'Computers, monitors, keyboards, storage, networking, and workstations.',
    description:
      'Computer hardware and accessories for better workstations, creative production, admin work, field teams, and modern business operations.',
    examples: ['Laptops and desktops', 'Monitors and docks', 'Keyboards and mice', 'Storage and backup'],
    image: '/images/social-card-default.png',
  },
  {
    name: 'Smart Home & Security',
    slug: 'smart-home-security',
    group: 'Technology',
    shortDescription: 'Security cameras, smart locks, sensors, Wi-Fi, and monitoring basics.',
    description:
      'Smart security and connected-device recommendations for offices, shops, rental spaces, home offices, and small facilities.',
    examples: ['Security cameras', 'Smart locks', 'Wi-Fi systems', 'Sensors and alarms'],
    image: '/images/blog/lead-follow-up-field-note.jpg',
  },
  {
    name: 'Home & Kitchen',
    slug: 'home-kitchen',
    group: 'Home & Lifestyle',
    shortDescription: 'Kitchen, home, storage, cleaning, organization, and comfort products.',
    description:
      'Useful home and kitchen products for owners, teams, hospitality businesses, break rooms, rentals, and everyday organization.',
    examples: ['Kitchen tools', 'Storage and organization', 'Cleaning supplies', 'Break room basics'],
    image: '/images/pizza-world-cross-creek-location.jpg',
    featured: true,
  },
  {
    name: 'Tools & Home Improvement',
    slug: 'tools-home-improvement',
    group: 'Home & Lifestyle',
    shortDescription: 'Tools, repair products, lighting, fixtures, hardware, and job-site basics.',
    description:
      'Tool and home-improvement picks for owners, facilities, home service operators, rentals, shops, and hands-on business needs.',
    examples: ['Power and hand tools', 'Lighting', 'Hardware', 'Repair supplies'],
    image: '/images/blog/lead-follow-up-field-note.jpg',
  },
  {
    name: 'Patio, Lawn & Garden',
    slug: 'patio-lawn-garden',
    group: 'Home & Lifestyle',
    shortDescription: 'Outdoor, lawn, landscaping, patio, and property-care products.',
    description:
      'Outdoor products for homes, rentals, storefronts, hospitality patios, landscaping, and property upkeep.',
    examples: ['Outdoor furniture', 'Lawn care', 'Garden tools', 'Property upkeep'],
    image: '/images/pizza-world-cross-creek-location.jpg',
  },
  {
    name: 'Health & Wellness',
    slug: 'health-wellness',
    group: 'Marketplace',
    shortDescription: 'Wellness, fitness, health support, recovery, and personal-care products.',
    description:
      'Health and wellness recommendations for owners, teams, active families, and businesses that want practical personal-care resources.',
    examples: ['Vitamins and supplements', 'Recovery tools', 'Fitness basics', 'Workplace wellness'],
    image: '/images/triple-crown-logo.jpg',
  },
  {
    name: 'Beauty & Personal Care',
    slug: 'beauty-personal-care',
    group: 'Marketplace',
    shortDescription: 'Personal-care, grooming, skin, hair, and daily routine products.',
    description:
      'Personal-care products, grooming gear, salon-adjacent essentials, and routine items that can support future retail and affiliate recommendations.',
    examples: ['Skin care', 'Hair care', 'Grooming tools', 'Daily essentials'],
    image: '/images/social-card-default.png',
  },
  {
    name: 'Clothing, Shoes & Jewelry',
    slug: 'clothing-shoes-jewelry',
    group: 'Marketplace',
    shortDescription: 'Apparel, workwear, shoes, accessories, uniforms, and gifts.',
    description:
      'Clothing and accessory categories for workwear, branded team needs, local retail picks, gifts, travel, and everyday use.',
    examples: ['Workwear', 'Shoes', 'Accessories', 'Team apparel'],
    image: '/images/lbs-logo.jpg',
  },
  {
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    group: 'Marketplace',
    shortDescription: 'Fitness, recreation, golf, outdoor gear, travel, and active lifestyle products.',
    description:
      'Sports, outdoor, recreation, and fitness products that fit future guide content, recommendations, and lifestyle-focused shop collections.',
    examples: ['Golf gear', 'Fitness equipment', 'Outdoor gear', 'Travel accessories'],
    image: '/images/pizza-world-cross-creek-location.jpg',
    featured: true,
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    group: 'Marketplace',
    shortDescription: 'Vehicle care, tools, accessories, fleet basics, and road gear.',
    description:
      'Automotive products for work vehicles, field teams, family vehicles, fleet care, cleaning, tools, and on-the-road readiness.',
    examples: ['Vehicle accessories', 'Cleaning and detailing', 'Fleet basics', 'Emergency kits'],
    image: '/images/blog/lead-follow-up-field-note.jpg',
  },
  {
    name: 'Pet Supplies',
    slug: 'pet-supplies',
    group: 'Marketplace',
    shortDescription: 'Pet food, care, travel, grooming, training, and home products.',
    description:
      'Pet supplies and recommendations that can support everyday shoppers, local pet-related businesses, and future affiliate collections.',
    examples: ['Food and treats', 'Pet care', 'Travel supplies', 'Cleaning products'],
    image: '/images/social-card-default.png',
  },
  {
    name: 'Baby & Kids',
    slug: 'baby-kids',
    group: 'Marketplace',
    shortDescription: 'Family, baby, toys, learning, school, and kids products.',
    description:
      'Baby, kids, school, toy, family, and learning products for practical household recommendations and future curated gift guides.',
    examples: ['Baby essentials', 'Kids learning', 'School supplies', 'Family travel'],
    image: '/images/lbs-logo.jpg',
  },
  {
    name: 'Books, Media & Learning',
    slug: 'books-media-learning',
    group: 'Marketplace',
    shortDescription: 'Books, training, learning resources, media, and educational content.',
    description:
      'Books, courses, media, learning resources, and business education picks that can naturally connect with the site resource library.',
    examples: ['Business books', 'Training resources', 'Guides', 'Creative media'],
    image: '/images/blog/seo-llm-2026.jpg',
  },
  {
    name: 'Grocery & Gourmet',
    slug: 'grocery-gourmet',
    group: 'Marketplace',
    shortDescription: 'Food, pantry, coffee, snacks, specialty items, and hospitality supplies.',
    description:
      'Food and grocery categories for pantry picks, office snacks, coffee, hospitality supplies, local retail ideas, and future recommendation content.',
    examples: ['Coffee and drinks', 'Snacks', 'Pantry supplies', 'Specialty food'],
    image: '/images/pizza-world-cross-creek-location.jpg',
  },
];

export const shopGroups = ['Business Essentials', 'Technology', 'Home & Lifestyle', 'Marketplace'] as const;

export function getShopCategory(slug: string) {
  return shopCategories.find((category) => category.slug === slug);
}

export function shopCategoryHref(category: ShopCategory) {
  return `/shop/${category.slug}/`;
}
