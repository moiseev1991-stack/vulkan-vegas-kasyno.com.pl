import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Informacja Afiliacyjna Vulkan Vegas Polska: Zasady 2026',
  description: 'Informacja afiliacyjna Vulkan Vegas Polska 2026. Serwis otrzymuje prowizję od operatora kasyna. Czytaj jak działa afiliacja, wpływ na rekomendacje oraz prawa polskich graczy.',
  alternates: { canonical: '/informacja-afiliacyjna' },
  openGraph: {
    title: 'Informacja Afiliacyjna Vulkan Vegas Polska: Zasady 2026',
    description: 'Informacja afiliacyjna Vulkan Vegas Polska 2026. Serwis otrzymuje prowizję od operatora kasyna. Czytaj jak działa afiliacja, wpływ na rekomendacje oraz prawa polskich graczy.',
    url: 'https://vulkan-vegas-kasyno.com.pl/informacja-afiliacyjna',
    type: 'article',
    locale: 'pl_PL',
  },
}

export default function InformacjaAfiliacyjnaPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Informacja Afiliacyjna Vulkan Vegas Polska: Zasady 2026', '/informacja-afiliacyjna')} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Informacja afiliacyjna', url: '/informacja-afiliacyjna' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Informacja Afiliacyjna Vulkan Vegas Polska: Jak Zarabia Serwis
        </h1>

        <div className="bg-yellow-950/30 border border-yellow-800/40 rounded-xl p-5 mb-8">
          <p className="text-yellow-200 font-semibold">Ważna informacja:</p>
          <p className="text-yellow-200/80 text-sm mt-1">
            Serwis vulkan-vegas-kasyno.com.pl może otrzymywać wynagrodzenie od operatorów kasyn za pośrednictwem
            linków afiliacyjnych i prowizji od nowych graczy. Nie wpływa to jednak na rzetelność naszych recenzji.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Czym jest afiliacja</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Model afiliacyjny (partnerski) polega na tym, że niezależne serwisy internetowe — jak nasz portal —
          promują usługi firm zewnętrznych i otrzymują wynagrodzenie za pozyskanych klientów. W naszym przypadku
          promujemy kasyno Vulkan Vegas i otrzymujemy prowizję, gdy użytkownik zarejestruje się przez nasz link.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Jest to standardowy i transparentny model biznesowy stosowany przez wiele niezależnych serwisów
          recenzenckich w branży hazardowej i nie tylko.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Jak serwis zarabia</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Serwis vulkan-vegas-kasyno.com.pl zarabia poprzez:
        </p>
        <ul className="space-y-2 mb-8 text-gray-300 text-sm">
          <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Prowizję za nowych graczy zarejestrowanych przez linki afiliacyjne (CPA — Cost Per Acquisition)</li>
          <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Udział w przychodach operatora od nowych graczy (Revenue Share)</li>
          <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Opłaty za wyróżnione pozycje w rankingach (oznaczane jako &quot;sponsorowane&quot;)</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mb-4">Czy afiliacja wpływa na oceny</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Wynagrodzenie afiliacyjne nie wpływa bezpośrednio na treść recenzji. Stosujemy obiektywną metodologię
          oceny (opisaną szczegółowo w naszej{' '}
          <a href="/metodologia-recenzji" className="text-brand hover:underline">metodologii recenzji</a>)
          i oceniamy kasyna na podstawie mierzalnych kryteriów: licencja, warunki bonusów, szybkość wypłat,
          bezpieczeństwo i obsługa klienta.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Negatywne aspekty kasyn opisujemy otwarcie — jak brak polskiej licencji Vulkan Vegas, wysokie
          wymagania obrotu bonusami czy ograniczenia dla graczy z pewnych krajów. Transparentność jest
          fundamentem naszego E-A-T (Expertise, Authoritativeness, Trustworthiness).
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Rozdzielenie recenzji oraz reklam</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Treści redakcyjne (recenzje, poradniki, artykuły) są wyraźnie oddzielone od treści płatnych.
          Linki afiliacyjne są zawsze oznaczone informacją o prowizji. Nasze artykuły nie są pisane przez
          operatora kasyna — powstają wyłącznie przez nasz niezależny zespół redakcyjny.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Pełna lista partnerów</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Aktualnie serwis vulkan-vegas-kasyno.com.pl jest w relacji afiliacyjnej z operatorem kasyna Vulkan Vegas
          (Brivio Limited). W miarę rozbudowy serwisu lista partnerów może ulec zmianie. Wszelkie zmiany
          będą aktualizowane na tej stronie.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Prawa użytkownika</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Jako użytkownik masz prawo do:
        </p>
        <ul className="space-y-2 mb-8 text-gray-300 text-sm">
          <li className="flex gap-2"><span className="text-green-400">✓</span> Pełnej informacji o relacjach afiliacyjnych serwisu</li>
          <li className="flex gap-2"><span className="text-green-400">✓</span> Obiektywnych recenzji niezależnych od prowizji</li>
          <li className="flex gap-2"><span className="text-green-400">✓</span> Zgłoszenia zastrzeżeń do redakcji</li>
          <li className="flex gap-2"><span className="text-green-400">✓</span> Dostępu do polityki prywatności i warunków użytkowania</li>
        </ul>

        <p className="text-gray-400 text-sm">
          Pytania dotyczące afiliacji: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>
        </p>
      </div>
    </>
  )
}
