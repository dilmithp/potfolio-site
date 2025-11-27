'use client';

import React from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';
import { useWindowStore } from '@/store/useWindowStore';

interface WindowControlsProps {
  windowId: string;
}

const WindowControls: React.FC<WindowControlsProps> = ({ windowId }) => {
  const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();

  return (
    <div className="flex items-center gap-2 group">
      <button
        onClick={(e) => {
          e.stopPropagation();
          closeWindow(windowId);
        }}
        className="w-3 h-3 rounded-full bg-[#FF5F57] flex items-center justify-center border border-[#E0443E] hover:brightness-90 active:brightness-75 transition-all"
      >
        <X size={8} className="text-black/50 opacity-0 group-hover:opacity-100" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          minimizeWindow(windowId);
        }}
        className="w-3 h-3 rounded-full bg-[#FEBC2E] flex items-center justify-center border border-[#D89E24] hover:brightness-90 active:brightness-75 transition-all"
      >
        <Minus size={8} className="text-black/50 opacity-0 group-hover:opacity-100" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          maximizeWindow(windowId);
        }}
        className="w-3 h-3 rounded-full bg-[#28C840] flex items-center justify-center border border-[#1AAB29] hover:brightness-90 active:brightness-75 transition-all"
      >
        <Maximize2 size={8} className="text-black/50 opacity-0 group-hover:opacity-100" />
      </button>
    </div>
  );
};

export default WindowControls;
