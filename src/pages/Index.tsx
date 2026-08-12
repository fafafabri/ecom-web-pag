import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Users from 'lucide-react/dist/esm/icons/users';
import Award from 'lucide-react/dist/esm/icons/award';
import Truck from 'lucide-react/dist/esm/icons/truck';
import Wrench from 'lucide-react/dist/esm/icons/wrench';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import { useTranslation } from 'react-i18next';
import { services } from '@/data/services';
import { serviceImages } from '@/data/serviceImages';
import heroBg from '@/assets/imagen-inicio.png';
import empresaImg from '@/assets/empresa-hero.jpg';
import certIso from '@/assets/cert-iso9001.png';
import certBqsr from '@/assets/cert-bqsr.png';
import certIas from '@/assets/cert-ias.png';
import certIaf from '@/assets/cert-iaf.png';
import QuoteFormDialog from '@/components/QuoteFormDialog';
import InquiryFormDialog from '@/components/InquiryFormDialog';
import AnimatedCounter from '@/components/AnimatedCounter';
import AnimatedSection from '@/components/AnimatedSection';

/* ─── Componente principal ─── */
const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const { t } = useTranslation();
  const featuredServices = services.slice(0, 6);

  // Hero mount animation
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Ensure smooth scroll behavior is enabled globally (fallback for browsers/styles that don't set it)
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = prev || '';
    };
  }, []);

  const pillars = [
    { icon: Users,  title: t('why.pillars.qualified'),     desc: t('why.pillars.qualifiedDesc') },
    { icon: Award,  title: t('why.pillars.certifications'), desc: t('why.pillars.certificationsDesc') },
    { icon: Truck,  title: t('why.pillars.fleet'),          desc: t('why.pillars.fleetDesc') },
    { icon: Wrench, title: t('why.pillars.equipment'),      desc: t('why.pillars.equipmentDesc') },
  ];

  const certifications = [
    { name: 'ISO 9001', img: certIso },
    { name: 'BQSR',     img: certBqsr },
    { name: 'IAS',      img: certIas },
    { name: 'IAF',      img: certIaf },
  ];

  const stats = [
    { value: 15,   suffix: '+', label: 'Años de experiencia' },
    { value: 500,  suffix: '+', label: 'Clientes atendidos' },
    { value: 98,   suffix: '%', label: 'Satisfacción' },
    { value: 1200, suffix: '+', label: 'Proyectos completados' },
  ];

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative flex items-center min-h-[92vh] w-full overflow-hidden">
        {/* Imagen de fondo con zoom suave */}
        <img
          src={heroBg}
          alt="Planta industrial ECO M"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${heroVisible ? 'scale-105' : 'scale-100'}`}
          loading="eager"
        />

        {/* Overlay con gradiente más rico */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-foreground/30" />

        {/* Orbes decorativos animados */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

        {/* Contenido del hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <p
            className={`text-lg md:text-xl text-background/90 font-medium mb-4 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Brindamos soluciones corporativas para la inhabilitación de mercadería, destrucción de archivos confidenciales y baja de activos con estricto respaldo notarial y cumplimiento normativo.
          </p>

          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold text-background tracking-tight max-w-4xl leading-[1.1] transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Expertos en Destrucción Segura y Protección de Marca.
          </h1>

          {/* Línea decorativa animada */}
          <div
            className={`flex gap-1 mt-6 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="w-12 h-1 rounded-full bg-accent" />
            <div className="w-6 h-1 rounded-full bg-primary" />
          </div>

          <div
            className={`flex flex-wrap gap-4 mt-10 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <a
              href="#soluciones"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined') {
                  const el = document.querySelector('#soluciones');
                  if (el) {
                    (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    // Fallback: change hash
                    window.location.hash = '#soluciones';
                  }
                }
              }}
              className="group bg-cta text-cta-foreground px-8 py-4 rounded-xl font-semibold shadow-[0_4px_14px_0_hsl(var(--cta)/0.4)] hover:shadow-[0_8px_24px_hsl(var(--cta)/0.5)] hover:scale-[1.04] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
            >
              Ver Soluciones de Destrucción
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={`https://wa.me/51933342580?text=${encodeURIComponent('Hola, deseo cotizar un servicio con ECO M.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-background border border-background/40 px-8 py-4 rounded-xl font-semibold hover:bg-background/15 hover:border-background/60 hover:scale-[1.03] hover:shadow-[0_4px_14px_rgba(255,255,255,0.15)] transition-all duration-300 backdrop-blur-sm inline-flex items-center"
            >
              Contactar a un Asesor
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-700 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1200ms' }}
        >
          <span className="text-background/50 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5 text-background/50 animate-bounce" />
        </div>
      </section>

      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
      <InquiryFormDialog open={inquiryOpen} onOpenChange={setInquiryOpen} />

      {/* ══════════════ ESTADÍSTICAS ══════════════ */}
      <section className="py-16 bg-primary relative overflow-hidden">
        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <AnimatedSection direction="up" threshold={0.2} duration={700}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-4xl md:text-5xl font-bold text-white font-display">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white/70 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ══════════════ WHY CHOOSE US ══════════════ */}
      <section className="py-28 bg-card relative overflow-hidden">
        {/* Gradiente decorativo esquina */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <AnimatedSection direction="left" duration={700}>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">{t('why.label')}</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{t('why.title')}</h2>
              <div className="flex gap-1 my-6">
                <div className="w-8 h-1 rounded-full bg-accent" />
                <div className="w-8 h-1 rounded-full bg-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">{t('why.desc')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((p, i) => (
                  <AnimatedSection key={p.title} direction="up" duration={600} delay={200 + i * 100}>
                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-background hover:shadow-md transition-all duration-300 cursor-default">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <p.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                      <h3 className="font-display font-bold text-sm">{p.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
            {/* Imagen con efecto */}
            <AnimatedSection direction="right" duration={700} delay={200}>
              {/* Marco decorativo desfasado */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20 pointer-events-none" />
              <img
                src={empresaImg}
                alt="ECO M operaciones"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3] hover:shadow-2xl transition-shadow duration-500"
                loading="lazy"
              />
              {/* Badge flotante */}
              <div className="absolute -bottom-5 -left-5 bg-primary text-white px-5 py-3 rounded-xl shadow-lg font-semibold text-sm">
                ✓ Certificados internacionalmente
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICIOS ══════════════ */}
      <section id="soluciones" className="py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <AnimatedSection direction="up" threshold={0.1} duration={700}>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">{t('services.label')}</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('services.title')}</h2>
                <div className="flex gap-1 mt-4">
                  <div className="w-8 h-1 rounded-full bg-accent" />
                  <div className="w-8 h-1 rounded-full bg-primary" />
                </div>
              </div>
              <Link
                to="/servicios/destruccion-de-documentos"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary hover:scale-[1.03] hover:shadow-md transition-all duration-300 group"
              >
                {t('services.more')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((s, i) => (
              <AnimatedSection key={s.id} direction="up" duration={600} delay={i * 80} threshold={0.1}>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="group relative flex flex-col bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-400"
                >
                  {/* Imagen */}
                  <div className="h-48 w-full overflow-hidden relative">
                    <img
                      src={serviceImages[s.imageKey]}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Shimmer overlay al hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Borde superior de color al hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                  {/* Contenido */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.shortDesc}</p>
                    <span className="mt-4 inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      {t('services.learnMore')}
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Botón mobile */}
          <div className="mt-10 flex justify-center md:hidden">
            <Link
              to="/servicios/destruccion-de-documentos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              {t('services.more')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ CERTIFICACIONES — marquee infinito ══════════════ */}
      <section className="py-16 bg-card border-t border-border overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Avalados por organismos internacionales
          </p>
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        {/* Marquee: duplicamos los logos para el loop infinito */}
        <div className="flex gap-16 w-max animate-[marquee_12s_linear_infinite] hover:[animation-play-state:paused]">
          {[...certifications, ...certifications].map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className="flex flex-col items-center gap-2 group cursor-default select-none"
            >
              <img
                src={cert.img}
                alt={cert.name}
                className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
              />
              <span className="text-xs text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
