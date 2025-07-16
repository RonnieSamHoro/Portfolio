import React from 'react';
import heroVideo from '../assets/hero-bg.mp4'; // Replace with your actual path

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex justify-center items-center px-6 md:px-12 bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Background Overlay (only in dark mode) */}
      <div className="absolute inset-0 bg-transparent dark:bg-black/60 transition-colors duration-500 pointer-events-none" />

      {/* Hero Card */}
      <div className="relative z-10 w-full h-[70vh] max-w-5xl rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-white/10 backdrop-blur-md group transition duration-500">
        
        {/* Background Video with hover blur */}
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition duration-500 group-hover:blur-sm"
          />
          {/* Overlay for visibility */}
          <div className="absolute inset-0 bg-black/30 transition duration-500" />
        </div>

        {/* Text Content - stays sharp */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 py-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            FULL STACK<br />WEB DEVELOPER
          </h1>

          <p className="max-w-xl text-sm md:text-base font-light font-mono">
            Building smooth and modern web interfaces — blending design with code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
