import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Metodologia Recenzji Kasyn Online: Jak Oceniamy Vulkan Vegas',
  description: 'Metodologia recenzji kasyn online na Vulkan Vegas Polska. Poznaj kryteria oceny: licencja, bonusy, wypłaty, wsparcie klienta, gry oraz bezpieczeństwo polskich graczy 2026.',
  alternates: { canonical: '/metodologia-recenzji' },
  openGraph: {
    title: 'Metodologia Recenzji Kasyn Online: Jak Oceniamy Vulkan Vegas',
    description: 'Metodologia recenzji kasyn online na Vulkan Vegas Polska. Poznaj kryteria oceny: licencja, bonusy, wypłaty, wsparcie klienta, gry oraz bezpieczeństwo polskich graczy 2026.',
    url: 'https://vulkan-vegas-kasyno.com.pl/metodologia-recenzji',
    type: 'article',
    locale: 'pl_PL',
  },
}

const criteria = [
  { id: '01', name: 'Licencja i regulacja', weight: 20, desc: 'Weryfikujemy ważność i reputację licencji hazardowej. Sprawdzamy, czy kasyno podlega nadzorowi uznanego organu regulacyjnego (Malta Gaming Authority, UK Gambling Commission, Curaçao eGaming).' },
  { id: '02', name: 'Bezpieczeństwo oraz szyfrowanie', weight: 15, desc: 'Testujemy szyfrowanie SSL, politykę ochrony danych i zabezpieczenia konta gracza. Sprawdzamy certyfikaty bezpieczeństwa i mechanizm 2FA.' },
  { id: '03', name: 'Oferta bonusowa (warunki obrotu)', weight: 15, desc: 'Oceniamy atrakcyjność bonusów i przede wszystkim realistyczność warunków obrotu. Bonus z x60 wagering jest niekorzystny — wskazujemy to wprost.' },
  { id: '04', name: 'Metody płatności oraz szybkość wypłat', weight: 15, desc: 'Testujemy rzeczywisty czas wypłaty poprzez konto testowe. Weryfikujemy dostępność metod płatności dla graczy z Polski (BLIK, Przelewy24).' },
  { id: '05', name: 'Wybór gier oraz dostawcy', weight: 10, desc: 'Sprawdzamy liczbę i różnorodność gier. Analizujemy dostawców (Pragmatic Play, Evolution, NetEnt) i jakość live casino.' },
  { id: '06', name: 'Wsparcie klienta (SLA)', weight: 10, desc: 'Testujemy czas odpowiedzi supportu przez live chat, email i telefon. Oceniamy dostępność językową (wsparcie po polsku).' },
  { id: '07', name: 'Wersja mobilna oraz aplikacja', weight: 5, desc: 'Testujemy responsywność strony i aplikację mobilną na urządzeniach Android i iOS. Oceniamy UX i dostępność wszystkich funkcji na mobile.' },
  { id: '08', name: 'Opinie graczy', weight: 4, desc: 'Analizujemy opinie na Trustpilot, Casino Guru, AskGamblers i forach polskich graczy. Szukamy wzorców w negatywnych recenzjach (opóźnienia wypłat, trudności z bonusami).' },
  { id: '09', name: 'Polityka odpowiedzialnej gry', weight: 3, desc: 'Oceniamy dostępność narzędzi: limity depozytów, samowykluczenie, cooling-off period, linki do organizacji pomocowych.' },
  { id: '10', name: 'Dostępność języków oraz walut', weight: 3, desc: 'Sprawdzamy dostępność języka polskiego i obsługę PLN. Oceniamy jakość tłumaczeń i obsługę klienta w języku polskim.' },
]

export default function MetodologiaRecenzjiPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Metodologia Recenzji Kasyn Online: Jak Oceniamy Vulkan Vegas', '/metodologia-recenzji')} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'O nas', url: '/o-nas' },
          { name: 'Metodologia recenzji', url: '/metodologia-recenzji' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Metodologia Recenzji Kasyn Online: Kryteria Oceny Vulkan Vegas Polska
        </h1>

        <p className="text-gray-300 leading-relaxed mb-8">
          Każda recenzja na serwisie vulkan-vegas-kasyno.com.pl powstaje według ustandaryzowanej metodologii.
          Poniżej opisujemy 10 kryteriów, które oceniamy, oraz wagę każdego z nich w końcowej ocenie
          (skali 1-5 gwiazdek). Transparentność metodologii to fundament naszego E-A-T.
        </p>

        <div className="space-y-6 mb-10">
          {criteria.map((c) => (
            <div key={c.id} className="bg-surface-card border border-white/10 rounded-xl p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-brand font-mono font-bold text-sm bg-brand/10 px-2 py-1 rounded">{c.id}</span>
                  <h2 className="text-white font-bold">{c.name}</h2>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className="text-gold font-bold">{c.weight}%</span>
                  <span className="text-gray-500 text-xs block">waga</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{c.desc}</p>
              <div className="mt-3 bg-surface rounded-full h-1.5 overflow-hidden">
                <div className="h-full bg-brand" style={{ width: `${c.weight * 5}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface-card border border-brand/20 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">Jak obliczamy końcową ocenę</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Końcowa ocena (1-5 gwiazdek) to ważona średnia z 10 kryteriów, gdzie każde ma przypisaną wagę
            procentową. Kasyno musi uzyskać co najmniej 3,5/5 w kryteriach bezpieczeństwa i licencji,
            aby zostało polecone na serwisie.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Recenzje aktualizowane są co kwartał lub przy istotnych zmianach w ofercie kasyna (np. zmiana
            warunków bonusu, wypłat lub licencji).
          </p>
        </div>
      </div>
    </>
  )
}
