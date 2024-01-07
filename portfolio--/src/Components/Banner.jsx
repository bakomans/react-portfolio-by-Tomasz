/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { SiRepublicofgamers } from "react-icons/si";
import img from "../assets/IMG_6220.jpg";

const Banner = () => {
  return (
    <div className='lg:px-56 px-10 lg:py-0 py-20 text-center lg:gap-5 lg-text-start flex lg:flex-row flex-col-revrse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1 className='text-[52px] font-semibold mb-8 leading-normal'>Welcome on <span className="text-purple-500">Tomasz Website</span></h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <div className='flex mt-8 gap-2'>
          <div className='flex items-center space-x-2'>
            <a href="" className='text-purple-500 hover:text-purple-800 rounded-full glow p-2'>
              <VscGithub className="text-[28px]"/>
            </a>
            <a href="" className='text-purple-500 hover:text-purple-800 rounded-full glow p-2'>
              <SiLinkedin className="text-[28px]"/>
            </a>
            <a href="" className='text-purple-500 hover:text-purple-800 rounded-full glow p-2'>
              <ImFacebook2 className="text-[28px]"/>
            </a>
            <a href="" className='text-purple-500 hover:text-purple-800 rounded-full glow p-2'>
              <SiRepublicofgamers className="text-[28px]"/>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-full p-4 shadow-md border-4 border-purple-800 transform transition-transform 0.4s ease-in-out hover:scale-105 img_glow">
        <img src={img} width={1200} height={600} className='rounded-full' alt="tomasz photo" />
      </div>
    </div>
  );
};

export default Banner;