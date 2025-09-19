"use client"

import type React from "react"
import Image from "next/image"
import ProjectInfo from "./project-info"
import ActionButtons from "./action-buttons"
import TechIcons, { Tech } from "./tech-icons"
import { BaseCard } from "@/app/components/ui/base-card"

export interface ProjectCardProps {
  title: string
  description: string
  image?: string
  techs?: Tech[]
  githubUrl?: string
  liveDemoUrl?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techs = [],
  githubUrl,
  liveDemoUrl,
}) => {

  return (
    <BaseCard
      className="cursor-pointer"
      onClick={() => {
        if (githubUrl) {
          window.open(githubUrl, "_blank")
        }
      }}
    >
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
    </BaseCard>
  )
}
