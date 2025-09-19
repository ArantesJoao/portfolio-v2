import { myAge, myYOE } from "../utils";
import SingleData from "./single-data";

const Numbers = () => {
  return (
    <div className="w-full mt-16 lg:mt-20">
      {/* Mobile: 2x2 grid with preferred order */}
      <div className="grid grid-cols-2 gap-8 lg:hidden max-w-md mx-auto">
        {/* Top row: YOE and Impacted Users */}
        <SingleData
          number={myYOE}
          text="Years of experience"
          suffix="+"
        />

        <SingleData
          number={140}
          preffix="+"
          suffix="M"
          text="Impacted users"
        />

        {/* Bottom row: Age and Projects */}
        <SingleData
          number={myAge}
          text="Age"
        />

        <SingleData
          number={30}
          preffix="+"
          text="Projects contributed"
        />
      </div>

      {/* Desktop: Clean horizontal layout with subtle dividers */}
      <div className="hidden lg:flex items-center justify-center lg:justify-between gap-8 lg:gap-12 max-w-4xl mx-auto">

        <SingleData
          number={myYOE}
          text="Years of experience"
          suffix="+"
        />

        {/* Vertical divider for desktop */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <SingleData
          number={myAge}
          text="Age"
        />

        {/* Vertical divider for desktop */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <SingleData
          number={140}
          preffix="+"
          suffix="M"
          text="Impacted users"
        />

        {/* Vertical divider for desktop */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <SingleData
          number={30}
          preffix="+"
          text="Projects contributed"
        />

      </div>

      {/* Subtle bottom accent */}
      <div className="mt-12 w-32 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mx-auto" />
    </div>
  )
}

export default Numbers;