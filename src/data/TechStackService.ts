import type { TechStackData } from './TechStackData'

export const techStackDataList: TechStackData[] = [
  {
    id: 'stack-react',
    name: 'React',
    category: 'frontend',
    iconName: 'Zap',
    description: 'Component-driven UI development with strong state management patterns.',
    proficiency: 'Core',
  },
  {
    id: 'stack-typescript',
    name: 'TypeScript',
    category: 'frontend',
    iconName: 'Braces',
    description: 'Strict typing for safer interfaces, reusable models, and robust refactors.',
    proficiency: 'Core',
  },
  {
    id: 'stack-astro',
    name: 'Astro',
    category: 'frontend',
    iconName: 'Layers3',
    description: 'Fast content-first delivery with island architecture for interactive pages.',
    proficiency: 'Advanced',
  },
  {
    id: 'stack-node',
    name: 'Node.js',
    category: 'backend',
    iconName: 'Server',
    description: 'API services, server-side logic, and data orchestration.',
    proficiency: 'Core',
  },
  {
    id: 'stack-express',
    name: 'Express',
    category: 'backend',
    iconName: 'Workflow',
    description: 'Lightweight HTTP endpoints and clean request handling.',
    proficiency: 'Advanced',
  },
  {
    id: 'stack-postgresql',
    name: 'PostgreSQL',
    category: 'database',
    iconName: 'Database',
    description: 'Relational schema design and dependable data modeling.',
    proficiency: 'Advanced',
  },
  {
    id: 'stack-tailwind',
    name: 'Tailwind CSS',
    category: 'design',
    iconName: 'Palette',
    description: 'Rapid visual iteration with consistent utility-based styling.',
    proficiency: 'Core',
  },
  {
    id: 'stack-docker',
    name: 'Docker',
    category: 'devops',
    iconName: 'Boxes',
    description: 'Containerized local development and deployment parity.',
    proficiency: 'Working knowledge',
  },
]

export function getAll(): TechStackData[] {
  return techStackDataList
}

export function getById(id: string): TechStackData | undefined {
  return techStackDataList.find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<'category', string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): TechStackData[] {
  const keyword = params.keyword?.toLowerCase().trim()
  const filter = params.filter ?? {}

  const items = techStackDataList.filter((item) => {
    const matchKeyword =
      !keyword || [item.name, item.category, item.description, item.proficiency].join(' ').toLowerCase().includes(keyword)

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

export function loadPersisted(): TechStackData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('techStackDataList')
  if (!raw) return null
  try {
    return JSON.parse(raw) as TechStackData[]
  } catch {
    return null
  }
}

export function savePersisted(items: TechStackData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('techStackDataList', JSON.stringify(items))
}
