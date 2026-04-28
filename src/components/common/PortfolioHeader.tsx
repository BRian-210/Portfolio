
import React from 'react';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  url: string;
  icon: string;
}

interface PortfolioHeaderProps {
  currentPath: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', url: './home.html', icon: 'Home' },
  { name: 'Projects', url: './project-gallery.html', icon: 'LayoutGrid' },
];

export default function PortfolioHeader({ currentPath = '' }: PortfolioHeaderProps) {
  const normalize = (path: string) => path.replace(/^\.\//, '').replace(/\.html$/, '').replace(/^\//, '');
  const activeNormalized = normalize(currentPath);

  const isActive = (itemUrl: string) => {
    const itemNormalized = normalize(itemUrl);
    if (itemNormalized === 'home' || itemNormalized === '') {
      return activeNormalized === 'home' || activeNormalized === '';
    }
    return activeNormalized === itemNormalized || activeNormalized.startsWith(itemNormalized + '/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="page-container px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="./home.html" 
          className="flex items-center gap-2 group transition-opacity hover:opacity-80"
        >
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.4)]">
            <SafeIcon name="Terminal" className="text-primary-foreground" size={18} strokeWidth={2.5} />
          </div>
          <span className="text-item-title hidden sm:block">
            <span className="text-primary">My</span>Portfolio
          </span>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.url);
            return (
              <a
                key={item.url}
                href={item.url}
                className={cn(
                  "nav-link flex items-center gap-2",
                  active && "active"
                )}
              >
                <SafeIcon name={item.icon as any} size={16} />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
