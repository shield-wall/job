const Header = () => {
  return (

    <nav className="nav">
      <div className="nav-container">
        <a href="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="job" />
          <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-blue-700">Job</span>
        </a>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="nav-ul">
            <li>
              <a href="/" className="nav-main-li" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="nav-dropDown-li">Blog
                <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd">
                  </path>
                </svg>
              </a>
            </li>
            <li>
              <a href="/" className="nav-li">
                About
              </a>
            </li>
            <li>
              <a href="/" className="nav-li">
                Post a job
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header;