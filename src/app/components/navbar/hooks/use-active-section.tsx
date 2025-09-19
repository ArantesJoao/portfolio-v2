import { useState, useEffect } from "react"

interface NavItem {
  id: string
  label: string
}

export const useActiveSection = (navItems: NavItem[]) => {
  const [activeSection, setActiveSection] = useState<string>("top")

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        // Check if we're near the bottom of the page for "projects" section
        const scrollPosition = window.scrollY + window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const isNearBottom = scrollPosition >= documentHeight - 100

        if (isNearBottom) {
          setActiveSection("projects")
          return
        }

        // Find the entry with the highest intersection ratio
        let maxRatio = 0
        let currentSection = "top"

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            currentSection = entry.target.id
          }
        })

        // Only update if we found an intersecting section
        if (maxRatio > 0) {
          setActiveSection(currentSection)
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -30% 0px",
      }
    )

    // Also add scroll listener for bottom detection
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const isNearBottom = scrollPosition >= documentHeight - 200

      if (isNearBottom) {
        setActiveSection("projects")
      }
    }

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [navItems])

  return activeSection
}
