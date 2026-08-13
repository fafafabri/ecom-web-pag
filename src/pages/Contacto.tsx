import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import contactoHero from '@/assets/contacto-hero.jpg';
import AnimatedSection from '@/components/AnimatedSection';

const Contacto = () => {
  const { t } = useTranslation();
  
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    ruc: '',
    email: '',
    telefono: '',
    servicio: '',
    consulta: ''
  });

  const plantas = [
    { address: 'Valle Hermoso El Arenal, Mz. M Lote 6, Puente Piedra.' },
    { address: 'Calle Apurímac 07, Ancón, Lima-Perú.' },
    { address: 'Mz. M Lote 114 Asoc. Parque Porcino Zona 1, Ventanilla, Callao.' },
  ];

  const serviciosOpciones = [
    t('newNav.services.s1'),
    t('newNav.services.s2'),
    t('newNav.services.s3'),
    t('newNav.services.s4'),
    t('newNav.services.s5'),
    t('newNav.services.s6'),
    t('newNav.services.s7')
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contactoPage.successMessage'));
    setForm({ nombre: '', empresa: '', ruc: '', email: '', telefono: '', servicio: '', consulta: '' });
  };

  // Pequeña variable para saber si estamos en inglés y traducir los días de la semana manualmente
  const isEnglish = t('nav.inicio') === 'Home';

  return (
    <>
      {/* 1. Cabecera Principal (Hero Section) */}
      <section className="relative flex items-center min-h-[45vh] w-full overflow-hidden">
        <img src={contactoHero} alt="Contacto ECO M" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 w-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-background tracking-tight leading-tight mb-6">
            {t('contactoPage.heroTitle')}
          </h1>
          <div className="flex gap-1 justify-center mb-6">
            <div className="w-8 h-1 rounded-full bg-accent" />
            <div className="w-8 h-1 rounded-full bg-background/40" />
          </div>
          <p className="text-base md:text-lg text-background/90 font-medium leading-relaxed mb-8">
            {t('contactoPage.heroSubtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => {
                const el = document.getElementById('formulario');
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="bg-cta text-cta-foreground px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-[1.03] transition-all inline-flex items-center gap-2"
            >
              {t('contactoPage.btnForm')}
            </button>
            <a
              href={`https://wa.me/51902667683?text=${encodeURIComponent('Hola, deseo solicitar una cotización formal con ECO M.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-background border border-background/40 px-6 py-3 rounded-xl font-semibold hover:bg-background/15 hover:border-background/60 hover:scale-[1.03] transition-all inline-flex items-center"
            >
              {t('contactoPage.btnWhatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* 2 & 3. Formulario y Canales de Atención */}
      <section id="formulario" className="py-24 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Bloque Lateral: Canales Directos */}
          <div className="lg:col-span-4 h-full">
            <AnimatedSection direction="up" className="bg-heading rounded-2xl p-8 text-primary-foreground h-full shadow-lg">
              <div className="flex gap-1 mb-4">
                <div className="w-6 h-1 rounded-full bg-accent" />
                <div className="w-6 h-1 rounded-full bg-primary-foreground/40" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-8 text-primary-foreground">
                {t('contactoPage.channelsTitle')}
              </h3>

              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-primary-foreground/70 uppercase tracking-wider mb-2 font-semibold">
                      {t('contactoPage.directLines')}
                    </p>
                    <a href="tel:+51902667683" className="block text-base font-semibold font-mono tabular-nums hover:text-accent transition-colors mb-1">902 667 683</a>
                    <a href="tel:+51960695955" className="block text-base font-semibold font-mono tabular-nums hover:text-accent transition-colors mb-1">960 695 955</a>
                    <a href="tel:+51922719251" className="block text-base font-semibold font-mono tabular-nums hover:text-accent transition-colors">922 719 251</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-primary-foreground/70 uppercase tracking-wider mb-2 font-semibold">
                      {t('contactoPage.corporateEmail')}
                    </p>
                    <a href="mailto:comercial@eco-mperu.com" className="text-base font-semibold hover:text-accent transition-colors">comercial@eco-mperu.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-primary-foreground/70 uppercase tracking-wider mb-2 font-semibold">
                      {t('contactoPage.businessHours')}
                    </p>
                    <p className="text-base font-medium mb-1">
                      {isEnglish ? 'Monday to Friday:' : 'Lunes a Viernes:'}<br/>
                      <span className="font-semibold">8:00 am - 5:30 pm</span>
                    </p>
                    <p className="text-base font-medium">
                      {isEnglish ? 'Saturdays:' : 'Sábados:'}<br/>
                      <span className="font-semibold">8:00 am - 12:30 pm</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-primary-foreground/70 uppercase tracking-wider mb-2 font-semibold">
                      {t('contactoPage.plants')}
                    </p>
                    {plantas.map((p, idx) => (
                      <p key={idx} className="text-sm font-medium mb-3 leading-snug">
                        • {p.address}
                      </p>
                    ))}
                    <div className="w-full h-32 bg-primary-foreground/10 rounded-lg mt-4 flex items-center justify-center border border-primary-foreground/20">
                      <span className="text-xs text-primary-foreground/60 text-center px-4">
                        {t('contactoPage.mapComingSoon')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Formulario B2B */}
          <div className="lg:col-span-8">
            <AnimatedSection direction="up" delay={100}>
              <h2 className="font-display font-bold text-3xl mb-3">{t('contactoPage.formTitle')}</h2>
              <div className="flex gap-1 my-4">
                <div className="w-8 h-1 rounded-full bg-accent" />
                <div className="w-8 h-1 rounded-full bg-primary" />
              </div>
              <p className="text-muted-foreground mb-8 text-lg">{t('contactoPage.formSubtitle')}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="Page_URL" value={typeof window !== 'undefined' ? window.location.href : ''} />
                <input type="hidden" name="Page_Title" value="Contacto - ECO M" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground ml-1">{t('contactoPage.formName')}</label>
                    <input type="text" required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} className="w-full bg-background border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground ml-1">{t('contactoPage.formCompany')}</label>
                    <input type="text" required value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} className="w-full bg-background border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground ml-1">{t('contactoPage.formRuc')}</label>
                    <input type="text" value={form.ruc} onChange={e => setForm({ ...form, ruc: e.target.value })} className="w-full bg-background border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground ml-1">{t('contactoPage.formPhone')}</label>
                    <input type="tel" required value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} className="w-full bg-background border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground ml-1">{t('contactoPage.formEmail')}</label>
                  <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-background border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground outline-none transition-all" />
                </div>

                <div className="space-y-2 relative">
                  <label className="text-sm font-medium text-foreground ml-1">{t('contactoPage.formService')}</label>
                  <div className="relative">
                    <select value={form.servicio} onChange={e => setForm({ ...form, servicio: e.target.value })} className="w-full bg-background border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground outline-none transition-all appearance-none pr-10 cursor-pointer">
                      <option value="" disabled>{t('contactoPage.formServiceSelect')}</option>
                      {serviciosOpciones.map((opcion, idx) => (
                        <option key={idx} value={opcion}>{opcion}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground ml-1">{t('contactoPage.formDetails')}</label>
                  <textarea rows={5} value={form.consulta} onChange={e => setForm({ ...form, consulta: e.target.value })} className="w-full bg-background border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground outline-none transition-all resize-none" />
                </div>

                <button type="submit" className="w-full sm:w-auto bg-cta text-cta-foreground px-8 py-4 rounded-xl font-bold hover:scale-[1.02] transition-all shadow-[0_4px_14px_0_hsl(var(--cta)/0.3)]">
                  {t('contactoPage.formSubmit')}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. Llamado a la Acción Final */}
      <AnimatedSection direction="up" duration={800} className="pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <section className="py-16 bg-primary/5 rounded-3xl text-center px-6 mx-auto max-w-7xl border border-primary/10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
                {t('contactoPage.urgencyTitle')}
              </h2>
              <a
                href={`https://wa.me/51902667683?text=${encodeURIComponent('Hola, estoy en la web de ECO M y deseo contactar de urgencia con un asesor comercial.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cta text-cta-foreground px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-[1.03] transition-all inline-flex items-center gap-2"
              >
                {t('contactoPage.urgencyBtn')}
              </a>
            </div>
          </section>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Contacto;