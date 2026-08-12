import type { CollectionEntry } from 'astro:content';

export function pagePathFromId(id: string): string {
  if (id === '_index') return '/';
  if (id.endsWith('/_index')) return `/${id.replace(/\/_index$/, '')}/`;
  return `/${id.replace(/\.md$/, '')}/`;
}

export function slugParamFromPath(path: string): string | undefined {
  const trimmed = path.replace(/^\/|\/$/g, '');
  return trimmed || undefined;
}

export function taxonomySlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getPostCategories(post: CollectionEntry<'blog'>): string[] {
  const categories = post.data.categories ?? [];
  const category = post.data.category ? [post.data.category] : [];
  return [...category, ...categories].filter(Boolean);
}

export function getPostArchiveCategories(post: CollectionEntry<'blog'>): string[] {
  return (post.data.categories ?? []).filter(Boolean);
}

export function postDateSort(a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>): number {
  const dateDelta = b.data.date.getTime() - a.data.date.getTime();
  if (dateDelta !== 0) return dateDelta;

  return b.id.localeCompare(a.id);
}

export function getImage(post: CollectionEntry<'blog'>): string | undefined {
  return (
    post.data.image ??
    post.data.featured_image ??
    post.data.featuredImage ??
    post.data.thumbnail ??
    post.data.cover
  );
}
