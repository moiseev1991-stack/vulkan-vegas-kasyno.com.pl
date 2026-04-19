import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Regulamin Serwisu Vulkan Vegas Polska: Zasady Portalu 2026',
  description: 'Regulamin serwisu Vulkan Vegas Polska 2026. Zasady korzystania z portalu, prawa oraz obowiązki użytkownika, ograniczenia wiekowe oraz odpowiedzialność redakcji za treści.',
  alternates: { canonical: '/regulamin' },
  openGraph: {
    title: 'Regulamin Serwisu Vulkan Vegas Polska: Zasady Portalu 2026',
    description: 'Regulamin serwisu Vulkan Vegas Polska 2026. Zasady korzystania z portalu, prawa oraz obowiązki użytkownika, ograniczenia wiekowe oraz odpowiedzialność redakcji za treści.',
    url: 'https://vulkan-vegas-kasyno.com.pl/regulamin',
    type: 'article',
    locale: 'pl_PL',
  },
}

export default function RegulaminPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Regulamin Serwisu Vulkan Vegas Polska: Zasady Portalu 2026', '/regulamin')} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Regulamin', url: '/regulamin' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Regulamin Serwisu vulkan-vegas-kasyno.com.pl: Warunki Korzystania 2026
        </h1>

        <p className="text-gray-400 text-sm mb-8">Wersja: 1.2 | Data wejścia w życie: 18 kwietnia 2026 r. | Ostatnia aktualizacja: 19 kwietnia 2026 r.</p>

        <div className="space-y-8 text-sm text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">§1 Definicje</h2>
            <ul className="space-y-2">
              <li><strong className="text-gray-200">Serwis</strong> — portal internetowy vulkan-vegas-kasyno.com.pl prowadzony jako niezależny portal afiliacyjno-informacyjny</li>
              <li><strong className="text-gray-200">Redakcja</strong> — zespół autorów, redaktorów i administratorów odpowiedzialnych za treści serwisu</li>
              <li><strong className="text-gray-200">Użytkownik</strong> — każda osoba fizyczna lub prawna korzystająca z zasobów serwisu</li>
              <li><strong className="text-gray-200">Treści</strong> — wszelkie materiały tekstowe, graficzne, wideo i interaktywne opublikowane w serwisie</li>
              <li><strong className="text-gray-200">Link afiliacyjny</strong> — odnośnik do zewnętrznego operatora, za pośrednictwem którego serwis może uzyskać wynagrodzenie prowizyjne</li>
              <li><strong className="text-gray-200">Operator kasyna</strong> — podmiot trzeci, Brivio Limited, prowadzący kasyno Vulkan Vegas; odrębny od Redakcji</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§2 Przedmiot i charakter serwisu</h2>
            <p className="mb-2">
              Niniejszy regulamin określa zasady korzystania z serwisu vulkan-vegas-kasyno.com.pl.
              Serwis jest niezależnym portalem informacyjno-afiliacyjnym — nie jest operatorem kasyna,
              nie przyjmuje depozytów ani nie organizuje gier hazardowych.
            </p>
            <p>
              Wszelkie treści publikowane w serwisie mają charakter wyłącznie informacyjny i edukacyjny.
              Redakcja ocenia kasynо Vulkan Vegas na podstawie własnych testów i publicznie dostępnych danych,
              zachowując pełną niezależność redakcyjną.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§3 Warunki korzystania z serwisu</h2>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Dostęp do serwisu jest bezpłatny i nie wymaga rejestracji.</li>
              <li>Użytkownik zobowiązuje się korzystać z serwisu zgodnie z obowiązującymi przepisami prawa polskiego i unijnego.</li>
              <li>Reprodukowanie, kopiowanie lub dalsze rozpowszechnianie treści serwisu w całości lub w istotnej części wymaga uprzedniej pisemnej zgody Redakcji.</li>
              <li>Cytowanie fragmentów dopuszczone jest wyłącznie z wyraźnym podaniem źródła (nazwy serwisu i adresu URL).</li>
              <li>Serwis zastrzega prawo do modyfikacji, zawieszenia lub zaprzestania świadczenia usług bez wcześniejszego powiadomienia.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§4 Ograniczenia wiekowe (18+)</h2>
            <p className="mb-2">
              Treści serwisu dotyczą gier hazardowych i są przeznaczone wyłącznie dla osób pełnoletnich,
              które ukończyły 18. rok życia. Korzystanie z serwisu przez osoby niepełnoletnie jest zabronione.
            </p>
            <p className="mb-2">
              Redakcja aktywnie wspiera idee odpowiedzialnego hazardu. Hazard powinien być wyłącznie
              formą rozrywki, a nie sposobem na zarobek ani rozwiązywaniem problemów finansowych.
            </p>
            <p>
              Jeśli Ty lub ktoś bliski potrzebuje pomocy:{' '}
              <a href="/odpowiedzialna-gra" className="text-brand hover:underline">Odpowiedzialna gra — narzędzia i kontakty</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§5 Zakres odpowiedzialności serwisu</h2>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Serwis nie jest operatorem kasyna i nie ponosi odpowiedzialności za decyzje biznesowe, regulaminy ani działania Vulkan Vegas.</li>
              <li>Treści mają charakter informacyjny — nie stanowią porady prawnej, podatkowej ani finansowej.</li>
              <li>Redakcja dołoży wszelkich starań, aby informacje były aktualne, jednak nie gwarantuje ich kompletności ani dokładności w każdym momencie.</li>
              <li>Serwis nie ponosi odpowiedzialności za straty finansowe ani inne szkody wynikające z gry hazardowej lub decyzji podjętych na podstawie treści serwisu.</li>
              <li>Linki zewnętrzne prowadzą do niezależnych serwisów; Redakcja nie kontroluje ich treści.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§6 Reklamacje i zgłoszenia</h2>
            <p className="mb-2">
              Reklamacje dotyczące funkcjonowania serwisu, błędów w treściach lub naruszeń praw autorskich
              należy kierować na adres:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>.
            </p>
            <p>
              Zgłoszenie powinno zawierać: opis problemu, adres URL strony, której dotyczy reklamacja,
              oraz dane kontaktowe. Redakcja rozpatruje reklamacje w terminie do 14 dni roboczych
              od daty ich otrzymania.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§7 Własność intelektualna</h2>
            <p>
              Wszelkie treści opublikowane w serwisie — teksty, grafiki, logotypy, układ stron —
              stanowią własność Redakcji lub podmiotów, które udzieliły licencji na ich wykorzystanie.
              Naruszenie praw autorskich może skutkować odpowiedzialnością cywilną i karną.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§8 Zmiany regulaminu</h2>
            <p>
              Redakcja zastrzega prawo do zmiany niniejszego regulaminu w każdym czasie.
              Zaktualizowana wersja regulaminu jest publikowana w serwisie wraz z datą wejścia w życie.
              Dalsze korzystanie z serwisu po opublikowaniu zmian oznacza ich akceptację.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§9 Postanowienia końcowe</h2>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Regulamin podlega prawu polskiemu. W sprawach nieuregulowanych zastosowanie mają przepisy Kodeksu Cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.</li>
              <li>Regulamin wchodzi w życie z dniem 18 kwietnia 2026 roku.</li>
              <li>Ewentualne spory wynikające z korzystania z serwisu będą rozstrzygane przez sąd właściwy dla siedziby Redakcji.</li>
              <li>Nieważność poszczególnych postanowień regulaminu nie wpływa na ważność pozostałych postanowień.</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  )
}
