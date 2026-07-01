import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { postDateSort } from '@/utils/content';
import { blogFeed } from '@/utils/rss';

export const trailingSlash = 'never';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(postDateSort);
  return blogFeed(context, 'Categories', 'Local Business Search category archive.', posts);
}
