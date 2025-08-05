import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export function Card3D({ children, className = '' }: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { transform, opacity } = useSpring({
    transform: isHovered
      ? 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05)'
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    opacity: isHovered ? 1 : 0.9,
    config: { mass: 1, tension: 200, friction: 20 }
  });

  return (
    <animated.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform, opacity }}
      className={`transition-shadow duration-300 ${className}`}
    >
      {children}
    </animated.div>
  );
}