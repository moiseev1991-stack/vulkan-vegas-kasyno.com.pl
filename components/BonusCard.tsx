import Link from 'next/link'
import CTAButton from './CTAButton'

interface Props {
  type: string
  title: string
  amount: string
  wagering: string
  description: string
  href: string
  affiliateLink: string
}

export default function BonusCard({ type, title, amount, wagering, description, href, affiliateLink }: Props) {
  return (
    <div className="bg-surface-card border border-white/10 rounded-xl p-5 hover:border-brand/40 transition-colors">
      <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2 py-1 rounded mb-2 inline-block">
        {type}
      </span>
      <h3 className="text-white font-bold text-lg mb-1">
        <Link href={href} className="hover:text-brand transition-colors">{title}</Link>
      </h3>
      <div className="text-gold text-2xl font-bold mb-2">{amount}</div>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      <p className="text-gray-500 text-xs mb-4">Obrót: {wagering}</p>
      <CTAButton href={affiliateLink} text="Odbierz bonus" className="w-full text-center" />
    </div>
  )
}
