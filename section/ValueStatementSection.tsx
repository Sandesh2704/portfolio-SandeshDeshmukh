"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Container } from "@/components/Component";

gsap.registerPlugin(ScrollTrigger);

export default function ValueStatementSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    if (!section || !text || !image) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=140%",
          scrub: 1.2,
          pin: true,
        },
      });

      // Text animation
      tl.fromTo(
        text.children,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.3,
          ease: "power3.out",
        }
      );

      // Image animation
      tl.fromTo(
        image,
        {
          scale: 1.1,
          x: 100,
          opacity: 0
        },
        {
          scale: 1,
          x: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1.5
        },
        "-=1"
      );

    }, section);

    return () => ctx.revert();
  }, []);



  return (
    <section
      ref={sectionRef}
      className="relative h-fit w-full overflow-hidden"
    >
      {/* RIGHT SIDE IMAGE */}
      {/* ===== IMAGE ON RIGHT SIDE (YOUR ORIGINAL IMAGE) ===== */}
      <div
        ref={imageRef}
        className="absolute right-0 top-0 h-full w-[80%] xl:w-[50%] hidden lg:block z-10"
      >
        <div className="relative w-full h-full">
          <Image
            src="/about/about-3.webp"
            alt="Creative developer workspace"
            fill
            className="object-cover object-left"
            priority
            sizes="50vw"
          />

          {/* Gradients to blend image with global background */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#0a0a0a]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-pink-500/5" />

          {/* Edge glow effect */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-pink-500/30 to-transparent" />
        </div>
      </div>


      {/* TEXT CONTENT */}
      <Container className="relative z-10 h-full py-20 flex items-center">
        <div ref={textRef} className="max-w-[720px] space-y-7 xl:space-y-10">
          <h2 className="text-6xl md:text-7xl xl:text-8xl font-extrabold leading-18 md:leading-20 xl:leading-28 text-white">
            I don’t just
            <br />
            <span className="text-pink-500">design interfaces</span>
          </h2>

          <h3 className="text-4xl md:text-5xl font-semibold text-gray-200">
            I engineer systems
            <br />
            that scale, perform,
            <br />
            and convert.
          </h3>

          <p className="text-lg text-gray-400 leading-relaxed max-w-[560px]">
            From pixel-perfect UI to complex frontend architectures —
            my focus is building products that feel fast, intentional,
            and production-ready from day one.
          </p>

          <div className="flex gap-6 text-sm uppercase tracking-widest text-gray-500">
            <span>Design</span>
            <span>Engineering</span>
            <span>Performance</span>
          </div>
        </div>
      </Container>
    </section>
  );
}



