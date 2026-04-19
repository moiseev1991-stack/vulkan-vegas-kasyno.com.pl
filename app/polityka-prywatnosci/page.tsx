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
          Polityka Prywatności Vulkan Vegas Polska 2026: RODO oraz Dane
        </h1>

        <p className="text-gray-300 leading-relaxed mb-8">
          Niniejsza polityka prywatności opisuje zasady przetwarzania danych osobowych użytkowników serwisu
          vulkan-vegas-kasyno.com.pl, zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679
          (RODO/GDPR) z dnia 27 kwietnia 2016 roku.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Administrator danych</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Administratorem danych osobowych jest redakcja serwisu vulkan-vegas-kasyno.com.pl.
              Kontakt w sprawach danych osobowych: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Jakie dane zbieramy</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-gray-200">Dane z formularza kontaktowego:</strong> imię, adres email, treść wiadomości</li>
              <li><strong className="text-gray-200">Dane analityczne:</strong> adres IP, typ przeglądarki, strony odwiedzane, czas sesji (anonimizowane)</li>
              <li><strong className="text-gray-200">Pliki cookies:</strong> identyfikatory sesji, preferencje użytkownika, dane analityczne</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Cel przetwarzania</h2>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Odpowiedź na zapytania z formularza kontaktowego (art. 6 ust. 1 lit. b RODO)</li>
              <li>Analiza ruchu na stronie i optymalizacja serwisu (art. 6 ust. 1 lit. f RODO)</li>
              <li>Wyświetlanie treści reklamowych (art. 6 ust. 1 lit. a RODO — za zgodą)</li>
              <li>Przestrzeganie obowiązków prawnych (art. 6 ust. 1 lit. c RODO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Podstawa prawna</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Przetwarzamy dane na podstawie zgody użytkownika (art. 6 ust. 1 lit. a RODO), wykonania umowy
              lub działań przedumownych (lit. b), uzasadnionego interesu administratora (lit. f) oraz
              obowiązku prawnego (lit. c).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Okres przechowywania</h2>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Dane z formularza kontaktowego: do 12 miesięcy od odpowiedzi</li>
              <li>Dane analityczne: do 14 miesięcy (standard Google Analytics)</li>
              <li>Pliki cookies: od sesji do 2 lat, zależnie od typu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Pliki cookies</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Serwis używa plików cookies w następujących celach:
            </p>
            <div className="space-y-2">
              {[
                { type: 'Niezbędne', desc: 'Działanie serwisu, zapamiętanie zgody na cookies. Nie wymagają zgody.' },
                { type: 'Analityczne', desc: 'Google Analytics — analiza ruchu, anonimowe statystyki. Wymagają zgody.' },
                { type: 'Marketingowe', desc: 'Śledzenie konwersji z linków afiliacyjnych. Wymagają zgody.' },
              ].map((c) => (
                <div key={c.type} className="bg-surface-card border border-white/10 rounded-lg p-3">
                  <span className="text-white font-medium text-sm">{c.type}: </span>
                  <span className="text-gray-400 text-sm">{c.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Prawa użytkownika</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">Na podstawie RODO przysługują Ci następujące prawa:</p>
            <ul className="space-y-1 text-sm text-gray-300">
              {[
                'Prawo dostępu do swoich danych (art. 15 RODO)',
                'Prawo do sprostowania danych (art. 16 RODO)',
                'Prawo do usunięcia danych ("prawo do bycia zapomnianym") (art. 17 RODO)',
                'Prawo do ograniczenia przetwarzania (art. 18 RODO)',
                'Prawo do przenoszenia danych (art. 20 RODO)',
                'Prawo do sprzeciwu (art. 21 RODO)',
                'Prawo do skargi do UODO (Urząd Ochrony Danych Osobowych)',
              ].map((right, i) => (
                <li key={i} className="flex gap-2"><span className="text-brand flex-shrink-0">→</span>{right}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Kontakt w sprawie danych</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              W sprawach dotyczących danych osobowych skontaktuj się z nami: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a>.
              Odpowiadamy w ciągu 30 dni od otrzymania zgłoszenia.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
