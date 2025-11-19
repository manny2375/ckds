import { useEffect, useRef } from 'react';

interface ExperiencesProps {
  onVisible: () => void;
}

export default function Experiences({ onVisible }: ExperiencesProps) {
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
      id="meet-cheryl"
      ref={sectionRef}
      className="snap-start laptop:snap-none min-h-[100svh] md:min-h-[90dvh] laptop:h-screen laptop:w-screen laptop:flex-shrink-0 flex items-center bg-[#f8f8f8]"
      aria-labelledby="cheryl-heading"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 laptop:px-8 desktop:px-16 py-8 sm:py-12 laptop:py-0">
        <div className="text-xs sm:text-sm tracking-widest text-gray-400 mb-4 laptop:mb-2 sm:mb-6 laptop:mt-2" aria-hidden="true">
          CHAPTER 2 — MEET CHERYL KAYE
        </div>

        <h2 id="cheryl-heading" className="text-3xl sm:text-4xl laptop:text-2xl desktop:text-4xl font-light leading-tight mb-4 laptop:mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          Meet Cheryl Kaye
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-black to-transparent mb-8 laptop:mb-2 desktop:mb-10"></div>

        <div className="grid laptop:grid-cols-[260px,1fr] desktop:grid-cols-[340px,1fr] gap-6 laptop:gap-4 desktop:gap-12 items-start">
          <div className="w-full max-w-sm mx-auto laptop:mx-0 h-[360px] sm:h-[420px] laptop:h-[360px] desktop:h-[480px] overflow-hidden">
            <img
              src="/cherylblack.png"
              alt="Cheryl Kaye, Interior Designer and Founder of CKDS"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="space-y-4 laptop:space-y-1 desktop:space-y-5 text-sm laptop:text-xs desktop:text-sm leading-[1.7] laptop:leading-[1.4] desktop:leading-[1.7] text-gray-600">
            <p>
              Design shapes life, influencing how we move, feel, and connect within the spaces around us. For over two decades, I have explored this power, discovering how thoughtful design can inspire, nurture, and transform. My education at the Interior Design Institute of Newport Beach and experience with Hatch Design Group laid the foundation for a career that spans restaurants, hospitality, residential spaces, and the design and manufacturing of custom lighting, giving me a perspective that seamlessly blends creativity with technical insight.
            </p>

            <p>
              Extraordinary is never ordinary. I look beyond the obvious to uncover the essence of each space, translating experience, culture, and human behavior into environments that feel purposeful, considered, and unmistakably distinctive.
            </p>

            <p>
              I am passionate about human sustainability, creating spaces that nurture well-being and connection. My journey continues to evolve; each project teaches me something new and shapes my vision while allowing me to grow alongside the communities and people I design for.
            </p>

            <p>
              As an entrepreneur, I approach design with both creativity and strategy, understanding the business, the return on investment, and the deeper intentions of every client. As a curator of experiences, I sense the subtle shifts in culture and expectation, and as a visionary, I anticipate the ways trends, behaviors, and lifestyles will unfold. Each project becomes a living story, a space shaped with intention, infused with personality, and brimming with possibility.
            </p>

            <div className="pt-4 laptop:pt-0 desktop:pt-4 flex items-center justify-end">
              <img
                src="/cksig.jpg"
                alt="Cheryl Kay Signature"
                className="h-14 sm:h-16 lg:h-20 laptop:h-12 desktop:h-20 w-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
