import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <div className="py-10 w-full bg-[#f1f6f4]">
      <div className="max-w-[1070px] w-full mx-auto px-6">
        <div className="relative flex justify-between text-[14px] mx-auto mt-8 mb-16 max-md:flex-col max-md:gap-8">
          <FooterColumn
            title="Actions"
            links={[
              "Summarist Magazine",
              "Cancel Subscription",
              "Help",
              "Contact us"
            ]}
          />
          <FooterColumn
            title="Useful Links"
            links={[
              "Pricing",
              "Summarist Business",
              "Gift Cards",
              "Authors & Publishers"
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              "About",
              "Careers",
              "Partners",
              "Code of Conduct"
            ]}
          />
          <FooterColumn
            title="Other"
            links={[
              "Sitemap",
              "Legal Notice",
              "Terms of Service",
              "Privacy Policies"
            ]}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="text-[#032b41] font-medium">
            Copyright &copy; 2025 Summarist.
          </div>
        </div>
      </div>
    </div>
  )
}