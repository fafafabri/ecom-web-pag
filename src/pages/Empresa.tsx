import { Target, Eye, Lock, Scale, Leaf, Cog, Video, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import empresaHero from '@/assets/empresa-hero.jpg';
import AnimatedSection from '@/components/AnimatedSection';

const Empresa = () => {
  return (
    <>
      {/* 1. Cabecera Principal (Hero Section) */}
      <section className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] min-h-[45vh] overflow-hidden">
        <img src={empresaHero} alt="ECO M empresa" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 mx-auto flex min-h-[45vh] w-full max-w-7xl items-center justify-center px-6 py-20 text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-background tracking-tight leading-tight">
              Compromiso con la Seguridad, Confidencialidad y Protección de Marca
            </h1>
            <div className="flex gap-1 justify-center mt-6 mb-4">
              <div className="w-8 h-1 rounded-full bg-accent" />
              <div className="w-8 h-1 rounded-full bg-background/40" />
            </div>
            <p className="text-base md:text-xl text-background/90 font-medium leading-relaxed">
              Somos el aliado estratégico de las empresas en el Perú para la inhabilitación segura de activos, destrucción de información confidencial y gestión de mermas bajo estricto cumplimiento normativo.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Link
                to="/#soluciones"
                className="bg-cta text-cta-foreground px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-[1.03] transition-all inline-flex items-center gap-2"
              >
                Conocer Soluciones
              </Link>

              <a
                href={`https://wa.me/51902667683?text=${encodeURIComponent('Hola, deseo conocer más sobre los servicios y acreditaciones de ECO M.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-background border border-background/40 px-6 py-3 rounded-xl font-semibold hover:bg-background/15 hover:border-background/60 hover:scale-[1.03] transition-all inline-flex items-center"
              >
                Hablar con un Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sección: Quiénes Somos */}
      <AnimatedSection direction="up" duration={800} className="py-20 bg-card">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">ECO M</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">¿Quiénes Somos?</h2>
          <p className="text-center text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
            En ECO M (Expert Destruction Management) nos especializamos en mitigar los riesgos operativos, legales y reputacionales de las organizaciones. Entendemos que la acumulación de inventarios obsoletos, la indumentaria con logotipo corporativo y el manejo de archivos con datos sensibles representan una vulnerabilidad para su empresa si caen en manos equivocadas.
            <br /><br />
            Diseñamos e implementamos procesos de destrucción física e inhabilitación irreversible, operando bajo la normativa ambiental del MINAM/OEFA y brindando el sustento notarial exigido por la SUNAT para la deducción de mermas y desmedros en el Impuesto a la Renta.
          </p>
        </div>
      </AnimatedSection>

      {/* 3. Sección: Misión y Visión */}
      <AnimatedSection direction="up" duration={800} className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-center w-full">
                Proteger el prestigio y la propiedad intelectual de nuestros clientes mediante procesos blindados de destrucción, garantizando la trazabilidad total, el cumplimiento legal y una disposición final ambientalmente responsable.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-center w-full">
                Ser la empresa referente en el Perú en gestión de destrucción corporativa y protección de marca, reconocida por nuestra rigurosidad operativa, transparencia y excelencia en el servicio B2B.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Sección: Pilares Operativos (Nuestros Valores) */}
      <AnimatedSection direction="up" duration={800} className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">NUESTROS VALORES</p>
          <h2 className="text-3xl font-bold tracking-tight mb-12">Pilares Operativos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: 'Confidencialidad y Custodia',
                desc: 'Proteger la información de nuestros clientes es una prioridad absoluta. Mantenemos una cadena de custodia estricta desde la recolección hasta la trituración final.'
              },
              {
                icon: Scale,
                title: 'Rigor Legal y Tributario',
                desc: 'Ejecutamos cada procedimiento con presencia notarial y documentación auditable para garantizar la validez del proceso ante la SUNAT.'
              },
              {
                icon: Leaf,
                title: 'Sostenibilidad y Economía Circular',
                desc: 'Priorizamos la valorización de residuos (reciclaje de papel, cartón y metales) y la disposición responsable para reducir el impacto ambiental.'
              },
              {
                icon: Cog,
                title: 'Eficiencia Operativa',
                desc: 'Respuestas ágiles y soluciones logísticas adaptadas a la escala y necesidades específicas de cada industria.'
              }
            ].map((pilar, idx) => (
              <AnimatedSection key={pilar.title} direction="up" delay={idx * 100} className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <pilar.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="min-h-[3.5rem] flex items-center justify-center mb-2 w-full">
                  <h3 className="font-bold text-lg text-center leading-snug">{pilar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed text-center">{pilar.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 5. Sección: Garantías de Cumplimiento */}
      <AnimatedSection direction="up" duration={800} className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">RESPALDO CORPORATIVO</p>
          <h2 className="text-3xl font-bold tracking-tight mb-12">Garantías de Cumplimiento</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Video,
                title: 'Trazabilidad Garantizada',
                desc: 'Registro fotográfico y en video de los procesos de destrucción para archivos y auditorías internas.'
              },
              {
                icon: Award,
                title: 'Certificación Oficial',
                desc: 'Emisión de Certificados de Destrucción y Manifiestos de Manejo de Residuos válidos ante las autoridades competentes.'
              },
              {
                icon: ShieldCheck,
                title: 'Protección Antifraude',
                desc: 'Inhabilitación mecánica de uniformes, empaques y productos para erradicar cualquier riesgo de falsificación o comercialización informal.'
              }
            ].map((garantia, idx) => (
              <AnimatedSection key={garantia.title} direction="up" delay={idx * 120} className="bg-card rounded-2xl p-6 border border-border/60 shadow-sm flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <garantia.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="min-h-[3rem] flex items-center justify-center mb-2 w-full">
                  <h3 className="font-bold text-xl text-center leading-tight">{garantia.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed text-center">{garantia.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 6. Llamado a la Acción Final (Banner CTA) */}
      <AnimatedSection direction="up" duration={800} className="pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <section className="py-16 bg-primary/5 rounded-3xl text-center px-6 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
                ¿Busca un aliado confiable para la protección de su marca y la baja segura de sus activos?
              </h2>
              <a
                href={`https://wa.me/51902667683?text=${encodeURIComponent('Hola, estoy en la página de Conócenos y busco un aliado para la protección de mi marca.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cta text-cta-foreground px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-[1.03] transition-all inline-flex items-center gap-2"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </section>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Empresa;