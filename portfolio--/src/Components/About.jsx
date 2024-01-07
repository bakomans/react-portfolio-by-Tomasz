import React, { useEffect } from "react";
import img from "../assets/reaxt from pexel.jpg";
import resumePdf from "../assets/tomasz-CV (1).pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "tomasz-CV (1)";
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
    <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center lg:gap-5 lg-text-start flex lg:flex-row flex-col-revrse justify-between lg:gap-28 items-center">
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
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

