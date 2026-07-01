// NewsArticle Schema Component for Google News, Perplexity, and MSN
// Add this to your article pages for proper indexing
import { SITE_CONFIG } from '@/lib/site-config';

export interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  authorUrl?: string;
  publishedTime: string;
  modifiedTime?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  articleUrl: string;
  section?: string;
  keywords?: string[];
}

export function NewsArticleSchema({
  title,
  description,
  author,
  authorUrl,
  publishedTime,
  modifiedTime,
  imageUrl,
  imageWidth = 1200,
  imageHeight = 675,
  imageAlt,
  articleUrl,
  section = "Sports",
  keywords = [],
}: ArticleSchemaProps) {
  const siteUrl = SITE_CONFIG.url;
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": description,
    "image": imageUrl
      ? [{ "@type": "ImageObject", "url": imageUrl, "width": imageWidth, "height": imageHeight, "caption": imageAlt || title }]
      : undefined,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Person",
      "name": author,
      "url": authorUrl || `${siteUrl}/authors/${author.toLowerCase().replace(/\s+/g, '-')}`
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "Objective Wire",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/zwire-logo-square.png`,
        "width": 1001,
        "height": 1001
      },
      "url": siteUrl,
      "sameAs": [
        "https://twitter.com/object_wire",
        "https://www.facebook.com/objectwire",
        "https://www.tiktok.com/@object_wire"
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": section,
    "keywords": keywords.join(", "),
    "isAccessibleForFree": true,
    "inLanguage": "en-US",
    "copyrightYear": new Date(publishedTime).getFullYear(),
    "copyrightHolder": { "@type": "Organization", "name": "Objective Wire", "url": siteUrl },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "article"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Organization Schema for the main site
export function OrganizationSchema() {
  const siteUrl = SITE_CONFIG.url;
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "Objective Wire",
    "alternateName": "oWire",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/zwire-logo-square.png`,
      "width": 1001,
      "height": 1001
    },
    "description": "Objective Wire is a verified news platform delivering source-cited reporting on creators, sports, cars, and culture. Based in Austin, Texas.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Conan D. Boyle"
      }
    ],
    "sameAs": [
      "https://twitter.com/object_wire",
      "https://www.facebook.com/objectwire",
      "https://www.tiktok.com/@object_wire"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "editorial",
      "email": "editorial@objectivewire.org",
      "areaServed": "US"
    },
    "ethicsPolicy": `${siteUrl}/editorial-standards`,
    "correctionsPolicy": `${siteUrl}/corrections`,
    "masthead": `${siteUrl}/team`,
    "ownershipFundingInfo": `${siteUrl}/about`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite Schema with SearchAction for Google
export function WebSiteSchema() {
  const siteUrl = SITE_CONFIG.url;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Objective Wire",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
