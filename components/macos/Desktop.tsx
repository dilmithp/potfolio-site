'use client';

import React from 'react';
import Navbar from '@/components/macos/Navbar';
import Dock from '@/components/macos/Dock';
import { useWindowStore } from '@/store/useWindowStore';
import DesktopBanner from './DesktopBanner';

interface DesktopProps {
  children: React.ReactNode;
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}>

      {/* Overlay for better text visibility if needed */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <Navbar />

      <DesktopBanner />

      {/* Desktop Content (Windows, Icons) */}
      <div className="relative w-full h-full z-0">
        {children}
      </div>

      {/* Dock at the bottom */}
      <Dock />
    </main>
  );
};

export default Desktop;
