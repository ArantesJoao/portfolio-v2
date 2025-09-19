"use client"

import { TechStackItem } from "@/app/constants"
import { TechStackCard } from "./tech-stack-card"

interface TechGridProps {
  filteredTechStack: TechStackItem[]
}

export const TechGrid = ({ filteredTechStack }: TechGridProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filteredTechStack.map((tech, index) => (
        <TechStackCard key={`${tech.name}-${index}`} {...tech} />
      ))}
    </div>
  )
}
