import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { postDateSort, taxonomySlug } from '@/utils/content';
import { blogFeed } from '@/utils/rss';

export const trailingSlash = 'never';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const tagMap = new Map<string, string>();
  posts.flatMap((post) => post.data.tags ?? []).forEach((tag) => {
    const slug = taxonomySlug(tag);
    if (!tagMap.has(slug)) tagMap.set(slug, tag);
  });
  return Array.from(tagMap.entries()).map(([slug, tag]) => ({
    params: { slug },
    props: {
      tag,
      posts: posts
        .filter((post) => (post.data.tags ?? []).some((postTag) => taxonomySlug(postTag) === slug))
        .sort(postDateSort),
    },
  }));
}

export async function GET(context: APIContext) {
  const { tag, posts } = context.props;
  return blogFeed(context, tag, `Articles tagged ${tag}.`, posts);
}
