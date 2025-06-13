export default function Nav() {
  return (
    <nav className="h-20">
      <div className="flex justify-between items-center max-w-[1070px] w-full h-full m-auto px-6">
        <figure className="max-w-[200px]">
          <img src="/assets/logo.png" className="w-full h-full" />
        </figure>
        <ul className="flex gap-6">
          <li className="cursor-pointer text-[#032b41] hover:text-[#2bd97c] transition-colors duration-100">Login</li>
          <li className="cursor-not-allowed text-[#032b41] max-[576px]:hidden">About</li>
          <li className="cursor-not-allowed text-[#032b41] max-[576px]:hidden">Contact</li>
          <li className="cursor-not-allowed text-[#032b41] max-[576px]:hidden">Help</li>
        </ul>
      </div>
    </nav>
  )
};