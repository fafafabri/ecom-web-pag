import React, { useMemo } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '51933342580';

const WhatsAppButton = () => {
  // Construye la URL de WhatsApp dinámicamente usando el último segmento del pathname.
  // Extrae el segmento, reemplaza guiones por espacios y capitaliza cada palabra.
  // En entornos sin DOM (SSR) usa 'Inicio' como nombre por defecto.
  const href = useMemo(() => {
    if (typeof window === 'undefined') {
      const fallbackMsg = 'Hola, me encuentro revisando la página de Inicio y deseo solicitar más información.';
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fallbackMsg)}`;
    }

    const pathname = window.location.pathname || '/';
    // Obtener el último segmento no vacío
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments.length ? segments[segments.length - 1] : '';

    // Limpiar: reemplazar guiones por espacios y trim
    const cleaned = lastSegment.replace(/-/g, ' ').trim();

    // Capitalizar la primera letra de cada palabra
    const titleized = cleaned
      ? cleaned.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      : 'Inicio';

    const message = `Hola, me encuentro revisando la página de ${titleized} y deseo solicitar más información.`;
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
