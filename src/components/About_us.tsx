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
        className="snap-start laptop:snap-none min-h-[100svh] md:min-h-[90dvh] laptop:h-screen laptop:w-screen laptop:flex-shrink-0 flex items-center justify-center bg-white"
        aria-labelledby="story-heading"
      >
        <div className="w-full h-full flex flex-col laptop:flex-row">
          <div className="w-full laptop:w-1/2 px-6 sm:px-10 md:px-12 laptop:px-8 desktop:px-24 py-12 laptop:py-12 desktop:py-24 flex flex-col justify-center laptop:justify-start desktop:pt-32">
            <div className="max-w-xl">
              <div className="text-xs sm:text-sm tracking-widest text-gray-400 mb-4 sm:mb-6" aria-hidden="true">
                CHAPTER 1 — ABOUT US
              </div>
              <h3 className="text-4xl font-light leading-tight mb-4" style={{ fontFamily: 'Georgia, serif', color: '#755C53' }}>
                Crafting Environments,<br />Curating Experiences
              </h3>

              <div className="flex items-start gap-8 mb-8">
                <div className="flex-shrink-0 pt-2">
                  <div className="w-24 h-px bg-gradient-to-r from-black to-transparent"></div>
                </div>
              </div>

              <p className="text-[15px] text-gray-600 leading-relaxed italic">
                A boutique studio delivering full-service design across lifestyle, hospitality, and luxury spaces.
              </p>
            </div>
          </div>

          <div className="w-full laptop:w-1/2 min-h-[50vh] laptop:h-full border-l border-gray-200 px-6 sm:px-10 md:px-12 laptop:px-8 desktop:px-24 py-12 laptop:py-12 desktop:py-24 flex items-center laptop:items-end desktop:pb-32">
            <div className="max-w-xl">
              <p className="text-[15px] text-gray-800 leading-relaxed mb-6">
                CKDS is a boutique interior design studio shaping hospitality, restaurants, retail, clubhouses, commercial environments, and luxury residences. Every space we craft is designed to leave a lasting imprint on those who experience it. We merge strategy, aesthetics, and foresight to anticipate how lifestyle will evolve — designing not just for today, but for how people and communities will thrive tomorrow. Every detail is purposeful, turning design into a story that elevates the human experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="snap-start laptop:snap-none min-h-[100svh] md:min-h-[90dvh] laptop:h-screen laptop:w-screen laptop:flex-shrink-0 flex items-start laptop:items-center bg-white"
        aria-labelledby="design-ethos-heading"
      >
        <div className="w-full px-6 sm:px-10 md:px-12 laptop:px-8 desktop:px-24 py-8 sm:py-12 laptop:py-0 flex laptop:items-center laptop:h-full">
          <div className="w-full max-w-7xl mx-auto flex flex-col laptop:justify-center laptop:pt-8">
            <div className="flex items-center mb-12 laptop:mb-3 desktop:mb-16">
              <h3 id="design-ethos-heading" className="text-2xl sm:text-3xl laptop:text-xl desktop:text-3xl font-light tracking-wide whitespace-nowrap pr-8">Our Design Ethos</h3>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="flex flex-col laptop:flex-row gap-8 laptop:gap-8 desktop:gap-16">
              <div className="laptop:w-1/4 desktop:w-1/3 flex-shrink-0"></div>
              <div className="laptop:w-3/4 desktop:w-2/3">
                <div className="grid sm:grid-cols-2 gap-x-8 laptop:gap-x-6 sm:gap-x-12 gap-y-8 laptop:gap-y-4 sm:gap-y-10">
                <div>
                  <h4 className="text-lg sm:text-xl laptop:text-base desktop:text-xl font-light mb-3 laptop:mb-1.5" style={{ color: '#755C53' }}>Elevate Human Experiences</h4>
                  <p className="text-gray-600 laptop:leading-snug leading-relaxed text-sm laptop:text-xs desktop:text-sm">
                    Every space we create is an invitation — to notice, to immerse, to feel. Thoughtful details speak to those who inhabit it, engaging the senses and offering moments of recognition, delight, and ease. Bold yet intuitive, each design leaves a lasting impression, transforming how life is felt, remembered, and savored.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl laptop:text-base desktop:text-xl font-light mb-3 laptop:mb-1.5" style={{ color: '#755C53' }}>Create Opportunity & Connection</h4>
                  <p className="text-gray-600 laptop:leading-snug leading-relaxed text-sm laptop:text-xs desktop:text-sm">
                    Our spaces unfold to inspire, connect, and awaken possibility. Design shapes how people move, meet, and experience life — cultivating moments that matter, both personal and professional. Every element encourages interaction and belonging, turning encounters into experiences that feel effortless, meaningful, and unforgettable.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl laptop:text-base desktop:text-xl font-light mb-3 laptop:mb-1.5" style={{ color: '#755C53' }}>Convey Our Clients' Story & Brand</h4>
                  <p className="text-gray-600 laptop:leading-snug leading-relaxed text-sm laptop:text-xs desktop:text-sm">
                    We uncover the narrative that gives a space its soul, bringing it to life through layered textures, refined materials, and intentional detail. Every gesture moves in harmony to reflect our client's vision, values, and essence. The result is an environment where their brand is not only seen, but felt — alive with identity, meaning, and presence.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl laptop:text-base desktop:text-xl font-light mb-3 laptop:mb-1.5" style={{ color: '#755C53' }}>Disguise Function Within Fashion</h4>
                  <p className="text-gray-600 laptop:leading-snug leading-relaxed text-sm laptop:text-xs desktop:text-sm">
                    We transform necessity into art. Every element serves a purpose yet unfolds as beauty — seamless, surprising, and intentional. Function becomes expression, where surfaces and details perform and captivate in equal measure. The result is an effortless balance of utility and elegance — where the practical feels poetic and the everyday, extraordinary.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl laptop:text-base desktop:text-xl font-light mb-3 laptop:mb-1.5" style={{ color: '#755C53' }}>Wellness-Focused</h4>
                  <p className="text-gray-600 laptop:leading-snug leading-relaxed text-sm laptop:text-xs desktop:text-sm">
                    Well-being is integral to our design philosophy. Every decision considers the human experience — fostering comfort, balance, and inspiration through thoughtful materials and spatial harmony. Guided by principles of human sustainability, we create environments that quietly nurture both body and mind. For projects seeking advanced wellness certification, we collaborate with experts aligned with the WELL Building Standard to elevate health, comfort, and vitality.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl laptop:text-base desktop:text-xl font-light mb-3 laptop:mb-1.5" style={{ color: '#755C53' }}>Innovate & Shape Culture</h4>
                  <p className="text-gray-600 laptop:leading-snug leading-relaxed text-sm laptop:text-xs desktop:text-sm">
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
        className="snap-start laptop:snap-none min-h-[100svh] md:min-h-[90dvh] laptop:h-screen laptop:w-screen laptop:flex-shrink-0 flex items-center justify-center bg-white"
        aria-labelledby="approach-heading"
      >
        <div className="w-full h-full flex flex-col laptop:flex-row laptop:items-end">
          <div className="w-full laptop:w-1/2 h-[40vh] laptop:h-full">
            <img
              src="/geraldine-D8KM6mUP5bI-unsplash.jpg"
              alt="Interior design detail showcasing craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full laptop:w-1/2 flex-1 laptop:h-full flex flex-col justify-center laptop:justify-end px-6 sm:px-10 md:px-12 laptop:px-8 desktop:px-24 py-12 laptop:pb-12 desktop:pb-24">
            <div className="max-w-xl">
              <h3 id="approach-heading" className="text-4xl font-light mb-8 tracking-tight text-black" style={{ fontFamily: 'Georgia, serif' }}>
                Our Approach
              </h3>
              <div className="w-24 h-px bg-gray-300 mb-8"></div>
              <p className="text-sm laptop:text-xs desktop:text-sm leading-relaxed text-gray-600">
                We approach design as both art and intelligence, blending intuition with intention to create spaces that feel as good as they look. Our process is collaborative and transparent, built on trust, communication, and innovation. By uniting strategy with soul, we craft environments that enrich lifestyles, strengthen brands, and connect people.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
