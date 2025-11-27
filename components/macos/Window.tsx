'use client';

import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { useWindowStore } from '@/store/useWindowStore';
import WindowControls from './WindowControls';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number | string; height: number | string };
}

const Window: React.FC<WindowProps> = ({
  id,
  title,
  children,
  defaultPosition = { x: 100, y: 50 },
  defaultSize = { width: 600, height: 400 }
}) => {
  const { windows, focusWindow } = useWindowStore();
  const windowState = windows[id];
  const nodeRef = useRef<HTMLDivElement>(null);

  // Initial animation
  useGSAP(() => {
    if (windowState?.isOpen && !windowState.isMinimized) {
      gsap.fromTo(nodeRef.current,
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.2)' }
      );
    }
  }, [windowState?.isOpen]);

  if (!windowState?.isOpen || windowState.isMinimized) return null;

  return (
    <Draggable
      handle=".window-header"
      nodeRef={nodeRef}
      defaultPosition={defaultPosition}
      onMouseDown={() => focusWindow(id)}
      bounds="parent"
    >
      <div
        ref={nodeRef}
        className="absolute flex flex-col bg-white/80 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/40 overflow-hidden"
        style={{
          width: windowState.isMaximized ? '100%' : (
            // Clamp width to viewport width - margin
            typeof defaultSize.width === 'number'
              ? Math.min(defaultSize.width, typeof window !== 'undefined' ? window.innerWidth - 40 : 1200)
              : defaultSize.width
          ),
          height: windowState.isMaximized ? '100%' : (
            // Clamp height to viewport height - margin
            typeof defaultSize.height === 'number'
              ? Math.min(defaultSize.height, typeof window !== 'undefined' ? window.innerHeight - 100 : 800)
              : defaultSize.height
          ),
          maxWidth: windowState.isMaximized ? '100%' : '95vw',
          maxHeight: windowState.isMaximized ? '100%' : '90vh',
          zIndex: windowState.zIndex,
          // Center the window if not maximized
          left: windowState.isMaximized ? 0 : (
            typeof window !== 'undefined'
              ? (window.innerWidth - (typeof defaultSize.width === 'number' ? Math.min(defaultSize.width, window.innerWidth - 40) : 600)) / 2
              : undefined
          ),
          top: windowState.isMaximized ? 0 : (
            typeof window !== 'undefined'
              ? Math.max(40, (window.innerHeight - (typeof defaultSize.height === 'number' ? Math.min(defaultSize.height, window.innerHeight - 100) : 400)) / 2)
              : undefined
          ),
          transform: windowState.isMaximized ? 'none !important' : undefined,
        }}
      >
        {/* Window Header */}
        <div className="window-header h-10 bg-white/50 border-b border-white/20 flex items-center justify-between px-4 cursor-default select-none">
          <div className="flex-1 flex items-center">
            <WindowControls windowId={id} />
          </div>
          <div className="flex-1 text-center text-sm font-medium text-gray-600 dark:text-gray-300">
            {title}
          </div>
          <div className="flex-1" /> {/* Spacer */}
        </div>

        {/* Window Content */}
        <div className="flex-1 overflow-auto relative bg-white dark:bg-[#1E1E1E]">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
