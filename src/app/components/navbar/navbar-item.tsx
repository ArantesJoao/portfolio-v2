import { forwardRef } from "react"

interface NavbarItemProps {
  id: string
  label: string
  fullLabel?: string
  isActive: boolean
  isHovered: boolean
  onClick: (id: string) => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const NavbarItem = forwardRef<HTMLButtonElement, NavbarItemProps>(
  ({ id, label, fullLabel, isActive, isHovered, onClick, onMouseEnter, onMouseLeave }, ref) => {
    return (
      <button
        ref={ref}
        onClick={() => onClick(id)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`
          relative cursor-pointer px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-500 ease-out rounded-full z-10
          ${isActive
            ? "text-white font-semibold"
            : "text-gray-300 hover:text-white"
          }
          ${isHovered && !isActive
            ? "text-white transform scale-105 bg-white/5"
            : ""
          }
        `}
      >
        <span className="relative z-10 transition-all duration-300 whitespace-nowrap">
          <span className="sm:hidden">{label}</span>
          <span className="hidden sm:inline">{fullLabel || label}</span>
        </span>
      </button>
    )
  }
)

NavbarItem.displayName = "NavbarItem"

export default NavbarItem
