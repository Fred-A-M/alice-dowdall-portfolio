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
        width={2500}
        height={1406}
        style={{
          width: "1200px",
          height: "auto",
        }}
        priority={true}
        loading="eager"
      />
    </div>,

    <div key="large-image2">
      <Image 
        src={project.gallery[2].image}
        alt={project.name}
        width={2500}
        height={1406}
        style={{
          width: "1200px",
          height: "auto",
        }}
      />
    </div>,

    <div key="large-image3">
      <Image 
        src={project.gallery[3].image}
        alt={project.name} 
        width={1920}
        height={1080}
        style={{
          width: "1200px",
          height: "auto",
        }}
      />
    </div>,

    <video 
      key="video" 
      autoPlay 
      loop 
      muted 
      playsInline 
      preload="none" 
      poster={project.gallery[4].image}
    >
      <source src={project.gallery[4].mp4} type="video/mp4" />
      <source src={project.gallery[4].webm} type="video/webm" />
    </video>,
    <div key="0">
      <Image 
        src={project.gallery[0].image}
        alt={project.name} 
        width={1080}
        height={1080}
        style={{
          width: "700px",
          height: "auto",
        }}
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
        width={2500}
        height={1406}
        stylesWidth={350}
      />
    </div>,

    <div key="large-image2" className="flex justify-center items-center w-full">
      <StaticImage 
        src={project.gallery[2].image}
        alt={project.name}
        rotation={3}
        width={2500}
        height={1406}
        stylesWidth={350}
      />
    </div>,

    <div key="large-image3" className="flex justify-center items-center w-full">
      <StaticImage 
        src={project.gallery[3].image}
        alt={project.name} 
        rotation={-4}
        width={1920}
        height={1080}
        stylesWidth={350}
      />
    </div>,

    <div key="large-image4" className="flex justify-center items-center w-full">
      <StaticImage 
        src={project.gallery[4].image}
        alt={project.name} 
        rotation={2}
        width={576}
        height={324}
        stylesWidth={350}
      />
    </div>
  ];
};

  