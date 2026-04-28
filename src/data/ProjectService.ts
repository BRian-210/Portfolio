import type { ProjectData } from './ProjectData'

export const projectDataList: ProjectData[] = [
  {
    id: 'project-signal-suite',
    slug: 'signal-suite',
    title: 'Signal Suite',
    category: 'fullstack',
    status: 'Completed',
    featured: true,
    shortSummary: 'A client portal for tracking leads, proposals, and internal notes in one workspace.',
    longDescription:
      'Signal Suite combines a fast React interface with a structured API layer to help small teams manage sales operations without spreadsheet chaos. The product emphasizes clarity, responsive workflows, and a dependable data model.',
    challenge:
      'The team needed a way to centralize fragmented sales data while keeping the UI simple enough for non-technical users.',
    solution:
      'I designed a modular dashboard, reusable form patterns, and a predictable backend contract that reduced user friction and made future feature expansion easier.',
    architectureHighlights: [
      'Role-aware navigation and workspace layout',
      'Typed form validation with reusable inputs',
      'API-first data flow with clean separation of concerns',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    thumbnailUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/7220862e-cd3d-41ae-af08-f601881c4a0f.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/a7f4584c-63d2-405b-aec9-1ebaa1ebfb23.png',
    year: '2026',
  },
  {
    id: 'project-northstar-commerce',
    slug: 'northstar-commerce',
    title: 'Northstar Commerce',
    category: 'fullstack',
    status: 'Completed',
    featured: true,
    shortSummary: 'An ecommerce storefront with product discovery, cart management, and checkout flows.',
    longDescription:
      'Northstar Commerce focuses on conversion-friendly browsing and a resilient checkout path. The implementation balances visual polish with practical performance and maintainable server logic.',
    challenge:
      'The storefront needed better product discovery and a checkout experience that felt seamless across device sizes.',
    solution:
      'I created responsive browsing components, a typed cart state flow, and backend services that kept inventory and order state predictable.',
    architectureHighlights: [
      'Composable product listing architecture',
      'Stateful cart with resilient persistence',
      'Responsive checkout experience',
    ],
    technologies: ['React', 'Astro', 'Node.js', 'Tailwind CSS'],
    thumbnailUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/165c2cf2-a41c-4681-bf81-d0e1fd4e8c13.png',
    detailImageUrl:
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/28/f5bb3d58-ee56-4dc0-a3a3-2e4b2818d312.png',
    year: '2025',
  },
  {
    id: 'project-atelier-ops',
    slug: 'atelier-ops',
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
