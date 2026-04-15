import { MapPin, Phone, Clock, Mail, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '@/assets/logo-eco-m-final.png';

const socials = [
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61579597344363' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/eco-mba-87774837b/' },
  { label: 'X', icon: Twitter, href: 'https://x.com/eco_mba_peru' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/eco_mba_peru/' },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img src={logo} alt="ECO M - Expert Destruction Management" className="w-48 h-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed opacity-70 mb-6">
              Transporte, recojo de residuos sólidos no peligrosos, peligrosos, destrucción de materiales.
            </p>
            <div className="flex gap-3 mt-4">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#448E33]/20 hover:text-[#448E33] hover:scale-110"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-footer-foreground">Contáctanos</h4>
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
                  <p className="text-sm font-semibold">comercial@eco-m.com</p>
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
          <p className="text-xs text-[#F4F4F4] opacity-90">
            © {new Date().getFullYear()} <span className="font-semibold">ECO M</span> – Expert Destruction Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
