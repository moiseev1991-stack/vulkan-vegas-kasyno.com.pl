import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE, RESPONSIBLE_GAMING_PHONE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Odpowiedzialna Gra w Vulkan Vegas 2026: Pomoc dla Polaków',
  description: 'Odpowiedzialna gra w Vulkan Vegas dla polskich graczy 2026. Narzędzia samowykluczenia, limity wpłat oraz kontakt do organizacji pomocowych takich jak UOKiK i telefon zaufania.',
  alternates: { canonical: '/odpowiedzialna-gra' },
  openGraph: {
    title: 'Odpowiedzialna Gra w Vulkan Vegas 2026: Pomoc dla Polaków',
    description: 'Odpowiedzialna gra w Vulkan Vegas dla polskich graczy 2026. Narzędzia samowykluczenia, limity wpłat oraz kontakt do organizacji pomocowych takich jak UOKiK i telefon zaufania.',
    url: 'https://vulkan-vegas-kasyno.com.pl/odpowiedzialna-gra',
    type: 'article',
    locale: 'pl_PL',
  },
}

export default function OdpowiedzialdnaGraPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Odpowiedzialna Gra w Vulkan Vegas 2026: Pomoc dla Polaków', '/odpowiedzialna-gra')} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Odpowiedzialna gra', url: '/odpowiedzialna-gra' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <div className="bg-red-950/40 border border-red-700/40 rounded-xl p-5 mb-8">
          <p className="text-red-300 font-bold text-lg mb-1">Ważne ostrzeżenie</p>
          <p className="text-red-200/80 text-sm leading-relaxed">
            Hazard niesie ze sobą ryzyko uzależnienia i poważnych strat finansowych.
            Gra jest dozwolona wyłącznie dla pełnoletnich (18+). Jeśli czujesz,
            że tracisz kontrolę nad grą, zadzwoń na bezpłatny telefon zaufania:{' '}
            <strong>{RESPONSIBLE_GAMING_PHONE}</strong> — czynny całą dobę.
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Odpowiedzialna Gra w Vulkan Vegas: Jak Grać Bezpiecznie w Polsce
        </h1>

        <h2 className="text-2xl font-bold text-white mb-4">Czym jest odpowiedzialna gra</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Odpowiedzialna gra oznacza traktowanie hazardu wyłącznie jako jednej z form rozrywki —
          podobnie jak kino czy sport. Kluczowe jest wyznaczenie sobie jasnych granic:
          budżetu, czasu sesji i zasady, że gra zawsze odbywa się z własnych środków, nigdy z pożyczonych.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Statystycznie problem z hazardem dotyka około 1–3% graczy. Wczesne rozpoznanie sygnałów
          ostrzegawczych i skorzystanie z dostępnych narzędzi może zapobiec eskalacji problemu.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Kasyno Vulkan Vegas oferuje kilka praktycznych instrumentów pomocowych — opisujemy je
          poniżej. Korzystaj z nich proaktywnie, zanim pojawią się trudności, a nie dopiero gdy
          stracisz kontrolę.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Zasady bezpiecznej gry</h2>
        <div className="bg-surface-card border border-white/10 rounded-xl p-5 mb-8">
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              'Ustal budżet na grę z góry — traktuj go jak bilet do kina, nie jak inwestycję',
              'Graj wyłącznie z wolnych środków — nigdy pieniędzmi przeznaczonymi na rachunki czy jedzenie',
              'Wyznacz limit czasu sesji i przestrzegaj go, nawet gdy wygrywasz',
              'Nie próbuj odegrać strat — każda sesja jest niezależna od poprzedniej',
              'Rób regularne przerwy — co godzinę wstań od ekranu na minimum 15 minut',
              'Nie graj pod wpływem alkoholu, leków lub gdy jesteś zmęczony lub zdenerwowany',
              'Traktuj wygraną jako przyjemny bonus, a nie cel sam w sobie',
            ].map((tip, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-400 flex-shrink-0">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Jak rozpoznać problem hazardowy</h2>
        <div className="bg-surface-card border border-white/10 rounded-xl p-5 mb-8">
          <p className="text-white font-semibold mb-3">Niepokojące sygnały — kiedy gra przestaje być rozrywką:</p>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              'Regularnie przekraczasz zaplanowany budżet lub czas gry',
              'Myślisz o hazardzie przez większość dnia — w pracy, w domu, przed snem',
              'Pożyczasz pieniądze lub sprzedajesz majątek, żeby sfinansować grę',
              'Ukrywasz fakt grania przed bliskimi lub kłamiesz o wydatkach',
              'Po przegranej odczuwasz przymus natychmiastowego „odgrania się"',
              'Zaniedbane obowiązki zawodowe, rodzinne lub zdrowotne z powodu czasu spędzanego na grze',
              'Odczuwasz niepokój, drażliwość lub smutek, gdy nie możesz grać',
              'Wielokrotnie próbowałeś ograniczyć grę, ale bez powodzenia',
              'Gra jest dla Ciebie sposobem na ucieczkę od problemów lub złego nastroju',
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-red-400 flex-shrink-0">⚠</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 text-xs mt-4">
            Rozpoznajesz się w 3 lub więcej punktach? To sygnał do działania — skontaktuj się z telefonem zaufania lub specjalistą.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Narzędzia ochronne w Vulkan Vegas</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-surface-card border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Limity depozytów</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              W ustawieniach konta możesz określić maksymalną kwotę, jaką chcesz wpłacić
              dziennie, tygodniowo lub miesięcznie. Zmiana limitu na wyższy jest możliwa
              dopiero po upływie 24 godzin od złożenia wniosku — to czas buforowy chroniący
              przed impulsywnymi decyzjami.
            </p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Samowykluczenie (Self-exclusion)</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Możesz zablokować dostęp do swojego konta na wybrany okres: tydzień, miesiąc,
              6 miesięcy, rok lub bezterminowo. W trakcie samowykluczenia kasyno nie może
              reaktywować konta nawet na Twój wniosek — ochrona jest bezwzględna.
            </p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Przerwa (Cooling-off period)</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Krótka pauza od 24 godzin do kilku tygodni, podczas której konto pozostaje
              aktywne, ale blokowane są depozyty i gra. Przydatne gdy poczujesz, że
              potrzebujesz oddechu, ale nie chcesz zamykać konta na dłużej.
            </p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Limity czasu sesji</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ustaw maksymalny czas ciągłej gry. Po jego upływie otrzymasz wyraźne
              powiadomienie lub zostaniesz automatycznie wylogowany — co pomaga
              zachować świadomość upływającego czasu.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Telefon zaufania — bezpłatna pomoc 24/7</h2>
        <div className="bg-green-950/30 border border-green-800/40 rounded-xl p-5 mb-8">
          <p className="text-green-300 font-bold text-2xl mb-2">{RESPONSIBLE_GAMING_PHONE}</p>
          <p className="text-green-200/80 text-sm leading-relaxed">
            Bezpłatna, anonimowa linia wsparcia dla osób borykających się z problemem hazardowym
            oraz ich bliskich. Czynna przez całą dobę, 7 dni w tygodniu, 365 dni w roku.
            Rozmowa nie zostanie zarejestrowana ani nie pojawi się na rachunku telefonicznym
            (połączenie bezpłatne).
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Organizacje pomocowe w Polsce</h2>
        <div className="space-y-3 mb-8">
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <a href="https://www.uokik.gov.pl/" rel="noopener noreferrer" target="_blank" className="text-brand font-semibold hover:underline">
              UOKiK — Urząd Ochrony Konkurencji i Konsumentów
            </a>
            <p className="text-gray-400 text-sm mt-1">
              Przyjmuje skargi na nieuczciwych operatorów hazardowych, udziela informacji
              o prawach konsumenta w sporach z kasynami online.
            </p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <a href="https://www.gry-hazardowe.mf.gov.pl/" rel="noopener noreferrer" target="_blank" className="text-brand font-semibold hover:underline">
              Ministerstwo Finansów RP — Gry Hazardowe
            </a>
            <p className="text-gray-400 text-sm mt-1">
              Oficjalny rejestr kasyn legalnie działających w Polsce, informacje o regulacjach
              hazardowych i zgłaszaniu nielegalnych operatorów.
            </p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <p className="text-white font-semibold">Anonimowi Hazardziści (AH)</p>
            <p className="text-gray-400 text-sm mt-1">
              Program wsparcia oparty na metodzie 12 kroków, z grupami spotkaniowymi
              w kilkudziesięciu miastach w Polsce. Bezpłatne i anonimowe.
              Strona: <span className="text-brand">anonimowihazardzisci.pl</span>
            </p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <p className="text-white font-semibold">Centrum Wsparcia dla Dorosłych w Kryzysie Emocjonalnym</p>
            <p className="text-gray-400 text-sm mt-1">
              Telefon: 116 123 — bezpłatna linia Ministerstwa Zdrowia dla osób
              w trudnych sytuacjach życiowych, w tym związanych z uzależnieniami.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Ochrona małoletnich (18+)</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Gra w kasynie Vulkan Vegas jest dostępna wyłącznie dla osób, które ukończyły
          18. rok życia. Kasyno stosuje obowiązkową weryfikację wieku w procesie KYC
          — każdy gracz musi potwierdzić swoją tożsamość dokumentem przed pierwszą wypłatą.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Jeżeli podejrzewasz, że osoba niepełnoletnia korzysta z kasyna online,
          zgłoś to przez formularz kontaktowy kasyna lub zawiadom organy ścigania.
          Możesz też skorzystać z oprogramowania kontroli rodzicielskiej
          (np. Net Nanny, Gamban), które blokuje dostęp do serwisów hazardowych na poziomie urządzenia.
        </p>
      </div>
    </>
  )
}
