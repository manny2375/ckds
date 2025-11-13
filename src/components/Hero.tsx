export default function Hero() {
  return (
    <section
      id="hero"
      className="snap-start laptop:snap-none relative min-h-[100svh] md:min-h-[90dvh] laptop:h-screen laptop:w-screen laptop:flex-shrink-0 flex items-center justify-center"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://customer-mp06svfe1n138f7h.cloudflarestream.com/1f294a6d436628c5de70e1b33a04f0e3/iframe?autoplay=true&loop=true&muted=true&controls=false&poster=https%3A%2F%2Fcustomer-mp06svfe1n138f7h.cloudflarestream.com%2F1f294a6d436628c5de70e1b33a04f0e3%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover scale-[3] sm:scale-[2.2] md:scale-[1.6] laptop:scale-150"
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
          title="Hero background video"
        />
      </div>

      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 sm:hidden">
        <img
          src="/CopyCKDS_FULL.png"
          alt="Cheryl Kaye Design Studio"
          className="h-[5.6rem] w-auto brightness-0 invert"
        />
      </div>

      <div className="relative z-10 text-white px-4 sm:px-6 laptop:px-8 desktop:px-12 max-w-7xl mx-auto w-full h-full flex flex-col">
        <div className="hidden sm:flex sm:pt-16 md:pt-20 laptop:pt-20 desktop:pt-24 justify-center">
          <img
            src="/CopyCKDS_FULL.png"
            alt="Cheryl Kaye Design Studio"
            className="h-[5.6rem] md:h-[7.2rem] laptop:h-[7.6rem] desktop:h-[8.8rem] w-auto brightness-0 invert"
          />
        </div>
        <div className="text-left max-w-4xl flex-1 flex flex-col justify-center sm:-mt-20">
          <h2 className="text-3xl sm:text-4xl laptop:text-4xl desktop:text-5xl font-light tracking-wide">
            Storytelling Through Design
          </h2>
          <p className="mt-6 text-base sm:text-lg laptop:text-xl desktop:text-[24px] font-light tracking-wide leading-loose" style={{ fontFamily: "'Playfair Display', serif" }}>
            We create evocative environments that stimulate the senses, spark curiosity, and inspire connection, places that become part of people's memories, where moments are revisited. Every detail tells a story, transforming design into a catalyst for the human experience.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
