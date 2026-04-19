import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FAQAccordion from '@/components/FAQAccordion'
import PromoCodeBox from '@/components/PromoCodeBox'
import StepByStep from '@/components/StepByStep'
import LastUpdated from '@/components/LastUpdated'
import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { AFFILIATE_LINK, PUBLISHED_DATE } from '@/lib/constants'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Darmowe Spiny Bez Depozytu 2026 | Oficjalny',
  description: 'Zdobądź darmowe spiny w Vulkan Vegas! Aktualne kody promocyjne, bonus 50 FS bez depozytu, warunki obrotu i sprawdzone metody na maksymalne wygrane. Przewodnik 2026.',
  alternates: { canonical: '/darmowe-spiny' },
  openGraph: {
    title: 'Vulkan Vegas Darmowe Spiny Bez Depozytu 2026 | Oficjalny',
    description: 'Zdobądź darmowe spiny w Vulkan Vegas! Aktualne kody promocyjne, bonus 50 FS bez depozytu, warunki obrotu i sprawdzone metody na maksymalne wygrane. Przewodnik 2026.',
    url: 'https://vulkan-vegas-kasyno.com.pl/darmowe-spiny',
    type: 'article',
    locale: 'pl_PL',
  },
}

const steps = [
  { name: 'Zarejestruj konto i wpisz kod promocyjny', text: 'Kliknij "Rejestracja" na vulkanvegas.com/pl. W polu "Kod promocyjny" wpisz aktualny kod na darmowe spiny (np. FREESPINS50). Kod musi być wpisany PRZED wysłaniem formularza — nie można go dodać po rejestracji.' },
  { name: 'Potwierdź adres email i numer telefonu', text: 'Kliknij link aktywacyjny w emailu od Vulkan Vegas. Opcjonalnie zweryfikuj numer telefonu SMS-em — wymagane dla niektórych ofert z wyższą wartością.' },
  { name: 'Sprawdź saldo darmowych spinów', text: 'Po weryfikacji emaila darmowe spiny pojawią się w sekcji "Moje bonusy". Spiny są zazwyczaj kredytowane w transzach po 10 sztuk dziennie przez 5 dni (łącznie 50 spinów).' },
  { name: 'Zagraj i unikaj pułapek regulaminowych', text: 'Uruchom przypisany slot i kliknij "Free Spins". Nie przekraczaj maksymalnej stawki 5 PLN przy aktywnym bonusie. Wygrane trafiają na saldo bonusowe i podlegają wymogowi obrotu x30–x40.' },
]

const faqItems = [
  { q: 'Ile darmowych spinów oferuje Vulkan Vegas?', a: 'Vulkan Vegas oferuje 50 darmowych spinów bez depozytu po rejestracji i wpisaniu kodu. Dodatkowo 125 spinów w pakiecie powitalnym (50+50+25 na trzy pierwsze depozyty). Wartość spinu: 0,50 PLN, łączna wartość pakietu: 87,50 PLN.' },
  { q: 'Na jakich grach mogę użyć darmowych spinów?', a: 'Darmowe spiny bez depozytu przypisane są do Book of Dead (Play\'n GO). Spiny z pakietu powitalnego: 1. depozyt — Book of Dead, 2. depozyt — Book of Fallen (Pragmatic Play), 3. depozyt — Gonzo\'s Quest (NetEnt). Lista jest stała i nie ma wyboru gry.' },
  { q: 'Jak długo są ważne darmowe spiny?', a: 'Spiny bez depozytu są ważne 7 dni od aktywacji kodu. Spiny z pakietu powitalnego kredytowane są w transzach po 10 dziennie przez 5 dni — ważność każdej transzy wynosi 24 godziny od przyznania. Sprawdzaj regularnie sekcję "Moje bonusy".' },
  { q: 'Czy z darmowych spinów można wypłacić wygraną?', a: 'Tak, ale wymaganie obrotu wynosi x30–x40 od wygranej z free spinów. Spiny mają limit czasowy 30 dni. Maksymalna wypłata z darmowych spinów jest ograniczona — sprawdź aktualny limit w regulaminie. Wygrane z free spinów trafiają na saldo bonusowe, nie rzeczywiste.' },
  { q: 'Dlaczego moje darmowe spiny zniknęły?', a: 'Możliwe przyczyny: upłynął termin ważności (7 dni od aktywacji lub 24h dla dziennej transzy), przekroczyłeś maksymalną stawkę podczas obrotu, grałeś w grę wykluczoną z bonusu lub Twoje konto nie spełnia warunków promocji. Skontaktuj się z supportem przez live chat 24/7.' },
  { q: 'Czym się różni darmowy spin od darmowego obrotu?', a: '"Darmowy spin", "darmowy obrót" i "free spin" to synonimy oznaczające to samo — jedno bezpłatne zakręcenie bębnami slotu na predefiniowaną stawkę. W polskich tłumaczeniach kasyn oba terminy są używane wymiennie.' },
]

export default function DarmoweSpinyPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Darmowe Spiny Bez Depozytu 2026 | Oficjalny', '/darmowe-spiny')} />

      <PageHero
        badge="🎰 FREE SPINS"
        title="Darmowe"
        titleAccent="Spiny 2026"
        description="50 darmowych spinów bez depozytu + 200 free spins po rejestracji. Graj na najlepszych slotach zupełnie za darmo!"
        image="/images/freespins.png"
        imageAlt="Darmowe spiny Vulkan Vegas"
        buttons={[
          { label: 'Zgarnij free spins', href: AFFILIATE_LINK, variant: 'gold', external: true },
          { label: 'Sprawdź warunki', href: '#warunki', variant: 'outline' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Bonus', url: '/bonus' },
          { name: 'Darmowe spiny', url: '/darmowe-spiny' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />
        <AffiliateDisclosure />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Darmowe Spiny: Kompletny Przewodnik 2026
        </h1>

        <p className="text-gray-300 leading-relaxed mb-4">
          Odkryj wszystkie sposoby na zdobycie darmowych spinów w Vulkan Vegas – od bonusów bez
          depozytu po kody promocyjne. Sprawdź aktualne oferty, warunki obrotu i strategie
          maksymalizacji wygranych z bezpłatnych obrotów.
        </p>

        <PromoCodeBox
          code="FREESPINS50"
          bonus="50 darmowych spinów bez depozytu"
          expiry="31 maja 2026"
        />

        <CTAButton href={AFFILIATE_LINK} text="Odbierz 50 darmowych spinów" className="mb-10" />

        <h2 className="text-2xl font-bold text-white mb-4">50 Darmowych Spinów w Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          50 darmowych spinów bez depozytu to główna oferta dla nowych graczy w Vulkan Vegas 2026.
          Spiny przydzielane są po rejestracji konta i wpisaniu kodu promocyjnego. Każdy spin ma
          wartość 0,10 EUR, więc łączna wartość 50 spinów to 5 EUR.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Wygrane z darmowych spinów podlegają wymaganiu obrotu x30. Maksymalna wypłata wynosi 100 EUR.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Jak Odebrać Free Spins w Vulkan Vegas</h2>
        <StepByStep title="Jak odebrać darmowe spiny w Vulkan Vegas" steps={steps} />

        <h2 className="text-2xl font-bold text-white mb-4">Darmowe Obroty bez Depozytu Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Darmowe obroty bez depozytu (synonimy: free spins bez depozytu, darmowe spiny bez wpłaty)
          to idealne rozwiązanie dla graczy, którzy chcą przetestować kasyno przed wpłatą pierwszych
          środków. Vulkan Vegas regularnie oferuje tego rodzaju promocje zarówno dla nowych, jak i
          powracających graczy.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Kod na Darmowe Spiny Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Aktualny promo code na darmowe spiny znajdziesz powyżej lub na stronie z kodami:
        </p>
        <p className="mb-8">
          <a href="/kod-promocyjny" className="text-brand hover:underline font-medium">Aktualny promo code →</a>
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">50 Free Spins Code Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          50 free spins code for Vulkan Vegas casino — use code <strong className="text-white font-mono">FREESPINS50</strong> at registration
          to receive 50 free spins no deposit required. The spins are valid for 7 days after activation.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Na Jakich Slotach Grać Darmowymi Spinami</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {[
            { name: 'Book of Dead', provider: 'Play\'n GO' },
            { name: 'Gates of Olympus', provider: 'Pragmatic Play' },
            { name: 'Starburst', provider: 'NetEnt' },
            { name: 'Sweet Bonanza', provider: 'Pragmatic Play' },
            { name: 'Wolf Gold', provider: 'Pragmatic Play' },
            { name: 'Dead or Alive 2', provider: 'NetEnt' },
          ].map((slot) => (
            <div key={slot.name} className="bg-surface-card border border-white/10 rounded-lg p-3 text-center">
              <p className="text-white font-medium text-sm">{slot.name}</p>
              <p className="text-gray-400 text-xs">{slot.provider}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Warunki Obrotu dla Free Spins</h2>
        <div className="bg-surface-card border border-white/10 rounded-xl p-5 mb-8">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {[
                ['Wymaganie obrotu', 'x30 od wygranej z free spinów'],
                ['Wartość spinu', '0,10 EUR za spin'],
                ['Maksymalna wypłata', '100 EUR'],
                ['Czas ważności', '7 dni od aktywacji'],
                ['Dozwolone gry', 'Wyznaczone sloty (lista w regulaminie)'],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="py-2.5 pr-4 text-gray-400 font-medium">{label}</td>
                  <td className="py-2.5 text-gray-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Darmowe Spiny Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />

        <div className="mt-10 text-center">
          <CTAButton href={AFFILIATE_LINK} text="Zagraj z darmowymi spinami" />
        </div>
      </div>
    </>
  )
}
