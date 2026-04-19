import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import FAQAccordion from '@/components/FAQAccordion'
import StepByStep from '@/components/StepByStep'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE, AFFILIATE_LINK } from '@/lib/constants'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Weryfikacja – Instrukcja KYC Polska 2026',
  description: 'Jak przebiega weryfikacja konta w Vulkan Vegas? Pełna instrukcja KYC dla graczy z Polski: wymagane dokumenty, czas oczekiwania, błędy do uniknięcia i proces zatwierdzania wypłat.',
  alternates: { canonical: '/weryfikacja-konta-kyc' },
  openGraph: {
    title: 'Vulkan Vegas Weryfikacja – Instrukcja KYC Polska 2026',
    description: 'Jak przebiega weryfikacja konta w Vulkan Vegas? Pełna instrukcja KYC dla graczy z Polski: wymagane dokumenty, czas oczekiwania, błędy do uniknięcia i proces zatwierdzania wypłat.',
    url: 'https://vulkan-vegas-kasyno.com.pl/weryfikacja-konta-kyc',
    type: 'article',
    locale: 'pl_PL',
  },
}

const kycSteps = [
  { name: 'Zaloguj się i przejdź do sekcji Weryfikacja', text: 'Po zalogowaniu kliknij ikonę profilu w prawym górnym rogu i wybierz "Ustawienia konta" lub "Moje dokumenty". System przekieruje do sekcji weryfikacji KYC.' },
  { name: 'Prześlij dokument tożsamości', text: 'Zrób zdjęcie dowodu osobistego lub paszportu (obie strony). Dokument musi być ważny, czytelny, w formacie JPG/PNG, min. rozdzielczość 1200x800 pikseli, rozmiar 2–5 MB. Wszystkie cztery rogi muszą być widoczne.' },
  { name: 'Potwierdź adres zamieszkania', text: 'Prześlij rachunek za energię elektryczną lub gaz (niestarszy niż 3 miesiące), wyciąg bankowy lub umowę najmu zawierającą Twoje imię i adres.' },
  { name: 'Zweryfikuj metodę płatności (opcjonalnie)', text: 'Prześlij zdjęcie karty (zasłoń cyfry 7–12) lub zrzut ekranu z konta e-portfela. Wymagane przy dużych wypłatach lub gdy używasz nowej metody płatności.' },
  { name: 'Oczekuj na potwierdzenie', text: 'Dział bezpieczeństwa Vulkan Vegas weryfikuje dokumenty w ciągu 24–72 godzin roboczych. Sprawdź folder SPAM — komunikaty od kasyna wysyłane są z adresu verification@vulkanvegas.com.' },
]

const faqItems = [
  { q: 'Ile trwa weryfikacja KYC w Vulkan Vegas?', a: 'Standardowa weryfikacja KYC trwa 24–72 godziny robocze. System OCR automatycznie odczytuje dane z dokumentów, co przyspiesza proces o ok. 40%. W weekendy lub przy dużym obciążeniu czas może się wydłużyć do 5 dni.' },
  { q: 'Czy mogę grać bez weryfikacji KYC?', a: 'Tak, możesz grać i wpłacać środki bez weryfikacji. KYC jest wymagane wyłącznie przed pierwszą wypłatą. Zalecamy jednak weryfikację bezpośrednio po rejestracji, aby nie czekać, gdy będziesz chciał wypłacić wygraną.' },
  { q: 'Jakie dokumenty są wymagane do KYC?', a: 'Wymagane: (1) dokument tożsamości — dowód osobisty lub paszport (obie strony), (2) potwierdzenie adresu — rachunek za media lub wyciąg bankowy z ostatnich 3 miesięcy, (3) opcjonalnie: selfie z dokumentem przy twarzy (selfie verification) przy wyższych wypłatach.' },
  { q: 'Dlaczego moja weryfikacja została odrzucona?', a: 'Najczęstsze przyczyny: nieczytelne zdjęcia (rozmazane, ciemne, przycięte rogi), dokument wygasły lub wygasający w ciągu 30 dni, niezgodność danych z kontem gracyna, potwierdzenie adresu starsze niż 90 dni. Sprawdź szczegółowy powód odrzucenia w mailu z adresu verification@vulkanvegas.com.' },
  { q: 'Czy Vulkan Vegas może zażądać dodatkowych dokumentów?', a: 'Tak. Przy wypłatach powyżej 50 000 PLN w ciągu 30 dni kasyno może poprosić o dokumenty potwierdzające źródło dochodu (np. zaświadczenie o zatrudnieniu, zeznanie podatkowe). Jest to standardowa procedura AML i nie oznacza problemów z kontem.' },
  { q: 'Jak przyspieszyć weryfikację KYC?', a: 'Rób zdjęcia w dobrym oświetleniu dziennym, używając rozdzielczości min. 1200x800. Upewnij się, że dane na dokumentach są identyczne z danymi podanymi przy rejestracji. Po przesłaniu możesz napisać na live chat, że dokumenty zostały wysłane — czasem przyspiesza to kolejkę.' },
]

export default function WeryfikacjaKycPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Weryfikacja – Instrukcja KYC Polska 2026', '/weryfikacja-konta-kyc')} />

      <PageHero
        badge="🔒 BEZPIECZEŃSTWO"
        title="Weryfikacja"
        titleAccent="Konta KYC"
        description="Szybka weryfikacja tożsamości w 24–72h. Dowiedz się jakie dokumenty przesłać i jak przyspieszyć proces, by błyskawicznie wypłacić wygrane."
        image="/images/chest-gold.png"
        imageAlt="Weryfikacja KYC Vulkan Vegas"
        buttons={[
          { label: 'Zweryfikuj konto', href: AFFILIATE_LINK, variant: 'gold', external: true },
          { label: 'Jak wypłacić?', href: AFFILIATE_LINK, variant: 'outline' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Weryfikacja konta KYC', url: '/weryfikacja-konta-kyc' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Anna Wiśniewska" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Weryfikacja konta Vulkan Vegas – instrukcja krok po kroku 2026
        </h1>

        <p className="text-gray-300 leading-relaxed mb-8">
          Weryfikacja tożsamości w Vulkan Vegas to obowiązkowy proces dla graczy w Polsce, który zabezpiecza
          Twoje konto i umożliwia bezproblemowe wypłaty wygranych. Dowiedz się, jakie dokumenty przygotować,
          jak uniknąć błędów i ile trwa cały proces weryfikacji KYC w praktyce.
        </p>

        <div className="bg-surface-card border border-blue-500/20 rounded-xl p-5 mb-8">
          <p className="text-blue-400 font-bold mb-2">Co to jest KYC?</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            KYC (Know Your Customer) to procedura weryfikacji tożsamości gracza. Kasyna online są
            zobowiązane do jej przeprowadzenia na mocy regulacji finansowych i przepisów przeciwko
            praniu pieniędzy (AML). Celem jest potwierdzenie, że jesteś osobą, za którą się podajesz,
            i że masz ukończone 18 lat.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Weryfikacja KYC w Vulkan Vegas Krok po Kroku</h2>
        <StepByStep title="Weryfikacja konta KYC w Vulkan Vegas" steps={kycSteps} />

        <h2 className="text-2xl font-bold text-white mb-4">Wymagane Dokumenty KYC</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              title: 'Dokument tożsamości',
              items: ['Dowód osobisty (obie strony)', 'Paszport (strona z danymi)', 'Prawo jazdy (niektóre kraje)'],
              note: 'Dokument musi być ważny i czytelny',
            },
            {
              title: 'Potwierdzenie adresu',
              items: ['Rachunek za prąd/gaz/wodę', 'Wyciąg bankowy', 'Oficjalny list urzędowy'],
              note: 'Nie starszy niż 3 miesiące',
            },
            {
              title: 'Metoda płatności',
              items: ['Karta (zasłoń cyfry 7-12)', 'Zrzut ekranu e-portfela', 'Potwierdzenie konta bankowego'],
              note: 'Musi pasować do metody wpłaty',
            },
          ].map((doc) => (
            <div key={doc.title} className="bg-surface-card border border-white/10 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3 text-sm">{doc.title}</h3>
              <ul className="space-y-1 mb-3">
                {doc.items.map((item) => (
                  <li key={item} className="text-gray-300 text-xs flex gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs border-t border-white/5 pt-2">{doc.note}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Ile Trwa Weryfikacja KYC</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Etap weryfikacji</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Czas oczekiwania</th>
                <th className="text-left py-2 px-3 text-gray-400 font-medium">Uwagi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {[
                ['Przesłanie dokumentów', 'Natychmiast', 'Sprawdź jakość zdjęć przed wysyłką'],
                ['Wstępna weryfikacja automatyczna', 'Do 1 godziny', 'System sprawdza format i czytelność'],
                ['Weryfikacja ręczna przez pracownika', '24-72 godziny', 'Dni robocze; weekendy mogą trwać dłużej'],
                ['Weryfikacja zaawansowana (duże wypłaty)', '2-5 dni roboczych', 'Przy wypłatach powyżej 5000 EUR'],
                ['Odwołanie od odmowy', '3-7 dni', 'Prześlij nowe dokumenty z wyjaśnieniem'],
              ].map(([stage, time, note]) => (
                <tr key={stage} className="hover:bg-surface-light/20">
                  <td className="py-2.5 px-3 font-medium text-white">{stage}</td>
                  <td className="py-2.5 px-3">{time}</td>
                  <td className="py-2.5 px-3 text-gray-400 text-xs">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Jak Przyspieszyć Weryfikację KYC</h2>
        <div className="space-y-3 mb-8">
          {[
            { tip: 'Wyraźne zdjęcia od razu', desc: 'Rób zdjęcia w dobrym oświetleniu. Unikaj cieni, odblasków i rozmycia. Wszystkie narożniki dokumentu muszą być widoczne.' },
            { tip: 'Zgodność danych', desc: 'Upewnij się, że imię, nazwisko i adres na dokumentach są identyczne jak dane wpisane przy rejestracji. Rozbieżności powodują odrzucenie.' },
            { tip: 'Kontakt z supportem', desc: 'Po przesłaniu dokumentów możesz napisać na live chat, że dokumenty zostały wysłane. Czasem przyspiesza to kolejkę weryfikacji.' },
            { tip: 'Weryfikuj wcześnie', desc: 'Nie czekaj z weryfikacją do momentu, gdy chcesz wypłacić dużą wygraną. Zainicjuj KYC po pierwszej wpłacie.' },
          ].map((item) => (
            <div key={item.tip} className="bg-surface-card border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-medium mb-1 text-sm">{item.tip}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Problemy z Weryfikacją KYC</h2>
        <div className="space-y-3 mb-8">
          <div className="bg-surface-card border border-red-500/20 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Weryfikacja odrzucona</h3>
            <p className="text-gray-400 text-xs leading-relaxed">Sprawdź email z wyjaśnieniem powodu odrzucenia. Najczęściej wystarczy przesłać lepszą jakość zdjęcia lub inny dokument. Skontaktuj się z supportem przez live chat.</p>
          </div>
          <div className="bg-surface-card border border-yellow-500/20 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Brak odpowiedzi po 5 dniach</h3>
            <p className="text-gray-400 text-xs leading-relaxed">Napisz na live chat podając datę przesłania dokumentów. Możesz też wysłać email na adres supportu z numerem swojego konta.</p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Prośba o dodatkowe dokumenty</h3>
            <p className="text-gray-400 text-xs leading-relaxed">Przy dużych wypłatach lub nieoczekiwanych wygranych kasyno może prosić o dodatkowe dokumenty (np. źródło dochodu). Jest to standardowa procedura AML i nie oznacza problemów z kontem.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Weryfikacja KYC Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />
      </div>
    </>
  )
}
