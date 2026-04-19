interface Props {
  rating: number
  maxRating?: number
  reviewCount?: number
}

export default function ReviewRating({ rating, maxRating = 5, reviewCount = 184 }: Props) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex items-center gap-0.5" aria-label={`Ocena ${rating} z ${maxRating}`}>
        {Array.from({ length: maxRating }).map((_, i) => (
          <svg key={i} className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            {i < full ? (
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="#FFD900" stroke="#FFD900" strokeWidth="1" />
            ) : i === full && hasHalf ? (
              <>
                <defs>
                  <linearGradient id={`half-${i}`}>
                    <stop offset="50%" stopColor="#FFD900" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill={`url(#half-${i})`} stroke="#FFD900" strokeWidth="1" />
              </>
            ) : (
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="transparent" stroke="#6b7280" strokeWidth="1" />
            )}
          </svg>
        ))}
      </div>
      <span className="text-gold font-bold text-lg">{rating}/{maxRating}</span>
      {reviewCount > 0 && (
        <span className="text-gray-400 text-sm">({reviewCount} opinii)</span>
      )}
    </div>
  )
}
