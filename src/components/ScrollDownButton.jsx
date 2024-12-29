import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GoArrowDown } from "react-icons/go";

export default function ScrollDownButton() {
    const buttonRef = useRef(null);
    const outerBorderRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const outerBorder = outerBorderRef.current;

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * 2,
                y: y * 2,
                duration: 0.3,
                ease: "power2.out",
            });

            gsap.to(outerBorder, {
                x: x * 3,
                y: y * 3,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
            gsap.to(outerBorder, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className="absolute bottom-4 flex justify-center items-center">
            {/* Outer Border */}
            <div
                ref={outerBorderRef}
                className="absolute w-20 h-20 rounded-full border-2 border-white transition-transform pointer-events-none"
            ></div>

            {/* Button */}
            <div
                ref={buttonRef}
                className="relative w-20 h-20 bg-transparent rounded-full border-2 border-white flex items-center justify-center"
            >
                <span className="text-white text-3xl"><GoArrowDown /></span>
            </div>
        </div>
    );
}