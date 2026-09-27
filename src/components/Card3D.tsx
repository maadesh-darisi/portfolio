import { useSpring, animated } from '@react-spring/web';
import { useState, useRef } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card3D({ children, className = '', onClick }: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const [spring, api] = useSpring(() => ({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    opacity: 0.95,
    config: { mass: 1, tension: 350, friction: 25 }
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth angle tilt up to 6 degrees
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15
    });

    api.start({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`,
      opacity: 1
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setGlare(prev => ({ ...prev, opacity: 0 }));
    api.start({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      opacity: 0.95
    });
  };

  return (
    <animated.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        ...spring,
        transformStyle: 'preserve-3d'
      }}
      className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic Interactive Glare Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle 250px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.4), transparent 80%)`
        }}
      />
      {children}
    </animated.div>
  );
}