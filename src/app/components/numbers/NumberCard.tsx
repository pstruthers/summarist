import { ReactNode } from "react"

interface NumberCardProps {
  icon: ReactNode,
  title: string,
  subtitle: string,
};

export default function NumberCard({ icon, title, subtitle }: NumberCardProps) {
  return (
    <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
      <div className="flex items-center h-[60px] gap-1">
        {icon}
      </div>
      <div className="text-[40px] text-[#032b41] font-semibold mb-4 max-md:text-[32px]">{title}</div>
      <div className="text-[#394547] font-light max-md:text-[14px]">{subtitle}</div>
    </div>
  )
}