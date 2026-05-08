// NewsArticle Schema Component for Google News, Perplexity, and MSN
// Add this to your article pages for proper indexing
// IMPORTANT: All URLs must use https://www.owire.org (canonical www domain)

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
      "url": authorUrl || `https://www.owire.org/authors/${author.toLowerCase().replace(/\s+/g, '-')}`
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "ZeroWire",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.owire.org/zwire-logo-square.png",
        "width": 1001,
        "height": 1001
      },
      "url": "https://www.owire.org",
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
    "copyrightHolder": { "@type": "Organization", "name": "ZeroWire", "url": "https://www.owire.org" },
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
    "additionalType": "https://schema.org/NGO",
    "name": "ZeroWire",
    "alternateName": "ZWire",
    "url": "https://www.owire.org",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.owire.org/zwire-logo-square.png",
      "width": 1001,
      "height": 1001
    },
    "description": "ZeroWire is an independent, self-funded newsroom delivering verified, source-cited reporting on sports, creators, tech, and culture.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "ZeroWire Editorial Team"
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
      "email": "editorial@owire.org"
    },
    "ethicsPolicy": "https://www.owire.org/editorial-standards",
    "correctionsPolicy": "https://www.owire.org/corrections",
    "verificationFactCheckingPolicy": "https://www.owire.org/editorial-standards",
    "diversityPolicy": "https://www.owire.org/editorial-standards",
    "masthead": "https://www.owire.org/team",
    "ownershipFundingInfo": "https://www.owire.org/about",
    "nonprofitStatus": "Nonprofit501c3",
    "funder": {
      "@type": "Organization",
      "name": "ZeroWire (self-funded)",
      "description": "Self-funded by the ZeroWire editorial team. No advertising, sponsored content, or political donations accepted."
    }
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
    "name": "ZeroWire",
    "url": "https://www.owire.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.owire.org/search?q={search_term_string}"
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
