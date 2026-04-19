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
  title: 'Vulkan Vegas Rejestracja – Oficjalny Przewodnik 2026',
  description: 'Vulkan Vegas rejestracja: pełna instrukcja dla graczy z Polski. Bonus 150% + 50 darmowych spinów bez depozytu. Weryfikacja w 5 minut, legalne kasyno online z licencją Curaçao.',
  alternates: { canonical: '/rejestracja' },
  openGraph: {
    title: 'Vulkan Vegas Rejestracja – Oficjalny Przewodnik 2026',
    description: 'Vulkan Vegas rejestracja: pełna instrukcja dla graczy z Polski. Bonus 150% + 50 darmowych spinów bez depozytu. Weryfikacja w 5 minut, legalne kasyno online z licencją Curaçao.',
    url: 'https://vulkan-vegas-kasyno.com.pl/rejestracja',
    type: 'article',
    locale: 'pl_PL',
  },
}

const registerSteps = [
  { name: 'Wejdź na oficjalną stronę Vulkan Vegas', text: 'Otwórz stronę vulkanvegas.com/pl i kliknij przycisk "Zarejestruj się" w prawym górnym rogu. Upewnij się, że adres URL jest poprawny i widoczny jest certyfikat SSL.' },
  { name: 'Wypełnij formularz (Krok 1)', text: 'Podaj adres e-mail, utwórz silne hasło (min. 8 znaków: wielka litera, cyfra, znak specjalny), wybierz walutę PLN i podaj numer telefonu z prefiksem +48. Wpisz kod promocyjny, jeśli posiadasz.' },
  { name: 'Podaj dane osobowe (Krok 2)', text: 'Uzupełnij imię, nazwisko, datę urodzenia (musisz mieć ukończone 18 lat) oraz pełny adres zamieszkania zgodny z dowodem osobistym. Dane będą weryfikowane podczas wypłaty.' },
  { name: 'Potwierdź adres e-mail', text: 'Sprawdź skrzynkę e-mail (oraz folder SPAM) i kliknij link aktywacyjny wysłany przez Vulkan Vegas w ciągu 72 godzin. Bez potwierdzenia konto pozostaje nieaktywne, a bonus nie zostanie przypisany.' },
  { name: 'Odbierz bonus i zweryfikuj konto', text: 'Po zalogowaniu przejdź do kasjera i dokonaj pierwszego depozytu, aby aktywować bonus powitalny. W tle rozpocznij weryfikację KYC — jest wymagana przed pierwszą wypłatą.' },
]

const faqItems = [
  { q: 'Ile trwa rejestracja w Vulkan Vegas?', a: 'Rejestracja podstawowa zajmuje 2–3 minuty. Wymaga podania e-maila, hasła, numeru telefonu i podstawowych danych. Pełna weryfikacja KYC (wymagana do wypłat) trwa 24–72 godziny po przesłaniu dokumentów.' },
  { q: 'Ile kont mogę mieć w Vulkan Vegas?', a: 'Regulamin Vulkan Vegas pozwala wyłącznie na jedno konto na osobę / adres e-mail / adres IP. Posiadanie wielu kont skutkuje blokadą wszystkich i konfiskatą środków. Kasyno używa fingerprinting i analizy IP do wykrywania duplikatów.' },
  { q: 'Jaką walutę wybrać przy rejestracji w Vulkan Vegas?', a: 'Dla polskich graczy zalecamy wybór PLN — eliminuje to koszty przewalutowania przy wpłatach i wypłatach (2–3% marży). Wybór waluty jest nieodwracalny i nie można go zmienić po założeniu konta.' },
  { q: 'Czy rejestracja w Vulkan Vegas jest bezpieczna?', a: 'Tak, Vulkan Vegas stosuje szyfrowanie SSL 256-bit dla wszystkich danych. Platforma działa na licencji Curaçao eGaming (nr 8048/JAZ). Dane osobowe przetwarzane są zgodnie z protokołami AML i regulaminem operatora.' },
  { q: 'Co zrobić jeśli email z potwierdzeniem nie dotarł?', a: 'Sprawdź folder SPAM. Wiadomości aktywacyjne są wysyłane z adresu noreply@vulkanvegas.com. Jeśli po 15 minutach mail nadal nie dotarł, skontaktuj się z supportem przez czat 24/7 i poproś o ponowne wysłanie linku.' },
  { q: 'Jak usunąć konto w Vulkan Vegas?', a: 'Skontaktuj się ze supportem przez czat na żywo lub e-mail. Wypłać wcześniej wszystkie środki — usunięcie konta jest nieodwracalne. Alternatywą jest samowykluczenie (tymczasowe lub stałe) dostępne w ustawieniach konta.' },
]

export default function Rejestracja() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Rejestracja – Oficjalny Przewodnik 2026', '/rejestracja')} />

      <PageHero
        badge="👑 DOŁĄCZ DO NAS"
        title="Zarejestruj się"
        titleAccent="i Odbierz Bonus"
        description="Załóż konto w 2 minuty i odbierz pakiet powitalny do 500 EUR + 200 darmowych spinów. Tylko dla nowych graczy!"
        image="/images/highroller.png"
        imageAlt="Rejestracja Vulkan Vegas"
        buttons={[
          { label: 'Zarejestruj się', href: AFFILIATE_LINK, variant: 'gold', external: true },
          { label: 'Mam już konto', href: AFFILIATE_LINK, variant: 'outline', external: true },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Rejestracja', url: '/rejestracja' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Rejestracja – Oficjalny Przewodnik 2026
        </h1>

        <div className="bg-brand/10 border border-brand/30 rounded-xl p-5 mb-6">
          <p className="text-gold font-bold text-lg">Bonus powitalny dla nowych graczy:</p>
          <p className="text-gray-200 text-sm mt-1">Do 500 EUR + 200 darmowych spinów na pierwsze depozyty</p>
        </div>

        <CTAButton href={AFFILIATE_LINK} text="Zarejestruj się teraz" className="mb-8" />

        <h2 className="text-2xl font-bold text-white mb-4">Jak Zarejestrować Konto w Vulkan Vegas Krok po Kroku</h2>
        <StepByStep title="Jak zarejestrować konto w Vulkan Vegas" steps={registerSteps} />

        <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas Sign Up: Wersja Angielska</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Vulkan Vegas casino sign up (ang. rejestracja) to identyczny proces niezależnie od języka strony.
          Kliknij &quot;Sign Up&quot; lub &quot;Register&quot; w prawym górnym rogu i wypełnij formularz.
          Kasyno jest dostępne zarówno po polsku, jak i po angielsku.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Bonus za Rejestrację w Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Po rejestracji możesz odebrać bonus powitalny przy pierwszym depozycie. Szczegóły wszystkich
          dostępnych bonusów znajdziesz na stronie:{' '}
          <a href="/bonus" className="text-brand hover:underline">Wszystkie bonusy Vulkan Vegas</a>.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Przed wpłatą depozytu sprawdź aktualny kod promocyjny:{' '}
          <a href="/kod-promocyjny" className="text-brand hover:underline">Aktualny kod bonusowy</a>.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Weryfikacja Konta po Rejestracji</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Po rejestracji wymagana jest weryfikacja tożsamości (KYC) przed pierwszą wypłatą. Proces trwa
          24-72 godziny. Szczegóły:{' '}
          <a href="/weryfikacja-konta-kyc" className="text-brand hover:underline">Weryfikacja konta KYC</a>.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Jak Usunąć Konto w Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Aby usunąć konto w Vulkan Vegas, skontaktuj się ze supportem przez czat na żywo lub email
          kasyna. Wypłać wcześniej wszystkie środki. Usunięcie konta jest nieodwracalne — utracisz
          dostęp do historii transakcji i bonusów.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Częste Problemy z Rejestracją</h2>
        <div className="space-y-3 mb-8">
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Email już istnieje</h3>
            <p className="text-gray-400 text-xs">Masz już konto z tym adresem. Użyj opcji &quot;Zapomniałem hasła&quot; lub zaloguj się bezpośrednio.</p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Kraj nie jest obsługiwany</h3>
            <p className="text-gray-400 text-xs">Vulkan Vegas nie przyjmuje graczy z niektórych krajów. Polska jest obsługiwana, ale z ograniczeniami prawnymi.</p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-1 text-sm">Błąd weryfikacji wieku</h3>
            <p className="text-gray-400 text-xs">Musisz mieć ukończone 18 lat. Kasyno weryfikuje wiek podczas procesu KYC.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Rejestracja w Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />

        <div className="mt-10 text-center">
          <CTAButton href={AFFILIATE_LINK} text="Załóż konto w Vulkan Vegas" />
        </div>
      </div>
    </>
  )
}
