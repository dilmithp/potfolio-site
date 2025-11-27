import Desktop from '@/components/macos/Desktop';
import Welcome from '@/components/macos/apps/Welcome';
import Terminal from '@/components/macos/apps/Terminal';
import Finder from '@/components/macos/apps/Finder';
import Safari from '@/components/macos/apps/Safari';
import Resume from '@/components/macos/apps/Resume';
import Contact from '@/components/macos/apps/Contact';
import About from '@/components/macos/apps/About';
import DesktopIcons from '@/components/macos/DesktopIcons';

export default function Home() {
  return (
    <Desktop>
      <DesktopIcons />
      <Welcome />
      <Terminal />
      <Finder />
      <Safari />
      <Resume />
      <Contact />
      <About />
    </Desktop>
  );
}
