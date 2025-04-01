"use client";

import Eyes from "./Eyes";
import ProjectsMap from "./ProjectsMap";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-[80%] h-[600px] flex items-center justify-center">
        <ProjectsMap />
        
        <div className="absolute left-1/2" 
          style={{
            top: 'calc(80% + 0px)',
            transform: 'translateX(-50%)',
          }}
        >
          <Eyes />
        </div>
      </div>
    </div>
  );
}
