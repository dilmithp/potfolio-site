'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Welcome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
    })
      .from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.4');

    // Interactive hover effect for text (simplified version of the tutorial)
    const title = titleRef.current;
    if (title) {
      title.addEventListener('mouseenter', () => {
        gsap.to(title, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      title.addEventListener('mouseleave', () => {
        gsap.to(title, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    }

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-0 pointer-events-none select-none">
      <p ref={subtitleRef} className="text-xl md:text-2xl text-black/60 font-light mb-2">
        Hi, I'm <span className="font-semibold text-black">Dilmith</span>
      </p>
      <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold text-black/80 tracking-tight drop-shadow-sm pointer-events-auto cursor-default">
        Portfolio
      </h1>
      <p className="mt-4 text-black/40 text-sm">
        Designed for Desktop & Tablet
      </p>
    </div>
  );
};

export default Welcome;
