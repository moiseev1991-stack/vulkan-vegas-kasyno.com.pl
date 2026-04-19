import Link from 'next/link'
import { AFFILIATE_LINK } from '@/lib/constants'

const columns = [
  {
    title: 'Postanowienia ogólne',
    links: [
      { label: 'Regulamin', href: '/regulamin' },
      { label: 'Regulamin bonusów', href: AFFILIATE_LINK },
      { label: 'Zasady dotyczące zakładów', href: AFFILIATE_LINK },
      { label: 'Polityka AML', href: AFFILIATE_LINK },
      { label: 'Polityka anulowania', href: AFFILIATE_LINK },
    ],
  },
  {
    title: 'Kasyno',
    links: [
      { label: 'Sloty', href: AFFILIATE_LINK },
      { label: 'Gry insta', href: AFFILIATE_LINK },
      { label: 'Ruletki', href: AFFILIATE_LINK },
      { label: 'Gry karciane', href: AFFILIATE_LINK },
      { label: 'Kasyno live', href: AFFILIATE_LINK },
      { label: 'Jackpoty', href: AFFILIATE_LINK },
    ],
  },
  {
    title: 'Dostawcy',
    links: [
      { label: 'Pragmatic Play', href: AFFILIATE_LINK },
      { label: 'Evolution Gaming', href: AFFILIATE_LINK },
      { label: "Play'n GO", href: AFFILIATE_LINK },
      { label: 'Evoplay Entertainment', href: AFFILIATE_LINK },
      { label: 'Novomatic', href: AFFILIATE_LINK },
      { label: 'NetEnt', href: AFFILIATE_LINK },
    ],
  },
  {
    title: 'Dokumentacja',
    links: [
      { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
      { label: 'Polityka cookie', href: AFFILIATE_LINK },
      { label: 'Polityka anulowania', href: AFFILIATE_LINK },
      { label: 'Polityka dotycząca skarg klientów', href: AFFILIATE_LINK },
      { label: 'Polityka AML', href: AFFILIATE_LINK },
    ],
  },
  {
    title: 'Informacje',
    links: [
      { label: 'O nas', href: '/o-nas' },
      { label: 'Odpowiedzialna gra', href: '/odpowiedzialna-gra' },
      { label: 'Polityka dotycząca skarg klientów', href: AFFILIATE_LINK },
      { label: 'Program partnerski', href: AFFILIATE_LINK },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-500 text-xs leading-relaxed max-w-4xl">
            VulkanSpiele jest niezależnym serwisem afiliacyjnym — nie jest kasynem i nie prowadzi działalności hazardowej.
            Treści na stronie mają charakter informacyjny i reklamowy. Hazard wiąże się z ryzykiem uzależnienia.
            Gra dozwolona wyłącznie dla osób pełnoletnich (18+). Graj odpowiedzialnie.
          </p>
        </div>
      </div>
    </footer>
  )
}
