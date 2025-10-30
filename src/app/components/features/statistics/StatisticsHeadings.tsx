"use client"

import { useEffect, useState } from "react"

interface StatisticsHeadingsProps {
  headings: string[],
  className?: string,
};

export default function StatisticsHeadings({ headings, className }: StatisticsHeadingsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <div className={`flex flex-col justify-center w-full ${className}`}>
      {headings.map((heading, index) => (
        <div key={index} className={`text-[32px] font-medium mb-4 max-md:text-[24px] ${index === activeIndex ? "text-[#2bd97c]" : "text-[#6b757b]"}`}>{heading}</div>
      ))}
    </div>
  )
}