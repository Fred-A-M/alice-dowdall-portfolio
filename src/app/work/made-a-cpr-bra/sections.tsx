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
      preload="auto"
      poster={project.gallery[0].image}
    >
      <source src={project.gallery[0].mp4} type="video/mp4" />
      <source src={project.gallery[0].webm} type="video/webm" />
    </video>,

    <video 
      key="2" 
      autoPlay 
      loop 
      muted 
      playsInline 
      preload="none" 
      poster={project.gallery[2].image}
      className="w-full"
    >
      <source src={project.gallery[2].mp4} type="video/mp4" />
      <source src={project.gallery[2].webm} type="video/webm" />
    </video>,

    <div key="3" className="grid grid-cols-2 w-full mx-auto">
      <div className="col-span-1 flex justify-end pb-20">
        <Image 
          src={project.gallery[1].image} 
          alt={project.name} 
          width={785}
          height={1466}
          style={{
            width: "400px",
            height: "auto",
          }}
        />
      </div>
      <div className="col-span-1 flex justify-start pt-20">
        <Image 
          src={project.gallery[5].image} 
          alt={project.name}  
          width={785}
          height={1466}
          style={{
            width: "400px",
            height: "auto",
          }}
        />
      </div>
    </div>,

    <div key="4" className="grid grid-cols-2 gap-20">
      <div className="col-span-1 flex justify-center items-center pt-20">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="none" 
        poster={project.gallery[3].image}
        className="w-full"
      >
        <source src={project.gallery[3].mp4} type="video/mp4" />
        <source src={project.gallery[3].webm} type="video/webm" />
      </video>,
      </div>
      <div className="col-span-1 flex justify-center items-center pb-20">
        <Image 
          src={project.gallery[4].image} 
          alt={project.name} 
          width={2160}
          height={2160}
          style={{
            width: "600px",
            height: "auto",
          }}
        />
      </div>
    </div>,

    <video 
      key="5" 
      autoPlay 
      loop 
      muted 
      playsInline 
      preload="none" 
      poster={project.gallery[6].image}
    >
      <source src={project.gallery[6].mp4} type="video/mp4" />
      <source src={project.gallery[6].webm} type="video/webm" />
    </video>,

    <div key="6" className="grid grid-cols-2 gap-20">
      <div className="col-span-1 flex justify-center items-center pb-20">
        <Image 
          src={project.gallery[8].image} 
          alt={project.name} 
          width={1000}
          height={1277}
          style={{
            width: "500px",
            height: "auto",
          }}
        />
      </div>
      <div className="col-span-1 flex justify-center items-center pt-20">
        <Image 
          src={project.gallery[9].image} 
          alt={project.name} 
          width={1000}
          height={1199}
          style={{
            width: "500px",
            height: "auto",
          }}
        />
      </div>
    </div>,

    <Image 
      key="7"
      src={project.gallery[7].image} 
      alt={project.name} 
      width={2160} 
      height={1215}
      style={{
        width: "1200px",
        height: "auto",
      }}
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
          width={785}
          height={1466}
        />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <StaticImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotation={2} 
          width={480}
          height={270}
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
          stylesWidth={150}
          width={356}
          height={356}
        />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <StaticImage 
          src={project.gallery[4].image} 
          alt={project.name} 
          rotation={-2} 
          width={2160}
          height={2160}
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
          width={785}
          height={1466}
        />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <StaticImage 
          src={project.gallery[6].image} 
          alt={project.name} 
          rotation={2} 
          width={405}
          height={270}
        />
      </div>
    </div>,

    <div key="large-image" className="flex justify-center items-center">
      <Image 
        src={project.gallery[7].image} 
        alt={project.name} 
        width={2160} 
        height={1215}
        style={{
          width: "500px",
          height: "auto",
        }}
      />
    </div>,
    ];
};

  