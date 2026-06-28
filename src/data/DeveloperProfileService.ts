import type { DeveloperProfileData } from './DeveloperProfileData'

export const developerProfileDataList: DeveloperProfileData[] = [
  {
    id: 'profile-bryan githinji',
    name: 'Brian Githinji',
    title: 'Fullstack Developer',
    headline: 'Building polished web products with modern React and reliable backend systems.',
    summary:
      'I design and ship end-to-end applications with a focus on UX quality, scalable APIs, and maintainable architecture.',
    location: 'Remote • Nairobi, Kenya',
    availability: 'Open to freelance and full-time roles',
    primaryCtaLabel: 'View My Work',
    primaryCtaUrl: './project-gallery.html',
    portraitUrl:
      'public/uploads/Image May 19, 2026, 05_12_30 AM.png',
  },
]

export function getAll(): DeveloperProfileData[] {
  return developerProfileDataList
}

export function getById(id: string): DeveloperProfileData | undefined {
  return developerProfileDataList.find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<never, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): DeveloperProfileData[] {
  const keyword = params.keyword?.toLowerCase().trim()
  const items = developerProfileDataList.filter((item) => {
    const matchKeyword =
      !keyword ||
      [item.name, item.title, item.headline, item.summary, item.location, item.availability]
        .join(' ')
        .toLowerCase()
        .includes(keyword)

    return matchKeyword
  })

  const sorted = [...items]
  const sortKey = params.sortKey
  if (sortKey) {
    sorted.sort((a, b) => {
      const av = String((a as any)[sortKey] ?? '')
      const bv = String((b as any)[sortKey] ?? '')
      if (av < bv) return params.sortDirection === 'desc' ? 1 : -1
      if (av > bv) return params.sortDirection === 'desc' ? -1 : 1
      return 0
    })
  }

  return sorted
}

export function loadPersisted(): DeveloperProfileData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('developerProfileDataList')
  if (!raw) return null
  try {
    return JSON.parse(raw) as DeveloperProfileData[]
  } catch {
    return null
  }
}

export function savePersisted(items: DeveloperProfileData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('developerProfileDataList', JSON.stringify(items))
}
