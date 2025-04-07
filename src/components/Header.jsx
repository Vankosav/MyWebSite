import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center py-2 px-4 sm:px-8 w-full bg-white fixed top-0 left-0 z-10">
      {/* Home on the left */}
      <nav className="flex-grow flex justify-start">
        <Link className="text-black hover:text-gray-600 transition font-poppins uppercase tracking-[0.2em] text-sm sm:text-base" href="/">Home</Link>
      </nav>

      {/* Projects in the center */}
      <nav className="flex-grow flex justify-center">
        <Link className="text-black hover:text-gray-600 transition font-poppins uppercase tracking-[0.2em] text-sm sm:text-base" href="#projects">Projects</Link>
      </nav>

      {/* Contact on the right */}
      <nav className="flex-grow flex justify-end">
        <Link className="text-black hover:text-gray-600 transition font-poppins uppercase tracking-[0.2em] text-sm sm:text-base" href="#contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
