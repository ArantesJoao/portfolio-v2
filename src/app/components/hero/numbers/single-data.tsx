'use client'

import { useEffect, useState } from 'react'

interface SingleDataProps {
  number: number
  text: string
  preffix?: string
  suffix?: string
}

const SingleData = ({
  number,
  text,
  preffix = "",
  suffix = ""
}: SingleDataProps) => {
  const [displayNumber, setDisplayNumber] = useState(0)

  useEffect(() => {
    const duration = 2000
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    let startTs: number | null = null
    let rafId = 0

    const tick = (now: number) => {
      if (startTs === null) startTs = now
      const t = Math.min(1, (now - startTs) / duration)
      const value = Math.floor(number * easeOutCubic(t))
      setDisplayNumber(value)
      if (t < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [number])

  return (
    <div className="group flex flex-col items-center text-center space-y-2 relative">
      {/* Subtle accent line that appears on hover */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent transition-all duration-700 group-hover:w-16" />

      {/* Number */}
      <div className="flex items-baseline justify-center gap-1">
        {preffix && (
          <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-purple-400/80 transition-colors duration-500 group-hover:text-purple-300">
            {preffix}
          </span>
        )}
        <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-white transition-all duration-500 group-hover:text-purple-100 group-hover:scale-105">
          {displayNumber}
        </span>
        {suffix && (
          <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-purple-400/80 transition-colors duration-500 group-hover:text-purple-300">
            {suffix}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="text-xs md:text-sm text-gray-400 leading-relaxed transition-colors duration-500 group-hover:text-gray-300 max-w-20 md:max-w-none">
        {text.split('\n').map((line, index) => (
          <div key={index}>
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleData;