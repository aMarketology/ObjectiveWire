// NewsArticle Schema Component for Google News, Perplexity, and MSN
// Add this to your article pages for proper indexing
// IMPORTANT: All URLs must use https://www.objectivewire.com (canonical www domain)

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
  section = "Technology",
  keywords = [],
}: ArticleSchemaProps) {
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
      "url": authorUrl || `https://www.objectivewire.com/authors/${author.toLowerCase().replace(/\s+/g, '-')}`
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "Objective Wire",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.objectivewire.com/zwire-logo-square.png",
        "width": 1001,
        "height": 1001
      },
      "url": "https://www.objectivewire.com",
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
    "copyrightHolder": { "@type": "Organization", "name": "Objective Wire", "url": "https://www.objectivewire.com" },
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "Objective Wire",
    "alternateName": "oWire",
    "url": "https://www.objectivewire.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.objectivewire.com/zwire-logo-square.png",
      "width": 1001,
      "height": 1001
    },
    "description": "Objective Wire is a verified sports, creators, and culture network covering World Cup 2026, Premier League, MLS, MLB, supercars, and the creator economy. Accuracy over speed, primary sources only.",
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
      "email": "editorial@objectivewire.com",
      "areaServed": "US"
    },
    "ethicsPolicy": "https://www.objectivewire.com/editorial-standards",
    "correctionsPolicy": "https://www.objectivewire.com/corrections",
    "verificationFactCheckingPolicy": "https://www.objectivewire.com/editorial-standards",
    "masthead": "https://www.objectivewire.com/team",
    "ownershipFundingInfo": "https://www.objectivewire.com/about"
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Objective Wire",
    "url": "https://www.objectivewire.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.objectivewire.com/search?q={search_term_string}"
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
