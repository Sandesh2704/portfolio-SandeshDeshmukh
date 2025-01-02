
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import ProjectGallery from '../sections/ProjectGallery';
import IntroSection from '../sections/IntroSection';
import SkillsGallery from '../sections/SkillsGallery';
import Footer from '../components/Footer.jsx';
import NavBar from "../components/NavBar.jsx";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

export default function Home({ isAnimationComplete, setIsAnimationComplete }) {
    const src = "https://lottie.host/4cbbb981-3451-4809-a9d3-b3fc2e347c06/KhsV7nXpH6.lottie"
    const [hiddenLetters, setHiddenLetters] = useState([]);



    useEffect(() => {
        // Check if animation has already been completed before


        const letters = document.querySelectorAll(".letter");
        const hiddenSet = new Set(); // Using Set to avoid duplicate entries
        const timeline = gsap.timeline();
        // Use GSAP to animate letters and track completion
        timeline
            .to(
                letters,
                {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.6,
                    stagger: 0.1,
                    onUpdate: () => {
                        // Dynamically update hidden letters
                        letters.forEach((letter) => {
                            const content = letter.textContent.trim();
                            if (letter.style.opacity === "0" && !hiddenSet.has(content)) {
                                hiddenSet.add(content);
                                setHiddenLetters(Array.from(hiddenSet));
                            }
                        });
                    },
                },
                "+=1" // Add delay before reverse animation starts
            )
            .to(".gif", {
                opacity: "100",
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                    // Mark animation as complete
                    setIsAnimationComplete(true);
                    // Store in localStorage to skip animation next time
                },
            })
            .to(".nav", {
                opacity: "100",
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                    setIsAnimationComplete(true);

                },
            })
            .play();
    }, []);


    const [dashWidth, setDashWidth] = useState("20rem"); // Default to desktop width

    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setDashWidth("1rem"); // Mobile width
            } else if (width >= 640 && width < 1024) {
                setDashWidth("5rem"); // Tablet width
            } else {
                setDashWidth("9rem"); // Desktop width
            }
        };

        window.addEventListener("resize", updateWidth);
        updateWidth(); // Set initial width

        return () => window.removeEventListener("resize", updateWidth);
    }, []);


    return (
        <>
            <div className="home-body px-4 md:px-7 xl:px-10">
                <div className="relative z-0 h-screen w-full overflow-hidden p-8">
                    {/* Scattered letters */}
                    <div className="absolute inset-0">
                        {/* First Layer */}
                        <span className="letter absolute left-[5%] top-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-white transform rotate-12">I</span>
                        <span className="letter absolute left-[25%] bottom-[15%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-white transform -rotate-6">N</span>
                        <span className="letter absolute right-[55%] top-[20%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-white transform rotate-3">N</span>
                        <span className="letter absolute left-[65%] top-[50%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-white transform -rotate-9">O</span>
                        <span className="letter absolute right-[25%] top-[10%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-white transform rotate-6">V</span>
                        <span className="letter absolute left-[15%] top-[20%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-white transform -rotate-3">A</span>
                        <span className="letter absolute right-[5%] bottom-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-white transform rotate-12">T</span>

                        {/* Hidden letters initially */}
                        <span className="letter hidden absolute left-[15%] top-[20%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-black transform -rotate-3">M</span>
                        <span className="letter hidden absolute right-[5%] bottom-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-black transform rotate-12">K</span>
                        <span className="letter hidden absolute right-[5%] bottom-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-black transform rotate-12">H</span>

                        {/* Background Layer (Gray) */}
                        <span className="letter absolute right-[8%] top-[40%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-gray-300 transform -rotate-12">I</span>
                        <span className="letter absolute left-[30%] top-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-gray-300 transform rotate-6">V</span>
                        <span className="letter absolute right-[40%] top-[50%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-gray-300 transform -rotate-3">E</span>
                        <span className="letter absolute right-[12%] top-[15%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-gray-300 transform rotate-9">D</span>
                        <span className="letter absolute left-[15%] top-[55%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-blue-300 transform -rotate-6">E</span>
                        <span className="letter absolute left-[5%] bottom-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-gray-300 transform rotate-3">V</span>

                        {/* Middle Layer (Dark Gray) */}
                        <span className="letter absolute left-[5%] top-[30%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform -rotate-3">E</span>
                        <span className="letter absolute left-[40%] top-[70%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform rotate-12">L</span>
                        <span className="letter absolute right-[35%] bottom-[7%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform -rotate-6">O</span>
                        <span className="letter absolute right-[20%] top-[75%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform rotate-9">P</span>
                        <span className="letter absolute right-[18%] bottom-[40%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform -rotate-3">E</span>
                        <span className="letter absolute right-[50%] top-[40%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform rotate-6">R</span>

                        {/* Fourth Layer (Teal) */}
                        <span className="letter absolute left-[5%] bottom-[30%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-teal-400 transform rotate-6">D</span>
                        <span className="letter absolute right-[5%] top-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-teal-400 transform -rotate-6">E</span>
                        <span className="letter absolute left-[25%] top-[40%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-teal-400 transform rotate-9">S</span>
                        <span className="letter absolute left-[17%] bottom-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-teal-400 transform -rotate-6">I</span>
                        <span className="letter absolute right-[35%] top-[25%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-teal-400 transform rotate-3">G</span>
                        <span className="letter absolute right-[45%] bottom-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-teal-400 transform -rotate-9">N</span>
                        <span className="letter absolute right-[45%] top-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-teal-400 transform -rotate-9">U</span>

                        {isAnimationComplete && (<NavBar />)}

                        <section className="absolute z-40  w-full pt-12 md:pt-20 xl:pt-24 flex flex-col justify-center items-center h-screen  ">
                            <DotLottieReact
                                src={src || null}
                                loop
                                autoplay
                                className="gif opacity-0 relative  mb-12 xl:mb-0 sm:hidden xl:flex lg:absolute w-48 lg:w-[320px] sm:bottom-0 sm:-left-9"
                                width={100}
                                height={100}
                            />
                            <div>
                                <div className="ml-10 sm:ml-40 text-xs lg:text-base flex justify-start font-regular text-white">
                                    {"SANDESH  DESMUKH".split("").map((char, index) => (
                                        <div
                                            key={index}
                                            className={`${hiddenLetters.includes(char) ? "opacity-100" : "opacity-0 "}`} >
                                            {char === " " ? "\u00A0" : char}
                                        </div>
                                    ))}
                                </div>
                                <div className="font-regular flex flex-col items-center justify-center xl:text-[120px] lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[110px] lg:leading-[90px] sm:leading-[72px]  leading-[49px]  text-primary text-center font-semibold text-white">
                                    <h1 className="lg:mr-36 flex items-center gap-1 md:gap-2">
                                        {"DESIGN".split("").map((char, index) => (
                                            <div
                                                key={index}
                                                className={`${hiddenLetters.includes(char) ? "opacity-100" : "opacity-0 "}`} >
                                                {char === " " ? "\u00A0" : char}
                                            </div>
                                        ))}



                                        {isAnimationComplete && (<motion.div
                                            className="w-0 h-1 sm:h-3 xl:h-4 bg-white flex"
                                            animate={{ width: dashWidth }}
                                            initial={{ width: "0rem" }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                        />)}
                                        <span className="text-customGray flex">
                                            {"TUNED".split("").map((char, index) => (
                                                <div
                                                    key={index}
                                                    className={`${hiddenLetters.includes(char) ? "opacity-100" : "opacity-0 "}`} >
                                                    {char === " " ? "\u00A0" : char}
                                                </div>
                                            ))}
                                        </span>
                                    </h1>
                                    <h1 className="lg:mr-40 flex">
                                        {"INNOVATIVE".split("").map((char, index) => (
                                            <div
                                                key={index}
                                                className={`${hiddenLetters.includes(char) ? "opacity-100" : "opacity-0 "}`}  >
                                                {char === " " ? "\u00A0" : char}
                                            </div>
                                        ))}
                                    </h1>
                                    <h1 className="lg:ml-40 flex">
                                        {"DEVELOPER".split("").map((char, index) => (
                                            <div
                                                key={index}
                                                className={`${hiddenLetters.includes(char) ? "opacity-100" : "opacity-0 "}`}   >
                                                {char === " " ? "\u00A0" : char}
                                            </div>
                                        ))}
                                    </h1>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {isAnimationComplete && (
                    <div>
                        <IntroSection />
                        <SkillsGallery />
                        <ProjectGallery />
                        <Footer />
                    </div>
                )}
            </div>
        </>
    );
}
