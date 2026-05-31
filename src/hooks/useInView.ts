import { useState, useEffect, useRef } from 'react';

/**
 * Hook que detecta cuando un elemento entra en el viewport usando IntersectionObserver.
 * Útil para triggers de animaciones al scroll.
 * @param threshold - Porcentaje de visibilidad requerido para disparar (0-1). Default: 0.15
 * @returns { ref: React.Ref<HTMLDivElement>, inView: boolean }
 */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  
  return { ref, inView };
}

export default useInView;
