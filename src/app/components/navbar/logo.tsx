import Image from "next/image"

interface LogoProps {
  isHovered: boolean
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const Logo = ({ isHovered, onClick, onMouseEnter, onMouseLeave }: LogoProps) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        relative flex items-center justify-center w-8 h-8 mr-4 md:mr-7 sm:w-10 sm:h-10 rounded-full transition-all duration-500 ease-out
        bg-gradient-to-br cursor-pointer from-purple-500/20 to-purple-600/20 border border-purple-400/30
        ${isHovered ? "transform scale-110 shadow-lg shadow-purple-500/25" : ""}
      `}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 z-10 bg-[#262626] rounded-full transition-all duration-300">
        <Image src="/ja-logo.svg" alt="Logo" fill className="p-1.5 sm:p-2" />
      </div>

      {/* Hover glow effect */}
      <div className={`
        absolute inset-0 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-full 
        transition-all duration-300 
        ${isHovered ? "opacity-100 animate-pulse" : "opacity-0"}
      `} />
    </button>
  )
}

export default Logo
