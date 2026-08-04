export type PrivateMetric = {
  label: string;
  value: string;
  note?: string;
  tone?: 'primary' | 'good' | 'warning';
};

export type PrivateInfoCard = {
  title: string;
  body?: string;
  items?: string[];
  metrics?: PrivateMetric[];
};

export type PrivateTable = {
  title: string;
  note?: string;
  headers: string[];
  rows: string[][];
};

export type PrivateClientPage = {
  title: string;
  description: string;
  canonicalPath: string;
  kicker: string;
  client: string;
  period?: string;
  summary: string;
  logo?: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  badges: string[];
  metrics?: PrivateMetric[];
  sections: {
    eyebrow?: string;
    title: string;
    body?: string;
    cards?: PrivateInfoCard[];
    table?: PrivateTable;
  }[];
  cta?: {
    label: string;
    href?: string;
    note?: string;
  };
  heroCta?: boolean;
  privateNote?: string;
};

export const pizzaWorldBransonCampaign: PrivateClientPage = {
  title: 'Pizza World Branson Social Campaign Preview',
  description: 'Private social advertising campaign preview for Pizza World Branson.',
  canonicalPath: '/pizza-world-branson/',
  kicker: 'Facebook + Instagram Campaign Preview',
  client: 'Pizza World Branson',
  period: 'Summer campaign',
  logo: '/images/lbs-icon.jpg',
  image: {
    src: '/images/pizza-world-branson-campaign-preview.png',
    alt: 'Pizza World Branson campaign creative preview',
    caption: 'Primary campaign creative',
  },
  summary:
    'Campaign structure, ad copy, targeting, creative direction, and cost estimate for the Pizza World Branson summer social campaign.',
  badges: ['Order online focus', 'Tourist and local targeting', 'Facebook and Instagram', 'Private preview'],
  sections: [
    {
      title: 'Campaign angle',
      body:
        'The campaign uses "Branson original gourmet pizza" as the local hook while keeping the action simple: order online. The audience includes locals, families, visitors, and groups already in the Branson area.',
      cards: [
        {
          title: 'Primary action',
          body: 'Order Online should remain the main call to action across the campaign.',
        },
        {
          title: 'Creative direction',
          body: 'Use food-first visuals that show variety, appetite appeal, and an easy meal option after a day in Branson.',
        },
      ],
    },
    {
      title: 'Recommended ad copy',
      cards: [
        {
          title: 'Option 1',
          body:
            'Branson original gourmet pizza is ready when you are. Order online from Pizza World Branson for pizza, wings, subs, salads, pasta, and more.',
        },
        {
          title: 'Option 2',
          body:
            'Hungry in Branson? Skip the wait and order Pizza World online. Gourmet pizzas and crowd-pleasing favorites for locals, families, and visitors.',
        },
        {
          title: 'Option 3',
          body:
            'Pizza night just got easier. Pizza World Branson makes it simple to order online and feed the whole group.',
        },
      ],
    },
    {
      title: 'Campaign setup',
      cards: [
        {
          title: 'Objective',
          body: 'Drive online orders and high-intent traffic from people already in or near Branson.',
        },
        {
          title: 'Placements',
          body: 'Facebook Feed, Instagram Feed, Stories, Reels, and local mobile placements.',
        },
        {
          title: 'Target areas',
          items: [
            '225 Cross Creek Blvd, Ste. F, Branson, MO 65616',
            '3600 W. 76 Country Blvd, Branson, MO 65616',
            'Nearby resort, attraction, and family travel corridors',
          ],
        },
        {
          title: 'Timing',
          items: ['Heavier delivery Wednesday through Sunday', 'Prioritize lunch, dinner, and evening windows'],
        },
      ],
    },
    {
      title: 'Estimated monthly cost',
      body: 'Estimates include ad spend plus the 20% monthly management fee, per location.',
      table: {
        title: 'Campaign range',
        headers: ['Period', 'Structure', 'Estimated range'],
        rows: [
          ['May 15-31', 'Launch plus Wednesday-Sunday schedule', '$240-$336'],
          ['June', 'Wednesday-Sunday schedule', '$240-$432'],
          ['July', 'Wednesday-Sunday schedule', '$276-$497'],
          ['Aug. 1-15', 'Wednesday-Sunday through Aug. 15', '$132-$238'],
        ],
      },
    },
  ],
  cta: {
    label: 'Already paid - no further action needed to start this campaign',
    note: 'Campaign setup, ad account preparation, targeting structure, and initial creative setup can move forward.',
  },
  privateNote: 'This page is noindex/nofollow and is not intended to appear in search engines.',
};

export const pizzaWorldBransonQuote: PrivateClientPage = {
  title: 'Pizza World Branson Social Advertising Quote',
  description: 'Private social advertising quote for Pizza World Branson.',
  canonicalPath: '/pizza-world-branson-quote/',
  kicker: 'Social Advertising Quote',
  client: 'Pizza World Branson',
  period: 'May 15 through August 15',
  logo: '/images/lbs-icon.jpg',
  summary:
    'A simple cost breakdown for the proposed Pizza World Branson social media advertising campaign.',
  badges: ['Setup fee', 'Monthly management', 'Meta campaign', 'Private quote'],
  sections: [
    {
      title: 'Recommended campaign structure',
      body:
        'Launch strong for the first 3-4 days at $25/day per location so the campaign has enough budget to train and optimize. After launch, run Wednesday through Sunday with a daily budget between $10-$18/day per location.',
      cards: [
        { title: 'Launch window', body: '3-4 days at $25/day per location.' },
        { title: 'Ongoing schedule', body: 'Wednesday through Sunday, skipping Monday and Tuesday.' },
        { title: 'Management fee', body: '20% of monthly ad spend.' },
      ],
    },
    {
      title: 'Estimated monthly cost',
      table: {
        title: 'Cost range',
        note: 'Each estimate includes ad spend plus the 20% monthly management fee.',
        headers: ['Period', 'Schedule', 'Minimum', 'Maximum'],
        rows: [
          ['May 15-31', 'Launch plus Wednesday-Sunday', '$240', '$336'],
          ['June', 'Wednesday-Sunday', '$240', '$432'],
          ['July', 'Wednesday-Sunday', '$276', '$497'],
          ['August 1-15', 'Wednesday-Sunday through Aug. 15', '$132', '$238'],
        ],
      },
    },
    {
      title: 'Getting started',
      body:
        'There is a $250 setup fee to begin the campaign. This covers initial campaign setup, ad account preparation, targeting structure, and initial creative setup.',
    },
  ],
  cta: {
    label: 'Get Started - $250 Setup Fee',
    href: 'https://buy.stripe.com/00w9AUbUB0kLd1nfVf3ZK01',
    note: 'Campaign setup and launch preparation begins once the initial setup fee has been received.',
  },
  privateNote: 'Credit card payments include a 4% processing fee. This page is private and noindex.',
};

export const pizzaWorldBransonMayReport: PrivateClientPage = {
  title: 'Pizza World Branson Marketing Performance Report',
  description: 'Private marketing performance report for Pizza World Branson, May 16-31, 2026.',
  canonicalPath: '/pizza-world-branson-may-report/',
  kicker: 'Private Campaign Report',
  client: 'Pizza World Branson',
  period: 'May 16-31, 2026',
  logo: '/images/lbs-icon.jpg',
  summary:
    'Pizza World Branson invested $703.63 in digital advertising over 16 days, averaging $43.98 per day across Google and Facebook. Campaigns generated more than 131,000 ad impressions, 1,042 Google clicks, 45,374 Facebook reach, and 318 Google conversions.',
  badges: ['Google Ads', 'Facebook Ads', 'Performance report', 'Private'],
  metrics: [
    { label: 'Total investment', value: '$703.63', note: '16-day campaign', tone: 'primary' },
    { label: 'Avg daily spend', value: '$43.98', note: 'Across Google and Facebook' },
    { label: 'Total impressions', value: '131,121+', note: 'Google + Facebook' },
    { label: 'Google conversions', value: '318', note: '$1.16 avg cost', tone: 'good' },
    { label: 'Facebook reach', value: '45,374', note: 'People reached' },
  ],
  sections: [
    {
      title: 'Advertising investment overview',
      cards: [
        { title: 'Google spend', metrics: [{ label: 'Spend', value: '$367.67' }, { label: 'Budget share', value: '52.2%' }] },
        { title: 'Facebook spend', metrics: [{ label: 'Spend', value: '$335.96' }, { label: 'Budget share', value: '47.8%' }] },
        { title: 'Reporting period', metrics: [{ label: 'Days', value: '16' }, { label: 'Avg daily investment', value: '$43.98' }] },
      ],
    },
    {
      title: 'Google Ads performance',
      table: {
        title: 'Both Branson locations',
        headers: ['Location', 'Spend', 'Clicks', 'Impressions', 'CTR', 'Conversions', 'Cost / conversion'],
        rows: [
          ['Cross Creek', '$185.14', '552', '7,994', '6.91%', '168', '$1.10'],
          ['Extreme Racing Highway', '$182.54', '490', '7,210', '6.80%', '150', '$1.22'],
          ['Combined', '$367.67', '1,042', '15,204', '6.85%', '318', '$1.16'],
        ],
      },
    },
    {
      title: 'Facebook performance',
      table: {
        title: 'Reach and impressions',
        headers: ['Location', 'Spend', 'Reach', 'Impressions'],
        rows: [
          ['Cross Creek', '$161.73', '20,784', '56,257'],
          ['Extreme Racing Highway', '$174.23', '24,590', '59,660'],
          ['Combined', '$335.96', '45,374', '115,917'],
        ],
      },
    },
    {
      title: 'Payment summary',
      table: {
        title: 'Invoice summary',
        headers: ['Invoice', 'Amount'],
        rows: [
          ['Google invoice (#PW-G-2026-05)', '$0.00 due here - ad spend already paid directly'],
          ['Facebook invoice (#PW-F-2026-05)', '$495.75'],
          ['Grand total due', '$495.75'],
        ],
      },
    },
  ],
  cta: {
    label: 'Pay May Invoice - $495.75',
    href: 'https://invoice.stripe.com/i/acct_17bKd4JpTGe7VUqE/live_YWNjdF8xN2JLZDRKcFRHZTdWVXFFLF9VaThhSUtNQmZOTnFhTThBMENJYUk0ejNVZzkyQnNpLDE3MjEwMDkzMw0200Jq4Ati6Z?s=db',
    note: 'Payment due upon receipt. Questions? Contact jed@powerofadvertising.com.',
  },
  privateNote: 'Private client report. This page is noindex/nofollow.',
};

export const pizzaWorldBransonJulyBillingReview: PrivateClientPage = {
  title: 'Pizza World Branson July Campaign and Billing Review',
  description: 'Private July 2026 campaign performance and billing review for Pizza World Branson.',
  canonicalPath: '/pizza-world-branson-july-billing-review/',
  kicker: 'Private Campaign + Billing Review',
  client: 'Pizza World Branson',
  period: 'June 1-July 31, 2026 Google Ads | July 1-31, 2026 Facebook and Instagram',
  logo: '/images/lbs-icon.jpg',
  summary:
    'Google Ads generated 5,284 clicks and 1,701 Google-hosted actions across June and July, while the July Facebook and Instagram awareness campaign reached 39,039 people at a very efficient $2.73 CPM. Google ad spend was already paid directly by credit card, so this review bills only the 20% Google management fee, plus July Meta reimbursement and management.',
  badges: ['Google Ads', 'Facebook + Instagram', 'Billing review', 'No-index private page'],
  metrics: [
    { label: 'Total invoice due', value: '$685.98', note: 'Pay securely through Stripe', tone: 'primary' },
    { label: 'Google clicks', value: '5,284', note: 'June + July' },
    { label: 'Google actions', value: '1,701', note: 'Calls and directions', tone: 'good' },
    { label: 'Google avg CPC', value: '$0.28', note: '$1,486.38 spend / 5,284 clicks', tone: 'good' },
    { label: 'Meta reach', value: '39,039', note: 'July awareness campaign' },
    { label: 'Meta CPM', value: '$2.73', note: 'Cost per 1,000 impressions', tone: 'good' },
  ],
  sections: [
    {
      title: 'Billing summary',
      body:
        'No June Facebook or Instagram billing is included. The June line below is Google Ads management only because the ad spend itself was already paid directly through the client credit card. July includes Google Ads management, plus reimbursement for Facebook and Instagram ad spend and the 20% Meta management fee.',
      table: {
        title: 'Amount due after direct ad-spend payments',
        headers: ['Item', 'Ad spend basis', 'Billing treatment', 'Amount due'],
        rows: [
          ['June Google Ads management', '$582.68', '20% management fee only', '$116.54'],
          ['July Google Ads management', '$903.70', '20% management fee only', '$180.74'],
          ['July Facebook + Instagram ad reimbursement', '$323.92', 'Reimburse Meta ad spend', '$323.92'],
          ['July Facebook + Instagram management', '$323.92', '20% management fee', '$64.78'],
          ['Total due', '$1,810.30 total managed spend basis', 'Google management + Meta reimbursement + Meta management', '$685.98'],
        ],
      },
    },
    {
      title: 'Google Ads June and July performance',
      body:
        'The Google campaigns scaled in July without losing efficiency. Spend increased from June to July, but clicks grew faster than spend, average CPC improved from about $0.31 to $0.27, and cost per Google-hosted action improved from $0.92 to $0.85.',
      table: {
        title: 'Google Ads combined Branson locations',
        headers: ['Period', 'Spend', 'Impressions', 'Clicks', 'CTR', 'Actions', 'Cost / action', 'Avg CPC'],
        rows: [
          ['June 2026', '$582.68', '31,032', '1,906', '6.14%', '632', '$0.92', '$0.31'],
          ['July 2026', '$903.70', '48,699', '3,378', '6.94%', '1,069', '$0.85', '$0.27'],
          ['June + July', '$1,486.38', '79,731', '5,284', '6.63%', '1,701', '$0.87', '$0.28'],
        ],
      },
    },
    {
      title: 'July Google campaign readout',
      cards: [
        {
          title: 'Extreme Racing location',
          body:
            'This campaign delivered the larger volume in July: 32,111 impressions, 2,063 clicks, 666 Google-hosted actions, and a $0.89 cost per action. That is strong scale for a restaurant campaign because it kept action cost under one dollar while producing meaningful local search activity.',
        },
        {
          title: 'Cross Creek location',
          body:
            'Cross Creek produced 16,588 impressions, 1,315 clicks, 403 Google-hosted actions, and a $0.78 cost per action. The campaign was limited by budget, which means Google saw more available demand than the daily budget allowed it to capture.',
        },
        {
          title: 'CMO assessment',
          body:
            'The Google spend is justified. The campaigns are producing restaurant-intent behavior: clicks, calls, and direction requests from people already in-market. The July increase was not wasteful because efficiency improved while volume increased.',
        },
      ],
    },
    {
      title: 'Facebook and Instagram July performance',
      body:
        'The Meta campaign was built as a Branson awareness campaign, so the main job was affordable local reach and repeated exposure, not pure click volume. It reached 39,039 people, delivered 118,543 impressions, and averaged 3.04 views per person for $323.92.',
      table: {
        title: 'Meta July 1-31, 2026',
        headers: ['Spend', 'Reach', 'Impressions', 'Frequency', 'CPM', 'Link clicks', 'Link CPC', 'All clicks'],
        rows: [
          ['$323.92', '39,039', '118,543', '3.04', '$2.73', '196', '$1.65', '322'],
        ],
      },
    },
    {
      title: 'Benchmark comparison',
      body:
        'Benchmarks are directional because restaurant campaigns vary by objective. Google Performance Max is not the same as search-only advertising, and the Meta campaign was awareness/reach, not a traffic campaign. Even with that caveat, the Branson numbers are efficient where it matters.',
      cards: [
        {
          title: 'Google Ads',
          body:
            'LocaliQ 2026 search benchmarks put Restaurants & Food around a 6.83% CTR and $2.05 average CPC. Branson Google produced a 6.94% July CTR and about $0.27 CPC, so click efficiency was far better than typical restaurant search benchmarks.',
        },
        {
          title: 'Meta awareness',
          body:
            '2026 Meta benchmark summaries commonly show CPMs in the mid-teens, and platform/placement comparisons often show Facebook and Instagram CPMs around $6-$15. Branson July came in at $2.73 CPM, which is very efficient for local awareness.',
        },
        {
          title: 'Click-through context',
          body:
            'Meta link CTR was lower than restaurant traffic benchmarks, but this was an awareness campaign optimized for reach. For this objective, the stronger signals are low CPM, healthy frequency, and broad local market coverage.',
        },
      ],
    },
    {
      title: 'Recommendation',
      cards: [
        {
          title: 'Continue Google at the current structure',
          body:
            'Both locations are producing low-cost calls and directions. The Cross Creek campaign being limited by budget is a sign that a modest budget increase could capture more demand if the business wants more volume.',
        },
        {
          title: 'Keep Meta focused on food-first creative',
          body:
            'The July Meta campaign bought cheap reach. The next improvement should be creative testing: pizza, wings, lunch/dinner offers, family meal messaging, and short video built for Reels and Stories.',
        },
        {
          title: 'Payment link is ready',
          body:
            'The invoice payment link has been added to this private review page so the approved balance can be paid securely through Stripe.',
        },
      ],
    },
    {
      title: 'Benchmark sources used',
      table: {
        title: 'Reference points',
        headers: ['Source', 'Benchmark used'],
        rows: [
          ['LocaliQ 2026 Search Advertising Benchmarks', 'Restaurants & Food average CPC around $2.05 and average CTR around 6.83%.'],
          ['LocaliQ / WordStream Facebook benchmarks', 'Restaurants & Food traffic CPC around $0.72 and CTR around 1.67%; objective matters.'],
          ['2026 Meta benchmark summaries', 'Common CPM ranges are materially higher than Branson July at $2.73 CPM.'],
        ],
      },
    },
  ],
  cta: {
    label: 'Pay invoice here',
    href: 'https://invoice.stripe.com/i/acct_17bKd4JpTGe7VUqE/live_YWNjdF8xN2JLZDRKcFRHZTdWVXFFLF9WMFR0Nk9BNDVUMENZeDBwN0JKdjhTR0JXYUx1TUdFLDE3NjMzMTgwNw0200ej5MX8S5?s=db',
    note: 'Secure payment through Stripe. This includes Google management fees, July Meta ad spend reimbursement, and July Meta management.',
  },
  heroCta: true,
  privateNote: 'Private client billing review. This page is noindex/nofollow and should not appear in search engines.',
};

export const pizzaWorldGraniteCityReport: PrivateClientPage = {
  title: 'Pizza World Granite City Facebook Campaign Report',
  description: 'Private Facebook and Instagram campaign report for Pizza World Granite City.',
  canonicalPath: '/pizza-world-granite-city-facebook-report/',
  kicker: 'Private Campaign Report',
  client: 'Pizza World Granite City',
  period: 'April 14 - May 16, 2026',
  logo: '/images/lbs-icon.jpg',
  summary:
    'The campaign delivered efficient local awareness across Meta, reaching 48,124 people and generating 198,680 impressions from April 14 through May 16.',
  badges: ['Facebook', 'Instagram', 'Local awareness', 'Private report'],
  metrics: [
    { label: 'Total reach', value: '48,124', note: 'People reached', tone: 'primary' },
    { label: 'Total impressions', value: '198,680', note: 'Ad views delivered' },
    { label: 'Frequency', value: '4.13', note: 'Average views per person' },
    { label: 'Amount spent', value: '$608.53', note: 'Meta ad spend' },
    { label: 'Clicks', value: '372', note: 'All clicks reported by Meta' },
    { label: 'CTR', value: '0.19%', note: 'All clicks' },
  ],
  sections: [
    {
      title: 'Benchmark readout',
      body:
        'The campaign bought meaningful local attention at a price that makes sense for a restaurant. Nearly 50,000 people were reached and the market saw the Pizza World name nearly 200,000 times for about six hundred dollars in ad spend.',
      cards: [
        { title: 'Campaign CPM', body: '$3.06, compared with common restaurant awareness CPMs around $7.50-$15.' },
        { title: 'Cost per 1,000 people reached', body: '$12.65 for local awareness.' },
        { title: 'Frequency', body: '4.13x, a healthy repetition level for restaurant recall.' },
      ],
    },
    {
      title: 'Campaign cost',
      table: {
        title: 'Billing summary',
        headers: ['Item', 'Amount'],
        rows: [
          ['Meta ad spend', '$608.53'],
          ['Management fee (20%)', '$121.71'],
          ['Total campaign invoice', '$730.24'],
        ],
      },
    },
    {
      title: 'Recommendation',
      cards: [
        { title: 'Keep Reels in the mix', body: 'Reels drove a major share of reported impressions and should stay in the placement strategy.' },
        { title: 'Add more food-first creative', body: 'Pizza, wings, specials, and family meal visuals give Meta more angles to test.' },
        { title: 'Tighten around local buyers', body: 'Layer in Granite City, Metro East, lunch and dinner windows, and local offer messaging.' },
      ],
    },
  ],
  cta: {
    label: 'Pay Invoice - $730.24',
    href: 'https://invoice.stripe.com/i/acct_17bKd4JpTGe7VUqE/live_YWNjdF8xN2JLZDRKcFRHZTdWVXFFLF9VWEU5R1VVME50Z3p3UUF6RXpDQXdyTVlWSzBFVU4zLDE2OTU4NDUxMw0200v5QSRgJX?s=db',
    note: 'Invoice includes Meta campaign spend plus the 20% campaign management fee.',
  },
  privateNote: 'Private report. This page is noindex/nofollow and is not intended to appear in search engines.',
};

export const tripleCrownProposal: PrivateClientPage = {
  title: 'Triple Crown Chiropractic Digital Marketing and Website Proposal',
  description: 'Private digital marketing and website services proposal for Triple Crown Chiropractic.',
  canonicalPath: '/triple-crown-chiropractic/',
  kicker: 'Digital Marketing + Website Services Proposal',
  client: 'Triple Crown Chiropractic',
  period: 'May 2026',
  logo: '/images/triple-crown-logo.jpg',
  summary:
    'A transparent overview of website development, advertising management, infrastructure, hosting, email delivery systems, and ongoing support.',
  badges: ['Website', 'Google Ads', 'Social advertising', 'Infrastructure'],
  metrics: [
    { label: 'Initial retainer', value: '$5,000', note: 'Applied toward services', tone: 'primary' },
    { label: 'Ad management', value: '20%', note: 'Of monthly ad spend' },
    { label: 'Maintenance', value: '$299/mo', note: 'Website + marketing infrastructure' },
    { label: 'Hosting', value: '$75/mo', note: 'May scale with usage' },
    { label: 'Development', value: '$65/hr', note: 'Enhancements outside maintenance' },
  ],
  sections: [
    {
      title: 'Initial retainer',
      body:
        'The $5,000 retainer allows planning, development, setup, implementation, and marketing work to begin without project-by-project delays.',
      cards: [
        {
          title: 'Applied toward',
          items: [
            'Website design and development',
            'Marketing strategy and planning',
            'SEO setup',
            'Google Ads and social advertising setup',
            'Tracking, analytics, CRM, and email infrastructure',
          ],
        },
      ],
    },
    {
      title: 'Campaign structure and strategy',
      body:
        'Campaigns are organized around the conditions, symptoms, treatments, and services patients are already searching for.',
      cards: [
        {
          title: 'Condition categories',
          items: ['Sciatica', 'Back pain', 'Neck pain', 'Headaches and migraines', 'Auto accident and whiplash'],
        },
        {
          title: 'Service categories',
          items: ['Chiropractic adjustments', 'New patient specials', 'Spinal decompression', 'Family chiropractic care'],
        },
      ],
    },
    {
      title: 'Example monthly investment',
      table: {
        title: 'Example only',
        headers: ['Line item', 'Amount'],
        rows: [
          ['Example Google ad spend', '$2,000'],
          ['Google Ads management (20%)', '$400'],
          ['Example social media ad spend', '$2,800'],
          ['Social media management (20%)', '$560'],
          ['Website maintenance and marketing infrastructure', '$299'],
          ['Hosting and infrastructure', '$75'],
          ['Resend email infrastructure', '$20-$40'],
          ['Estimated monthly total', '$6,154-$6,174'],
        ],
      },
    },
    {
      title: 'Billing structure summary',
      cards: [
        {
          title: 'Terms',
          items: [
            'Advertising spend is paid directly to platforms whenever possible.',
            'Credit card payments include a 3.5% processing fee.',
            'All marketing accounts, customer data, domains, and business assets remain under client ownership.',
            'Any project expected to exceed two billable hours is discussed and approved before work begins.',
          ],
        },
      ],
    },
  ],
  privateNote: 'Private proposal. This page is noindex/nofollow.',
};

export const tripleCrownSocial: PrivateClientPage = {
  title: 'Triple Crown Chiropractic Social Media Advertising Proposal',
  description: 'Private social media advertising proposal for Triple Crown Chiropractic.',
  canonicalPath: '/triple-crown-social/',
  kicker: 'Social Media Advertising Proposal',
  client: 'Triple Crown Chiropractic',
  period: 'June through December 2026',
  logo: '/images/triple-crown-logo.jpg',
  summary:
    'A social advertising proposal covering campaign structure, launch spend, monthly ranges, management fees, and recommended next questions before launch.',
  badges: ['Facebook', 'Instagram', 'Ad spend ranges', 'Private proposal'],
  metrics: [
    { label: 'Launch period', value: '$25/day', note: 'Days 1-4', tone: 'primary' },
    { label: 'Ongoing', value: '$12-$20/day', note: 'Day 5+' },
    { label: 'Management', value: '20%', note: 'Of ad spend' },
    { label: 'All-in max', value: '$4,800', note: 'June 15 through Dec. 31' },
  ],
  sections: [
    {
      title: 'Before kickoff',
      cards: [
        {
          title: 'Questions to confirm',
          items: [
            'Organic social management or advertising only?',
            'Existing photos, videos, or graphics available?',
            'One campaign for both locations or separate campaigns?',
            'Primary goal: new patients, appointment bookings, awareness, or a combination?',
            'Facebook and Instagram only, or TikTok and Google later?',
          ],
        },
      ],
    },
    {
      title: 'How the campaign works',
      cards: [
        { title: 'Launch period', body: 'Days 1-4 at $25/day to help Meta gather data and begin optimizing.' },
        { title: 'Ongoing', body: 'Day 5+ at $12-$20/day across both service areas, seven days per week.' },
      ],
    },
    {
      title: 'Monthly cost breakdown',
      table: {
        title: 'June through December 2026',
        headers: ['Month', 'Ad spend', 'Management fee', 'All-in'],
        rows: [
          ['June 2026', '$232-$320', '$46-$64', '$278-$384'],
          ['July 2026', '$372-$620', '$74-$124', '$446-$744'],
          ['August 2026', '$372-$620', '$74-$124', '$446-$744'],
          ['September 2026', '$360-$600', '$72-$120', '$432-$720'],
          ['October 2026', '$372-$620', '$74-$124', '$446-$744'],
          ['November 2026', '$360-$600', '$72-$120', '$432-$720'],
          ['December 2026', '$372-$620', '$74-$124', '$446-$744'],
        ],
      },
    },
    {
      title: 'What is included',
      cards: [
        {
          title: 'Management fee covers',
          items: [
            'Campaign setup and initial ad build',
            'Geo, demographic, and interest-based targeting',
            'Ongoing monitoring and budget optimization',
            'Ad creative guidance and copy using available content',
            'Brief weekly or biweekly updates',
            'Monthly spend summary with performance notes',
          ],
        },
      ],
    },
  ],
  privateNote:
    'Estimates are projections only and not guarantees of spend or results. This page is private and noindex.',
};

export const tripleCrownEmailSocialProposal: PrivateClientPage = {
  title: 'Triple Crown Chiropractic Email and Social Patient Story Campaign Proposal',
  description:
    'Private proposal for a 20-email patient story campaign supported by social media and Google Ads for Triple Crown Chiropractic.',
  canonicalPath: '/triple-crown-email-social-proposal/',
  kicker: 'Email + Social Campaign Proposal',
  client: 'Triple Crown Chiropractic',
  period: 'August 2026',
  logo: '/images/triple-crown-logo.jpg',
  summary:
    'A patient-story marketing system built to turn the practice\'s existing education and case-style ideas into appointment demand across email, organic social, paid social, and Google Ads.',
  badges: ['20-email campaign', 'Meta + organic social', 'Google Ads tie-in', 'Healthcare-aware'],
  metrics: [
    { label: 'Core asset', value: '20 emails', note: 'Patient-story campaign', tone: 'primary' },
    { label: 'Social rollout', value: '60+ posts', note: 'Short-form adaptations' },
    { label: 'Ad angles', value: '5 tracks', note: 'Back, neck, sciatica, headaches, shoulder' },
    { label: 'Primary goal', value: 'New visits', note: 'Consultation bookings' },
    { label: 'Launch window', value: '30 days', note: 'Build, approve, deploy' },
  ],
  sections: [
    {
      eyebrow: 'CMO recommendation',
      title: 'Campaign strategy',
      body:
        'The idea is strong because it leads with story, not a hard medical claim. Each email should open with a relatable patient situation, explain the clinical thinking in plain English, and move the reader toward a low-friction consultation request.',
      cards: [
        {
          title: 'Positioning',
          body:
            'Triple Crown becomes the local guide for people who have been normalizing pain, stiffness, headaches, sciatica, or reduced mobility.',
        },
        {
          title: 'Audience',
          body:
            'Existing patients, inactive patients, referral audiences, and cold local prospects in Walton, Covington, and nearby Northern Kentucky communities.',
        },
        {
          title: 'Primary CTA',
          body:
            'Schedule a consultation or request an appointment. The CTA should stay consistent so every channel trains the same behavior.',
        },
      ],
    },
    {
      title: 'The 20-email patient story campaign',
      body:
        'The email sequence should run as a nurture and reactivation campaign. These 20 subjects and angles follow the patient-story campaign concept supplied for Triple Crown, then organize it into a proposal-ready rollout.',
      table: {
        title: 'Email sequence',
        note: 'Story-led subjects and patient visit intent',
        headers: ['Email', 'Subject', 'Core angle'],
        rows: [
          ['1', "I Almost Didn't Meet This Patient...", 'Pain had become normal until the patient decided to get checked.'],
          ['2', 'Your MRI Might Not Tell the Whole Story', 'Movement, compensation, posture, and nerve irritation can matter even when imaging looks normal.'],
          ['3', 'The Neck Pain That Was Actually Causing Headaches', 'Headache frequency can be connected to upper-neck restriction and tension.'],
          ['4', 'Why Your Back Hurts Every Morning', 'Morning stiffness may be a signal that joints and muscles need help moving again.'],
          ['5', "Sciatica Isn't Always What You Think", 'Leg pain should be evaluated before assuming surgery is the only path.'],
          ['6', '"I Just Thought I Was Getting Older"', 'Aging is real, but constant pain does not have to be accepted as normal.'],
          ['7', "The Shoulder Pain That Wouldn't Go Away", 'Shoulder pain can have multiple causes, so guessing is the wrong strategy.'],
          ['8', "Knee Pain Doesn't Always Start at the Knee", 'Hip, ankle, gait, and spine mechanics can overload the knee.'],
          ['9', "The Athlete Who Didn't Want Surgery", 'An active patient wants to compete again, not just feel less pain.'],
          ['10', "Pregnancy Shouldn't Mean Constant Pain", 'Pregnancy changes movement, posture, ligaments, and comfort, but support may help.'],
          ['11', 'The Cost of Waiting', 'Waiting can create more compensation; earlier evaluation can make the path easier.'],
          ['12', "Stretching Wasn't Fixing It", 'Stretching helps, but the wrong target will not solve a joint or movement issue.'],
          ['13', 'Why Pain Moves Around', 'Neck, shoulder, and upper-back symptoms can shift as the body compensates.'],
          ['14', 'The Little Things Matter Most', 'Pain steals everyday moments before it steals big events.'],
          ['15', "You Don't Need to Be in Severe Pain", 'Small problems are often easier to address before they become larger.'],
          ['16', 'Your Body Is Designed to Move', 'When joints move well, muscles, circulation, inflammation, and performance can improve.'],
          ['17', 'Every Patient Is Different', 'Two people can have the same symptom but need different treatment plans.'],
          ['18', 'Why We Spend So Much Time Listening', 'The first conversation reveals when it started, what worsens it, and what has already been tried.'],
          ['19', 'Imagine Six Months From Now', 'Paint the future state: waking up, traveling, and enjoying family activities with less pain focus.'],
          ['20', 'This Is Your Invitation', 'Final no-pressure invitation to get evaluated and understand the available options.'],
        ],
      },
    },
    {
      title: 'Email execution plan',
      cards: [
        {
          title: 'List approach',
          items: [
            'Segment current patients, inactive patients, new leads, and downloaded-resource leads.',
            'Send two emails per week for ten weeks, or one email per week for a slower twenty-week nurture.',
            'Keep every email short, story-first, and focused on one patient concern.',
            'Use reply-friendly language so patients can ask questions instead of only clicking a button.',
          ],
        },
        {
          title: 'Compliance guardrails',
          items: [
            'Use anonymized or composite stories unless written patient authorization exists.',
            'Avoid implying a specific reader has a medical condition.',
            'Include accurate sender information, a physical mailing address, and an unsubscribe option.',
            'Do not promise cures, guaranteed outcomes, or specific results from care.',
          ],
        },
      ],
    },
    {
      title: 'Social media rollout',
      body:
        'Each email becomes a social content cluster. This prevents the campaign from depending on one channel and gives the practice consistent visibility while the email list is being nurtured.',
      cards: [
        {
          title: 'Organic social',
          items: [
            'Turn each email into one educational post, one short story post, and one question-style engagement post.',
            'Record Dr. Simms giving a 30-60 second plain-English version of the strongest emails.',
            'Post location-aware content for Walton and Covington without making the feed feel repetitive.',
            'Use appointment CTAs sparingly but consistently at the end of story and education posts.',
          ],
        },
        {
          title: 'Paid social',
          items: [
            'Promote the strongest story angles as awareness and traffic campaigns.',
            'Use benefit-led copy such as "Chiropractic care for back pain, neck pain, headaches, and sciatica in Northern Kentucky."',
            'Avoid copy like "Do you have back pain?" because health-related personal-attribute wording can trigger Meta policy issues.',
            'Retarget broad website visitors carefully and avoid uploading sensitive health-condition lists.',
          ],
        },
      ],
    },
    {
      title: 'Google Ads tie-in',
      body:
        'Google Ads should capture the demand created by email and social. When someone sees the story campaign and later searches for help, Triple Crown should be present for the exact condition and location terms.',
      cards: [
        {
          title: 'Search campaign tracks',
          items: [
            'Chiropractor Walton KY and chiropractor Covington KY',
            'Back pain chiropractor near me',
            'Sciatica chiropractor Northern Kentucky',
            'Neck pain and headache chiropractor',
            'Shoulder pain and sports injury chiropractor',
          ],
        },
        {
          title: 'Landing page alignment',
          items: [
            'Send condition keywords to matching condition pages instead of the homepage.',
            'Use one appointment CTA across landing pages, emails, and ads.',
            'Track calls, forms, and appointment requests separately by channel.',
            'Use the email/social stories to inform ad headlines and landing-page FAQs.',
          ],
        },
      ],
    },
    {
      title: 'Recommended launch plan',
      table: {
        title: '30-day setup and rollout',
        headers: ['Phase', 'Work', 'Outcome'],
        rows: [
          ['Week 1', 'Finalize campaign angle, list segments, compliance review, and CTA path.', 'Approved campaign map.'],
          ['Week 2', 'Write and format all 20 emails plus social post adaptations.', 'Ready-to-schedule content library.'],
          ['Week 3', 'Build email automation, tracking links, Meta audiences, and Google Ads campaign structure.', 'Launch-ready system.'],
          ['Week 4', 'Launch email sequence, publish first social wave, and activate Google Ads demand capture.', 'Live campaign with early reporting.'],
        ],
      },
    },
    {
      title: 'Suggested budget structure',
      cards: [
        {
          title: 'Content and setup',
          body:
            'Campaign copywriting, email buildout, automation setup, landing-page adjustments, tracking, and creative prep can be billed from the existing development/content rate structure.',
        },
        {
          title: 'Ongoing management',
          body:
            'Paid social and Google Ads management can follow the existing 20% of ad spend model. Organic social scheduling and email reporting can be scoped as a monthly add-on if they want Local Business Search handling execution.',
        },
      ],
    },
    {
      title: 'Policy references used',
      cards: [
        {
          title: 'Why the copy stays careful',
          items: [
            'Meta Advertising Standards restrict ads that imply personal attributes such as health conditions: https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/',
            'Google Ads restricts health-related personalized advertising: https://support.google.com/adspolicy/answer/16701855',
            'FTC CAN-SPAM guidance requires accurate headers, non-deceptive subject lines, sender address, and opt-out handling: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business',
            'HHS HIPAA guidance requires authorization for marketing uses or disclosures of protected health information unless an exception applies: https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing/index.html',
          ],
        },
      ],
    },
  ],
  cta: {
    label: 'Approve campaign buildout',
    note:
      'Recommended next step: approve the campaign direction, confirm the email platform/list source, and decide whether Local Business Search will also manage organic social scheduling.',
  },
  privateNote:
    'Private proposal. This page is noindex/nofollow/noarchive/nosnippet and is not intended to appear in search engines.',
};
