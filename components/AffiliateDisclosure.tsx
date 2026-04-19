import Link from 'next/link'

export default function AffiliateDisclosure() {
  return (
    <div className="affiliate-disclosure bg-yellow-950/30 border border-yellow-800/40 rounded-lg px-4 py-3 text-sm text-yellow-200/80 my-4" role="note">
      <p>
        <strong>Informacja afiliacyjna:</strong> Serwis otrzymuje prowizję od operatora kasyna.{' '}
        <Link href="/informacja-afiliacyjna" className="underline hover:text-yellow-100">Dowiedz się więcej</Link>.
        {' '}Gra tylko dla osób pełnoletnich. 18+.{' '}
        <Link href="/odpowiedzialna-gra" className="underline hover:text-yellow-100">Graj odpowiedzialnie</Link>.
      </p>
    </div>
  )
}
