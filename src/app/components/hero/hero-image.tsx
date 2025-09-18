import BiggerDashes from '@/app/sprites/bigger-dashes'
import SmallerDashes from '@/app/sprites/smaller-dashes'
import Image from 'next/image'


const HeroImage = () => {
  return (
    <div className="relative h-[220px] w-[220px] lg:h-[350px] lg:w-[350px] flex items-center justify-center animate-fade-and-float mb-10">
      <BiggerDashes />

      <SmallerDashes />

      <Image
        fill
        alt="My avatar"
        src="/avatar_no_bg.png"
        className='bg-white rounded-full min-w-[220px] min-h-[220px] lg:min-w-[350px] lg:min-h-[350px]'
      />
    </div>
  )
}

export default HeroImage