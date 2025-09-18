import { useState, useEffect, useRef } from "react"

export const useIndicatorPosition = (activeSection: string) => {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navItemsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  // Update indicator position when active section changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = navItemsRef.current[activeSection]
      if (activeElement) {
        const rect = activeElement.getBoundingClientRect()
        const navRect = activeElement.parentElement?.getBoundingClientRect()
        if (navRect) {
          setIndicatorStyle({
            left: rect.left - navRect.left,
            width: rect.width,
          })
        }
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateIndicator, 50)
    return () => clearTimeout(timer)
  }, [activeSection])

  return { indicatorStyle, navItemsRef }
}
