import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";
import Feature from "./Feature";
import StatisticsHeadings from "./statistics/StatisticsHeadings";
import StatisticsDetails from "./statistics/StatisticsDetails";

export default function Features() {
  return (
    <div className="py-10 w-full">
      <div className="max-w-[1070px] w-full mx-auto px-6">
        <div className="text-[32px] text-[#032b41] text-center mb-8 font-bold max-md:text-[24px]">
          Understand books in few minutes
        </div>
        <div className="grid grid-cols-3 gap-10 mb-24 max-md:grid-cols-1">
          <Feature
            icon={<AiFillFileText className="w-[60px] h-[60px] max-md:w-12 max-md:h-12" />}
            title="Read or listen"
            subtitle="Save time by getting the core ideas from the best books."
          />
          <Feature
            icon={<AiFillBulb className="w-[60px] h-[60px] max-md:w-12 max-md:h-12" />}
            title="Find your next read"
            subtitle="Explore book lists and personalized recommendations."
          />
          <Feature
            icon={<AiFillAudio className="w-[60px] h-[60px] max-md:w-12 max-md:h-12" />}
            title="Briefcasts"
            subtitle="Gain valuable insights from briefcasts."
          />
        </div>
        <div className="flex gap-20 mb-24 last-child:mb-0 max-md:flex-col max-md:gap-8 max-md:mb-8">
          <StatisticsHeadings
            headings={[
              "Enhance your knowledge",
              "Achieve greater success",
              "Improve your health",
              "Develop better parenting skills",
              "Increase happiness",
              "Be the best version of yourself!"
            ]}
          />
          <StatisticsDetails
            stats={[
              {
                percentage: "93%",
                title: <>of Summarist members <b>significantly increase</b> reading frequency.</>
              },
              {
                percentage: "96%",
                title: <>of Summarist members <b>establish better</b> habits.</>
              },
              {
                percentage: "90%",
                title: <>of Summarist members have made <b>significant positive</b> change to their lives.</>
              }
            ]}
          />
        </div>
        <div className="flex gap-20 mb-24 last:mb-0 max-md:gap-8 max-md:mb-8 max-md:flex-col-reverse">
          <StatisticsDetails
            stats={[
              {
                percentage: "91%",
                title: <>
                  of Summarist members <b>report feeling more productive</b> after incorporating the service into their daily routine.
                </>
              },
              {
                percentage: "94%",
                title: <>
                  of Summarist members have <b>noticed an improvement</b> in their overall comprehension and retention of information.
                </>
              },
              {
                percentage: "88%",
                title: <>
                  of Summarist members <b>feel more informed</b> about current events and industry trends since using the platform.
                </>
              }
            ]}
            className="order-1"
          />
          <StatisticsHeadings
            headings={[
              "Expand your learning",
              "Accomplish your goals",
              "Strengthen your vitality",
              "Become a better caregiver",
              "Improve your mood",
              "Maximize your abilities"
            ]}
            className="order-2 items-end max-md:items-start"
          />
        </div>
      </div>
    </div>
  )
}