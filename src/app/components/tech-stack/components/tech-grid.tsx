"use client"

import { TechStackItem } from "@/app/constants"
import { TechStackCard } from "./tech-stack-card"

interface TechGridProps {
  filteredTechStack: TechStackItem[]
}

export const TechGrid = ({ filteredTechStack }: TechGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTechStack.map((tech, index) => (
        <div
          key={`${tech.name}-${index}`}
          className="transform transition-all duration-300"
        >
          <TechStackCard {...tech} />
        </div>
      ))}
    </div>
  )
}
