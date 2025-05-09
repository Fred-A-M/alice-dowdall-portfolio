"use client";
import MobileProjectPage from "@/app/work/components/MobileProjectPage";
import { Project, projects, projectsMobile } from "@/app/consts";
import { useEffect, useState } from 'react';
import { MadeACprBraSections, MadeACprBraSectionsMobile } from './sections';
import DesktopProjectPage from '../components/DesktopProjectPage';

export default function MadeACprBra() {
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
    return null;
  }

  if (isMobile === null) {
    return null;
  }

  const project = isMobile ? projectsMobile.find(project => project.name === "The CPR\u00A0Bra") 
  : projects.find(project => project.name === "The CPR\u00A0Bra");

  return (
    <>
      {isMobile ? (
        <MobileProjectPage project={project as Project} sections={MadeACprBraSectionsMobile(project as Project)} />
      ) : (
        <DesktopProjectPage project={project as Project} sections={MadeACprBraSections(project as Project)} />
      )}
    </>
  );
}