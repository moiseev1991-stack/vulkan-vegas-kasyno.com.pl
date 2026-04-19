import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Polityka Redakcyjna Vulkan Vegas Polska: Zasady Publikacji',
  description: 'Polityka redakcyjna serwisu Vulkan Vegas Polska 2026. Zasady publikacji, weryfikacja faktów, źródła informacji, niezależność autorów oraz rozdział treści redakcyjnej i reklam.',
  alternates: { canonical: '/polityka-redakcyjna' },
  openGraph: {
    title: 'Polityka Redakcyjna Vulkan Vegas Polska: Zasady Publikacji',
    description: 'Polityka redakcyjna serwisu Vulkan Vegas Polska 2026. Zasady publikacji, weryfikacja faktów, źródła informacji, niezależność autorów oraz rozdział treści redakcyjnej i reklam.',
    url: 'https://vulkan-vegas-kasyno.com.pl/polityka-redakcyjna',
    type: 'article',
    locale: 'pl_PL',
  },
}

export default function PolitykaredakcyjnaPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Polityka Redakcyjna Vulkan Vegas Polska: Zasady Publikacji', '/polityka-redakcyjna')} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'O nas', url: '/o-nas' },
          { name: 'Polityka redakcyjna', url: '/polityka-redakcyjna' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Polityka Redakcyjna Vulkan Vegas Polska: Zasady Publikacji oraz Źródła
        </h1>

        <p className="text-gray-300 leading-relaxed mb-8">
          Niniejsza polityka redakcyjna określa standardy tworzenia, weryfikacji i publikacji treści
          na serwisie vulkan-vegas-kasyno.com.pl. Transparentność procesu redakcyjnego jest dla nas kluczowa
          dla budowania zaufania czytelników.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Standardy redakcyjne</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Każdy artykuł podpisany jest przez autora z widocznymi kwalifikacjami</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Treści tworzone są w języku polskim przez native speakerów lub weryfikowane przez native speakera</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Artykuły recenzowane są przez co najmniej jedną osobę przed publikacją</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Daty publikacji i modyfikacji są jawne na każdej stronie</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Treści aktualizowane są przy istotnych zmianach informacji</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Weryfikacja faktów</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Fakty dotyczące oferty kasyna (bonusy, warunki wypłat, metody płatności) weryfikujemy
              bezpośrednio w kasynie lub przez oficjalną dokumentację operatora. Informacje prawne
              (legalność, regulacje) weryfikujemy na podstawie oficjalnych dokumentów rządowych.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nie publikujemy informacji niepotwierdzonych. Jeśli informacja jest niepewna, wyraźnie to zaznaczamy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Źródła informacji</h2>
            <ul className="space-y-1 text-sm text-gray-300">
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Oficjalna strona i regulamin Vulkan Vegas</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Akty prawne: Ustawa o grach hazardowych (Dz.U. 2009 nr 201 poz. 1540)</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Strona Ministerstwa Finansów (gry-hazardowe.mf.gov.pl)</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Bazy danych licencji: Curaçao eGaming, MGA, UKGC</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span> Opinie graczy: Trustpilot, Casino Guru, AskGamblers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Niezależność redakcji</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Redakcja serwisu vulkan-vegas-kasyno.com.pl jest niezależna od kasyna Vulkan Vegas. Treści
              nie są pisane ani zatwierdzane przez operatora kasyna. Wynagrodzenie afiliacyjne nie
              wpływa na treść ani ocenę recenzji. Szczegóły w{' '}
              <a href="/informacja-afiliacyjna" className="text-brand hover:underline">informacji afiliacyjnej</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Rozdział treści oraz reklam</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Treści redakcyjne (recenzje, poradniki, artykuły informacyjne) są wyraźnie oddzielone od
              treści sponsorowanych i linków afiliacyjnych. Linki do zewnętrznych serwisów są oznaczane.
              Banery reklamowe nie są umieszczane wewnątrz treści artykułów.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Poprawki oraz erraty</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jeśli artykuł zawiera błąd, poprawiamy go i oznaczamy zmianę datą aktualizacji.
              Poważne błędy faktyczne oznaczamy notatką o korekcie na początku artykułu.
              Nie usuwamy historycznych treści bez ważnego powodu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Jak zgłosić błąd</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Znalazłeś błąd lub nieaktualną informację? Napisz do nas:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>.
              Lub skorzystaj z{' '}
              <a href="/kontakt" className="text-brand hover:underline">formularza kontaktowego</a>.
              Odpowiadamy w ciągu 48 godzin roboczych.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
