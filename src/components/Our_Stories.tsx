import { useEffect, useRef } from 'react';

interface RecognitionProps {
  onVisible: () => void;
}

export default function Recognition({ onVisible }: RecognitionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <section
      id="our_stories"
      ref={sectionRef}
      className="min-h-screen lg:h-screen lg:w-screen lg:flex-shrink-0 bg-[#E8D5C4]"
      aria-labelledby="recognition-heading"
    >
      <div className="h-full flex flex-col">
        <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12" style={{ backgroundColor: '#755C53' }}>
          <div className="text-xs sm:text-sm tracking-widest text-white/70 mb-4 sm:mb-6" aria-hidden="true">CHAPTER 4 — OUR STORIES</div>
          <h2 id="recognition-heading" className="text-4xl font-light leading-tight text-white mb-4">
            Our Stories
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-white to-transparent"></div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="relative overflow-hidden flex items-center justify-center">
            <img
              src="/polina-hospitality-unsplash.jpg"
              alt="Hospitality interior design"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative z-10 text-4xl font-light text-white">Hospitality</h3>
          </div>

          <div className="relative overflow-hidden flex items-center justify-center">
            <img
              src="/aranprime-commercial-unsplash.jpg"
              alt="Commercial interior design"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative z-10 text-4xl font-light text-white">Commercial</h3>
          </div>

          <div className="relative overflow-hidden flex items-center justify-center">
            <img
              src="/rhema-residential-unsplash.jpg"
              alt="Residential interior design"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative z-10 text-4xl font-light text-white">Residential</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
