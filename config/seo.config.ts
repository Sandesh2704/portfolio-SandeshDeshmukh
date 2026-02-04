// app/seo.config.ts
import { Metadata } from "next";
import siteConfig from "./site.config";

// Define site creation date (when your site was first published)
const SITE_CREATION_DATE = "2024-01-01T00:00:00.000Z";

export interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    type?: 'website' | 'article';
    image?: string;
  };
  path?: string;
  // Add date props
  publishedTime?: string;
  modifiedTime?: string;
  // Optional category for articles
  category?: string;
  // Author for articles
  author?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  openGraph,
  path = "/",
  publishedTime,
  modifiedTime,
  category,
  author,
}: GenerateMetadataProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : siteConfig.defaultTitle;
  
  const fullDescription = description || siteConfig.defaultDescription;
  const fullKeywords = keywords || siteConfig.defaultKeywords;
  const canonicalUrl = `${siteConfig.url}${path}`;
  const ogImage = openGraph?.image || `${siteConfig.url}${siteConfig.images.ogDefault}`;
  const twitterImage = `${siteConfig.url}${siteConfig.images.twitterDefault}`;
  
  // Determine dates - use provided or defaults
  const publishedDate = publishedTime || SITE_CREATION_DATE;
  const modifiedDate = modifiedTime || new Date().toISOString();
  const twitterUrl = siteConfig.social.find(s => s.title === 'Twitter')?.url;
  const twitterUsername = twitterUrl?.split('/').pop()?.replace('@', '');
  
  // Prepare authors array
  const authors = author 
    ? [{ name: author, url: siteConfig.author.url }]
    : [{ name: siteConfig.author.name, url: siteConfig.author.url }];
  
  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    
    // Basic metadata
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.defaultLocale,
      type: openGraph?.type || 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      authors: authors.map(a => a.name),
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [twitterImage],
      creator: twitterUsername ? `@${twitterUsername}` : undefined,
      site: twitterUsername ? `@${twitterUsername}` : undefined,
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Verification
    verification: {
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-verification-code',
      // other: {
      //   me: ['your-email@example.com'],
      // },
    },
    
    // Additional metadata
    category: category || 'Technology',
    authors: authors,
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    
    // Dates
    other: {
      'article:published_time': publishedDate,
      'article:modified_time': modifiedDate,
      'og:published_time': publishedDate,
      'og:modified_time': modifiedDate,
      'twitter:data1': modifiedDate.split('T')[0], // Just the date part
    },
  };
}

// Schema.org structured data generators
export function generatePersonSchema() {
  // Get social URLs
  const linkedinUrl = siteConfig.social.find(s => s.title === 'LinkedIn')?.url;
  const githubUrl = siteConfig.social.find(s => s.title === 'GitHub')?.url;
  const twitterUrl = siteConfig.social.find(s => s.title === 'Twitter')?.url;
  const emailUrl = siteConfig.social.find(s => s.title === 'Email')?.url;
  const whatsappUrl = siteConfig.social.find(s => s.title === 'WhatsApp')?.url;
  
  const sameAs = [];
  if (linkedinUrl) sameAs.push(linkedinUrl);
  if (githubUrl) sameAs.push(githubUrl);
  if (twitterUrl) sameAs.push(twitterUrl);
  
  // Add contact points
  const contactPoint = [];
  if (emailUrl) {
    contactPoint.push({
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: emailUrl.replace('mailto:', ''),
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    });
  }
  
  if (whatsappUrl) {
    contactPoint.push({
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: whatsappUrl.replace('https://wa.me/', '').replace('qr/', ''),
      contactOption: 'TollFree',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    });
  }
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.images.profile}`,
    jobTitle: siteConfig.author.jobTitle,
    sameAs: sameAs,
    contactPoint: contactPoint.length > 0 ? contactPoint : undefined,
    knowsAbout: siteConfig.defaultKeywords,
    description: siteConfig.defaultDescription,
    // Professional information
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Your University/College',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Your Company/Independent',
    },
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    publisher: {
      '@id': `${siteConfig.url}/#person`,
    },
    inLanguage: siteConfig.defaultLocale,
    datePublished: SITE_CREATION_DATE,
    dateModified: new Date().toISOString(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(path?: string, pageTitle?: string) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
  ];
  
  if (path && pageTitle) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: pageTitle,
      item: `${siteConfig.url}${path}`,
    });
  }
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${siteConfig.url}${path ? path : ''}#breadcrumb`,
    itemListElement: items,
    numberOfItems: items.length,
  };
}

// Generate WebPage schema
export function generateWebPageSchema(
  pageTitle?: string, 
  pageDescription?: string, 
  path?: string,
  lastReviewed?: string
) {
  const fullTitle = pageTitle || siteConfig.defaultTitle;
  const fullDescription = pageDescription || siteConfig.defaultDescription;
  const pageUrl = `${siteConfig.url}${path || ''}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: fullTitle,
    description: fullDescription,
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    about: {
      '@id': `${siteConfig.url}/#person`,
    },
    datePublished: SITE_CREATION_DATE,
    dateModified: new Date().toISOString(),
    lastReviewed: lastReviewed || new Date().toISOString(),
    breadcrumb: {
      '@id': `${pageUrl}#breadcrumb`,
    },
    inLanguage: siteConfig.defaultLocale,
    potentialAction: [
      {
        '@type': 'ReadAction',
        target: [pageUrl],
      },
    ],
  };
}

// Generate Article schema for blog posts
export function generateArticleSchema(
  articleTitle: string,
  articleDescription: string,
  path: string,
  imageUrl?: string,
  articleBody?: string,
  wordCount?: number,
  tags?: string[]
) {
  const articleUrl = `${siteConfig.url}${path}`;
  const articleImage = imageUrl || `${siteConfig.url}${siteConfig.images.ogDefault}`;
  const publishDate = new Date().toISOString();
  const modifiedDate = new Date().toISOString();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    headline: articleTitle,
    description: articleDescription,
    image: articleImage,
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
    },
    publisher: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      image: `${siteConfig.url}${siteConfig.images.profile}`,
    },
    datePublished: publishDate,
    dateModified: modifiedDate,
    wordCount: wordCount,
    keywords: tags || [],
    articleBody: articleBody,
    inLanguage: siteConfig.defaultLocale,
  };
}