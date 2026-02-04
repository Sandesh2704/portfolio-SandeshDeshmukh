
"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Container } from "@/components/Component";
import { TypeAnimation } from "react-type-animation";

interface HeroProps {
  isAnimationComplete: boolean;
  setIsAnimationComplete: (value: boolean) => void;
}

export default function Hero({ isAnimationComplete, setIsAnimationComplete }: HeroProps) {

  const [hiddenLetters, setHiddenLetters] = useState<string[]>([]);


  const imagesCol1 = [
    "/hero-section/hero-1.webp",
    "/hero-section/hero-2.webp",
    "/hero-section/hero-3.webp",
    "/hero-section/hero-4.webp",
    "/hero-section/hero-5.webp",
  ];

  const imagesCol2 = [
    "/hero-section/hero-6.webp",
    "/hero-section/hero-7.webp",
    "/hero-section/hero-8.webp",
    "/hero-section/hero-9.webp",
    "/hero-section/hero-10.webp",

  ];



  useEffect(() => {
    // Check if animation has already been completed before


    const letters = document.querySelectorAll<HTMLElement>(".letter");
    const hiddenSet = new Set<string>(); // Use Set<string> to track letters
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
  }, [setIsAnimationComplete]);


  const [dashWidth, setDashWidth] = useState("20rem"); // Default to desktop width

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDashWidth("0.7rem"); // Mobile width
      } else if (width >= 640 && width < 1024) {
        setDashWidth("5rem"); // Tablet width
      } else {
        setDashWidth("8rem"); // Desktop width
      }
    };

    window.addEventListener("resize", updateWidth);
    updateWidth(); // Set initial width

    return () => window.removeEventListener("resize", updateWidth);
  }, []);






  return (
    <div className="relative z-0  h-[80vh] md:h-[60vh] xl:h-screen w-full overflow-hidden">


      <Container className="relative h-full">

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
          <span className="letter absolute left-[15%] top-[55%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-pink-300 transform -rotate-6">E</span>
          <span className="letter absolute left-[5%] bottom-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow font-bold text-gray-300 transform rotate-3">V</span>

          {/* Middle Layer (Dark Gray) */}
          <span className="letter absolute left-[5%] top-[30%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform -rotate-3">E</span>
          <span className="letter absolute left-[40%] top-[70%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform rotate-12">L</span>
          <span className="letter absolute right-[35%] bottom-[7%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform -rotate-6">O</span>
          <span className="letter absolute right-[20%] top-[75%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform rotate-9">P</span>
          <span className="letter absolute right-[18%] bottom-[40%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform -rotate-3">E</span>
          <span className="letter absolute right-[50%] top-[40%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-gray-600 transform rotate-6">R</span>

          {/* Fourth Layer (Teal) */}
          <span className="letter absolute left-[5%] bottom-[30%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-pink-400 transform rotate-6">D</span>
          <span className="letter absolute right-[5%] top-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-pink-400 transform -rotate-6">E</span>
          <span className="letter absolute left-[25%] top-[40%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-pink-400 transform rotate-9">S</span>
          <span className="letter absolute left-[17%] bottom-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-pink-400 transform -rotate-6">I</span>
          <span className="letter absolute right-[35%] top-[25%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-pink-400 transform rotate-3">G</span>
          <span className="letter absolute right-[45%] bottom-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-pink-400 transform -rotate-9">N</span>
          <span className="letter absolute right-[45%] top-[5%] text-4xl  md:text-5xl xl:text-9xl z-10 text-shadow  font-bold text-pink-400 transform -rotate-9">U</span>

          {isAnimationComplete && (<NavBar />)}
          {isAnimationComplete && (
            <>




              <div className="absolute inset-0 flex w-full  max-w-[30vh] sm:max-w-[30vh] xl:max-w-2xl  gap-3 xl:gap-6 z-0 pointer-events-none overflow-hidden pl-4 md:pl-6 xl:pl-0">

                {/* Column 1 */}
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="flex flex-col gap-3 xl:gap-6 flex-1"
                >
                  {[...imagesCol1, ...imagesCol1].map((src, i) => (
                    <div
                      key={i}
                      className="relative w-full h-20 md:h-28 xl:h-48 rounded-xl border border-white/10 overflow-hidden shrink-0"
                    >
                      <Image
                        src={src}
                        alt="Decorative image"
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover grayscale contrast-110 brightness-90"
                      />
                      <div className="absolute inset-0 bg-black/70" />
                    </div>
                  ))}
                </motion.div>

                {/* Column 2 */}
                <motion.div
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  className="flex flex-col gap-3 xl:gap-6 flex-1"
                >
                  {[...imagesCol2, ...imagesCol2].map((src, i) => (
                    <div
                      key={i}
                      className="relative w-full h-20 md:h-28 xl:h-48 rounded-xl border border-white/10 overflow-hidden shrink-0"
                    >
                      <Image
                        src={src}
                        alt="Decorative image"
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover grayscale contrast-110 brightness-90"
                      />
                      <div className="absolute inset-0 bg-black/70" />
                    </div>
                  ))}
                </motion.div>

              </div>



            </>




          )}
          <section className="relative z-40 w-full flex flex-col justify-center items-center min-h-full">











            <div>
              <div className="ml-10 sm:ml-40 text-xs lg:text-base text-bold flex justify-start font-regular text-pink-500">
                {"SANDESH  DESMUKH".split("").map((char: string, index: number) => (
                  <div
                    key={index}
                    className={`${hiddenLetters.includes(char) ? "opacity-100" : "opacity-0 "}`} >
                    {char === " " ? "\u00A0" : char}
                  </div>
                ))}
              </div>
              <h2 className="font-regular flex flex-col items-center justify-center    xl:text-[120px] lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px]   xl:leading-[110px] lg:leading-[90px] sm:leading-[72px] leading-[49px]    text-center font-semibold text-white">

                {/* DESIGN — TUNED */}
                <div className="lg:mr-36 flex items-center gap-1 md:gap-2">
                  {"DESIGN".split("").map((char, index) => (
                    <span
                      key={index}
                      className={hiddenLetters.includes(char) ? "opacity-100" : "opacity-0"}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}

                  {isAnimationComplete && (
                    <motion.div
                      className="w-0 h-1 sm:h-3 xl:h-4 bg-white"
                      animate={{ width: dashWidth }}
                      initial={{ width: "0rem" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  )}

                  <span className="text-pink-500 flex">
                    {"TUNED".split("").map((char, index) => (
                      <span
                        key={index}
                        className={hiddenLetters.includes(char) ? "opacity-100" : "opacity-0"}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </div>

                {/* INNOVATIVE */}
                <div className="lg:mr-40 flex">
                  {"INNOVATIVE".split("").map((char, index) => (
                    <span
                      key={index}
                      className={hiddenLetters.includes(char) ? "opacity-100" : "opacity-0"}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>

                {/* DEVELOPER */}
                <div className="lg:ml-40 flex">
                  {"DEVELOPER".split("").map((char, index) => (
                    <span
                      key={index}
                      className={hiddenLetters.includes(char) ? "opacity-100" : "opacity-0"}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>

              </h2>

<div
  className={`font-bold mr-20 sm:mr-60 text-xs lg:text-base flex justify-end transition-opacity duration-500 ${
    hiddenLetters.includes("D") ? "opacity-100" : "opacity-0"
  }`}
>
  <TypeAnimation
    sequence={[
      "Web Developer",
      1000,
      "MERN Stack Developer",
      1000,
      "Full Stack Developer",
      1000,
      "UI/UX Developer",
      1000,
    ]}
    wrapper="span"
    speed={30}
    repeat={Infinity}
    className="intero text-base sm:text-lg text-pink-500 lg:text-lg"
  />
</div>





































            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}
