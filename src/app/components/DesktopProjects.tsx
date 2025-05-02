'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from '../consts';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Eyes from './Eyes';

export default function DesktopProjects() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    // Check if all images loaded normally
    if (Object.keys(loadedImages).length === projects.length && 
        Object.values(loadedImages).every(loaded => loaded)) {
      setAllImagesLoaded(true);
    }
    
    // Safety timeout - show content after 5 seconds regardless
    const timer = setTimeout(() => {
      setAllImagesLoaded(true);
    }, 7000);
    
    return () => clearTimeout(timer);
  }, [loadedImages]);

  const handleImageLoaded = (index: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [index]: true
    }));
  };
  
  if (!mounted) {
    return <div className="h-[700px]"></div>;
  }

  const zIndexProjects = [
    "The CPR Bra", 
    "There's No Rainbow Without Water", 
    "Have a Proper Chat"
  ];

  return (
    <>
    <div className="relative w-full h-full">
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="w-30 h-30 border-b-8 border-t-8 rounded-full animate-spin"></div>
        </div>
      )}
      
      <div className={`w-[80%] h-full transition-opacity duration-500 ${allImagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {projects.map((project, index) => {
          // Calculate position in a circle
          const angle = (index / projects.length) * Math.PI * 2;
          
          // Adjust starting angle to place first item at the bottom
          const adjustedAngle = angle + Math.PI / 2;
          
          // Fixed radius for a consistent circle
          const radius = 38;

          let xOffset = 0;
          let yOffset = 0;
          if (index === 1 || index === 2) {
            xOffset = 6;
            yOffset = 4;
          }

          if (index === 4) {
            xOffset = 2;
          }

          if (index === 6) {
            xOffset = -2;
          }
          
          // Calculate x and y with small fixed offset for variety
          const x = Math.cos(adjustedAngle) * radius + xOffset;
          const y = Math.sin(adjustedAngle) * radius + yOffset;
          
          // Alternate rotation for visual interest
          const rotation = index % 2 === 0 ? -5 : 5;
          
          // Define animation parameters
          const floatDuration = 3 + (index % 2);
          const floatDelay = index * 0.05;
          const floatAmount = 3;
          const rotateAmount = 2;
          
          const isHovered = hoveredIndex === index;
          
          return (
            <motion.div 
              key={index} 
              className="absolute"
              style={{
                left: `${x + 50}%`,
                top: `${y + 50}%`,
                zIndex: zIndexProjects.includes(project.name) ? 40 : isHovered ? 50 : 10,
                transformOrigin: 'center center',
              }}
              initial={{
                x: '-50%',
                y: '-50%',
                rotate: rotation,
              }}
              animate={
                isHovered 
                  ? {
                      x: '-50%',
                      y: '-50%',
                      rotate: rotation,
                      scale: 1.1,
                    }
                  : {
                      x: ['-50%', `-${50 - floatAmount}%`, '-50%', `-${50 + floatAmount}%`, '-50%'],
                      y: ['-50%', `-${50 - floatAmount}%`, '-50%', `-${50 + floatAmount}%`, '-50%'],
                      rotate: [
                        rotation, 
                        rotation + rotateAmount, 
                        rotation, 
                        rotation - rotateAmount, 
                        rotation
                      ],
                      scale: 1,
                    }
              }
              transition={
                isHovered
                  ? {
                      duration: 0.3,
                      ease: "easeOut",
                    }
                  : {
                      duration: floatDuration,
                      ease: "easeInOut",
                      times: [0, 0.25, 0.5, 0.75, 1],
                      repeat: Infinity,
                      delay: floatDelay,
                      scale: { duration: 0 }
                    }
              }
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Link href={project.link || ""}>
                <div className="relative overflow-hidden group">
                  <div className="relative">
                    <Image 
                      src={project.image.image} 
                      alt={project.name} 
                      width={project.image.width}
                      height={project.image.height}
                      style={{ 
                        height: 'auto',
                        maxHeight: '250px',
                        width: 'auto',
                        maxWidth: '300px',
                        filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.3))'
                      }}
                      priority={true}
                      loading="eager"
                      quality={95}
                      className="object-contain transition-all duration-300 group-hover:opacity-40 p-7 group-hover:p-0"
                      onLoad={() => handleImageLoaded(index)}
                      onError={() => handleImageLoaded(index)}
                    />
                  </div>
                  
                  {/* Tagline overlay - appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-2xl text-[var(--foreground-dark)] text-center px-4 font-extrabold">
                      {project.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
    {allImagesLoaded && <Eyes />}
    </>
  );
}