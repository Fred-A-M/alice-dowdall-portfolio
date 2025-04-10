import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";
import Image from "next/image";

export const MadeACprBraSections = (project: Project): ReactNode[] => {
  return [
    <div key="pair-1" className="grid grid-cols-2">
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          position={{ x: 0, y: 0 }} 
          scale={project.gallery[1].scale} 
          rotation={-4} 
          rotateAmount={project.gallery[1].rotate} 
          floatAmount={project.gallery[1].floatAmount} 
          floatDuration={project.gallery[1].floatDuration} />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          position={{ x: 0, y: 0 }} 
          scale={project.gallery[2].scale} 
          rotation={2} 
          rotateAmount={project.gallery[2].rotate} 
          floatAmount={project.gallery[2].floatAmount} 
          floatDuration={project.gallery[2].floatDuration} />
      </div>
    </div>,

    <div key="pair-2" className="grid grid-cols-2 gap-4">
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[3].image} 
          alt={project.name} 
          position={{ x: 0, y: 0 }} 
          scale={project.gallery[3].scale} 
          rotation={10} 
          rotateAmount={project.gallery[3].rotate} 
          floatAmount={project.gallery[3].floatAmount} 
          floatDuration={project.gallery[3].floatDuration} 
          width={250}
        />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[4].image} 
          alt={project.name} 
          position={{ x: 0, y: 0 }} 
          scale={project.gallery[4].scale} 
          rotation={0} 
          rotateAmount={project.gallery[4].rotate} 
          floatAmount={project.gallery[4].floatAmount} 
          floatDuration={project.gallery[4].floatDuration} 
        />
      </div>
    </div>,

    <div key="pair-3" className="grid grid-cols-2 gap-4">
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[5].image} 
          alt={project.name} 
          position={{ x: 0, y: 0 }} 
          scale={project.gallery[5].scale} 
          rotation={-10} 
          rotateAmount={project.gallery[5].rotate} 
          floatAmount={project.gallery[5].floatAmount} 
          floatDuration={project.gallery[5].floatDuration} 
        />
      </div>
      <div className="col-span-1 flex justify-center items-center pr-20">
        <FloatingImage 
          src={project.gallery[6].image} 
          alt={project.name} 
          position={{ x: 0, y: 0 }} 
          scale={project.gallery[6].scale} 
          rotation={2} 
          rotateAmount={project.gallery[6].rotate} 
          floatAmount={project.gallery[6].floatAmount} 
          width={500}
          floatDuration={project.gallery[6].floatDuration} 
        />
      </div>
    </div>,

    <div key="large-image" className="flex justify-center items-center">
      <Image 
        src={project.gallery[7].image} 
        alt={project.name} 
        width={900} 
        height={500}
        className="rounded-sm"
      />
    </div>,
    ];
};

  