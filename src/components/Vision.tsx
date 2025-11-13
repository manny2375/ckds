import { useEffect, useRef } from 'react';

interface VisionProps {
  onVisible: () => void;
}

export default function Vision({ onVisible }: VisionProps) {
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
      id="vision"
      ref={sectionRef}
      className="snap-start laptop:snap-none min-h-[100svh] md:min-h-[90dvh] laptop:h-screen laptop:w-screen laptop:flex-shrink-0 flex items-center justify-center relative"
      aria-label="Our vision"
    >
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://customer-mp06svfe1n138f7h.cloudflarestream.com/f92a0b636a17126f1f05dcc4d92ecaa6/iframe?autoplay=true&loop=true&muted=true&controls=false&poster=https%3A%2F%2Fcustomer-mp06svfe1n138f7h.cloudflarestream.com%2Ff92a0b636a17126f1f05dcc4d92ecaa6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover laptop:scale-150"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          style={{
            border: 'none',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            transformOrigin: 'center',
            pointerEvents: 'none'
          }}
          title="Vision background video"
        />
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 laptop:px-10 desktop:px-12 text-center py-8 sm:py-0">
        <p className="text-base sm:text-lg laptop:text-lg desktop:text-xl leading-relaxed" style={{ color: '#D6D1C7' }}>
          Our work exists at the intersection of creativity and purpose — where artistry meets intelligence, and every decision is driven by meaning. With each project, we redefine what design can achieve: spaces that inspire, brands that endure, and experiences that leave a mark. What follows is a glimpse into how we bring that vision to life where imagination becomes tangible, and design begins to tell its story.
        </p>
      </div>
    </section>
  );
}
