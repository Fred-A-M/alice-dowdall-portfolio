import { Project } from "@/app/consts";
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
    <Image 
      src={project.gallery[1].image} 
      alt={project.name} 
      width={1600} 
      height={1066} 
      key="0"
      priority
      loading="eager"
      style={{
        width: '650px',
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
        width: '300px',
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
        width: '200px',
        height: 'auto',
      }}
    />,

   <Image 
      src={project.gallery[3].image} 
      alt={project.name} 
      width={796} 
      height={1570} 
      key="3"
      style={{
        width: '650px',
        height: 'auto',
      }}
      unoptimized={true}
    />,
  ];
};

  