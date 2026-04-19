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
  title: 'Vulkan Vegas Kod Promocyjny 2026 Bonusy Bez Depozytu',
  description: 'Aktualne kody promocyjne Vulkan Vegas 2026: bonus 50 zł, darmowe spiny bez depozytu, kod rejestracyjny 25 euro. Sprawdź jak aktywować i odbierz ekskluzywne bonusy.',
  alternates: { canonical: '/kod-promocyjny' },
  openGraph: {
    title: 'Vulkan Vegas Kod Promocyjny 2026 Bonusy Bez Depozytu',
    description: 'Aktualne kody promocyjne Vulkan Vegas 2026: bonus 50 zł, darmowe spiny bez depozytu, kod rejestracyjny 25 euro. Sprawdź jak aktywować i odbierz ekskluzywne bonusy.',
    url: 'https://vulkan-vegas-kasyno.com.pl/kod-promocyjny',
    type: 'article',
    locale: 'pl_PL',
  },
}

const enterCodeSteps = [
  { name: 'Wejdź na stronę rejestracji Vulkan Vegas', text: 'Otwórz vulkanvegas.com/pl i kliknij "Zarejestruj się". Upewnij się, że korzystasz z oryginalnej domeny z certyfikatem SSL — sprawdź adres w przeglądarce.' },
  { name: 'Wypełnij formularz i znajdź pole kodu', text: 'Podaj email, hasło, walutę PLN i numer telefonu. Pola "Kod promocyjny" lub "Kod bonusowy" znajduje się bezpośrednio pod wyborem waluty na pierwszym ekranie formularza.' },
  { name: 'Wpisz kod dokładnie tak jak podano', text: 'Wpisz kod (np. WELCOME50 lub FREEBET2026) rozróżniając wielkie i małe litery. Nie używaj spacji przed ani po kodzie. Kod musi zostać wpisany PRZED wysłaniem formularza — nie można go dodać retrospektywnie.' },
  { name: 'Potwierdź email i numer telefonu', text: 'Kliknij link aktywacyjny w emailu. Dla niektórych kodów (szczególnie z wyższą wartością, np. 50–100 zł) wymagana jest dodatkowa weryfikacja SMS numeru telefonu.' },
  { name: 'Sprawdź saldo bonusowe', text: 'Bonus zostanie przypisany automatycznie po potwierdzeniu emaila. Sprawdź sekcję "Moje bonusy" w panelu gracza, aby zobaczyć aktywne promocje i postęp realizacji obrotu.' },
]

const faqItems = [
  { q: 'Gdzie wpisać kod promocyjny Vulkan Vegas?', a: 'Kod rejestracyjny wpisuje się w polu "Kod promocyjny" na PIERWSZYM ekranie formularza rejestracyjnego — pod wyborem waluty. Nie można go dodać po założeniu konta. Kody depozytowe wpisuje się w kasjerze podczas dokonywania wpłaty.' },
  { q: 'Dlaczego mój kod promocyjny nie działa?', a: 'Najczęstsze przyczyny: kod wygasł lub pochodzi ze źródła z inną kampanią, wpisany po zarejestrowaniu konta (za późno), konto zidentyfikowane jako duplikat (ten sam IP/email), niespełnione warunki (np. minimalny depozyt). Skontaktuj się ze supportem przez live chat 24/7.' },
  { q: 'Czy kody Vulkan Vegas wygasają?', a: 'Tak, większość kodów ma ograniczony czas ważności lub są dedykowane konkretnym kampaniom (np. YouTube, afiliacja). Kody publikowane na stronach afiliacyjnych mogą być już nieaktywne. Weryfikuj aktualność kodu bezpośrednio na vulkanvegas.com lub kontaktując się z supportem.' },
  { q: 'Ile razy można użyć kodu promocyjnego?', a: 'Każdy kod może być użyty tylko raz na konto / adres email / adres IP / urządzenie. Kody bez depozytu są jednorazowe dla nowych graczy. System wykrywa duplikaty przez fingerprinting i analizę IP — próba obejścia skutkuje blokadą konta.' },
  { q: 'Czy można łączyć kilka kodów promocyjnych?', a: 'Nie — na raz może być aktywny tylko jeden bonus. Próba aktywacji drugiego kodu przy aktywnym bonusie zostanie odrzucona przez system. Wyjątek: kody cashback mogą działać równolegle z bonusami depozytowymi dla graczy VIP.' },
  { q: 'Jak długo ważny jest bonus po wpisaniu kodu?', a: 'Standardowo 30 dni od aktywacji dla bonusów depozytowych. Bonusy bez depozytu: 7–14 dni. Darmowe spiny: 7 dni od przyznania. Kasyno wysyła przypomnienie e-mail na 48 godzin przed wygaśnięciem. Sprawdzaj daty w sekcji "Moje bonusy".' },
]

export default function KodPromocyjnyPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Kod Promocyjny 2026 Bonusy Bez Depozytu', '/kod-promocyjny')} />

      <PageHero
        badge="🔑 KOD BONUSOWY"
        title="Kod"
        titleAccent="Promocyjny"
        description="Wpisz aktualny kod promocyjny i odblokuj dodatkowe bonusy — darmowe spiny, cashback i zwiększone dopasowanie depozytu."
        image="/images/welcome-gift.png"
        imageAlt="Kod promocyjny Vulkan Vegas"
        buttons={[
          { label: 'Użyj kodu', href: AFFILIATE_LINK, variant: 'gold', external: true },
          { label: 'Jak wpisać kod?', href: '#jak-wpisac', variant: 'outline' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Bonus', url: '/bonus' },
          { name: 'Kod promocyjny', url: '/kod-promocyjny' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />
        <AffiliateDisclosure />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Kod Promocyjny 2026 – Aktualne Kody i Bonusy
        </h1>

        <PromoCodeBox
          code="VVPOLSKA"
          bonus="Bonus powitalny + 50 darmowych spinów"
          expiry="31 grudnia 2026"
        />

        <p className="text-gray-300 leading-relaxed mb-8">
          Odkryj najnowsze kody promocyjne Vulkan Vegas na 2026 rok. Zdobądź bonusy bez depozytu,
          darmowe spiny oraz ekskluzywne oferty rejestracyjne. Sprawdź, jak aktywować kody
          i maksymalizować swoje wygrane w jednym z najpopularniejszych kasyn online w Polsce.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Aktualny Kod Promocyjny Vulkan Vegas 2026</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-2 text-gray-400 font-medium">Kod</th>
                <th className="text-left py-3 px-2 text-gray-400 font-medium">Bonus</th>
                <th className="text-left py-3 px-2 text-gray-400 font-medium">Ważny do</th>
                <th className="text-left py-3 px-2 text-gray-400 font-medium">Akcja</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { code: 'VVPOLSKA', bonus: '100% do 200 EUR + 50 FS', expiry: '31.12.2026', active: true },
                { code: 'NODEPVV', bonus: '25 EUR bez depozytu', expiry: '30.06.2026', active: true },
                { code: 'FREESPINS50', bonus: '50 darmowych spinów', expiry: '31.05.2026', active: true },
              ].map((row) => (
                <tr key={row.code} className="hover:bg-surface-light/30">
                  <td className="py-3 px-2 font-mono font-bold text-white">{row.code}</td>
                  <td className="py-3 px-2 text-gray-200">{row.bonus}</td>
                  <td className="py-3 px-2 text-gray-400">{row.expiry}</td>
                  <td className="py-3 px-2">
                    <a href={AFFILIATE_LINK} rel="noopener noreferrer" target="_blank" className="text-brand hover:underline text-xs font-medium">
                      Aktywuj →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Gdzie Wpisać Kod Promocyjny w Vulkan Vegas</h2>
        <StepByStep title="Jak wpisać kod promocyjny w Vulkan Vegas" steps={enterCodeSteps} />

        <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas Kod Promocyjny bez Depozytu</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Kod promocyjny bez depozytu to specjalny typ kodu, który aktywuje bonus bez konieczności wpłaty
          własnych środków. Wystarczy wpisać kod w panelu gracza lub kasjerze, aby otrzymać darmowe spiny
          lub bonus gotówkowy.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Bonus bez depozytu podlega wymaganiu obrotu (zazwyczaj x30-x40) zanim możliwa będzie wypłata.
          Szczegółowe warunki znajdziesz na stronie{' '}
          <a href="/bonus-bez-depozytu" className="text-brand hover:underline">Vulkan Vegas bonus bez depozytu</a>.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Bonus Code Vulkan Vegas na Free Spins</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Kody na darmowe spiny to popularna forma bonusu. Darmowe spiny można wykorzystać na wskazanych
          slotach (zazwyczaj Book of Dead, Starburst lub aktualne hity Pragmatic Play). Wartość jednego
          spinu to zwykle 0,10 EUR.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Wygrane z darmowych spinów podlegają wymaganiu obrotu. Pełna oferta darmowych spinów:{' '}
          <a href="/darmowe-spiny" className="text-brand hover:underline">Aktualny promo code</a>.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Kody Promocyjne na 2025 Rok (Archiwum)</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Poniżej archiwalne kody z 2025 roku — nieaktywne, służą wyłącznie informacyjnie.
          Nie próbuj ich używać — mogą nie działać lub naruszać warunki bonusu.
        </p>
        <div className="bg-surface-card border border-white/10 rounded-lg p-4 mb-8 opacity-60">
          <p className="text-gray-400 text-sm">VSPIELE750, NODEP88, FRIDAY60 — kody z 2025 roku (nieaktywne)</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Aktionscode Vulkan Vegas (Wersja Niemiecka)</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Vulkan Vegas Aktionscode (kod promocyjny w języku niemieckim) to ta sama funkcja — promo code
          wpisywany przy rejestracji lub depozycie. Kody są zazwyczaj tożsame dla graczy z różnych krajów,
          choć promocje mogą być geolokalizowane.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Forum oraz Opinie o Kodach Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Na forach hazardowych (np. Casino Guru, AskGamblers) gracze regularnie dzielą się aktualnymi kodami.
          Zalecamy ostrożność — nie wszystkie kody z forów są aktualne lub oficjalne. Korzystaj wyłącznie
          z kodów z weryfikowanych źródeł, takich jak nasz serwis.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Nasz zespół weryfikuje kody bezpośrednio u operatora przed publikacją.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Kody Promocyjne Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />

        <div className="mt-10 text-center">
          <CTAButton href={AFFILIATE_LINK} text="Odbierz bonus z kodem" />
        </div>
      </div>
    </>
  )
}
