"use client";
import MobileProjectPage from "@/app/work/components/MobileProjectPage";
import { Project, projects, projectsMobile } from "@/app/consts";
import { useEffect, useState } from 'react';
import { WaterAidSections, WaterAidSectionsMobile } from './sections';
import DesktopProjectPage from '../components/DesktopProjectPage';

export default function WaterAid() {
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

  const project = isMobile ? projectsMobile.find(project => project.name === "There's No Rainbow Without Water") 
  : projects.find(project => project.name === "There's No Rainbow Without Water");

  return (
    <>
      {isMobile ? (
        <MobileProjectPage project={project as Project} sections={WaterAidSectionsMobile(project as Project)} />
      ) : (
        <DesktopProjectPage project={project as Project} sections={WaterAidSections(project as Project)} />
      )}
    </>
  );
}