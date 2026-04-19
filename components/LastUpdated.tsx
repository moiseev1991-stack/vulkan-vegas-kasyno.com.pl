import Link from 'next/link'

interface Props {
  date: string
  reviewedBy: string
}

export default function LastUpdated({ date, reviewedBy }: Props) {
  const formatted = new Date(date).toLocaleDateString('pl-PL', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
  return (
    <div className="flex flex-wrap gap-4 text-sm text-gray-400 my-3">
      <span>
        Ostatnia aktualizacja:{' '}
        <time dateTime={date} className="text-gray-300">{formatted}</time>
      </span>
      <span>
        Zweryfikowane przez:{' '}
        <Link href="/zespol" className="text-brand hover:underline">{reviewedBy}</Link>
      </span>
    </div>
  )
}
