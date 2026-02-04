"use client";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import SelectedWork from "@/section/SelectedWork";
import ValueStatementSection from "@/section/ValueStatementSection";
import WhatIBuild from "@/section/WhatIBuild";
import Hero from "@/section/Hero";
import AboutSection from "@/section/AboutSection";
import FloatingNav from "@/components/FloatingNav";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);






    return (
        <>
            <div className="">
                <Hero isAnimationComplete={isAnimationComplete} setIsAnimationComplete={setIsAnimationComplete} />
                {isAnimationComplete && (
                    <div>
                        <ValueStatementSection />
                        <div className="my-40" />
                        <SelectedWork />
                        <div className="my-40" />
                        <AboutSection />
                        <div className="my-28" />
                        <WhatIBuild />
                        <Footer />
                        <FloatingNav />
                    </div>
                )}

            </div>
        </>
    );
}
