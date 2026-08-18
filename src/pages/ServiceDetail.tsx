import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, MessageCircle, ArrowRight, ShieldCheck, Truck, Recycle, FileCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { getServiceBySlug, servicesByCategory, Service } from '@/data/services';
import { serviceImages } from '@/data/serviceImages';
import NotFound from './NotFound';

const WHATSAPP_NUMBER = '51902667683';

const getCycleIcon = (index: number, serviceId: string) => {
  if (serviceId === 'venta-banos-duchas-lavamanos-portatiles') {
    return [MessageCircle, FileCheck, Truck, ShieldCheck][index] || CheckCircle;
  }
  if (serviceId === 'destruccion-bienes-fiscalizados-residuos-peligrosos') {
    return [ShieldCheck, Truck, Recycle, FileCheck][index] || CheckCircle;
  }
  return [Truck, ShieldCheck, Recycle, FileCheck][index] || CheckCircle;
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <NotFound />;

  const image = serviceImages[service.imageKey];
  
  const extendedData: any = t(`extendedServices.${service.slug}`, { returnObjects: true });
  const hasExtendedData = extendedData && typeof extendedData === 'object' && extendedData.heroTitle;

  const allServices = [...servicesByCategory.destruccion, ...servicesByCategory.sanitarios];
  const related = allServices.filter(s => s.id !== service.id);

  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
  };

  const getFallbackWhatsAppUrl = (serv: Service) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola ECO M, solicito información sobre ${serv.title}.`)}`;
  };

  const whatsappLink = hasExtendedData 
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(extendedData.whatsappMessage)}`
    : getFallbackWhatsAppUrl(service);

  // Función interna para determinar qué imagen mostrar en la tarjeta lateral según el slug
  const getSidebarCardImage = () => {
    if (service.slug === 'destruccion-equipos-tecnologicos-borrado-datos') {
      return serviceImages['destruccion-raee-card'];
    }
    if (service.slug === 'destruccion-textiles-calzado-uniformes-corporativos') {
      return serviceImages['destruccion-ropa-card'];
    }
    return image;
  };

  return (
    <>
      <section className="relative flex items-center min-h-[50vh] w-full overflow-hidden">
        <img src={image} alt={service.title} className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background tracking-tight max-w-5xl mx-auto leading-tight">
            {hasExtendedData ? extendedData.heroTitle : service.title}
          </h1>
          <div className="flex gap-1 justify-center mt-8 mb-6">
            <div className="w-8 h-1 rounded-full bg-accent" />
            <div className="w-8 h-1 rounded-full bg-background/40" />
          </div>
          
          <p className="text-background/90 mt-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
            {hasExtendedData ? extendedData.heroSubtitle : service.shortDesc}
          </p>

          <p className="text-background/60 mt-8 text-sm">
            <Link to="/" className="hover:text-background transition-colors">{t('nav.inicio')}</Link> / 
            <span className="mx-2">{t('nav.soluciones')}</span> / 
            <span className="text-background ml-2">{hasExtendedData ? extendedData.heroTitle : service.title}</span>
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7">
            {hasExtendedData ? (
              <div className="space-y-16">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {service.slug === 'venta-banos-duchas-lavamanos-portatiles' 
                      ? t('common.whatWeSell') 
                      : t('common.whatWeManage')}
                  </h2>
                  <div className="flex gap-1 mb-6">
                    <div className="w-8 h-1 rounded-full bg-accent" />
                    <div className="w-8 h-1 rounded-full bg-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {extendedData.section2Intro}
                  </p>
                  <div className="grid gap-6 mt-8">
                    {extendedData.products?.map((prod: any, idx: number) => (
                      <div key={idx} className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm flex gap-4">
                        <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-foreground text-lg mb-2">{prod.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{prod.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8 bg-card border border-border/50 p-8 rounded-3xl shadow-sm">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">{extendedData.cycleTitle}</h2>
                  <div className="grid gap-8">
                    {extendedData.cycleSteps?.map((step: any, idx: number) => {
                      const StepIcon = getCycleIcon(idx, service.slug);
                      return (
                        <div key={idx} className="flex gap-5 relative">
                          {idx !== extendedData.cycleSteps.length - 1 && (
                            <div className="absolute left-6 top-14 bottom-[-2rem] w-px bg-border/60" />
                          )}
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 z-10 relative">
                            <StepIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">{extendedData.whyTitle}</h2>
                  <div className="grid gap-5">
                    {extendedData.whyPoints?.map((point: any, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">{point.title}:</strong> {point.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">ECO M</p>
                <h2 className="text-3xl font-bold tracking-tight mb-2">{service.title}</h2>
                <div className="flex gap-1 my-6">
                  <div className="w-8 h-1 rounded-full bg-accent" />
                  <div className="w-8 h-1 rounded-full bg-primary" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">{service.fullDesc}</p>
                <div className="flex flex-col gap-4">
                  {service.benefits?.map((b: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 flex flex-col gap-6">
              {/* Imagen de la tarjeta lateral derecha */}
              <img 
                src={getSidebarCardImage()} 
                alt={service.title} 
                className="rounded-2xl shadow-lg w-full object-cover object-center aspect-[4/3] border border-border/50" 
                loading="lazy" 
              />
              
              <Link 
                to="/contacto" 
                state={{ serviceContext: service.title }}
                className="w-full bg-cta text-cta-foreground flex items-center justify-center gap-2 py-5 rounded-xl font-bold shadow-[0_4px_14px_0_hsl(var(--cta)/0.25)] hover:scale-[1.02] hover:shadow-[0_6px_20px_hsl(var(--cta)/0.35)] transition-all duration-200 text-lg"
              >
                {hasExtendedData ? extendedData.ctaButton : t('form.quote.submit')} <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {hasExtendedData && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center border border-primary/10 bg-primary/5 rounded-3xl py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 max-w-3xl mx-auto leading-tight">
              {extendedData.footerText}
            </h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-whatsapp/90 text-accent-foreground px-8 py-4 rounded-xl text-lg font-bold shadow-[0_8px_24px_rgba(37,211,102,0.25)] hover:-translate-y-1 hover:scale-[1.03] hover:bg-whatsapp hover:shadow-[0_12px_32px_rgba(37,211,102,0.35)] transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6" />
              {t('contacto.contact')} WhatsApp
            </a>
          </div>
        </section>
      )}

      {/* Otras Soluciones */}
      {related.length > 0 && (
        <section className="py-16 bg-[#f4f6f8]">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-display font-bold text-2xl mb-8 text-[#2c6e6b]">{t('common.otherSolutions')}</h3>
            
            <div className="relative group">
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div 
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 px-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style>{`
                  ::-webkit-scrollbar { display: none; }
                `}</style>

                {related.map(s => {
                  const sData: any = t(`extendedServices.${s.slug}`, { returnObjects: true });
                  const finalTitle = (sData && typeof sData === 'object' && sData.heroTitle) ? sData.heroTitle : s.title;

                  // Lógica para el carrusel inferior
                  let imageToShowCarousel = serviceImages[s.imageKey];
                  if (s.imageKey === 'destruccion-raee') {
                    imageToShowCarousel = serviceImages['destruccion-raee-card'];
                  } else if (s.imageKey === 'destruccion-ropa') {
                    imageToShowCarousel = serviceImages['destruccion-ropa-card'];
                  }

                  return (
                    <Link 
                      key={s.id} 
                      to={`/servicios/${s.slug}`} 
                      className="min-w-[300px] md:min-w-[340px] snap-start shrink-0 flex flex-col bg-card rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_32px_-8px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-all duration-300"
                    >
                      <div className="h-40 w-full overflow-hidden relative">
                        <img src={imageToShowCarousel} alt={finalTitle} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" loading="lazy" />
                      </div>
                      <div className="p-5 flex flex-col justify-between flex-grow">
                        <h4 className="font-display font-bold text-sm text-[#2c6e6b] mb-4">{finalTitle}</h4>
                        <span className="inline-flex items-center text-[#5c9d3e] text-xs font-semibold transition-colors">
                          {t('common.viewDetail')} <ArrowRight className="h-3 w-3 ml-1" />
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>

              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>
        </section>
      )}
    </>
  );
};

export default ServiceDetail;