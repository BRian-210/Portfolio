
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import SafeIcon from "@/components/common/SafeIcon";

interface ProjectCardData {
  id: string;
  liveUrl?: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  status?: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, liveUrl, title, description, tags, thumbnail, status } = project;
  const detailUrl = `./project-detail.html?projectId=${id}`;
  const targetUrl = liveUrl || detailUrl;
  const isExternal = /^https?:\/\//.test(targetUrl);

  const getStatusClass = (status?: string) => {
    const s = status?.toLowerCase();
    if (s === "completed") return "status-badge live";
    if (s === "in progress" || s === "in-progress") return "status-badge in-progress";
    if (s === "case study") return "status-badge archived";
    return "status-badge archived";
  };

  const statusLabel = status || "Archived";

  return (
    <a
      href={targetUrl}
      className="block h-full"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <Card className="project-card-hover group flex flex-col h-full surface-base overflow-hidden cursor-pointer">
        {/* Thumbnail / Placeholder */}
        <div className="aspect-video w-full photo-placeholder shrink-0 relative overflow-hidden">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <SafeIcon
                name="CodeXml"
                className="text-muted-foreground/20 w-16 h-16"
                strokeWidth={1}
              />
            </div>
          )}

          {/* Status Badge Overlay */}
          {status && (
            <div className="absolute top-3 right-3">
              <div className={getStatusClass(status)}>
                {status.toLowerCase() === 'completed' && <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
                {statusLabel}
              </div>
            </div>
          )}
        </div>

        <CardHeader className="p-5 pb-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-item-title group-hover:text-primary transition-colors line-clamp-1">
              {title}
            </h3>
            <SafeIcon
              name="ArrowUpRight"
              className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
              size={18}
            />
          </div>
        </CardHeader>

        <CardContent className="px-5 py-0 flex-1">
          <p className="text-caption line-clamp-3 mb-4">
            {description}
          </p>
        </CardContent>

        <CardFooter className="px-5 pb-5 pt-2 flex flex-wrap gap-2">
          {(tags || []).map((tag) => (
            <span key={tag} className="tech-badge">
              {tag}
            </span>
          ))}
        </CardFooter>
      </Card>
    </a>
  );
}
