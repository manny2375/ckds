import { useEffect, useRef } from 'react';

interface TalentProps {
  onVisible: () => void;
}

export default function Talent({ onVisible }: TalentProps) {
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
      id="services"
      ref={sectionRef}
      className="snap-start laptop:snap-none min-h-[100svh] md:min-h-[90dvh] laptop:h-screen laptop:w-screen laptop:flex-shrink-0 flex items-start"
      aria-labelledby="services-heading"
    >
      <div className="w-full h-full grid laptop:grid-cols-2 laptop:overflow-hidden">
        <div className="px-4 sm:px-6 md:px-8 laptop:px-4 desktop:px-12 py-8 sm:py-12 laptop:py-8 desktop:py-14 laptop:pt-0 desktop:pt-20 flex flex-col laptop:justify-center desktop:justify-start laptop:h-screen laptop:overflow-hidden laptop:pb-8 relative">
          <div className="text-xs sm:text-sm tracking-widest text-gray-400 mb-3 laptop:absolute laptop:top-0 laptop:left-4 laptop:mb-0 desktop:mb-6 desktop:relative desktop:top-auto desktop:left-auto" aria-hidden="true">CHAPTER 3 — OUR SERVICES</div>

          <h2 id="services-heading" className="text-3xl sm:text-4xl laptop:text-[13px] desktop:text-4xl font-light leading-tight mb-4 laptop:mb-2 laptop:mt-2 desktop:mb-4 desktop:mt-0 text-black" style={{ fontFamily: 'Georgia, serif' }}>
            Our Services
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-black to-transparent mb-6 laptop:mb-2 desktop:mb-8"></div>

          <div className="space-y-4 laptop:space-y-1 desktop:space-y-6 text-sm laptop:text-xs desktop:text-sm text-gray-600 leading-relaxed laptop:leading-[1.1] mb-8 laptop:mb-1 desktop:mb-10">
            <p>
              From concept to completion, we transform ideas into experiences that connect, inspire, and evolve through curated design.
            </p>

            <p>
              Our work spans hospitality, restaurants, retail, clubhouses, commercial spaces and luxury residences. Whether crafting a signature destination or an intimate space, we blend creativity, functionality, and strategy to shape environments that move culture forward and feel distinctly alive.
            </p>

            <p>
              We operate through a collaborative lens — an interdisciplinary team of designers, architects, and creative thinkers with backgrounds in interiors, lighting, and brand experience. This integration allows us to create cohesive environments that engage every sense and transform your story into an immersive, living experience.
            </p>
          </div>

          <div className="mb-8 laptop:mb-1 desktop:mb-10">
            <h3 className="text-base laptop:text-[8px] desktop:text-lg font-semibold mb-4 laptop:mb-1 desktop:mb-6 text-black">Our services include:</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 laptop:gap-x-2 laptop:gap-y-0.5 text-sm laptop:text-xs desktop:text-sm text-gray-600 laptop:leading-[1.15]">
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Interior Architecture & Design</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Custom Lighting Design</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Concept Development & Strategy</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Construction Documentation & Coordination</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Design Development</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>WELL Design & Consultation</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Furniture, Fixtures & Equipment (FF&E) Curation & Procurement</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>3D Modeling & Visualization</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Art & Accessories Curation & Procurement</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>New Construction, Design-Build, Renovation & Repositioning</span>
              </div>
            </div>
          </div>



          <p className="text-sm laptop:text-xs desktop:text-sm text-gray-600 leading-relaxed laptop:leading-[1.1] laptop:mt-0">
            Every project is unique, yet each shares the same ambition, to create environments that tell a story.
          </p>
        </div>

        <div className="hidden laptop:block laptop:h-screen laptop:overflow-hidden">
          <img
            src="/beaumont-Kv_XgKpByUk-unsplash.jpg"
            alt="Interior design detail"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
