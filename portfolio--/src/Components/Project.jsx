import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 800
        });
    }, []);

    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos='fade-right' className='text-[53px] font-semibold mb-20 leading-normal uppercase text-purple-500'>
                <span className='text-white'>My Projects</span>
            </h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
                <img data-aos='zoom-in' data-aos-delay='600' className='rounded-lg h-36 w-44 border-2 border-purple-600 b_glow' src="path/to/project-image-4.jpg" alt="Project 4" />
                <img data-aos='zoom-in' data-aos-delay='400' className='rounded-lg h-36 w-44 border-2 border-purple-600 b_glow' src="path/to/project-image-3.jpg" alt="Project 3" />
                <img data-aos='zoom-in' data-aos-delay='200' className='rounded-lg h-36 w-44 border-2 border-purple-600 b_glow' src="path/to/project-image-2.jpg" alt="Project 2" />
                <img data-aos='zoom-in' className='rounded-lg h-36 w-44 border-2 border-purple-600 b_glow' src="path/to/project-image-1.jpg" alt="Project 1" />
                {/* Dodaj kolejne obrazy dla innych projektów */}
            </div>
        </div>
    );
};

export default Projects;

