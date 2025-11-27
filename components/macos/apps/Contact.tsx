'use client';

import React from 'react';
import Window from '../Window';
import { personalInfo } from '@/lib/data';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <Window id="contact" title="Contact Me" defaultSize={{ width: 450, height: 550 }}>
      <div className="h-full bg-gray-50/90 backdrop-blur-xl flex flex-col">
        {/* Header */}
        <div className="bg-white/50 border-b border-white/20 p-6 md:p-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 overflow-hidden shadow-xl border-4 border-white ring-1 ring-black/5">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQH9C8xIxuEbkw/profile-displayphoto-scale_400_400/B56ZrEB8YtK8Ag-/0/1764225437031?e=1766016000&v=beta&t=FnHpwx3JmQ9ionLluK3tm5S3PEpiC33o5Ej0nlYlYig" alt={personalInfo.name} className="w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">{personalInfo.name}</h2>
          <p className="text-gray-500 font-medium text-sm">{personalInfo.role}</p>
        </div>

        {/* Contact Actions */}
        <div className="flex-1 p-6 space-y-3 overflow-y-auto">
          <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md hover:border-blue-100 transition-all">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <Mail size={18} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Email</p>
              <p className="text-sm font-semibold text-gray-900">{personalInfo.email}</p>
            </div>
            <ArrowUpRight size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
          </a>

          <a href={`tel:${personalInfo.phone}`} className="group flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md hover:border-green-100 transition-all">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
              <Phone size={18} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Phone</p>
              <p className="text-sm font-semibold text-gray-900">{personalInfo.phone}</p>
            </div>
            <ArrowUpRight size={16} className="text-gray-300 group-hover:text-green-500 transition-colors" />
          </a>

          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100/50">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500">
              <MapPin size={18} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Location</p>
              <p className="text-sm font-semibold text-gray-900">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Social Footer */}
        <div className="p-6 bg-white/50 border-t border-white/20">
          <div className="flex justify-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <Github size={18} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-full hover:bg-[#006396] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <Linkedin size={18} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default Contact;
