import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FormDialogWrapper } from '@/components/shared';

interface InquiryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InquiryFormDialog = ({ open, onOpenChange }: InquiryFormDialogProps) => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <FormDialogWrapper
      open={open}
      onOpenChange={onOpenChange}
      submitted={submitted}
      onReset={handleReset}
      successMessage={t('form.inquiryForm.success')}
      title={t('form.inquiryForm.title')}
      description={t('form.inquiryForm.description')}
    >
      <form onSubmit={handleSubmit} className="grid gap-4 mt-2">
        <div className="grid gap-1.5">
          <Label htmlFor="inq-name">{t('form.inquiryForm.name')}</Label>
          <Input id="inq-name" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder={t('form.inquiryForm.namePlaceholder')} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="inq-phone">{t('form.inquiryForm.phone')}</Label>
          <Input id="inq-phone" required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value.replace(/\D/g, '') }))} placeholder={t('form.inquiryForm.phonePlaceholder')} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="inq-message">{t('form.inquiryForm.message')}</Label>
          <Textarea id="inq-message" required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder={t('form.inquiryForm.messagePlaceholder')} rows={4} />
        </div>
        <button type="submit" className="w-full mt-2 bg-cta text-cta-foreground py-3 rounded-xl font-semibold hover:scale-[1.03] hover:shadow-[0_6px_20px_hsl(var(--cta)/0.35)] transition-all duration-200">
          {t('form.inquiryForm.submit')}
        </button>
      </form>
    </FormDialogWrapper>
  );
};

export default InquiryFormDialog;
