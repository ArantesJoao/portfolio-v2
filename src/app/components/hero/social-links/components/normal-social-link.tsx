"use client"

import { useState } from "react"
import SocialIcon from "./social-icons"

interface NormalSocialLinkProps {
  href: string
  label: string
  icon: "linkedin" | "github"
}

const NormalSocialLink = ({ href, icon, label }: NormalSocialLinkProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative backdrop-blur-md bg-slate-800/40 border border-white/20 rounded-full 
        p-3 sm:p-4 shadow-lg
        transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-slate-700/50 hover:border-white/30 cursor-pointer
        group
        animate-glow-pulse hover:animate-none
        ${isHovered ? "transform scale-[1.02] bg-slate-700/50 border-white/30" : ""}
      `}
      aria-label={label}
    >
      {/* External glow that intensifies on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-purple-400/30 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className={`
        relative transition-all duration-300 w-5 h-5 sm:w-6 sm:h-6 z-10 flex items-center justify-center
        ${isHovered ? "text-white" : "text-gray-300 group-hover:text-white"}
      `}>
        <SocialIcon type={icon} />
      </div>
    </button>
  )
}

export default NormalSocialLink
