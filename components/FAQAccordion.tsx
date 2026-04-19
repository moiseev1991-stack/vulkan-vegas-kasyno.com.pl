'use client'

import { useState } from 'react'
import JsonLd from './JsonLd'
import { faqSchema } from '@/lib/schema'

interface FAQItem {
  q: string
  a: string
}

interface Props {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <JsonLd data={faqSchema(items)} />
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
            <button
              className="w-full text-left px-4 py-3 font-semibold text-white bg-surface-light hover:bg-surface transition-colors flex justify-between items-center gap-2"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <span className={`text-brand text-lg transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            {open === i && (
              <div className="px-4 py-3 text-gray-300 text-sm leading-relaxed bg-surface/50">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
