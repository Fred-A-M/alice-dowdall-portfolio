import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";
import Image from "next/image";

// Create a function that takes the project and returns the sections
export const MadeAFartingBillboardSections = (project: Project): ReactNode[] => {
  return [
    <div key="large-image" className="flex justify-center items-center w-full">
      <Image src={project.gallery[1].image} alt={project.name} width={900} height={500} />  
    </div>,

    <div key="large-image" className="grid grid-cols-2 gap-30">
      <div className="flex justify-end items-center">
        <FloatingImage 
          src={project.gallery[2].image}
          alt={project.name}
          position={{ x: 0, y: 0 }}
          scale={project.gallery[2].scale}
          rotation={-6}
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
        />
      </div>
      <div className="flex justify-start items-center">
        <FloatingImage 
          src={project.gallery[3].image}
          alt={project.name}
          position={{ x: 0, y: 0 }}
          scale={project.gallery[3].scale}
          rotateAmount={project.gallery[3].rotate}
          floatAmount={project.gallery[3].floatAmount}
          rotation={6}
          floatDuration={project.gallery[3].floatDuration}
          isWideImage={true}
        />
      </div>
    </div>
  ];
};

  