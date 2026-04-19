export interface Tournament {
  id: string
  title: string
  status: 'active' | 'upcoming' | 'finished'
  type: 'weekly' | 'weekend' | 'big' | 'easter'
  prizePool: number
  currency: string
  endsAt: string
  startsAt: string
  gameIds: string[]
  image?: string
}

export const tournaments: Tournament[] = [
  {
    id: 'weekly-rush',
    title: 'Wtorkowy Sprint',
    status: 'active',
    type: 'weekly',
    prizePool: 2500,
    currency: 'EUR',
    endsAt: '2026-04-30T23:59:00Z',
    startsAt: '2026-04-07T00:00:00Z',
    gameIds: ['big-bass-splash', 'wild-love', 'sugar-rush', 'seven-seven', 'candy-craze', 'vulkanspiele-joker', 'fortune-bags', 'book-of-fallen'],
    image: '/images/tournament/telka.png',
  },
  {
    id: 'easter-tournament',
    title: 'Wielkanocna Bitwa',
    status: 'active',
    type: 'easter',
    prizePool: 12500,
    currency: 'EUR',
    endsAt: '2026-04-13T23:59:00Z',
    startsAt: '2026-04-07T00:00:00Z',
    gameIds: ['book-of-fallen', 'candy-craze', 'wild-love', 'fortune-bags', 'sugar-rush', 'gates-of-olympus-1000', 'crown-coins', 'blazing-crown-deluxe'],
    image: '/images/tournament/easter-rabbit.png',
  },
  {
    id: 'weekend-tournament',
    title: 'Sobotni Turniej',
    status: 'upcoming',
    type: 'weekend',
    prizePool: 3000,
    currency: 'EUR',
    endsAt: '2026-04-19T23:59:00Z',
    startsAt: '2026-04-17T00:00:00Z',
    gameIds: ['big-bass-splash', 'gates-of-olympus-1000', 'sugar-rush'],
  },
  {
    id: 'weekly-clash-1',
    title: 'Bitwa Tygodnia',
    status: 'finished',
    type: 'weekly',
    prizePool: 2000,
    currency: 'EUR',
    endsAt: '2026-04-08T23:59:00Z',
    startsAt: '2026-04-06T00:00:00Z',
    gameIds: [],
  },
  {
    id: 'weekend-finished-1',
    title: 'Sobotni Turniej',
    status: 'finished',
    type: 'weekend',
    prizePool: 2500,
    currency: 'EUR',
    endsAt: '2026-04-06T23:59:00Z',
    startsAt: '2026-04-03T00:00:00Z',
    gameIds: [],
  },
  {
    id: 'weekly-rush-finished',
    title: 'Wtorkowy Sprint',
    status: 'finished',
    type: 'weekly',
    prizePool: 2000,
    currency: 'EUR',
    endsAt: '2026-04-03T23:59:00Z',
    startsAt: '2026-04-01T00:00:00Z',
    gameIds: [],
    image: '/images/tournament/girl-coins.png',
  },
  {
    id: 'weekly-clash-2',
    title: 'Bitwa Tygodnia',
    status: 'finished',
    type: 'weekly',
    prizePool: 1800,
    currency: 'EUR',
    endsAt: '2026-04-01T23:59:00Z',
    startsAt: '2026-03-30T00:00:00Z',
    gameIds: [],
  },
]
