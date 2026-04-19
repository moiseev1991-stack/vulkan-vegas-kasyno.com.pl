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
            Hazard wiąże się z ryzykiem uzależnienia i strat finansowych. Gra dozwolona wyłącznie dla osób
            pełnoletnich (18+). Jeśli masz problem z kontrolowaniem gry, zadzwoń na telefon zaufania:{' '}
            <strong>{RESPONSIBLE_GAMING_PHONE}</strong>
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Odpowiedzialna Gra w Vulkan Vegas: Bezpieczny Hazard w Polsce 2026
        </h1>

        <h2 className="text-2xl font-bold text-white mb-4">Czym jest odpowiedzialna gra</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Odpowiedzialna gra to podejście do hazardu, które traktuje go wyłącznie jako formę rozrywki,
          a nie sposób na zarobek. Oznacza grę w ramach zaplanowanego budżetu, z ustalonymi limitami
          czasu i kwot, bez pożyczania pieniędzy na grę.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Kasyno Vulkan Vegas oferuje szereg narzędzi, które pomagają graczom kontrolować swoje nawyki
          hazardowe. Korzystaj z nich proaktywnie — nie czekaj na pojawienie się problemu.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Jak rozpoznać problem</h2>
        <div className="bg-surface-card border border-white/10 rounded-xl p-5 mb-8">
          <p className="text-white font-semibold mb-3">Sygnały alarmowe — kiedy gra staje się problemem:</p>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              'Grasz więcej niż planowałeś i trudno Ci przestać',
              'Myślisz o hazardzie przez cały dzień',
              'Pożyczasz pieniądze lub sprzedajesz rzeczy, żeby grać',
              'Ukrywasz fakt grania przed rodziną lub znajomymi',
              'Próbujesz odegrać się po przegranej',
              'Zaniedbane obowiązki zawodowe lub rodzinne z powodu gry',
              'Czujesz niepokój lub rozdrażnienie, gdy nie grasz',
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-red-400 flex-shrink-0">⚠</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Narzędzia Vulkan Vegas</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-surface-card border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Limity depozytów</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ustaw dzienny, tygodniowy lub miesięczny limit wpłat w panelu gracza. Po ustawieniu limitu
              nie możesz go zwiększyć przez 24h — daje to czas do namysłu.
            </p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Samowykluczenie (Self-exclusion)</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Możesz zablokować dostęp do swojego konta na określony czas (tydzień, miesiąc, rok) lub
              bezterminowo. W trakcie samowykluczenia kasyno nie może reaktywować konta na Twój wniosek.
            </p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Cooling-off period</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Krótka przerwa od 24h do kilku tygodni. W tym czasie konto jest aktywne, ale nie możesz
              dokonywać depozytów ani grać. Idealne gdy czujesz, że potrzebujesz oddechu.
            </p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Limity czasu gry</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ustaw limit sesji — po określonym czasie gry otrzymasz powiadomienie lub zostaniesz automatycznie
              wylogowany.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Telefon zaufania</h2>
        <div className="bg-green-950/30 border border-green-800/40 rounded-xl p-5 mb-8">
          <p className="text-green-300 font-bold text-xl mb-1">{RESPONSIBLE_GAMING_PHONE}</p>
          <p className="text-green-200/80 text-sm">
            Bezpłatna linia wsparcia dla osób uzależnionych od hazardu i ich rodzin. Czynna całą dobę, 7 dni w tygodniu.
            Rozmowy są anonimowe i bezpłatne.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Organizacje pomocowe w Polsce</h2>
        <div className="space-y-3 mb-8">
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <a href="https://www.uokik.gov.pl/" rel="noopener noreferrer" target="_blank" className="text-brand font-semibold hover:underline">
              UOKiK — Urząd Ochrony Konkurencji i Konsumentów
            </a>
            <p className="text-gray-400 text-sm mt-1">Informacje o ochronie konsumentów, skargi na nieuczciwych operatorów.</p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <a href="https://www.gry-hazardowe.mf.gov.pl/" rel="noopener noreferrer" target="_blank" className="text-brand font-semibold hover:underline">
              Ministerstwo Finansów — Gry Hazardowe
            </a>
            <p className="text-gray-400 text-sm mt-1">Oficjalna strona o regulacjach hazardowych w Polsce, rejestr kasyn legalnych.</p>
          </div>
          <div className="bg-surface-card border border-white/10 rounded-lg p-4">
            <p className="text-white font-semibold">Anonimowi Hazardziści</p>
            <p className="text-gray-400 text-sm mt-1">Program wsparcia oparty na 12 krokach, grupy wsparcia w całej Polsce. Strona: anonimowihazardzisci.pl</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">18+ ograniczenia wiekowe</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Gra w kasynie Vulkan Vegas dozwolona jest wyłącznie dla osób, które ukończyły 18. rok życia.
          Kasyno stosuje weryfikację wieku podczas procesu KYC. Jeśli wiesz o osobie niepełnoletniej
          grającej online, zgłoś to przez formularz kasyna lub bezpośrednio na policję.
        </p>
      </div>
    </>
  )
}
