import { BiCrown } from "react-icons/bi";
import NumberCard from "./NumberCard";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";

export default function Numbers() {
  return (
    <div className="py-10 w-full">
      <div className="max-w-[1070px] w-full mx-auto px-6">
        <div className="text-[32px] text-[#032b41] text-center font-bold mb-8 max-md:text-[24px]">Start growing with Summarist now</div>
        <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:gap-6">
          <NumberCard
            icon={<BiCrown className="text-[#0365f2] w-12 h-12" />}
            title="3 Million"
            subtitle="Downloads on all platforms"
          />
          <NumberCard
            icon={
              <>
                <BsStarFill className="text-[#0365f2] w-5 h-5" />
                <BsStarFill className="text-[#0365f2] w-5 h-5" />
                <BsStarFill className="text-[#0365f2] w-5 h-5" />
                <BsStarFill className="text-[#0365f2] w-5 h-5" />
                <BsStarHalf className="text-[#0365f2] w-5 h-5" />
              </>
            }
            title="4.5 Stars"
            subtitle="Average ratings on iOS and Google Play"
          />
          <NumberCard
            icon={<RiLeafLine className="text-[#0365f2] w-12 h-12" />}
            title="97%"
            subtitle="Of Summarist members create a better reading habit"
          />
        </div>
      </div>
    </div>
  )
}