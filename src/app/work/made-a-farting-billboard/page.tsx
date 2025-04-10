"use client";
import MobileProjectPage from "@/app/work/components/MobileProjectPage";
import { Project, projects, projectsMobile } from "@/app/consts";
import { useEffect, useState } from 'react';
import DesktopProjectPage from '../components/DesktopProjectPage';
import { MadeAFartingBillboardSections } from './sections';

export default function MadeACprBra() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mobileProject = projectsMobile.find(project => project.name === "Farting Billboard");
  const project = projects.find(project => project.name === "Farting Billboard");

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
        <MobileProjectPage project={mobileProject as Project} sections={MadeAFartingBillboardSections(project as Project)} />
      ) : (
        <DesktopProjectPage project={project as Project} sections={MadeAFartingBillboardSections(project as Project)} />
      )}
    </>
  );
}