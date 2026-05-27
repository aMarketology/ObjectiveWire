// NewsArticle Schema Component for Google News, Perplexity, and MSN
// Add this to your article pages for proper indexing
// IMPORTANT: All URLs must use https://www.objectwire.org (canonical www domain)

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
      "url": authorUrl || `https://www.objectwire.org/authors/${author.toLowerCase().replace(/\s+/g, '-')}`
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "Objective Wire",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.objectwire.org/zwire-logo-square.png",
        "width": 1001,
        "height": 1001
      },
      "url": "https://www.objectwire.org",
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
    "copyrightHolder": { "@type": "Organization", "name": "Objective Wire", "url": "https://www.objectwire.org" },
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
    "name": "Objective Wire",
    "alternateName": "oWire",
    "url": "https://www.objectwire.org",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.objectwire.org/zwire-logo-square.png",
      "width": 1001,
      "height": 1001
    },
    "description": "Objective Wire is an independent investigative newsroom delivering verified, source-cited reporting on creators, sports, cars, and culture. Based in Austin, Texas.",
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
      "email": "editorial@objectwire.org",
      "telephone": "+1-575-495-0323",
      "areaServed": "US",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2921 E 17th St Building 3, APT 3205",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "postalCode": "78702",
        "addressCountry": "US"
      }
    },
    "ethicsPolicy": "https://www.objectwire.org/editorial-standards",
    "correctionsPolicy": "https://www.objectwire.org/corrections",
    "verificationFactCheckingPolicy": "https://www.objectwire.org/editorial-standards",
    "diversityPolicy": "https://www.objectwire.org/editorial-standards",
    "masthead": "https://www.objectwire.org/team",
    "ownershipFundingInfo": "https://www.objectwire.org/about",
    "nonprofitStatus": "Nonprofit501c3",
    "funder": {
      "@type": "Organization",
      "name": "Objective Wire LLC (self-funded)",
      "description": "Self-funded by Conan D. Boyle. No advertising, sponsored content, or political donations accepted."
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
    "name": "Objective Wire",
    "url": "https://www.objectwire.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.objectwire.org/search?q={search_term_string}"
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
