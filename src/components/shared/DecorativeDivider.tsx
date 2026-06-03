import { cn } from '@/lib/utils';

interface DecorativeDividerProps {
  /** First bar color class (default: bg-accent) */
  firstColor?: string;
  /** Second bar color class (default: bg-primary) */
  secondColor?: string;
  /** Additional wrapper classes */
  className?: string;
}

function DecorativeDivider({
  firstColor = 'bg-accent',
  secondColor = 'bg-primary',
  className,
}: DecorativeDividerProps) {
  return (
    <div className={cn('flex gap-1', className)}>
      <div className={cn('w-8 h-1 rounded-full', firstColor)} />
      <div className={cn('w-8 h-1 rounded-full', secondColor)} />
    </div>
  );
}

export default DecorativeDivider;
