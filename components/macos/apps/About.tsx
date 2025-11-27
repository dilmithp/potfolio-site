'use client';

import React from 'react';
import Window from '../Window';
import { personalInfo, education, experience } from '@/lib/data';
import { User, MapPin, Calendar, Briefcase, GraduationCap, Building2 } from 'lucide-react';

const About = () => {
  return (
    <Window id="about" title="About Me" defaultSize={{ width: 750, height: 650 }}>
      <div className="h-full bg-gray-50/80 backdrop-blur-xl p-0 overflow-hidden flex flex-col">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-white/80 to-white/40 border-b border-white/20 p-6 md:p-8 flex flex-col items-center text-center shrink-0">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-2xl mb-4 border-4 border-white ring-1 ring-black/5">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQH9C8xIxuEbkw/profile-displayphoto-scale_400_400/B56ZrEB8YtK8Ag-/0/1764225437031?e=1766016000&v=beta&t=FnHpwx3JmQ9ionLluK3tm5S3PEpiC33o5Ej0nlYlYig" alt={personalInfo.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">{personalInfo.name}</h2>
          <p className="text-blue-600 font-semibold text-lg bg-blue-50 px-3 py-1 rounded-full border border-blue-100/50">
            {personalInfo.role}
          </p>
          <div className="flex items-center gap-2 text-gray-600 mt-3 text-sm font-medium bg-white/60 px-3 py-1 rounded-full shadow-sm border border-white/40">
            <MapPin size={14} className="text-red-500" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Bio */}
          <section>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 px-1">
              <User size={14} /> Biography
            </h3>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50">
              <p className="text-gray-700 leading-relaxed text-[15px]">
                {personalInfo.summary}
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 px-1">
              <Briefcase size={14} /> Experience
            </h3>
            <div className="space-y-3">
              {experience.map((exp, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mt-0.5">
                        <Building2 size={14} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                      {exp.duration}
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 px-1">
              <GraduationCap size={14} /> Education
            </h3>
            <div className="grid gap-3">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100/50 flex justify-between items-center group hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 font-bold text-lg">
                      {edu.institution.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{edu.institution}</h4>
                      <p className="text-sm text-gray-600 font-medium">{edu.degree}</p>
                      {edu.details && <p className="text-xs text-gray-400 mt-0.5">{edu.details}</p>}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Window>
  );
};

export default About;
