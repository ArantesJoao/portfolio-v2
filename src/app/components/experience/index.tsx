"use client"

import { useState } from "react";
import { experiences } from "@/app/constants";
import { ExperienceCard } from "../experience-card";

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="font-sans max-w-4xl mx-auto px-10 lg:p-0" id="experience">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Experience</h1>
      <div className="flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <div key={index} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}>
            <ExperienceCard {...experience} isDimmed={hoveredCard !== null && hoveredCard !== index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;