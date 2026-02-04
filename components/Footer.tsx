'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Link from 'next/link';
import { ArrowUpRight, } from 'lucide-react';
import { Container } from './Component';
import siteConfig from '@/config/site.config';




export default function Footer() {
   const { social } = siteConfig;
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
        <footer id="footer">
                          <Container>

          <section className="w-full py-32 flex justify-center items-center relative overflow-hidden">
  <div>

    {/* Email CTA (NOT a heading) */}
    <div className="sm:ml-40 flex justify-center">
      <Link
        href="mailto:sandeshdeshmukh2704@gmail.com"
        className="flex w-full text-xs lg:text-base items-center space-x-2 group font-regular"
      >
        <span className="flex items-center">
          say
          <span className="text-sm lg:text-2xl animate-waving-hand">👋</span> —
        </span>

        <div className="relative flex items-center">
          <span className="flex items-center text-gray-custom group-hover:text-pink-500 transition-colors">
            sandeshdeshmukh2704@gmail.com
          </span>
          <div className="absolute h-[1px] bg-pink-500 bottom-0 left-0 w-0 group-hover:w-full transition-all duration-200" />
        </div>
      </Link>
    </div>

    {/* MAIN H1 (ONLY ONE) */}
    <h3
      className="font-regular flex flex-col items-center justify-center text-white
      xl:text-[120px] lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px]
      xl:leading-[110px] lg:leading-[90px] sm:leading-[72px] leading-[49px]
      text-center font-semibold"
    >
      {/* LET’S START */}
      <div className="lg:mr-40 flex items-center gap-2">
        <span>{`LET'S`}</span>

        <motion.div
          ref={ref}
          className="h-1 sm:h-3 xl:h-4 bg-white"
          animate={controls}
          initial={{ width: "40rem" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <span className="text-pink-500">START</span>
      </div>

      {/* CREATING */}
      <div className="lg:mr-40">CREATING</div>

      {/* TOGETHER */}
      <div className="lg:ml-40">TOGETHER</div>
    </h3>

  </div>
</section>


            <div className="py-12">
                <div className="relative flex flex-col">
                    <div className='relative'>
                        <div className="relative lg:absolute w-full bottom-3 px-4 flex justify-center flex-wrap lg:justify-end flex-row items-start gap-x-9 gap-y-5">
                            {social.map((item, index) =>
                                <div key={index}>
                                    <Link
                                        href={item.url}
                                        target="_blank"
                                         rel="noopener noreferrer"
                                        className="flex items-center text-gray-300  font-regular group hover:text-pink-500 transition"
                                    >
                                        <h3 className="text-base sm:text-lg">{item.title}</h3>
                                        <div className="pl-1 flex items-center cursor-pointer">
                                            <ArrowUpRight className="text-xl lg:text-2xl  transition" />
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="absolute lg:hidden bottom-0 w-full h-[14px] border-r border-b border-l self-end rounded-b-lg rounded-bl-lg border-gray-700" />
                    </div>

                    <div className="lg:absolute  -top-5 w-full justify-center flex gap-10 right-0 mt-4 lg:mt-0">
                        <Link href="mailto:sandeshdeshmukh2704@gmail.com" className="font-regular text-gray-300 w-fit text-sm xl:text-lg flex gap-2 justify-center">
                            Built and Designed by <span className='text-pink-500'>Sandesh Deshmukh</span>
                        </Link>
                        <div className="lg:flex lg:flex-1 hidden w-full h-[14px] border-r border-b border-l self-end rounded-b-lg rounded-bl-lg border-gray-300" />
                    </div>
                </div>
            </div>
            </Container>
        </footer>
    );
}