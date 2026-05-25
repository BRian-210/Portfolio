import { useMemo } from 'react'
import SafeIcon from '@/components/common/SafeIcon'
import * as ProjectService from '@/data/ProjectService'

interface ProjectDetailContentProps {
  projectId?: string
}

export default function ProjectDetailContent({ projectId }: ProjectDetailContentProps) {
  const project = useMemo(() => {
    if (!projectId) return undefined
    return ProjectService.getById(projectId)
  }, [projectId])

  if (!project) {
    return (
      <div className="page-body py-10">
        <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card/40 p-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
            <SafeIcon name="SearchX" className="text-primary" />
          </div>
          <h1 className="text-page-title">Project not found</h1>
          <p className="text-body text-muted-foreground">
            The project you are looking for does not exist or the link is invalid.
          </p>
          <a href="./project-gallery.html" className="btn-primary inline-flex">
            <SafeIcon name="ArrowLeft" size={16} className="mr-2" />
            Back to Project Gallery
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="page-body py-8 md:py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <a href="./project-gallery.html" className="inline-flex items-center text-caption hover:text-primary transition-colors">
          <SafeIcon name="ArrowLeft" size={16} className="mr-2" />
          Back to Project Gallery
        </a>

        <div className="space-y-3">
          <p className="text-caption uppercase tracking-wide text-primary/80">
            {project.category} · {project.year}
          </p>
          <h1 className="text-page-title">{project.title}</h1>
          <p className="text-body text-muted-foreground max-w-3xl">{project.longDescription}</p>
          <div className="pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <SafeIcon name="ExternalLink" size={16} className="mr-2" />
              Visit Live App
            </a>
          </div>
        </div>

        <div className="aspect-video w-full rounded-xl overflow-hidden border border-border/60 bg-muted">
          <img src={project.detailImageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="surface-base rounded-xl border border-border p-6 space-y-3">
            <h2 className="text-section-title">Challenge</h2>
            <p className="text-body text-muted-foreground">{project.challenge}</p>
          </div>
          <div className="surface-base rounded-xl border border-border p-6 space-y-3">
            <h2 className="text-section-title">Solution</h2>
            <p className="text-body text-muted-foreground">{project.solution}</p>
          </div>
        </div>

        <div className="surface-base rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-section-title">Architecture Highlights</h2>
          <ul className="space-y-2">
            {project.architectureHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-body text-muted-foreground">
                <SafeIcon name="CheckCircle2" size={18} className="text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-base rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-section-title">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
