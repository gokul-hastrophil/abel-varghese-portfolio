
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: 'url("/assets/misc/hero_bg.jpg")',
          filter: 'brightness(0.4) saturate(1.2)'
        }}
      />

      <div className="relative z-10 text-center px-4 md:px-6 max-w-7xl mx-auto animate-fadeIn flex flex-col items-center pt-32 md:pt-40">
        <p className="text-green-400 text-sm md:text-lg font-bold uppercase tracking-[0.4em] mb-8 font-montserrat shadow-black drop-shadow-lg">
          Engineering a Greener Tomorrow
        </p>

        <h1 className="text-white text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black leading-tight uppercase font-montserrat tracking-tighter mb-10 drop-shadow-2xl">
          The Future of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600">Chemical</span> <br />
          <span className="text-white">Innovation</span>
        </h1>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-white text-xl md:text-2xl lg:text-3xl italic font-light font-montserrat tracking-wide leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-shadow-lg">
            "Sustainable engineering is not just a choice,<br /> it is the key to our shared future."
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-4 text-white hover:text-green-400 transition-all duration-300"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold opacity-80 group-hover:opacity-100">Discover More</span>
            <div className="p-3 rounded-full border border-white/20 group-hover:border-green-400/50 transition-colors">
              <svg className="w-8 h-8 md:w-10 md:h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
