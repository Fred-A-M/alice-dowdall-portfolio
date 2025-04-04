'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Eyes() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const target = useRef({ x: 0, y: 0 }); // mouse position
  const current = useRef({ x: 0, y: 0 }); // current pupil position

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Smoothly move toward target using linear interpolation (lerp)
      current.current.x += (target.current.x - current.current.x) * 0.02;
      current.current.y += (target.current.y - current.current.y) * 0.02;

      [leftEyeRef.current, rightEyeRef.current].forEach((eye) => {
        if (!eye) return;
        const pupil = (eye as HTMLElement).querySelector('.pupil');
        if (!pupil) return;
        
        const rect = (eye as HTMLElement).getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = current.current.x - eyeCenterX;
        const dy = current.current.y - eyeCenterY;
        const angle = Math.atan2(dy, dx);
        const radius = 15;
        const pupilX = Math.cos(angle) * radius;
        const pupilY = Math.sin(angle) * radius;

        (pupil as HTMLElement).style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });

      requestAnimationFrame(animate);
    };

    animate(); // kick off animation loop

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex gap-6 justify-center items-baseline">
      
      <div
        ref={leftEyeRef}
        className="eye w-24 h-24 bg-white rounded-full border-4 border-black relative overflow-hidden shadow-2xl shadow-black"
      >
        <div className="pupil absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-18 h-18">
          <Image 
            src="/Pupils.png" 
            alt="Eye" 
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div
        ref={rightEyeRef}
        className="eye w-24 h-24 bg-white rounded-full border-4 border-black relative overflow-hidden shadow-2xl shadow-black"
      >
        <div className="pupil absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-18 h-18">
          <Image 
            src="/Pupils.png" 
            alt="Eye" 
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
