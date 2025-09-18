import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

export interface Tech {
  slug: string
  name: string
  color: string
  className?: string
  imageClassName?: string
}

interface TechIconProps {
  techs: Tech[]
}


const TechIcons = ({ techs }: TechIconProps) => {
  return (
    <div className="relative sm:flex gap-3 mb-12 -mt-2 sm:mt-6 sm:mb-9 h-10">
      {techs.map((tech, index) => (
        <Tooltip key={index}>
          <TooltipTrigger>
            <div
              key={index}
              className={`absolute sm:static w-10 h-10 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 hover:border-purple-400/50 lg:hover:!z-10 hover:scale-110 ${tech.className}`}
              style={{
                left: `${index * 24}px`,
                zIndex: techs.length - index
              }}
              title={tech.name}
            >
              <Image unoptimized src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`} alt={tech.name} fill className={tech.imageClassName} />
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-black hidden sm:block">
            {tech.name}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

export default TechIcons