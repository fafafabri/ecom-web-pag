import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/51933342580?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-whatsapp flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 animate-wa-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-accent-foreground fill-current" />
    </a>
  );
};

export default WhatsAppButton;
