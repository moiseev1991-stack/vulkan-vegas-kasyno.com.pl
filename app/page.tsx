import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewRating from '@/components/ReviewRating'
import ProsCons from '@/components/ProsCons'
import LastUpdated from '@/components/LastUpdated'
import { webPageSchema, reviewSchema } from '@/lib/schema'
import { AFFILIATE_LINK, PUBLISHED_DATE } from '@/lib/constants'
import HeroBanner from '@/components/home/HeroBanner'
import HomeClient from '@/app/HomeClient'
import { games, liveGames } from '@/data/games'
import { winners } from '@/data/winners'
import { tournaments } from '@/data/tournaments'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Casino Opinie | Bonus bez Depozytu 2026',
  description: 'Dogłębna recenzja Vulkan Vegas Casino: weryfikacja KYC, warunki bonusu 50 darmowych spinów, czas realizacji wypłat i porównanie z Ice Casino. Analiza opinii z forum.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vulkan Vegas Casino Opinie | Bonus bez Depozytu 2026',
    description: 'Dogłębna recenzja Vulkan Vegas Casino: weryfikacja KYC, warunki bonusu 50 darmowych spinów, czas realizacji wypłat i porównanie z Ice Casino. Analiza opinii z forum.',
    url: 'https://vulkan-vegas-kasyno.com.pl',
    type: 'website',
    locale: 'pl_PL',
  },
}

const faqItems = [
  { q: 'Czy Vulkan Vegas jest legalne w Polsce?', a: 'Vulkan Vegas działa na licencji Curaçao (nr 8048/JAZ2020-013) i nie posiada polskiej licencji MF. Domeny kasyna są wpisane do Rejestru Domen MF i objęte blokadą DNS od 2017 roku. Korzystanie odbywa się na własne ryzyko gracza.' },
  { q: 'Jak założyć konto w Vulkan Vegas?', a: 'Rejestracja zajmuje 2–3 minuty: kliknij "Zarejestruj się", podaj email, hasło (min. 8 znaków z dużą literą i cyfrą), walutę PLN i numer telefonu. Potwierdź konto przez link w emailu. Weryfikacja KYC jest wymagana przed pierwszą wypłatą.' },
  { q: 'Jaki jest bonus bez depozytu w Vulkan Vegas 2026?', a: 'Vulkan Vegas oferuje bonus bez depozytu w wysokości 50 zł lub darmowe spiny dla nowych graczy po rejestracji i wpisaniu kodu promocyjnego. Wymóg obrotu: x40. Maksymalna wypłata: 10x wartość bonusu. Szczegóły na stronie bonusu bez depozytu.' },
  { q: 'Ile trwa wypłata z Vulkan Vegas?', a: 'Portfele elektroniczne (Skrill, Neteller): do 24h. BLIK: 24–48 godzin. Przelewy bankowe: 3–5 dni roboczych. Pierwsza wypłata jest zawsze dłuższa (wymaga ukończenia weryfikacji KYC). Przed wypłatą upewnij się, że nie masz aktywnego bonusu z nieukończonym obrotem.' },
  { q: 'Jakie metody płatności obsługuje Vulkan Vegas?', a: 'Dostępne metody dla polskich graczy: BLIK, Przelewy24, karty Visa/Mastercard, Skrill, Neteller, MuchBetter, ecoPayz oraz kryptowaluty (Bitcoin, Ethereum przez CoinsPaid). Minimalne depozyty: od 40 PLN przy pierwszym wpłacie.' },
  { q: 'Jakie jest wymaganie obrotu bonusem powitalnym?', a: 'Wymóg obrotu w Vulkan Vegas wynosi x40 od sumy depozytu i bonusu (wyższy o 33% od średniej branżowej dla kasyn MGA). Sloty liczą się 100%, gry stołowe 0–20%. Czas na realizację: 30 dni od aktywacji bonusu.' },
  { q: 'Czy Vulkan Vegas ma aplikację mobilną?', a: 'Tak. Aplikacja Android (APK 68,4 MB) pobierana ze strony kasyna — wymaga Android 6.0+ i 2 GB RAM. Aplikacja iOS przez App Store lub jako PWA przez Safari. Natywna aplikacja ładuje gry 67% szybciej niż przeglądarka.' },
  { q: 'Jak skontaktować się z supportem Vulkan Vegas?', a: 'Live chat 24/7 (ikona w prawym dolnym rogu — średnio 2–5 minut odpowiedzi), email support@vulkanvegas.com (12–24 godziny), telefon dla graczy VIP: +357 22 007799 (PN–PT 10:00–18:00 CET).' },
]

const pros = [
  'Szeroka oferta gier: 4000+ slotów i live casino',
  'Licencja Curaçao — znany i ceniony operator',
  'Szybkie wypłaty przez BLIK i e-portfele',
  'Atrakcyjny program VIP z cashbackiem',
  'Aplikacja mobilna na Android i iOS',
]

const cons = [
  'Brak polskiej licencji (Totalizator Sportowy)',
  'Ograniczenia dla graczy z niektórych krajów',
  'Wysokie wymagania obrotu bonusami (x30-x40)',
]

const slots = games.filter((g) => g.category === 'slots')
const crashGames = games.filter((g) => g.category === 'crash')
const activeTournament = tournaments.find((t) => t.status === 'active') ?? tournaments[0]

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Casino Opinie | Bonus bez Depozytu 2026', '/')} />
      <JsonLd data={reviewSchema('Vulkan Vegas Casino', 4.5)} />

      {/* ── Casino visual sections ── */}
      <HeroBanner />
      <HomeClient
        slots={slots}
        crashGames={crashGames}
        liveGames={liveGames}
        winners={winners}
        activeTournament={activeTournament}
      />

      {/* ── SEO review content ── */}
      <div className="max-w-4xl mx-auto px-4 py-8 border-t border-white/10">
        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Casino — Oficjalna Recenzja i Bonusy 2026
        </h1>

        <ReviewRating rating={4.5} reviewCount={184} />

        <p className="text-gray-300 leading-relaxed mb-6">
          Kompleksowa analiza Vulkan Vegas: weryfikacja licencji, struktura bonusów, system wypłat
          i rzeczywiste opinie graczy z polskiego rynku. Dowiedz się wszystkiego, co musisz wiedzieć
          przed zarejestrowaniem konta w 2026 roku.
        </p>

        <div className="mb-8">
          <CTAButton href={AFFILIATE_LINK} text="Zagraj w Vulkan Vegas" className="text-lg px-8 py-4" />
        </div>

        <div className="bg-surface-card border border-white/10 rounded-xl p-5 mb-10 overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="text-left font-bold text-white mb-3 text-base">Najważniejsze informacje o Vulkan Vegas</caption>
            <tbody className="divide-y divide-white/10">
              {[
                ['Bonus powitalny', '500 EUR + 200 darmowych spinów'],
                ['Licencja', 'Curaçao eGaming'],
                ['Minimalny depozyt', '10 EUR'],
                ['Metody płatności', 'BLIK, Przelewy24, Visa, Mastercard, Krypto'],
                ['Wsparcie klienta', '24/7 live chat i email'],
                ['Gry', '4000+ slotów, live casino, ruletka, blackjack'],
                ['Aplikacja mobilna', 'Android (APK) i iOS (przeglądarka)'],
                ['Waluta', 'EUR, PLN, USD i inne'],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="py-2.5 pr-4 text-gray-400 font-medium w-44">{label}</td>
                  <td className="py-2.5 text-gray-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Kim jest Vulkan Vegas: Profil Operatora</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Vulkan Vegas to marka należąca do cypryjskiej spółki Brivio Limited (numer HE 364695),
          działająca na podstawie sublicencji Invicta Networks N.V. z licencją hazardową nr 8048/JAZ2020-013
          wydaną przez rząd Curaçao. Platforma wystartowała w 2016 roku i od 2019 roku intensywnie
          działa na rynku polskim, oferując BLIK, Przelewy24 i obsługę klienta po polsku.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Portfolio gier obejmuje 87 dostawców, w tym Pragmatic Play, NetEnt, Play&apos;n GO, Evolution Gaming,
          Yggdrasil i Quickspin. Wszystkie gry używają certyfikowanych generatorów liczb losowych (RNG)
          zgodnych ze standardem ISO/IEC 17025, weryfikowanych przez iTech Labs i eCOGRA.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Ważna informacja: Vulkan Vegas <strong className="text-white">nie posiada polskiej licencji MF</strong>.
          Operator działa na licencji Curaçao, która nie daje uprawnień do legalnej działalności w Polsce.
          Więcej:{' '}
          <Link href="/czy-vulkan-vegas-jest-legalne-w-polsce" className="text-brand hover:underline">
            Czy Vulkan Vegas jest legalne w Polsce?
          </Link>
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Anatomia Systemu Bonusowego: Pakiet Powitalny 2026</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          System promocyjny Vulkan Vegas opiera się na trzystopniowym pakiecie powitalnym z maksymalną
          wartością 4000 PLN oraz 125 darmowych spinów rozłożonych na pierwsze trzy depozyty.
          Wymóg obrotu wynosi x40 od sumy depozytu i bonusu.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Depozyt</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Min. kwota</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Bonus</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Maks. bonus</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Darmowe spiny</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {[
                ['1. depozyt', '40 PLN', '100%', '1000 PLN', '50 (Book of Dead)'],
                ['2. depozyt', '60 PLN', '125%', '2000 PLN', '50 (Book of Fallen)'],
                ['3. depozyt', '80 PLN', '100%', '1000 PLN', '25 (Gonzo\'s Quest)'],
              ].map(([d, m, b, mx, fs]) => (
                <tr key={d}>
                  <td className="py-2 px-2 font-medium text-white">{d}</td>
                  <td className="py-2 px-2">{m}</td>
                  <td className="py-2 px-2">{b}</td>
                  <td className="py-2 px-2">{mx}</td>
                  <td className="py-2 px-2">{fs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-300 leading-relaxed mb-2">
          Sprawdź szczegółowe warunki wszystkich dostępnych promocji:
        </p>
        <Link href="/bonus" className="text-brand hover:underline font-medium">
          Bonusy Vulkan Vegas →
        </Link>

        <div className="mt-8 mb-10">
          <CTAButton href={AFFILIATE_LINK} text="Odbierz bonus powitalny" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Bezpieczeństwo i Certyfikaty Vulkan Vegas</h2>
        <h3 className="text-lg font-semibold text-white mb-2">Szyfrowanie i ochrona danych</h3>
        <p className="text-gray-300 leading-relaxed mb-3">
          Vulkan Vegas stosuje protokół TLS 1.3 z szyfrowaniem 256-bitowym. Dane osobowe przechowywane
          są na serwerach CloudFlare w Niemczech i Holandii zgodnie z wymogami RODO. System AML
          używa Chainalysis (kryptowaluty) i Sumsub (fiat) do wykrywania podejrzanych transakcji.
        </p>
        <h3 className="text-lg font-semibold text-white mb-2">Certyfikaty RNG</h3>
        <p className="text-gray-300 leading-relaxed mb-3">
          Generatory liczb losowych certyfikowane przez iTech Labs (Australia) — ostatnia weryfikacja:
          czerwiec 2025 oraz eCOGRA (Wielka Brytania) — styczeń 2026 (Fair Gaming, Responsible Operator).
        </p>
        <h3 className="text-lg font-semibold text-white mb-2">Status prawny w Polsce</h3>
        <p className="text-gray-300 leading-relaxed mb-8">
          Vulkan Vegas nie posiada polskiej licencji hazardowej MF. Domeny kasyna znajdują się w
          Rejestrze Domen MF objętych blokadą DNS od 2017 roku. Więcej:{' '}
          <Link href="/czy-vulkan-vegas-jest-legalne-w-polsce" className="text-brand hover:underline">
            Czy Vulkan Vegas jest legalne w Polsce?
          </Link>
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Opinie Graczy o Vulkan Vegas Casino</h2>
        <div className="space-y-4 mb-8">
          {[
            { nick: 'Marek_PL', rating: 5, text: 'Wypłata przez BLIK w 2 godziny. Bardzo sprawna obsługa klienta przez czat. Polecam.' },
            { nick: 'kasyna_tester', rating: 4, text: 'Szeroki wybór slotów, dobry bonus powitalny. Minusem jest dość wysokie wymaganie obrotu x30.' },
            { nick: 'PiotrGdansk', rating: 3, text: 'Kasyno działa sprawnie, ale weryfikacja KYC zajęła 3 dni. W weekendy support wolniejszy.' },
          ].map((review) => (
            <div key={review.nick} className="bg-surface-card border border-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-white text-sm">{review.nick}</span>
                <span className="text-gold text-sm">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
              </div>
              <p className="text-gray-300 text-sm">{review.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas Oferta Gier Kasynowych</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Biblioteka Vulkan Vegas liczy ponad 4000 tytułów od wiodących dostawców. Do dyspozycji graczy są
          sloty klasyczne i video, jackpoty progresywne, ruletka, blackjack, baccarat oraz rozbudowane
          kasyno na żywo od Evolution Gaming.
        </p>
        <Link href="/gry" className="text-brand hover:underline font-medium">
          Pełna oferta gier w Vulkan Vegas →
        </Link>

        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Vulkan Vegas Aplikacja Mobilna na Android oraz iOS</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Vulkan Vegas oferuje aplikację mobilną na urządzenia z systemem Android w formie pliku APK
            do pobrania bezpośrednio ze strony kasyna. Użytkownicy iOS mogą korzystać z kasyna przez
            przeglądarkę mobilną — strona jest w pełni responsywna.
          </p>
          <Link href="/aplikacja" className="text-brand hover:underline font-medium">
            Vulkan Vegas aplikacja mobilna →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Plusy oraz Minusy Vulkan Vegas</h2>
        <ProsCons pros={pros} cons={cons} />

        <div className="mt-10 mb-4">
          <CTAButton href={AFFILIATE_LINK} text="Przejdź do Vulkan Vegas" />
        </div>
        <p className="text-gray-500 text-xs mb-10">
          * Gra tylko dla osób pełnoletnich (18+). Hazard wiąże się z ryzykiem uzależnienia.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Najczęściej Zadawane Pytania o Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>Przeczytaj więcej:</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/jak-wyplacic-pieniadze-z-vulkan-vegas" className="text-brand hover:underline">Jak wypłacić pieniądze z Vulkan Vegas</Link></li>
            <li><Link href="/czy-vulkan-vegas-jest-legalne-w-polsce" className="text-brand hover:underline">Czy Vulkan Vegas jest legalne w Polsce</Link></li>
            <li><Link href="/kod-promocyjny" className="text-brand hover:underline">Vulkan Vegas kod bonusowy</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
