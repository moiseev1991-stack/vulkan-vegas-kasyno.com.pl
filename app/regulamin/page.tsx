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
          Regulamin Serwisu Vulkan Vegas Polska: Warunki Użytkowania dla Graczy
        </h1>

        <p className="text-gray-400 text-sm mb-8">Wersja: 1.0 | Data wejścia w życie: 18 kwietnia 2026 r.</p>

        <div className="space-y-8 text-sm text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">§1 Definicje</h2>
            <ul className="space-y-2">
              <li><strong className="text-gray-200">Serwis</strong> — portal internetowy vulkan-vegas-kasyno.com.pl</li>
              <li><strong className="text-gray-200">Redakcja</strong> — zespół autorów i administratorów serwisu</li>
              <li><strong className="text-gray-200">Użytkownik</strong> — osoba korzystająca z serwisu</li>
              <li><strong className="text-gray-200">Treści</strong> — artykuły, recenzje, opinie, materiały graficzne zamieszczone w serwisie</li>
              <li><strong className="text-gray-200">Link afiliacyjny</strong> — link do zewnętrznego serwisu, za pośrednictwem którego serwis może otrzymać wynagrodzenie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§2 Przedmiot regulaminu</h2>
            <p>Niniejszy regulamin określa zasady korzystania z serwisu vulkan-vegas-kasyno.com.pl, będącego niezależnym portalem informacyjno-afiliacyjnym dotyczącym kasyna online Vulkan Vegas.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§3 Warunki korzystania</h2>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Korzystanie z serwisu jest bezpłatne i dobrowolne.</li>
              <li>Użytkownik zobowiązany jest do korzystania z serwisu zgodnie z przepisami prawa.</li>
              <li>Zabrania się kopiowania treści serwisu bez zgody redakcji.</li>
              <li>Serwis zastrzega prawo do zmiany treści bez wcześniejszego powiadomienia.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§4 Ograniczenia wiekowe (18+)</h2>
            <p className="mb-2">
              Treści zamieszczone w serwisie dotyczą gier hazardowych. Przeznaczone są wyłącznie dla osób
              pełnoletnich, które ukończyły 18 rok życia. Serwis nie jest skierowany do osób niepełnoletnich
              i nie zachęca takich osób do korzystania z usług kasyn online.
            </p>
            <p>
              Hazard może być uzależniający. Korzystaj odpowiedzialnie. Informacje i pomoc:
              <a href="/odpowiedzialna-gra" className="text-brand hover:underline ml-1">Odpowiedzialna gra</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§5 Odpowiedzialność serwisu</h2>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Serwis nie jest operatorem kasyna i nie ponosi odpowiedzialności za działania kasyna Vulkan Vegas.</li>
              <li>Treści mają charakter informacyjny i nie stanowią porady prawnej ani finansowej.</li>
              <li>Serwis dokłada starań o aktualność informacji, ale nie gwarantuje ich kompletności.</li>
              <li>Serwis nie odpowiada za straty poniesione w wyniku gry hazardowej.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§6 Reklamacje</h2>
            <p>
              Reklamacje dotyczące działania serwisu należy kierować na adres:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>.
              Odpowiadamy w ciągu 14 dni roboczych.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§7 Zmiany regulaminu</h2>
            <p>
              Redakcja zastrzega prawo do zmiany niniejszego regulaminu. O zmianach użytkownicy informowani
              będą przez zamieszczenie zaktualizowanej wersji regulaminu w serwisie wraz z datą wejścia w życie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">§8 Postanowienia końcowe</h2>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.</li>
              <li>Regulamin wchodzi w życie z dniem 18 kwietnia 2026 roku.</li>
              <li>Ewentualne spory rozstrzygane będą przez właściwy sąd polski.</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  )
}
