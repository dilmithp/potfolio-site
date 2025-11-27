'use client';

import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery } from 'lucide-react';
import dayjs from 'dayjs';

const Navbar = () => {
  const [time, setTime] = useState(dayjs().format('ddd MMM D h:mm A'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format('ddd MMM D h:mm A'));
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-8 bg-white/40 backdrop-blur-md flex items-center justify-between px-4 text-black text-sm z-50 shadow-sm border-b border-white/20">
      <div className="flex items-center gap-4">
        <Apple size={18} className="fill-black" />
        <span className="font-semibold">Portfolio</span>
        <ul className="hidden sm:flex items-center gap-4 font-medium opacity-90">
          <li className="hover:bg-black/5 px-2 py-0.5 rounded cursor-default transition-colors">File</li>
          <li className="hover:bg-black/5 px-2 py-0.5 rounded cursor-default transition-colors">Edit</li>
          <li className="hover:bg-black/5 px-2 py-0.5 rounded cursor-default transition-colors">View</li>
          <li className="hover:bg-black/5 px-2 py-0.5 rounded cursor-default transition-colors">Go</li>
          <li className="hover:bg-black/5 px-2 py-0.5 rounded cursor-default transition-colors">Window</li>
          <li className="hover:bg-black/5 px-2 py-0.5 rounded cursor-default transition-colors">Help</li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Wifi size={16} />
          <Battery size={16} />
        </div>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Navbar;
