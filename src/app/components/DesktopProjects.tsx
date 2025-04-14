'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from '../consts';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectsScattered() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="h-[700px]"></div>;
  }

  return (
    <div className="relative w-[80%] h-[600px] flex items-center justify-center">
    <div className="relative w-full h-full">
     
      <div className="w-[80%] h-[600px]">
      {projects.map((project, index) => {
        // Calculate position in a circle
        const angle = (index / projects.length) * Math.PI * 2;
        
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
            key={index} 
            className="absolute"
            style={{
              left: `${x + 50}%`,
              top: `${y + 50}%`,
              zIndex: isHovered ? 50 : 10,
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
                    src={project.image} 
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
    </div>
  );
}