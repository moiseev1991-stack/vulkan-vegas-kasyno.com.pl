'use client'

const TABS = [
  { id: 'lobby', label: 'LOBBY' },
  { id: 'live', label: 'KASYNO NA ŻYWO' },
  { id: 'slots', label: 'AUTOMATY' },
  { id: 'best', label: 'NAJLEPSZE GRY' },
  { id: 'popular', label: 'POPULARNE' },
  { id: 'easter', label: 'GRY WIELKANOCNE' },
  { id: 'new', label: 'NOWE GRY' },
  { id: 'more', label: 'WIĘCEJ ▼' },
]

interface Props {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function CategoryTabs({ activeTab, onTabChange }: Props) {
  return (
    <div className="flex gap-0 overflow-x-auto scrollbar-hide mb-6 border-b border-white/10">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-shrink-0 px-4 py-3 text-xs font-semibold tracking-wide transition-colors border-b-2 -mb-px whitespace-nowrap ${
            activeTab === tab.id
              ? 'border-brand text-white bg-brand/10'
              : 'border-transparent text-gray-400 hover:text-white hover:border-white/30'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
