import { ReactNode } from 'react';
import useInView from '@/hooks/useInView';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  /** Threshold para el IntersectionObserver (0-1) */
  threshold?: number;
  /** Dirección de entrada: 'up', 'down', 'left', 'right', 'none' */
  direction?: AnimationDirection;
  /** Duración de la animación en ms */
  duration?: number;
  /** Delay inicial antes de iniciar la animación */
  delay?: number;
  /** Clase CSS adicional */
  className?: string;
}

/**
 * Componente wrapper que añade animaciones de entrada suave cuando
 * el elemento entra en el viewport. Encapsula el hook useInView
 * y proporciona transiciones consistentes.
 *
 * @example
 * <AnimatedSection direction="left">
 *   <h2>Contenido que entra desde la izquierda</h2>
 * </AnimatedSection>
 *
 * <AnimatedSection direction="up" duration={800}>
 *   <div>Contenido que sube lentamente</div>
 * </AnimatedSection>
 */
function AnimatedSection({
  children,
  threshold = 0.15,
  direction = 'up',
  duration = 700,
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const { ref, inView } = useInView(threshold);

  // Mapea dirección a clases de transformación
  const getTransformClasses = () => {
    const initialState = {
      up: 'translate-y-8',
      down: '-translate-y-8',
      left: 'translate-x-8',
      right: '-translate-x-8',
      none: 'scale-95',
    };

    const finalState = {
      up: 'translate-y-0',
      down: 'translate-y-0',
      left: 'translate-x-0',
      right: 'translate-x-0',
      none: 'scale-100',
    };

    return `${inView ? `opacity-100 ${finalState[direction]}` : `opacity-0 ${initialState[direction]}`}`;
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className={getTransformClasses()}>{children}</div>
    </div>
  );
}

export default AnimatedSection;
