import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FAQAccordion from '@/components/FAQAccordion'
import PromoCodeBox from '@/components/PromoCodeBox'
import StepByStep from '@/components/StepByStep'
import ProsCons from '@/components/ProsCons'
import LastUpdated from '@/components/LastUpdated'
import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { AFFILIATE_LINK, PUBLISHED_DATE } from '@/lib/constants'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Bonus Bez Depozytu Official 2026',
  description: 'Zdobądź Vulkan Vegas bonus bez depozytu – darmowe spiny, kod promocyjny 50 zł i oferty na 2026. Sprawdź aktywne kody do rejestracji i bonusy za aplikację bez wpłaty.',
  alternates: { canonical: '/bonus-bez-depozytu' },
  openGraph: {
    title: 'Vulkan Vegas Bonus Bez Depozytu Official 2026',
    description: 'Zdobądź Vulkan Vegas bonus bez depozytu – darmowe spiny, kod promocyjny 50 zł i oferty na 2026. Sprawdź aktywne kody do rejestracji i bonusy za aplikację bez wpłaty.',
    url: 'https://vulkan-vegas-kasyno.com.pl/bonus-bez-depozytu',
    type: 'article',
    locale: 'pl_PL',
  },
}

const howToSteps = [
  { name: 'Wejdź na oficjalną stronę Vulkan Vegas', text: 'Kliknij przycisk "Zarejestruj się" na stronie vulkanvegas.com/pl. Upewnij się, że korzystasz z oryginalnej domeny z certyfikatem SSL.' },
  { name: 'Wypełnij formularz i wpisz kod promocyjny', text: 'Podaj adres e-mail, hasło, walutę PLN i numer telefonu. Kod promocyjny wpisz w polu "Kod bonusowy" — musi być wpisany PRZED wysłaniem formularza.' },
  { name: 'Potwierdź adres e-mail', text: 'Sprawdź skrzynkę email (i folder SPAM) i kliknij link aktywacyjny. Bonus zostanie przypisany automatycznie po weryfikacji emaila.' },
  { name: 'Zweryfikuj numer telefonu', text: 'Niektóre kody (szczególnie z wyższą wartością) wymagają weryfikacji SMS. Wprowadź kod otrzymany na podany numer telefonu.' },
  { name: 'Odbierz bonus i spełnij wymogi obrotu', text: 'Bonus pojawi się na koncie bonusowym. Graj wyłącznie na slotach (100% do obrotu) i nie przekraczaj maksymalnej stawki 5 zł, aby nie stracić wygranej.' },
]

const faqItems = [
  { q: 'Ile wynosi bonus bez depozytu w Vulkan Vegas?', a: 'Vulkan Vegas oferuje bonus bez depozytu w wysokości 50 zł (lub ekwiwalent w darmowych spinach) dla nowych graczy. Wartość i forma bonusu mogą się zmieniać w zależności od kampanii. Sprawdź aktualny kod na naszej stronie.' },
  { q: 'Jaki jest wymóg obrotu dla bonusu bez depozytu?', a: 'Standardowy wymóg obrotu wynosi x40 od wartości bonusu. Dla bonusu 50 zł musisz obrócić łącznie 2000 zł w kwalifikujących się grach (sloty — 100%, ruletka — 10%, blackjack — 0%). Czas na realizację: zazwyczaj 7–14 dni.' },
  { q: 'Jaka jest maksymalna wypłata z bonusu bez depozytu?', a: 'Maksymalna wypłata z bonusu bez depozytu jest ograniczona do 10-krotności wartości bonusu — np. dla bonusu 50 zł możesz wypłacić maksymalnie 500 zł. Nadwyżka jest automatycznie usuwana z salda przy wypłacie.' },
  { q: 'Czy trzeba podać dane karty, żeby odebrać bonus bez depozytu?', a: 'Nie, bonus bez depozytu nie wymaga danych karty ani wpłaty. Wystarczy rejestracja i weryfikacja e-maila. Karta lub inna metoda płatności będzie wymagana dopiero przy pierwszej wypłacie wygranej.' },
  { q: 'Dlaczego mój kod bez depozytu nie działa?', a: 'Możliwe przyczyny: kod wygasł lub jest nieaktualny, kod był już użyty na Twoim emailu/IP, wpisujesz go po zarejestrowaniu konta (za późno), konto zostało zidentyfikowane jako duplikat. Skontaktuj się ze supportem przez live chat 24/7.' },
  { q: 'Kiedy wygasa bonus bez depozytu?', a: 'Zazwyczaj 7–14 dni od aktywacji. Po tym czasie niewykorzystany bonus i wygrane przepadają. Termin ważności sprawdzisz w sekcji "Moje bonusy" w panelu gracza. System wysyła przypomnienia e-mail na 48 godzin przed wygaśnięciem.' },
]

export default function BonusBezDepozytuPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Bonus Bez Depozytu Official 2026', '/bonus-bez-depozytu')} />

      <PageHero
        badge="🎁 BEZ DEPOZYTU"
        title="Bonus bez"
        titleAccent="Depozytu"
        description="Odbierz 50 darmowych spinów bez wpłaty — tylko dla nowych graczy. Zarejestruj konto i graj za darmo już teraz!"
        image="/images/hero-chest.png"
        imageAlt="Bonus bez depozytu Vulkan Vegas"
        buttons={[
          { label: 'Odbierz bez depozytu', href: AFFILIATE_LINK, variant: 'gold', external: true },
          { label: 'Jak odebrać?', href: '#jak-odebrac', variant: 'outline' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Bonus', url: '/bonus' },
          { name: 'Bonus bez depozytu', url: '/bonus-bez-depozytu' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />
        <AffiliateDisclosure />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Bonus Bez Depozytu – Darmowe Spiny i Kody 2026
        </h1>

        <p className="text-gray-300 leading-relaxed mb-4">
          Odkryj ekskluzywne bonusy bez depozytu w Vulkan Vegas – sprawdź aktualne kody promocyjne,
          darmowe spiny i oferty na start bez wpłaty. Zdobądź nawet 50 zł za darmo po rejestracji
          i maksymalizuj swoje szanse na wygraną.
        </p>

        <PromoCodeBox
          code="NODEPVV"
          bonus="50 darmowych spinów bez depozytu"
          expiry="30 czerwca 2026"
        />

        <CTAButton href={AFFILIATE_LINK} text="Odbierz bonus bez depozytu" className="mb-8" />

        <h2 className="text-2xl font-bold text-white mb-4">Czym jest Bonus bez Depozytu w Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Bonus bez depozytu (ang. no deposit bonus) to promocja przyznawana automatycznie po rejestracji
          lub wpisaniu kodu promocyjnego — bez konieczności wpłaty pieniędzy. W odróżnieniu od bonusu
          powitalnego (który wymaga depozytu), no deposit bonus pozwala grać za darmo od pierwszej chwili.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Bonus może mieć formę darmowych spinów na wybranych slotach lub bonusu gotówkowego z wymaganiem obrotu.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Jak Odebrać Bonus bez Depozytu w Vulkan Vegas Krok po Kroku</h2>
        <StepByStep title="Jak odebrać bonus bez depozytu w Vulkan Vegas" steps={howToSteps} />

        <h2 className="text-2xl font-bold text-white mb-4">Aktualny Kod Bonusowy No Deposit na 2026 Rok</h2>
        <PromoCodeBox
          code="NODEPVV"
          bonus="50 Free Spins bez depozytu"
          expiry="30 czerwca 2026"
        />

        <h2 className="text-2xl font-bold text-white mb-4">Warunki Obrotu dla Bonusu bez Depozytu</h2>
        <div className="bg-surface-card border border-white/10 rounded-xl p-5 mb-8">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {[
                ['Wymaganie obrotu', 'x30 od wartości wygranej z darmowych spinów'],
                ['Maksymalna stawka', '5 EUR za spinację podczas aktywnego bonusu'],
                ['Maksymalna wypłata', '100 EUR z bonusu bez depozytu'],
                ['Czas ważności', '7 dni od aktywacji kodu'],
                ['Gry kwalifikowane', 'Sloty (100%), gry stołowe wykluczone'],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="py-2.5 pr-4 text-gray-400 font-medium">{label}</td>
                  <td className="py-2.5 text-gray-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">50 Darmowych Spinów bez Depozytu Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          50 darmowych spinów bez depozytu to flagowa oferta Vulkan Vegas dla nowych graczy. Spiny można
          wykorzystać na wybranych slotach (np. Book of Dead, Gates of Olympus lub innych tytułach
          Pragmatic Play). Wartość jednego spinu wynosi zazwyczaj 0,10 EUR.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Wygrane z darmowych spinów podlegają wymaganiu obrotu x30. Maksymalna wypłata z free spinów
          wynosi 100 EUR.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Ohne Einzahlung Bonus Vulkan Vegas (Wersja Niemiecka)</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Vulkan Vegas Bonus ohne Einzahlung (bonus bez wpłaty w języku niemieckim) to ta sama promocja,
          dostępna dla graczy z różnych krajów. Kody mogą się różnić w zależności od regionu — sprawdź
          aktualny kod dla graczy z Polski powyżej.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Plusy oraz Minusy Bonusu bez Depozytu</h2>
        <ProsCons
          pros={[
            'Możliwość gry bez ryzyka własnych pieniędzy',
            'Idealne do testowania kasyna i slotów',
            'Szansa na prawdziwe wygrane bez depozytu',
            'Dostępny dla nowych graczy od razu po rejestracji',
          ]}
          cons={[
            'Wysokie wymaganie obrotu (x30-x40)',
            'Limit maksymalnej wypłaty (zazwyczaj 100 EUR)',
            'Krótki czas ważności (7-14 dni)',
          ]}
        />

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Bonus bez Depozytu Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />

        <div className="mt-10 text-center">
          <CTAButton href={AFFILIATE_LINK} text="Odbierz 50 darmowych spinów" />
        </div>
      </div>
    </>
  )
}
