import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import DecorativeDivider from './DecorativeDivider';

interface PageHeroBannerProps {
  /** Background image source */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
  /** Main heading */
  title: string;
  /** Breadcrumb or subtitle content below the divider */
  breadcrumb?: ReactNode;
  /** Additional classes for the outer section */
  className?: string;
  /** Title heading classes override */
  titleClassName?: string;
}

function PageHeroBanner({
  imageSrc,
  imageAlt,
  title,
  breadcrumb,
  className,
  titleClassName,
}: PageHeroBannerProps) {
  return (
    <section className={cn('relative flex items-center min-h-[40vh] w-full overflow-hidden', className)}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/65" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
        <h1 className={cn('text-4xl md:text-6xl font-bold text-background tracking-tight', titleClassName)}>
          {title}
        </h1>
        <DecorativeDivider
          className="justify-center mt-6"
          firstColor="bg-accent"
          secondColor="bg-background/40"
        />
        {breadcrumb && (
          <p className="text-background/70 mt-4 text-sm">{breadcrumb}</p>
        )}
      </div>
    </section>
  );
}

export default PageHeroBanner;
