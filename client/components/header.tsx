import Link from 'next/link'

const Header = () => {
  return (

    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto my-2">
        <Link href="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">SeuJob</span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700  md:bg-transparent md:text-blue-700 md:p-0  inline-block p-4 border-b-2 border-white hover:text-blue-700 hover:border-blue-700" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:w-auto  inline-block p-4 border-b-2 border-white hover:text-blue-700 hover:border-blue-700">Blog
                <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            </li>
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  inline-block p-4 border-b-2 border-white hover:text-blue-700 hover:border-blue-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  inline-block p-4 border-b-2 border-white hover:text-blue-700 hover:border-blue-700">
                Post a job
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header
