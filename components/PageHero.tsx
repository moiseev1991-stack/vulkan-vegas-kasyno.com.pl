import Image from 'next/image'
import Link from 'next/link'
import { AFFILIATE_LINK } from '@/lib/constants'

interface HeroButton {
  label: string
  href: string
  variant: 'gold' | 'outline'
  external?: boolean
}

interface PageHeroProps {
  badge?: string
  title: string
  titleAccent?: string
  description: string
  image: string
  imageAlt: string
  buttons?: HeroButton[]
}

export default function PageHero({
  badge,
  title,
  titleAccent,
  description,
  image,
  imageAlt,
  buttons = [],
}: PageHeroProps) {
  return (
    <div className="relative w-full overflow-hidden bg-black mb-10">

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Left: text */}
        <div className="flex-1 max-w-xl z-10">
          {badge && (
            <span className="inline-block bg-brand text-white text-xs font-bold px-3 py-1 rounded mb-4 tracking-wide">
              {badge}
            </span>
          )}
          <div className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-1">
            {title}
          </div>
          {titleAccent && (
            <div className="text-4xl md:text-5xl font-extrabold text-gold leading-tight mb-4">
              {titleAccent}
            </div>
          )}
          <p className="text-gray-300 text-base leading-relaxed mb-7 max-w-md">
            {description}
          </p>
          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {buttons.map((btn) =>
                btn.external ? (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className={
                      btn.variant === 'gold'
                        ? 'bg-gold hover:bg-gold-light text-black text-sm font-bold px-7 py-3 rounded-xl transition-colors'
                        : 'border border-white/30 text-white text-sm font-semibold px-7 py-3 rounded-xl hover:bg-white/10 transition-colors'
                    }
                  >
                    {btn.label}
                  </Link>
                ) : (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className={
                      btn.variant === 'gold'
                        ? 'bg-gold hover:bg-gold-light text-black text-sm font-bold px-7 py-3 rounded-xl transition-colors'
                        : 'border border-white/30 text-white text-sm font-semibold px-7 py-3 rounded-xl hover:bg-white/10 transition-colors'
                    }
                  >
                    {btn.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>

        {/* Right: image with edge fades */}
        <div className="flex-shrink-0 relative w-72 h-64 md:w-96 md:h-80">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 288px, 384px"
            priority
          />
          {/* gradient fades on all edges */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
            <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bgDark to-transparent" />
    </div>
  )
}
