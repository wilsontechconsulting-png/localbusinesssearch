import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import type { CollectionEntry } from 'astro:content';
import { site } from '@/data/site';
import { getImage } from '@/utils/content';

export function blogFeed(context: APIContext, title: string, description: string, posts: CollectionEntry<'blog'>[]) {
  return rss({
    title,
    description,
    site: context.site ?? site.baseUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? post.data.summary ?? '',
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      customData: getImage(post) ? `<media:content url="${getImage(post)}" />` : undefined,
    })),
    customData: '<language>en-us</language>',
  });
}

export function emptyFeed(context: APIContext, title: string, description: string, path: string) {
  return rss({
    title,
    description,
    site: context.site ?? site.baseUrl,
    items: [
      {
        title,
        description,
        pubDate: new Date('2026-07-01T06:00:00-05:00'),
        link: path,
      },
    ],
    customData: '<language>en-us</language>',
  });
}
