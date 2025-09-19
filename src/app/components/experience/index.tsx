"use client"

import { experiences } from "@/app/constants";
import { ExperienceCard } from "../experience-card";
import { Container } from "../ui/container";

const Experience = () => {
  return (
    <Container id="experience">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Experience</h1>
      <div className="flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <div key={index}>
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Experience;