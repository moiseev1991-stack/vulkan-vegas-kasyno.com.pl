import Image from 'next/image'
import Link from 'next/link'
import type { Game } from '@/data/games'
import { AFFILIATE_LINK } from '@/lib/constants'

function LiveCard({ game }: { game: Game }) {
  return (
    <Link href={AFFILIATE_LINK} className="group cursor-pointer block">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-card mb-2">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 14vw"
        />
        {game.tags.includes('hot') && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded z-10">
            HOT
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
      </div>
      <p className="text-white text-xs font-semibold truncate leading-tight">{game.title}</p>
      <p className="text-gray-500 text-xs truncate">{game.provider}</p>
    </Link>
  )
}

export default function LiveCasinoGrid({ liveGames }: { liveGames: Game[] }) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-lg">📺</span>
        <h2 className="text-white font-bold text-base md:text-lg">Kasyno na żywo</h2>
        <span className="text-gold text-sm font-bold">567</span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {liveGames.map((game) => (
          <LiveCard key={game.id} game={game} />
        ))}
      </div>
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
    </section>
  )
}
