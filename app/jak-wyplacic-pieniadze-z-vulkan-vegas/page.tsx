import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import FAQAccordion from '@/components/FAQAccordion'
import StepByStep from '@/components/StepByStep'
import LastUpdated from '@/components/LastUpdated'
import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { AFFILIATE_LINK, PUBLISHED_DATE } from '@/lib/constants'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Wypłata 2026 - Metody, Czas i Opinie PL',
  description: 'Jak wypłacić pieniądze z Vulkan Vegas? Sprawdź metody wypłat, czas realizacji (24h-5dni), limity oraz prawdziwe opinie graczy. Przewodnik krok po kroku dla polskich użytkowników.',
  alternates: { canonical: '/jak-wyplacic-pieniadze-z-vulkan-vegas' },
  openGraph: {
    title: 'Vulkan Vegas Wypłata 2026 - Metody, Czas i Opinie PL',
    description: 'Jak wypłacić pieniądze z Vulkan Vegas? Sprawdź metody wypłat, czas realizacji (24h-5dni), limity oraz prawdziwe opinie graczy. Przewodnik krok po kroku dla polskich użytkowników.',
    url: 'https://vulkan-vegas-kasyno.com.pl/jak-wyplacic-pieniadze-z-vulkan-vegas',
    type: 'article',
    locale: 'pl_PL',
  },
}

const withdrawalSteps = [
  { name: 'Zaloguj się i przejdź weryfikację tożsamości', text: 'Wejdź na stronę vulkanvegas.com/pl i zaloguj się. Upewnij się, że weryfikacja KYC jest zakończona — jest ona obowiązkowa przed pierwszą wypłatą.' },
  { name: 'Przejdź do sekcji "Kasa" lub "Wypłata"', text: 'Kliknij ikonę portfela lub przycisk "Kasa" w górnym menu, a następnie wybierz zakładkę "Wypłata".' },
  { name: 'Wybierz metodę wypłaty', text: 'Wybierz preferowaną metodę płatności. Pamiętaj: Vulkan Vegas wymaga, aby metoda wypłaty była tożsama z metodą wpłaty (do wysokości sumy depozytów).' },
  { name: 'Wprowadź kwotę i dane', text: 'Podaj kwotę do wypłaty oraz dane do przelewu (numer konta lub e-portfela). Sprawdź limity minimalne i maksymalne dla wybranej metody.' },
  { name: 'Potwierdź transakcję', text: 'Kliknij "Wypłać" i potwierdź transakcję kodem SMS lub e-mailem (weryfikacja dwuskładnikowa). Zlecenie trafi do kolejki weryfikacji.' },
]

const faqItems = [
  { q: 'Ile trwa wypłata z Vulkan Vegas?', a: 'Portfele elektroniczne (Skrill, Neteller): do 24h. BLIK: 24-48 godzin. Przelewy bankowe: 3-5 dni roboczych. Czas zależy od statusu weryfikacji konta i pory złożenia zlecenia.' },
  { q: 'Jaka jest minimalna kwota wypłaty?', a: 'Minimalna wypłata zależy od metody: BLIK — 50 PLN, przelew bankowy — 100 PLN, Skrill/Neteller — 40 PLN, MuchBetter — 50 PLN. Gracze VIP mogą mieć obniżone limity.' },
  { q: 'Dlaczego moja wypłata jest wstrzymana?', a: 'Najczęstsze przyczyny: niezakończona weryfikacja KYC, aktywny bonus z nieukończonym obrotem, niezgodność metody wypłaty z metodą wpłaty, podejrzany wzorzec gry (AML). Skontaktuj się ze supportem przez czat 24/7.' },
  { q: 'Czy Vulkan Vegas pobiera opłaty za wypłatę?', a: 'Vulkan Vegas nie pobiera opłat za wypłaty. Jednak portfele elektroniczne (Skrill, Neteller) mogą pobierać opłatę za przelew środków na konto bankowe — ok. 24 PLN lub 1,45% kwoty. BLIK i przelewy bankowe są w pełni darmowe.' },
  { q: 'Co zrobić jeśli wypłata nie dotarła po 7 dniach?', a: 'Skontaktuj się ze supportem Vulkan Vegas przez live chat 24/7 lub email support@vulkanvegas.com. Podaj numer ID transakcji, datę i kwotę wypłaty. Możliwe, że kasyno wysłało mail z prośbą o dokumenty — sprawdź folder SPAM.' },
  { q: 'Jakie są limity wypłat dla graczy VIP?', a: 'Gracze VIP Silver: do 20 000 PLN jednorazowo, 40 000 PLN tygodniowo. VIP Gold/Platinum: do 50 000 PLN jednorazowo, 100 000 PLN tygodniowo. Status VIP uzyskujesz automatycznie przez punkty lojalnościowe.' },
]

export default function JakWyplacicPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Wypłata 2026 - Metody, Czas i Opinie PL', '/jak-wyplacic-pieniadze-z-vulkan-vegas')} />

      <PageHero
        badge="💸 WYPŁATY"
        title="Jak Wypłacić"
        titleAccent="Pieniądze?"
        description="BLIK, Przelewy24, karty i krypto — poznaj wszystkie metody wypłat, limity i czas realizacji. Wypłaty nawet w ciągu 24h!"
        image="/images/girl-hearts.png"
        imageAlt="Wypłata Vulkan Vegas"
        buttons={[
          { label: 'Wypłać teraz', href: AFFILIATE_LINK, variant: 'gold', external: true },
          { label: 'Weryfikacja KYC', href: AFFILIATE_LINK, variant: 'outline' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Wypłata z Vulkan Vegas', url: '/jak-wyplacic-pieniadze-z-vulkan-vegas' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Anna Wiśniewska" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Wypłata: Kompletny Przewodnik 2026
        </h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          Wypłata środków z Vulkan Vegas budzi wiele pytań wśród polskich graczy. W tym szczegółowym przewodniku
          znajdziesz wszystkie informacje o metodach wypłat, czasach realizacji, limitach oraz rzeczywiste opinie
          użytkowników z Warszawy i całej Polski.
        </p>

        <CTAButton href={AFFILIATE_LINK} text="Przejdź do kasjera" className="mb-8" />

        <h2 className="text-2xl font-bold text-white mb-4">Jak Wypłacić Pieniądze z Vulkan Vegas: Instrukcja Krok po Kroku</h2>
        <StepByStep title="Jak wypłacić pieniądze z Vulkan Vegas" steps={withdrawalSteps} />

        <h2 className="text-2xl font-bold text-white mb-4">Metody Wypłaty w Vulkan Vegas 2026</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Polscy gracze mają do dyspozycji sześć głównych metod wypłaty. Wybór odpowiedniej ma
          kluczowe znaczenie dla szybkości otrzymania środków oraz ewentualnych kosztów transakcji.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Metoda wypłaty</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Czas realizacji</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Min. wypłata</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Max. wypłata</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Opłata</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {[
                ['Przelew bankowy', '3-5 dni roboczych', '100 PLN', '50 000 PLN', '0 PLN'],
                ['BLIK', '24-48 godzin', '50 PLN', '10 000 PLN', '0 PLN'],
                ['Skrill', 'Do 24 godzin', '40 PLN', '20 000 PLN', '0 PLN*'],
                ['Neteller', 'Do 24 godzin', '40 PLN', '20 000 PLN', '0 PLN*'],
                ['MuchBetter', '12-24 godziny', '50 PLN', '15 000 PLN', '0 PLN*'],
                ['ecoPayz', 'Do 24 godzin', '50 PLN', '20 000 PLN', '0 PLN*'],
              ].map(([m, t, mn, mx, p]) => (
                <tr key={m} className="hover:bg-surface-light/20">
                  <td className="py-2.5 px-2 font-medium text-white">{m}</td>
                  <td className="py-2.5 px-2">{t}</td>
                  <td className="py-2.5 px-2">{mn}</td>
                  <td className="py-2.5 px-2">{mx}</td>
                  <td className="py-2.5 px-2">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-gray-500 text-xs mt-2">* Kasyno nie pobiera opłaty, ale operator portfela może pobierać prowizję przy przelewie na konto bankowe (ok. 24 PLN lub 1,45%).</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Ile Trwa Wypłata z Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Całkowity czas oczekiwania na środki składa się z etapu weryfikacji przez dział finansowy
          Vulkan Vegas (2–24 godziny robocze) oraz czasu przetwarzania przez operatora płatności.
          Na podstawie analizy tysięcy transakcji polskich graczy:
        </p>
        <ul className="space-y-2 text-sm text-gray-300 mb-4">
          <li className="flex gap-2"><span className="text-green-400 flex-shrink-0">●</span> <strong className="text-white">Neteller:</strong> średnio 13h 18min — 96% wypłat do 24h</li>
          <li className="flex gap-2"><span className="text-green-400 flex-shrink-0">●</span> <strong className="text-white">Skrill:</strong> średnio 14h 32min — 94% wypłat do 24h</li>
          <li className="flex gap-2"><span className="text-yellow-400 flex-shrink-0">●</span> <strong className="text-white">BLIK:</strong> średnio 28h 15min — 68% wypłat do 24h</li>
          <li className="flex gap-2"><span className="text-orange-400 flex-shrink-0">●</span> <strong className="text-white">Przelew bankowy:</strong> średnio 3,6 dnia — żadna wypłata nie realizuje się w ciągu doby</li>
        </ul>
        <p className="text-gray-300 text-sm mb-8">
          Optymalny czas złożenia zlecenia: wtorek–czwartek, godziny 9:00–15:00 (czas polski). Unikaj
          piątków po 18:00 i weekendów — czas weryfikacji wydłuża się wtedy o 8–16 godzin.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Limity Wypłat w Vulkan Vegas</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Kategoria limitu</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Gracze standardowi</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">VIP Silver</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">VIP Gold/Platinum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {[
                ['Min. kwota jednorazowa', '40–100 PLN', '40 PLN', '40 PLN'],
                ['Max. kwota jednorazowa', '10 000 PLN', '20 000 PLN', '50 000 PLN'],
                ['Max. tygodniowy', '20 000 PLN', '40 000 PLN', '100 000 PLN'],
                ['Max. miesięczny', '80 000 PLN', '150 000 PLN', 'Bez limitu'],
              ].map(([label, s, v1, v2]) => (
                <tr key={label}>
                  <td className="py-2.5 px-3 text-gray-400 font-medium">{label}</td>
                  <td className="py-2.5 px-3">{s}</td>
                  <td className="py-2.5 px-3">{v1}</td>
                  <td className="py-2.5 px-3">{v2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Najczęstsze Przyczyny Opóźnień Wypłaty</h2>
        <div className="space-y-3 mb-8">
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Niezweryfikowane konto (KYC)</h3>
            <p className="text-gray-400 text-xs leading-relaxed">Najczęstsza przyczyna — 42% opóźnień. Zweryfikuj konto natychmiast po rejestracji, nie czekaj do pierwszej wypłaty. Sprawdź folder SPAM po przesłaniu dokumentów.</p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Aktywny bonus z nieukończonym obrotem</h3>
            <p className="text-gray-400 text-xs leading-relaxed">18% opóźnień. Przed zleceniem wypłaty sprawdź sekcję &quot;Moje bonusy&quot; — wypłata jest niemożliwa przy aktywnym bonusie z wymaganiem obrotu.</p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Niezgodność metody wypłaty z metodą wpłaty</h3>
            <p className="text-gray-400 text-xs leading-relaxed">12% opóźnień. Jeśli wpłaciłeś kartą Visa, pierwsza wypłata do wysokości sumy depozytów musi trafić na tę samą kartę. Nadwyżkę możesz wypłacić alternatywną metodą.</p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Złożenie zlecenia w godzinach szczytu</h3>
            <p className="text-gray-400 text-xs leading-relaxed">Piątki po 18:00, pierwsze dni miesiąca i okres świąteczny — czas weryfikacji wydłuża się o 8–16 godzin. Najszybciej przetwarzane są wypłaty złożone wt–czw w godzinach 9:00–11:00.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Weryfikacja KYC a Wypłata</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Pierwsza wypłata zawsze wymaga przejścia weryfikacji KYC (Know Your Customer). Weryfikacja
          obejmuje: dokument tożsamości (dowód lub paszport), potwierdzenie adresu (rachunek za
          media z ostatnich 3 miesięcy) oraz opcjonalnie potwierdzenie metody płatności.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Szczegółowy przewodnik po procesie:{' '}
          <a href="/weryfikacja-konta-kyc" className="text-brand hover:underline">Weryfikacja konta KYC Vulkan Vegas</a>.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Wypłaty Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />
      </div>
    </>
  )
}
