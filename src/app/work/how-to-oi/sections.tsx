import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";

export const HowToOiSections = (project: Project): ReactNode[] => {
  return [
    <div key="large-image" className="flex justify-center items-center w-full">
      <FloatingImage 
        src={project.gallery[1].image}
        alt={project.name} 
        rotation={-3}
        rotateAmount={project.gallery[1].rotate}
        floatAmount={project.gallery[1].floatAmount}
        floatDuration={project.gallery[1].floatDuration}
        width={900}
        height={900}
      />
    </div>,

    <div key="large-image2" className="flex justify-center items-center w-full">
      <FloatingImage 
        src={project.gallery[2].image}
        alt={project.name}
        rotation={3}
        rotateAmount={project.gallery[2].rotate}
        floatAmount={project.gallery[2].floatAmount}
        floatDuration={project.gallery[2].floatDuration}
        width={900}
        height={900}
      />
    </div>,

    <div key="large-image3" className="flex justify-center items-center w-full">
      <FloatingImage 
        src={project.gallery[3].image}
        alt={project.name} 
        rotation={-4}
        rotateAmount={project.gallery[3].rotate}
        floatAmount={project.gallery[3].floatAmount}
        floatDuration={project.gallery[3].floatDuration}
        width={900}
        height={900}
      />
    </div>,

    <div key="large-image4" className="flex justify-center items-center w-full">
      <FloatingImage 
        src={project.gallery[4].image}
        alt={project.name} 
        rotation={2}
        rotateAmount={project.gallery[4].rotate}
        floatAmount={project.gallery[4].floatAmount}
        floatDuration={project.gallery[4].floatDuration}
        width={900}
        height={900}
      />
    </div>
  ];
};

  