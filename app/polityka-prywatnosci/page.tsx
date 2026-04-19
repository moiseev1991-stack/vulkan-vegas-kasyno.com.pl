import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Polityka Prywatności Vulkan Vegas Polska: RODO oraz Cookies',
  description: 'Polityka prywatności serwisu Vulkan Vegas Polska 2026 zgodna z RODO. Jak przetwarzamy dane osobowe polskich graczy, pliki cookies, prawa użytkownika oraz kontakt z redakcją.',
  alternates: { canonical: '/polityka-prywatnosci' },
  openGraph: {
    title: 'Polityka Prywatności Vulkan Vegas Polska: RODO oraz Cookies',
    description: 'Polityka prywatności serwisu Vulkan Vegas Polska 2026 zgodna z RODO. Jak przetwarzamy dane osobowe polskich graczy, pliki cookies, prawa użytkownika oraz kontakt z redakcją.',
    url: 'https://vulkan-vegas-kasyno.com.pl/polityka-prywatnosci',
    type: 'article',
    locale: 'pl_PL',
  },
}

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Polityka Prywatności Vulkan Vegas Polska: RODO oraz Cookies', '/polityka-prywatnosci')} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Polityka prywatności', url: '/polityka-prywatnosci' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Polityka Prywatności Serwisu vulkan-vegas-kasyno.com.pl: RODO 2026
        </h1>

        <p className="text-gray-300 leading-relaxed mb-8">
          Niniejsza polityka prywatności opisuje, w jaki sposób serwis vulkan-vegas-kasyno.com.pl
          gromadzi, przetwarza i chroni dane osobowe użytkowników. Dokument został sporządzony
          zgodnie z wymogami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
          27 kwietnia 2016 roku (RODO/GDPR) oraz polską ustawą o ochronie danych osobowych.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Administrator danych osobowych</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              Administratorem danych osobowych użytkowników serwisu jest redakcja vulkan-vegas-kasyno.com.pl.
              Serwis nie jest operatorem kasyna Vulkan Vegas — przetwarzamy wyłącznie dane zebrane
              w ramach korzystania z naszego portalu informacyjno-afiliacyjnego.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              W sprawach dotyczących ochrony danych osobowych skontaktuj się z nami:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Jakie dane zbieramy i w jaki sposób</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <strong className="text-gray-200">Dane z formularza kontaktowego:</strong>{' '}
                imię lub pseudonim, adres e-mail oraz treść wiadomości — przekazywane dobrowolnie przez użytkownika
              </li>
              <li>
                <strong className="text-gray-200">Dane techniczne (automatyczne):</strong>{' '}
                adres IP w formie skróconej, typ przeglądarki, system operacyjny, czas sesji,
                odwiedzane strony — zbierane przez narzędzia analityczne w sposób zanonimizowany
              </li>
              <li>
                <strong className="text-gray-200">Pliki cookies i podobne technologie:</strong>{' '}
                identyfikatory sesji, preferencje wyświetlania, identyfikatory konwersji afiliacyjnych
              </li>
            </ul>
            <p className="text-gray-400 text-xs mt-3 leading-relaxed">
              Serwis nie zbiera danych wrażliwych (art. 9 RODO), danych finansowych ani danych dotyczących gry hazardowej użytkownika.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Cele i podstawy prawne przetwarzania</h2>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="bg-surface-card border border-white/10 rounded-lg p-3">
                <strong className="text-gray-200">Odpowiedź na zapytania</strong> — art. 6 ust. 1 lit. b RODO (wykonanie umowy / działania przedumowne)
              </div>
              <div className="bg-surface-card border border-white/10 rounded-lg p-3">
                <strong className="text-gray-200">Analiza ruchu i optymalizacja serwisu</strong> — art. 6 ust. 1 lit. f RODO (uzasadniony interes administratora)
              </div>
              <div className="bg-surface-card border border-white/10 rounded-lg p-3">
                <strong className="text-gray-200">Marketing i reklama afiliacyjna</strong> — art. 6 ust. 1 lit. a RODO (zgoda użytkownika wyrażona przez baner cookie)
              </div>
              <div className="bg-surface-card border border-white/10 rounded-lg p-3">
                <strong className="text-gray-200">Wypełnienie obowiązków prawnych</strong> — art. 6 ust. 1 lit. c RODO (przepisy prawa)
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Okres przechowywania danych</h2>
            <ul className="space-y-1 text-sm text-gray-300">
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span>Dane z formularza kontaktowego: do 24 miesięcy od ostatniego kontaktu, chyba że przepisy wymagają dłuższego okresu</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span>Dane analityczne (Google Analytics 4): do 14 miesięcy — zgodnie ze standardem platformy</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span>Cookies sesyjne: do zamknięcia przeglądarki</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span>Cookies trwałe (analityczne, marketingowe): od 30 dni do 2 lat, zależnie od typu</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span>Logi serwera: do 90 dni</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Udostępnianie danych podmiotom trzecim</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Dane użytkowników mogą być przekazywane wyłącznie zaufanym podmiotom przetwarzającym,
              z którymi Redakcja zawarła umowy powierzenia przetwarzania:
            </p>
            <ul className="space-y-1 text-sm text-gray-300">
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span>Google LLC — analityka (Google Analytics 4) oraz reklama; dane przesyłane do USA na podstawie standardowych klauzul umownych (SCC)</li>
              <li className="flex gap-2"><span className="text-brand flex-shrink-0">→</span>Dostawca hostingu — dla celów technicznych i bezpieczeństwa serwisu</li>
            </ul>
            <p className="text-gray-400 text-xs mt-2">Serwis nie sprzedaje danych osobowych podmiotom trzecim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Pliki cookies</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Serwis stosuje pliki cookies i podobne technologie śledzące. Pierwsze uruchomienie serwisu
              wyświetla baner z możliwością zarządzania zgodami. Możesz w każdej chwili zmienić
              ustawienia cookies w przeglądarce lub wycofać zgodę przez ponowne odwiedzenie banera.
            </p>
            <div className="space-y-2">
              {[
                {
                  type: 'Niezbędne',
                  desc: 'Zapewniają podstawowe działanie serwisu, zapamiętują preferencje cookie. Nie wymagają zgody i nie mogą być wyłączone.',
                  color: 'green',
                },
                {
                  type: 'Analityczne',
                  desc: 'Google Analytics 4 — anonimowe statystyki odwiedzin, ścieżki użytkowników. Aktywne wyłącznie po wyrażeniu zgody.',
                  color: 'yellow',
                },
                {
                  type: 'Marketingowe / Afiliacyjne',
                  desc: 'Śledzenie kliknięć w linki afiliacyjne i atrybucja konwersji. Aktywne wyłącznie po wyrażeniu zgody.',
                  color: 'red',
                },
              ].map((c) => (
                <div key={c.type} className="bg-surface-card border border-white/10 rounded-lg p-3">
                  <span className="text-white font-medium text-sm">{c.type}: </span>
                  <span className="text-gray-400 text-sm">{c.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Prawa użytkownika (RODO)</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              Jako osoba, której dane dotyczą, przysługują Ci następujące prawa:
            </p>
            <ul className="space-y-1 text-sm text-gray-300">
              {[
                'Prawo dostępu do danych oraz uzyskania ich kopii (art. 15 RODO)',
                'Prawo do sprostowania nieprawidłowych danych (art. 16 RODO)',
                'Prawo do usunięcia danych („prawo do bycia zapomnianym") (art. 17 RODO)',
                'Prawo do ograniczenia przetwarzania (art. 18 RODO)',
                'Prawo do przenoszenia danych w formacie elektronicznym (art. 20 RODO)',
                'Prawo do sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie (art. 21 RODO)',
                'Prawo do wycofania zgody w dowolnym momencie — bez wpływu na wcześniejsze przetwarzanie',
                'Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa',
              ].map((right, i) => (
                <li key={i} className="flex gap-2"><span className="text-brand flex-shrink-0">→</span>{right}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Kontakt w sprawach danych osobowych</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Wszelkie wnioski, pytania lub skargi dotyczące przetwarzania danych osobowych kieruj na adres:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>.
              Odpowiadamy bez zbędnej zwłoki, nie później niż w ciągu 30 dni od otrzymania wniosku.
              W przypadku skomplikowanych lub licznych wniosków termin może zostać przedłużony
              o kolejne 60 dni, o czym poinformujemy Cię z wyprzedzeniem.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
