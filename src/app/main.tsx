"use client";

import { useEffect } from 'react';
import { useState } from 'react';
import Eyes from "./components/Eyes";
import ProjectsScattered from './components/DesktopProjects';
import ProjectsMobile from './components/MobileProjects';

// import ProjectsMap from "./ProjectsMap";

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This code runs once on mount
    
    // Define the function that checks window size
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
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
    <div className="flex flex-col items-center justify-center sm:mt-10">
        {isMobile ? (
        <div className="w-full h-full">
          <ProjectsMobile />
        </div>
      ) : (
        <div className="relative w-[90%] h-[580px] flex items-center justify-center">
          <ProjectsScattered />
          <div className="absolute left-1/2" 
            style={{
              transform: 'translateX(-50%)',
            }}
          >
            <Eyes />
          </div>
        </div>
      )}
      </div>
  );
}
