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
className="snap-start xl:snap-none min-h-[100svh] md:min-h-[90dvh] xl:h-screen xl:w-screen xl:flex-shrink-0 flex items-start xl:overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="w-full h-full grid lg:grid-cols-2">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-12 xl:py-6 flex flex-col justify-start">
          <div className="text-xs sm:text-sm tracking-widest text-gray-400 mb-3 xl:mb-2" aria-hidden="true">CHAPTER 3 — OUR SERVICES</div>

          <h2 id="services-heading" className="text-3xl xl:text-2xl font-light leading-tight mb-3 xl:mb-2">
            Our Services
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-black to-transparent mb-6 xl:mb-4"></div>

          <div className="space-y-4 xl:space-y-2.5 text-[15px] xl:text-[13px] text-gray-900 leading-relaxed mb-8 xl:mb-5">
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

          <div className="mb-8 xl:mb-5">
            <h3 className="text-base xl:text-sm font-semibold mb-4 xl:mb-3">Our services include:</h3>
            <div className="grid sm:grid-cols-2 gap-x-6 xl:gap-x-4 gap-y-2 xl:gap-y-1 text-[14px] xl:text-[12px] text-gray-900">
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

          <p className="text-[15px] xl:text-[13px] text-gray-900 leading-relaxed">
            Every project is unique, yet each shares the same ambition, to create environments that tell a story.
          </p>
        </div>

        <div className="hidden lg:block h-full overflow-hidden">
          <img
            src="/beaumont-Kv_XgKpByUk-unsplash.jpg"
            alt="Interior design detail"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
      </div>
    </section>
  );
}
