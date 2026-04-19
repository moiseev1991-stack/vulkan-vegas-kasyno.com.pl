import Image from 'next/image'
import Link from 'next/link'
import type { Game } from '@/data/games'
import { AFFILIATE_LINK } from '@/lib/constants'

const BADGE_STYLES: Record<string, string> = {
  hot: 'bg-red-600 text-white',
  new: 'bg-emerald-500 text-white',
  'drops-wins': 'bg-red-700 text-white',
  'network-promo': 'bg-orange-500 text-white',
}

const BADGE_LABELS: Record<string, string> = {
  hot: 'HOT',
  new: 'NEW',
  'drops-wins': 'DROPS & WINS',
  'network-promo': 'NETWORK PROMO',
}

export default function GameCard({ game }: { game: Game }) {
  const primaryTag = game.tags[0]

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
        {primaryTag && (
          <span className={`absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded z-10 ${BADGE_STYLES[primaryTag]}`}>
            {BADGE_LABELS[primaryTag]}
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
      </div>
      <p className="text-white text-xs font-semibold truncate leading-tight">{game.title}</p>
      <p className="text-gray-500 text-xs truncate">{game.provider}</p>
    </Link>
  )
}
