import { cn } from '@/lib/utils';
import DecorativeDivider from './DecorativeDivider';

interface SectionHeaderProps {
  /** Small uppercase label above the title */
  label?: string;
  /** Main heading text */
  title: string;
  /** Classes for the outer wrapper */
  className?: string;
  /** Classes for the title element */
  titleClassName?: string;
  /** Divider color override for the first bar */
  dividerFirstColor?: string;
  /** Divider color override for the second bar */
  dividerSecondColor?: string;
}

function SectionHeader({
  label,
  title,
  className,
  titleClassName,
  dividerFirstColor,
  dividerSecondColor,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {label && (
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
          {label}
        </p>
      )}
      <h2 className={cn('text-3xl md:text-4xl font-bold tracking-tight mb-2', titleClassName)}>
        {title}
      </h2>
      <DecorativeDivider
        className="my-6"
        firstColor={dividerFirstColor}
        secondColor={dividerSecondColor}
      />
    </div>
  );
}

export default SectionHeader;
