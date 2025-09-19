"use client"

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
}

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group lg:hidden p-2.5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/20"
      aria-label="Toggle menu"
    >
      <div className="w-5 h-5 flex flex-col justify-center items-center">
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-full ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5 group-hover:w-6"
            }`}
        />
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-full my-0.5 ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100 group-hover:w-4"
            }`}
        />
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-full ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5 group-hover:w-6"
            }`}
        />
      </div>
    </button>
  )
}
