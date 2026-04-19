import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const pages = [
  { path: '/', priority: 1.0, changeFrequency: 'daily' },
  { path: '/bonus', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/bonus-bez-depozytu', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/kod-promocyjny', priority: 0.9, changeFrequency: 'daily' },
  { path: '/darmowe-spiny', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/aplikacja', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/gry', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/logowanie', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/rejestracja', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/czy-vulkan-vegas-jest-legalne-w-polsce', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/jak-wyplacic-pieniadze-z-vulkan-vegas', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/metody-platnosci', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/weryfikacja-konta-kyc', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/o-nas', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/zespol', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/metodologia-recenzji', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/polityka-redakcyjna', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/informacja-afiliacyjna', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/odpowiedzialna-gra', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/polityka-prywatnosci', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/regulamin', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/kontakt', priority: 0.4, changeFrequency: 'yearly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}
