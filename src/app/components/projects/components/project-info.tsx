interface ProjectInfoProps {
  title: string
  description: string
}

const ProjectInfo = ({ title, description }: ProjectInfoProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-white text-balance mb-2 transition-colors duration-500 group-hover:text-purple-200">
        {title}
      </h3>
      <p className="text-sm text-gray-200 leading-relaxed text-pretty transition-colors duration-500 group-hover:text-purple-100">
        {description}
      </p>
    </div>
  )
}

export default ProjectInfo