import React, { useState } from "react";
import { Link } from "react-scroll";
import { TfiClose } from "react-icons/tfi";
import { TfiMenu } from "react-icons/tfi";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition" data-aos="fade-up">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Stack">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Stack</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact Me</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-3 px-20 py-4 border-b border-slate-500">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Tomasz Bachula Portfolio</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer" data-aos="fade-right">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer" data-aos="fade-left">About</li>
              </Link>
              <Link spy={true} smooth={true} to="Stack">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer" data-aos="fade-up">Stack</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer" data-aos="fade-down">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer" data-aos="fade-right">Contact Me</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition mt-2" onClick={handleClick}>
          {click ? <TfiClose /> : <TfiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
