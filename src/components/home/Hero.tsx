
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import { developerProfileDataList } from '@/data/DeveloperProfileService'
import { techStackDataList } from '@/data/TechStackService'
import type { DeveloperProfileData } from '@/data/DeveloperProfileData'
import type { TechStackData } from '@/data/TechStackData'

export default function Hero() {
  const profile: DeveloperProfileData = developerProfileDataList[0]
  const techStack: TechStackData[] = techStackDataList

  const groupedTech = techStack.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = []
      }
      acc[tech.category].push(tech)
      return acc
    },
    {} as Record<string, TechStackData[]>
  )

  const handleViewWork = () => {
    window.location.href = './project-gallery.html'
  }

  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    devops: 'DevOps',
    design: 'Design',
  }

  return (
    <div className="page-body flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="flex flex-col gap-8 md:gap-12 py-8 md:py-16">
        <div className="flex flex-col gap-6">
          {/* Portrait */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/30 shadow-card flex-shrink-0">
            <img
              src={profile.portraitUrl}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex flex-col gap-2">
              <h1 className="text-page-title text-primary">{profile.name}</h1>
              <p className="text-xl md:text-2xl font-semibold text-foreground/90">
                {profile.title}
              </p>
            </div>

            {/* Summary */}
            <p className="text-body max-w-xl text-foreground/80">
              {profile.summary}
            </p>

            {/* Location & Availability */}
            <div className="flex flex-col gap-2 text-caption">
              <div className="flex items-center gap-2">
                <SafeIcon name="MapPin" size={16} className="text-primary" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <SafeIcon name="Briefcase" size={16} className="text-primary" />
                <span>{profile.availability}</span>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleViewWork}
              className="btn-primary"
              size="lg"
            >
              <SafeIcon name="ArrowRight" size={18} className="mr-2" />
              {profile.primaryCtaLabel}
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="flex flex-col gap-8">
        <div>
          <h2 className="text-section-title mb-2">Tech Stack</h2>
          <p className="text-body text-foreground/70">
            Core technologies and tools I use to build modern, scalable applications.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedTech).map(([category, techs]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-item-title capitalize text-primary/90">
                {categoryLabels[category] || category}
              </h3>

              <div className="flex flex-col gap-3">
                {techs.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <SafeIcon
                      name={tech.iconName}
                      size={20}
                      className="text-primary mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">{tech.name}</div>
                      <p className="text-caption text-foreground/60 line-clamp-2">
                        {tech.description}
                      </p>
                      <div className="text-xs text-primary/70 mt-1 font-mono">
                        {tech.proficiency}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex flex-col gap-6 py-12 px-8 md:px-12 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="flex flex-col gap-3">
          <h2 className="text-section-title">Ready to explore my work?</h2>
          <p className="text-body text-foreground/80 max-w-xl">
            Check out my recent projects and see how I approach fullstack development with a focus on user experience and clean architecture.
          </p>
        </div>
        <div className="flex gap-3 pt-2">
          <Button
            onClick={handleViewWork}
            className="btn-primary"
            size="lg"
          >
            <SafeIcon name="LayoutGrid" size={18} className="mr-2" />
            View Projects
          </Button>
        </div>
      </section>
    </div>
  )
}
