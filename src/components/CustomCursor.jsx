import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';

    const updateCursor = () => {
      const speed = 0.02; // tweak this value between 0.05 and 0.2 for more or less lag
      posX.current += (mouseX.current - posX.current) * speed;
      posY.current += (mouseY.current - posY.current) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posX.current - 10}px, ${posY.current - 10}px, 0)`;
      }

      requestAnimationFrame(updateCursor);
    };

    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 rounded-full z-[9999] pointer-events-none 
        mix-blend-difference bg-white ring-1 ring-black dark:ring-white 
        transition-[background-color,transform] duration-100 ease-out"
      style={{ willChange: 'transform' }}
    />
  );
};

export default CustomCursor;
