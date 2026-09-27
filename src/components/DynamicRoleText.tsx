import React, { useState, useEffect } from 'react';

const ROLES = [
  "Software Engineer",
  "AI & ML Developer",
  "Full-Stack Web Developer",
  "Data Science Enthusiast",
  "Competitive Programmer"
];

export function DynamicRoleText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = ROLES[roleIndex];
    let timeout: any;

    if (!isDeleting && displayText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 35 : 75;
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + (isDeleting ? -1 : 1)));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center text-emerald-400 font-semibold min-h-[1.4em]">
      <span>{displayText}</span>
      <span className="inline-block w-[3px] h-6 md:h-8 ml-1.5 bg-emerald-400 rounded-full animate-pulse" />
    </span>
  );
}
