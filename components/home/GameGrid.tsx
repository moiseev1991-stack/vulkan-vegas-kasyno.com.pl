import type { Game } from '@/data/games'
import GameCard from './GameCard'
import { AFFILIATE_LINK } from '@/lib/constants'

interface Props {
  title: string
  count: number
  games: Game[]
  showMore?: boolean
}

export default function GameGrid({ title, count, games, showMore = true }: Props) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-lg">🏆</span>
        <h2 className="text-white font-bold text-base md:text-lg">{title}</h2>
        <span className="text-gold text-sm font-bold">{count}</span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      {showMore && (
        <div className="mt-6 text-center">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Pokaż więcej
          </a>
        </div>
      )}
    </section>
  )
}
