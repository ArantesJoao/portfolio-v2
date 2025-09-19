"use client"

import Image from "next/image"
import type React from "react"
import { BaseCard } from "@/app/components/ui/base-card"

interface ExperienceCardProps {
  company: string
  role: string
  duration: string
  description: string
  logo?: string
  technologies?: string[]
  imageClassName?: string
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  duration,
  description,
  logo,
  technologies = [],
  imageClassName,
}) => {

  return (
    <BaseCard className="h-full">
      <div className="flex items-start gap-4 mb-4">
        {logo && (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/20 transition-all duration-500 group-hover:border-purple-400/30 group-hover:bg-purple-500/10">
            <Image
              fill
              alt={`${company} logo`}
              src={logo || "/placeholder.svg"}
              className={`w-8 h-8 object-contain ${imageClassName}`}
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg mb-1 lg:mb-0 leading-tight font-semibold text-white text-balance transition-colors duration-500">
            {role}
          </h3>
          <p className="text-sm font-medium text-gray-300 transition-colors duration-500">
            {company}
          </p>
          <p className="text-xs text-gray-400 mt-1 transition-colors duration-500">
            {duration}
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-200 leading-relaxed mb-4 text-pretty transition-colors duration-500">
        {description}
      </p>

      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/20 text-purple-200 backdrop-blur-sm transition-all duration-500 hover:bg-purple-500/30 hover:text-purple-100 border border-purple-400/30 hover:border-purple-300/50"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </BaseCard>
  )
}
