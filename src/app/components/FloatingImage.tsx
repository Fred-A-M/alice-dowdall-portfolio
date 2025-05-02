"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  rotation?: number;
  position?: {
    x: number | string;
    y: number | string;
  };
  rotateAmount?: number;
  floatAmount?: number;
  floatDuration?: number;
  floatDelay?: number;
  width?: number;
  height?: number;
  stylesWidth?: number;
  zIndex?: number;
  isMobile?: boolean;
}

export default function FloatingImage({
  src,
  alt,
  rotation = 0,
  position = { x: 0, y: 0 },
  rotateAmount = 3,
  floatAmount = 3,
  floatDuration = 3,
  floatDelay = 1,
  width = 0,
  height = 0,
  stylesWidth = 0,
  zIndex = 20,
}: ImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      style={{
        transformOrigin: 'center center',
        left: typeof position.x === 'string' ? position.x : `${position.x}px`,
        top: typeof position.y === 'string' ? position.y : `${position.y}px`,
      }}
      initial={{
        rotate: rotation,
        x: 0,
        y: 0,
      }}
      animate={
        isHovered 
          ? {
              rotate: rotation,
              scale: 1.2,
              x: 0,
              y: 0,
              zIndex: 30,
            }
          : {
              rotate: [
                rotation, 
                rotation + rotateAmount, 
                rotation, 
                rotation - rotateAmount, 
                rotation
              ],
              x: [
                0,
                floatAmount,
                0,
                -floatAmount,
                0
              ],
              y: [
                0,
                -floatAmount,
                0,
                floatAmount,
                0
              ],
              scale: 1,
              zIndex: zIndex ? zIndex : 20,
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
              repeatType: "loop",
              delay: floatDelay,
              scale: {duration: 0.3},
            }
      }
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={width ? width : 250}
        height={height ? height : 300}
        style={{
          maxWidth: stylesWidth ? `${stylesWidth}px` : "250px" ,
          width: stylesWidth ? `${stylesWidth}px` : "250px",
          maxHeight: "300px",
          height: "auto",
          objectFit: "contain",
        }}
        className="object-contain transition-all duration-300 group-hover:opacity-40 p-7 group-hover:p-0"
        priority={true}
        loading="eager"
      />
    </motion.div>
  );
}