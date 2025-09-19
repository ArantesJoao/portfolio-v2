"use client"

import { useEffect, useState } from "react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ id: string; label: string; fullLabel: string }>
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export const MobileMenu = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
  onNavigate
}: MobileMenuProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId)
    onClose()
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <>
      {/* Backdrop with smooth fade */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-md z-40 lg:hidden transition-all duration-500 ease-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Menu with slide animation */}
      <div
        className={`fixed top-6 right-4 w-80 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl z-50 lg:hidden transition-all duration-700 ease-out shadow-2xl shadow-purple-500/10 ${isOpen ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95 pointer-events-none"
          }`}
        onMouseMove={handleMouseMove}
      >
        {/* Mouse follow gradient effect */}
        <div
          className="absolute w-[300px] h-[300px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1200 ease-out"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            background:
              "radial-gradient(circle, rgba(147,51,234,0.06) 0%, rgba(147,51,234,0.03) 30%, rgba(147,51,234,0.015) 60%, transparent 100%)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(2px)",
          }}
        />

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 rounded-2xl" />

        <div className="relative p-6">
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <button
              onClick={onClose}
              className="group p-2 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20"
            >
              <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation items with staggered animation */}
          <nav className="space-y-3">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`
                  group relative w-full text-left px-5 py-4 rounded-xl font-medium transition-all duration-500 ease-out overflow-hidden border backdrop-blur-sm
                  ${isOpen ? `animate-slide-in-delay-${index}` : ""}
                  ${activeSection === item.id
                    ? "bg-purple-500/20 text-purple-100 border-purple-400/40 shadow-lg shadow-purple-500/20 hover:bg-purple-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/10 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
                  }
                `}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>

                <span className="relative z-10 flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id ? "bg-purple-400 shadow-lg shadow-purple-400/50" : "bg-gray-500 group-hover:bg-white"
                    }`} />
                  {item.fullLabel}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
