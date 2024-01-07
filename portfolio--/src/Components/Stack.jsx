import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';

const Stack = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 800
        });
    }, []);

    const [hovered, setHovered] = useState(null);

    const handleHover = (index) => {
        setHovered(index);
    };

    const handleLeave = () => {
        setHovered(null);
    };

    const getTransform = (index) => {
        return index === hovered ? 'scale(1.05)' : 'scale(1)';
    };

    return (
        <div id="Stack" data-aos='fade-up' className='p-20 flex flex-col items-center justify-center'>
            <h1 data-aos='fade-right' className='text-[53px] font-semibold mb-20 leading-normal uppercase text-purple-500'>
                <span className='text-white'>Languages I </span>Know
            </h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
                <div
                    data-aos='zoom-in'
                    className='text-[30px] flex items-center justify-center font-semibold text-purple-800 rounded-3xl h-36 w-44 border-2 border-purple-600 b_glow'
                    style={{ transform: getTransform(0), transition: 'transform 0.3s ease-in-out' }}
                    onMouseEnter={() => handleHover(0)}
                    onMouseLeave={handleLeave}
                >
                    <FaHtml5 className="mr-2" /> HTML5
                </div>
                <div
                    data-aos='zoom-in'
                    data-aos-delay='200'
                    className='text-[30px] flex items-center justify-center font-semibold text-purple-800 rounded-3xl h-36 w-44 border-2 border-purple-600 b_glow'
                    style={{ transform: getTransform(1), transition: 'transform 0.3s ease-in-out' }}
                    onMouseEnter={() => handleHover(1)}
                    onMouseLeave={handleLeave}
                >
                    <FaCss3 className="mr-2" /> CSS3
                </div>
                <div
                    data-aos='zoom-in'
                    data-aos-delay='400'
                    className='text-[30px] flex items-center justify-center font-semibold text-purple-800 rounded-3xl h-36 w-44 border-2 border-purple-600 b_glow'
                    style={{ transform: getTransform(2), transition: 'transform 0.3s ease-in-out' }}
                    onMouseEnter={() => handleHover(2)}
                    onMouseLeave={handleLeave}
                >
                    <FaJs className="mr-2" /> JavaScript
                </div>
                <div
                    data-aos='zoom-in'
                    data-aos-delay='600'
                    className='text-[30px] flex items-center justify-center font-semibold text-purple-800 rounded-3xl h-36 w-44 border-2 border-purple-600 b_glow'
                    style={{ transform: getTransform(3), transition: 'transform 0.3s ease-in-out' }}
                    onMouseEnter={() => handleHover(3)}
                    onMouseLeave={handleLeave}
                >
                    <FaReact className="mr-2" /> React
                </div>
            </div>
        </div>
    );
};

export default Stack;
