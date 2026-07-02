import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { getPostArchiveCategories, pagePathFromId, postDateSort, taxonomySlug } from '@/utils/content';
import { site } from '@/data/site';
import { shopCategories, shopCategoryHref } from '@/data/shopCategories';

export async function GET(_context: APIContext) {
  const pages = await getCollection('pages', ({ data }) => !data.draft && !data.noindex);
  const posts = (await getCollection('blog', ({ data }) => !data.draft && !data.noindex)).sort(postDateSort);

  const urls = new Set<string>();

  pages.forEach((page) => urls.add(pagePathFromId(page.id)));
  posts.forEach((post) => urls.add(`/blog/${post.id}/`));
  urls.add('/categories/');
  urls.add('/tags/');
  urls.add('/shop/');
  shopCategories.forEach((category) => urls.add(shopCategoryHref(category)));

  posts.flatMap(getPostArchiveCategories).forEach((category) => urls.add(`/categories/${taxonomySlug(category)}/`));
  posts.flatMap((post) => post.data.tags ?? []).forEach((tag) => urls.add(`/tags/${taxonomySlug(tag)}/`));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(urls)
  .sort()
  .map((path) => `  <url><loc>${new URL(path, site.baseUrl).toString()}</loc></url>`)
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
