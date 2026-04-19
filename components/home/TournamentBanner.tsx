'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import type { Tournament } from '@/data/tournaments'
import { games } from '@/data/games'
import { AFFILIATE_LINK } from '@/lib/constants'

function useCountdown(endsAt: string) {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    function calc() {
      const diff = new Date(endsAt).getTime() - Date.now()
      if (diff <= 0) { setTimeLeft('00h : 00m : 00s'); return }
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTimeLeft(`${String(h).padStart(2, '0')}h : ${String(m).padStart(2, '0')}m : ${String(s).padStart(2, '0')}s`)
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [endsAt])

  return timeLeft
}

const TYPE_LABEL: Record<string, string> = {
  weekly: 'TYGODNIOWY',
  weekend: 'WEEKENDOWY',
  big: 'WIELKI',
  easter: 'WIELKANOCNY',
}

export default function TournamentBanner({ tournament }: { tournament: Tournament }) {
  const timeLeft = useCountdown(tournament.endsAt)
  const tournamentGames = tournament.gameIds
    .map((id) => games.find((g) => g.id === id))
    .filter(Boolean) as typeof games

  return (
    <section className="mb-10">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#1a0004] to-[#0d0002] border border-white/10">
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6 p-6 md:p-8 min-h-[280px]">
          {/* Left content */}
          <div className="flex-1 min-w-0">
            <div className="flex gap-2 mb-3">
              <span className="flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                NA ŻYWO
              </span>
              <span className="bg-gold text-black text-xs font-bold px-2.5 py-1 rounded-full">
                ⚡ {TYPE_LABEL[tournament.type] ?? 'TURNIEJ'}
              </span>
            </div>

            <h2 className="text-white font-extrabold text-2xl md:text-3xl mb-4">{tournament.title}</h2>

            <div className="flex gap-8 mb-5">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Fundusz nagród</p>
                <p className="text-gold font-bold text-xl">€{tournament.prizePool.toLocaleString('pl-PL')}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Kończy się za</p>
                <p className="text-white font-bold text-xl tabular-nums">{timeLeft}</p>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-gold-light transition-colors"
              >
                Weź udział
              </a>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                Czytaj więcej
              </a>
            </div>

            {tournamentGames.length > 0 && (
              <div>
                <p className="text-gray-400 text-xs mb-2">Gry turniejowe</p>
                <div className="flex gap-2 flex-wrap">
                  {tournamentGames.slice(0, 8).map((g) => (
                    <div key={g.id} className="flex flex-col items-center gap-1">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-surface-card">
                        <Image src={g.image} alt={g.title} fill className="object-cover" sizes="40px" />
                      </div>
                      <span className="text-gray-500 text-[9px] max-w-[40px] truncate text-center">{g.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: trophy image */}
          <div className="hidden md:flex flex-shrink-0 items-end self-stretch relative w-72" style={{minHeight: '220px'}}>
            {tournament.image ? (
              <Image
                src={tournament.image}
                alt={tournament.title}
                fill
                className="object-contain object-bottom"
                sizes="288px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">🏆</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
