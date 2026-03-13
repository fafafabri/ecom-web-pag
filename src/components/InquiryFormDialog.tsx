import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';

interface InquiryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InquiryFormDialog = ({ open, onOpenChange }: InquiryFormDialogProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', phone: '', message: '' });
      }, 300);
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-background border-primary/20">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-foreground">
              Un asesor se comunicará a la brevedad con usted
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-primary">Consulta Rápida</DialogTitle>
              <DialogDescription>Déjenos su consulta y le responderemos pronto.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 mt-2">
              <div className="grid gap-1.5">
                <Label htmlFor="inq-name">Nombre *</Label>
                <Input id="inq-name" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Juan Pérez" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="inq-phone">Teléfono *</Label>
                <Input id="inq-phone" required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value.replace(/\D/g, '') }))} placeholder="987654321" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="inq-message">Duda o Consulta *</Label>
                <Textarea id="inq-message" required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Escriba su consulta aquí..." rows={4} />
              </div>
              <button type="submit" className="w-full mt-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Enviar Consulta
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InquiryFormDialog;
