"use client"

import type React from "react"
import Image from "next/image"
import { TechStackItem } from "@/app/constants"
import { BaseCard } from "@/app/components/ui/base-card"

interface TechStackCardProps extends TechStackItem { }

export const TechStackCard: React.FC<TechStackCardProps> = ({
  name,
  slug,
  color,
  description,
  category,
  proficiency,
  className = "bg-white",
  imageClassName = "",
}) => {

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Expert":
        return "bg-green-500/20 text-green-200 border-green-400/30 hover:bg-green-500/30"
      case "Advanced":
        return "bg-blue-500/20 text-blue-200 border-blue-400/30 hover:bg-blue-500/30"
      case "Intermediate":
        return "bg-orange-500/20 text-orange-200 border-orange-400/30 hover:bg-orange-500/30"
      default:
        return "bg-gray-500/20 text-gray-200 border-gray-400/30 hover:bg-gray-500/30"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-purple-500/20 text-purple-200 border-purple-400/30"
      case "Backend":
        return "bg-emerald-500/20 text-emerald-200 border-emerald-400/30"
      case "Database":
        return "bg-cyan-500/20 text-cyan-200 border-cyan-400/30"
      case "Tools":
        return "bg-yellow-500/20 text-yellow-200 border-yellow-400/30"
      case "Cloud":
        return "bg-indigo-500/20 text-indigo-200 border-indigo-400/30"
      default:
        return "bg-gray-500/20 text-gray-200 border-gray-400/30"
    }
  }

  return (
    <BaseCard className="h-full cursor-pointer">
      {/* Tech Icon and Name */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`relative w-14 h-14 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-purple-400/40 group-hover:shadow-lg group-hover:shadow-purple-500/20 ${className}`}
        >
          <Image
            unoptimized
            src={`https://cdn.simpleicons.org/${slug}/${color}`}
            alt={name}
            fill
            className={`${imageClassName} transition-transform duration-500 group-hover:scale-110`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white mb-1 transition-colors duration-500">
            {name}
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm transition-all duration-500 border ${getCategoryColor(category)}`}>
              {category}
            </span>
            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm transition-all duration-500 border ${getProficiencyColor(proficiency)}`}>
              {proficiency}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed text-pretty transition-colors duration-500 group-hover:text-gray-200">
        {description}
      </p>
    </BaseCard>
  )
}
