
import type { FC } from 'react';

/**
 * TechBadge component for showcasing technology tags.
 * Uses semantic classes defined in global.css for consistent branding.
 */
interface TechBadgeProps {
  /** The name of the technology (e.g., "React", "Node.js") */
  label: string;
  /** Visual variant: 'default' uses muted tones, 'highlight' uses the brand cyan accent */
  variant?: 'default' | 'highlight';
}

const TechBadge: FC<TechBadgeProps> = ({ label, variant = 'default' }) => {
  return (
    <span
      className={cn(
        'tech-badge whitespace-nowrap',
        variant === 'highlight' && 'highlight'
      )}
    >
      {label}
    </span>
  );
};

export default TechBadge;
