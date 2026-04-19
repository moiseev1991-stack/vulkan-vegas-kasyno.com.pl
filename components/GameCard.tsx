interface Props {
  title: string
  provider: string
  category: string
  image?: string
  isPopular?: boolean
}

export default function GameCard({ title, provider, category, image, isPopular }: Props) {
  return (
    <div className="bg-surface-card border border-white/10 rounded-xl overflow-hidden hover:border-brand/40 transition-colors group">
      <div className="aspect-[4/3] bg-gradient-to-br from-surface to-bgDark flex items-center justify-center relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <span className="text-4xl">🎰</span>
        )}
        {isPopular && (
          <span className="absolute top-2 left-2 text-xs font-bold bg-brand text-white px-2 py-0.5 rounded">
            HOT
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm truncate">{title}</h3>
        <p className="text-gray-400 text-xs">{provider} · {category}</p>
      </div>
    </div>
  )
}
