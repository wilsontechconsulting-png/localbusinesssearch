# Astro Cutover Checklist

This checklist controls the final switch from the existing Hugo build to the Astro build. Hugo stays intact until every launch gate below is green and the production publishing path is confirmed.

## Current State

- Migration branch: `astro-redesign-migration`
- Hugo fallback: existing source, theme, and GitHub Pages workflow remain present.
- Astro output directory: `dist-astro/`
- Known blocker: GitHub HTTPS auth is invalid in this runtime, so push/deploy cannot happen here until credentials are fixed.

## Required Pre-Cutover Gates

Run these from `projects/local-business-search`:

```bash
hugo --minify
npm run check:astro
npm run build:astro
npm run verify:astro
npm run verify:astro:launch
npm run screenshots:astro
npm audit --omit=dev
```

All commands must pass before replacing production output.

## Manual Review Gates

- Review homepage desktop and mobile screenshots.
- Review platform desktop and mobile screenshots.
- Review services desktop and mobile screenshots.
- Review industries desktop and mobile screenshots.
- Review demo/contact mobile screenshots.
- Review at least one hidden/noindex route and confirm it is not linked from normal navigation.
- Confirm `/robots.txt`, `/llms.txt`, `/sitemap.xml`, `/index.xml`, `/blog/index.xml`, category RSS, and tag RSS load from the Astro output.
- Confirm the contact/demo calls to action still point to the intended routes.

## Metadata And SEO Gates

`npm run verify:astro:launch` checks representative pages for:

- Title and description metadata
- Canonical URLs
- Robots directives
- Open Graph image metadata
- Twitter image metadata
- `WebSite`, `LocalBusiness`, `BreadcrumbList`, `Service`, `FAQPage`, and `BlogPosting` JSON-LD where applicable
- Hidden/private routes using `noindex, nofollow, noarchive`
- Hidden/private routes excluded from `sitemap.xml`

## Cutover Options

### Option A - GitHub Pages Builds Astro Directly

1. Update the production workflow to install Node dependencies.
2. Run `npm ci`.
3. Run the required pre-cutover gates.
4. Publish `dist-astro/` as the GitHub Pages artifact.
5. Keep Hugo files in the repo for rollback until the Astro launch has been stable.

### Option B - Copy Astro Output Into Current Pages Artifact

1. Run the required pre-cutover gates locally or in CI.
2. Replace the current Pages artifact source with the contents of `dist-astro/`.
3. Deploy with the existing GitHub Pages publishing mechanism.
4. Keep Hugo files in the repo for rollback until the Astro launch has been stable.

Option A is cleaner long term. Option B is useful only if the current Pages workflow is easier to adapt temporarily.

## First-Hour Production Checks

After deployment:

- `https://localbusinesssearch.com/` returns 200.
- `/platform/`, `/services/`, `/industries/`, `/blog/`, `/demo/`, and `/contact/` return 200.
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/index.xml`, and `/blog/index.xml` return 200.
- A recent blog post returns 200 and includes `BlogPosting` JSON-LD.
- A hidden/noindex route returns 200 but includes `noindex` and is not present in the sitemap.
- Browser spot checks show no mobile horizontal overflow.

## Rollback Plan

If production breaks after cutover:

1. Revert the workflow or Pages artifact change to the last Hugo publishing setup.
2. Redeploy the last known-good Hugo build.
3. Verify homepage, sitemap, RSS, blog, and contact routes return 200.
4. Keep the Astro branch intact for debugging.

Rollback should be possible without deleting the Astro branch or removing the Hugo source.

## Do Not Do

- Do not delete Hugo source during the first Astro launch.
- Do not change canonical URLs during cutover.
- Do not drop category, tag, RSS, sitemap, robots, or llms.txt outputs.
- Do not remove hidden/noindex pages unless that is a separate explicit decision.
- Do not launch while GitHub auth is broken or the production workflow cannot be verified.
