import React from 'react';
import profilePic from '../assets/ronit.jpg'; // Make sure image is in src/assets/

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 bg-white dark:bg-black text-black dark:text-white border-t border-gray-300 dark:border-white/10 transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-left">About Me</h2>

      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Profile Image */}
        <div className="w-40 md:w-48 shrink-0">
          <img
            src={profilePic}
            alt="Ronit Sam Horo"
            className="rounded-xl shadow-md object-cover w-full"
          />
        </div>

        {/* About Text */}
        <div className="text-left w-full md:max-w-[50%]">
          <p className="text-base md:text-lg font-light leading-relaxed mb-10 text-gray-700 dark:text-gray-300 transition-colors duration-500">
              I'm Ronit Sam Horo — a full stack web developer specializing in the MERN stack. I build fast, functional, and scalable web applications from scratch — blending clean code with purposeful design. Whether it’s crafting intuitive frontends or architecting reliable backends, I aim to deliver seamless digital experiences.
          </p>


          {/* Tech Stack */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-6 text-base font-mono text-gray-500 dark:text-gray-400 transition-colors duration-500">
            <div>React.js</div>
            <div>JavaScript</div>
            <div>Tailwind CSS</div>
            <div>Vite</div>
            <div>Git & GitHub</div>
            <div>Node.js (basic)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
