'use client'

import { useState } from 'react'

interface Props {
  code: string
  bonus?: string
  expiry?: string
}

export default function PromoCodeBox({ code, bonus, expiry }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gradient-to-r from-brand/20 to-gold/10 border border-brand/40 rounded-xl p-5 my-6">
      {bonus && <p className="text-gold font-bold text-lg mb-2">{bonus}</p>}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="font-mono text-2xl font-bold text-white bg-surface rounded-lg px-4 py-2 tracking-widest border border-white/20 select-all">
          {code}
        </div>
        <button
          onClick={handleCopy}
          className="bg-brand hover:bg-brand-dark text-white font-bold px-5 py-2 rounded-lg transition-colors"
        >
          {copied ? '✓ Skopiowano!' : 'Kopiuj kod'}
        </button>
      </div>
      {expiry && <p className="text-gray-400 text-sm mt-2">Ważny do: {expiry}</p>}
    </div>
  )
}
