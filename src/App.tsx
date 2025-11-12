import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AboutUs from './components/About_us';
import MeetCheryl from './components/Meet_Cheryl';
import Vision from './components/Vision';
import Services from './components/Services';
import OurStories from './components/Our_Stories';
import Collaborate from './components/Collaborate';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const sections = ['hero', 'about-1', 'about-2', 'about-3', 'meet-cheryl', 'vision', 'services', 'stories', 'contact'];
  const navToPageMap: { [key: string]: number } = {
    'about': 1,
    'meet-cheryl': 4,
    'services': 6,
    'stories': 7,
    'contact': 8
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;

    if (isMobile) return;

    let accumulatedDelta = 0;
    const SCROLL_THRESHOLD = 100;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling.current) return;

      accumulatedDelta += e.deltaY;

      if (Math.abs(accumulatedDelta) >= SCROLL_THRESHOLD) {
        const direction = accumulatedDelta > 0 ? 1 : -1;
        const nextPage = currentPage + direction;

        if (nextPage >= 0 && nextPage < sections.length) {
          isScrolling.current = true;
          setCurrentPage(nextPage);
          setActiveSection(sections[nextPage]);

          accumulatedDelta = 0;

          setTimeout(() => {
            isScrolling.current = false;
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
  }, [currentPage, sections]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen bg-white lg:overflow-hidden overflow-y-auto"
    >
      <Navigation activeSection={activeSection} onNavigate={(sectionId) => {
        const pageIndex = sectionId === 'hero' ? 0 : (navToPageMap[sectionId] || 0);
        setCurrentPage(pageIndex);
        setActiveSection(sectionId);
      }} />
      <div
        className="h-full w-full lg:flex lg:transition-transform lg:duration-1000 lg:ease-in-out"
        style={{ transform: window.innerWidth >= 1024 ? `translateX(-${currentPage * 100}vw)` : 'none' }}
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
