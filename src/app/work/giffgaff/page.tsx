"use client";
import MobileProjectPage from "@/app/work/components/MobileProjectPage";
import { Project, projects, projectsMobile } from "@/app/consts";
import { useEffect, useState } from 'react';
import { GiffGaffSections } from './sections';
import DesktopProjectPage from '../components/DesktopProjectPage';

export default function MadeACprBra() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mobileProject = projectsMobile.find(project => project.name === "Have a Proper Chat");
  const project = projects.find(project => project.name === "Have a Proper Chat");

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
        <MobileProjectPage project={mobileProject as Project} sections={GiffGaffSections(project as Project)} />
      ) : (
        <DesktopProjectPage project={project as Project} sections={GiffGaffSections(project as Project)} />
      )}
    </>
  );
}