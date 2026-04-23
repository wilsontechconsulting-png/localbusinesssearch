# Local Business Search - Hugo Website

**AI. Business Process.**

Digital advertising and AI-powered business process solutions.

---

## Brand Colors

Extracted from logo:

- **Navy:** `#0A1628` (primary dark)
- **Bright Blue:** `#0066FF` (accent, CTAs)
- **Dark Gray:** `#1A1A1A` (text)
- **Light Gray:** `#F5F5F5` (backgrounds)
- **White:** `#FFFFFF`

---

## Project Structure

```
local-business-search/
├── content/
│   ├── about/         # About page
│   ├── services/      # Services page
│   └── contact/       # Contact page
├── themes/lbs/
│   ├── layouts/
│   │   ├── _default/  # Single & list templates
│   │   ├── partials/  # Header & footer
│   │   └── index.html # Homepage
│   └── static/
│       └── css/
│           └── style.css  # Brand styling
├── static/
│   └── images/
│       └── lbs-logo.jpg   # Logo
└── hugo.toml          # Configuration
```

---

## Local Development

**Server is currently running at:**

**http://localhost:1314/**

**To restart the server:**
```bash
cd /Users/productivebot/productivebot/projects/local-business-search
hugo server --bind 0.0.0.0 --port 1314 --noHTTPCache
```

**To stop the server:**
```bash
pkill -f "hugo server.*1314"
```

---

## Pages Built

1. **Homepage** (/)
   - Hero section with tagline "AI. Business Process."
   - Services overview grid (3 cards)
   - CTA section

2. **Services** (/services/)
   - Digital Advertising
   - AI Automation
   - Business Process

3. **About** (/about/)
   - Mission statement
   - What sets us apart
   - Experience

4. **Contact** (/contact/)
   - Contact information
   - Business hours
   - What to expect

---

## Design Features

### Header
- Logo with brand colors
- Navigation menu
- "Contact" button as CTA (blue)
- Sticky header with shadow

### Hero Section
- Navy gradient background
- Large headline with blue "AI" highlight
- Dual CTAs (primary blue, secondary outline)

### Service Cards
- Hover effects (lift + shadow)
- Icon + title + description
- Clean card design with rounded corners

### Footer
- Navy background
- 3-column grid (brand, company links, service links)
- Copyright notice

### Responsive
- Mobile-friendly navigation
- Stacked layout on mobile
- Optimized touch targets

---

## Next Steps (Not Yet Implemented)

When ready to deploy:

1. **GitHub Setup:**
   ```bash
   git init
   git add -A
   git commit -m "Initial Local Business Search website"
   gh repo create local-business-search --public --source=. --remote=origin
   git push -u origin main
   ```

2. **GitHub Pages Deployment:**
   - Add GitHub Actions workflow
   - Configure custom domain (if needed)
   - Set baseURL in hugo.toml

3. **Content Additions:**
   - Case studies/portfolio
   - Blog section
   - Testimonials
   - Team bios
   - Pricing page

4. **Enhancements:**
   - Contact form (Formspree integration)
   - Analytics (Google Analytics)
   - SEO optimization (meta tags, sitemap)
   - Social media links

---

## Notes

- **Logo:** Saved from image file (LB icon with tagline)
- **Theme:** Custom "lbs" theme built from scratch
- **Hugo Version:** v0.159.1+extended
- **Status:** ✅ Running locally, ready for review
- **Deployment:** 🔄 Waiting for approval before deploying

---

Last updated: 2026-04-23
