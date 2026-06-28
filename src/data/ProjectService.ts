import type { ProjectData } from './ProjectData'

const rawProjectDataList: ProjectData[] = [
  {
    id: 'project-construction-company',
    slug: 'construction-company',
    liveUrl: 'https://malta-zeta.vercel.app/home-page.html',
    title: 'Construction Company',
    category: 'fullstack',
    status: 'Completed',
    featured: true,
    shortSummary: 'A website for a construction company.',
    longDescription:
      'A website for a construction company.',
    challenge:
      'The team needed a website for their construction company.',
    solution:
      'I designed a website for the construction company.',
    architectureHighlights: [
      'Website for the construction company.',
    ],
    technologies: ['TypeScript,Astro,JavaScript,CSS'],
    thumbnailUrl:
      'public/uploads/Malta.png',
    detailImageUrl:
      'public/uploads/Malta.png',
    year: '2026',
  },
  {
    id: 'project-school-website',
    slug: 'school-website',
    liveUrl: 'https://karumande.onrender.com/',
    title: 'School Website',
    category: 'fullstack',
    status: 'Completed',
    featured: true,
    shortSummary: 'A website for a school.',
    longDescription:
      'A website for a school.',
    challenge:
      'The team needed a website for their school.',
    solution:
      'I designed a website for the school.',
    architectureHighlights: [
      'Website for the school.',
    ],
    technologies: ['HTML', 'CSS', 'javascript'],
    thumbnailUrl:
      'public/uploads/School.png',
    detailImageUrl:
      'public/uploads/School.png',
    year: '2025',
  },
  {
    id: 'project-uber-app',
    slug: 'Bossie Ride',
    liveUrl: 'https://atelier-ops-production.up.railway.app',
    title: 'Bossie Ride',
    category: 'fullstack',
    status: 'In progress',
    featured: true,
    shortSummary: 'Uber App.',
    longDescription:
      'A fullstack uber app that lets client choose their best ride on a budget.',
    challenge:
      'Operational teams were losing time to scattered communication and manual scheduling tasks.',
    solution:
      'I modeled the workflow around clear queue states, audit-friendly events, and lightweight UI surfaces for quick decisions.',
    architectureHighlights: [
      'Event-led task lifecycle',
      'Audit trail for operational actions',
      'Simple and fast admin interactions',
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    thumbnailUrl:
      'public/uploads/Bossie.png',
    detailImageUrl:
      'public/uploads/Bossie.png',
    year: '2025',
  },
]

function resolveLocalImagePath(url: string): string {
  const trimmed = url.trim()
  const isAbsoluteLocalPath =
    /^[a-zA-Z]:[\\/]/.test(trimmed) ||
    trimmed.startsWith('/home/') ||
    trimmed.startsWith('/Users/') ||
    trimmed.startsWith('\\\\')

  if (!isAbsoluteLocalPath) return trimmed

  const filename = trimmed.split(/[\\/]/).pop()
  return filename ? `/uploads/${filename}` : trimmed
}

function getFrontpageThumbnailUrl(liveUrl: string): string {
  const normalizedUrl = liveUrl.trim()
  return `https://image.thum.io/get/width/1200/crop/700/noanimate/${encodeURIComponent(normalizedUrl)}`
}

export const projectDataList: ProjectData[] = rawProjectDataList.map((project) => ({
  ...project,
  thumbnailUrl: resolveLocalImagePath(project.thumbnailUrl || getFrontpageThumbnailUrl(project.liveUrl)),
  detailImageUrl: resolveLocalImagePath(project.detailImageUrl),
}))

export function getAll(): ProjectData[] {
  return projectDataList
}

export function getById(id: string): ProjectData | undefined {
  return projectDataList.find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<'category' | 'status' | 'featured', string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): ProjectData[] {
  const keyword = params.keyword?.toLowerCase().trim()
  const filter = params.filter ?? {}

  const items = projectDataList.filter((item) => {
    const matchKeyword =
      !keyword ||
      [
        item.title,
        item.shortSummary,
        item.longDescription,
        item.challenge,
        item.solution,
        item.category,
        item.status,
        item.year,
        item.technologies.join(' '),
      ]
        .join(' ')
        .toLowerCase()
        .includes(keyword)

    const matchFilter = Object.entries(filter).every(([key, val]) => {
      if (val === undefined) return true
      const itemVal = (item as any)[key]
      return Array.isArray(val) ? val.includes(itemVal) : itemVal === val
    })

    return matchKeyword && matchFilter
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

export function loadPersisted(): ProjectData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('projectDataList')
  if (!raw) return null
  try {
    return JSON.parse(raw) as ProjectData[]
  } catch {
    return null
  }
}

export function savePersisted(items: ProjectData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('projectDataList', JSON.stringify(items))
}
