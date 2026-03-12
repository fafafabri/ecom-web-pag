import { Users, Award, Truck, Wrench, Target, Eye, Shield } from 'lucide-react';
import empresaHero from '@/assets/empresa-hero.jpg';

const Empresa = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center min-h-[40vh] w-full overflow-hidden">
        <img src={empresaHero} alt="ECO MBA empresa" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-background tracking-tight">Nuestra Empresa</h1>
          <div className="flex gap-1 justify-center mt-6">
            <div className="w-8 h-1 rounded-full bg-accent" />
            <div className="w-8 h-1 rounded-full bg-background/40" />
          </div>
          <p className="text-background/70 mt-4 text-sm">Home / Empresa</p>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">ECO MBA</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">¿Quiénes Somos?</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
              ECO MBA es una empresa líder en la gestión integral de residuos sólidos y generación de energía renovable. Con más de 25 años de experiencia, brindamos soluciones ambientales responsables a empresas e industrias en todo el Perú.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Misión', desc: 'Brindar soluciones integrales en gestión de residuos sólidos con responsabilidad ambiental, contribuyendo al desarrollo sostenible del país.' },
              { icon: Eye, title: 'Visión', desc: 'Ser la empresa líder en gestión ambiental y reciclaje en Latinoamérica, reconocida por su innovación y compromiso con el medio ambiente.' },
              { icon: Shield, title: 'Valores', desc: 'Responsabilidad ambiental, integridad, compromiso con la seguridad, innovación constante y servicio de excelencia.' },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_24px_-4px_rgba(0,0,0,0.02)]">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-12">Nuestras Capacidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Personal Calificado', value: '+200' },
              { icon: Award, title: 'Certificaciones', value: '4' },
              { icon: Truck, title: 'Flota de Camiones', value: '+50' },
              { icon: Wrench, title: 'Años de Experiencia', value: '+25' },
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="font-display font-bold text-3xl text-foreground">{item.value}</span>
                <span className="text-sm text-muted-foreground mt-1">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Empresa;
