import React from 'react';

const Footer = () => {
  return (
    <footer
      className="py-6 px-6 md:px-12 bg-white dark:bg-black text-black dark:text-white border-t border-gray-300 dark:border-white/10 text-sm text-center transition-colors duration-500"
    >
      © {new Date().getFullYear()} Ronit Sam Horo. All rights reserved.
    </footer>
  );
};

export default Footer;
