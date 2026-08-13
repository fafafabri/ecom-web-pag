import { useTranslation } from 'react-i18next';
import { Target, Eye, Lock, Scale, Leaf, Cog, Video, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import empresaHero from '@/assets/empresa-hero.jpg';
import AnimatedSection from '@/components/AnimatedSection';

const Empresa = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] min-h-[45vh] overflow-hidden">
        <img src={empresaHero} alt="ECO M empresa" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 mx-auto flex min-h-[45vh] w-full max-w-7xl items-center justify-center px-6 py-20 text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-background tracking-tight leading-tight">
              {t('aboutPage.heroTitle')}
            </h1>
            <div className="flex gap-1 justify-center mt-6 mb-4">
              <div className="w-8 h-1 rounded-full bg-accent" />
              <div className="w-8 h-1 rounded-full bg-background/40" />
            </div>
            <p className="text-base md:text-xl text-background/90 font-medium leading-relaxed">
              {t('aboutPage.heroSubtitle')}
            </p>

            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Link
                to="/#soluciones"
                className="bg-cta text-cta-foreground px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-[1.03] transition-all inline-flex items-center gap-2"
              >
                {t('aboutPage.btnSolutions')}
              </Link>

              <a
                href={`https://wa.me/51902667683`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-background border border-background/40 px-6 py-3 rounded-xl font-semibold hover:bg-background/15 hover:border-background/60 hover:scale-[1.03] transition-all inline-flex items-center"
              >
                {t('aboutPage.btnSpecialist')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection direction="up" duration={800} className="py-20 bg-card">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">{t('why.label')}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">{t('aboutPage.whoWeAre')}</h2>
          <p className="text-justify text-muted-foreground leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
            {t('aboutPage.intro1')}
            <br /><br />
            {t('aboutPage.intro2')}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" duration={800} className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">{t('aboutPage.missionTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
                {t('aboutPage.missionText')}
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">{t('aboutPage.visionTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
                {t('aboutPage.visionText')}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" duration={800} className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">{t('aboutPage.pillarsPre')}</p>
          <h2 className="text-3xl font-bold tracking-tight mb-12">{t('aboutPage.pillarsTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { icon: Lock, title: t('aboutPage.p1Title'), desc: t('aboutPage.p1Text') },
              { icon: Scale, title: t('aboutPage.p2Title'), desc: t('aboutPage.p2Text') },
              { icon: Leaf, title: t('aboutPage.p3Title'), desc: t('aboutPage.p3Text') },
              { icon: Cog, title: t('aboutPage.p4Title'), desc: t('aboutPage.p4Text') }
            ].map((pilar, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 100} className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <pilar.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="min-h-[3.5rem] flex items-start mb-2">
                  <h3 className="font-bold text-lg leading-tight">{pilar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed text-left">{pilar.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" duration={800} className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">{t('aboutPage.guaranteesPre')}</p>
          <h2 className="text-3xl font-bold tracking-tight mb-12">{t('aboutPage.guaranteesTitle')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Video, title: t('aboutPage.g1Title'), desc: t('aboutPage.g1Text') },
              { icon: Award, title: t('aboutPage.g2Title'), desc: t('aboutPage.g2Text') },
              { icon: ShieldCheck, title: t('aboutPage.g3Title'), desc: t('aboutPage.g3Text') }
            ].map((garantia, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 120} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <garantia.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{garantia.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[16rem]">{garantia.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" duration={800} className="pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <section className="py-16 bg-primary/5 rounded-3xl text-center px-6 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
                {t('aboutPage.ctaTitle')}
              </h2>
              <a
                href="https://wa.me/51902667683"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cta text-cta-foreground px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-[1.03] transition-all inline-flex items-center gap-2"
              >
                {t('aboutPage.ctaBtn')}
              </a>
            </div>
          </section>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Empresa;