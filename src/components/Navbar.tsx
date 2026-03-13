import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { servicesByCategory } from '@/data/services';
import logo from '@/assets/logo-eco-mba-horizontal.png';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/90 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src={logo} alt="ECO MBA - Care of the Planet" className="h-14 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/') ? 'text-primary bg-primary/5' : 'text-foreground hover:text-primary hover:bg-primary/5'}`}>
            HOME
          </Link>
          <Link to="/empresa" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/empresa') ? 'text-primary bg-primary/5' : 'text-foreground hover:text-primary hover:bg-primary/5'}`}>
            EMPRESA
          </Link>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname.startsWith('/servicios') ? 'text-primary bg-primary/5' : 'text-foreground hover:text-primary hover:bg-primary/5'}`}>
              SERVICIOS
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

          <Link to="/contacto" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/contacto') ? 'text-primary bg-primary/5' : 'text-foreground hover:text-primary hover:bg-primary/5'}`}>
            CONTACTO
          </Link>
        </nav>

        {/* Phone CTA */}
        <a href="https://wa.me/51933342580?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:opacity-90 shadow-[0_4px_14px_0_hsl(var(--primary)/0.3)]">
          <Phone className="h-5 w-5" />
          <div className="leading-tight text-left">
            <span className="text-xs opacity-80">Consultas</span>
            <span className="block text-base font-bold tabular-nums">933 342 580</span>
          </div>
        </a>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-muted" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">HOME</Link>
            <Link to="/empresa" onClick={() => setMobileOpen(false)} className="py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">EMPRESA</Link>
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">
                SERVICIOS <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
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
            <Link to="/contacto" onClick={() => setMobileOpen(false)} className="py-3 px-3 text-sm font-medium rounded-lg hover:bg-primary/5">CONTACTO</Link>
          </nav>
          <a href="https://wa.me/51933342580?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm">
            <Phone className="h-4 w-4" />
            Consultas: 933 342 580
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
