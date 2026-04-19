'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'cookie_consent_vv_pl'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) setVisible(true)
  }, [])

  if (!visible) return null

  const accept = (all: boolean) => {
    localStorage.setItem(STORAGE_KEY, all ? 'all' : 'essential')
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-white/15 p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-gray-300 text-sm flex-1 leading-relaxed">
          Używamy plików cookies zgodnie z{' '}
          <Link href="/polityka-prywatnosci" className="underline hover:text-white">polityką prywatności</Link>.
          Kliknij &quot;Akceptuj&quot; aby wyrazić zgodę na wszystkie pliki cookies.
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => accept(false)}
            className="text-sm border border-white/20 text-gray-300 hover:text-white rounded-lg px-4 py-2 transition-colors"
          >
            Tylko niezbędne
          </button>
          <button
            onClick={() => accept(true)}
            className="text-sm bg-gold text-black font-bold rounded-lg px-4 py-2 hover:bg-gold-light transition-colors"
          >
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </div>
  )
}
