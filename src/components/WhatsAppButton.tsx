import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '51933342580';

// Helper: extrae y formatea el último segmento del pathname
function extractTitleFromPath(): string {
  if (typeof window === 'undefined') return 'Inicio';

  const pathname = window.location.pathname || '/';
  const segments = pathname.split('/').filter(Boolean);
  const lastSegment = segments.length ? segments[segments.length - 1] : '';
  const decoded = lastSegment ? decodeURIComponent(lastSegment) : '';
  const cleaned = decoded.replace(/-/g, ' ').trim();

  if (!cleaned) return 'Inicio';

  return cleaned
    .split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

function buildWhatsAppHrefFromTitle(title: string): string {
  const message = `Hola, me encuentro revisando la página de ${title} y deseo solicitar más información.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const WhatsAppButton = () => {
  const [href, setHref] = useState(() => {
    // Initial value (safe for SSR)
    if (typeof window === 'undefined') return buildWhatsAppHrefFromTitle('Inicio');
    return buildWhatsAppHrefFromTitle(extractTitleFromPath());
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Update function
    const updateHref = () => setHref(buildWhatsAppHrefFromTitle(extractTitleFromPath()));

    // Monkey-patch history.pushState/replaceState to notify SPA navigations
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    // Dispatch a custom event whenever pushState/replaceState is called
    history.pushState = function (...args) {
      const result = originalPushState.apply(this, args as any);
      window.dispatchEvent(new Event('locationchange'));
      return result;
    };

    history.replaceState = function (...args) {
      const result = originalReplaceState.apply(this, args as any);
      window.dispatchEvent(new Event('locationchange'));
      return result;
    };

    // Listen to events that indicate navigation
    window.addEventListener('popstate', updateHref);
    window.addEventListener('locationchange', updateHref);

    // As a safety, observe mutations to the <body> (in case the app alters content without changing history)
    const mo = new MutationObserver(() => {
      updateHref();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Cleanup: restore originals and remove listeners
    return () => {
      window.removeEventListener('popstate', updateHref);
      window.removeEventListener('locationchange', updateHref);
      mo.disconnect();
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  // Ensure href is correct at the moment of click too (extra safety for direct clicks)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const latest = buildWhatsAppHrefFromTitle(extractTitleFromPath());
    // set attribute so ctrl/cmd+clicks or normal clicks use the updated URL
    e.currentTarget.setAttribute('href', latest);
    // allow default navigation to proceed
  };

  return (
    <a
      href={href}
      onClick={handleClick}
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
