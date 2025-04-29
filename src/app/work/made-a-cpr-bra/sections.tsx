import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import Image from "next/image";

export const MadeACprBraSections = (project: Project): ReactNode[] => {
  return [
    <video 
      key="video" 
      autoPlay 
      loop 
      muted 
      playsInline 
      preload="none" 
      poster={project.gallery[11].image}
    >
      <source src={project.gallery[11].mp4} type="video/mp4" />
      <source src={project.gallery[11].webm} type="video/webm" />
    </video>,

    <Image 
      key="2"
      src={project.gallery[2].image}
      alt={project.name}
      width={1200}
      height={1200}
    />,
    <div key="3" className="grid grid-cols-2 w-full mx-auto">
      <div className="col-span-1 flex justify-end pb-20">
        <Image 
          src={project.gallery[1].image} 
          alt={project.name} 
          width={400}
          height={400}
        />
      </div>
      <div className="col-span-1 flex justify-start pt-20">
        <Image 
          src={project.gallery[5].image} 
          alt={project.name}  
          width={400}
          height={400}
        />
      </div>
    </div>,

    <div key="4" className="grid grid-cols-2 gap-20">
      <div className="col-span-1 flex justify-center items-center pt-20">
        <Image 
          src={project.gallery[3].image} 
          alt={project.name} 
          width={600}
          height={600}
        />
      </div>
      <div className="col-span-1 flex justify-center items-center pb-20">
        <Image 
          src={project.gallery[4].image} 
          alt={project.name} 
          width={600}
          height={600}
        />
      </div>
    </div>,

    <Image 
      key="5"
      src={project.gallery[6].image}
      alt={project.name}
      width={1100}
      height={1100}
    />,

    <div key="6" className="grid grid-cols-2 gap-20">
      <div className="col-span-1 flex justify-center items-center pb-20">
        <Image 
          src={project.gallery[8].image} 
          alt={project.name} 
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-1 flex justify-center items-center pt-20">
        <Image 
          src={project.gallery[9].image} 
          alt={project.name} 
          width={500}
          height={500}
        />
      </div>
    </div>,

    <Image 
      key="7"
      src={project.gallery[7].image} 
      alt={project.name} 
      width={1200} 
      height={1200}
    />,
  
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

  