"use client";
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Hide the original cursor
    document.body.style.cursor = 'none';
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.style.cursor = 'auto'; // Restore cursor on cleanup
    };
  }, []);
  
  return (
    <div 
      className="pointer-events-none fixed z-50 select-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-10%, -10%)', // Center the cursor
        width: '90px', // Make as big as you want
        height: '90px', // Make as big as you want
        backgroundImage: 'url("/Lolly.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}
