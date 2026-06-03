
import { Users, Award, Truck, Wrench, Target, Eye, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import empresaHero from '@/assets/empresa-hero.jpg';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import { PageHeroBanner } from '@/components/shared';

const Empresa = () => {
  const { t } = useTranslation();


  return (
    <>
      <AnimatedSection direction="up" duration={900}>
        <PageHeroBanner
          imageSrc={empresaHero}
          imageAlt="ECO M empresa"
          title={t('empresa.ourCompany')}
          breadcrumb={<>{t('nav.inicio')} / {t('nav.empresa')}</>}
        />
      </AnimatedSection>

      <AnimatedSection direction="up" duration={800} className="py-24 bg-card">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">ECO M</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{t('empresa.who')}</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
              {t('empresa.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, titleKey: 'empresa.mission', descKey: 'empresa.missionDesc' },
              { icon: Eye, titleKey: 'empresa.vision', descKey: 'empresa.visionDesc' },
              { icon: Shield, titleKey: 'empresa.values', descKey: 'empresa.valuesDesc' },
            ].map((item, idx) => (
              <AnimatedSection key={item.titleKey} direction="up" delay={idx * 120} duration={700} className="bg-background rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_32px_-8px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3">{t(item.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" duration={800} className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-12">{t('empresa.capabilities')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, titleKey: 'empresa.staff', value: 200, suffix: '+' },
              { icon: Award, titleKey: 'empresa.certs', value: 4 },
              { icon: Truck, titleKey: 'empresa.trucks', value: 50, suffix: '+' },
              { icon: Wrench, titleKey: 'empresa.experience', value: 25, suffix: '+' },
            ].map((item, idx) => (
              <AnimatedSection key={item.titleKey} direction="up" delay={idx * 100} duration={600} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="font-display font-bold text-3xl text-heading">
                  <AnimatedCounter target={item.value} suffix={item.suffix || ''} />
                </span>
                <span className="text-sm text-muted-foreground mt-1">{t(item.titleKey)}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Empresa;
