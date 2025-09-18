"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import ProjectInfo from "./project-info"
import ActionButtons from "./action-buttons"
import TechIcons, { Tech } from "./tech-icons"

export interface ProjectCardProps {
  title: string
  description: string
  image?: string
  techs?: Tech[]
  githubUrl?: string
  liveDemoUrl?: string
  isDimmed?: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techs = [],
  githubUrl,
  liveDemoUrl,
  isDimmed = false,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-slate-800/30 backdrop-blur-xl p-6 transition-all duration-700 ease-out lg:hover:scale-[1.02] lg:hover:shadow-2xl lg:hover:shadow-purple-500/10 lg:hover:border-purple-400/30 cursor-pointer ${isDimmed ? "opacity-60" : "opacity-100"
        }`}
      onMouseMove={handleMouseMove}
      onClick={() => {
        if (githubUrl) {
          window.open(githubUrl, "_blank")
        }
      }}
    >
      <div
        className="absolute pointer-events-none opacity-0 lg:group-hover:opacity-100 transition-opacity duration-1200 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(147,51,234,0.08) 0%, rgba(147,51,234,0.04) 30%, rgba(147,51,234,0.02) 60%, transparent 100%)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(2px)",
        }}
      />

      <div
        className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-1500 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147,51,234,0.04) 0%, rgba(147,51,234,0.015) 40%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {image && (
          <div className="mb-6 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:border-purple-400/30 h-40 sm:h-64 md:h-80 lg:h-92 w-full">
            <Image
              fill
              src={image}
              alt={`${title} preview`}
              className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}

        <ProjectInfo title={title} description={description} />

        {techs.length > 0 && (
          <TechIcons techs={techs} />
        )}

        <ActionButtons githubUrl={githubUrl} liveDemoUrl={liveDemoUrl} />
      </div>
    </div>
  )
}
