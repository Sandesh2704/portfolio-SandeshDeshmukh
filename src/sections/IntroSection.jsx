'use client';

import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase1 = "INNOVATIVE frontend and full-stack DEVELOPER crafting elegant modern designs with seamless user experiences. Blending creativity and technical excellence, building digital solutions that TRANSFORM the web one project at a time.";

const phrase2 = "PASSIONATE about creating INTUITIVE interfaces and robust backend systems. Leveraging CUTTING-EDGE technologies to solve complex problems and DELIVER exceptional results. Committed to continuous learning and staying ahead of INDUSTRY TRENDS.";

export default function IntroSection() {
    let refs = useRef([]);
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimation();
    }, []);

    const createAnimation = () => {
        gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: `top 60%`,
                end: `+=${window.innerHeight / 1.5}`,
            },
            opacity: 1,
            ease: "none",
            stagger: 0.1,
        });
    };

    const splitWords = (phrase, highlights = []) => {
        let body = [];
        phrase.split(" ").forEach((word, i) => {
            const letters = splitLetters(word, highlights.includes(word.toUpperCase()));
            body.push(
                <p key={word + "_" + i} className={` lg:leading-[1.25] md:leading-[40px] leading-[34px]  lg:text-[38px] md:text-3xl text-[22px] font-[300] m-0 mr-3 md:mr-5 ${i === 0 ? "md:indent-40 lg:indent-56" : ""}`}>
                    {letters}
                </p>
            );
        });
        return body;
    };

    const splitLetters = (word, isHighlighted) => {
        let letters = [];
        word.split("").forEach((letter, i) => {
            letters.push(
                <span
                    key={letter + "_" + i}
                    ref={(el) => {
                        refs.current.push(el);
                    }}
                    className={`opacity-20 ${isHighlighted ? 'font-bold font-regular text-white' : ''}`}
                >
                    {letter}
                </span>
            );
        });
        return letters;
    };

    return (
        <main
            ref={container}
            className="flex flex-col gap-y-20 justify-center mt-24 py-20 text-gray-300"
        >
            <div className="flex flex-wrap max-w-[1152px] mx-auto ">
                {splitWords(phrase1, ["INNOVATIVE", "TRANSFORM", "DEVELOPER"])}
            </div>

            <div className="flex flex-wrap max-w-[1152px] mx-auto ">
                {splitWords(phrase2, ["PASSIONATE", "INTUITIVE", "CUTTING-EDGE", "DELIVER", "INDUSTRY", "TRENDS."])}
            </div>
        </main>
    );
}



