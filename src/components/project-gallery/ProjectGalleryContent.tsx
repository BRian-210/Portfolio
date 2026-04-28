
import { useMemo } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import ProjectCard from '@/components/common/ProjectCard'
import * as ProjectService from '@/data/ProjectService'
import type { ProjectData } from '@/data/ProjectData'

const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All Projects' },
  { value: 'fullstack', label: 'Fullstack' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'design-system', label: 'Design System' },
]

export default function ProjectGalleryContent() {
  const allProjects = useMemo(() => ProjectService.getAll(), [])
  const [category, setCategory] = useState<string>('all')
  const [isClient, setIsClient] = useState(true)

  useEffect(() => {
    setIsClient(false)
    
    const params = new URLSearchParams(window.location.search)
    const urlCategory = params.get('category')
    
    if (urlCategory && CATEGORY_OPTIONS.some(opt => opt.value === urlCategory)) {
      setCategory(urlCategory)
    }
    
    requestAnimationFrame(() => {
      setIsClient(true)
    })
  }, [])

  const filteredProjects = useMemo(() => {
    if (category === 'all') {
      return allProjects
    }
    return allProjects.filter(project => project.category === category)
  }, [allProjects, category])

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    const url = new URL(window.location.href)
    if (value === 'all') {
      url.searchParams.delete('category')
    } else {
      url.searchParams.set('category', value)
    }
    window.history.replaceState({}, '', url.toString())
  }

  return (
    <div className="section-spacing">
      {/* Page Header */}
      <div>
        <h1 className="text-page-title mb-3">Project Gallery</h1>
        <p className="text-body text-muted-foreground max-w-2xl">
          A curated selection of fullstack projects, case studies, and design systems I've built. 
          Each project showcases technical depth, thoughtful architecture, and real-world problem solving.
        </p>
      </div>

      {/* Filter Bar */}
      {isClient && (
        <div className="filter-bar">
          <label className="text-label">Filter by category:</label>
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORY_OPTIONS.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {category !== 'all' && (
            <span className="text-caption text-muted-foreground">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      )}

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={{
                id: project.id,
                title: project.title,
                description: project.shortSummary,
                tags: project.technologies.slice(0, 3),
                thumbnail: project.thumbnailUrl,
                status: project.status,
              }}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="text-lg font-medium mb-2">No projects found</p>
          <p className="text-muted-foreground">
            Try selecting a different category or browse all projects.
          </p>
        </div>
      )}
    </div>
  )
}
