import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";
import Image from "next/image";

// Create a function that takes the project and returns the sections
export const WorldWithoutSoilSections = (project: Project): ReactNode[] => {
  return [

    <div key="gallery2" className="grid grid-cols-1 mx-auto lg:w-[75%] w-full">
      <div className="flex justify-start items-start">
        <FloatingImage 
          src={project.gallery[1].image}
          alt={project.name}
          rotation={-3}
          rotateAmount={project.gallery[1].rotate}  
          floatAmount={project.gallery[1].floatAmount}
          floatDuration={project.gallery[1].floatDuration}
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-end items-end">
        <FloatingImage 
          src={project.gallery[2].image}
          alt={project.name}
          rotation={3}
          rotateAmount={project.gallery[2].rotate}  
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
          width={500}
          height={500}
        />
      </div>
    </div>,

    <div key="large-image" className="flex justify-center items-center w-full">
      <Image 
        src={project.gallery[3].image} 
        alt={project.name} 
        width={900} 
        height={500} />  
    </div>
  ];
};

export const WorldWithoutSoilSectionsMobile = (project: Project): ReactNode[] => {
  return [

    <div key="gallery2" className="grid grid-cols-1 mx-auto sm:w-[80%] w-full">
      <div className="flex justify-start items-start">
        <FloatingImage 
          src={project.gallery[1].image}
          alt={project.name}
          rotation={-6}
          rotateAmount={project.gallery[1].rotate}  
          floatAmount={project.gallery[1].floatAmount}
          floatDuration={project.gallery[1].floatDuration}
          isMobile={true}
        />
      </div>
      <div className="flex justify-end items-end">
        <FloatingImage 
          src={project.gallery[2].image}
          alt={project.name}
          rotation={6}
          rotateAmount={project.gallery[2].rotate}  
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
          isMobile={true}
        />
      </div>
    </div>,

    <div key="large-image" className="flex justify-center items-center w-full">
      <Image 
        src={project.gallery[3].image} 
        alt={project.name} 
        width={450} 
        height={300} 
      />  
    </div>
  ];
};

  