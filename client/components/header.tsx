const Header = () => {
  return (

    <nav className="navbar">
      <div className="container-flex">
        <a href="/" className="flex items-center">
          <img src="/" className="h-6 mr-3 sm:h-9" alt="job" />
          <span className="span-blue">
            Job
          </span>
        </a>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="navbar-list">
            <li>
              <a href="/" className="navbar-main-item">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="navbar-item">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="navbar-item">
                About
              </a>
            </li>
            <li>
              <a href="/" className="navbar-item">
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