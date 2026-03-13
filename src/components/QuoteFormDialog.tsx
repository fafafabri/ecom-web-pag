import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle } from 'lucide-react';

interface QuoteFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteFormDialog = ({ open, onOpenChange }: QuoteFormDialogProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    contactName: '',
    companyName: '',
    ruc: '',
    service: '',
    volume: '',
    district: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({ contactName: '', companyName: '', ruc: '', service: '', volume: '', district: '' });
      }, 300);
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-background border-primary/20">
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
              <DialogTitle className="text-xl font-bold text-primary">Solicitud de Cotización</DialogTitle>
              <DialogDescription>Complete los datos y nos pondremos en contacto.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 mt-2">
              <div className="grid gap-1.5">
                <Label htmlFor="contactName">Nombre del Contacto *</Label>
                <Input id="contactName" required value={form.contactName} onChange={e => setForm(f => ({ ...f, contactName: e.target.value }))} placeholder="Juan Pérez" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="companyName">Nombre de la Empresa *</Label>
                  <Input id="companyName" required value={form.companyName} onChange={e => setForm(f => ({ ...f, companyName: e.target.value }))} placeholder="Mi Empresa S.A.C." />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="ruc">RUC *</Label>
                  <Input id="ruc" required maxLength={11} value={form.ruc} onChange={e => setForm(f => ({ ...f, ruc: e.target.value.replace(/\D/g, '') }))} placeholder="20123456789" />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label>Servicio que desea realizar *</Label>
                <Select required value={form.service} onValueChange={val => setForm(f => ({ ...f, service: val }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Destrucción</SelectLabel>
                      <SelectItem value="Destrucción Notarial de Documentos">Notarial de Documentos</SelectItem>
                      <SelectItem value="Destrucción de Residuos">Residuos</SelectItem>
                      <SelectItem value="Destrucción de RAEE">RAEE</SelectItem>
                      <SelectItem value="Destrucción de Ropa">Ropa</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Gestión y Transporte</SelectLabel>
                      <SelectItem value="Gestión IQBF">IQBF</SelectItem>
                      <SelectItem value="Transporte Maptel">Maptel</SelectItem>
                      <SelectItem value="Recojo y Transporte de Residuos">Recojo de Residuos</SelectItem>
                      <SelectItem value="Disposición Final">Disposición Final</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Otros</SelectLabel>
                      <SelectItem value="Venta de Sanitarios Portátiles">Venta de Sanitarios Portátiles</SelectItem>
                      <SelectItem value="Limpieza de Trampas de Grasa">Limpieza de Trampas de Grasa</SelectItem>
                      <SelectItem value="Limpieza de Pozos Sépticos">Limpieza de Pozos Sépticos</SelectItem>
                      <SelectItem value="Limpieza Industrial">Limpieza Industrial</SelectItem>
                      <SelectItem value="Asesorías Ambientales">Asesorías Ambientales</SelectItem>
                      <SelectItem value="Limpieza de Biodigestores">Limpieza de Biodigestores</SelectItem>
                      <SelectItem value="Comercialización de Materiales">Comercialización de Materiales</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="volume">Volumen aproximado (Ton/Kg) *</Label>
                  <Input id="volume" required value={form.volume} onChange={e => setForm(f => ({ ...f, volume: e.target.value }))} placeholder="Ej: 2 Ton" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="district">Distrito de recojo *</Label>
                  <Input id="district" required value={form.district} onChange={e => setForm(f => ({ ...f, district: e.target.value }))} placeholder="Ej: San Isidro" />
                </div>
              </div>
              <button type="submit" className="w-full mt-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Enviar Solicitud
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormDialog;
