# Local Business Search - Design System Rules
**Created:** May 7, 2026  
**Status:** Permanent - Apply to ALL pages

---

## Core Design Principle

**Every page on LocalBusinessSearch.com must use the same visual language as the existing homepage and major finished pages.**

❌ **DO NOT:**
- Build plain document-style pages
- Dump raw headings, bullets, horizontal rules, and text onto the page
- Create a page that looks like default HTML or markdown
- Leave long bullet lists as raw bullets
- Use thin horizontal rules as section dividers
- Stack huge headings and bullets down the page

✅ **DO:**
- Use the established brand style and layout patterns
- Turn lists into designed cards, comparison blocks, icon rows, feature grids, or pricing cards
- Use styled components for all content
- Make every page feel like it belongs on LocalBusinessSearch.com

---

## 1. Brand Style

### Color Palette
- **Dark Navy / Midnight Blue:** Hero sections (`#0A1628`)
- **Electric Blue:** Accent color, CTAs (`#0066FF`)
- **White Text:** On dark sections
- **Clean White / Light Gray:** Content sections (`#F5F5F5`)

### Visual Elements
- Rounded cards
- Soft shadows
- Subtle borders
- Large modern headings
- Generous spacing
- Grid-based layouts
- **Professional SaaS / AI business systems feel**

---

## 2. Layout Patterns

### Full-Width Hero Section
- Dark navy gradient background
- Strong centered headline
- Short supporting paragraph
- Primary blue CTA button
- Optional secondary outline CTA

### Content Sections
- Alternating dark and light sections
- Card grids (2, 3, or 4 columns)
- Stat cards with numbers
- Feature cards with icons/descriptions
- Industry-style cards with images when appropriate
- Clear final CTA section

### Section Structure
```
Hero (Dark)
  ↓
Problem/Context (Light)
  ↓
Features/Services (Cards - Light or Dark)
  ↓
Social Proof/Stats (Dark)
  ↓
Who It's For (Light)
  ↓
Pricing/Plans (Light)
  ↓
Final CTA (Dark)
```

---

## 3. Content Formatting Rules

### Lists
Turn lists into:
- Designed cards
- Comparison blocks
- Icon rows
- Feature grids
- Pricing cards
- Stat cards

### Comparisons
Use styled cards with:
- Icon or image
- Heading
- Description
- Visual differentiation (color, shadow, border)

### Features
Use card grids with:
- Icon or emoji
- Heading
- 2-3 sentence description
- Hover effects

### Pricing
Use polished pricing cards with:
- Plan name
- Price (large)
- Specs (styled list)
- "Best for:" line
- CTA button

---

## 4. Required Page Structure Template

### A. Hero Section
```html
<section class="hero" style="background: linear-gradient(135deg, #0A1628 0%, #1a2940 100%);">
  <h1>Main Headline</h1>
  <p>Supporting paragraph</p>
  <button>Primary CTA</button>
  <button>Secondary CTA</button>
</section>
```

### B. Problem/Context Section
```html
<section class="section section-light">
  <h2>Section Heading</h2>
  <div class="card-grid">
    <!-- Comparison cards, not bullets -->
  </div>
</section>
```

### C. Features/Services
```html
<section class="section">
  <h2>What's Included</h2>
  <div class="card-grid three-col">
    <!-- Feature cards -->
  </div>
</section>
```

### D. Social Proof/Stats
```html
<section class="section section-dark">
  <div class="stat-grid">
    <!-- Stat cards with numbers -->
  </div>
</section>
```

### E. Who It's For
```html
<section class="section section-light">
  <h2>Who This Is For</h2>
  <div class="card-grid">
    <!-- Audience cards with icons -->
  </div>
</section>
```

### F. Pricing
```html
<section class="section section-light">
  <h2>Pricing Plans</h2>
  <div class="pricing-grid">
    <!-- Pricing cards -->
  </div>
</section>
```

### G. Final CTA
```html
<section class="cta-section" style="background: #0A1628;">
  <h2>Ready to [Action]?</h2>
  <p>Compelling reason</p>
  <button>Contact Us</button>
  <button>Book a Demo</button>
</section>
```

---

## 5. Component Library

### Hero Section
- Full-width
- Dark navy gradient
- White text
- Large centered headline
- Supporting text
- Dual CTAs (primary blue, secondary outline)

### Card
- White background
- Rounded corners (8-12px)
- Soft shadow
- Padding: 2-3rem
- Hover effect (lift + shadow)

### Stat Card
- Large number (48-64px)
- Label below
- Icon or emoji above
- Optional description

### Feature Card
- Icon/emoji at top
- Heading (20-24px)
- Description (16px)
- Optional link/button

### Pricing Card
- Highlighted plan: blue border or background
- Plan name
- Price (large, bold)
- Per month label
- Feature list (styled)
- CTA button (full-width)

### Comparison Card
- Visual indicator (✓/✗ or color)
- Heading
- Description
- Differentiating style

---

## 6. Typography

### Headings
- H1: 48-64px, bold, tight line-height
- H2: 36-48px, bold, section headings
- H3: 24-30px, semi-bold, card headings
- H4: 18-20px, medium, subsection

### Body Text
- 16-18px base
- 1.6-1.8 line-height
- Generous paragraph spacing

### CTAs
- 16-18px
- Bold or semi-bold
- Uppercase or title case
- Letter spacing if uppercase

---

## 7. Spacing

### Section Padding
- Desktop: 4-6rem top/bottom
- Mobile: 2-3rem top/bottom

### Card Grids
- Gap: 2-3rem
- Responsive: 3-col → 2-col → 1-col

### Internal Card Padding
- 2-3rem all sides
- Consistent across all cards

---

## 8. Quality Checklist

Before finishing ANY page, audit it:

- [ ] Does it have a hero section?
- [ ] Are all lists turned into styled components?
- [ ] Do sections alternate light/dark?
- [ ] Are there card grids instead of bullets?
- [ ] Is there a final CTA section?
- [ ] Does it match the homepage visual style?
- [ ] Would a visitor think this page belongs on the site?
- [ ] Zero raw markdown styling visible?
- [ ] All text inside styled containers?
- [ ] Proper spacing and shadows?

**If any answer is "no" → redesign that section before finishing.**

---

## 9. Page-Specific Guidance

### Service Pages (Platform, AI Automation, Business Operations, Baselayer)
- Position as part of the Local Business Search system
- Connect to overall brand narrative
- Use hero → problem → solution → features → pricing → CTA structure
- Make it feel like a premium product offering

### Industry Pages (Home Services, Legal, Medical, etc.)
- Use industry-specific imagery
- Case study cards
- Stat cards with industry metrics
- "Why [Industry] chooses us" section

### Blog Posts
- Hero with featured image
- Generous whitespace
- Pull quotes in styled boxes
- Related posts as cards at bottom

---

## 10. Final Rule

**When in doubt, look at the homepage and existing finished pages.**

If the new page doesn't look like it belongs next to them, it's not done.

The goal: Every page should feel like part of a cohesive, premium, professional SaaS/AI business system brand.

---

**This is a permanent rule. Apply to all current and future pages.**

---

Last updated: May 7, 2026
