'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AFFILIATE_LINK } from '@/lib/constants'

const slides = [
  {
    badge: '⚡ FREE SPINS',
    title: 'DARMOWE',
    titleAccent: 'SPINY',
    description: 'Zdobądź 200 darmowych spinów bez depozytu. Tylko dla nowych graczy!',
    image: '/images/hero/banner-freespins.png',
    cta: 'Odbierz teraz',
    ctaSecondary: 'Czytaj więcej',
    ctaLink: AFFILIATE_LINK,
  },
  {
    badge: '🐣 WIELKANOC',
    title: 'WIELKANOCNA',
    titleAccent: 'BITWA',
    description: 'Walcz o pulę nagród €12 500 w specjalnym turnieju wielkanocnym!',
    image: '/images/hero/banner-easter.png',
    cta: 'Weź udział',
    ctaSecondary: 'Czytaj więcej',
    ctaLink: AFFILIATE_LINK,
  },
  {
    badge: '🎁 PIĄTEK',
    title: 'PIĄTKOWY',
    titleAccent: 'BONUS',
    description: 'Co piątek odbierz dodatkowe bonusy i darmowe spiny dla stałych graczy.',
    image: '/images/hero/banner-friday.png',
    cta: 'Odbierz bonus',
    ctaSecondary: 'Czytaj więcej',
    ctaLink: AFFILIATE_LINK,
  },
  {
    badge: '🎰 NA ŻYWO',
    title: 'KASYNO',
    titleAccent: 'NA ŻYWO',
    description: 'Graj z prawdziwymi krupierami w ruletce, blackjacku i bakaracie.',
    image: '/images/hero/banner-live.png',
    cta: 'Graj teraz',
    ctaSecondary: 'Czytaj więcej',
    ctaLink: AFFILIATE_LINK,
  },
  {
    badge: '🏆 TURNIEJ',
    title: 'TURNIEJ',
    titleAccent: 'TYGODNIA',
    description: 'Rywalizuj o nagrody w cotygodniowym turnieju slotów. Pula €2 500!',
    image: '/images/hero/banner-tournament.png',
    cta: 'Weź udział',
    ctaSecondary: 'Czytaj więcej',
    ctaLink: AFFILIATE_LINK,
  },
  {
    badge: '👑 VIP',
    title: 'PROGRAM',
    titleAccent: 'VIP',
    description: 'Dołącz do elitarnego programu VIP i odbieraj cashback nawet do 12%.',
    image: '/images/hero/banner-vip.png',
    cta: 'Dołącz do VIP',
    ctaSecondary: 'Czytaj więcej',
    ctaLink: AFFILIATE_LINK,
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next])

  const slide = slides[current]

  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: 340 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 flex items-center justify-between gap-6 min-h-[340px]">
        {/* Left: text */}
        <div className="flex-1 max-w-lg z-10">
          <span className="inline-block bg-brand text-white text-xs font-bold px-3 py-1 rounded mb-4">
            {slide.badge}
          </span>
          <div className="text-4xl md:text-6xl font-extrabold text-white leading-none mb-1">
            {slide.title}
          </div>
          <div className="text-4xl md:text-6xl font-extrabold text-gold leading-none mb-4">
            {slide.titleAccent}
          </div>
          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-sm">{slide.description}</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={slide.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-gold-light transition-colors"
            >
              {slide.cta}
            </a>
            <a
              href={slide.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {slide.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right: image with edge fades */}
        <div className="hidden sm:block flex-shrink-0 w-[45%] md:w-[48%] relative" style={{ height: 280 }}>
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-contain object-center"
            priority
            sizes="48vw"
          />
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
            <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors z-20"
        aria-label="Poprzedni slajd"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors z-20"
        aria-label="Następny slajd"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Slajd ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
