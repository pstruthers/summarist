interface StatisticsHeadingsProps {
  headings: string[],
  className?: string,
};

export default function StatisticsHeadings({ headings, className }: StatisticsHeadingsProps) {
  return (
    <div className={`flex flex-col justify-center w-full ${className}`}>
      {headings.map((heading, index) => (
        <div key={index} className="text-[32px] text-[#6b757b] font-medium mb-4 max-md:text-[24px]">{heading}</div>
      ))}
    </div>
  )
}