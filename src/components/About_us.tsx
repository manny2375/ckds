import { useEffect, useRef } from 'react';

interface StoryProps {
  onVisible: () => void;
}

export default function Story({ onVisible }: StoryProps) {
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
    <>
      <section
        id="about"
        ref={sectionRef}
className="snap-start xl:snap-none min-h-[100svh] md:min-h-[90dvh] xl:h-screen xl:w-screen xl:flex-shrink-0 flex items-center justify-center bg-white xl:overflow-hidden"
        aria-labelledby="story-heading"
      >
        <div className="w-full h-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 px-8 sm:px-12 lg:px-12 xl:px-16 py-12 lg:py-16 xl:py-12 flex flex-col justify-start lg:pt-20 xl:pt-16">
            <div className="max-w-xl">
              <div className="text-xs sm:text-sm tracking-widest text-gray-400 mb-4 xl:mb-3" aria-hidden="true">
                CHAPTER 1 — ABOUT US
              </div>
              <h3 className="text-3xl xl:text-2xl font-light leading-tight mb-4 xl:mb-3" style={{ fontFamily: 'Georgia, serif', color: '#755C53' }}>
                Crafting Environments,<br />Curating Experiences
              </h3>

              <div className="flex items-start gap-8 mb-6 xl:mb-4">
                <div className="flex-shrink-0 pt-2">
                  <div className="w-24 h-px bg-gradient-to-r from-black to-transparent"></div>
                </div>
              </div>

              <p className="text-[15px] xl:text-sm text-gray-600 leading-relaxed italic">
                A boutique studio delivering full-service design across lifestyle, hospitality, and luxury spaces.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 min-h-[50vh] lg:h-full border-l border-gray-200 px-8 sm:px-12 lg:px-12 xl:px-16 py-12 lg:py-16 xl:py-12 flex items-end xl:pb-24">
            <div className="max-w-xl">
              <p className="text-[15px] xl:text-sm text-gray-800 leading-relaxed mb-6">
                CKDS is a boutique interior design studio shaping hospitality, restaurants, retail, clubhouses, commercial environments, and luxury residences. Every space we craft is designed to leave a lasting imprint on those who experience it. We merge strategy, aesthetics, and foresight to anticipate how lifestyle will evolve — designing not just for today, but for how people and communities will thrive tomorrow. Every detail is purposeful, turning design into a story that elevates the human experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="snap-start xl:snap-none min-h-[100svh] md:min-h-[90dvh] xl:h-screen xl:w-screen xl:flex-shrink-0 flex items-start xl:items-center bg-white xl:overflow-hidden"
        aria-labelledby="design-ethos-heading"
      >
        <div className="w-full px-8 sm:px-12 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-0 xl:py-6 flex">
          <div className="w-full max-w-7xl mx-auto flex flex-col">
            <div className="flex items-center mb-8 xl:mb-6">
              <h3 id="design-ethos-heading" className="text-2xl xl:text-xl font-light tracking-wide whitespace-nowrap pr-8">Our Design Ethos</h3>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-12">
              <div className="lg:w-1/3 flex-shrink-0"></div>
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-x-8 sm:gap-x-12 xl:gap-x-8 gap-y-6 xl:gap-y-4">
                <div>
                  <h4 className="text-lg xl:text-base font-light mb-2 xl:mb-1.5" style={{ color: '#755C53' }}>Elevate Human Experiences</h4>
                  <p className="text-gray-600 leading-relaxed text-sm xl:text-xs">
                    Every space we create is an invitation — to notice, to immerse, to feel. Thoughtful details speak to those who inhabit it, engaging the senses and offering moments of recognition, delight, and ease. Bold yet intuitive, each design leaves a lasting impression, transforming how life is felt, remembered, and savored.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg xl:text-base font-light mb-2 xl:mb-1.5" style={{ color: '#755C53' }}>Create Opportunity & Connection</h4>
                  <p className="text-gray-600 leading-relaxed text-sm xl:text-xs">
                    Our spaces unfold to inspire, connect, and awaken possibility. Design shapes how people move, meet, and experience life — cultivating moments that matter, both personal and professional. Every element encourages interaction and belonging, turning encounters into experiences that feel effortless, meaningful, and unforgettable.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg xl:text-base font-light mb-2 xl:mb-1.5" style={{ color: '#755C53' }}>Convey Our Clients' Story & Brand</h4>
                  <p className="text-gray-600 leading-relaxed text-sm xl:text-xs">
                    We uncover the narrative that gives a space its soul, bringing it to life through layered textures, refined materials, and intentional detail. Every gesture moves in harmony to reflect our client's vision, values, and essence. The result is an environment where their brand is not only seen, but felt — alive with identity, meaning, and presence.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg xl:text-base font-light mb-2 xl:mb-1.5" style={{ color: '#755C53' }}>Disguise Function Within Fashion</h4>
                  <p className="text-gray-600 leading-relaxed text-sm xl:text-xs">
                    We transform necessity into art. Every element serves a purpose yet unfolds as beauty — seamless, surprising, and intentional. Function becomes expression, where surfaces and details perform and captivate in equal measure. The result is an effortless balance of utility and elegance — where the practical feels poetic and the everyday, extraordinary.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg xl:text-base font-light mb-2 xl:mb-1.5" style={{ color: '#755C53' }}>Wellness-Focused</h4>
                  <p className="text-gray-600 leading-relaxed text-sm xl:text-xs">
                    Well-being is integral to our design philosophy. Every decision considers the human experience — fostering comfort, balance, and inspiration through thoughtful materials and spatial harmony. Guided by principles of human sustainability, we create environments that quietly nurture both body and mind. For projects seeking advanced wellness certification, we collaborate with experts aligned with the WELL Building Standard to elevate health, comfort, and vitality.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg xl:text-base font-light mb-2 xl:mb-1.5" style={{ color: '#755C53' }}>Innovate & Shape Culture</h4>
                  <p className="text-gray-600 leading-relaxed text-sm xl:text-xs">
                    We design with conviction — creating environments that set new standards for lifestyle and culture. Our work blends innovation, craftsmanship, and collaboration, producing spaces that resonate beyond their walls. By engaging local artisans, embracing emerging technologies, and anticipating how people will live and connect, we craft design that endures. Each project becomes part of a larger cultural dialogue — a statement of vision, influence, and lasting impact.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="snap-start xl:snap-none min-h-[100svh] md:min-h-[90dvh] xl:h-screen xl:w-screen xl:flex-shrink-0 flex items-center justify-center bg-white xl:overflow-hidden"
        aria-labelledby="approach-heading"
      >
        <div className="w-full h-full flex flex-col lg:flex-row lg:items-end">
          <div className="w-full lg:w-1/2 h-[40vh] lg:h-full">
            <img
              src="/geraldine-D8KM6mUP5bI-unsplash.jpg"
              alt="Interior design detail showcasing craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 flex-1 lg:h-full flex flex-col justify-center lg:justify-end px-8 sm:px-12 lg:px-12 xl:px-16 py-12 lg:pb-16 xl:pb-12">
            <div className="max-w-xl">
              <h3 id="approach-heading" className="text-3xl xl:text-2xl font-light mb-6 xl:mb-4 tracking-tight text-black" style={{ fontFamily: 'Georgia, serif' }}>
                Our Approach
              </h3>
              <div className="w-24 h-px bg-gray-300 mb-6 xl:mb-4"></div>
              <p className="text-[15px] xl:text-sm leading-relaxed text-gray-900">
                We approach design as both art and intelligence, blending intuition with intention to create spaces that feel as good as they look. Our process is collaborative and transparent, built on trust, communication, and innovation. By uniting strategy with soul, we craft environments that enrich lifestyles, strengthen brands, and connect people.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
