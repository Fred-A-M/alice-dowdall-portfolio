"use client";
import MobileProjectPage from "@/app/work/components/MobileProjectPage";
import { Project, projects, projectsMobile } from "@/app/consts";
import { useEffect, useState } from 'react';
import { BiteBackSections, BiteBackSectionsMobile } from './sections';
import DesktopProjectPage from '../components/DesktopProjectPage';

export default function BiteBack2030() {
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
  
  const project = isMobile ? projectsMobile.find(project => project.name === "It's Not Your Fault You Can't\u00A0Resist") 
    : projects.find(project => project.name === "It's Not Your Fault You Can't\u00A0Resist");
  
  return (
    <>
      {isMobile ? (
        <MobileProjectPage project={project as Project} sections={BiteBackSectionsMobile(project as Project)} />
      ) : (
        <DesktopProjectPage project={project as Project} sections={BiteBackSections(project as Project)} />
      )}
    </>
  );
}