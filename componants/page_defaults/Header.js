import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  function navToggle() {
    setToggle(toggle ? false : true);
  }

  return (
    <div>
      {/* Nav Bar */}
      <nav className="container relative min-w-full mx-auto px-6 border-b">
        {/* <!--Flex for items in NAV--> */}
        <div className="flex items-center justify-between w-full space-x-20 p-4 my-6 ">
          {/* <!--'Home' logo--> */}
          <div className="flex text-center">
            <Link href="/" className="text-2xl px-6 py-4 hover:text-gray-00">
              Alex Francis
            </Link>
          </div>
          <div className="hidden px-4 md:flex md:flex-row font-serif group">
            <Link
              href="/componants/about_me/AboutMe"
              className="text-2xl text-center px-4 text-gray-400 hover:text-black border-b-2"
            >
              About Me
            </Link>
            <Link
              href="/componants/employment_history/Employment_History"
              className="text-2xl text-center px-4 text-gray-400 hover:text-black border-b-2"
            >
              Employment History
            </Link>
            <Link
              href="/componants/portfolio/Portfolio"
              className="text-2xl px-4 text-center text-gray-400 hover:text-black border-b-2"
            >
              Portfolio
            </Link>
            <Link
              href="/componants/contact_me/contact_me"
              className="text-2xl px-4 text-center text-gray-400 hover:text-black border-b-2"
            >
              Contact Me
            </Link>
          </div>
          {/* <!-- Hamburger button--> */}
          <div className="md:hidden overflow-hidden">
            <button
              onClick={navToggle}
              className={`z-40 block hamburger md:hidden focus:outline-none ${
                toggle ? "open" : ""
              }`}
              type="button"
              id="menu-btn"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>
      </nav>

      {/*todo Mobile Menu*/}
      <div
        id="menu"
        className={`absolute top-0 bottom-0 left-0 flex-col items-center ${
          toggle ? "flex" : "hidden"
        } w-full h-full py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-gray-900 bg-opacity-95 z-30`}
      >
      <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/componants/about_me/AboutMe" className="hover:text-gray-300">
          About Me
        </Link>
        <Link
          href="/componants/employment_history/Employment_History"
          className="hover:text-gray-300"
        >
          Employment History
        </Link>
        <Link
          href="/componants/portfolio/Portfolio"
          className="hover:text-gray-300"
        >
          Portfolio
        </Link>
        <Link
          href="/componants/contact_me/contact_me"
          className="hover:text-gray-300"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
