# Search Indexing Action Plan

## Current Finding

As of May 22, 2026, a `site:localbusinesssearch.com` search is not returning Local Business Search pages. The live site is accessible, the homepage returns HTTP 200, the homepage canonical points to `https://localbusinesssearch.com/`, the homepage has `index, follow`, and the sitemap is available at `https://localbusinesssearch.com/sitemap.xml`.

That means the immediate issue is not that the homepage is blocked. The issue is likely discovery, index freshness, and entity trust.

## Completed Website Fixes

- Expanded JSON-LD schema across the site:
  - `WebSite`
  - `WebPage` / `CollectionPage`
  - `Organization`
  - `LocalBusiness` / `ProfessionalService`
  - `Service`
  - `BlogPosting`
  - `BreadcrumbList`
  - `FAQPage` on the demo page where visible FAQ content exists
- Rebuilt `llms.txt` as an AI discovery file with:
  - Business summary
  - Canonical URLs
  - Services
  - Industries
  - Key public pages
  - Recent resources
  - Clear non-claims to avoid false AI assumptions
- Expanded `robots.txt` with sitemap reference and AI crawler access.
- Removed private/noindex utility pages from the sitemap.
- Marked the contact success page `noindex`.
- Centralized business entity details in `hugo.toml`.

## Required Next Steps Outside Code

1. Verify `https://localbusinesssearch.com/` in Google Search Console.
2. Submit `https://localbusinesssearch.com/sitemap.xml` in Search Console.
3. Use URL Inspection for:
   - `https://localbusinesssearch.com/`
   - `https://localbusinesssearch.com/platform/`
   - `https://localbusinesssearch.com/ai-automation/`
   - `https://localbusinesssearch.com/advertising/`
   - `https://localbusinesssearch.com/blog/`
4. Request indexing for those priority URLs.
5. Create or verify the Google Business Profile if this brand should appear in local/map-style discovery.
6. Add external entity signals:
   - LinkedIn company/profile link
   - X/Twitter profile link back to the site
   - Google Business Profile website link
   - Bing Places / Apple Business Connect if applicable
   - A few credible directory or partner profile links with consistent name, address, phone, and website

## Blunt Reality

The name "Local Business Search" is highly generic and competes with search directories, SEO articles, and local-search terminology. Ranking for the exact phrase will take stronger brand/entity signals than metadata alone. The faster win is indexing first, then targeting specific service-intent searches like:

- AI automation for local businesses
- local business lead follow-up automation
- business systems for home service companies
- Google Ads connected to CRM automation
- managed website hosting for local businesses

