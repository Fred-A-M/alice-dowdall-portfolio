import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import Image from "next/image";

// Create a function that takes the project and returns the sections
export const FartingBillboardSections = (project: Project): ReactNode[] => {
  return [
 
    <Image 
      src={project.gallery[1].image} 
      alt={project.name} 
      width={1600} 
      height={1066} 
      key="0"
      priority
      loading="eager"
      style={{
        width: '1100px',
        height: 'auto',
      }}
    />,
    <Image 
      src={project.gallery[0].image} 
      alt={project.name} 
      width={945} 
      height={1436} 
      key="1"
      style={{
        width: '700px',
        height: 'auto',
      }}
    />,
   <Image 
      src={project.gallery[2].image} 
      alt={project.name} 
      width={796} 
      height={1570} 
      key="2"
      style={{
        width: '400px',
        height: 'auto',
      }}
    />,
  ];
};

export const FartingBillboardSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key="large-image" className="flex justify-center items-center w-full">
      <Image 
        src={project.gallery[1].image} 
        alt={project.name} 
        width={1600} 
        height={1066} 
        className="rounded-sm"
        style={{
          width: '500px',
          height: 'auto',
        }}
        priority={true}
      />  
    </div>,

    <div key="gallery" className="grid grid-cols-2">
      <div className="flex justify-end items-center">
        <FloatingImage 
          src={project.gallery[2].image}
          alt={project.name}
          rotation={-6}
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          floatDelay={0.5}
          width={796} 
          height={1570}
        />
      </div>
      <div className="flex justify-start items-center">
        <StaticImage 
          src={project.gallery[3].image}
          alt={project.name}
          rotation={6}
          width={340}
          height={190}
        />
      </div>
    </div>
  ];
};

  