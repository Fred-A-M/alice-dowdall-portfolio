"use client";

import { useEffect } from 'react';
import { useState } from 'react';
import DesktopProjects from './components/DesktopProjects';
import ProjectsMobile from './components/MobileProjects';

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This code runs once on mount
    
    // Define the function that checks window size
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Run once immediately
    checkIfMobile();
    
    // Add event listener that persists after the effect completes
    window.addEventListener('resize', checkIfMobile);
    
    // This cleanup runs when component unmounts
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[700px]"></div>;
  }

  return (
    <div className={`flex items-center justify-center ${!isMobile && 'min-h-[calc(100vh-150px)]'}`}>
      {isMobile ? (
        <div className="w-full h-full">
          <ProjectsMobile />
        </div>
      ) : (
        <div className="relative w-full lg:w-[80%] h-[70vh] flex items-center justify-center">
          <DesktopProjects />
        </div>
      )}
    </div>
  );
}
