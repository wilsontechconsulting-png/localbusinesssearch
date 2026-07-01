import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { getPostArchiveCategories, postDateSort, taxonomySlug } from '@/utils/content';
import { blogFeed } from '@/utils/rss';

export const trailingSlash = 'never';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const categoryMap = new Map<string, string>();
  posts.flatMap(getPostArchiveCategories).forEach((category) => {
    const slug = taxonomySlug(category);
    if (!categoryMap.has(slug)) categoryMap.set(slug, category);
  });
  return Array.from(categoryMap.entries()).map(([slug, category]) => ({
    params: { slug },
    props: {
      category,
      posts: posts
        .filter((post) => getPostArchiveCategories(post).some((postCategory) => taxonomySlug(postCategory) === slug))
        .sort(postDateSort),
    },
  }));
}

export async function GET(context: APIContext) {
  const { category, posts } = context.props;
  return blogFeed(context, category, `Articles in ${category}.`, posts);
}
