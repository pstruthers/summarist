import { ReactNode } from "react";

interface StatisticsDataProps {
  percentage: string,
  title: ReactNode,
};

export default function StatisticsData({percentage, title}: StatisticsDataProps) {
  return (
    <div className="flex gap-4">
      <div className="text-[20px] text-[#0365f2] font-semibold mt-1">{percentage}</div>
      <div className="text-[20px] text-[#394547] font-light max-md:text-[16px]">{title}</div>
    </div>
  )
}