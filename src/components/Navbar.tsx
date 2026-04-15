import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { servicesByCategory } from '@/data/services';
import logo from '@/assets/logo-eco-m.png';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (active: boolean) =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active ? 'text-primary bg-primary/5' : 'text-foreground hover:text-heading hover:bg-heading/5'}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/90 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="ECO M - Expert Destruction Management" className="h-14 object-contain" />
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[600px]">
                <div className="bg-card rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_32px_-8px_rgba(0,0,0,0.08)] p-6 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Destrucción y Gestión</h4>
                    <div className="flex flex-col gap-1">
                      {servicesByCategory.destruccion.map(s => (
                        <Link key={s.id} to={`/servicios/${s.slug}`} className="text-sm text-foreground hover:text-primary transition-colors py-1.5 px-2 rounded-md hover:bg-primary/5" onClick={() => setServicesOpen(false)}>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Otros Servicios</h4>
                    <div className="flex flex-col gap-1">
                      {servicesByCategory.otros.map(s => (
                        <Link key={s.id} to={`/servicios/${s.slug}`} className="text-sm text-foreground hover:text-primary transition-colors py-1.5 px-2 rounded-md hover:bg-primary/5" onClick={() => setServicesOpen(false)}>
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
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">
                SOLUCIONES <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {servicesByCategory.destruccion.map(s => (
                    <Link key={s.id} to={`/servicios/${s.slug}`} onClick={() => { setMobileOpen(false); setServicesOpen(false); }} className="py-2 px-3 text-sm text-muted-foreground hover:text-primary rounded-md">
                      {s.title}
                    </Link>
                  ))}
                  <div className="h-px bg-border my-2" />
                  {servicesByCategory.otros.map(s => (
                    <Link key={s.id} to={`/servicios/${s.slug}`} onClick={() => { setMobileOpen(false); setServicesOpen(false); }} className="py-2 px-3 text-sm text-muted-foreground hover:text-primary rounded-md">
                      {s.title}
                    </Link>
                  ))}
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
