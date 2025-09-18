"use client"

import { useState } from "react";
import { projects } from "@/app/constants";
import { ProjectCard } from "./components/project-card";

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="font-sans max-w-4xl mx-auto px-10 lg:p-0" id="projects">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Projects</h1>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div key={index} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}>
            <ProjectCard {...project} isDimmed={hoveredCard !== null && hoveredCard !== index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;