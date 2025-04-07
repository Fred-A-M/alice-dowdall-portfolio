"use client";
import ProjectPage from "@/app/work/ProjectPage";
import { Project, projectsMobile } from "@/app/consts";
import { useEffect } from 'react';
import { useState } from 'react';
import MobileProjectPage from '../MobileProjectPage';

export default function BiteBack2030() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const project = projectsMobile.find(project => project.name === "Unboxing: 1930");

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[700px]"></div>;
  }
  return (
    <>
      {isMobile ? (
        <MobileProjectPage project={project as Project} />
      ) : (
        <ProjectPage project={project as Project} />
      )}
    </>
  );
}