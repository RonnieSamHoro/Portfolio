import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-white dark:bg-black text-black dark:text-white border-t border-gray-300 dark:border-white/10 transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Contact</h2>

      <p className="text-sm font-light mb-6 max-w-md text-gray-600 dark:text-gray-400 transition-colors duration-500">
        Want to work together or just say hi? Reach out via any of the platforms below.
      </p>

      <ul className="space-y-2 font-mono text-sm text-gray-700 dark:text-gray-300 transition-colors duration-500">
        <li>Email: <a href="mailto:your.email@example.com" className="underline">ronitsam.official@gamil.com</a></li>
        <li>GitHub: <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="underline">https://github.com/RonnieSamHoro</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="underline">https://www.linkedin.com/in/ronit-sam-horo/</a></li>
      </ul>
    </section>
  );
};

export default Contact;
