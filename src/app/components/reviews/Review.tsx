import { ReactNode } from "react";
import { BsStarFill } from "react-icons/bs";

interface ReviewProps {
  name: string,
  stars: number,
  body: ReactNode,
};

export default function Review({ name, stars, body }: ReviewProps) {
  return (
    <div className="bg-[#fff3d7] p-4 mb-8 rounded-sm font-light">
      <div className="text-[#032b41] flex gap-2 mb-2">
        <div>{name}</div>
        <div className="flex">
          {Array(stars).fill(0).map((_, index) => (
            <BsStarFill key={index} className="w-4 h-4 fill-[#0564f1]" />
          ))}
        </div>
      </div>
      <div className="text-[#394547] tracking-[0.3px] leading-5 max-md:text-[14px]">
        {body}
      </div>
    </div >
  )
}