// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"; // Przykładowe ikony, możesz dostosować do swoich potrzeb

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav>
      <div className="h-16 flex items-center justify-between z-50 text-white bg-gray-800 px-8 lg:px-20 py-4 border-b border-gray-700">
        <div className="text-3xl font-bold">Tomasz Bachula Portfolio</div>
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-purple-500 transition"
          >
            Home
          </Link>
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-purple-500 transition"
          >
            About
          </Link>
          <Link
            to="Stack"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-purple-500 transition"
          >
            Stack
          </Link>
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-purple-500 transition"
          >
            Projects
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-purple-500 transition"
          >
            Contact Me
          </Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={handleClick} className="text-white focus:outline-none">
            {click ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
          </button>
        </div>
      </div>
      {click && (
        <div className="lg:hidden absolute top-16 w-full left-0 bg-gray-800">
          <ul className="text-center text-white p-4 space-y-4">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
              className="cursor-pointer hover:text-purple-500 transition"
            >
              <li>Home</li>
            </Link>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
              className="cursor-pointer hover:text-purple-500 transition"
            >
              <li>About</li>
            </Link>
            <Link
              to="Stack"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
              className="cursor-pointer hover:text-purple-500 transition"
            >
              <li>Stack</li>
            </Link>
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
              className="cursor-pointer hover:text-purple-500 transition"
            >
              <li>Projects</li>
            </Link>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
              className="cursor-pointer hover:text-purple-500 transition"
            >
              <li>Contact Me</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
