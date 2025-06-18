import { ReactNode } from "react"
import StatisticsData from "./StatisticsData"

interface StatisticData {
  percentage: string,
  title: ReactNode,
};

interface StatisticsDetails {
  stats: StatisticData[],
  className?: string,
};

export default function StatisticsDetails({ stats, className }: StatisticsDetails) {
  return (
    <div className={`flex flex-col justify-center w-full gap-6 bg-[#f1f6f4] px-6 py-10 ${className}`}>
      {stats.map((stat, index) => (
        <StatisticsData
          key={index}
          percentage={stat.percentage}
          title={stat.title}
        />
      ))}
    </div>
  )
}