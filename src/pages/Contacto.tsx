import { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import contactoHero from '@/assets/contacto-hero.jpg';
import { toast } from 'sonner';

const plantas = [
  { name: 'Puente Piedra', address: 'Valle Hermoso El Arenal, Mz. M Lote 6, Puente Piedra.' },
  { name: 'Ancón', address: 'Calle Apurímac 07, Ancón, Lima-Perú.' },
  { name: 'Ventanilla', address: 'Mz. M Lote 114 Asoc. Parque Porcino Zona 1, Ventanilla, Callao.' },
];

const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', consulta: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Mensaje enviado! Nos pondremos en contacto pronto.');
    setForm({ nombre: '', email: '', telefono: '', consulta: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center min-h-[40vh] w-full overflow-hidden">
        <img src={contactoHero} alt="Contacto ECO MBA" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-background tracking-tight">Contáctanos</h1>
          <div className="flex gap-1 justify-center mt-6">
            <div className="w-8 h-1 rounded-full bg-accent" />
            <div className="w-8 h-1 rounded-full bg-background/40" />
          </div>
          <p className="text-background/70 mt-4 text-sm">Home / Contacto</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-4">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <div className="flex gap-1 mb-4">
                <div className="w-6 h-1 rounded-full bg-accent" />
                <div className="w-6 h-1 rounded-full bg-primary-foreground/40" />
              </div>
              <h3 className="font-display font-bold text-xl mb-8">Contáctanos</h3>

              <div className="flex flex-col gap-6">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs opacity-70 mb-2">Plantas:</p>
                    {plantas.map(p => (
                      <p key={p.name} className="text-sm mb-2">
                        <span className="font-semibold">*{p.address}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs opacity-70 mb-1">Celulares:</p>
                    <p className="text-sm font-semibold">933 342 580</p>
                    <p className="text-sm font-semibold">933 342 454</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs opacity-70 mb-1">Horario Atención</p>
                    <p className="text-sm font-semibold">L a V: 8:00 am a 5:30 pm</p>
                    <p className="text-sm font-semibold">Sáb 8:00 am a 12:30pm</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs opacity-70 mb-1">Email</p>
                    <p className="text-sm font-semibold">comercial@eco-mba-ecology.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-8">
            <h2 className="font-display font-bold text-3xl text-foreground mb-2">Consultas</h2>
            <div className="flex gap-1 my-4">
              <div className="w-8 h-1 rounded-full bg-accent" />
              <div className="w-8 h-1 rounded-full bg-primary" />
            </div>
            <p className="text-muted-foreground mb-8">No dudes en contactarnos si tienes alguna pregunta.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Nombre *"
                  required
                  value={form.nombre}
                  onChange={e => setForm({ ...form, nombre: e.target.value })}
                  className="bg-secondary border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all outline-none"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="bg-secondary border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all outline-none"
                />
              </div>
              <input
                type="tel"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={e => setForm({ ...form, telefono: e.target.value })}
                className="w-full bg-secondary border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all outline-none"
              />
              <textarea
                placeholder="Consulta"
                rows={5}
                value={form.consulta}
                onChange={e => setForm({ ...form, consulta: e.target.value })}
                className="w-full bg-secondary border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all outline-none resize-none"
              />
              <button type="submit" className="bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_4px_14px_0_hsl(24_90%_55%/0.39)]">
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
