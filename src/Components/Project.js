// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiGithub } from 'react-icons/si';
import img1 from '../assets/image.png';
import img2 from '../assets/pro2.png';
import img3 from '../assets/pro3.png';
import imgCGiStudio from '../assets/cgistudio.png';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 800
        });
    }, []);

    return (
        <div id="Projects" className="p-8 md:p-20 flex flex-col items-center justify-center">
            <div data-aos='fade-right' className='text-2xl md:text-[53px] font-semibold mb-8 md:mb-20 leading-normal uppercase text-purple-500'>
                My <span className='text-white'>Projects</span>
            </div>
            <div className="mt-12 text-center">
                <h2 className="text-xl font-semibold mb-4 text-purple-500" data-aos='fade-up'>Interaction with Projects</h2>
                <p className="text-gray-600 p-8 text-white" data-aos='fade-up'>Explore and interact with my projects! Check them out on GitHub and let me know what you think!</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-20'>
                {[
                    { img: img1, title: 'Foodie Mate', description: 'This project allows you to explore various restaurants. Please find this project on GitHub.', link: 'https://github.com/bakomans/restaurant-explorer-By-Group-8' },
                    { img: img2, title: 'Calculator', description: 'This project is a simple calculator. Please find this project on GitHub.', link: 'https://github.com/bakomans/project_calc_for_portfolio' },
                    { img: img3, title: 'Scheduler', description: 'This project is a dynamic calendar. Please find this project on GitHub.', link: 'https://github.com/bakomans/Dynamic-Calendar-is-amazing' },
                    { img: imgCGiStudio, title: 'CGiStudio', description: 'This project showcases CGiStudio. Please find this project on GitHub.', link: 'https://cg-istudio.netlify.app' }, // Zaktualizowany projekt na CGiStudio
                ].map((project, index) => (
                    <div key={index} data-aos='zoom-in' data-aos-delay={index * 200} className='relative overflow-hidden rounded-lg b_glow2 group mb-8 md:mb-0'>
                        <img className='w-full h-44 md:h-72 object-cover transform transition-transform group-hover:scale-105' src={project.img} alt={project.title} />
                        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                            <div className='text-center'>
                                <h2 className='text-lg font-semibold text-purple-800 mb-2'>{project.title}</h2>
                                <p className='text-gray-600'>{project.description}</p>
                            </div>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-0 left-0 right-0 p-2 text-center text-purple-500 hover:underline bg-white bg-opacity-75">View on GitHub</a>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <p className="text-lg text-white mb-2">Find more projects on my GitHub:</p>
                <a href="https://github.com/bakomans" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                    <SiGithub className="text-4xl inline-block" data-aos='fade-up' />
                </a>
            </div>
        </div>
    );
};

export default Projects;
