import { SITE_URL, SITE_NAME, PUBLISHED_DATE, MODIFIED_DATE } from './constants'

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'Niezależny serwis recenzujący kasyno Vulkan Vegas dla polskich graczy',
  sameAs: [] as string[],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'pl-PL',
}

export function webPageSchema(title: string, path: string, dateModified = MODIFIED_DATE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: `${SITE_URL}${path}`,
    datePublished: PUBLISHED_DATE,
    dateModified,
    inLanguage: 'pl-PL',
    isPartOf: { '@id': `${SITE_URL}/#website` },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export function howToSchema(name: string, steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

export function reviewSchema(itemName: string, ratingValue: number, reviewCount = 184) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'OnlineBusiness',
      name: itemName,
      url: SITE_URL,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    author: { '@id': `${SITE_URL}/#organization` },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  }
}

export function articleSchema(title: string, path: string, datePublished = PUBLISHED_DATE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified: MODIFIED_DATE,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'pl-PL',
  }
}

export function personSchema(name: string, jobTitle: string, description: string, url?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    url: url ?? `${SITE_URL}/zespol`,
    worksFor: { '@id': `${SITE_URL}/#organization` },
  }
}

export function softwareAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Vulkan Vegas Casino App',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Android, iOS',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
    description: 'Aplikacja mobilna kasyna Vulkan Vegas na Android oraz iOS',
  }
}

export function itemListSchema(items: { name: string; url: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  }
}
