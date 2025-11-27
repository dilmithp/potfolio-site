'use client';

import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
  href?: string;
  initialPosition?: { x: number; y: number };
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon: Icon, title, onClick, href, initialPosition = { x: 0, y: 0 } }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent drag from triggering click immediately if we want to be strict, 
    // but for now simple click is fine.
    if (onClick) onClick();
    if (href) window.open(href, '_blank');
  };

  return (
    <Draggable nodeRef={nodeRef} defaultPosition={initialPosition}>
      <div
        ref={nodeRef}
        className="absolute flex flex-col items-center gap-1 w-24 p-2 rounded hover:bg-white/20 cursor-pointer group transition-colors z-0"
        onDoubleClick={handleClick} // Mac style double click? Or single? Let's do double click for authenticity, or maybe single for web. Let's stick to onDoubleClick for "Desktop" feel, but maybe onClick is better for web users. Let's do onClick for now for better UX.
        onClick={handleClick}
      >
        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm border border-white/30 group-hover:bg-white/30 transition-colors">
          <Icon size={32} className="text-gray-800" />
        </div>
        <span className="text-xs font-medium text-black/80 bg-white/40 px-2 py-0.5 rounded shadow-sm backdrop-blur-sm group-hover:text-black group-hover:bg-white/60 transition-colors text-center leading-tight">
          {title}
        </span>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;
