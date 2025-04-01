"use client";
import Image from "next/image";
import { Project } from "@/app/consts";
import ImageCarousel from './components/ImageCarousel';

interface ProjectPageProps {
  project: Project | undefined;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col items-center radio-canada-big justify-center w-full h-full mt-10 gap-10">
      <Image 
        src={project.image} 
        alt={project.name} 
        width={800} 
        height={800} 
        className="rounded-lg"
      />
      <div className="flex flex-col gap-4 w-[900px]">
        <div className="flex flex-col gap-2 text-4xl radio-canada-big justify-center items-center">
          <p className="">{project.client}</p>
          <p>{project.name}</p>
        </div>
        <div className="flex flex-col gap-2">
          {project.description.map((description, index) => (
            <p key={index} className="text-center text-lg">{description}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <ImageCarousel images={project.gallery} />
        </div>
      </div>
    </div>
  );
}