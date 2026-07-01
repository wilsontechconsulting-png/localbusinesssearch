import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://localbusinesssearch.com',
  output: 'static',
  trailingSlash: 'ignore',
  publicDir: './static',
  outDir: './dist-astro',
  integrations: [],
});
