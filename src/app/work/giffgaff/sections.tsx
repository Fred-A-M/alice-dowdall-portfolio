import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import Image from 'next/image';
// Create a function that takes the project and returns the sections
export const GiffGaffSections = (project: Project): ReactNode[] => {
  return [
    <Image 
      key="0"
      src={project.gallery[0].image}
      alt={project.name}
      width={1080}
      height={1080}
      style={{
        width: "750px",
        height: "auto",
      }}
      priority={true}
      loading="eager"
    />,
    <div key="1" className="grid grid-cols-2 items-center gap-10 w-full mx-auto"> 
      <div className="flex justify-center">
        <iframe
          src={project.video}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-[400px] h-[400px] rounded-sm"
        />
      </div>
      <div className="flex justify-center">
        <Image 
          src={project.gallery[1].image} 
          alt={project.name} 
          width={560}
          height={1105}
          style={{
            width: "300px",
            height: "auto",
          }}
        />
      </div>
    </div>,

    <div key="2" className="grid grid-cols-2 gap-20 w-full mx-auto">
      <div className="flex justify-end col-span-1 pt-20">
        <Image 
          src={project.gallery[2].image} 
          alt={project.name} 
          width={558}
          height={1107}
          style={{
            width: "300px",
            height: "auto",
          }}
        />
      </div>
      <div className="flex justify-start pb-20 col-span-1 ">
        <Image 
          src={project.gallery[5].image} 
          alt={project.name} 
          width={559}
          height={1109}
          style={{
            width: "300px",
            height: "auto",
          }}
        />
      </div>
    </div>,

    <Image 
      key="2.5"
      src={project.gallery[3].image} 
      alt={project.name} 
      width={604}
      height={425}
      style={{
        width: "600px",
        height: "auto",
      }}
    />,

    <Image 
      key="3"
      src={project.gallery[4].image} 
      alt={project.name} 
      width={750}
      height={750}
      style={{
        width: "700px",
        height: "auto",
      }}
    />
  ];
};

export const GiffGaffSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key="videoandimage" className="grid grid-cols-2 items-center w-full sm:w-[80%] mx-auto"> 
      <div className="flex justify-center">
        <iframe
          src={project.video}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-[200px] h-[200px] rounded-sm"
        />
      </div>
      <div className="flex justify-center">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          floatDelay={0.5}
          width={560}
          height={1105}
        />
      </div>
    </div>,

    <div key="gallery" className="grid grid-cols-3 sm:w-[70%] w-full mx-auto">
      <div className="flex col-span-1 justify-start items-center">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          floatDelay={1.5}
          width={558}
          height={1107}
          stylesWidth={170}
        />
      </div>
      <div className="flex flex-col col-span-2 gap-4">
        <div className="self-end pr-5">
          <StaticImage 
            src={project.gallery[3].image} 
            alt={project.name} 
            rotation={2}
            width={604}
            height={425}
            stylesWidth={150}
          />
        </div>
        <div className="self-start pl-10">
          <StaticImage 
            src={project.gallery[4].image} 
            alt={project.name} 
            rotation={-2}
            width={750}
            height={750}
            stylesWidth={150}
          />
        </div>
      </div>
    </div>
  ];
};

  