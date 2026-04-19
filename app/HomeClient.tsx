'use client'

import { useState } from 'react'
import CategoryTabs from '@/components/home/CategoryTabs'
import GameGrid from '@/components/home/GameGrid'
import TournamentBanner from '@/components/home/TournamentBanner'
import CurrentWinners from '@/components/home/CurrentWinners'
import LiveCasinoGrid from '@/components/home/LiveCasinoGrid'
import type { Game } from '@/data/games'
import type { Winner } from '@/data/winners'
import type { Tournament } from '@/data/tournaments'

interface Props {
  slots: Game[]
  crashGames: Game[]
  liveGames: Game[]
  winners: Winner[]
  activeTournament: Tournament
}

function filterByTab(tab: string, slots: Game[]): Game[] {
  switch (tab) {
    case 'new': return slots.filter((g) => g.tags.includes('new'))
    case 'popular': return slots.filter((g) => g.isPopular)
    case 'best': return slots.filter((g) => g.isPopular)
    case 'slots': return slots
    case 'easter': return slots.filter((g) => g.tags.includes('drops-wins') || g.tags.includes('network-promo'))
    default: return slots
  }
}

export default function HomeClient({ slots, crashGames, liveGames, winners, activeTournament }: Props) {
  const [activeTab, setActiveTab] = useState('lobby')

  const filteredSlots = filterByTab(activeTab, slots)
  const displayGames = activeTab === 'live' ? liveGames : filteredSlots

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <CategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'live' ? (
        <LiveCasinoGrid liveGames={liveGames} />
      ) : (
        <GameGrid
          title="Najlepsze gry w Polsce"
          count={displayGames.length}
          games={displayGames}
          showMore
        />
      )}

      <TournamentBanner tournament={activeTournament} />

      <GameGrid
        title="Gry Crash"
        count={22}
        games={crashGames}
        showMore
      />

      <CurrentWinners winners={winners} />

      <LiveCasinoGrid liveGames={liveGames} />
    </div>
  )
}
