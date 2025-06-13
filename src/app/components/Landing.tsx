export default function Landing() {
  return (
    <div className="py-10 w-full">
      <div className="max-w-[1070px] w-full m-auto px-6">
        <div className="flex">
          <div className="w-full">
            <div className="text-[#032b41] text-[40px] font-bold mb-6">
              Gain more knowledge <br className="max-md:hidden" /> in less time
            </div>
            <div className="text-[#394547] text-xl font-light mb-6">
              Great summaries for busy people,
              <br className="max-md:hidden" />
              individuals who barely have time to read,
              <br className="max-md:hidden" />
              and even people who don't like to read.
            </div>
            <button className="bg-[#2bd97c] text-[#032b41] w-full h-10 rounded-sm text-[16px] transition duration-200 flex items-center justify-center min-w-[180px] max-w-[300px] hover:enabled:bg-[#20ba68] disabled:cursor-not-allowed disabled:opacity-65 active:translate-y-[1px] cursor-pointer">
              Login
            </button>
          </div>
          <figure className="flex justify-end w-full">
            <img src="/assets/landing.png" className="w-full h-full max-w-[400px]" />
          </figure>
        </div>
      </div>
    </div>
  )
}