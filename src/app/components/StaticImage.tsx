"use client";
import Image from 'next/image';
import './StaticImage.css';
import { useState } from 'react';
interface StaticImageProps {
  src: string;
  alt: string;
  rotation?: number;
  position?: {
    x: number | string;
    y: number | string;
  };
  isMobile?: boolean;
  width?: number;
  height?: number;
  stylesWidth?: number;
  zIndex?: number;
  className?: string;
  priority?: boolean;
}

export default function StaticImage({
  src,
  alt,
  rotation = 0,
  width = 0,
  height = 0,
  stylesWidth = 0,
  zIndex = 20,
  className = "",
  priority = false,
}: StaticImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      style={{
        zIndex: zIndex,
        transform: `rotate(${rotation}deg)`,
        transition: 'all 0.3s ease-in-out',
      }}
      className="hover:scale-120 hover:z-30"
    >
      {!imageLoaded && (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-10 h-10 border-b-4 border-t-4 rounded-full animate-spin"></div>
        </div>
      )}
      <Image 
        src={src} 
        alt={alt} 
        width={width ? width : 800}
        height={height ? height : 800}
        style={{
          width: stylesWidth ? `${stylesWidth}px` : "250px",
          height: "auto",
          objectFit: "contain",
        }}
        className={`${className} antiAliased`}
        priority={priority}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}