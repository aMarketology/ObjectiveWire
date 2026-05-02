/**
 * ArticlePageDB — Server Component
 *
 * Loads an article page from a local JSON file (data/article-pages/{slug}.json).
 * Populate the data directory by running: npm run dump-content
 */

import { notFound } from 'next/navigation';
import { getArticlePage } from '@/lib/local-content';
import { ArticlePage, TableOfContents } from './ArticlePage';
import { ContentRenderer } from './ContentRenderer';

interface ArticlePageDBProps {
  slug: string;
}

export async function ArticlePageDB({ slug }: ArticlePageDBProps) {
  const row = getArticlePage(slug);
  if (!row) notFound();

  return (
    <ArticlePage
      title={row.title as string}
      subtitle={(row.subtitle as string) ?? undefined}
      category={(row.category as string) ?? undefined}
      lastUpdated={(row.last_updated as string) ?? undefined}
      infoBox={(row.info_box as any) ?? undefined}
      tableOfContents={(row.table_of_contents as any) ?? undefined}
      relatedLinks={(row.related_links as any) ?? undefined}
      backLink={(row.back_link as any) ?? undefined}
      breadcrumbs={Array.isArray(row.breadcrumbs) && (row.breadcrumbs as any[]).length > 0 ? row.breadcrumbs as any[] : undefined}
      slug={slug}
      url={(row.url as string) ?? `/${slug}`}
    >
      {Array.isArray(row.table_of_contents) && (row.table_of_contents as any[]).length > 0 && (
        <TableOfContents items={row.table_of_contents as any[]} />
      )}
      <ContentRenderer html={(row.content_html as string) ?? ''} />
    </ArticlePage>
  );
}
