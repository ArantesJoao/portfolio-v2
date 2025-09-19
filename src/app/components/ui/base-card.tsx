"use client"

import type React from "react"
import { useState, ReactNode } from "react"

interface BaseCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export const BaseCard: React.FC<BaseCardProps> = ({
  children,
  className = "",
  onClick,
  style,
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
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-slate-800/30 backdrop-blur-xl p-6 transition-all duration-700 ease-out lg:hover:scale-[1.02] lg:hover:shadow-2xl lg:hover:shadow-purple-500/10 lg:hover:border-purple-400/30 ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={style}
    >
      {/* Mouse follow gradient effect */}
      <div
        className="absolute w-[400px] h-[400px] pointer-events-none opacity-0 lg:group-hover:opacity-100 transition-opacity duration-1200 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background:
            "radial-gradient(circle, rgba(147,51,234,0.08) 0%, rgba(147,51,234,0.04) 30%, rgba(147,51,234,0.02) 60%, transparent 100%)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(2px)",
        }}
      />

      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-1500 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147,51,234,0.04) 0%, rgba(147,51,234,0.015) 40%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
