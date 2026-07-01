import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseContentSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  draft: z.boolean().optional().default(false),
  noindex: z.boolean().optional().default(false),
  robots: z.string().optional(),
  layout: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: baseContentSchema.extend({
    date: z.coerce.date(),
    author: z.string().optional(),
    category: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional().default([]),
    image: z.string().optional(),
    featured_image: z.string().optional(),
    featuredImage: z.string().optional(),
    thumbnail: z.string().optional(),
    cover: z.string().optional(),
    image_credit: z.string().optional(),
    image_credit_url: z.url().optional(),
    summary: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: baseContentSchema.catchall(z.unknown()),
});

export const collections = { blog, pages };
