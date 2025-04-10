import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";

// Create a function that takes the project and returns the sections
export const GiffGaffSections = (project: Project): ReactNode[] => {
  return [
    <div key="videoandimage" className="flex justify-center items-center w-full my-8"> 
      <div className="w-[400px] h-[400px]">
        <iframe
          src={project.video}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full rounded-sm"
        />
      </div>
      <FloatingImage 
        src={project.gallery[1].image} 
        alt={project.name} 
        rotateAmount={project.gallery[1].rotate}
        floatAmount={project.gallery[1].floatAmount}
        floatDuration={project.gallery[1].floatDuration}
      />
    </div>,

    <div key="gallery" className="grid grid-cols-2 lg:w-[70%] w-[100%] mx-auto">
      <div className="flex col-span-1 justify-start items-center">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotateAmount={project.gallery[2].rotate}
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
          width={550}
          height={550}
        />
      </div>
      <div className="flex flex-col col-span-1 gap-4">
        <div className="self-end">
          <FloatingImage 
            src={project.gallery[3].image} 
            alt={project.name} 
            rotateAmount={project.gallery[3].rotate}
            floatAmount={project.gallery[3].floatAmount}
            floatDuration={project.gallery[3].floatDuration}
            width={800}
            height={800}
          />
        </div>
        <div className="self-start">
          <FloatingImage 
            src={project.gallery[4].image} 
            alt={project.name} 
            position={{ x: 0, y: 0 }}
            scale={project.gallery[4].scale}
            rotateAmount={project.gallery[4].rotate}
            floatAmount={project.gallery[4].floatAmount}
            floatDuration={project.gallery[4].floatDuration}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  ];
};

  