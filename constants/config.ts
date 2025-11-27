import { Terminal, Folder, Globe, FileText, Mail, User } from 'lucide-react';

export const apps = [
  {
    id: 'finder',
    title: 'Finder',
    icon: Folder,
    desktop: false,
  },
  {
    id: 'safari',
    title: 'Safari',
    icon: Globe,
    desktop: false,
  },
  {
    id: 'terminal',
    title: 'Terminal',
    icon: Terminal,
    desktop: false,
  },
  {
    id: 'resume',
    title: 'Resume',
    icon: FileText,
    desktop: true,
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: Mail,
    desktop: false,
  },
  {
    id: 'about',
    title: 'About Me',
    icon: User,
    desktop: true,
  }
];
