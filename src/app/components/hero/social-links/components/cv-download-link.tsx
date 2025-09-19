"use client"

import { useState } from "react"
import SocialIcon from "./social-icons"

interface CVDownloadLinkProps {
  href: string
  label: string
  text: string
}

const CVDownloadLink = ({ href, label, text }: CVDownloadLinkProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    // Create a temporary link to download the CV
    const link = document.createElement('a')
    link.href = href
    link.download = 'Joao_Victor_Arantes_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative backdrop-blur-md bg-slate-800/40 border border-white/20 rounded-full 
        px-4 py-4 sm:px-4 sm:py-4.5 shadow-lg
        transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-slate-700/50 hover:border-white/30 cursor-pointer
        group flex items-center gap-2 sm:gap-3
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
        relative transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5 z-10 flex items-center justify-center
        ${isHovered ? "text-white" : "text-gray-300 group-hover:text-white"}
      `}>
        <SocialIcon type="download" />
      </div>

      <span className={`
        relative text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap z-10
        ${isHovered ? "text-white font-semibold" : "text-gray-300 group-hover:text-white group-hover:font-semibold"}
      `}>
        {text}
      </span>
    </button>
  )
}

export default CVDownloadLink
