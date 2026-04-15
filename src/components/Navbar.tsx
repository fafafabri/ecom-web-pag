import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { servicesByCategory } from '@/data/services';
import logo from '@/assets/logo-eco-m-final.png';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'destruccion' | 'otros'>('destruccion');
  const location = useLocation();

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
          <Link to="/" className={linkClass(isActive('/'))}>INICIO</Link>
          <Link to="/empresa" className={linkClass(isActive('/empresa'))}>CONÓCENOS</Link>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={linkClass(location.pathname.startsWith('/servicios')) + ' flex items-center gap-1'}>
              SOLUCIONES
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[700px]">
                <div className="bg-card rounded-[28px] shadow-[0_18px_45px_rgba(0,0,0,0.08)] p-6 grid md:grid-cols-[200px_1fr] gap-4 border border-slate-200/70 transition-all duration-200">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Explora por categoría</p>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveCategory('destruccion')}
                      className={`w-full text-left rounded-2xl px-4 py-3 text-sm font-semibold transition ${activeCategory === 'destruccion' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-primary/5 hover:text-primary'}`}
                    >
                      Destrucción
                    </button>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveCategory('otros')}
                      className={`w-full text-left rounded-2xl px-4 py-3 text-sm font-semibold transition ${activeCategory === 'otros' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-primary/5 hover:text-primary'}`}
                    >
                      Otros Servicios
                    </button>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-5 min-h-[260px] border border-slate-200/80 shadow-sm">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Servicios</p>
                        <h3 className="text-lg font-semibold text-foreground">{activeCategory === 'destruccion' ? 'Destrucción' : 'Otros Servicios'}</h3>
                      </div>
                      <span className="text-xs font-medium uppercase text-primary/80">{activeCategory === 'destruccion' ? 'Certificado y control' : 'Limpieza y gestión'}</span>
                    </div>
                    <div className="grid gap-2">
                      {(activeCategory === 'destruccion' ? servicesByCategory.destruccion : servicesByCategory.otros).map(s => (
                        <Link
                          key={s.id}
                          to={`/servicios/${s.slug}`}
                          className="rounded-2xl px-4 py-3 text-sm text-foreground transition-colors duration-200 hover:text-primary hover:bg-primary/5"
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/contacto" className={linkClass(isActive('/contacto'))}>HABLEMOS</Link>
        </nav>

        <a href="https://wa.me/51933342580?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-xl bg-cta text-cta-foreground font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_6px_20px_0_hsl(var(--cta)/0.35)] shadow-[0_4px_14px_0_hsl(var(--cta)/0.25)]">
          <Phone className="h-5 w-5" />
          <div className="leading-tight text-left">
            <span className="text-xs opacity-80">Consultas</span>
            <span className="block text-base font-bold tabular-nums">933 342 580</span>
          </div>
        </a>

        <button className="lg:hidden p-2 rounded-lg hover:bg-muted" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">INICIO</Link>
            <Link to="/empresa" onClick={() => setMobileOpen(false)} className="py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">CONÓCENOS</Link>
            <div className="rounded-3xl border border-border p-3 bg-background/90">
              <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between py-3 px-3 text-sm font-medium rounded-2xl hover:bg-primary/5 transition-all duration-200">
                SOLUCIONES <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Destrucción</p>
                    <div className="space-y-1">
                      {servicesByCategory.destruccion.map(s => (
                        <Link
                          key={s.id}
                          to={`/servicios/${s.slug}`}
                          onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
                          className="block rounded-2xl px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:text-primary hover:bg-primary/5"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Otros Servicios</p>
                    <div className="space-y-1">
                      {servicesByCategory.otros.map(s => (
                        <Link
                          key={s.id}
                          to={`/servicios/${s.slug}`}
                          onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
                          className="block rounded-2xl px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:text-primary hover:bg-primary/5"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/contacto" onClick={() => setMobileOpen(false)} className="py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">HABLEMOS</Link>
          </nav>
          <a href="https://wa.me/51933342580?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-cta text-cta-foreground font-semibold text-sm">
            <Phone className="h-4 w-4" />
            Consultas: 933 342 580
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
