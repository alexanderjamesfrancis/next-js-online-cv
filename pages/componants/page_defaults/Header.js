import Link from "next/link";

export default function Header() {
  //Navbar dropdown

  //   const btn = document.getElementById("menu-btn");
  //   const menu = document.getElementById("menu");

  //   btn.addEventListener("click", navToggle);

  function navToggle() {
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
  }

  return (
    <div>
      {/* Nav Bar */}
      <nav class="container relative min-w-full mx-auto px-6 border-b">
        {/* <!--Flex for items in NAV--> */}
        <div class="flex items-center justify-between w-full space-x-20 p-4 my-6 ">
          {/* <!--'Home' logo--> */}
          <div class="flex text-center">
            <Link href="/" class="text-2xl px-6 py-4 hover:text-gray-00">
              Alex Francis
            </Link>
          </div>
          <div class="hidden px-4 md:flex md:flex-row font-serif group">
            <Link
              href="componants/about_me/AboutMe"
              class="text-2xl text-center px-4 text-gray-400 hover:text-black border-b-2"
            >
              About Me
            </Link>
            <Link
              href="componants/employment_history/Employment_History"
              class="text-2xl text-center px-4 text-gray-400 hover:text-black border-b-2"
            >
              Employment History
            </Link>
            <Link
              href="componants/portfolio/Portfolio"
              class="text-2xl px-4 text-center text-gray-400 hover:text-black border-b-2"
            >
              Portfolio
            </Link>
            <Link
              href="/"
              class="text-2xl px-4 text-center text-gray-400 hover:text-black border-b-2"
            >
              Contact Me
            </Link>
          </div>
          {/* <!-- Hamburger button--> */}
          <div class="md:hidden">
            <button
              onClick={navToggle}
              class=" z-40 block hamburger md:hidden focus:outline-none"
              type="button"
              id="menu-btn"
            >
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
          </div>
        </div>
      </nav>

      {/*todo Mobile Menu*/}
      <div
        id="menu"
        class="absolute top-0 bottom-0 left-0 flex-col items-center hidden w-full h-full py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-gray-900 bg-opacity-95"
      >
        <Link href="componants/about_me/AboutMe" class="hover:text-gray-300">
          About Me
        </Link>
        <Link href="componants/employment_history/Employment_History" class="hover:text-gray-300">
          Employment History
        </Link>
        <Link href="/" class="hover:text-gray-300">
          Portfolio
        </Link>
        <Link href="/" class="hover:text-gray-300">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
