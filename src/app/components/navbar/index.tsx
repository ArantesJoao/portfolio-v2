"use client"

import { useState } from "react"
import Logo from "./logo"
import NavbarItem from "./navbar-item"
import AnimatedIndicator from "./animated-indicator"
import { useActiveSection } from "./hooks/use-active-section"
import { useIndicatorPosition } from "./hooks/use-indicator-position"

interface NavbarProps {
  activeSection?: string
}

export default function Navbar({ activeSection: propActiveSection }: NavbarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const navItems = [
    { id: "top", label: "About", fullLabel: "About Me" },
    { id: "experience", label: "Work", fullLabel: "Experience" },
    { id: "education", label: "Education", fullLabel: "Education" },
    { id: "projects", label: "Projects", fullLabel: "Projects" },
  ]

  const activeSection = useActiveSection(navItems)
  const { indicatorStyle, navItemsRef } = useIndicatorPosition(activeSection)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - 120

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm  sm:max-w-none sm:w-auto px-4 sm:px-0">
      <div className="relative backdrop-blur-md bg-slate-800/30 border border-white/10 rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-2xl">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 rounded-full" />

        <div className="relative flex items-center justify-center sm:justify-start sm:space-x-8">
          <Logo
            isHovered={hoveredItem === "logo"}
            onClick={() => scrollToSection("top")}
            onMouseEnter={() => setHoveredItem("logo")}
            onMouseLeave={() => setHoveredItem(null)}
          />

          {/* Desktop separator - hidden on mobile */}
          <div className="hidden sm:block w-px h-6 bg-white/10" />

          <div className="relative flex items-center space-x-2 sm:space-x-8">
            <AnimatedIndicator
              left={indicatorStyle.left}
              width={indicatorStyle.width}
            />

            {navItems.map((item) => (
              <NavbarItem
                key={item.id}
                ref={(el) => {
                  navItemsRef.current[item.id] = el
                }}
                id={item.id}
                label={item.label}
                fullLabel={item.fullLabel}
                isActive={activeSection === item.id}
                isHovered={hoveredItem === item.id}
                onClick={scrollToSection}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
