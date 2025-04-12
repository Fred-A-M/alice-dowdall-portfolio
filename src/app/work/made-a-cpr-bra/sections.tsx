import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import Image from "next/image";

export const MadeACprBraSections = (project: Project): ReactNode[] => {
  return [
    <div key="pair-1" className="grid grid-cols-2 w-full lg:w-[80%] mx-auto">
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotation={-4} 
          rotateAmount={4} 
          floatAmount={2} 
          floatDuration={3} 
          floatDelay={0.5}
        />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <StaticImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotation={2} 
          width={500}
        />
      </div>
    </div>,

    <div key="pair-2" className="grid grid-cols-2">
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[3].image} 
          alt={project.name} 
          rotation={10} 
          rotateAmount={4} 
          floatAmount={2} 
          floatDuration={3} 
          floatDelay={1.5}
          width={250}
        />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <StaticImage 
          src={project.gallery[4].image} 
          alt={project.name} 
          rotation={-2} 
        />
      </div>
    </div>,

    <div key="pair-3" className="grid grid-cols-3 w-full lg:w-[80%] mx-auto">
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[5].image} 
          alt={project.name} 
          rotation={-10} 
          rotateAmount={4} 
          floatAmount={2} 
          floatDuration={3} 
          floatDelay={2.5}
        />
      </div>
      <div className="col-span-2 flex justify-end items-center">
        <StaticImage 
          src={project.gallery[6].image} 
          alt={project.name} 
          rotation={2} 
          width={500}
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

export const MadeACprBraSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key="pair-1" className="grid grid-cols-3 w-full sm:w-[80%] mx-auto">
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotation={-4} 
          rotateAmount={4} 
          floatAmount={2} 
          floatDuration={3} 
          floatDelay={0.5}
          isMobile={true}
        />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <StaticImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotation={2} 
          isMobile={true}
        />
      </div>
    </div>,

    <div key="pair-2" className="grid grid-cols-3 w-full sm:w-[90%] mx-auto">
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[3].image} 
          alt={project.name} 
          rotation={10} 
          rotateAmount={4} 
          floatAmount={2} 
          floatDuration={3} 
          floatDelay={1.5}
          width={125}
        />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <StaticImage 
          src={project.gallery[4].image} 
          alt={project.name} 
          rotation={-2} 
          isMobile={true}
        />
      </div>
    </div>,

    <div key="pair-3" className="grid grid-cols-3 w-full sm:w-[80%] mx-auto">
      <div className="col-span-1 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[5].image} 
          alt={project.name} 
          rotation={-10} 
          rotateAmount={4} 
          floatAmount={2} 
          floatDuration={3} 
          floatDelay={2.5}
          isMobile={true}
        />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <StaticImage 
          src={project.gallery[6].image} 
          alt={project.name} 
          rotation={2} 
          isMobile={true}
        />
      </div>
    </div>,

    <div key="large-image" className="flex justify-center items-center">
      <Image 
        src={project.gallery[7].image} 
        alt={project.name} 
        width={500} 
        height={300}
        className="rounded-sm"
      />
    </div>,
    ];
};

  