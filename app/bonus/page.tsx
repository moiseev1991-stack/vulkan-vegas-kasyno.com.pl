import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '@/components/CTAButton'
import BreadcrumbList from '@/components/BreadcrumbList'
import FAQAccordion from '@/components/FAQAccordion'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { AFFILIATE_LINK, PUBLISHED_DATE } from '@/lib/constants'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Bonus Bez Depozytu 25€ + Kody 2026',
  description: 'Aktualne kody promocyjne Vulkan Vegas 2026: bonus 25 euro bez depozytu, 50 zł za rejestrację i darmowe spiny. Sprawdzone sposoby aktywacji bonusów, warunki obrotu i analiza najlepszych ofert dla graczy z Polski.',
  alternates: { canonical: '/bonus' },
  openGraph: {
    title: 'Vulkan Vegas Bonus Bez Depozytu 25€ + Kody 2026',
    description: 'Aktualne kody promocyjne Vulkan Vegas 2026: bonus 25 euro bez depozytu, 50 zł za rejestrację i darmowe spiny. Sprawdzone sposoby aktywacji bonusów, warunki obrotu i analiza najlepszych ofert dla graczy z Polski.',
    url: 'https://vulkan-vegas-kasyno.com.pl/bonus',
    type: 'article',
    locale: 'pl_PL',
  },
}

const faqItems = [
  { q: 'Jak zdobyć bonus 25 euro bez depozytu w Vulkan Vegas?', a: 'Zarejestruj konto na vulkanvegas.com/pl i w polu "Kod promocyjny" wpisz aktualny kod (np. NODEPOSIT25). Potwierdź email i numer telefonu. Bonus 25 EUR zostanie przypisany do konta bonusowego. Wymóg obrotu: x40 w ciągu 7–14 dni.' },
  { q: 'Jaki jest bonus powitalny w Vulkan Vegas 2026?', a: 'Pakiet powitalny obejmuje trzy depozyty: 100% do 1000 PLN + 50 spinów (1. depozyt), 125% do 2000 PLN + 50 spinów (2. depozyt), 100% do 1000 PLN + 25 spinów (3. depozyt). Łącznie do 4000 PLN i 125 spinów. Wymóg obrotu x40.' },
  { q: 'Co to jest wymaganie obrotu (wagering) w Vulkan Vegas?', a: 'Wymóg obrotu wynosi x40 od sumy depozytu i bonusu. Np. depozyt 1000 PLN + bonus 1000 PLN = 2000 PLN × 40 = 80 000 PLN do obrotu. Sloty liczą się 100%, ruletka 10%, blackjack 0%. Czas: 30 dni od aktywacji.' },
  { q: 'Jak odebrać cashback w Vulkan Vegas?', a: 'Cashback przyznawany jest automatycznie co wtorek po 12:00 UTC. Kwota cashbacku wynosi 5–20% strat netto z poprzedniego tygodnia, zależnie od poziomu VIP. Cashback podlega wymogowi obrotu x5, co czyni go znacznie bardziej korzystnym niż bonus depozytowy.' },
  { q: 'Czy bonus bez depozytu jest dostępny w Vulkan Vegas?', a: 'Tak, Vulkan Vegas oferuje bonus bez depozytu (50 zł lub darmowe spiny) dla nowych graczy po wpisaniu kodu promocyjnego podczas rejestracji. Maksymalna wypłata: 10x wartość bonusu. Szczegóły na stronie bonusu bez depozytu.' },
  { q: 'Które bonusy są najkorzystniejsze w Vulkan Vegas?', a: 'Cashback (wymóg x5) jest zdecydowanie najkorzystniejszy — nie blokuje własnych środków. Bonus powitalny (x40) jest wysoki — rozważ, czy warto go aktywować. Bonus bez depozytu jest bezpieczny — ryzykujesz wyłącznie czas, nie własne pieniądze.' },
]

export default function BonusPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Bonus Bez Depozytu 25€ + Kody 2026', '/bonus')} />

      <PageHero
        badge="🎁 BONUSY"
        title="Bonusy"
        titleAccent="Vulkan Vegas"
        description="Odbierz do 500 EUR + 200 darmowych spinów w ramach pakietu powitalnego. Sprawdź wszystkie aktualne promocje dla polskich graczy."
        image="/images/welcome-casino.png"
        imageAlt="Bonusy Vulkan Vegas"
        buttons={[
          { label: 'Odbierz bonus', href: AFFILIATE_LINK, variant: 'gold', external: true },
          { label: 'Bonus bez depozytu', href: '/bonus-bez-depozytu', variant: 'outline' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Bonus', url: '/bonus' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />
        <AffiliateDisclosure />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Bonus 2026 – Kody Promocyjne i Darmowe Spiny
        </h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          Kompleksowy przewodnik po aktualnych bonusach Vulkan Vegas: od 25 euro za rejestrację,
          przez kody bez depozytu, aż po 100% bonus powitalny. Dowiedz się, jak legalnie aktywować
          promocje i uniknąć ukrytych pułapek regulaminowych.
        </p>

        <CTAButton href={AFFILIATE_LINK} text="Odbierz bonus w Vulkan Vegas" />

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas Bonus Powitalny (Welcome Bonus)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Bonus powitalny to najhojniejsza oferta dla nowych graczy. Vulkan Vegas oferuje pakiet na
            pierwsze dwa depozyty: do 500 EUR łącznie oraz 200 darmowych spinów na popularnych slotach.
          </p>
          <div className="bg-surface-card border border-white/10 rounded-xl p-5 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 text-gray-400 font-medium">Parametr</th>
                  <th className="text-left py-2 text-gray-400 font-medium">1. depozyt</th>
                  <th className="text-left py-2 text-gray-400 font-medium">2. depozyt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr><td className="py-2 text-gray-400">Bonus</td><td className="py-2 text-gray-200">100% do 200 EUR</td><td className="py-2 text-gray-200">50% do 300 EUR</td></tr>
                <tr><td className="py-2 text-gray-400">Darmowe spiny</td><td className="py-2 text-gray-200">100 FS</td><td className="py-2 text-gray-200">100 FS</td></tr>
                <tr><td className="py-2 text-gray-400">Wymaganie obrotu</td><td className="py-2 text-gray-200">x30</td><td className="py-2 text-gray-200">x35</td></tr>
                <tr><td className="py-2 text-gray-400">Ważność</td><td className="py-2 text-gray-200">7 dni</td><td className="py-2 text-gray-200">7 dni</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas Cashback 2026</h2>
          <h3 className="text-lg font-semibold text-white mb-2">Jak działa cashback</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Cashback w Vulkan Vegas to cotygodniowy zwrot procentu strat netto. Obliczany jest na podstawie
            różnicy między wpłaconymi i wypłaconymi środkami w danym tygodniu. Cashback przyznawany jest
            co wtorek na konto bonusowe.
          </p>
          <h3 className="text-lg font-semibold text-white mb-2">Jak odebrać cashback w Vulkan Vegas</h3>
          <p className="text-gray-300 leading-relaxed mb-8">
            Cashback przyznawany jest automatycznie — nie musisz nic robić. Sprawdź panel gracza co wtorek
            po 12:00 UTC. Procent cashbacku zależy od Twojego poziomu VIP: od 5% (Iron) do 20% (Master).
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas Bonus za Rejestrację</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Bonus za rejestrację przyznawany jest automatycznie po potwierdzeniu adresu email i wypełnieniu
            profilu gracza. Może mieć formę darmowych spinów lub bonusu bez depozytu. Sprawdź aktualną ofertę
            po zarejestrowaniu konta.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas Bonus Urodzinowy</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Gracze Vulkan Vegas mogą liczyć na specjalny bonus urodzinowy. Jest on przyznawany automatycznie
            w dniu urodzin gracza, pod warunkiem uzupełnienia daty urodzenia w profilu i wykonania co najmniej
            jednego depozytu w ciągu ostatnich 90 dni.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-white mb-4">Inne Rodzaje Premii w Vulkan Vegas</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Bonus bez depozytu</h3>
              <p className="text-gray-300 text-sm mb-2">Odbierz darmowe spiny lub bonus bez wpłaty własnych środków.</p>
              <Link href="/bonus-bez-depozytu" className="text-brand hover:underline text-sm">No deposit bonus →</Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Kod promocyjny</h3>
              <p className="text-gray-300 text-sm mb-2">Aktualne kody bonusowe do wpisania przy depozycie.</p>
              <Link href="/kod-promocyjny" className="text-brand hover:underline text-sm">Aktualny kod bonusowy →</Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Darmowe spiny</h3>
              <p className="text-gray-300 text-sm mb-2">50 darmowych spinów na topowych slotach bez depozytu.</p>
              <Link href="/darmowe-spiny" className="text-brand hover:underline text-sm">50 free spins →</Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Warunki Obrotu Bonusami w Vulkan Vegas (Wagering)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Wymaganie obrotu (wagering requirement) to krotność, którą musisz obrócić bonusem, zanim
            wygraną będzie można wypłacić. Na przykład: dostając 100 EUR bonusu z x30 wagering,
            musisz obrócić 3000 EUR w grach.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Ważne: nie wszystkie gry liczone są w 100% do wymagania obrotu. Sloty video zazwyczaj w 100%,
            ruletka i blackjack często tylko w 10-20%. Sprawdź regulamin konkretnego bonusu.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Bonusy Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />

        <div className="mt-10 text-center">
          <CTAButton href={AFFILIATE_LINK} text="Odbierz wszystkie bonusy" />
        </div>
      </div>
    </>
  )
}
