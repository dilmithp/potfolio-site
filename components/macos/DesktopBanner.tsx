'use client';

import React from 'react';
import { personalInfo } from '@/lib/data';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const DesktopBanner = () => {
  return (
    <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center z-0 pointer-events-none select-none w-full max-w-3xl px-4">

      {/* Glass Banner */}
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-4 pr-8 rounded-full shadow-2xl flex items-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-700 w-full justify-between">

        {/* Left: Profile & Name */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full p-0.5 bg-white/50 shadow-lg shrink-0">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQH9C8xIxuEbkw/profile-displayphoto-scale_400_400/B56ZrEB8YtK8Ag-/0/1764225437031?e=1766016000&v=beta&t=FnHpwx3JmQ9ionLluK3tm5S3PEpiC33o5Ej0nlYlYig"
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-2xl font-bold text-white drop-shadow-md leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-blue-100 font-medium text-sm bg-white/10 px-2 py-0.5 rounded-md border border-white/10 self-start mt-1">
              {personalInfo.role}
            </p>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="hidden md:flex items-center gap-4 text-sm text-white/90 font-medium">
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <span>{personalInfo.email}</span>
              <Mail size={14} className="text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span>{personalInfo.phone}</span>
              <Phone size={14} className="text-white" />
            </div>
          </div>

          <div className="h-8 w-px bg-white/30 mx-2" />

          <div className="flex gap-2">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors pointer-events-auto">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors pointer-events-auto">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopBanner;
