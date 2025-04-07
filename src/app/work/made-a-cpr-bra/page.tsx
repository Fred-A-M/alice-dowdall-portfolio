"use client";
import ProjectPage from "@/app/work/ProjectPage";
import { Project, projectsMobile } from "@/app/consts";
import { useState } from 'react';
import { useEffect } from 'react';
import MobileProjectPage from "@/app/work/MobileProjectPage";

export default function MadeACprBra() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const project = projectsMobile.find(project => project.name === "The CPR Bra");

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