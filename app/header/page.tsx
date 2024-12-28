import Link from "next/link"
export default function Header(){
    return(
        <div>
             <nav className="bg-black   h-20 flex items-center justify-between px-5 fixed top-0 left-0 w-full z-50">
        {/* Logo Section */}
        <div className="flex items-center">
          <label className="text-white text-4xl font-bold">Shoby's Fast Food</label>
        </div>
      
        {/* Hamburger Menu */}
        <input type="checkbox" id="check" className="hidden peer" />
        <label
          htmlFor="check"
          className="text-white text-2xl cursor-pointer lg:hidden">
          <i className="fa-solid fa-list" aria-hidden="true"></i>
        </label>
      
        {/* Navigation Links */}
        <ul className="flex flex-col lg:flex-row lg:gap-5 fixed lg:static top-20 left-0 w-full lg:w-auto h-screen lg:h-auto bg-gray-800 lg:bg-transparent items-center justify-center transform -translate-x-full peer-checked:translate-x-0 lg:translate-x-0 transition-transform">
          <li className="hover:bg-gray-700 transition-colors w-full lg:w-auto">
            <Link
              href="/"
              className="block text-gray-200 text-lg uppercase py-3 px-5 text-center lg:inline-block"
            >
              Home
            </Link>
          </li>
          <li className="hover:bg-gray-700 transition-colors w-full lg:w-auto">
            <Link
              href="/services-as"
              className="block text-gray-200 text-lg uppercase py-3 px-5 text-center lg:inline-block"
            >
              Services
            </Link>
          </li>
          <li className="hover:bg-gray-700 transition-colors w-full lg:w-auto">
            <Link
              href="/feedback"
              className="block text-gray-200 text-lg uppercase py-3 px-5 text-center lg:inline-block"
            >
                Feedback 
            </Link>
          </li>
          <li className="hover:bg-gray-700 transition-colors w-full lg:w-auto">
            <Link
              href="/contact-us"
              className="block text-gray-200 text-lg uppercase py-3 px-5 text-center lg:inline-block"
            >
            Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* finish */}
        </div>
    )
}