import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { getServiceBySlug, servicesByCategory, Service } from '@/data/services';
import { serviceImages } from '@/data/serviceImages';
import NotFound from './NotFound';
import { PageHeroBanner, SectionHeader } from '@/components/shared';

const WHATSAPP_NUMBER = '51933342580';

function getWhatsAppUrl(service: Service): string {
  const title = service.title;
  let msg = '';

  if (service.id.startsWith('destruccion-') || service.id === 'manejo-raee') {
    msg = `Hola ECO M, solicito cotización para ${title}. Detalle del material: [ ], ¿Requiere Notario?: [ ], Peso aprox: [ ].`;
  } else if (service.id === 'sanitarios-portatiles') {
    msg = `Hola ECO M, solicito información sobre Sanitarios Portátiles. Cantidad: [ ], Tipo/Modelo: [ ].`;
  } else if (['trampas-grasa', 'pozos-septicos', 'biodigestores'].includes(service.id)) {
    msg = `Hola ECO M, solicito servicio de ${title}. Capacidad aprox: [ ], Distrito: [ ], ¿Cuándo fue su última limpieza?: [ ].`;
  } else if (['gestion-iqbf', 'transporte-maptel', 'recojo-residuos', 'disposicion-final', 'carga-transporte'].includes(service.id)) {
    msg = `Hola ECO M, solicito servicio de ${title}. Tipo de carga: [ ], Volumen: [ ], Origen/Destino: [ ].`;
  } else {
    msg = `Hola ECO M, solicito información sobre ${title}.`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const serviceKeyMap: { [key: string]: string } = {
  'destruccion-documentos': 'destruccionDocumentos',
  'destruccion-residuos': 'destruccionResiduos',
  'destruccion-raee': 'destruccionRAEE',
  'destruccion-ropa': 'destruccionRopa',
  'gestion-iqbf': 'gestionIQBF',
  'transporte-maptel': 'transporteMaptel',
  'recojo-residuos': 'recojoresiduos',
  'disposicion-final': 'disposicionFinal',
  'manejo-raee': 'manejoRAEE',
  'sanitarios-portatiles': 'sanitariosPortatiles',
  'trampas-grasa': 'limpiezaGrasas',
  'pozos-septicos': 'limpiezaPozos',
  'limpieza-industrial': 'limpiezaIndustrial',
  'asesorias-ambientales': 'asesorias',
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <NotFound />;

  const image = serviceImages[service.imageKey];
  const serviceKey = serviceKeyMap[service.id] || service.id;
  const serviceData = t(`serviceDetails.${serviceKey}`, { returnObjects: true }) as { title: string; desc: string; benefits: string[] };

  const related = (service.category === 'destruccion' ? servicesByCategory.destruccion : servicesByCategory.otros)
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <PageHeroBanner
        imageSrc={image}
        imageAlt={service.title}
        title={serviceData?.title || service.title}
        titleClassName="text-3xl md:text-5xl lg:text-6xl"
        breadcrumb={
          <>
            <Link to="/" className="hover:text-background transition-colors">{t('nav.inicio')}</Link> / <Link to="/" className="hover:text-background transition-colors">{t('nav.soluciones')}</Link> / {serviceData?.title || service.title}
          </>
        }
      />

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionHeader
              label="ECO M"
              title={serviceData?.title || service.title}
              titleClassName="text-3xl"
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{serviceData?.desc || service.fullDesc}</p>

            <div className="flex flex-col gap-4">
              {(serviceData?.benefits || service.benefits).map((b: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 flex flex-col gap-6">
              <img src={image} alt={service.title} className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" loading="lazy" />
              
              <a
                href={getWhatsAppUrl(service)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-whatsapp/90 text-accent-foreground flex items-center justify-center gap-3 py-5 rounded-xl text-lg font-bold shadow-[0_8px_24px_rgba(37,211,102,0.25)] hover:-translate-y-1 hover:scale-[1.03] hover:bg-whatsapp hover:shadow-[0_12px_32px_rgba(37,211,102,0.35)] transition-all duration-300"
              >
                <MessageCircle className="h-6 w-6" />
                {t('contacto.contact')} WhatsApp
              </a>

              <Link to="/contacto" className="w-full bg-cta text-cta-foreground flex items-center justify-center gap-2 py-4 rounded-xl font-semibold shadow-[0_4px_14px_0_hsl(var(--cta)/0.25)] hover:scale-[1.03] hover:shadow-[0_6px_20px_hsl(var(--cta)/0.35)] transition-all duration-200">
                {t('form.quote.submit')} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-display font-bold text-2xl mb-8">Otras Soluciones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map(s => (
                <Link key={s.id} to={`/servicios/${s.slug}`} className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_32px_-8px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-all duration-300">
                  <div className="h-40 w-full overflow-hidden">
                    <img src={serviceImages[s.imageKey]} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-bold text-sm">{s.title}</h4>
                    <span className="mt-2 inline-flex items-center text-primary text-xs font-medium group-hover:text-heading transition-colors">
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
