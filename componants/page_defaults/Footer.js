export default function Footer() {
  const thisYear = new Date().getFullYear()

  return (
    <div className="mt-6">
      <div className="footer flex items-center justify-center space-x-4 py-4">
        <div className="group">
          <i className="fa-brands fa-linkedin"></i>
          <a
            className="footer-link group-hover:text-blue-300"
            href="https://www.linkedin.com/in/alex-francis-6568686b/"
          >
            LinkedIn
          </a>
        </div>
        <div className="group">
          <i className="fa-brands fa-github"></i>
          <a
            className="footer-link group-hover:text-blue-300"
            href="https://github.com/alexanderjamesfrancis"
          >
            Github
          </a>
        </div>
        <div className="group">
          <i className="fa-solid fa-newspaper"></i>
          <a
            className="footer-link "
            href="/./downloads/Alexander Francis CV.pdf"
            download="Alex Francis CV.pdf"
          >
            CV Download
          </a>
        </div>
      </div>
      <p className="flex justify-center">
        © {thisYear} Alex Francis
      </p>
    </div>
  );
}
