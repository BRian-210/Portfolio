export interface ProjectData {
  id: string
  slug: string
  liveUrl: string
  title: string
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'design-system'
  status: 'Completed' | 'In progress' | 'Case study'
  featured: boolean
  shortSummary: string
  longDescription: string
  challenge: string
  solution: string
  architectureHighlights: string[]
  technologies: string[]
  thumbnailUrl: string
  detailImageUrl: string
  year: string
}
