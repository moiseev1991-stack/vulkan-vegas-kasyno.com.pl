import Image from 'next/image'
import type { Winner } from '@/data/winners'

function WinnerCard({ winner }: { winner: Winner }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-surface-card border border-white/10 rounded-xl px-4 py-2.5 mr-4">
      <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
        <Image src={winner.gameImage} alt={winner.gameTitle} fill className="object-cover" sizes="32px" />
      </div>
      <div>
        <p className="text-white font-bold text-sm leading-tight">
          {winner.amount.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} {winner.currency}
        </p>
        <p className="text-gray-400 text-xs">
          {winner.nick} · {winner.gameTitle}
        </p>
      </div>
    </div>
  )
}

export default function CurrentWinners({ winners }: { winners: Winner[] }) {
  const doubled = [...winners, ...winners]

  return (
    <section className="mb-10">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <h2 className="text-white font-bold text-base">Ostatnie wygrane</h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {doubled.map((w, i) => (
            <WinnerCard key={i} winner={w} />
          ))}
        </div>
      </div>
    </section>
  )
}
