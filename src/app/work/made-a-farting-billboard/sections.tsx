import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";
import Image from "next/image";

// Create a function that takes the project and returns the sections
export const FartingBillboardSections = (project: Project): ReactNode[] => {
  return [
    <div key="large-image" className="flex justify-center items-center w-full">
      <Image 
        src={project.gallery[1].image} 
        alt={project.name} 
        width={900} 
        height={500} 
        className="rounded-sm"
      />  
    </div>,

    <div key="gallery" className="grid grid-cols-2 gap-30">
      <div className="flex justify-end items-center">
        <FloatingImage 
          src={project.gallery[2].image}
          alt={project.name}
          rotation={-6}
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
          width={500}
          height={400}
        />
      </div>
      <div className="flex justify-start items-center">
        <FloatingImage 
          src={project.gallery[3].image}
          alt={project.name}
          rotation={6}
          rotateAmount={project.gallery[3].rotate}
          floatAmount={project.gallery[3].floatAmount}
          floatDuration={project.gallery[3].floatDuration}
          width={600}
          height={600}
        />
      </div>
    </div>
  ];
};

export const FartingBillboardSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key="large-image" className="flex justify-center items-center w-full">
      <Image 
        src={project.gallery[1].image} 
        alt={project.name} 
        width={500} 
        height={300} 
        className="rounded-sm"
      />  
    </div>,

    <div key="gallery" className="grid grid-cols-2">
      <div className="flex justify-end items-center">
        <FloatingImage 
          src={project.gallery[2].image}
          alt={project.name}
          rotation={-6}
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
          isMobile={true}
        />
      </div>
      <div className="flex justify-start items-center">
        <FloatingImage 
          src={project.gallery[3].image}
          alt={project.name}
          rotation={6}
          rotateAmount={project.gallery[3].rotate}
          floatAmount={project.gallery[3].floatAmount}
          floatDuration={project.gallery[3].floatDuration}
        />
      </div>
    </div>
  ];
};

  