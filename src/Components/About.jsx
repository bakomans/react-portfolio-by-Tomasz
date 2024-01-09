/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import img from "../assets/reaxt from pexel.jpg";
import resumePdf from "../assets/Tomasz CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Tomasz CV";
    link.click();
  };

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center lg:gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="bg-white rounded-full p-4 shadow-md border-4 border-purple-800 transform transition-transform 0.4s ease-in-out hover:scale-105 img_glow">
        <img
          data-aos="fade-up"
          src={img}
          width={1000}
          height={600}
          className="rounded-full"
          alt="Photo from pexels Thank You"
        />
      </div>
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal uppercase"
        >
          <span className="text-purple-500">About </span> Me
        </h1>
        <p data-aos="fade-left">
          "Hi there! My name is Tomasz, and I'm a 35-year-old aspiring Front-End
          Developer with a passion for creating beautiful and responsive web
          applications. I've completed various front-end courses and even
          participated in a front-end bootcamp to enhance my skills. I find joy
          in bringing designs to life and crafting user-friendly interfaces. My
          journey into web development has been exciting, and I'm always eager
          to learn and explore new technologies to stay on top of the
          ever-evolving world of web development. "
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center space-x-2">
            <button
              className="neno-button shadow-xl hover:shadow-purple-800/80 text-white border-2 hover:bg-purple-800 border-purple-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
              onClick={handleDownloadResume}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;