'use client';

import React, { useState, useEffect } from 'react';
import DesktopIcon from './DesktopIcon';
import { FileText, Github, Linkedin, Instagram } from 'lucide-react';
import { useWindowStore } from '@/store/useWindowStore';
import { personalInfo } from '@/lib/data';

const DesktopIcons = () => {
  const { openWindow } = useWindowStore();
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200); // Default fallback

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Enable pointer events for the icons themselves */}
      <div className="pointer-events-auto w-full h-full relative">

        {/* Resume - Top Right */}
        <DesktopIcon
          icon={FileText}
          title="Resume.pdf"
          onClick={() => openWindow('resume')}
          initialPosition={{ x: windowWidth - 120, y: 20 }}
        />

        {/* GitHub - Below Resume */}
        <DesktopIcon
          icon={Github}
          title="GitHub"
          href={personalInfo.github}
          initialPosition={{ x: windowWidth - 120, y: 120 }}
        />

        {/* LinkedIn - Below GitHub */}
        <DesktopIcon
          icon={Linkedin}
          title="LinkedIn"
          href={personalInfo.linkedin}
          initialPosition={{ x: windowWidth - 120, y: 220 }}
        />

        {/* Instagram - Below LinkedIn */}
        <DesktopIcon
          icon={Instagram}
          title="Instagram"
          href="https://www.instagram.com/dilmithp/"
          initialPosition={{ x: windowWidth - 120, y: 320 }}
        />

      </div>
    </div>
  );
};

export default DesktopIcons;
