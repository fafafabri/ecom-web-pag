import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
              {t('form.quote.success')}
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-heading">{t('form.quote.title')}</DialogTitle>
              <DialogDescription>{t('form.quote.description')}</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 mt-2">
              <div className="grid gap-1.5">
                <Label htmlFor="contactName">{t('form.quote.contactName')}</Label>
                <Input id="contactName" required value={form.contactName} onChange={e => setForm(f => ({ ...f, contactName: e.target.value }))} placeholder={t('form.quote.contactNamePlaceholder')} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="companyName">{t('form.quote.companyName')}</Label>
                  <Input id="companyName" required value={form.companyName} onChange={e => setForm(f => ({ ...f, companyName: e.target.value }))} placeholder={t('form.quote.companyNamePlaceholder')} />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="ruc">{t('form.quote.ruc')}</Label>
                  <Input id="ruc" required maxLength={11} value={form.ruc} onChange={e => setForm(f => ({ ...f, ruc: e.target.value.replace(/\D/g, '') }))} placeholder={t('form.quote.rucPlaceholder')} />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label>{t('form.quote.service')}</Label>
                <Select required value={form.service} onValueChange={val => setForm(f => ({ ...f, service: val }))}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('form.quote.servicePlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t('form.quote.destruction')}</SelectLabel>
                      <SelectItem value="Destrucción Notarial de Documentos">{t('nav.services.destruccion_notarial')}</SelectItem>
                      <SelectItem value="Destrucción de Residuos">{t('nav.services.destruccion_residuos')}</SelectItem>
                      <SelectItem value="Destrucción de Residuos de Aparatos Eléctricos y Electrónicos (RAEE)">{t('nav.services.destruccion_raee')}</SelectItem>
                      <SelectItem value="Destrucción de Ropa">{t('nav.services.destruccion_ropa')}</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>{t('form.quote.management')}</SelectLabel>
                      <SelectItem value="Gestión IQBF">{t('nav.services.gestion_iqbf')}</SelectItem>
                      <SelectItem value="Transporte Maptel">{t('nav.services.transporte_maptel')}</SelectItem>
                      <SelectItem value="Recojo y Transporte de Residuos">{t('nav.services.recojo_transporte')}</SelectItem>
                      <SelectItem value="Disposición Final">{t('nav.services.disposicion_final')}</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>{t('form.quote.others')}</SelectLabel>
                      <SelectItem value="Venta de Sanitarios Portátiles">{t('nav.services.sanitarios')}</SelectItem>
                      <SelectItem value="Limpieza de Trampas de Grasa">{t('nav.services.limpieza_grasas')}</SelectItem>
                      <SelectItem value="Limpieza de Pozos Sépticos">{t('nav.services.limpieza_pozos')}</SelectItem>
                      <SelectItem value="Asesorías Ambientales">{t('nav.services.asesorias')}</SelectItem>
                      <SelectItem value="Limpieza de Biodigestores">{t('nav.services.limpieza_biodigestores')}</SelectItem>
                      <SelectItem value="Comercialización de Materiales">{t('nav.services.comercializacion')}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="volume">{t('form.quote.volume')}</Label>
                  <Input id="volume" required value={form.volume} onChange={e => setForm(f => ({ ...f, volume: e.target.value }))} placeholder={t('form.quote.volumePlaceholder')} />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="district">{t('form.quote.district')}</Label>
                  <Input id="district" required value={form.district} onChange={e => setForm(f => ({ ...f, district: e.target.value }))} placeholder={t('form.quote.districtPlaceholder')} />
                </div>
              </div>
              <button type="submit" className="w-full mt-2 bg-cta text-cta-foreground py-3 rounded-xl font-semibold hover:scale-[1.03] hover:shadow-[0_6px_20px_hsl(var(--cta)/0.35)] transition-all duration-200">
                {t('form.quote.submit')}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormDialog;
