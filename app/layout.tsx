import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'
import JsonLd from '@/components/JsonLd'
import { orgSchema, websiteSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME, GOOGLE_VERIFICATION } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Vulkan Vegas Casino Polska: Oficjalna Strona Kasyna 2026',
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Vulkan Vegas Casino Polska to oficjalna strona kasyna online dla polskich graczy w 2026 roku. Pełna recenzja Vulkan Vegas: licencja, opinie, bezpieczeństwo oraz ocena ekspertów.',
  alternates: {
    canonical: '/',
    languages: { 'pl-PL': '/' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  authors: [{ name: 'Redakcja Vulkan Vegas Polska', url: `${SITE_URL}/zespol` }],
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: 'pl_PL',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  verification: {
    google: GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={inter.variable}>
      <head>
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="bg-bgDark text-white antialiased font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
