"use client"

import { useState } from "react"
import { techStackData } from "@/app/constants"
import { CategoryFilter } from "./components/category-filter"
import { TechGrid } from "./components/tech-grid"
import { Container } from "../ui/container"

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Cloud"]

  const filteredTechStack = selectedCategory === "All"
    ? techStackData
    : techStackData.filter(tech => tech.category === selectedCategory)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <Container id="tech-stack" maxWidth="6xl">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Tech Stack</h1>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        techStackData={techStackData}
      />

      <TechGrid filteredTechStack={filteredTechStack} />
    </Container>
  )
}

export default TechStack
