import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const hugoDir = path.join(root, 'public');
const astroDir = path.join(root, 'dist-astro');
const assetInventory = path.join(root, 'docs/astro-migration/asset-inventory.txt');
const routeExtensions = new Set(['.html', '.xml', '.txt']);
const sameHostnames = new Set(['localbusinesssearch.com', 'www.localbusinesssearch.com']);

async function walk(dir, base = dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath, base));
    } else {
      files.push(path.relative(base, fullPath).split(path.sep).join('/'));
    }
  }

  return files;
}

function asUrlPath(filePath) {
  return `/${filePath}`;
}

function isRouteFile(filePath) {
  return routeExtensions.has(path.extname(filePath));
}

function pathForUrl(urlPath) {
  const clean = urlPath.replace(/\/{2,}/g, '/');
  if (clean === '/') return 'index.html';

  const withoutSlash = clean.replace(/^\//, '');
  if (path.extname(withoutSlash)) return withoutSlash;

  return path.join(withoutSlash, 'index.html').split(path.sep).join('/');
}

function normalizeInternalUrl(rawUrl, sourceFile) {
  if (!rawUrl || rawUrl.startsWith('#')) return null;
  if (/^(mailto|tel|sms|javascript|data):/i.test(rawUrl)) return null;

  try {
    const parsed = new URL(rawUrl, 'https://localbusinesssearch.com');
    if (!sameHostnames.has(parsed.hostname)) return null;
    return parsed.pathname;
  } catch {
    const sourceDir = path.dirname(`/${sourceFile}`);
    const resolved = path.posix.normalize(path.posix.join(sourceDir, rawUrl.split(/[?#]/)[0]));
    return resolved.startsWith('/') ? resolved : `/${resolved}`;
  }
}

async function readRequiredAssets() {
  if (!existsSync(assetInventory)) return [];
  const text = await readFile(assetInventory, 'utf8');

  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => line.replace(/^\.\//, '/'))
    .filter((line) => line.startsWith('/'));
}

async function collectInternalReferences(files) {
  const references = [];
  const attrPattern = /\b(?:href|src)=["']([^"']+)["']/gi;
  const srcsetPattern = /\bsrcset=["']([^"']+)["']/gi;

  for (const file of files.filter((item) => item.endsWith('.html'))) {
    const html = (await readFile(path.join(astroDir, file), 'utf8'))
      .replace(/<pre\b[\s\S]*?<\/pre>/gi, '')
      .replace(/<code\b[\s\S]*?<\/code>/gi, '');
    for (const match of html.matchAll(attrPattern)) {
      const normalized = normalizeInternalUrl(match[1], file);
      if (normalized) references.push({ source: `/${file}`, target: normalized });
    }

    for (const match of html.matchAll(srcsetPattern)) {
      const candidates = match[1].split(',').map((item) => item.trim().split(/\s+/)[0]);
      for (const candidate of candidates) {
        const normalized = normalizeInternalUrl(candidate, file);
        if (normalized) references.push({ source: `/${file}`, target: normalized });
      }
    }
  }

  return references;
}

function targetExists(target) {
  const filePath = pathForUrl(target);
  return existsSync(path.join(astroDir, filePath));
}

const [hugoFiles, astroFiles, requiredAssets] = await Promise.all([
  walk(hugoDir),
  walk(astroDir),
  readRequiredAssets(),
]);

const hugoRoutes = new Set(hugoFiles.filter(isRouteFile).map(asUrlPath));
const astroRoutes = new Set(astroFiles.filter(isRouteFile).map(asUrlPath));
const missingRoutes = [...hugoRoutes].filter((route) => !astroRoutes.has(route)).sort();
const extraRoutes = [...astroRoutes].filter((route) => !hugoRoutes.has(route)).sort();

const missingAssets = requiredAssets
  .filter((asset) => !existsSync(path.join(astroDir, asset.replace(/^\//, ''))))
  .sort();

const references = await collectInternalReferences(astroFiles);
const brokenReferences = references
  .filter(({ target }) => !targetExists(target))
  .sort((a, b) => `${a.source} ${a.target}`.localeCompare(`${b.source} ${b.target}`));

console.log(`Hugo route files: ${hugoRoutes.size}`);
console.log(`Astro route files: ${astroRoutes.size}`);
console.log(`Missing Astro routes: ${missingRoutes.length}`);
console.log(`Extra Astro routes: ${extraRoutes.length}`);
console.log(`Missing required assets: ${missingAssets.length}`);
console.log(`Broken internal Astro references: ${brokenReferences.length}`);

for (const [label, items] of [
  ['Missing routes', missingRoutes],
  ['Extra routes', extraRoutes],
  ['Missing assets', missingAssets],
  ['Broken references', brokenReferences.map(({ source, target }) => `${source} -> ${target}`)],
]) {
  if (items.length === 0) continue;
  console.log(`\n${label}:`);
  for (const item of items.slice(0, 50)) console.log(`- ${item}`);
  if (items.length > 50) console.log(`...and ${items.length - 50} more`);
}

if (missingRoutes.length || extraRoutes.length || missingAssets.length || brokenReferences.length) {
  process.exitCode = 1;
}
