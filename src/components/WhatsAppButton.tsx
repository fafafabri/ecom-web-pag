import React, { useMemo } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '51933342580';

const WhatsAppButton = () => {
  // Construye la URL de WhatsApp dinámicamente usando el título del documento.
  // En entornos sin DOM (SSR) se usa un mensaje por defecto y la URL estática como fallback.
  const href = useMemo(() => {
    const pageTitle = typeof document !== 'undefined' ? document.title || '' : '';
    const message = `Hola, me encuentro revisando la página de ${pageTitle} y deseo solicitar más información.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, []);

  return (
    <a
      href={href}
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
