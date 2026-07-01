import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist-astro');
const baseUrl = 'https://localbusinesssearch.com';

const publicPages = [
  { path: '/', schemas: ['WebSite', 'LocalBusiness'] },
  { path: '/platform/', schemas: ['WebSite', 'LocalBusiness', 'BreadcrumbList', 'Service'] },
  { path: '/services/', schemas: ['WebSite', 'LocalBusiness', 'BreadcrumbList', 'Service'] },
  { path: '/industries/', schemas: ['WebSite', 'LocalBusiness', 'BreadcrumbList', 'Service'] },
  { path: '/demo/', schemas: ['WebSite', 'LocalBusiness', 'BreadcrumbList', 'FAQPage'] },
  { path: '/contact/', schemas: ['WebSite', 'LocalBusiness', 'BreadcrumbList'] },
  {
    path: '/blog/static-site-migrations-need-url-contracts/',
    schemas: ['WebSite', 'LocalBusiness', 'BreadcrumbList', 'BlogPosting'],
    article: true,
  },
];

const privatePages = [
  '/contact/success/',
  '/emerge-it-audit/',
  '/maven-says/',
  '/pizza-world-branson/',
  '/triple-crown-chiropractic/',
];

function fileForPage(urlPath) {
  if (urlPath === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, urlPath.replace(/^\//, ''), 'index.html');
}

function metaContent(html, attr, value) {
  const pattern = new RegExp(`<meta\\s+[^>]*${attr}=["']${value}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i');
  return html.match(pattern)?.[1];
}

function metaName(html, name) {
  return metaContent(html, 'name', name);
}

function metaProperty(html, property) {
  return metaContent(html, 'property', property);
}

function canonicalValue(html) {
  return html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1];
}

function titleValue(html) {
  return html.match(/<title>([^<]+)<\/title>/i)?.[1];
}

function schemaTypes(schema) {
  const type = schema?.['@type'];
  return Array.isArray(type) ? type : [type].filter(Boolean);
}

function schemaMatches(schemas, requiredType) {
  return schemas.some((schema) => {
    const types = schemaTypes(schema);
    if (types.includes(requiredType)) return true;
    return types.some((type) => type === requiredType);
  });
}

function jsonLdSchemas(html, urlPath) {
  const schemas = [];
  const pattern = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

  for (const match of html.matchAll(pattern)) {
    try {
      schemas.push(JSON.parse(match[1]));
    } catch (error) {
      failures.push(`${urlPath}: invalid JSON-LD (${error.message})`);
    }
  }

  return schemas;
}

function expect(condition, message) {
  if (!condition) failures.push(message);
}

async function readHtml(urlPath) {
  const file = fileForPage(urlPath);
  expect(existsSync(file), `${urlPath}: missing built HTML at ${path.relative(root, file)}`);
  if (!existsSync(file)) return '';
  return readFile(file, 'utf8');
}

const failures = [];

for (const page of publicPages) {
  const html = await readHtml(page.path);
  if (!html) continue;

  const canonical = `${baseUrl}${page.path}`;
  const schemas = jsonLdSchemas(html, page.path);

  expect(Boolean(titleValue(html)), `${page.path}: missing <title>`);
  expect(Boolean(metaName(html, 'description')), `${page.path}: missing meta description`);
  expect(canonicalValue(html) === canonical, `${page.path}: canonical mismatch`);
  expect(metaName(html, 'robots') === 'index, follow', `${page.path}: robots should be index, follow`);
  expect(metaProperty(html, 'og:image'), `${page.path}: missing og:image`);
  expect(metaName(html, 'twitter:image'), `${page.path}: missing twitter:image`);

  for (const requiredType of page.schemas) {
    expect(schemaMatches(schemas, requiredType), `${page.path}: missing ${requiredType} schema`);
  }

  if (page.article) {
    expect(metaProperty(html, 'article:published_time'), `${page.path}: missing article published time`);
    expect(metaProperty(html, 'article:author'), `${page.path}: missing article author`);
  }
}

for (const urlPath of privatePages) {
  const html = await readHtml(urlPath);
  if (!html) continue;
  const robots = metaName(html, 'robots') ?? '';
  expect(robots.includes('noindex'), `${urlPath}: robots missing noindex`);
  expect(robots.includes('nofollow'), `${urlPath}: robots missing nofollow`);
  expect(robots.includes('noarchive'), `${urlPath}: robots missing noarchive`);
}

const sitemapPath = path.join(distDir, 'sitemap.xml');
expect(existsSync(sitemapPath), 'sitemap.xml: missing');
if (existsSync(sitemapPath)) {
  const sitemap = await readFile(sitemapPath, 'utf8');
  for (const urlPath of privatePages) {
    expect(!sitemap.includes(`${baseUrl}${urlPath}`), `sitemap.xml: private route included ${urlPath}`);
  }
}

console.log(`Public launch pages checked: ${publicPages.length}`);
console.log(`Private/noindex pages checked: ${privatePages.length}`);
console.log(`Launch metadata/schema failures: ${failures.length}`);

for (const failure of failures) console.log(`- ${failure}`);
if (failures.length) process.exitCode = 1;
