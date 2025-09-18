import { myAge, myYOE } from "../utils";
import SingleData from "./single-data";

const Numbers = () => {
  return (
    <div className="w-full">
      {/* Mobile */}
      <div className="xl:hidden font-sans flex items-center justify-center gap-5 mt-10">
        <div className="flex flex-col gap-4">
          <SingleData number={myYOE} text={"Years of experience"} />
          <SingleData number={myAge} text={"Age"} />
        </div>

        <div className="flex flex-col gap-4">
          <SingleData number={140} preffix="+" suffix="M" text={"Impacted users"} />
          <SingleData number={30} preffix="+" text={"Projects contributed"} />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden xl:flex font-sans items-center mt-20 w-full justify-between group">
        <SingleData number={myAge} text={"Age"} />
        <SingleData number={myYOE} suffix="+" text={"Years of\nexperience"} />
        <SingleData number={30} preffix="+" text={"Projects\ncontributed"} />
        <SingleData number={140} preffix="+" suffix="M" text={"Impacted\nusers"} />
      </div>
    </div>

  )
}

export default Numbers;