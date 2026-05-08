/**
 * JackArticleDB — Server Component
 *
 * Fetches a row from the `jack_articles` table by slug and renders it
 * using the <NewsArticle> display component.
 *
 * Note: jack_articles has NO `status` column. Every row is treated as published.
 *
 * Usage in a page.tsx:
 *   export const revalidate = 86400;
 *   export default function Page() {
 *     return <JackArticleDB slug="my-article-slug" />;
 *   }
 */

import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { ContentRenderer } from '@/components/articles/ContentRenderer';
import type { BreadcrumbItem } from '@/components/nav/Breadcrumb';

interface JackArticleDBProps {
  slug: string;
}

function deriveBreadcrumbs(urlPath: string | null | undefined, title: string): BreadcrumbItem[] {
  if (!urlPath) return [];
  const segments = urlPath.replace(/^\//, '').split('/').filter(Boolean);
  if (segments.length < 2) return [];

  const crumbs: BreadcrumbItem[] = [{ name: 'Home', item: '/' }];
  let cumulativePath = '';
  for (let i = 0; i < segments.length - 1; i++) {
    cumulativePath += '/' + segments[i];
    const label = segments[i]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ name: label, item: cumulativePath });
  }
  crumbs.push({ name: title, item: urlPath });
  return crumbs;
}

export async function JackArticleDB({ slug }: JackArticleDBProps) {
  const supabase = await createClient();
  if (!supabase) notFound();

  // jack_articles has no `status` column — never query it
  const { data: row } = await supabase
    .from('jack_articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!row) notFound();

  // hero_image is stored as JSONB { src, alt } in jack_articles
  const heroObj = row.hero_image as Record<string, string> | null;
  const heroImage = heroObj?.src
    ? { src: heroObj.src, alt: heroObj.alt ?? '' }
    : undefined;

  // author is stored as JSONB { name, role, department, avatar, twitter, bio, authorSlug }
  const authorObj = row.author as Record<string, string> | null;
  const author = authorObj?.name
    ? {
        name: authorObj.name,
        role: authorObj.role ?? authorObj.department ?? undefined,
        avatar: authorObj.avatar ?? undefined,
        twitter: authorObj.twitter ?? undefined,
        authorSlug: authorObj.authorSlug ?? authorObj.author_slug ?? undefined,
        bio: authorObj.bio ?? undefined,
      }
    : undefined;

  // Derive the canonical URL path for breadcrumbs
  let urlPath: string | undefined;
  if (row.article_url) {
    try {
      urlPath = new URL(row.article_url).pathname;
    } catch {
      urlPath = row.article_url.startsWith('/') ? row.article_url : `/${row.article_url}`;
    }
  }

  const category = (row.section ?? row.category ?? 'News') as string;
  const tags = (row.keywords ?? row.tags ?? undefined) as string[] | undefined;

  return (
    <NewsArticle
      title={row.title as string}
      subtitle={row.subtitle ?? row.description ?? undefined}
      category={category}
      publishDate={row.publish_date ?? ''}
      readTime={row.read_time ?? undefined}
      author={author}
      heroImage={heroImage}
      tags={tags}
      trending={row.trending ?? undefined}
      breaking={row.breaking ?? undefined}
      exclusive={row.exclusive ?? undefined}
      slug={slug}
      url={urlPath}
      breadcrumbs={deriveBreadcrumbs(urlPath, row.title as string)}
    >
      <ContentRenderer html={(row.content_html as string) ?? ''} />
    </NewsArticle>
  );
}
