import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import AuthorCard from '@/components/AuthorCard'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Zespół Redakcyjny Vulkan Vegas Polska: Autorzy oraz Eksperci',
  description: 'Poznaj zespół redakcyjny Vulkan Vegas Polska. Autorzy, eksperci od kasyn online, analitycy branży hazardowej oraz recenzenci odpowiadający za treści serwisu i oceny bonusów.',
  alternates: { canonical: '/zespol' },
  openGraph: {
    title: 'Zespół Redakcyjny Vulkan Vegas Polska: Autorzy oraz Eksperci',
    description: 'Poznaj zespół redakcyjny Vulkan Vegas Polska. Autorzy, eksperci od kasyn online, analitycy branży hazardowej oraz recenzenci odpowiadający za treści serwisu i oceny bonusów.',
    url: 'https://vulkan-vegas-kasyno.com.pl/zespol',
    type: 'article',
    locale: 'pl_PL',
  },
}

export default function ZespolPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Zespół Redakcyjny Vulkan Vegas Polska: Autorzy oraz Eksperci', '/zespol')} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'O nas', url: '/o-nas' },
          { name: 'Zespół', url: '/zespol' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Zespół Redakcyjny Vulkan Vegas Polska: Autorzy oraz Eksperci Kasyn
        </h1>

        <p className="text-gray-300 leading-relaxed mb-8">
          Nasz zespół tworzą niezależni eksperci z wieloletnim doświadczeniem w branży hazardowej online.
          Każdy autor specjalizuje się w określonej dziedzinie — recenzjach kasyn, analizie bonusów,
          prawie hazardowym lub technologiach płatności.
        </p>

        <div className="space-y-6">
          <AuthorCard
            name="Marek Kowalski"
            jobTitle="Główny Redaktor i Ekspert ds. Kasyn Online"
            specialization="Recenzje kasyn, analiza bonusów, prawo hazardowe PL"
            bio="Marek Kowalski to ekspert z ponad 8-letnim doświadczeniem w branży hazardowej online. Pracował jako analityk w kilku renomowanych portalach recenzenckich w Europie. Specjalizuje się w testowaniu kasyn z perspektywy polskiego gracza, ze szczególnym naciskiem na legalność, warunki bonusów i szybkość wypłat. Absolwent Wydziału Prawa i Administracji. Regularnie publikuje analizy polskiego rynku hazardowego."
            email="m.kowalski@vulkan-vegas-kasyno.com.pl"
          />

          <AuthorCard
            name="Anna Wiśniewska"
            jobTitle="Ekspert ds. Płatności i Bezpieczeństwa"
            specialization="Metody płatności, bezpieczeństwo IT, weryfikacja KYC"
            bio="Anna Wiśniewska specjalizuje się w analizie systemów płatności w kasynach online i cyberbezpieczeństwie. Posiada 6-letnie doświadczenie w branży fintech i e-commerce. Na serwisie odpowiada za recenzje metod płatności, testy szybkości wypłat i analizy procedur KYC. Absolwentka informatyki i ekonomii. Jej artykuły charakteryzuje podejście oparte na danych i testach praktycznych."
            email="a.wisniewska@vulkan-vegas-kasyno.com.pl"
          />
        </div>

        <div className="mt-10 bg-surface-card border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">Chcesz dołączyć do zespołu?</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Szukamy doświadczonych copywriterów i ekspertów z branży hazardowej. Jeśli masz co najmniej
            3-letnie doświadczenie w recenzowaniu kasyn online i znasz specyfikę polskiego rynku,
            napisz do nas: <a href="mailto:redakcja@vulkan-vegas-kasyno.com.pl" className="text-brand hover:underline">redakcja@vulkan-vegas-kasyno.com.pl</a>
          </p>
        </div>
      </div>
    </>
  )
}
