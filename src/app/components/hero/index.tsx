import React from 'react'
import HeroImage from './hero-image'
import Title from './title'
import Numbers from './numbers'

const Hero = () => {
  return (
    <div className="flex flex-col items-center font-mono h-screen justify-center max-w-7xl mx-auto relative overflow-hidden" id="top">
      {/* Desktop */}
      <div className="hidden -z-10 xl:block absolute translate-x-52 animate-none -top-20 inset-0 bg-[url('/diagonal-line.svg')] [mask-image:radial-gradient(circle_at_center,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0)_60%)]" />
      {/* Mobile */}
      <div className="xl:hidden -z-10 absolute -top-40 inset-0 bg-[url('/diagonal-line.svg')] [mask-image:radial-gradient(circle_at_center,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0)_70%)]" />
      <div>
        <div className="relative flex flex-col xl:flex-row-reverse items-center justify-center">
          <HeroImage />
          <Title />
        </div>
        <Numbers />
      </div>
    </div>
  )
}

export default Hero
