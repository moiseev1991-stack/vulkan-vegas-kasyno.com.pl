import Link from 'next/link'
import JsonLd from './JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

interface BreadcrumbItem {
  name: string
  url: string
}

interface Props {
  items: BreadcrumbItem[]
}

export default function BreadcrumbList({ items }: Props) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-4">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1">
              {i < items.length - 1 ? (
                <>
                  <Link href={item.url} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="text-gray-600">/</span>
                </>
              ) : (
                <span className="text-gray-300" aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
