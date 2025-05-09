import { Project } from "@/app/consts";
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
    <Image 
      key="0"
      src={project.gallery[0].image}
      alt={project.name}
      width={356}
      height={356}
      style={{
        width: "300px",
        height: "auto",
      }}
      priority={true}
      loading="eager"
      unoptimized={true}
    />,
    
    <Image 
      src={project.gallery[1].image}
      alt={project.name}
      width={1500}
      height={1000}
      style={{
        width: "650px",
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
        width: "650px",
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
        width: "650px",
        height: "auto",
      }}
      key="3"
    />,
  ];
};

  