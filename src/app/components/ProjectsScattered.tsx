'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from '../consts';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectsScattered() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projectsPerPage = 10;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Get current page's projects
  const currentProjects = projects.slice(
    currentPage * projectsPerPage, 
    (currentPage + 1) * projectsPerPage
  );
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="h-[700px]"></div>;
  }
  
  // Pagination functions
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative w-full h-full">
      {/* Navigation if more than one page */}
      {totalPages > 1 && (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
          <button 
            onClick={prevPage}
            className="px-3 py-1 bg-white/80 rounded-full shadow-md hover:bg-white"
          >
            Prev
          </button>
          <div className="flex items-center">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentPage ? 'bg-black' : 'bg-gray-400'
                }`}
                aria-label={`Page ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={nextPage}
            className="px-3 py-1 bg-white/80 rounded-full shadow-md hover:bg-white"
          >
            Next
          </button>
        </div>
      )}
      
      {/* Projects in a fixed circular arrangement */}
      <div className="hidden md:block">
      {currentProjects.map((project, index) => {
        // Calculate position in a circle
        const numberOfItems = currentProjects.length;
        const angle = (index / numberOfItems) * Math.PI * 2;
        
        // Adjust starting angle to place first item at the bottom
        const adjustedAngle = angle + Math.PI / 2;
        
        // Fixed radius for a consistent circle
        const radius = 35;
        
        // Calculate x and y with small fixed offset for variety
        const x = Math.cos(adjustedAngle) * radius;
        const y = Math.sin(adjustedAngle) * radius;
        
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
            key={`${currentPage}-${index}`} 
            className="absolute"
            style={{
              left: `${x + 50}%`,
              top: `${y + 50}%`,
              zIndex: isHovered ? 30 : 10,
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
                    src={project.image2} 
                    alt={project.name} 
                    width={300}
                    height={0}
                    style={{ 
                      height: 'auto',
                      maxHeight: '250px',
                      width: 'auto',
                      maxWidth: '300px',
                      filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.3))'
                    }}
                    quality={95}
                    className="object-contain transition-all duration-300 group-hover:opacity-40 p-7 group-hover:p-0"
                  />
                </div>
                
                {/* Tagline overlay - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-black text-2xl text-center px-4 font-extrabold">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
      </div>
      <div className=" md:hidden flex flex-col items-center ">
        {currentProjects.map((project, index) => {
          // Alternate rotation for visual interest
          const rotation = index % 2 === 0 ? -5 : 5;
          
          // Define animation parameters
          const floatDuration = 3 + (index % 2);
          const floatDelay = index * 0.05;
          const floatAmount = 3;
          const rotateAmount = 10;
          
          const isHovered = hoveredIndex === index;
          
          return (
            <motion.div 
              key={`${currentPage}-${index}`} 
              className="relative w-full flex justify-center my-4"
              style={{
                zIndex: isHovered ? 30 : 10,
                transformOrigin: 'center center',
              }}
              initial={{
                rotate: rotation,
              }}
              animate={
                isHovered 
                  ? {
                      rotate: rotation,
                      scale: 1.1,
                    }
                  : {
                      rotate: [
                        rotation, 
                        rotation + rotateAmount, 
                        rotation, 
                        rotation - rotateAmount, 
                        rotation
                      ],
                      y: [0, -floatAmount, 0, floatAmount, 0],
                      x: [0, floatAmount, 0, -floatAmount, 0],
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
                      src={project.image2} 
                      alt={project.name} 
                      width={300}
                      height={0}
                      style={{ 
                        height: 'auto',
                        maxHeight: '250px',
                        width: 'auto',
                        maxWidth: '300px',
                        filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.3))'
                      }}
                      quality={95}
                      className="object-contain transition-all duration-300 group-hover:opacity-40 p-7 group-hover:p-0"
                    />
                  </div>
                  
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}