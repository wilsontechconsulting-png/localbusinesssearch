import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { emptyFeed } from '@/utils/rss';
import { pagePathFromId, slugParamFromPath } from '@/utils/content';

export const trailingSlash = 'never';

export async function getStaticPaths() {
  const pages = await getCollection('pages', ({ data }) => !data.draft && !data.noindex);
  return pages
    .map((page) => ({ page, path: pagePathFromId(page.id) }))
    .filter(({ page, path }) => page.id !== '_index' && page.id.endsWith('/_index') && !path.startsWith('/blog/'))
    .map(({ page, path }) => ({
      params: { feed: slugParamFromPath(path) },
      props: { page, path },
    }));
}

export async function GET(context: APIContext) {
  const { page, path } = context.props;
  return emptyFeed(context, page.data.title, page.data.description ?? `${page.data.title} feed.`, path);
}
