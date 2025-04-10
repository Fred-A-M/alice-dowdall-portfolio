"use client";
// import MobileProjectPage from "@/app/work/MobileProjectPage";
// import { MobileProject, Project, projects, projectsMobile } from "@/app/consts";
import { Project, projects, } from "@/app/consts";
import { useEffect, useState } from 'react';
import DesktopProjectPage from '../components/DesktopProjectPage';
import { SmallTalkSections } from './sections';

export default function MadeACprBra() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  // const mobileProject = projectsMobile.find(project => project.name === "Small Talk");
  const project = projects.find(project => project.name === "Small Talk");

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
        <DesktopProjectPage project={project as Project} sections={SmallTalkSections(project as Project)} />
      ) : (
        <DesktopProjectPage project={project as Project} sections={SmallTalkSections(project as Project)} />
      )}
    </>
  );
}