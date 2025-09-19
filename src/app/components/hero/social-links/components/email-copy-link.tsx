"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import SocialIcon from "./social-icons"

interface EmailCopyLinkProps {
  href: string
  label: string
}

const EmailCopyLink = ({ href, label }: EmailCopyLinkProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(href.replace('mailto:', ''))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
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
        ${copied ? "scale-[1.05] border-green-400/50 bg-green-900/20" : ""}
      `}
      aria-label={label}
    >
      {/* External glow that intensifies on hover */}
      <div className={`absolute -inset-1 rounded-full transition-all duration-500 blur-md ${copied
        ? "bg-gradient-to-r from-green-500/25 via-green-400/30 to-green-500/25 opacity-100 animate-[pulse_1.5s_ease-in-out_1]"
        : "bg-gradient-to-r from-purple-500/20 via-purple-400/30 to-purple-500/20 opacity-0 group-hover:opacity-100"
        }`} />

      {/* Subtle background glow */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${copied
        ? "bg-gradient-to-r from-green-500/8 via-transparent to-green-500/8 opacity-100"
        : "bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100"
        }`} />

      <div className={`
        relative transition-all duration-300 w-5 h-5 sm:w-6 sm:h-6 z-10 flex items-center justify-center
        ${isHovered ? "text-white" : "text-gray-300 group-hover:text-white"}
      `}>
        {copied ? (
          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 animate-in zoom-in-75 duration-300" />
        ) : (
          <div className={`transition-transform duration-200 ${copied ? 'scale-0' : 'scale-100'}`}>
            <SocialIcon type="email" />
          </div>
        )}
      </div>

      {/* Copied message */}
      {copied && (
        <div className="absolute top-14 md:top-16 lg:top-18 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-slate-800/90 backdrop-blur-sm border border-green-400/30 rounded-lg px-3 py-1.5 animate-in slide-in-from-top-2 duration-300">
            <span className="text-xs text-green-300 font-medium whitespace-nowrap">
              E-mail copied to clipboard
            </span>
          </div>
        </div>
      )}
    </button>
  )
}

export default EmailCopyLink
