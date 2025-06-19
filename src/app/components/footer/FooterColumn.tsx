interface FooterColumnProps {
  title: string,
  links: string[],
};

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="z-10">
      <div className="text-[18px] text-[#032b41] font-semibold mb-4">{title}</div>
      <div>
        {links.map((link, index) => (
          <div key={index} className="mb-3 leading-4 last:mb-0">
            <a className="text-[#394547] text-[14px] cursor-not-allowed">{link}</a>
          </div>
        ))}
      </div>
    </div>
  )
}