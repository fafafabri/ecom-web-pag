import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import { cn } from '@/lib/utils';

interface FormDialogWrapperProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Whether the form has been submitted successfully */
  submitted: boolean;
  /** Called when dialog closes (after animation) to reset form state */
  onReset: () => void;
  /** Success message shown after submit */
  successMessage: string;
  /** Dialog title */
  title: string;
  /** Dialog description */
  description: string;
  /** Max width class for DialogContent */
  maxWidthClass?: string;
  /** Form content (fields + submit button) */
  children: ReactNode;
}

function FormDialogWrapper({
  open,
  onOpenChange,
  submitted,
  onReset,
  successMessage,
  title,
  description,
  maxWidthClass = 'sm:max-w-md',
  children,
}: FormDialogWrapperProps) {
  const handleClose = (val: boolean) => {
    if (!val) {
      setTimeout(() => {
        onReset();
      }, 300);
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className={cn(maxWidthClass, 'bg-background border-primary/20')}>
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-foreground">
              {successMessage}
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-heading">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default FormDialogWrapper;
