import { useParams, Link } from 'react-router-dom';
import { CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { getServiceBySlug, servicesByCategory } from '@/data/services';
import { serviceImages } from '@/data/serviceImages';
import NotFound from './NotFound';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <NotFound />;

  const image = serviceImages[service.imageKey];

  // Related services (same category, exclude current)
  const related = (service.category === 'destruccion' ? servicesByCategory.destruccion : servicesByCategory.otros)
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center min-h-[40vh] w-full overflow-hidden">
        <img src={image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background tracking-tight">{service.title}</h1>
          <div className="flex gap-1 justify-center mt-6">
            <div className="w-8 h-1 rounded-full bg-accent" />
            <div className="w-8 h-1 rounded-full bg-background/40" />
          </div>
          <p className="text-background/70 mt-4 text-sm">
            <Link to="/" className="hover:text-background transition-colors">Home</Link> / <Link to="/" className="hover:text-background transition-colors">Servicios</Link> / {service.title}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Text */}
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">ECO MBA</p>
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">{service.title}</h2>
            <div className="flex gap-1 my-6">
              <div className="w-8 h-1 rounded-full bg-accent" />
              <div className="w-8 h-1 rounded-full bg-primary" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{service.fullDesc}</p>

            <div className="flex flex-col gap-4">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Sticky sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 flex flex-col gap-6">
              <img src={image} alt={service.title} className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" loading="lazy" />
              
              <a
                href={getWhatsAppUrl(service)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-whatsapp/90 text-accent-foreground flex items-center justify-center gap-3 py-5 rounded-xl text-lg font-bold shadow-[0_8px_24px_rgba(37,211,102,0.25)] hover:-translate-y-1 hover:bg-whatsapp transition-all duration-300"
              >
                <MessageCircle className="h-6 w-6" />
                Cotizar por WhatsApp
              </a>

              <Link to="/contacto" className="w-full bg-accent text-accent-foreground flex items-center justify-center gap-2 py-4 rounded-xl font-semibold shadow-[0_4px_14px_0_hsl(24_90%_55%/0.39)] hover:opacity-90 transition-opacity">
                Solicitar Información <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-display font-bold text-2xl text-foreground mb-8">Otros Servicios</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map(s => (
                <Link key={s.id} to={`/servicios/${s.slug}`} className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_32px_-8px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <div className="h-40 w-full overflow-hidden">
                    <img src={serviceImages[s.imageKey]} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-bold text-sm text-foreground">{s.title}</h4>
                    <span className="mt-2 inline-flex items-center text-primary text-xs font-medium group-hover:text-accent transition-colors">
                      Ver detalle <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceDetail;
