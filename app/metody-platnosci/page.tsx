import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import FAQAccordion from '@/components/FAQAccordion'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE, AFFILIATE_LINK } from '@/lib/constants'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Metody Płatności 2026: BLIK oraz Przelewy24',
  description: 'Vulkan Vegas metody płatności 2026 dla graczy z Polski. Wpłaty oraz wypłaty przez BLIK, Przelewy24, Visa, Mastercard oraz kryptowaluty. Limity, prowizje oraz czas realizacji.',
  alternates: { canonical: '/metody-platnosci' },
  openGraph: {
    title: 'Vulkan Vegas Metody Płatności 2026: BLIK oraz Przelewy24',
    description: 'Vulkan Vegas metody płatności 2026 dla graczy z Polski. Wpłaty oraz wypłaty przez BLIK, Przelewy24, Visa, Mastercard oraz kryptowaluty. Limity, prowizje oraz czas realizacji.',
    url: 'https://vulkan-vegas-kasyno.com.pl/metody-platnosci',
    type: 'article',
    locale: 'pl_PL',
  },
}

const faqItems = [
  { q: 'Czy BLIK jest dostępny w Vulkan Vegas?', a: 'Tak, BLIK jest jedną z dostępnych metod płatności w Vulkan Vegas dla polskich graczy. Umożliwia zarówno wpłaty, jak i wypłaty w PLN.' },
  { q: 'Jakie kryptowaluty obsługuje Vulkan Vegas?', a: 'Vulkan Vegas obsługuje Bitcoin (BTC), Ethereum (ETH), Tether (USDT), Litecoin (LTC) i inne popularne kryptowaluty. Dostępność może się zmieniać — sprawdź aktualną listę w kasjerze.' },
  { q: 'Czy Vulkan Vegas pobiera prowizję za wypłatę?', a: 'Vulkan Vegas zazwyczaj nie pobiera własnej prowizji za wypłaty. Mogą jednak wystąpić opłaty bankowe lub sieciowe (np. w przypadku kryptowalut).' },
  { q: 'Jak długo trwa wpłata przez Przelewy24?', a: 'Wpłata przez Przelewy24 pojawia się na koncie Vulkan Vegas niemal natychmiast — zazwyczaj w ciągu kilku minut po zatwierdzeniu transakcji.' },
  { q: 'Jaka jest minimalna wpłata w Vulkan Vegas?', a: 'Minimalna wpłata w Vulkan Vegas wynosi zazwyczaj 10 EUR lub równowartość w PLN. Dla BLIK minimalna kwota może być niższa.' },
]

const methods = [
  { name: 'BLIK', min: '10 PLN', maxWith: '10 000 PLN', time: 'Natychmiast / do 24h', fee: 'Brak', desc: 'Polska metoda płatności mobilnych, idealna dla polskich graczy. Dostępna w aplikacjach bankowych.' },
  { name: 'Przelewy24', min: '20 PLN', maxWith: '50 000 PLN', time: 'Natychmiast / 1-3 dni', fee: 'Brak', desc: 'Popularny agregator płatności w Polsce. Obsługuje setki polskich banków.' },
  { name: 'Visa / Mastercard', min: '20 EUR', maxWith: '5 000 EUR', time: 'Natychmiast / 1-3 dni', fee: 'Brak', desc: 'Klasyczne karty kredytowe i debetowe. Powszechnie dostępne, bezpieczne.' },
  { name: 'Skrill', min: '10 EUR', maxWith: '10 000 EUR', time: 'Natychmiast / do 24h', fee: 'Brak', desc: 'E-portfel popularny w branży hazardowej. Szybkie wypłaty, wysoki poziom bezpieczeństwa.' },
  { name: 'Neteller', min: '10 EUR', maxWith: '10 000 EUR', time: 'Natychmiast / do 24h', fee: 'Brak', desc: 'E-portfel dedykowany graczom kasyn. Weryfikowany, szybki, z własnym programem lojalnościowym.' },
  { name: 'Bitcoin (BTC)', min: '20 EUR', maxWith: 'Brak limitu', time: 'Natychmiast / kilka godz.', fee: 'Opłata sieciowa', desc: 'Kryptowaluta oferująca anonimowość i szybkie transakcje bez pośredników.' },
]

export default function MetodyPlatnosciPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Metody Płatności 2026: BLIK oraz Przelewy24', '/metody-platnosci')} />

      <PageHero
        badge="💳 PŁATNOŚCI"
        title="Szybkie Wypłaty"
        titleAccent="i Depozyty"
        description="BLIK, Przelewy24, Visa, Mastercard, kryptowaluty i e-portfele. Minimalna wpłata od 10 EUR, wypłaty w ciągu 24 godzin."
        image="/images/cashback.png"
        imageAlt="Metody płatności Vulkan Vegas"
        buttons={[
          { label: 'Wypłać pieniądze', href: AFFILIATE_LINK, variant: 'gold' },
          { label: 'Weryfikacja KYC', href: AFFILIATE_LINK, variant: 'outline' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Metody płatności', url: '/metody-platnosci' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Anna Wiśniewska" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Metody Płatności 2026: BLIK, Przelewy24, Visa oraz Karty
        </h1>

        <p className="text-gray-300 leading-relaxed mb-8">
          Vulkan Vegas obsługuje wiele metod płatności dla polskich graczy. Poniżej znajdziesz pełny
          przegląd dostępnych opcji wpłat i wypłat, z limitami, prowizjami i czasem realizacji.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {methods.map((m) => (
            <div key={m.name} className="bg-surface-card border border-white/10 rounded-xl p-4">
              <h2 className="text-white font-bold mb-2">{m.name}</h2>
              <p className="text-gray-400 text-xs mb-3 leading-relaxed">{m.desc}</p>
              <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                <dt className="text-gray-500">Min wpłata</dt><dd className="text-gray-200">{m.min}</dd>
                <dt className="text-gray-500">Maks wypłata</dt><dd className="text-gray-200">{m.maxWith}</dd>
                <dt className="text-gray-500">Czas</dt><dd className="text-gray-200">{m.time}</dd>
                <dt className="text-gray-500">Prowizja</dt><dd className="text-gray-200">{m.fee}</dd>
              </dl>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">BLIK w Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          BLIK to najpopularniejsza polska metoda płatności mobilnych, dostępna w aplikacjach
          bankowych PKO BP, mBank, ING, Santander i innych. Wpłata przez BLIK jest natychmiastowa —
          kod BLIK ważny jest 2 minuty. Wypłaty przez BLIK realizowane są zazwyczaj w ciągu 24 godzin.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Przelewy24 w Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Przelewy24 to agregator płatności obsługujący ponad 150 polskich banków i metod płatności.
          Wpłata jest natychmiastowa. Wypłaty przez przelew bankowy realizowane przez Przelewy24 mogą
          trwać 1-3 dni robocze.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Kryptowaluty w Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Vulkan Vegas obsługuje Bitcoin (BTC), Ethereum (ETH), Tether USDT, Litecoin i inne kryptowaluty.
          Transakcje crypto są szybkie i anonimowe, ale podlegają opłatom sieciowym (gas fee).
          Kurs wymiany stosowany przez kasyno może różnić się od kursu rynkowego.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Bezpieczeństwo Transakcji</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {[
            { name: 'SSL 256-bit', desc: 'Szyfrowanie wszystkich transakcji finansowych' },
            { name: '3D Secure', desc: 'Dodatkowe uwierzytelnianie dla kart Visa/Mastercard' },
            { name: 'PCI DSS', desc: 'Standard bezpieczeństwa danych kart płatniczych' },
          ].map((s) => (
            <div key={s.name} className="bg-surface-card border border-white/10 rounded-lg p-4 text-center">
              <p className="text-green-400 font-bold text-sm">{s.name}</p>
              <p className="text-gray-400 text-xs mt-1">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Płatności Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />
      </div>
    </>
  )
}
