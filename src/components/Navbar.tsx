import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '@/assets/logo-eco-m-final.png';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'destruccion' | 'logistica' | 'sanitarios'>('destruccion');
  const location = useLocation();
  const { t } = useTranslation();

  const solutionCategories = [
    {
      key: 'destruccion',
      label: t('nav.categories.destruccion'),
      description: t('nav.categories.destruccionDesc'),
      items: [
        { title: t('nav.services.destruccion_notarial'), slug: 'destruccion-de-documentos' },
        { title: t('nav.services.destruccion_residuos'), slug: 'destruccion-de-residuos' },
        { title: t('nav.services.destruccion_raee'), slug: 'destruccion-de-raee' },
        { title: t('nav.services.destruccion_ropa'), slug: 'destruccion-de-ropa' },
        { title: t('nav.services.disposicion_final'), slug: 'disposicion-final' },
      ],
    },
    {
      key: 'logistica',
      label: t('nav.categories.logistica'),
      description: t('nav.categories.logisticaDesc'),
      items: [
        { title: t('nav.services.recojo_transporte'), slug: 'recojo-y-transporte-de-residuos' },
        { title: t('nav.services.carga_transporte'), slug: 'carga-y-transporte' },
        { title: t('nav.services.transporte_maptel'), slug: 'transporte-maptel' },
        { title: t('nav.services.gestion_iqbf'), slug: 'gestion-iqbf' },
        { title: t('nav.services.manejo_raee'), slug: 'manejo-adecuado-de-raee' },
        { title: t('nav.services.acondicionamiento'), slug: 'acondicionamiento-de-materiales' },
      ],
    },
    {
      key: 'sanitarios',
      label: t('nav.services.sanitarios'),
      description: '',
      items: [
        { title: t('nav.services.sanitarios'), slug: 'venta-sanitarios-portatiles' },
      ],
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (active: boolean) =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active ? 'text-primary bg-primary/5' : 'text-foreground hover:text-heading hover:bg-heading/5'}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/90 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="ECO M - Expert Destruction Management" className="h-20 object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className={linkClass(isActive('/'))}>
            {t('nav.inicio')}
          </Link>
          <Link to="/empresa" className={linkClass(isActive('/empresa'))}>
            {t('nav.empresa')}
          </Link>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={linkClass(location.pathname.startsWith('/servicios')) + ' flex items-center gap-1'}>
              {t('nav.soluciones')}
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[760px]">
                <div className="bg-card rounded-[32px] shadow-[0_18px_45px_rgba(0,0,0,0.08)] p-5 grid md:grid-cols-[220px_1fr] gap-4 border border-slate-200/70 transition-all duration-200">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-light">{t('nav.categorias')}</p>
                    {solutionCategories.map(category => (
                      <button
                        key={category.key}
                        type="button"
                        onMouseEnter={() => setActiveCategory(category.key as typeof activeCategory)}
                        className={`w-full text-left rounded-2xl px-4 py-3 text-sm font-semibold transition ${activeCategory === category.key ? 'bg-emerald-900 text-white shadow-lg' : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-900'}`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-5 min-h-[300px] border border-slate-200/80 shadow-sm">
                    <div className="grid gap-2">
                      {solutionCategories.find(category => category.key === activeCategory)?.items.map(item => (
                        <Link
                          key={item.slug}
                          to={`/servicios/${item.slug}`}
                          className="block rounded-2xl px-4 py-3 bg-white text-sm text-slate-900 border border-slate-200 transition duration-200 hover:bg-emerald-50 hover:text-emerald-900"
                          onClick={() => setServicesOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/contacto" className={linkClass(isActive('/contacto'))}>{t('nav.contacto')}</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a href="https://wa.me/51933342580?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-cta text-cta-foreground font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_6px_20px_0_hsl(var(--cta)/0.35)] shadow-[0_4px_14px_0_hsl(var(--cta)/0.25)]">
            <Phone className="h-5 w-5" />
            <div className="leading-tight text-left">
              <span className="text-xs opacity-80">{t('footer.consultations')}</span>
              <span className="block text-base font-bold tabular-nums">933 342 580</span>
            </div>
          </a>
        </div>

        <button className="lg:hidden p-2 rounded-lg hover:bg-muted" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">
              {t('nav.inicio')}
            </Link>
            <Link to="/empresa" onClick={() => setMobileOpen(false)} className="py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">
              {t('nav.empresa')}
            </Link>
            <div className="rounded-3xl border border-border p-3 bg-background/90">
              <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between py-3 px-3 text-sm font-medium rounded-2xl hover:bg-primary/5 transition-all duration-200">
                {t('nav.soluciones')} <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="mt-3 space-y-4">
                  {solutionCategories.map(category => (
                    <div key={category.key}>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{category.label}</p>
                      <div className="space-y-1">
                        {category.items.map(item => (
                          <Link
                            key={item.slug}
                            to={`/servicios/${item.slug}`}
                            onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
                            className="block rounded-2xl px-3 py-2 text-sm text-slate-900 transition-colors duration-200 hover:text-emerald-700 hover:bg-emerald-100"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contacto" onClick={() => setMobileOpen(false)} className="py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">{t('nav.contacto')}</Link>
          </nav>
          <div className="flex gap-2 mt-4">
            <LanguageSwitcher />
            <a href="https://wa.me/51933342580?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-cta text-cta-foreground font-semibold text-sm">
              <Phone className="h-4 w-4" />
              {t('footer.consultations')} 933 342 580
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
