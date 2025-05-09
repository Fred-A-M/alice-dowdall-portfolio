"use client";
import MobileProjectPage from "@/app/work/components/MobileProjectPage";
import { Project, projects, projectsMobile } from "@/app/consts";
import { useEffect, useState } from 'react';
import { HowToOiSections, HowToOiSectionsMobile } from './sections';
import DesktopProjectPage from '../components/DesktopProjectPage';

export default function HowToOi() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  const project = isMobile ? projectsMobile.find(project => project.name === "Oi! Observe and\u00A0Intervene") 
    : projects.find(project => project.name === "Oi! Observe and\u00A0Intervene");
  
  return (
    <>
      {isMobile ? (
        <MobileProjectPage project={project as Project} sections={HowToOiSectionsMobile(project as Project)} />
      ) : (
        <DesktopProjectPage project={project as Project} sections={HowToOiSections(project as Project)} />
      )}
    </>
  );
}