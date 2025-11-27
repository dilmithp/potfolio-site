'use client';

import React, { useState } from 'react';
import Window from '../Window';
import { ArrowLeft, ArrowRight, RotateCw, Shield, Share, Plus } from 'lucide-react';

const Safari = () => {
  const [url, setUrl] = useState('https://blog.dilmith.live');

  return (
    <Window id="safari" title="Safari" defaultSize={{ width: 900, height: 600 }}>
      <div className="flex flex-col h-full bg-white/60">
        {/* Toolbar */}
        <div className="h-12 bg-white/40 border-b border-white/20 flex items-center px-4 gap-4">
          <div className="flex gap-2 text-gray-500">
            <ArrowLeft size={16} />
            <ArrowRight size={16} />
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <Shield size={14} />
          </div>

          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-lg bg-white/60 rounded-lg flex items-center px-3 py-1.5 gap-2 text-sm text-center group focus-within:ring-2 ring-blue-500 transition-all shadow-sm">
              <span className="text-gray-500 text-xs">🔒</span>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-center group-focus-within:text-left"
              />
              <RotateCw size={12} className="text-gray-500" />
            </div>
          </div>

          <div className="flex gap-4 text-gray-500">
            <Share size={16} />
            <Plus size={16} />
            <div className="flex gap-1">
              <div className="w-4 h-4 border border-gray-400 rounded flex items-center justify-center text-[8px]">Tab</div>
            </div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="flex-1 bg-white/50 backdrop-blur-md relative">
          <iframe
            src="https://blog.dilmith.live/"
            className="w-full h-full border-none"
            title="Browser Content"
          />
        </div>
      </div>
    </Window>
  );
};

export default Safari;
