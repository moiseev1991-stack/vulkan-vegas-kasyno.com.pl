import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FAQAccordion from '@/components/FAQAccordion'
import StepByStep from '@/components/StepByStep'
import LastUpdated from '@/components/LastUpdated'
import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { webPageSchema, softwareAppSchema } from '@/lib/schema'
import { AFFILIATE_LINK, PUBLISHED_DATE } from '@/lib/constants'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Aplikacja – Pobierz Kasyno Mobile 2026',
  description: 'Oficjalny przewodnik aplikacji Vulkan Vegas na Android i iOS. Instrukcja instalacji, ekskluzywne bonusy mobilne, funkcje na żywo i porównanie z wersją przeglądarkową.',
  alternates: { canonical: '/aplikacja' },
  openGraph: {
    title: 'Vulkan Vegas Aplikacja – Pobierz Kasyno Mobile 2026',
    description: 'Oficjalny przewodnik aplikacji Vulkan Vegas na Android i iOS. Instrukcja instalacji, ekskluzywne bonusy mobilne, funkcje na żywo i porównanie z wersją przeglądarkową.',
    url: 'https://vulkan-vegas-kasyno.com.pl/aplikacja',
    type: 'article',
    locale: 'pl_PL',
  },
}

const androidSteps = [
  { name: 'Wejdź na oficjalną stronę Vulkan Vegas', text: 'Otwórz przeglądarkę mobilną (Chrome, Firefox lub Samsung Internet) i przejdź na stronę vulkanvegas.com/pl. Znajdź sekcję "Aplikacja mobilna" lub "Pobierz aplikację" w menu głównym.' },
  { name: 'Włącz instalację z nieznanych źródeł', text: 'Przejdź do Ustawień → Bezpieczeństwo lub Prywatność. W Androidzie 7.x i starszych: włącz "Nieznane źródła". W Androidzie 8.0+: system zapyta o uprawnienia automatycznie przy instalacji.' },
  { name: 'Pobierz plik APK (68,4 MB)', text: 'Kliknij przycisk "Pobierz dla Android". Przeglądarka wyświetli ostrzeżenie — kliknij "OK". Plik zostanie zapisany w folderze Downloads. Wymagania: Android 6.0+, min. 250 MB wolnego miejsca, 2 GB RAM.' },
  { name: 'Zainstaluj aplikację', text: 'Otwórz pasek powiadomień i kliknij pobrany plik APK. Sprawdź wymagane uprawnienia (pamięć, internet, opcjonalnie aparat do weryfikacji dokumentów) i kliknij "Zainstaluj". Instalacja trwa ok. 15–30 sekund.' },
  { name: 'Pierwsza konfiguracja i logowanie', text: 'Uruchom aplikację — przy pierwszym starcie pobierze dodatkowe zasoby (ok. 45 MB). Zaloguj się lub utwórz nowe konto. Aplikacja obsługuje biometryczne logowanie (Face ID, odcisk palca) dla większego bezpieczeństwa.' },
]

const faqItems = [
  { q: 'Czy aplikacja Vulkan Vegas jest darmowa?', a: 'Tak, aplikacja mobilna Vulkan Vegas jest bezpłatna do pobrania. Rozmiar pliku APK to 68,4 MB (wersja na Android). Płatna jest jedynie gra — tak jak na stronie internetowej.' },
  { q: 'Na jakich urządzeniach działa aplikacja Vulkan Vegas?', a: 'Android: system Android 6.0 (Marshmallow) lub nowszy, min. 2 GB RAM, 250 MB wolnej przestrzeni. iOS: iOS 12.0+ (iPhone 6s i nowsze). Na iOS aplikacja dostępna przez App Store lub jako PWA przez przeglądarkę Safari.' },
  { q: 'Dlaczego aplikacja Vulkan Vegas nie jest dostępna w Google Play?', a: 'Google Play zakazuje dystrybucji aplikacji hazardowych na pieniądze w większości krajów europejskich. Aplikacja jest dostępna bezpośrednio ze strony kasyna jako plik APK — jest to standardowa praktyka w branży i jest całkowicie bezpieczna.' },
  { q: 'Jakie są zalety aplikacji Vulkan Vegas nad przeglądarką?', a: 'Aplikacja natywna ładuje gry 67% szybciej (1,6 vs 4,8 sekundy), działa przy 58–60 FPS (vs 28–35 FPS), zużywa 36% mniej baterii, oferuje biometryczne logowanie, natywne powiadomienia push i integrację z Google Pay / Apple Pay.' },
  { q: 'Czy mogę wypłacić pieniądze przez aplikację mobilną?', a: 'Tak, aplikacja oferuje pełny dostęp do kasjera — wpłaty i wypłaty przez wszystkie dostępne metody (BLIK, karta, Skrill, Neteller). Weryfikacja KYC (przesyłanie dokumentów) jest również dostępna z poziomu aplikacji.' },
  { q: 'Jak zaktualizować aplikację Vulkan Vegas?', a: 'Pobierz najnowszy plik APK ze strony kasyna i zainstaluj go — nowa wersja nadpisze starą, zachowując dane konta i saldo. Aplikacja wyświetla powiadomienie o dostępności aktualizacji w prawym górnym rogu.' },
]

export default function AplikacjaPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Aplikacja – Pobierz Kasyno Mobile 2026', '/aplikacja')} />
      <JsonLd data={softwareAppSchema()} />

      <PageHero
        badge="📱 APLIKACJA MOBILNA"
        title="Graj Wszędzie"
        titleAccent="na Telefonie"
        description="Pobierz aplikację Vulkan Vegas na Android (APK) lub korzystaj z pełnej wersji mobilnej na iOS. Wszystkie gry w zasięgu ręki."
        image="/images/mascot.png"
        imageAlt="Vulkan Vegas aplikacja mobilna"
        buttons={[
          { label: 'Pobierz APK', href: AFFILIATE_LINK, variant: 'gold', external: true },
          { label: 'Wersja iOS', href: AFFILIATE_LINK, variant: 'outline', external: true },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Aplikacja', url: '/aplikacja' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />
        <AffiliateDisclosure />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Aplikacja Mobilna – Oficjalny Przewodnik 2026
        </h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          Odkryj kompleksowy przewodnik po aplikacji mobilnej Vulkan Vegas. Dowiedz się, jak pobrać,
          zainstalować i wykorzystać pełny potencjał kasyna na urządzeniach Android i iOS, uzyskując
          dostęp do ekskluzywnych bonusów i setek gier.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <CTAButton href={AFFILIATE_LINK} text="Pobierz aplikację Android (APK)" />
          <CTAButton href={AFFILIATE_LINK} text="iOS: Graj przez przeglądarkę" variant="secondary" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas APK na Android: Pobierz oraz Zainstaluj</h2>
        <StepByStep title="Jak pobrać i zainstalować Vulkan Vegas APK na Android" steps={androidSteps} />

        <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas App na iOS: Jak Pobrać</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Ze względu na restrykcje App Store dotyczące aplikacji hazardowych, Vulkan Vegas na iOS dostępne
          jest przez przeglądarkę mobilną Safari lub Chrome. Strona jest w pełni responsywna i oferuje
          identyczną funkcjonalność jak natywna aplikacja.
        </p>
        <div className="bg-surface-card border border-white/10 rounded-xl p-5 mb-8">
          <p className="text-white font-semibold mb-2">Jak dodać skrót do ekranu głównego (iOS):</p>
          <ol className="space-y-2 text-sm text-gray-300">
            <li className="flex gap-2"><span className="text-brand flex-shrink-0">1.</span> Otwórz Safari i przejdź na stronę Vulkan Vegas</li>
            <li className="flex gap-2"><span className="text-brand flex-shrink-0">2.</span> Kliknij ikonę &quot;Udostępnij&quot; (kwadrat ze strzałką)</li>
            <li className="flex gap-2"><span className="text-brand flex-shrink-0">3.</span> Wybierz &quot;Dodaj do ekranu głównego&quot;</li>
            <li className="flex gap-2"><span className="text-brand flex-shrink-0">4.</span> Nazwij skrót i kliknij &quot;Dodaj&quot;</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Funkcje Aplikacji Mobilnej Vulkan Vegas</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="5" width="20" height="14" rx="2" fill="#FFD900" opacity="0.15"/>
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="#FFD900" strokeWidth="1.5"/>
                  <circle cx="8" cy="12" r="2" fill="#FFD900"/>
                  <circle cx="12" cy="12" r="2" fill="#FFD900" opacity="0.6"/>
                  <circle cx="16" cy="12" r="2" fill="#FFD900" opacity="0.3"/>
                  <path d="M5 9h14" stroke="#FFD900" strokeWidth="1" opacity="0.4"/>
                </svg>
              ),
              color: 'from-yellow-500/20 to-transparent border-yellow-500/30',
              title: 'Pełna biblioteka gier',
              desc: '4000+ slotów, live casino, jackpoty',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="6" width="20" height="13" rx="2" fill="#34d399" opacity="0.15"/>
                  <rect x="2" y="6" width="20" height="13" rx="2" stroke="#34d399" strokeWidth="1.5"/>
                  <path d="M2 10h20" stroke="#34d399" strokeWidth="1.5"/>
                  <rect x="5" y="13" width="4" height="2" rx="0.5" fill="#34d399"/>
                  <rect x="11" y="13" width="3" height="2" rx="0.5" fill="#34d399" opacity="0.5"/>
                </svg>
              ),
              color: 'from-emerald-500/20 to-transparent border-emerald-500/30',
              title: 'Depozyty i wypłaty',
              desc: 'BLIK, karty, e-portfele, krypto',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 3V6a2 2 0 0 1 2-2z" fill="#60a5fa" opacity="0.15" stroke="#60a5fa" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="8.5" cy="10.5" r="1" fill="#60a5fa"/>
                  <circle cx="12" cy="10.5" r="1" fill="#60a5fa"/>
                  <circle cx="15.5" cy="10.5" r="1" fill="#60a5fa"/>
                </svg>
              ),
              color: 'from-blue-500/20 to-transparent border-blue-500/30',
              title: 'Live chat 24/7',
              desc: 'Wsparcie klienta bezpośrednio w aplikacji',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" fill="#f87171" opacity="0.15" stroke="#f87171" strokeWidth="1.5"/>
                  <path d="M12 3v4M8 3l1 4M16 3l-1 4" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 7v12" stroke="#f87171" strokeWidth="1" strokeDasharray="2 2" opacity="0.6"/>
                </svg>
              ),
              color: 'from-red-500/20 to-transparent border-red-500/30',
              title: 'Bonusy mobilne',
              desc: 'Pełny dostęp do wszystkich promocji',
            },
          ].map((f) => (
            <div key={f.title} className={`bg-gradient-to-br ${f.color} border rounded-xl p-4 flex gap-3 items-start`}>
              <div className="flex-shrink-0 mt-0.5">{f.icon}</div>
              <div>
                <p className="text-white font-semibold text-sm">{f.title}</p>
                <p className="text-gray-400 text-xs">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Wymagania Systemowe</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-surface-card border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Android</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>System: Android 5.0 lub nowszy</li>
              <li>RAM: min. 1 GB</li>
              <li>Miejsce: 50 MB</li>
              <li>Połączenie: Wi-Fi lub LTE</li>
            </ul>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">iOS (przeglądarka)</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>System: iOS 12 lub nowszy</li>
              <li>Przeglądarka: Safari lub Chrome</li>
              <li>Połączenie: Wi-Fi lub LTE</li>
              <li>Brak instalacji wymagana</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Aplikacja Vulkan Vegas vs Wersja Przeglądarkowa</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Funkcja</th>
                <th className="text-center py-2 px-3 text-gray-400 font-medium">Aplikacja</th>
                <th className="text-center py-2 px-3 text-gray-400 font-medium">Przeglądarka</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {[
                ['Pełna oferta gier', '✓', '✓'],
                ['Powiadomienia push', '✓', '✗'],
                ['Szybkość ładowania', 'Szybsza', 'Standardowa'],
                ['Aktualizacje', 'Manualne', 'Automatyczne'],
                ['Dostępność na iOS', '✗ (APK)', '✓'],
              ].map(([feat, app, web]) => (
                <tr key={feat}>
                  <td className="py-2.5 px-3">{feat}</td>
                  <td className="py-2.5 px-3 text-center">{app}</td>
                  <td className="py-2.5 px-3 text-center">{web}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Rozwiązywanie Problemów z Aplikacją</h2>
        <div className="space-y-3 mb-8">
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Nie działa logowanie w aplikacji</h3>
            <p className="text-gray-400 text-xs">Sprawdź dane logowania, połączenie internetowe i zaktualizuj aplikację do najnowszej wersji.</p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Aplikacja się zawiesza</h3>
            <p className="text-gray-400 text-xs">Zamknij aplikację i uruchom ponownie. Wyczyść cache aplikacji w ustawieniach urządzenia.</p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Brak dźwięku</h3>
            <p className="text-gray-400 text-xs">Sprawdź czy urządzenie nie jest wyciszone. W ustawieniach aplikacji włącz dźwięk gier.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Aplikacja Mobilna Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />

        <div className="mt-10 text-center">
          <CTAButton href={AFFILIATE_LINK} text="Pobierz aplikację Vulkan Vegas" />
        </div>
      </div>
    </>
  )
}
