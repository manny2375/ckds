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
      id="stories"
      ref={sectionRef}
      className="snap-start laptop:snap-none min-h-[100svh] md:min-h-[90dvh] laptop:h-screen laptop:w-screen laptop:flex-shrink-0 bg-[#E8D5C4]"
      aria-labelledby="recognition-heading"
    >
      <div className="h-full flex flex-col">
        <div className="px-4 sm:px-6 md:px-8 laptop:px-8 desktop:px-12 py-8 laptop:py-6 sm:py-12" style={{ backgroundColor: '#755C53' }}>
          <div className="text-xs sm:text-sm tracking-widest text-white/70 mb-3 laptop:mb-2 sm:mb-6" aria-hidden="true">CHAPTER 4 — OUR STORIES</div>
          <h2 id="recognition-heading" className="text-3xl sm:text-4xl laptop:text-2xl desktop:text-4xl font-light leading-tight text-white mb-3 laptop:mb-2">
            Our Stories
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-white to-transparent"></div>
        </div>

        <div className="flex-1 grid grid-cols-1 laptop:grid-cols-3 gap-0">
          <div className="relative flex items-center justify-center min-h-[300px]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/polina-hospitality-unsplash.jpg"
                alt="Hospitality interior design"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <h3 className="relative z-10 text-3xl sm:text-4xl laptop:text-3xl desktop:text-4xl font-light text-white">Hospitality</h3>
          </div>

          <div className="relative flex items-center justify-center min-h-[300px]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/aranprime-commercial-unsplash.jpg"
                alt="Commercial interior design"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <h3 className="relative z-10 text-3xl sm:text-4xl laptop:text-3xl desktop:text-4xl font-light text-white">Commercial</h3>
          </div>

          <div className="relative flex items-center justify-center min-h-[300px]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/rhema-residential-unsplash.jpg"
                alt="Residential interior design"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <h3 className="relative z-10 text-3xl sm:text-4xl laptop:text-3xl desktop:text-4xl font-light text-white">Residential</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
