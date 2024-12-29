'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom'
import {socialMedia } from "../deta/otherdeta"
export default function Footer() {
 
    const [isMobile, setIsMobile] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Adjust based on your mobile breakpoint
        };

        handleResize(); // Check on component mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        controls.start(inView ? { width: isMobile ? '1rem' : '6rem' } : { width: isMobile ? '1rem' : '40rem' });
    }, [inView, controls, isMobile]);


    return (
        <footer>
            <section className="w-full py-32 flex justify-center items-center relative overflow-hidden">
                <div>
                    <div className="sm:ml-40 flex justify-center">
                        <Link
                            to="mailto:sandeshdeshmukh2704@gmail.com"
                            className="flex w-full text-xs lg:text-base items-center space-x-2 group font-regular"
                        >
                            <span className="">say<span className="text-sm lg:text-2xl animate-waving-hand">👋</span> —</span>
                            <div className="relative">
                                <h1 className="flex items-center text-gray-custom transition-colors">
                                    sandeshdeshmukh2704@gmail.com
                                </h1>
                                <div className="absolute h-[1px] bg-gray-custom bottom-0 left-0 w-0 group-hover:w-full transition-all duration-200" />
                            </div>
                        </Link>
                    </div>
                    <div className="font-regular flex flex-col items-center justify-center xl:text-[120px] lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[110px] lg:leading-[90px] sm:leading-[72px]  leading-[49px]  text-primary text-center font-semibold">
                        <h1 className="lg:mr-40 flex items-center gap-2">
                            {`LET'S`}
                            <motion.div
                                ref={ref}
                                className="h-1 sm:h-3 xl:h-4 bg-white "
                                animate={controls}
                                initial={{ width: '40rem' }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                            />
                            <span className="text-customGray">START</span>
                        </h1>
                        <h1 className="lg:mr-40">CREATING</h1>
                        <h1 className="lg:ml-40">TOGETHER</h1>
                    </div>
                </div>
            </section>

            <div className="py-4 lg:py-6">
                <div className="relative flex flex-col">
                    <div className='relative'>
                        <div className="relative lg:absolute w-full bottom-3 px-4 flex justify-center flex-wrap lg:justify-end flex-row items-start gap-x-9 gap-y-5">
                            {socialMedia.map((item, index) =>
                                <div key={index}>
                                    <Link
                                        to={item.url}
                                        target="_blank"
                                         rel="noopener noreferrer"
                                        className="flex items-center font-regular group hover:text-blue-500 transition"
                                    >
                                        <h1 className="text-base sm:text-lg">{item.title}</h1>
                                        <div className="pl-1 flex items-center cursor-pointer">
                                            <GoArrowUpRight className="text-xl lg:text-2xl  transition" />
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="absolute lg:hidden bottom-0 w-full h-[14px] border-r border-b border-l self-end rounded-b-lg rounded-bl-lg border-white" />
                    </div>

                    <div className="lg:absolute  -top-5 w-full justify-center flex gap-10 right-0 mt-4 lg:mt-0">
                        <Link to="mailto:sandeshdeshmukh2704@gmail.com" className="font-regular w-fit text-sm xl:text-lg flex gap-2 justify-center">
                            Built and Designed by <span className='text-customGray'>Sandesh Deshmukh</span>
                        </Link>
                        <div className="lg:flex lg:flex-1 hidden w-full h-[14px] border-r border-b border-l self-end rounded-b-lg rounded-bl-lg border-white" />
                    </div>
                </div>
            </div>
        </footer>
    );
}