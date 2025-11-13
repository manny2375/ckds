import { Plus, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: 'about', number: '01', label: 'ABOUT US' },
  { id: 'meet-cheryl', number: '02', label: 'MEET CHERYL KAYE' },
  { id: 'services', number: '03', label: 'OUR SERVICES' },
  { id: 'stories', number: '04', label: 'OUR STORIES' },
  { id: 'contact', number: '05', label: 'COLLABORATE' },
];

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Plus size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-screen w-full sm:w-80 bg-white shadow-2xl z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col p-6 sm:p-12">
          <div className="mb-8 sm:mb-16 flex justify-center">
            <button
              onClick={() => handleNavigate('hero')}
              className="hover:opacity-60 transition-opacity"
            >
              <img
                src="/CKDSlogonavi.png"
                alt="Cheryl Kaye Design Studio"
                className="h-10 w-auto"
              />
            </button>
          </div>

          <div className="mb-12">
            <p className="text-sm font-light mb-4">
              Always curious. Always collaborating.
            </p>
            <button
              onClick={() => handleNavigate('contact')}
              className="text-sm underline italic hover:opacity-60 transition-opacity"
            >
              Let's connect
            </button>
          </div>

          <nav className="space-y-8 mt-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex items-baseline gap-4 w-full text-left transition-all duration-300 hover:translate-x-2 group ${
                  activeSection === item.id ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <span className="text-[18px] font-light text-[#0a0a0a] group-hover:text-[#8B6F47] transition-colors duration-300">{item.number}.</span>
                <span className="text-[18px] font-light tracking-wide text-[#0a0a0a] group-hover:text-[#8B6F47] transition-colors duration-300">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
