import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

interface SkillCardProps {
  skill: string;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { scale, y, opacity } = useSpring({
    scale: isHovered ? 1.1 : 1,
    y: isHovered ? -5 : 0,
    opacity: 1,
    from: { opacity: 0, y: 50 },
    delay: index * 100,
    config: { tension: 300, friction: 10 }
  });

  return (
    <animated.div
      style={{ scale, y, opacity }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg border border-zinc-700 cursor-pointer"
    >
      {skill}
    </animated.div>
  );
}