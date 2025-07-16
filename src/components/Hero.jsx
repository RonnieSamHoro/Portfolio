import React from 'react';
import heroVideo from '../assets/hero-bg.mp4'; 

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex justify-center items-center px-6 md:px-12 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500"
    >
      {/* Background Overlay (applies only in dark mode) */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/60 transition-colors duration-500" />

      {/* Hero Card */}
      <div className="relative z-10 w-full h-[70vh] max-w-5xl rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-white/10 backdrop-blur-md group transition duration-500">
        
        {/* Background Video inside Card */}
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105 blur-[1px] group-hover:blur-[2px] transition duration-500"
          />
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-white/60 dark:bg-black/40 transition-colors duration-500" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 py-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            DIGITAL EXPERIENCE<br />DEVELOPER
          </h1>

          <p className="max-w-xl text-sm md:text-base font-light font-mono text-gray-700 dark:text-gray-200">
            Building smooth and modern web interfaces — blending design with code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
