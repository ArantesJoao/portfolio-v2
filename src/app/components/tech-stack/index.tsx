"use client"

import { useState } from "react"
import { techStackData } from "@/app/constants"
import { CategoryFilter } from "./components/category-filter"
import { TechGrid } from "./components/tech-grid"
import { Container } from "../ui/container"
import { TechStackCard } from "./components/tech-stack-card"

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Cloud"]

  const filteredTechStack = selectedCategory === "All"
    ? techStackData
    : techStackData.filter(tech => tech.category === selectedCategory)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const groupedByCategory = () => {
    if (selectedCategory !== "All") {
      return { [selectedCategory]: filteredTechStack }
    }

    return categories.slice(1).reduce((acc, category) => {
      acc[category] = techStackData.filter(tech => tech.category === category)
      return acc
    }, {} as Record<string, typeof techStackData>)
  }

  return (
    <Container id="tech-stack" maxWidth="4xl">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Tech Stack</h1>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        techStackData={techStackData}
      />

      {selectedCategory === "All" ? (
        <div className="space-y-6">
          {Object.entries(groupedByCategory()).map(([category, techs], index) => (
            <div key={category}>
              {/* Category as visual section with subtle background */}
              <div className="relative">
                {/* Subtle category background bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400/40 via-purple-400/20 to-purple-400/40 rounded-full" />

                {/* Content with left padding */}
                <div className="pl-6">
                  {/* Category name with icon */}
                  <div className="flex items-center gap-2 mb-3">
                    {category === "Frontend" && (
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                    {category === "Backend" && (
                      <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22,9V7H20V5A2,2 0 0,0 18,3H6A2,2 0 0,0 4,5V7H2V9H4V10H2V12H4V13H2V15H4V17A2,2 0 0,0 6,19H18A2,2 0 0,0 20,17V15H22V13H20V12H22V10H20V9H22M18,17H6V5H18V17Z" />
                      </svg>
                    )}
                    {category === "Database" && (
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
                      </svg>
                    )}
                    {category === "Tools" && (
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                      </svg>
                    )}
                    {category === "Cloud" && (
                      <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.5,20Q4.22,20 2.61,18.43Q1,16.85 1,14.58Q1,12.63 2.17,11.1Q3.35,9.57 5.25,9.15Q5.88,6.85 7.75,5.43Q9.63,4 12,4Q14.93,4 16.96,6.04Q19,8.07 19,11Q20.73,11.2 21.86,12.5Q23,13.78 23,15.5Q23,17.38 21.69,18.69Q20.38,20 18.5,20H6.5Z" />
                      </svg>
                    )}
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {category}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {techs.map((tech, techIndex) => (
                      <TechStackCard key={`${tech.name}-${techIndex}`} {...tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <TechGrid filteredTechStack={filteredTechStack} />
      )}
    </Container>
  )
}

export default TechStack
