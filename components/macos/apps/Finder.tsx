'use client';

import React, { useState, useMemo } from 'react';
import Window from '../Window';
import { projects } from '@/lib/data';
import { Folder, Github, ExternalLink, Search, LayoutGrid, List as ListIcon, ChevronDown, Clock, Star, Tag, Code2, Globe, Database, Terminal } from 'lucide-react';

const Finder = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'name' | 'recent'>('recent');

  // Extract unique tags for sidebar
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tech.forEach(t => tags.add(t)));
    return Array.from(tags).slice(0, 8); // Top 8 tags
  }, []);

  const filteredProjects = useMemo(() => {
    let result = projects.filter(p =>
      (selectedCategory === 'All' || p.tech.includes(selectedCategory) || (selectedCategory === 'Recent' && projects.indexOf(p) < 5)) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
    );

    if (sortBy === 'name') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    // Note: 'recent' assumes the data is already sorted by recency or we'd need a date field. 
    // For now, we'll assume the array order is roughly chronological or just keep as is.

    return result;
  }, [search, selectedCategory, sortBy]);

  const SidebarItem = ({ icon: Icon, label, active, onClick, color = "text-blue-500" }: any) => (
    <li
      onClick={onClick}
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors ${active
        ? 'bg-black/10 dark:bg-white/10 font-medium'
        : 'hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300'
        }`}
    >
      <Icon size={15} className={active ? color : "text-gray-400"} />
      <span className={active ? "text-black dark:text-white" : ""}>{label}</span>
    </li>
  );

  return (
    <Window id="finder" title="Finder" defaultSize={{ width: 900, height: 600 }}>
      <div className="flex h-full bg-transparent">
        {/* Sidebar */}
        <div className="w-52 bg-white/40 backdrop-blur-xl border-r border-white/20 p-3 flex flex-col gap-6 text-sm select-none">
          <div>
            <p className="text-[11px] font-bold text-gray-400 mb-2 px-2 uppercase tracking-wide">Favorites</p>
            <ul className="space-y-0.5">
              <SidebarItem
                icon={Folder}
                label="All Projects"
                active={selectedCategory === 'All'}
                onClick={() => setSelectedCategory('All')}
              />
              <SidebarItem
                icon={Clock}
                label="Recent"
                active={selectedCategory === 'Recent'}
                onClick={() => setSelectedCategory('Recent')}
                color="text-blue-500"
              />
              <SidebarItem
                icon={Star}
                label="Featured"
                active={false}
                onClick={() => { }}
                color="text-yellow-500"
              />
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold text-gray-400 mb-2 px-2 uppercase tracking-wide">Tech Stack</p>
            <ul className="space-y-0.5">
              <SidebarItem icon={Globe} label="Next.js" active={selectedCategory === 'Next.js'} onClick={() => setSelectedCategory('Next.js')} color="text-black" />
              <SidebarItem icon={Code2} label="React" active={selectedCategory === 'React'} onClick={() => setSelectedCategory('React')} color="text-blue-400" />
              <SidebarItem icon={Terminal} label="TypeScript" active={selectedCategory === 'TypeScript'} onClick={() => setSelectedCategory('TypeScript')} color="text-blue-600" />
              <SidebarItem icon={Database} label="Node.js" active={selectedCategory === 'Node.js'} onClick={() => setSelectedCategory('Node.js')} color="text-green-600" />
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold text-gray-400 mb-2 px-2 uppercase tracking-wide">Tags</p>
            <div className="flex flex-wrap gap-2 px-2">
              {allTags.map(tag => (
                <span
                  key={tag}
                  onClick={() => setSelectedCategory(tag)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer hover:scale-110 transition-transform ${selectedCategory === tag ? 'ring-2 ring-offset-1 ring-blue-500' : ''
                    }`}
                  style={{ backgroundColor: stringToColor(tag) }}
                  title={tag}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-white/30 backdrop-blur-sm">
          {/* Toolbar */}
          <div className="h-12 border-b border-white/20 flex items-center justify-between px-4 bg-white/40 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-500">
                <button className="p-1 hover:bg-black/5 rounded"><ChevronDown size={14} className="rotate-90" /></button>
                <button className="p-1 hover:bg-black/5 rounded"><ChevronDown size={14} className="-rotate-90" /></button>
              </div>
              <span className="text-sm font-semibold text-gray-700">{selectedCategory}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex bg-black/5 p-0.5 rounded-lg">
                <button
                  onClick={() => setView('grid')}
                  className={`p-1 rounded-md transition-all ${view === 'grid' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  <LayoutGrid size={15} />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-1 rounded-md transition-all ${view === 'list' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  <ListIcon size={15} />
                </button>
              </div>

              <div className="relative group">
                <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 pr-3 py-1 text-xs bg-black/5 focus:bg-white border border-transparent focus:border-blue-400/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-40 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto p-4">
            {view === 'grid' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProjects.map((project, idx) => (
                  <div key={idx} className="group flex flex-col bg-white/40 hover:bg-white/80 border border-white/20 hover:border-blue-400/30 p-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-default">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-50 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden group-hover:from-blue-200 group-hover:to-indigo-100 transition-colors">
                      <Folder size={40} className="text-blue-400/50 group-hover:text-blue-500 transition-colors" />

                      {/* Hover Overlay Actions */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity backdrop-blur-[1px]">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform text-gray-700">
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-1">{project.title}</h3>
                      <p className="text-[10px] text-gray-500 line-clamp-2 mb-2 leading-relaxed">{project.description}</p>

                      <div className="mt-auto flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((t, i) => (
                          <span key={i} className="text-[9px] px-1.5 py-0.5 bg-black/5 rounded text-gray-600 font-medium">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-[9px] px-1.5 py-0.5 bg-black/5 rounded text-gray-500">+{project.tech.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col min-w-[600px]">
                <div className="grid grid-cols-12 text-[10px] font-bold text-gray-400 border-b border-gray-200/50 pb-2 mb-2 px-4 uppercase tracking-wider select-none">
                  <div className="col-span-4">Name</div>
                  <div className="col-span-5">Description</div>
                  <div className="col-span-3">Tech Stack</div>
                </div>
                {filteredProjects.map((project, idx) => (
                  <div key={idx} className="grid grid-cols-12 items-center text-sm py-2 px-4 hover:bg-blue-500/10 rounded-lg group transition-colors cursor-default odd:bg-white/20">
                    <div className="col-span-4 flex items-center gap-3 font-medium text-gray-700">
                      <div className="p-1.5 bg-blue-100 text-blue-500 rounded-md">
                        <Folder size={14} />
                      </div>
                      <span className="truncate">{project.title}</span>
                    </div>
                    <div className="col-span-5 text-gray-500 text-xs truncate pr-4">
                      {project.description}
                    </div>
                    <div className="col-span-3 flex items-center gap-2">
                      <div className="flex -space-x-1 overflow-hidden">
                        {project.tech.slice(0, 3).map((t, i) => (
                          <div key={i} className="w-4 h-4 rounded-full bg-gray-200 border border-white flex items-center justify-center text-[8px] text-gray-600" title={t}>
                            {t[0]}
                          </div>
                        ))}
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-auto opacity-0 group-hover:opacity-100 p-1 hover:bg-black/5 rounded text-gray-500 transition-all">
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Status Bar */}
          <div className="h-7 border-t border-white/20 flex items-center justify-between px-4 text-[10px] text-gray-500 bg-white/40 backdrop-blur-md select-none">
            <span>{filteredProjects.length} items</span>
            <span>{Math.round(filteredProjects.length * 15.5)} MB available</span>
          </div>
        </div>
      </div>
    </Window>
  );
};

// Helper to generate consistent colors from strings
function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - c.length) + c;
}

export default Finder;
