import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Stack = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 800
        });
    }, []);

    return (
        <div id="Stack" data-aos='fade-up' className='p-20 flex flex-col items-center justify-center'>
            <h1 data-aos='fade-right' className='text-[53px] font-semibold mb-20 leading-normal uppercase text-purple-500'>
                <span className='text-white'>Languages I </span>Know
            </h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
                <h2 data-aos='zoom-in' className='text-[30px] flex items-center justify-center font-semibold text-purple-800 rounded-3xl h-36 w-44 border-2 border-purple-600 b_glow'>HTML5</h2>
                <h2 data-aos='zoom-in' data-aos-delay='200' className='text-[30px] flex items-center justify-center font-semibold text-purple-800 rounded-3xl h-36 w-44 border-2 border-purple-600 b_glow'>CSS3</h2>
                <h2 data-aos='zoom-in' data-aos-delay='400' className='text-[30px] flex items-center justify-center font-semibold text-purple-800 rounded-3xl h-36 w-44 border-2 border-purple-600 b_glow'>JavaScript</h2>
                <h2 data-aos='zoom-in' data-aos-delay='600' className='text-[30px] flex items-center justify-center font-semibold text-purple-800 rounded-3xl h-36 w-44 border-2 border-purple-600 b_glow'>React</h2>
            </div>
        </div>
    );
};

export default Stack;

