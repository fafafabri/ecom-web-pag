import { useState, useEffect } from 'react';
import useInView from '@/hooks/useInView';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

/**
 * Componente que anima un contador desde 0 hasta el valor objetivo
 * cuando el elemento entra en el viewport. Útil para estadísticas,
 * métricas y números que deben parecer dinámicos.
 *
 * @example
 * <AnimatedCounter target={500} suffix="+" />
 * <AnimatedCounter target={98} suffix="%" />
 */
function AnimatedCounter({ target, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.3);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800; // ms
    const step = Math.ceil(target / (duration / 16)); // 16ms per frame ≈ 60fps

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default AnimatedCounter;
