"use client";
import MobileProjectPage from "@/app/work/MobileProjectPage";
import { MobileProject, Project, projects, projectsMobile } from "@/app/consts";
import { useEffect, useState } from 'react';
import { BiteBackSections } from './sections';
import DesktopProjectPage from '../components/DesktopProjectPage';

export default function MadeACprBra() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mobileProject = projectsMobile.find(project => project.name === "It's Not Your Fault You Can't Resist");
  const project = projects.find(project => project.name === "It's Not Your Fault You Can't Resist");

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
        <MobileProjectPage project={mobileProject as MobileProject} />
      ) : (
        <DesktopProjectPage project={project as Project} sections={BiteBackSections(project as Project)} />
      )}
    </>
  );
}