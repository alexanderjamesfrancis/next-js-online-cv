export default function Footer() {
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
            download="CV of Alexander Francis 2022"
          >
            CV Download
          </a>
        </div>
      </div>
      <p class="flex justify-center">
        © {new Date().getFullYear.toString} Alex Francis.
      </p>
    </div>
  );
}
