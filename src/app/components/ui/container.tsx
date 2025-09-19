import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  id?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl"
}

export const Container = ({
  children,
  className = "",
  id,
  maxWidth = "4xl"
}: ContainerProps) => {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    "6xl": "max-w-6xl"
  }

  return (
    <div
      id={id}
      className={`font-sans ${maxWidthClasses[maxWidth]} mx-auto px-6 md:px-8 lg:px-0 ${className}`}
    >
      {children}
    </div>
  )
}
