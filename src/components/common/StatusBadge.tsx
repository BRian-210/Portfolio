
import SafeIcon from '@/components/common/SafeIcon';

export interface StatusBadgeProps {
  status: 'live' | 'in-progress' | 'archived';
  className?: string;
}

const statusConfig: Record<
  StatusBadgeProps['status'],
  { label: string; icon: string; className: string }
> = {
  live: {
    label: 'Live',
    icon: 'Radio',
    className: 'live',
  },
  'in-progress': {
    label: 'In Progress',
    icon: 'Hammer',
    className: 'in-progress',
  },
  archived: {
    label: 'Archived',
    icon: 'Archive',
    className: 'archived',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <div
      className={cn(
        'status-badge',
        config.className,
        className
      )}
    >
      <SafeIcon 
        name={config.icon} 
        size={12} 
        strokeWidth={2.5} 
      />
      <span>{config.label}</span>
    </div>
  );
}

export default StatusBadge;
