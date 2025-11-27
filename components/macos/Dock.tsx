'use client';

import React, { useRef } from 'react';
import { apps } from '@/constants/config';
import { useWindowStore } from '@/store/useWindowStore';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null);
  const { openWindow, toggleWindow, windows } = useWindowStore();

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll('.dock-icon');

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;

      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const iconCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(mouseX - iconCenterX);

        // Calculate scale based on distance (closer = larger)
        // Base scale 1, max scale 1.5
        // Distance threshold 150px

        let scale = 1;
        if (distance < 150) {
          const strength = 1 - distance / 150;
          scale = 1 + strength * 0.5; // Max scale 1.5
        }

        gsap.to(icon, {
          scale: scale,
          duration: 0.1,
          ease: 'power2.out',
        });
      });
    };

    const handleMouseLeave = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    };

    dock.addEventListener('mousemove', handleMouseMove);
    dock.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      dock.removeEventListener('mousemove', handleMouseMove);
      dock.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: dockRef });

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={dockRef}
        className="flex items-end gap-2 px-4 py-2 bg-white/40 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl"
      >
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => toggleWindow(app.id)}
            className="dock-icon relative group flex flex-col items-center justify-end transition-all duration-100 origin-bottom"
            aria-label={app.title}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-xl flex items-center justify-center text-gray-700 shadow-lg group-hover:shadow-xl transition-shadow border border-white/50">
              <app.icon size={24} className="opacity-80" />
            </div>
            {/* Dot indicator for open apps */}
            {windows[app.id]?.isOpen && (
              <div className="absolute -bottom-1 w-1 h-1 bg-black/50 rounded-full" />
            )}
            {/* Tooltip */}
            <span className="absolute -top-10 bg-white/80 text-black text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap backdrop-blur-md shadow-sm border border-white/20 font-medium">
              {app.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dock;
