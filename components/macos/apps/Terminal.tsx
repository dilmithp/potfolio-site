'use client';

import React from 'react';
import Window from '../Window';
import { Terminal as TerminalIcon, Check, ChevronRight } from 'lucide-react';
import { skills } from '@/lib/data';

const Terminal = () => {
  // Map the flat skills object to categories for display
  const skillCategories = [
    { category: 'Languages', items: skills.languages },
    { category: 'Web Technologies', items: skills.web },
    { category: 'Core Concepts', items: skills.core },
    { category: 'Databases', items: skills.databases },
    { category: 'Tools & Cloud', items: skills.tools },
  ];

  return (
    <Window id="terminal" title="Terminal — -zsh — 80x24">
      <div className="p-4 font-mono text-sm text-gray-800 h-full bg-white/90 backdrop-blur-sm overflow-auto">
        <div className="mb-4">
          <span className="text-green-500">➜</span> <span className="text-blue-500">~</span> <span className="font-bold">neofetch --skills</span>
        </div>

        <div className="space-y-4">
          {skillCategories.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center gap-2 text-yellow-600 mb-1">
                <ChevronRight size={14} />
                <span className="font-bold">{skill.category}</span>
              </div>
              <div className="pl-6 flex flex-wrap gap-x-4 gap-y-1">
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={12} className="text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <span className="text-green-500">➜</span> <span className="text-blue-500">~</span> <span className="animate-pulse">_</span>
        </div>
      </div>
    </Window>
  );
};

export default Terminal;
