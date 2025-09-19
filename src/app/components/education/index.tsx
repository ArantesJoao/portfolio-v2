"use client"

import { education } from "@/app/constants";
import { ExperienceCard } from "../experience-card";
import { Container } from "../ui/container";

const Education = () => {
  return (
    <Container id="education">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Education</h1>
      <div className="flex flex-col gap-6">
        {education.map((education, index) => (
          <div key={index}>
            <ExperienceCard {...education} imageClassName="scale-200" />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Education;