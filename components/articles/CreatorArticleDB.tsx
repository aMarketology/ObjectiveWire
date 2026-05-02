/**
 * CreatorArticleDB — Server Component
 *
 * Loads a creator profile from a local JSON file (data/creator-articles/{slug}.json).
 * Populate the data directory by running: npm run dump-content
 */

import { notFound } from 'next/navigation';
import { getCreatorArticle, listLocalSlugs } from '@/lib/local-content';
import CreatorArticle from './CreatorArticle';
import { ContentRenderer } from './ContentRenderer';

interface CreatorArticleDBProps {
  slug: string;
}

export async function CreatorArticleDB({ slug }: CreatorArticleDBProps) {
  const row = getCreatorArticle(slug);
  if (!row) notFound();

  // Related creators: up to 5 other published profiles
  const relatedRows = listLocalSlugs('creator-articles')
    .filter(s => s !== slug)
    .slice(0, 5)
    .map(s => getCreatorArticle(s))
    .filter(Boolean) as Record<string, any>[];

  const relatedCreators = relatedRows.map((r) => {
    let href = '/influencer';
    if (r.schema_article_url) {
      try { href = new URL(r.schema_article_url).pathname; } catch { href = `/${r.slug}`; }
    } else {
      href = `/${r.slug}`;
    }
    return {
      name:     r.hero_name ?? r.slug,
      subtitle: r.hero_subtitle ?? 'Creator Profile',
      imageSrc: r.sidebar_infobox_image_src ?? '',
      imageAlt: r.sidebar_infobox_image_alt ?? r.hero_name ?? '',
      href,
    };
  }).filter(c => c.imageSrc);

  return (
    <CreatorArticle
      schema={{
        title:         row.schema_title,
        description:   row.schema_description,
        author:        row.schema_author,
        authorUrl:     row.schema_author_url ?? undefined,
        articleUrl:    row.schema_article_url,
        imageUrl:      row.schema_image_url ?? undefined,
        section:       row.schema_section,
        keywords:      row.schema_keywords ?? [],
        publishedTime: row.schema_published_time,
        modifiedTime:  row.schema_modified_time,
      }}
      breadcrumbs={row.breadcrumbs ?? []}
      hero={{
        image:       { src: row.hero_image_src, alt: row.hero_image_alt },
        gradient:    row.hero_gradient ?? undefined,
        name:        row.hero_name,
        subtitle:    row.hero_subtitle,
        description: row.hero_description,
        badges:      row.hero_badges ?? [],
        ctaButtons:  row.hero_cta_buttons?.length ? row.hero_cta_buttons : undefined,
      }}
      sidebar={{
        infobox: {
          image:    { src: row.sidebar_infobox_image_src, alt: row.sidebar_infobox_image_alt },
          name:     row.sidebar_infobox_name,
          subtitle: row.sidebar_infobox_subtitle,
          rows:     row.sidebar_infobox_rows ?? [],
        },
        callout:      row.sidebar_callout ?? undefined,
        timeline:     row.sidebar_timeline?.length ? row.sidebar_timeline : undefined,
        relatedLinks: row.sidebar_related_links?.length ? row.sidebar_related_links : undefined,
        meta: {
          publishedDate: row.sidebar_meta_published_date,
          updatedDate:   row.sidebar_meta_updated_date ?? undefined,
          author:        row.sidebar_meta_author,
          category:      row.sidebar_meta_category,
        },
      }}
      tiktokEmbed={row.tiktok_embed ?? false}
      tags={row.schema_keywords?.length ? row.schema_keywords : undefined}
      relatedCreators={relatedCreators.length > 0 ? relatedCreators : undefined}
    >
      <ContentRenderer html={row.content_html ?? ''} />
    </CreatorArticle>
  );
}
