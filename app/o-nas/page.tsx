import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbList from '@/components/BreadcrumbList'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE, CONTACT_EMAIL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'O Nas Vulkan Vegas Polska 2026: Zespół Recenzentów Kasyn',
  description: 'Poznaj zespół redakcyjny serwisu Vulkan Vegas Polska 2026. Jesteśmy niezależnymi ekspertami od hazardu online oraz afiliacji kasyn, piszącymi recenzje dla polskich graczy.',
  alternates: { canonical: '/o-nas' },
  openGraph: {
    title: 'O Nas Vulkan Vegas Polska 2026: Zespół Recenzentów Kasyn',
    description: 'Poznaj zespół redakcyjny serwisu Vulkan Vegas Polska 2026. Jesteśmy niezależnymi ekspertami od hazardu online oraz afiliacji kasyn, piszącymi recenzje dla polskich graczy.',
    url: 'https://vulkan-vegas-kasyno.com.pl/o-nas',
    type: 'article',
    locale: 'pl_PL',
  },
}

export default function ONasPage() {
  return (
    <>
      <JsonLd data={webPageSchema('O Nas Vulkan Vegas Polska 2026: Zespół Recenzentów Kasyn', '/o-nas')} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'O nas', url: '/o-nas' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          O Nas Vulkan Vegas Polska: Kim Jesteśmy oraz Jak Recenzujemy Kasyna
        </h1>

        <h2 className="text-2xl font-bold text-white mb-4">Misja serwisu</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          {SITE_NAME} to niezależny portal informacyjny i afiliacyjny poświęcony kasynie Vulkan Vegas.
          Naszą misją jest dostarczanie polskim graczom rzetelnych, aktualnych i transparentnych informacji
          o ofercie, bonusach, metodach płatności i legalności kasyna Vulkan Vegas. Nie jesteśmy operatorem
          kasyna — oceniamy go z perspektywy gracza.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Kim jesteśmy</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Jesteśmy zespołem niezależnych ekspertów od branży hazardowej z łącznie ponad 15-letnim
          doświadczeniem w recenzowaniu kasyn online, analizie warunków bonusów i testowaniu platform
          dla graczy z Polski i Europy Środkowo-Wschodniej.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Nasz zespół tworzą doświadczeni recenzenci, copywriterzy specjalizujący się w branży gambling
          oraz analitycy SEO. Każdy artykuł przechodzi review przed publikacją.
          Więcej o naszych autorach: <Link href="/zespol" className="text-brand hover:underline">Zespół redakcyjny</Link>.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Jak pracujemy</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Każda recenzja i artykuł na serwisie tworzony jest według naszej{' '}
          <Link href="/metodologia-recenzji" className="text-brand hover:underline">metodologii recenzji</Link>.
          Testujemy kasyna na własnych kontach, weryfikujemy twierdzenia operatora, sprawdzamy prędkość
          wypłat i jakość obsługi klienta.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Fakty prawne (legalność, regulacje) weryfikujemy na podstawie oficjalnych dokumentów rządowych,
          ustaw i komunikatów organów regulacyjnych. Nie kopiujemy treści z innych serwisów.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Niezależność redakcji</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Serwis jest finansowany przez model afiliacyjny — otrzymujemy prowizję od kasyna za graczy
          zarejestrowanych przez nasze linki. Szczegóły w{' '}
          <Link href="/informacja-afiliacyjna" className="text-brand hover:underline">informacji afiliacyjnej</Link>.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Wynagrodzenie afiliacyjne nie wpływa na treść recenzji. Opisujemy zarówno zalety, jak i wady
          kasyna — z pełną transparentnością, łącznie z faktem braku polskiej licencji.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Historia serwisu</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Serwis vulkan-vegas-kasyno.com.pl powstał w 2026 roku z potrzeby dostarczenia polskojęzycznym graczom
          rzetelnego źródła informacji o kasynie Vulkan Vegas. Domenę wybraliśmy tak, aby była łatwa
          do zapamiętania i jednoznacznie kojarzyła się z recenzowaną marką na rynku polskim.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Kontakt z redakcją</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Masz pytanie, znalazłeś błąd lub chcesz zgłosić propozycję artykułu? Skontaktuj się z nami:
        </p>
        <ul className="space-y-2 text-sm text-gray-300 mb-8">
          <li>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a></li>
          <li>Formularz: <Link href="/kontakt" className="text-brand hover:underline">strona kontaktowa</Link></li>
          <li>Czas odpowiedzi: do 48 godzin roboczych</li>
        </ul>
      </div>
    </>
  )
}
