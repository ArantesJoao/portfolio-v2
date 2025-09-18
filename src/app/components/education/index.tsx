"use client"

import { useState } from "react";
import { education } from "@/app/constants";
import { ExperienceCard } from "../experience-card";

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="font-sans max-w-4xl mx-auto px-10 lg:p-0" id="education">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Education</h1>
      <div className="flex flex-col gap-6">
        {education.map((education, index) => (
          <div key={index} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}>
            <ExperienceCard {...education} isDimmed={hoveredCard !== null && hoveredCard !== index} imageClassName="scale-200" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education;