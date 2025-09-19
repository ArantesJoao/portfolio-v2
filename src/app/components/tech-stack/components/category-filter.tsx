"use client"

import { TechStackItem } from "@/app/constants"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  techStackData: TechStackItem[]
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  techStackData
}: CategoryFilterProps) => {
  const getCategoryCount = (category: string) => {
    if (category === "All") return techStackData.length
    return techStackData.filter(tech => tech.category === category).length
  }

  const getCategoryButtonStyle = (category: string) => {
    const isActive = selectedCategory === category
    const baseStyle = "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm border"

    if (isActive) {
      return `${baseStyle} bg-purple-500/30 text-purple-100 border-purple-400/50 shadow-lg shadow-purple-500/20`
    }

    return `${baseStyle} bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20`
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={getCategoryButtonStyle(category)}
        >
          {category}
          <span className="ml-2 text-xs opacity-75">
            ({getCategoryCount(category)})
          </span>
        </button>
      ))}
    </div>
  )
}
