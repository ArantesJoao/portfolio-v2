"use client"

import { useState } from "react"
import Logo from "./logo"
import NavbarItem from "./navbar-item"
import AnimatedIndicator from "./animated-indicator"
import { HamburgerButton } from "./hamburger-button"
import { MobileMenu } from "./mobile-menu"
import { useActiveSection } from "./hooks/use-active-section"
import { useIndicatorPosition } from "./hooks/use-indicator-position"

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "top", label: "About", fullLabel: "About Me" },
    { id: "experience", label: "Work", fullLabel: "Experience" },
    { id: "education", label: "Education", fullLabel: "Education" },
    { id: "tech-stack", label: "Stack", fullLabel: "Tech Stack" },
    { id: "projects", label: "Projects", fullLabel: "Projects" },
  ]

  const activeSection = useActiveSection(navItems)
  const { indicatorStyle, navItemsRef } = useIndicatorPosition(activeSection)

  const scrollToSection = (sectionId: string) => {
    // Ensure this only runs on the client side
    if (typeof window === 'undefined') return

    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.offsetTop

      const getResponsiveOffset = () => {
        const width = window.innerWidth
        if (width < 640) return 100
        return 120
      }

      const offsetPosition = elementPosition - getResponsiveOffset()

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <nav className={`fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-auto px-4 lg:px-0 transition-transform duration-1200 ease-out ${isMobileMenuOpen ? '-translate-y-32' : 'translate-y-0'}`}>
        <div className="relative backdrop-blur-md bg-slate-800/30 border border-white/10 rounded-full px-4 lg:px-6 py-2.5 lg:py-3 shadow-2xl">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 rounded-full" />

          <div className="relative flex items-center gap-3 lg:gap-0 lg:justify-start lg:space-x-8">
            <Logo
              isHovered={hoveredItem === "logo"}
              onClick={() => scrollToSection("top")}
              onMouseEnter={() => setHoveredItem("logo")}
              onMouseLeave={() => setHoveredItem(null)}
            />

            {/* Mobile hamburger button */}
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />

            {/* Desktop navigation - hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Desktop separator */}
              <div className="w-px h-6 bg-white/10" />

              <div className="relative flex items-center space-x-8">
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
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
    </>
  )
}
