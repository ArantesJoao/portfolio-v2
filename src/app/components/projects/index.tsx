"use client"

import { projects } from "@/app/constants";
import { ProjectCard } from "./components/project-card";
import { Container } from "../ui/container";

const Projects = () => {
  return (
    <Container id="projects">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Projects</h1>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Projects;