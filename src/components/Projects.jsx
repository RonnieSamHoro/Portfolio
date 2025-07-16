import React from 'react';

const placeholderProjects = [
  {
    title: "BlinkNews – News Summary Website",
    description: "AI-powered web app that summarizes long news articles into short, readable snippets.",
    tech: "React, Node.js, Express, OpenAI API",
  },
  {
    title: "Guess My Number",
    description: "A fun number guessing game built with vanilla JavaScript and DOM manipulation.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    title: "Weight Tracker",
    description: "A clean frontend-backend app for tracking weight entries over time with visual graphs.",
    tech: "React, Express, MongoDB, Chart.js",
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 bg-white dark:bg-black text-black dark:text-white border-t border-gray-300 dark:border-white/10 transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {placeholderProjects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-300 dark:border-white/10 p-6 rounded-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-500">
              {project.description}
            </p>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-500 transition-colors duration-500">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
