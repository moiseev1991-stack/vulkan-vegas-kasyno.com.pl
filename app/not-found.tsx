import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strona nie znaleziona (404) | Vulkan Vegas Polska',
  description: 'Strona nie istnieje. Wróć na stronę główną Vulkan Vegas Polska.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-extrabold text-brand mb-4">404</h1>
      <h2 className="text-2xl font-bold text-white mb-4">Strona nie znaleziona</h2>
      <p className="text-gray-400 mb-8">
        Strona, której szukasz, nie istnieje lub została przeniesiona.
      </p>
      <Link
        href="/"
        className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-lg transition-colors inline-block"
      >
        Wróć na stronę główną
      </Link>
    </div>
  )
}
