import { Project } from "@/app/consts";
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import Image from "next/image";

// Create a function that takes the project and returns the sections
export const WorldWithoutSoilSections = (project: Project): ReactNode[] => {
  return [
    <video 
      key="0" 
      autoPlay 
      loop 
      muted 
      playsInline 
      preload="none" 
      poster={project.gallery[0].image}
      className="w-[800px] h-[800px]"
    >
      <source src={project.gallery[0].mp4} type="video/mp4" />
      <source src={project.gallery[0].webm} type="video/webm" />
    </video>,
    <Image 
      src={project.gallery[1].image}
      alt={project.name}
      width={1500}
      height={1000}
      style={{
        width: "1100px",
        height: "auto",
      }}
      key="1"
    />,
    <Image 
      src={project.gallery[2].image}
      alt={project.name}
      width={2500}
      height={1667}
      style={{
        width: "1100px",
        height: "auto",
      }}
      key="2"
    />,
    <Image 
      src={project.gallery[3].image}
      alt={project.name}
      width={2500} 
      height={1667} 
      style={{
        width: "1100px",
        height: "auto",
      }}
      key="3"
    />,
  ];
};

export const WorldWithoutSoilSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key="gallery2" className="grid grid-cols-1 mx-auto sm:w-[80%] w-full">
      <div className="flex justify-start items-start">
        <StaticImage 
          src={project.gallery[1].image}
          alt={project.name}
          rotation={-6}
          width={1500}
          height={1000}
        />
      </div>
      <div className="flex justify-end items-end">
        <StaticImage 
          src={project.gallery[2].image}
          alt={project.name}
          rotation={6}
          width={2500}
          height={1667}
        />
      </div>
    </div>,

    <div key="large-image" className="flex justify-center items-center w-full">
      <Image 
        src={project.gallery[3].image} 
        alt={project.name} 
        width={2500} 
        height={1667} 
        style={{
          width: "450px",
          height: "auto",
        }}
      />  
    </div>
  ];
};

  