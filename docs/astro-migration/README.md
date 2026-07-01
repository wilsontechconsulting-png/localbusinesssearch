# Astro Migration Control Plan

This folder is the working control center for converting Local Business Search from Hugo to Astro without losing pages, links, assets, metadata, or hidden routes.

## Baseline Inventories

- `hugo-content-pages.csv` - Hugo's content/page listing from `hugo list all`.
- `generated-url-inventory.txt` - Generated public URL/file inventory from the current Hugo build.
- `source-file-inventory.txt` - Source content, layout, data, static, and theme file inventory.
- `asset-inventory.txt` - Static asset inventory that must remain available at the same public paths.

Current baseline counts:

- Markdown content files: 90
- Hugo-listed content records: 84
- Generated URL/file endpoints: 355
- Source/template/asset files tracked for migration: 171
- Portable static assets: 14

## Migration Rules

1. Hugo remains the fallback until the Astro build passes parity checks.
2. The Astro build must preserve public URL paths, especially trailing-slash routes like `/blog/example-post/`.
3. The migration must include main pages, blog posts, categories, tags, RSS/XML outputs, sitemap, robots, llms.txt, schema, metadata, images, and hidden/private-style pages.
4. Header and footer behavior must be rebuilt, not simplified away. This includes grouped desktop dropdowns, mobile dropdowns, active states, external links, and the contact CTA.
5. Any intentional deletion, redirect, or privacy change must be documented before production replacement.
6. The redesign can improve the visual system, but it must not change canonical URLs, image paths, form destinations, or SEO metadata by accident.

## Public Sections To Preserve

- `/`
- `/about/`
- `/platform/`
- `/business-operations/`
- `/advertising/`
- `/advertising/google-ads/`
- `/advertising/paid-social/`
- `/advertising/programmatic/`
- `/advertising/retargeting/`
- `/ai-automation/`
- `/baselayer/`
- `/industries/`
- `/industries/home-services/`
- `/industries/medical/`
- `/industries/legal/`
- `/industries/local-retail/`
- `/industries/franchises/`
- `/industries/municipalities/`
- `/results/`
- `/services/`
- `/demo/`
- `/contact/`
- `/contact/success/`
- `/blog/`
- `/categories/...`
- `/tags/...`

## Hidden Or Sensitive Routes To Preserve Deliberately

These currently generate pages but are not normal top-level marketing pages. They need a deliberate Astro treatment.

- `/emerge-it-audit/`
- `/maven-says/`
- `/pizza-world-branson/`
- `/pizza-world-branson-may-report/`
- `/pizza-world-branson-quote/`
- `/pizza-world-granite-city-facebook-report/`
- `/triple-crown-chiropractic/`
- `/triple-crown-social/`

## Assets To Preserve At Existing Paths

See `asset-inventory.txt`. Key public paths include:

- `/favicon.png`
- `/images/lbs-icon.jpg`
- `/images/lbs-logo.jpg`
- `/images/social-card-default.png`
- `/images/social-card-default.svg`
- `/images/blog/lead-follow-up-field-note.jpg`
- `/images/blog/seo-llm-2026.jpg`
- `/robots.txt`
- `/llms.txt`

## SEO And Structured Data To Rebuild

The Hugo site currently emits:

- Standard title/description/canonical metadata
- Robots and googlebot directives
- Open Graph image/title/description metadata
- Twitter card metadata
- Blog article metadata
- Business geo/contact metadata
- `WebSite` JSON-LD
- `LocalBusiness` / `ProfessionalService` JSON-LD
- `BlogPosting` JSON-LD
- `Service` JSON-LD
- `FAQPage` JSON-LD on `/demo/`
- `BreadcrumbList` JSON-LD

Astro needs componentized equivalents for these instead of copying Hugo template logic verbatim.

## Astro Implementation Plan

### Step 1 - Inventory And Baseline

Status: complete when this document and inventory files exist and the worktree is on the migration branch.

Tasks:

- Capture all Hugo content records.
- Capture all generated URLs/files.
- Capture source, template, and asset inventories.
- Document non-negotiable preservation rules.

### Step 2 - Astro Scaffold

Status: complete.

Tasks:

- Add Astro project files beside the existing Hugo source.
- Configure static output and trailing slash behavior.
- Add TypeScript/content collection schemas for pages and blog posts.
- Add build scripts without removing Hugo scripts or source.
- Copy static assets into Astro public handling while preserving URL paths.

### Step 3 - Content And Route Migration

Status: complete for the current Hugo content set.

Tasks:

- Convert Markdown content to Astro content collections.
- Preserve slugs, titles, descriptions, dates, summaries, tags, categories, images, and custom page metadata.
- Recreate section routes, category routes, tag routes, RSS, sitemap, robots, and llms.txt.
- Recreate hidden/private-style routes deliberately.

### Step 4 - Components And Redesign

Status: in progress. Homepage, global layout, header, footer, blog listing, blog post pages, taxonomy pages, shared interior pages, hidden routes, metadata, schema, sitemap, and feeds have Astro equivalents. Remaining work is page-specific refinement for the highest-value service and industry sections.

Tasks:

- Build Astro components for layout, header, footer, navigation, SEO, schema, cards, CTA bands, related-page navigation, feature sections, industry pages, service pages, and blog filters.
- Redesign the visual system with a serious AI/business operations feel.
- Keep responsive behavior strong at 320px, 768px, 1024px, and 1440px.
- Avoid generic AI styling and preserve Local Business Search brand assets.

### Step 5 - Verification

Status: active.

Latest verification:

- `hugo --minify`: pass
- `npm run check:astro`: pass with 0 errors, 0 warnings, 0 hints
- `npm run build:astro`: pass
- `npm run verify:astro`: pass
  - Hugo route files: 355
  - Astro route files: 355
  - Missing Astro routes: 0
  - Extra Astro routes: 0
  - Missing required assets: 0
  - Broken internal Astro references: 0
- `npm run screenshots:astro`: pass with no horizontal overflow at 390px or 1440px
- Manual screenshot review covered the Astro homepage desktop, homepage mobile, platform desktop, platform mobile, and blog mobile views.
- `npm audit --omit=dev`: pass. Full dev audit still reports a moderate transitive `yaml-language-server` advisory through `@astrojs/check`; it does not affect the production dependency set.

Tasks:

- Build Hugo and Astro side by side.
- Crawl both outputs and compare URL coverage.
- Check every internal link.
- Check image paths and social metadata.
- Check schema and sitemap/RSS output.
- Run desktop and mobile screenshots.
- Only then replace the production build path.

## Current Branch

Migration work is on `astro-redesign-migration`.
