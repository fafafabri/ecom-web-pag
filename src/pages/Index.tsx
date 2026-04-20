import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Truck, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { services, servicesByCategory } from '@/data/services';
import { serviceImages } from '@/data/serviceImages';
import heroBg from '@/assets/hero-bg.jpg';
import empresaImg from '@/assets/empresa-hero.jpg';
import certIso from '@/assets/cert-iso9001.png';
import certBqsr from '@/assets/cert-bqsr.png';
import certIas from '@/assets/cert-ias.png';
import certIaf from '@/assets/cert-iaf.png';
import QuoteFormDialog from '@/components/QuoteFormDialog';
import InquiryFormDialog from '@/components/InquiryFormDialog';

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const { t } = useTranslation();
  const featuredServices = services.slice(0, 6);

  const pillars = [
    { icon: Users, title: t('why.pillars.qualified'), desc: t('why.pillars.qualifiedDesc') },
    { icon: Award, title: t('why.pillars.certifications'), desc: t('why.pillars.certificationsDesc') },
    { icon: Truck, title: t('why.pillars.fleet'), desc: t('why.pillars.fleetDesc') },
    { icon: Wrench, title: t('why.pillars.equipment'), desc: t('why.pillars.equipmentDesc') },
  ];

  const certifications = [
    { name: 'ISO 9001', img: certIso },
    { name: 'BQSR', img: certBqsr },
    { name: 'IAS', img: certIas },
    { name: 'IAF', img: certIaf },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center min-h-[85vh] w-full overflow-hidden">
        <img src={heroBg} alt="Planta industrial ECO M" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <p className="text-sm uppercase tracking-[0.2em] text-background/70 font-medium mb-4">
            {t('hero.subtitle')}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-background tracking-tight max-w-4xl leading-[1.1]">
            {t('hero.title')}
          </h1>
          <div className="flex flex-wrap gap-4 mt-10">
            <button onClick={() => setQuoteOpen(true)} className="bg-cta text-cta-foreground px-8 py-4 rounded-xl font-semibold shadow-[0_4px_14px_0_hsl(var(--cta)/0.35)] hover:shadow-[0_6px_20px_hsl(var(--cta)/0.4)] hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
              {t('hero.btnContact')} <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => setInquiryOpen(true)} className="bg-transparent text-background border border-background/30 px-8 py-4 rounded-xl font-semibold hover:bg-background/10 hover:scale-[1.03] hover:shadow-[0_4px_14px_rgba(255,255,255,0.15)] transition-all duration-300">
              {t('hero.btnInquiry')}
            </button>
          </div>
        </div>
      </section>

      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
      <InquiryFormDialog open={inquiryOpen} onOpenChange={setInquiryOpen} />

      {/* Why Choose Us */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">{t('why.label')}</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {t('why.title')}
              </h2>
              <div className="flex gap-1 my-6">
                <div className="w-8 h-1 rounded-full bg-accent" />
                <div className="w-8 h-1 rounded-full bg-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t('why.desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map(p => (
                  <div key={p.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <p.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm">{p.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={empresaImg} alt="ECO M operaciones" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">{t('services.label')}</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('services.title')}</h2>
              <div className="flex gap-1 mt-4">
                <div className="w-8 h-1 rounded-full bg-accent" />
                <div className="w-8 h-1 rounded-full bg-primary" />
              </div>
            </div>
            <Link to="/servicios/destruccion-de-documentos" className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-primary/5 hover:scale-[1.03] hover:shadow-md transition-all duration-200">
              {t('services.more')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map(s => (
              <Link key={s.id} to={`/servicios/${s.slug}`} className="group relative flex flex-col bg-card rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_32px_-8px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-all duration-300">
                <div className="h-48 w-full overflow-hidden">
                  <img src={serviceImages[s.imageKey]} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.shortDesc}</p>
                  <span className="mt-4 inline-flex items-center text-primary font-medium text-sm group-hover:text-heading transition-colors">
                    {t('services.learnMore')} <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {certifications.map(cert => (
              <div key={cert.name} className="flex items-center gap-3">
                <img src={cert.img} alt={cert.name} className="h-20 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
