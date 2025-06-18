import { ReactNode } from "react"

interface FeatureProps {
  icon: ReactNode,
  title: string,
  subtitle: string,
};

export default function Feature({ icon, title, subtitle }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex justify-center mb-2 text-[#032b41]">
        {icon}
      </div>
      <div className="text-[24px] text-[#032b41] mb-4 font-medium max-md:text-[20px]">
        {title}
      </div>
      <div className="text-[18px] text-[#394547] font-light max-md:text-[14px]">
        {subtitle}
      </div>
    </div>
  )
}