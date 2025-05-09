import { Project } from "@/app/consts";
import { ReactNode } from "react";
import Image from "next/image";
export const HowToOiSections = (project: Project): ReactNode[] => {
  return [
    
    <Image
      key="1"
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
    />,

    <Image 
      key="large-image2"
      src={project.gallery[2].image}
      alt={project.name}
      width={2500}
      height={1406}
      style={{
        width: "1200px",
        height: "auto",
      }}
    />,
   
    <Image 
      key="large-image3"
      src={project.gallery[3].image}
      alt={project.name} 
      width={1920}
      height={1080}
      style={{
        width: "1200px",
        height: "auto",
      }}
    />,

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
   
    <Image 
      key="1"
      src={project.gallery[1].image}
      alt={project.name} 
      width={2500}
      height={1406}
      style={{
        width: "650px",
        height: "auto",
      }}
      priority={true}
      loading="eager"
    />,

    <Image 
      key="large-image2"
      src={project.gallery[2].image}
      alt={project.name}
      width={2500}
      height={1406}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,

    <Image 
      key="large-image3"
      src={project.gallery[3].image}
      alt={project.name} 
      width={1920}
      height={1080}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,

    <Image 
      key="large-image4"
      src={project.gallery[4].image}
      alt={project.name} 
      width={576}
      height={324}
      style={{
        width: "650px",
        height: "auto",
      }}
      unoptimized={true}
    />,

    <Image 
      key="large-image5"
      src={project.gallery[0].image}
      alt={project.name} 
      width={1080}
      height={1080}
      style={{
        width: "300px",
        height: "auto",
      }}
      unoptimized={true}
    />,
   
  ];
};

  