// SEO utilities for articles
import type { Metadata } from 'next';
import { SITE_CONFIG } from './site-config';

export interface ArticleMetadataOptions {
  title: string;
  description: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  authors?: string[];
  section?: string;
  category?: string;
  tags?: string[];
  keywords?: string[];
  images?: string[];
  url?: string;
  canonicalUrl?: string;
  canonical?: string;
  ogImage?: string;
}

export function generateArticleMetadata(options: ArticleMetadataOptions): Metadata {
  const {
    title,
    description,
    publishedTime,
    modifiedTime,
    author,
    authors,
    section,
    category,
    tags,
    keywords,
    images = [],
    url = '',
    canonicalUrl,
    canonical,
    ogImage,
  } = options;

  const resolvedCanonical = canonicalUrl || canonical;
  const resolvedAuthors = authors ?? (author ? [author] : undefined);
  const resolvedKeywords = keywords ?? tags;

  // Auto-generate OG image via Satori when no explicit image is provided
  const SITE_URL = SITE_CONFIG.url;
  let fallbackOgImage: string | undefined;
  if (!ogImage && images.length === 0 && resolvedCanonical) {
    let slugPath: string | null = null;
    if (resolvedCanonical.startsWith('/')) {
      slugPath = resolvedCanonical;
    } else {
      try { slugPath = new URL(resolvedCanonical).pathname; } catch { /* invalid */ }
    }
    if (slugPath) fallbackOgImage = `${SITE_URL}/api/og?slug=${encodeURIComponent(slugPath)}`;
  }

  const allImages = ogImage
    ? [ogImage, ...images]
    : images.length > 0
      ? images
      : fallbackOgImage
        ? [fallbackOgImage]
        : [];

  return {
    title,
    description,
    authors: resolvedAuthors ? resolvedAuthors.map(name => ({ name })) : undefined,
    keywords: resolvedKeywords,
    ...(resolvedCanonical ? { alternates: { canonical: resolvedCanonical } } : {}),
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: resolvedAuthors,
      section: section ?? category,
      tags,
      images: allImages.map(img => ({ url: img })),
      url: resolvedCanonical ?? url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: allImages,
    },
  };
}
