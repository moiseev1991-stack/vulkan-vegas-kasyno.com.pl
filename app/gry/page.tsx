import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'
import FAQAccordion from '@/components/FAQAccordion'
import LastUpdated from '@/components/LastUpdated'
import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { AFFILIATE_LINK, PUBLISHED_DATE } from '@/lib/constants'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Gry — Najlepsze Sloty i Bonusy 2026',
  description: 'Poznaj najlepsze gry w Vulkan Vegas: automaty z RTP 96%+, blackjack na żywo, darmowe spiny i kody promocyjne. Sprawdź legalność, opinie graczy i strategie wygrywania w 2026.',
  alternates: { canonical: '/gry' },
  openGraph: {
    title: 'Vulkan Vegas Gry — Najlepsze Sloty i Bonusy 2026',
    description: 'Poznaj najlepsze gry w Vulkan Vegas: automaty z RTP 96%+, blackjack na żywo, darmowe spiny i kody promocyjne. Sprawdź legalność, opinie graczy i strategie wygrywania w 2026.',
    url: 'https://vulkan-vegas-kasyno.com.pl/gry',
    type: 'article',
    locale: 'pl_PL',
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vulkan Vegas Gry 2026',
  description: 'Najpopularniejsze gry dostępne w Vulkan Vegas Casino dla graczy z Polski',
  numberOfItems: 8,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Book of Dead', url: 'https://vulkan-vegas-kasyno.com.pl/gry' },
    { '@type': 'ListItem', position: 2, name: 'Sweet Bonanza', url: 'https://vulkan-vegas-kasyno.com.pl/gry' },
    { '@type': 'ListItem', position: 3, name: 'Gates of Olympus', url: 'https://vulkan-vegas-kasyno.com.pl/gry' },
    { '@type': 'ListItem', position: 4, name: 'Starburst', url: 'https://vulkan-vegas-kasyno.com.pl/gry' },
    { '@type': 'ListItem', position: 5, name: 'Wolf Gold', url: 'https://vulkan-vegas-kasyno.com.pl/gry' },
    { '@type': 'ListItem', position: 6, name: 'Reactoonz', url: 'https://vulkan-vegas-kasyno.com.pl/gry' },
    { '@type': 'ListItem', position: 7, name: 'Big Bass Bonanza', url: 'https://vulkan-vegas-kasyno.com.pl/gry' },
    { '@type': 'ListItem', position: 8, name: 'Fruit Party', url: 'https://vulkan-vegas-kasyno.com.pl/gry' },
  ],
}

const faqItems = [
  { q: 'Ile gier jest dostępnych w Vulkan Vegas?', a: 'Vulkan Vegas oferuje ponad 3000 gier od 87 certyfikowanych dostawców. Biblioteka regularnie się rozrasta. Dostępne kategorie: sloty wideo, gry stołowe, live casino (Evolution, Ezugi, Vivo Gaming), jackpoty progresywne, video poker i gry instant win.' },
  { q: 'Które gry w Vulkan Vegas mają najwyższy RTP?', a: 'Najwyższy RTP mają m.in.: Blood Suckers — NetEnt (98%), Jackpot 6000 — NetEnt (98,8%), Mega Joker — NetEnt (99%). Popularne sloty: Book of Dead (96,21%), Gates of Olympus (96,5%), Sweet Bonanza (96,48%). RTP każdej gry jest podane w jej opisie.' },
  { q: 'Czy można grać za darmo w Vulkan Vegas?', a: 'Tak, większość slotów i gier stołowych jest dostępna w trybie demo bez rejestracji. Gry live casino i zakłady sportowe wymagają konta. Tryb demo pozwala poznać mechanikę i zmienność gry przed grą na pieniądze.' },
  { q: 'Czy gry w Vulkan Vegas są uczciwe?', a: 'Tak. Wszystkie gry używają certyfikowanych RNG zgodnych ze standardem ISO/IEC 17025. Certyfikaty wystawione przez iTech Labs (czerwiec 2025) i eCOGRA (styczeń 2026). Live casino (Evolution Gaming) certyfikowane przez Gaming Laboratories International (listopad 2025).' },
  { q: 'Jakie gry live casino oferuje Vulkan Vegas?', a: 'Live casino na platformach Evolution Gaming, Ezugi, Authentic Gaming i Vivo Gaming. Dostępne: Live Ruletka (30+ stołów: Lightning, Immersive, Speed), Live Blackjack (Infinite, Power, Free Bet), Live Baccarat, Game Shows (Crazy Time, Monopoly Live, Deal or No Deal).' },
]

const categories = [
  { name: 'Sloty / Automaty', count: '3200+', icon: '🎰', desc: 'Najlepsza kolekcja slotów online — od klasycznych owoców po megaways z setkami linii wygrywających.' },
  { name: 'Gry Stołowe', count: '150+', icon: '🃏', desc: 'Blackjack, ruletka, baccarat, poker — wszystkie warianty w tym gry z niskim minimum stawki.' },
  { name: 'Live Casino', count: '200+', icon: '🎙️', desc: 'Gry z prawdziwymi krupierami od Evolution, Pragmatic Play Live i Ezugi. Transmisje na żywo 24/7.' },
  { name: 'Jackpoty', count: '80+', icon: '💰', desc: 'Progressive jackpoty z pulami milionów PLN. Mega Fortune, Mega Moolah, Divine Fortune i inne.' },
  { name: 'Video Poker', count: '40+', icon: '♠️', desc: 'Jacks or Better, Deuces Wild, Double Double Bonus i więcej wariantów video pokera.' },
  { name: 'Gry Instant Win', count: '100+', icon: '⚡', desc: 'Zdrapki i gry błyskawiczne z natychmiastowymi wynikami i wygraniem.' },
]

const popularGames = [
  { name: 'Book of Dead', provider: 'Play\'n GO', rtp: '96.21%', volatility: 'Wysoka', minBet: '0,01 €' },
  { name: 'Sweet Bonanza', provider: 'Pragmatic Play', rtp: '96.48%', volatility: 'Wysoka', minBet: '0,20 €' },
  { name: 'Gates of Olympus', provider: 'Pragmatic Play', rtp: '96.50%', volatility: 'Wysoka', minBet: '0,20 €' },
  { name: 'Starburst', provider: 'NetEnt', rtp: '96.09%', volatility: 'Niska', minBet: '0,10 €' },
  { name: 'Wolf Gold', provider: 'Pragmatic Play', rtp: '96.01%', volatility: 'Średnia', minBet: '0,25 €' },
  { name: 'Reactoonz', provider: 'Play\'n GO', rtp: '96.51%', volatility: 'Wysoka', minBet: '0,20 €' },
  { name: 'Big Bass Bonanza', provider: 'Pragmatic Play', rtp: '96.71%', volatility: 'Wysoka', minBet: '0,10 €' },
  { name: 'Fruit Party', provider: 'Pragmatic Play', rtp: '96.47%', volatility: 'Wysoka', minBet: '0,20 €' },
]

const providers = [
  'NetEnt', 'Pragmatic Play', 'Evolution', 'Play\'n GO', 'Microgaming',
  'Yggdrasil', 'Quickspin', 'Red Tiger', 'Relax Gaming', 'Betsoft',
  'Ezugi', 'Playtech', 'IGT', 'Wazdan', 'Thunderkick',
]

export default function GryPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Vulkan Vegas Gry — Najlepsze Sloty i Bonusy 2026', '/gry')} />
      <JsonLd data={itemListSchema} />

      <PageHero
        badge="🎰 GRAJ TERAZ"
        title="4000+ Gier"
        titleAccent="Kasynowych"
        description="Sloty, ruletka, blackjack i kasyno na żywo od najlepszych dostawców — Pragmatic Play, Evolution, NetEnt i wielu innych."
        image="/images/girl-coins.png"
        imageAlt="Gry kasynowe Vulkan Vegas"
        buttons={[
          { label: 'Zagraj teraz', href: AFFILIATE_LINK, variant: 'gold', external: true },
          { label: 'Kasyno na żywo', href: AFFILIATE_LINK, variant: 'outline', external: true },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'Gry', url: '/gry' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Vulkan Vegas Gry: Kompletny Przewodnik po Najlepszych Grach Kasynowych 2026
        </h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          Vulkan Vegas oferuje ponad 3000 gier kasynowych – od slotów z wysokim RTP, przez gry
          stołowe na żywo, po ekskluzywne automaty z progresywnymi jackpotami. Odkryj, które gry
          naprawdę płacą, jak wykorzystać darmowe spiny i kody promocyjne, oraz dlaczego gracze
          z Warszawy wybierają właśnie tę platformę.
        </p>

        <CTAButton href={AFFILIATE_LINK} text="Zagraj teraz w Vulkan Vegas" className="mb-8" />

        <h2 className="text-2xl font-bold text-white mb-4">Kategorie Gier w Vulkan Vegas</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-surface-card border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <h3 className="text-white font-bold text-sm">{cat.name}</h3>
                  <span className="text-brand text-xs font-medium">{cat.count} gier</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Najpopularniejsze Sloty w Vulkan Vegas</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Gra</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Dostawca</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">RTP</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Zmienność</th>
                <th className="text-left py-2 px-2 text-gray-400 font-medium">Min stawka</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {popularGames.map((game) => (
                <tr key={game.name} className="hover:bg-surface-light/20">
                  <td className="py-2.5 px-2 font-medium text-white">{game.name}</td>
                  <td className="py-2.5 px-2">{game.provider}</td>
                  <td className="py-2.5 px-2 text-green-400">{game.rtp}</td>
                  <td className="py-2.5 px-2">{game.volatility}</td>
                  <td className="py-2.5 px-2">{game.minBet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Gry za 1 Grosz w Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Wiele slotów w Vulkan Vegas pozwala na minimalne stawki od 0,01 EUR (ok. 4 grosze).
          Gry za 1 grosz to idealne rozwiązanie dla graczy z małym budżetem lub chcących poznać
          mechanikę bez dużego ryzyka.
        </p>
        <div className="bg-surface-card border border-white/10 rounded-xl p-5 mb-8">
          <h3 className="text-white font-semibold mb-3 text-sm">Sloty z najniższymi stawkami:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              'Sizzling Hot Deluxe (0,04 €)',
              'Book of Dead (0,01 €)',
              'Starburst (0,10 €)',
              'Gonzo\'s Quest (0,20 €)',
              'Fire Joker (0,05 €)',
              'Reactoonz (0,20 €)',
            ].map((game) => (
              <div key={game} className="text-gray-300 text-xs flex gap-2">
                <span className="text-brand flex-shrink-0">→</span>
                {game}
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Live Casino w Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Live casino oferuje gry z prawdziwymi krupierami transmitowanymi na żywo ze studia.
          Vulkan Vegas korzysta z platform Evolution Gaming (lider branży), Pragmatic Play Live i Ezugi.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            { game: 'Live Ruletka', desc: 'Lightning Roulette, Immersive Roulette, Speed Roulette — ponad 30 stołów' },
            { game: 'Live Blackjack', desc: 'Infinite Blackjack, Power Blackjack, Free Bet Blackjack — gra z krupierem' },
            { game: 'Live Baccarat', desc: 'Speed Baccarat, No Commission Baccarat — szybkie rundy z krupierem' },
            { game: 'Game Shows', desc: 'Crazy Time, Monopoly Live, Deal or No Deal — widowiskowe formaty' },
          ].map((item) => (
            <div key={item.game} className="bg-surface-card border border-white/10 rounded-lg p-4">
              <h3 className="text-white font-medium text-sm mb-1">{item.game}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Dostawcy Gier w Vulkan Vegas</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Vulkan Vegas współpracuje z ponad 60 dostawcami oprogramowania, w tym:
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {providers.map((provider) => (
            <span key={provider} className="bg-surface-card border border-white/10 rounded-lg px-3 py-1.5 text-gray-300 text-xs">
              {provider}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Jackpoty w Vulkan Vegas</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Gry z progressive jackpotem oferują pule nagród sięgające milionów PLN. Jackpot rośnie
          z każdą stawką graczy na całym świecie, aż do momentu wygrania.
        </p>
        <div className="bg-surface-card border border-white/10 rounded-xl p-5 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: 'Mega Fortune', provider: 'NetEnt' },
              { name: 'Mega Moolah', provider: 'Microgaming' },
              { name: 'Divine Fortune', provider: 'NetEnt' },
              { name: 'Wheel of Wishes', provider: 'Microgaming' },
              { name: 'Major Millions', provider: 'Microgaming' },
              { name: 'Age of Gods', provider: 'Playtech' },
            ].map((j) => (
              <div key={j.name} className="text-center">
                <p className="text-white font-medium text-sm">{j.name}</p>
                <p className="text-gray-500 text-xs">{j.provider}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">FAQ: Gry Vulkan Vegas</h2>
        <FAQAccordion items={faqItems} />
      </div>
    </>
  )
}
