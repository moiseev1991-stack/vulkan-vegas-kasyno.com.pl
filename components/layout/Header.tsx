'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AFFILIATE_LINK } from '@/lib/constants'

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href: string; children: { label: string; href: string }[] }

const NAV_ITEMS: NavItem[] = [
  { label: 'Vulkan Vegas', href: '/' },
  {
    label: 'Bonusy',
    href: '/bonus',
    children: [
      { label: 'Wszystkie bonusy', href: '/bonus' },
      { label: 'Bonus bez depozytu', href: '/bonus-bez-depozytu' },
      { label: 'Darmowe spiny', href: '/darmowe-spiny' },
      { label: 'Kod promocyjny', href: '/kod-promocyjny' },
    ],
  },
  { label: 'Gry', href: '/gry' },
  {
    label: 'Płatności',
    href: '/metody-platnosci',
    children: [
      { label: 'Metody płatności', href: '/metody-platnosci' },
      { label: 'Jak wypłacić pieniądze', href: '/jak-wyplacic-pieniadze-z-vulkan-vegas' },
      { label: 'Weryfikacja KYC', href: '/weryfikacja-konta-kyc' },
    ],
  },
  { label: 'Aplikacja', href: '/aplikacja' },
  { label: 'Rejestracja', href: '/rejestracja' },
]

function DropdownMenu({ item }: { item: NavItem & { children: { label: string; href: string }[] } }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-semibold tracking-wide transition-colors"
        aria-expanded={open}
      >
        {item.label}
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-52 bg-surface border border-white/10 rounded-xl shadow-xl py-1 z-50">
          {item.children.map((child) =>
            child.href.startsWith('/') ? (
              <Link
                key={child.label}
                href={child.href}
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ) : (
              <a
                key={child.label}
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </a>
            )
          )}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo1.webp"
            alt="Vulkan Vegas"
            width={160}
            height={80}
            className="object-contain h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Główna nawigacja">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label} item={item as NavItem & { children: { label: string; href: string }[] }} />
            ) : item.href.startsWith('/') ? (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white text-sm font-semibold tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm font-semibold tracking-wide transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Bell */}
          <button className="hidden sm:flex w-8 h-8 items-center justify-center text-gray-400 hover:text-white transition-colors" aria-label="Powiadomienia">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Language */}
          <span className="hidden sm:flex items-center gap-1.5 text-gray-300 text-xs font-semibold border border-white/20 rounded-full px-2.5 py-1">
            <span className="inline-flex flex-col w-5 h-5 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
              <span className="w-full flex-1 bg-white" />
              <span className="w-full flex-1 bg-red-600" />
            </span>
            PL
          </span>

          {/* Login */}
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm font-semibold text-gray-300 hover:text-white border border-white/20 hover:border-white/40 rounded-lg px-4 py-2 transition-colors"
          >
            Zaloguj się
          </a>

          {/* Register */}
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-black text-sm font-bold rounded-lg px-4 py-2 transition-colors"
          >
            Zarejestruj się
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black border-t border-white/10 px-4 py-3 space-y-1" aria-label="Mobile nawigacja">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between py-2 text-gray-300 text-sm font-semibold"
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                >
                  {item.label}
                  <svg className={`w-3.5 h-3.5 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === item.label && (
                  <div className="pl-3 border-l border-white/10 space-y-1 mb-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block py-1.5 text-gray-400 hover:text-white text-sm"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-white text-sm font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  )
}
