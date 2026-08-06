import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo-eco-m-final.png';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-footer text-footer-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img src={logo} alt="ECO M - Expert Destruction Management" className="w-48 h-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed opacity-70 mb-6">
              {t('footer.description')}
            </p>
            {/* Redes sociales removidas del pie según solicitud */}
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-footer-foreground">{t('footer.contact')}</h4>
            <div className="w-8 h-0.5 bg-accent mb-4" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-5">
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs opacity-60 mb-1">{t('footer.consultations')}:</p>
                    <p className="text-sm font-semibold">933 342 580 – 933 342 454</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs opacity-60 mb-1">{t('footer.hours')}</p>
                    <p className="text-sm font-semibold">{t('footer.hoursDetail')}</p>
                    <p className="text-sm font-semibold">{t('footer.hoursSat')}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs opacity-60 mb-1">{t('footer.email')}</p>
                    <p className="text-sm font-semibold">comercial@eco-m.com</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs opacity-60 mb-1">{t('footer.plants')}:</p>
                    <p className="text-sm">Valle Hermoso El Arenal, Puente Piedra</p>
                    <p className="text-sm">Calle Apurímac 07, Ancón</p>
                    <p className="text-sm">Mz. M Lote 114, Ventanilla, Callao</p>
                  </div>
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
