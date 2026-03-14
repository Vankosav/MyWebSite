"use client";

import Link from "next/link";

const Header = () => {
  const linkStyle =
    "text-black hover:text-gray-600 transition font-poppins uppercase tracking-[0.2em] text-sm sm:text-base whitespace-nowrap";

  return (
    <header className="flex items-center py-2 px-4 sm:px-8 w-full bg-white fixed top-0 left-0 z-10">

      {/* Home */}
      <nav className="flex-grow flex justify-start">
        <Link className={linkStyle} href="/">Home</Link>
      </nav>

      {/* Projects */}
      <div className="flex-grow flex justify-center relative group">

        <span className={`${linkStyle} cursor-pointer`}>
          Projects
        </span>

        {/* Dropdown */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg border rounded-md flex flex-col text-center min-w-[360px] py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">

          <Link
            href="#projects"
            className={`${linkStyle} px-8 py-3 hover:bg-gray-100`}
          >
            Web Developer Projects
          </Link>

          <Link
            href="#lxd-projects"
            className={`${linkStyle} px-8 py-3 hover:bg-gray-100`}
          >
            Learning Designer Projects
          </Link>

        </div>

      </div>

      {/* Contact */}
      <nav className="flex-grow flex justify-end">
        <Link className={linkStyle} href="#contact">
          Contact
        </Link>
      </nav>

    </header>
  );
};

export default Header;