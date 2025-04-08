"use client";
import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Hide the original cursor
    document.body.style.cursor = 'none';
    
    // Use ref for position updates instead of state for better performance
    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Direct DOM manipulation is faster than state updates
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    
    // Use throttled hover checking for better performance
    let isChecking = false;
    const checkHover = (e: MouseEvent) => {
      if (isChecking) return;
      isChecking = true;
      
      const target = e.target as HTMLElement;
      
      // Simplified hover detection - focus on most common hoverable elements
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        !!target.closest('a') || 
        !!target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(isInteractive);
      
      // Prevent too many checks in quick succession
      setTimeout(() => {
        isChecking = false;
      }, 50);
    };
    
    window.addEventListener('mousemove', updatePosition);
    // Use mouseover instead of mousemove for hover checks
    document.addEventListener('mouseover', checkHover);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', checkHover);
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  if (!mounted) return null;
  
  return createPortal(
    <div 
      ref={cursorRef}
      className={`pointer-events-none fixed z-50 select-none transition-transform duration-150 bg-no-repeat bg-contain ${isHovering ? 'scale-125' : ''}`}
      style={{
        left: '0px',
        top: '0px',
        transform: 'translate(-10%, -10%)',
        width: '50px',
        height: '50px',
        backgroundImage: isHovering 
          ? 'url("/Munch.png")' 
          : 'url("/Lolly.png")',
      }}
    />,
    document.body
  );
}
