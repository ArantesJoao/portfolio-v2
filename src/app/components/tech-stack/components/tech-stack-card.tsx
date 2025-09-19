"use client"

import type React from "react"
import Image from "next/image"
import { TechStackItem } from "@/app/constants"
import { DiVisualstudio } from "react-icons/di"
import { FaAws } from "react-icons/fa"
import { VscAzureDevops } from "react-icons/vsc"
import { BiLogoVisualStudio } from "react-icons/bi"
import { TbBrandCSharp } from "react-icons/tb"

type TechStackCardProps = TechStackItem

// Icon configuration mapping
const CUSTOM_ICONS = {
  vscode: { component: BiLogoVisualStudio, color: "text-blue-500" },
  cursor: { component: null, color: null }, // Special case: uses SVG file
  visualstudio: { component: DiVisualstudio, color: "text-purple-600" },
  aws: { component: FaAws, color: "text-orange-500" },
  azure: { component: VscAzureDevops, color: "text-blue-500" },
  "csharp-custom": { component: TbBrandCSharp, color: "text-purple-500" },
  typescript: { component: null, color: null }, // Uses custom ts.svg file
  javascript: { component: null, color: null }, // Uses custom js.svg file
} as const

// Proficiency color mapping
const PROFICIENCY_COLORS = {
  Expert: "bg-green-400",
  Advanced: "bg-blue-400",
  Intermediate: "bg-orange-400",
} as const

// Helper functions
const getProficiencyColor = (proficiency: TechStackItem['proficiency']): string => {
  return PROFICIENCY_COLORS[proficiency] || "bg-gray-400"
}

const renderCustomIcon = (slug: string): React.ReactNode => {
  const iconConfig = CUSTOM_ICONS[slug as keyof typeof CUSTOM_ICONS]

  if (!iconConfig) return null

  // Special cases for SVG files
  if (slug === "cursor") {
    return (
      <div className="w-full h-full">
        <Image
          src="/cursor-ai.svg"
          alt="Cursor"
          fill
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    )
  }

  if (slug === "typescript") {
    return (
      <div className="w-full h-full">
        <Image
          src="/ts.svg"
          alt="TypeScript"
          fill
          className="transition-transform duration-300 group-hover:scale-110 p-0.5 bg-[#3178C6]"
        />
      </div>
    )
  }

  if (slug === "javascript") {
    return (
      <div className="w-full h-full">
        <Image
          src="/js.svg"
          alt="JavaScript"
          fill
          className="transition-transform duration-300 group-hover:scale-110 p-0.5 bg-[#F7DF1E]"
        />
      </div>
    )
  }

  // Regular react-icons components
  const IconComponent = iconConfig.component
  if (!IconComponent) return null

  return <IconComponent className={`w-full h-full ${iconConfig.color}`} />
}

const isCustomIcon = (slug: string): boolean => {
  return Object.keys(CUSTOM_ICONS).includes(slug)
}



export const TechStackCard: React.FC<TechStackCardProps> = ({
  name,
  slug,
  color,
  proficiency,
  className = "bg-white",
  imageClassName = "",
}) => {

  return (
    <div className="group inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 cursor-pointer">
      {/* Tech Icon */}
      <div
        className={`relative w-5 h-5 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ${className}`}
      >
        {isCustomIcon(slug) ? (
          <div className={`w-full h-full ${imageClassName} transition-transform duration-300 group-hover:scale-110`}>
            {renderCustomIcon(slug)}
          </div>
        ) : (
          <Image
            unoptimized
            src={`https://cdn.simpleicons.org/${slug}/${color}`}
            alt={name}
            fill
            className={`${imageClassName} transition-transform duration-300 group-hover:scale-110`}
          />
        )}
      </div>

      {/* Name */}
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
        {name}
      </span>

      {/* Proficiency Dot */}
      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${getProficiencyColor(proficiency)} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
    </div>
  )
}