/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin, SiFacebook } from "react-icons/si"; // Zmieniłem import na SiFacebook
import { SiRepublicofgamers } from "react-icons/si";
import img from "../assets/IMG_6220.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 800,
    });
  }, []);

  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center lg:gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-left"
          className="text-5xl lg:text-[52px] font-semibold mb-8 leading-normal uppercase"
        >
          Welcome on <span className="text-purple-500">Tomasz's Website</span> {/* Poprawiłem tekst */}
        </h1>
        <p data-aos="fade-right" className="text-lg lg:text-xl">
          "Welcome to my corner of the web! I'm thrilled to have you here. Feel
          free to explore and discover the various projects and experiences I've
          crafted as an aspiring Front-End Developer. Whether you're a fellow
          developer, tech enthusiast, or just curious, I hope you find
          inspiration and enjoyment in the work showcased on this site. Dive
          into the world of web development with me, where creativity meets
          functionality. If you have any questions or just want to connect,
          don't hesitate to drop me a message. Happy browsing!"
        </p>
        <div className="flex mt-8 gap-2">
          <a
            href="https://github.com/bakomans"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-800 rounded-full glow p-2"
          >
            <VscGithub className="text-[28px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/tomasz-bachula-2530871a6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-800 rounded-full glow p-2"
          >
            <SiLinkedin className="text-[28px]" />
          </a>
          <a
            href="https://pl-pl.facebook.com/public/Tomasz-Bachula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-800 rounded-full glow p-2"
          >
            <SiFacebook className="text-[28px]" /> {/* Zmieniłem ikonę na SiFacebook */}
          </a>
          <a
            href="https://rog.asus.com/uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-800 rounded-full glow p-2"
          >
            <SiRepublicofgamers className="text-[28px]" />
          </a>
        </div>
      </div>
      <div className="bg-white rounded-full p-4 shadow-md border-4 border-purple-800 transform transition-transform 0.4s ease-in-out hover:scale-105 img_glow">
        <img
          data-aos="fade-up"
          src={img}
          width={1200}
          height={600}
          className="rounded-full"
          alt="Tomasz's photo"
        />
      </div>
    </div>
  );
};

export default Banner;
