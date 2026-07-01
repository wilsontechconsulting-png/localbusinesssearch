import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright-core';

const chromePath =
  process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const outputDir = path.join(process.cwd(), 'tmp/astro-screenshots');
const baseUrl = process.env.ASTRO_PREVIEW_URL || 'http://localhost:4322';

const shots = [
  { name: 'home-desktop', url: '/', width: 1440, height: 1200 },
  { name: 'home-mobile', url: '/', width: 390, height: 1200 },
  { name: 'platform-desktop', url: '/platform/', width: 1440, height: 1200 },
  { name: 'platform-mobile', url: '/platform/', width: 390, height: 1200 },
  { name: 'services-desktop', url: '/services/', width: 1440, height: 1200 },
  { name: 'services-mobile', url: '/services/', width: 390, height: 1200 },
  { name: 'industries-desktop', url: '/industries/', width: 1440, height: 1200 },
  { name: 'industries-mobile', url: '/industries/', width: 390, height: 1200 },
  { name: 'home-services-mobile', url: '/industries/home-services/', width: 390, height: 1200 },
  { name: 'about-desktop', url: '/about/', width: 1440, height: 1200 },
  { name: 'demo-mobile', url: '/demo/', width: 390, height: 1200 },
  { name: 'contact-mobile', url: '/contact/', width: 390, height: 1200 },
  { name: 'hidden-mobile', url: '/maven-says/', width: 390, height: 1200 },
  { name: 'blog-mobile', url: '/blog/', width: 390, height: 1200 },
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ executablePath: chromePath, headless: true });

for (const shot of shots) {
  const page = await browser.newPage({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 1,
  });
  await page.goto(new URL(shot.url, baseUrl).toString(), { waitUntil: 'networkidle' });

  const metrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    mobileToggleVisible:
      !!document.querySelector('[data-mobile-toggle]') &&
      getComputedStyle(document.querySelector('[data-mobile-toggle]')).display !== 'none',
  }));

  const filePath = path.join(outputDir, `${shot.name}.png`);
  await page.screenshot({ path: filePath, fullPage: false });
  await page.close();

  console.log(`${filePath}: ${JSON.stringify(metrics)}`);
  if (metrics.scrollWidth > metrics.innerWidth || metrics.bodyScrollWidth > metrics.innerWidth) {
    process.exitCode = 1;
  }
}

await browser.close();
