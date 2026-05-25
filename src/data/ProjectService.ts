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
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/7220862e-cd3d-41ae-af08-f601881c4a0f.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/a7f4584c-63d2-405b-aec9-1ebaa1ebfb23.png',
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
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/165c2cf2-a41c-4681-bf81-d0e1fd4e8c13.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/f5bb3d58-ee56-4dc0-a3a3-2e4b2818d312.png',
    year: '2025',
  },
  {
    id: 'project-atelier-ops',
    slug: 'atelier-ops',
    liveUrl: 'https://atelier-ops-production.up.railway.app',
    title: 'Atelier Ops',
    category: 'backend',
    status: 'Completed',
    featured: false,
    shortSummary: 'An internal operations dashboard for scheduling, task routing, and audit logs.',
    longDescription:
      'Atelier Ops supports service teams that need reliability more than flash. The system organizes day-to-day scheduling, issue assignment, and operational visibility.',
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
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/532e7aff-2583-41bb-9a5a-77e43d2a197d.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/7f75fb96-f459-478c-99d4-aabb2b896d23.png',
    year: '2025',
  },
  {
    id: 'project-luma-mobile',
    slug: 'luma-mobile',
    liveUrl: 'https://luma-mobile.vercel.app',
    title: 'Luma Mobile',
    category: 'mobile',
    status: 'In progress',
    featured: false,
    shortSummary: 'A mobile companion app for daily habits, reminders, and lightweight progress tracking.',
    longDescription:
      'Luma Mobile brings habit tracking and reminders into a focused mobile-first flow. It prioritizes quick interactions, readable layouts, and gentle nudges that encourage consistency.',
    challenge:
      'The interface had to work well on small screens while staying pleasant for repeated daily use.',
    solution:
      'I designed concise screens, thumb-friendly interactions, and a data model that keeps the app snappy and easy to extend.',
    architectureHighlights: [
      'Mobile-first navigation patterns',
      'Lightweight daily activity views',
      'Clear progression and reminder states',
    ],
    technologies: ['React', 'TypeScript', 'Design Systems'],
    thumbnailUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/ff1e5773-b0df-4305-a2a2-3852db56bd78.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/49ea99f6-5db5-4065-84cf-f7d697429750.png',
    year: '2026',
  },
  {
    id: 'project-vertex-design-system',
    slug: 'vertex-design-system',
    liveUrl: 'https://vertex-design-system.vercel.app',
    title: 'Vertex Design System',
    category: 'design-system',
    status: 'Case study',
    featured: true,
    shortSummary: 'A reusable component and token system for consistent product interfaces.',
    longDescription:
      'Vertex provides the building blocks for multiple product surfaces, including buttons, forms, navigation patterns, and color tokens. The system reduces design drift and speeds up delivery.',
    challenge:
      'Multiple products were diverging visually and creating inconsistent user experiences.',
    solution:
      'I defined shared tokens, component variants, and documentation patterns that made adoption easy across teams.',
    architectureHighlights: [
      'Token-driven UI foundations',
      'Documented component variants',
      'Scalable adoption across products',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    thumbnailUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/857db564-f158-45c9-a129-353e9188c2f4.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/89030f88-93da-43b7-8731-c28294b5ed66.png',
    year: '2024',
  },
  {
    id: 'project-cascade-analytics',
    slug: 'cascade-analytics',
    liveUrl: 'https://cascade-analytics.onrender.com',
    title: 'Cascade Analytics',
    category: 'fullstack',
    status: 'Completed',
    featured: false,
    shortSummary: 'A reporting platform for viewing business metrics, trends, and exportable summaries.',
    longDescription:
      'Cascade Analytics gives stakeholders a clear place to inspect KPIs, compare time ranges, and export useful reports. It is built to stay responsive while handling dense information.',
    challenge:
      'Users needed a dashboard that could present a lot of data without becoming visually overwhelming.',
    solution:
      'I introduced summary cards, chart groupings, and predictable data queries that keep interactions fluid.',
    architectureHighlights: [
      'Dashboard with multiple reporting modes',
      'Query-friendly metric structures',
      'Export and summary workflows',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    thumbnailUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/ab7846a0-3176-4264-ace1-39d6f32ffeff.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/70099184-7d2d-431f-a41d-ef6047042972.png',
    year: '2025',
  },
  {
    id: 'project-harbor-support',
    slug: 'harbor-support',
    liveUrl: 'https://harbor-support.vercel.app',
    title: 'Harbor Support',
    category: 'frontend',
    status: 'Completed',
    featured: false,
    shortSummary: 'A customer support portal with ticket browsing, assignment, and conversation history.',
    longDescription:
      'Harbor Support streamlines customer issue handling through a friendly interface for support agents and managers. The project emphasizes readability, quick filtering, and ticket context.',
    challenge:
      'Support staff needed faster access to open tickets and previous conversation details.',
    solution:
      'I built streamlined list filters, detail panes, and concise interaction patterns that reduce cognitive load.',
    architectureHighlights: [
      'Fast ticket browsing and filtering',
      'Detail-first customer context',
      'Compact support workflow layout',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    thumbnailUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/5aaa8977-4e22-4703-abaa-4d3ff34c4a92.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/df58065b-5c2e-41ba-b62c-dc35b38bdb52.png',
    year: '2024',
  },
  {
    id: 'project-arc-labs',
    slug: 'arc-labs',
    liveUrl: 'https://arc-labs-production.up.railway.app',
    title: 'Arc Labs',
    category: 'backend',
    status: 'In progress',
    featured: false,
    shortSummary: 'An experimental API platform for validating product ideas and data contracts.',
    longDescription:
      'Arc Labs is a sandbox for prototyping APIs, testing schema changes, and comparing implementation approaches. It helps teams move quickly while keeping contracts explicit.',
    challenge:
      'Fast experimentation often leads to unstable interfaces and unclear service boundaries.',
    solution:
      'I built a structured prototype environment with versioned endpoints and reusable test data patterns.',
    architectureHighlights: [
      'Versioned API experimentation',
      'Schema-first approach',
      'Reusable test fixtures',
    ],
    technologies: ['Node.js', 'Express', 'TypeScript'],
    thumbnailUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/66c1a15c-c977-428a-a757-ecbdabd34fe7.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/42818c79-1249-4012-8320-6b6945399812.png',
    year: '2026',
  },
  {
    id: 'project-nova-launchpad',
    slug: 'nova-launchpad',
    liveUrl: 'https://nova-launchpad.vercel.app',
    title: 'Nova Launchpad',
    category: 'fullstack',
    status: 'Case study',
    featured: true,
    shortSummary: 'A marketing and onboarding website for launching a new SaaS product.',
    longDescription:
      'Nova Launchpad blends editorial storytelling with interactive onboarding steps to guide new users from interest to activation. It showcases design craft while supporting measurable conversion goals.',
    challenge:
      'The product team needed a launch experience that could explain value quickly and convert visitors into signups.',
    solution:
      'I created a content-led structure, responsive landing sections, and data-backed calls to action that support both storytelling and conversion.',
    architectureHighlights: [
      'Conversion-focused landing sections',
      'Onboarding-friendly step flow',
      'Marketing content and product messaging alignment',
    ],
    technologies: ['React', 'Astro', 'Tailwind CSS', 'Node.js'],
    thumbnailUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/11c84b30-4c96-4757-b568-0bd3b4d92f61.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/3ed1a67b-fa54-4f8d-a32c-75b7631695df.png',
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
  thumbnailUrl: getFrontpageThumbnailUrl(project.liveUrl),
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
