import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import BreadcrumbList from '@/components/BreadcrumbList'
import FAQAccordion from '@/components/FAQAccordion'
import StepByStep from '@/components/StepByStep'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { AFFILIATE_LINK, PUBLISHED_DATE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Logowanie 2026: Zaloguj się do Konta Casino PL',
  description: 'Vulkan Vegas logowanie 2026 dla graczy z Polski. Zaloguj się do konta Vulkan Vegas casino, odzyskaj hasło oraz rozwiąż problem z logowaniem do kasyna online krok po kroku.',
  alternates: { canonical: '/logowanie' },
  openGraph: {
    title: 'Vulkan Vegas Logowanie 2026: Zaloguj się do Konta Casino PL',
    description: 'Vulkan Vegas logowanie 2026 dla graczy z Polski. Zaloguj się do konta Vulkan Vegas casino, odzyskaj hasło oraz rozwiąż problem z logowaniem do kasyna online krok po kroku.',
    url: 'https://vulkan-vegas-kasyno.com.pl/logowanie',
    type: 'article',
    locale: 'pl_PL',
  },
}

const loginSteps = [
  { name: 'Przejdź na stronę Vulkan Vegas', text: 'Kliknij przycisk "Zaloguj się" w prawym górnym rogu strony głównej kasyna.' },
  { name: 'Wpisz adres email', text: 'Wprowadź adres email użyty podczas rejestracji konta.' },
  { name: 'Wpisz hasło', text: 'Podaj hasło do swojego konta. Upewnij się, że Caps Lock jest wyłączony.' },
  { name: 'Kliknij "Zaloguj się"', text: 'Naciśnij przycisk logowania. Jeśli dane są poprawne, zostaniesz przekierowany do panelu gracza.' },
  { name: 'Odbierz bonus (opcjonalnie)', text: 'Po zalogowaniu sprawdź skrzynkę promocji — możesz mieć dostępny cashback lub inne bonusy.' },
]

const recoverySteps = [
  { name: 'Kliknij "Zapomniałem hasła"', text: 'Na stronie logowania znajdź i kliknij link "Zapomniałem hasła" pod formularzem.' },
  { name: 'Wpisz adres email', text: 'Podaj adres email przypisany do Twojego konta Vulkan Vegas.' },
  { name: 'Sprawdź skrzynkę email', text: 'Na podany adres email zostanie wysłany link do zresetowania hasła. Sprawdź też folder SPAM.' },
  { name: 'Ustaw nowe hasło', text: 'Kliknij link z emaila i ustaw nowe, bezpieczne hasło (min. 8 znaków, litera + cyfra).' },
]

const faqItems = [
  { q: 'Nie mogę zalogować się do Vulkan Vegas — co robić?', a: 'Sprawdź poprawność adresu email i hasła. Upewnij się, że Caps Lock jest wyłączony. Jeśli problem nadal występuje, skorzystaj z opcji resetowania hasła lub skontaktuj się ze supportem przez czat.' },
  { q: 'Jak zalogować się przez aplikację mobilną?', a: 'Pobierz aplikację Vulkan Vegas na Android (APK ze strony kasyna) lub skorzystaj z przeglądarki mobilnej na iOS. Użyj tych samych danych logowania co na stronie.' },
  { q: 'Dlaczego moje konto Vulkan Vegas jest zablokowane?', a: 'Konto może być zablokowane z powodu naruszenia regulaminu, prośby o samowykluczenie lub braku weryfikacji KYC. Skontaktuj się z supportem 24/7 przez czat lub email.' },
  { q: 'Czy mogę zalogować się do Vulkan Vegas przez Facebook lub Google?', a: 'Vulkan Vegas oferuje logowanie przez email i hasło. Logowanie przez media społecznościowe może być dostępne w zależności od aktualnej wersji platformy.' },
  { q: 'Ile trwa blokada konta po błędnym haśle?', a: 'Po kilku nieudanych próbach logowania konto może zostać tymczasowo zablokowane. Zazwyczaj blokada trwa 15-30 minut. Możesz też od razu zresetować hasło.' },
  { q: 'Czy weryfikacja dwuetapowa (2FA) jest dostępna w Vulkan Vegas?', a: 'Vulkan Vegas może oferować dodatkowe zabezpieczenia logowania. Sprawdź ustawienia bezpieczeństwa w panelu gracza.' },
]

export default function LogowaniePage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Logowanie 2026: Zaloguj się do Konta Casino PL', '/logowanie')} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Logowanie', url: '/logowanie' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Logowanie 2026: Zaloguj się do Konta Casino Online
        </h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          Logowanie do Vulkan Vegas jest szybkie i proste. Poniżej znajdziesz instrukcję krok po kroku,
          jak zalogować się do konta, odzyskać hasło oraz rozwiązać typowe problemy z dostępem.
        </p>

        <div className="mb-8 flex flex-col sm:flex-row gap-3">
          <CTAButton href={AFFILIATE_LINK} text="Przejdź do logowania" className="text-center" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Jak się Zalogować do Vulkan Vegas Krok po Kroku</h2>
        <StepByStep title="Jak zalogować się do Vulkan Vegas" steps={loginSteps} />

        <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas Login: Logowanie przez Email</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Podstawowa metoda logowania do Vulkan Vegas to email i hasło. Adres email musi być taki sam jak
          użyty przy rejestracji konta. Hasło powinno zawierać minimum 8 znaków, w tym wielką literę i cyfrę.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          W przypadku problemów z logowaniem przez przeglądarkę, wyczyść pamięć podręczną (cache) i pliki
          cookies, lub spróbuj w trybie incognito.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Logowanie do Vulkan Vegas przez Aplikację Mobilną</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Aplikacja mobilna Vulkan Vegas umożliwia logowanie tymi samymi danymi co strona internetowa.
          Po zalogowaniu masz dostęp do pełnej oferty gier, wypłat i bonusów.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Szczegóły dotyczące aplikacji mobilnej:{' '}
          <a href="/aplikacja" className="text-brand hover:underline">Vulkan Vegas aplikacja mobilna</a>.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Problem z Logowaniem do Vulkan Vegas</h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Zapomniane hasło</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jeśli zapomniałeś hasła, skorzystaj z opcji resetowania. Poniżej znajdziesz instrukcję krok po kroku.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Konto zablokowane</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Konto może zostać zablokowane po wielokrotnych nieudanych próbach logowania lub z powodu
              naruszenia regulaminu. Skontaktuj się ze supportem przez czat 24/7.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Błędny email</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Upewnij się, że wpisujesz adres email użyty przy rejestracji. Sprawdź, czy nie ma literówek.
              Jeśli masz kilka adresów email, spróbuj każdego z nich.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Weryfikacja dwuetapowa nie działa</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jeśli 2FA nie działa, sprawdź czas na urządzeniu (musi być zsynchronizowany), lub skontaktuj się
              ze supportem w celu ręcznego wyłączenia 2FA.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Jak Odzyskać Hasło w Vulkan Vegas</h2>
        <StepByStep title="Jak odzyskać hasło w Vulkan Vegas" steps={recoverySteps} />

        <h2 className="text-2xl font-bold text-white mb-4">Bezpieczne Logowanie do Kasyna Vulkan Vegas</h2>
        <ul className="space-y-2 mb-8 text-gray-300 text-sm">
          <li className="flex gap-2"><span className="text-green-400">✓</span> Używaj unikalnego hasła do każdego konta</li>
          <li className="flex gap-2"><span className="text-green-400">✓</span> Włącz weryfikację dwuetapową (2FA) jeśli dostępna</li>
          <li className="flex gap-2"><span className="text-green-400">✓</span> Nie zapisuj hasła w publicznych komputerach</li>
          <li className="flex gap-2"><span className="text-green-400">✓</span> Zawsze wyloguj się po zakończeniu sesji</li>
          <li className="flex gap-2"><span className="text-brand">✗</span> Nie udostępniaj danych logowania innym osobom</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Logowanie Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />

        <div className="mt-10 text-center">
          <CTAButton href={AFFILIATE_LINK} text="Zaloguj się do Vulkan Vegas" />
        </div>
      </div>
    </>
  )
}
