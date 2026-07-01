import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://localbusinesssearch.com',
  output: 'static',
  trailingSlash: 'always',
  publicDir: './static',
  outDir: './dist-astro',
  integrations: [sitemap()],
});
