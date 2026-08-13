import { useTranslation } from 'react-i18next';
import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';
import bgContacto from '@/assets/contacto-hero.jpg'; 

const Contacto = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(t('contactoPage.successMessage'));
    }, 1500);
  };

  return (
    <>
      {/* Cabecera Restaurada a pantalla completa */}
      <section className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] min-h-[45vh] overflow-hidden flex items-center justify-center">
        <img src={bgContacto} alt="Fondo Contacto" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#0f172a]/85 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('contactoPage.heroTitle')}
          </h1>
          <div className="flex gap-1 justify-center mt-6 mb-6">
            <div className="w-8 h-1 rounded-full bg-accent" />
            <div className="w-8 h-1 rounded-full bg-white/40" />
          </div>
          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            {t('contactoPage.heroSubtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#formulario" className="bg-[#48c474] text-white px-6 py-3 rounded-xl font-semibold hover:scale-[1.03] transition-all shadow-md">
              {t('contactoPage.btnForm')}
            </a>
            <a href="https://wa.me/51902667683" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/40 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 hover:border-white/60 hover:scale-[1.03] transition-all backdrop-blur-sm">
              {t('contactoPage.btnWhatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* Sección Formulario e Info */}
      <section id="formulario" className="py-24 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Panel Izquierdo (Verde) */}
            <AnimatedSection className="bg-[#2a8b94] text-white p-10 rounded-[2rem] shadow-xl">
              <h3 className="text-2xl font-bold mb-10">{t('contactoPage.channelsTitle')}</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 text-white/80 uppercase text-xs font-bold tracking-widest mb-3">
                    <Phone className="h-5 w-5" /> {t('contactoPage.directLines')}
                  </div>
                  <p className="text-lg font-semibold leading-relaxed">902 667 683</p>
                  <p className="text-lg font-semibold leading-relaxed">960 695 955</p>
                  <p className="text-lg font-semibold leading-relaxed">922 719 251</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 text-white/80 uppercase text-xs font-bold tracking-widest mb-3">
                    <Mail className="h-5 w-5" /> {t('contactoPage.corporateEmail')}
                  </div>
                  <p className="text-base font-semibold">comercial@eco-mperu.com</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 text-white/80 uppercase text-xs font-bold tracking-widest mb-3">
                    <Clock className="h-5 w-5" /> {t('contactoPage.businessHours')}
                  </div>
                  <p className="text-base font-medium leading-relaxed">Lunes a Viernes:<br/>8:00 am - 5:00 pm</p>
                  <p className="text-base font-medium leading-relaxed mt-2">Sábados:<br/>8:00 am - 12:00 pm</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 text-white/80 uppercase text-xs font-bold tracking-widest mb-3">
                    <MapPin className="h-5 w-5" /> {t('contactoPage.plants')}
                  </div>
                  <ul className="space-y-3 text-sm font-medium leading-relaxed text-white/90">
                    <li>• Valle Hermoso El Arenal, Mz. M Lote 6, Puente Piedra.</li>
                    <li>• Calle Apurímac 07, Ancón, Lima-Perú.</li>
                    <li>• Mz. M Lote 114 Asoc. Parque Porcino Zona 1, Ventanilla, Callao.</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Formulario (Derecha) */}
            <AnimatedSection className="lg:col-span-2 bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h2 className="text-3xl font-bold text-[#2a8b94] mb-4">{t('contactoPage.formTitle')}</h2>
              <div className="flex gap-1 mb-6">
                <div className="w-8 h-1 rounded-full bg-accent" />
                <div className="w-4 h-1 rounded-full bg-primary" />
              </div>
              <p className="text-slate-500 mb-10 text-lg">{t('contactoPage.formSubtitle')}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('contactoPage.formName')}</label>
                    <input required type="text" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2a8b94]/20 focus:border-[#2a8b94] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('contactoPage.formCompany')}</label>
                    <input required type="text" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2a8b94]/20 focus:border-[#2a8b94] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('contactoPage.formRuc')}</label>
                    <input type="text" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2a8b94]/20 focus:border-[#2a8b94] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('contactoPage.formPhone')}</label>
                    <input required type="tel" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2a8b94]/20 focus:border-[#2a8b94] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">{t('contactoPage.formEmail')}</label>
                  <input required type="email" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2a8b94]/20 focus:border-[#2a8b94] transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">{t('contactoPage.formService')}</label>
                  <select required className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2a8b94]/20 focus:border-[#2a8b94] transition-colors appearance-none text-slate-700">
                    <option value="">{t('contactoPage.formServiceSelect')}</option>
                    <option value="destruccion">{t('newNav.categories.destruccion')}</option>
                    <option value="sanitarios">{t('newNav.categories.sanitarias')}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">{t('contactoPage.formDetails')}</label>
                  <textarea required rows={4} className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#2a8b94]/20 focus:border-[#2a8b94] transition-colors resize-none"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="bg-[#48c474] hover:bg-[#3ba661] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
                  {isSubmitting ? '...' : t('contactoPage.formSubmit')}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#f2faf4] rounded-[2rem] p-12 text-center border border-[#e0f2e4] shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 max-w-2xl mx-auto leading-tight">
              {t('contactoPage.urgencyTitle')}
            </h2>
            <a href="https://wa.me/51902667683" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#48c474] hover:bg-[#3ba661] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl text-lg hover:-translate-y-1">
              <MessageCircle className="h-6 w-6" /> {t('contactoPage.urgencyBtn')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;