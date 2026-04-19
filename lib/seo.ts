import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME } from './constants'

export function generateMetadata(
  title: string,
  description: string,
  path: string,
  type: 'website' | 'article' = 'article'
): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type,
      locale: 'pl_PL',
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
  }
}
