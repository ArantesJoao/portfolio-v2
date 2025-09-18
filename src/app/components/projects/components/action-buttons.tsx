import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface ActionButtonsProps {
  githubUrl?: string
  liveDemoUrl?: string
}

const ActionButtons = ({ githubUrl, liveDemoUrl }: ActionButtonsProps) => {
  return (
    <div className="flex gap-3">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-700/60 text-white backdrop-blur-sm transition-all duration-300 hover:bg-slate-600/70 hover:text-purple-200 border border-white/30 hover:border-purple-400/50"
        >
          <Image unoptimized src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" width={20} height={20} />
          GitHub
        </a>
      )}
      {liveDemoUrl && (
        <a
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-purple-500/20 text-purple-200 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/30 hover:text-purple-100 border border-purple-400/30 hover:border-purple-300/50"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      )}
    </div>
  )
}

export default ActionButtons