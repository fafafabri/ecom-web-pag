import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactInfoItemProps {
  /** Lucide icon component */
  icon: LucideIcon;
  /** Small label text */
  label?: string;
  /** Content rendered below the label */
  children: ReactNode;
  /** Icon color class (default: text-primary) */
  iconColor?: string;
  /** Label opacity class (default: opacity-60) */
  labelOpacity?: string;
  /** Additional wrapper classes */
  className?: string;
}

function ContactInfoItem({
  icon: Icon,
  label,
  children,
  iconColor = 'text-primary',
  labelOpacity = 'opacity-60',
  className,
}: ContactInfoItemProps) {
  return (
    <div className={cn('flex gap-3', className)}>
      <Icon className={cn('h-5 w-5 mt-0.5 shrink-0', iconColor)} />
      <div>
        {label && <p className={cn('text-xs mb-1', labelOpacity)}>{label}</p>}
        {children}
      </div>
    </div>
  );
}

export default ContactInfoItem;
