"use client";
import Image from "next/image";
import { Project } from "@/app/consts";

interface ProjectPageProps {
  project: Project | undefined;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-10 gap-10">
      <Image 
        src={project.image} 
        alt={project.name} 
        width={800} 
        height={800} 
        className="rounded-lg"
      />
      <div className="flex flex-col items-center justify-center gap-2 w-[900px]">
        {project.description.map((description, index) => (
          <p key={index} className="text-center quicksand text-lg">{description}</p>
        ))}
      </div>
    </div>
  );
}