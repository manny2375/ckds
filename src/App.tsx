import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AboutUs from './components/About_us';
import MeetCheryl from './components/Meet_Cheryl';
import Vision from './components/Vision';
import Services from './components/Services';
import OurStories from './components/Our_Stories';
import Collaborate from './components/Collaborate';
import useIsDesktopLike from './hooks/useIsDesktopLike';

const sections = ['hero', 'about-1', 'about-2', 'about-3', 'meet-cheryl', 'vision', 'services', 'stories', 'contact'];
const navToPageMap: { [key: string]: number } = {
  'about': 1,
  'meet-cheryl': 4,
  'services': 6,
  'stories': 7,
  'contact': 8
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentPage, setCurrentPage] = useState(0);
  const isDesktopLike = useIsDesktopLike();
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    if (!isDesktopLike) return;

    let accumulatedDelta = 0;
    const SCROLL_THRESHOLD = 160;
    let scrolling = false;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      e.preventDefault();

      if (scrolling) return;

      accumulatedDelta += e.deltaY;

      if (Math.abs(accumulatedDelta) >= SCROLL_THRESHOLD) {
        const direction = accumulatedDelta > 0 ? 1 : -1;
        const nextPage = currentPage + direction;

        if (nextPage >= 0 && nextPage < sections.length) {
          scrolling = true;
          setCurrentPage(nextPage);
          const sectionId = sections[nextPage];
          const navSection = sectionId.startsWith('about-') ? 'about' : sectionId;
          setActiveSection(navSection);

          accumulatedDelta = 0;

          setTimeout(() => {
            scrolling = false;
          }, 600);
        } else {
          accumulatedDelta = 0;
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isDesktopLike, currentPage]);

  return (
    <div
      ref={containerRef}
      className={isDesktopLike ? "h-screen w-screen bg-white overflow-hidden" : "min-h-screen w-full bg-white overflow-y-auto snap-y snap-mandatory"}
      style={{ touchAction: isDesktopLike ? 'auto' : 'pan-y pinch-zoom' }}
    >
      <Navigation activeSection={activeSection} onNavigate={(sectionId) => {
        if (!isDesktopLike) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          setActiveSection(sectionId);
        } else {
          const pageIndex = sectionId === 'hero' ? 0 : (navToPageMap[sectionId] || 0);
          setCurrentPage(pageIndex);
          setActiveSection(sectionId);
        }
      }} />
      <div
        className={isDesktopLike ? "h-full flex transition-transform duration-1000 ease-in-out" : "w-full"}
        style={{
          transform: isDesktopLike ? `translateX(-${currentPage * 100}vw)` : 'none',
          width: isDesktopLike ? `${sections.length * 100}vw` : '100%'
        }}
      >
        <Hero />
        <AboutUs onVisible={() => setActiveSection('about')} />
        <MeetCheryl onVisible={() => setActiveSection('meet-cheryl')} />
        <Vision onVisible={() => setActiveSection('vision')} />
        <Services onVisible={() => setActiveSection('services')} />
        <OurStories onVisible={() => setActiveSection('stories')} />
        <Collaborate onVisible={() => setActiveSection('contact')} />
      </div>
    </div>
  );
}

export default App;
