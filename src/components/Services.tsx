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
      id="our_services"
      ref={sectionRef}
      className="snap-start xl:snap-none min-h-[100svh] md:min-h-[90dvh] xl:h-screen xl:w-screen xl:flex-shrink-0 flex items-start"
      aria-labelledby="services-heading"
    >
      <div className="w-full h-full grid lg:grid-cols-2">
        <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 lg:pt-24 flex flex-col justify-start">
          <div className="text-xs sm:text-sm tracking-widest text-gray-400 mb-4 sm:mb-6" aria-hidden="true">CHAPTER 3 — OUR SERVICES</div>

          <h2 id="services-heading" className="text-4xl font-light leading-tight mb-4">
            Our Services
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-black to-transparent mb-8"></div>

          <div className="space-y-6 text-[15px] text-gray-900 leading-relaxed mb-10">
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

          <div className="mb-10">
            <h3 className="text-base sm:text-lg font-semibold mb-6">Our services include:</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-2 text-[15px] text-gray-900">
                <li>• Interior Architecture & Design</li>
                <li>• Concept Development & Strategy</li>
                <li>• Design Development</li>
                <li>• Furniture, Fixtures & Equipment (FF&E) Curation & Procurement</li>
                <li>• Art & Accessories Curation & Procurement</li>
              </ul>
              <ul className="space-y-2 text-[15px] text-gray-900">
                <li>• Custom Lighting Design</li>
                <li>• Construction Documentation & Coordination</li>
                <li>• WELL Design & Consultation</li>
                <li>• 3D Modeling & Visualization</li>
                <li>• New Construction, Design-Build, Renovation & Repositioning</li>
              </ul>
            </div>
          </div>

          
          
          <p className="text-[15px] text-gray-900 leading-relaxed">
            Every project is unique, yet each shares the same ambition, to create environments that tell a story.
          </p>
        </div>

        <div className="hidden lg:block h-full">
          <img
            src="/beaumont-Kv_XgKpByUk-unsplash.jpg"
            alt="Interior design detail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
