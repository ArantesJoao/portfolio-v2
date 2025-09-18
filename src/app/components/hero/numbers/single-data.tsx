'use client'

import { useEffect, useState } from 'react'

interface SingleDataProps {
  number: number
  text: string
  preffix?: string
  suffix?: string
}

const SingleData = ({ number, text, preffix, suffix }: SingleDataProps) => {
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
    <div className="flex gap-3 lg:gap-3.5 items-center hover:scale-105 cursor-pointer transition-all duration-300 group-hover:blur-xs hover:!blur-none">
      <div className="font-bold text-4xl md:text-5xl lg:text-6xl animate-count-up">
        {preffix}{displayNumber}{suffix}
      </div>
      <div className="text-lg md:text-xl lg:text-2xl max-w-20 md:max-w-full leading-6">
        {text.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  )
}

export default SingleData;