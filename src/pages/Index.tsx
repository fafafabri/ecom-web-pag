import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Truck, Wrench } from 'lucide-react';
import { services, servicesByCategory } from '@/data/services';
import { serviceImages } from '@/data/serviceImages';
import heroBg from '@/assets/hero-bg.jpg';
import empresaImg from '@/assets/empresa-hero.jpg';
import certIso from '@/assets/cert-iso9001.png';
import certBqsr from '@/assets/cert-bqsr.png';
import certIas from '@/assets/cert-ias.png';
import certIaf from '@/assets/cert-iaf.png';

const pillars = [
  { icon: Users, title: 'Personal Calificado', desc: 'Con certificaciones, experiencia y capacitaciones constantes.' },
  { icon: Award, title: 'Certificaciones', desc: 'Contamos con ISO 9001, BQSR, IAS, IAF.' },
  { icon: Truck, title: 'Flota de Camiones', desc: 'Con todos los permisos para el transporte nacional.' },
  { icon: Wrench, title: 'Equipos y Maquinarias', desc: 'De última tecnología para gestión de residuos y destrucciones.' },
];

const certifications = [
  { name: 'ISO 9001', img: certIso },
  { name: 'BQSR', img: certBqsr },
  { name: 'IAS', img: certIas },
  { name: 'IAF', img: certIaf },
];

const Index = () => {
  // Show first 6 services on home
  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center min-h-[85vh] w-full overflow-hidden">
        <img src={heroBg} alt="Planta industrial ECO MBA" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <p className="text-sm uppercase tracking-[0.2em] text-background/70 font-medium mb-4">
            Destrucción de documentos, mermas, mercadería, inventarios, residuos en general
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-background tracking-tight max-w-4xl leading-[1.1]">
            Destrucción de Materiales y Productos
          </h1>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/contacto" className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold shadow-[0_4px_14px_0_hsl(24_90%_55%/0.39)] hover:shadow-[0_6px_20px_hsl(24_90%_55%/0.23)] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
              CONTACTO <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/51933342580?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="bg-transparent text-background border border-background/30 px-8 py-4 rounded-xl font-semibold hover:bg-background/10 transition-colors duration-300">
              CONSULTAS
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">ECO MBA</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
                Gestión Integral de Residuos Sólidos
              </h2>
              <div className="flex gap-1 my-6">
                <div className="w-8 h-1 rounded-full bg-accent" />
                <div className="w-8 h-1 rounded-full bg-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Empresa líder en la gestión integral de residuos y generación de energía renovable. Brindamos varios servicios: transporte de mercadería, recojo de residuos sólidos no peligrosos, peligrosos, destrucción de materiales dados de baja.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map(p => (
                  <div key={p.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <p.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-foreground">{p.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={empresaImg} alt="ECO MBA operaciones" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">ECO MBA</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Servicios</h2>
              <div className="flex gap-1 mt-4">
                <div className="w-8 h-1 rounded-full bg-accent" />
                <div className="w-8 h-1 rounded-full bg-primary" />
              </div>
            </div>
            <Link to="/servicios/destruccion-de-documentos" className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-primary/5 transition-colors">
              + SERVICIOS <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map(s => (
              <Link key={s.id} to={`/servicios/${s.slug}`} className="group relative flex flex-col bg-card rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_32px_-8px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="h-48 w-full overflow-hidden">
                  <img src={serviceImages[s.imageKey]} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.shortDesc}</p>
                  <span className="mt-4 inline-flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
                    Saber más <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {certifications.map(cert => (
              <div key={cert} className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <span className="font-display font-bold text-2xl text-foreground">{cert}</span>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Certificación</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
