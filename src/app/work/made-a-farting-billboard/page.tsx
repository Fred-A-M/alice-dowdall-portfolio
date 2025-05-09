"use client";
import MobileProjectPage from "@/app/work/components/MobileProjectPage";
import { Project, projects, projectsMobile } from "@/app/consts";
import { useEffect, useState } from 'react';
import DesktopProjectPage from '../components/DesktopProjectPage';
import {  FartingBillboardSections, FartingBillboardSectionsMobile } from './sections';

export default function FartingBillboard() {
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

  const project = isMobile ? projectsMobile.find(project => project.name === "Farting\u00A0Billboard") 
  : projects.find(project => project.name === "Farting\u00A0Billboard");

  return (
    <>
      {isMobile ? (
        <MobileProjectPage project={project as Project} sections={FartingBillboardSectionsMobile(project as Project)} />
      ) : (
        <DesktopProjectPage project={project as Project} sections={FartingBillboardSections(project as Project)} />
      )}
    </>
  );
}