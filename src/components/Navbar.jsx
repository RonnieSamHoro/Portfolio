import React from 'react';
import linktreeIcon from '../assets/linktree.svg'; // ✅ Your SVG icon

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 sticky top-0 z-50 
      bg-white dark:bg-black text-black dark:text-white 
      border-b border-gray-300 dark:border-white/10 
      transition-colors duration-500"
    >
      {/* Left Side: Linktree Icon + Name */}
      <div className="flex items-center gap-3">
        <a
          href="https://linktr.ee/ronnaayyy" // 🔗 Replace with your Linktree URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity duration-300"
        >
          <img
            src={linktreeIcon}
            alt="Linktree"
            className="w-6 h-6 object-contain"
          />
        </a>
        <div className="text-lg font-display tracking-wider">RONIT</div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-8 text-sm font-mono uppercase">
        {['about', 'projects', 'contact'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
              after:h-[1px] after:bg-black dark:after:bg-white 
              hover:after:w-full after:transition-all after:duration-300 
              transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-300"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <button 
        onClick={toggleDarkMode}
        className="text-xs border border-gray-400 dark:border-white px-3 py-1 rounded-full 
          hover:bg-gray-100 dark:hover:bg-white/10 
          transition-colors duration-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Navbar;
