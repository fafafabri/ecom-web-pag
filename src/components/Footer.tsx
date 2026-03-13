import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import logo from '@/assets/logo-eco-mba-horizontal.png';

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="ECO MBA - Care of the Planet" className="h-12 object-contain" />
            </div>
            <p className="text-sm leading-relaxed opacity-70 mb-6">
              Transporte, recojo de residuos sólidos no peligrosos, peligrosos, destrucción de materiales.
            </p>
            <div className="flex gap-2 mt-4">
              {[
                { label: 'Facebook', icon: 'f', href: 'https://www.facebook.com/profile.php?id=61579597344363' },
                { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/in/eco-mba-87774837b/' },
                { label: 'X', icon: '𝕏', href: 'https://x.com/eco_mba_peru' },
                { label: 'Instagram', icon: '◻', href: 'https://www.instagram.com/eco_mba_peru/' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 rounded bg-primary flex items-center justify-center hover:opacity-80 transition-opacity text-primary-foreground text-xs font-bold">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4 - Contacto */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Contáctanos</h4>
            <div className="w-8 h-0.5 bg-accent mb-4" />
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs opacity-60 mb-1">Consultas:</p>
                  <p className="text-sm font-semibold">933 342 580 – 933 342 454</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs opacity-60 mb-1">Horario Atención</p>
                  <p className="text-sm font-semibold">L a V: 8:00 am a 5:30 pm</p>
                  <p className="text-sm font-semibold">Sáb 8:00 am a 12:30pm</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs opacity-60 mb-1">Email</p>
                  <p className="text-sm font-semibold">comercial@eco-mba-ecology.com</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs opacity-60 mb-1">Plantas:</p>
                  <p className="text-sm">Valle Hermoso El Arenal, Puente Piedra</p>
                  <p className="text-sm">Calle Apurímac 07, Ancón</p>
                  <p className="text-sm">Mz. M Lote 114, Ventanilla, Callao</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-foreground/10 pt-6 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} <span className="font-semibold">ECO MBA</span> – Care Of The Planet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
