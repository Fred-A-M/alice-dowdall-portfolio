"use client";

import Eyes from "./Eyes";
import ProjectsScattered from './ProjectsScattered';

// import ProjectsMap from "./ProjectsMap";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="relative w-[80%] h-[600px] flex items-center justify-center">
        {/* <ProjectsMap /> */}
        <ProjectsScattered />
        <div className="absolute left-1/2 hidden md:block" 
          style={{
            transform: 'translateX(-50%)',
          }}
        >
          <Eyes />
        </div>
      </div>
    </div>
  );
}
