'use client';

import React from 'react';
import Window from '../Window';

const Resume = () => {
  return (
    <Window id="resume" title="Resume.pdf" defaultSize={{ width: 800, height: 800 }}>
      <div className="h-full bg-[#525659] flex flex-col">
        <div className="flex-1 w-full h-full">
          {/* Assuming resume.pdf is in public folder. If not, this will 404 but the structure is correct. */}
          <iframe
            src="/Dilmith-Pathirana.pdf"
            className="w-full h-full border-none"
            title="Resume"
          />
        </div>
      </div>
    </Window>
  );
};

export default Resume;
