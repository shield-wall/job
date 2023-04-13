const Footer = () => {
  return (
    <footer className="footer">
      <div className="Container-2">
        <span className="text-md text-gray-500">© 2023
          <a href="/" className="hover:underline">
            Job™
          </a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-8 sm:justify-center sm:mt-0">
          <a href="/" className="footer-item">
            <i>Facebook</i>
          </a>
          <a href="/" className="footer-item">
            <i>Instagram</i>
          </a>
          <a href="/" className="footer-item">
            <i>Twitter</i>
          </a>
          <a href="/" className="footer-item">
            <i>Github</i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;