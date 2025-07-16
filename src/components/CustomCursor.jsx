import React, { useEffect, useRef } from 'react';

const CustomCursor = ({ darkMode }) => {
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
    document.body.style.cursor = 'none'; // Hide default cursor

    const updateCursor = () => {
      // Lerp formula: newPos = oldPos + (targetPos - oldPos) * factor
      posX.current += (mouseX.current - posX.current) * 0.1;
      posY.current += (mouseY.current - posY.current) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posX.current - 12}px, ${posY.current - 12}px, 0)`;
      }

      requestAnimationFrame(updateCursor);
    };

    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = ''; // Reset cursor on unmount
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-5 h-5 rounded-full z-[9999] pointer-events-none transition-colors duration-300 mix-blend-difference`}
      style={{
        backgroundColor: darkMode ? 'white' : 'black',
      }}
    />
  );
};

export default CustomCursor;
