import { Project } from "@/app/consts";
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import Image from "next/image";
export const HowToOiSections = (project: Project): ReactNode[] => {
  return [
    <div key="large-image">
      <Image 
        src={project.gallery[1].image}
        alt={project.name} 
        width={1200}
        height={1000}
        className="shadow-xl shadow-black/30"
      />
    </div>,

    <div key="large-image2">
      <Image 
        src={project.gallery[2].image}
        alt={project.name}
        width={1200}
        height={1000}
        className="shadow-xl shadow-black/30"
      />
    </div>,

    <div key="large-image3">
      <Image 
        src={project.gallery[3].image}
        alt={project.name} 
        width={1200}
        height={1000}
        className="shadow-xl shadow-black/30"
      />
    </div>,

    <div key="large-image4">
      <Image 
        src={project.gallery[4].image}
        alt={project.name} 
        width={1200}
        height={1000}
        className="shadow-xl shadow-black/30"
      />
    </div>,
    <div key="0">
      <Image 
        src={project.gallery[0].image}
        alt={project.name} 
        width={700}
        height={700}
        className="shadow-xl shadow-black/30"
      />
    </div>,
  ];
};

export const HowToOiSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key="large-image" className="flex justify-center items-center w-full">
      <StaticImage 
        src={project.gallery[1].image}
        alt={project.name} 
        rotation={-3}
        width={350}
      />
    </div>,

    <div key="large-image2" className="flex justify-center items-center w-full">
      <StaticImage 
        src={project.gallery[2].image}
        alt={project.name}
        rotation={3}
        width={350}
      />
    </div>,

    <div key="large-image3" className="flex justify-center items-center w-full">
      <StaticImage 
        src={project.gallery[3].image}
        alt={project.name} 
        rotation={-4}
        width={350}
      />
    </div>,

    <div key="large-image4" className="flex justify-center items-center w-full">
      <StaticImage 
        src={project.gallery[4].image}
        alt={project.name} 
        rotation={2}
        width={350}
      />
    </div>
  ];
};

  