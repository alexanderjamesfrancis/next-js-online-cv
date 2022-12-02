export default function Footer() {
  const thisYear = new Date().getFullYear()

  return (
    <div class="mt-6">
      <div class="footer flex items-center justify-center space-x-4 py-4">
        <div class="group">
          <i class="fa-brands fa-linkedin"></i>
          <a
            class="footer-link group-hover:text-blue-300"
            href="https://www.linkedin.com/in/alex-francis-6568686b/"
          >
            LinkedIn
          </a>
        </div>
        <div class="group">
          <i class="fa-brands fa-github"></i>
          <a
            class="footer-link group-hover:text-blue-300"
            href="https://github.com/alexanderjamesfrancis"
          >
            Github
          </a>
        </div>
        <div class="group">
          <i class="fa-solid fa-newspaper"></i>
          <a
            class="footer-link "
            href="downloads/Alex Francis CV Nov 2022.pdf"
            download="Alex Francis CV Nov 2022.pdf"
          >
            CV Download
          </a>
        </div>
      </div>
      <p class="flex justify-center">
        © {thisYear} Alex Francis
      </p>
    </div>
  );
}
