'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { Container } from '@/components/Component';

gsap.registerPlugin(ScrollTrigger);

export const cardsData = [
  {
    id: '01',
    title: 'CUSTOM WEBSITES',
    desc: 'SEO-optimized, high-performance websites built with Next.js and Tailwind CSS.',
    stack: 'Next.js · React · Tailwind · SEO · Performance',
  },
  {
    id: '02',
    title: 'ERP & ADMIN PANELS',
    desc: 'Enterprise-grade ERP systems with multi-role dashboards.',
    stack: 'React · Redux Toolkit · JWT · Firebase',
  },
  {
    id: '03',
    title: 'E-COMMERCE PLATFORMS',
    desc: 'Scalable eCommerce platforms with optimized checkout flows.',
    stack: 'Next.js · Redux · REST APIs · Payments',
  },
  {
    id: '04',
    title: 'DASHBOARDS & CMS',
    desc: 'Clean, data-driven dashboards and CMS tools.',
    stack: 'React · Charts · REST APIs',
  },
  {
    id: '05',
    title: 'REAL-TIME APPLICATIONS',
    desc: 'Applications with live updates and synchronized data.',
    stack: 'Firebase · WebSockets',
  },
  {
    id: '06',
    title: 'INTERACTIVE UI & MOTION',
    desc: 'Smooth animations using GSAP & Framer Motion.',
    stack: 'GSAP · Framer Motion',
  },
];

export default function WhatIBuild() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!sectionRef.current || !containerRef.current) return;

  //   gsap.ticker.lagSmoothing(0);

  //   const cards = gsap.utils.toArray<HTMLElement>(
  //     containerRef.current.querySelectorAll('.card')
  //   );

  //   const container = containerRef.current;

  //   const setInitialState = () => {
  //     cards.forEach((card, index) => {
  //       if (index === 0) {
  //         gsap.set(card, { x: 0, y: 40, opacity: 1 });
  //       } else {
  //         gsap.set(card, {
  //           x: 0,
  //           y: window.innerHeight,
  //           opacity: 0,
  //         });
  //       }
  //     });
  //   };

  //   setInitialState();

  //   const totalCards = cards.length;
  //   const totalHeight =
  //     window.innerHeight * (2 + (totalCards - 1) * 0.3);

  //   const trigger = ScrollTrigger.create({
  //     trigger: sectionRef.current,
  //     start: 'top top',
  //     end: `+=${totalHeight}`,
  //     pin: true,
  //     scrub: 1,

  //     onUpdate: (self) => {
  //       const progress = self.progress;
  //       const progressPerCard = 1 / totalCards;

  //       const TOP_GAP = 40;
  //       const VERTICAL_STACK_OFFSET = 28;

  //       const containerWidth = container.offsetWidth;
  //       const RIGHT_SAFE_GAP = containerWidth * 0.25;

  //       const cardWidth = cards[0].offsetWidth;
  //       const STACK_END_X =
  //         containerWidth - RIGHT_SAFE_GAP - cardWidth;

  //       const HORIZONTAL_GAP =
  //         totalCards > 1
  //           ? STACK_END_X / (totalCards - 1)
  //           : 0;

  //       cards.forEach((card, index) => {
  //         if (index === 0) {
  //           gsap.set(card, {
  //             x: 0,
  //             y: TOP_GAP,
  //             opacity: 1,
  //           });
  //           return;
  //         }

  //         const cardStart = index * progressPerCard;
  //         let cardProgress =
  //           (progress - cardStart) / progressPerCard;
  //         cardProgress = gsap.utils.clamp(0, 1, cardProgress);

  //         const targetX = index * HORIZONTAL_GAP;

  //         const maxYPosition =
  //           TOP_GAP + index * VERTICAL_STACK_OFFSET;

  //         const y =
  //           cardProgress === 1
  //             ? maxYPosition
  //             : window.innerHeight -
  //             cardProgress *
  //             (window.innerHeight - maxYPosition);

  //         gsap.set(card, {
  //           x: cardProgress * targetX,
  //           y,
  //           opacity: cardProgress,
  //         });
  //       });
  //     },
  //   });

  //   const onResize = () => {
  //     setInitialState();
  //     ScrollTrigger.refresh();
  //   };

  //   window.addEventListener('resize', onResize);

  //   return () => {
  //     trigger.kill();
  //     window.removeEventListener('resize', onResize);
  //   };
  // }, []);

useEffect(() => {
  if (!sectionRef.current || !containerRef.current) return;

  gsap.ticker.lagSmoothing(0);

  const cards = gsap.utils.toArray<HTMLElement>(
    containerRef.current.querySelectorAll('.card')
  );

  const container = containerRef.current;

  const getSafeHeight = () => Math.max(window.innerHeight, 700);

  const setInitialState = () => {
    const SAFE_HEIGHT = getSafeHeight();

    cards.forEach((card, index) => {
      if (index === 0) {
        gsap.set(card, { x: 0, y: 40, opacity: 1 });
      } else {
        gsap.set(card, {
          x: 0,
          y: SAFE_HEIGHT,
          opacity: 0,
        });
      }
    });
  };

  setInitialState();

  const totalCards = cards.length;
  const totalHeight =
    getSafeHeight() * (2 + (totalCards - 1) * 0.3);

  const trigger = ScrollTrigger.create({
    trigger: sectionRef.current,
    start: 'top top',
    end: `+=${totalHeight}`,
    pin: true,
    scrub: 1,

    onUpdate: (self) => {
      const SAFE_HEIGHT = getSafeHeight();
      const progress = self.progress;
      const progressPerCard = 1 / totalCards;

      const TOP_GAP = 40;
      const VERTICAL_STACK_OFFSET = 28;

      const containerWidth = container.offsetWidth;
      const RIGHT_SAFE_GAP = containerWidth * 0.34;

      const cardWidth = cards[0].offsetWidth;
      const STACK_END_X =
        containerWidth - RIGHT_SAFE_GAP - cardWidth;

      const HORIZONTAL_GAP =
        totalCards > 1
          ? STACK_END_X / (totalCards - 1)
          : 0;

      cards.forEach((card, index) => {
        if (index === 0) {
          gsap.set(card, {
            x: 0,
            y: TOP_GAP,
            opacity: 1,
          });
          return;
        }

        const cardStart = index * progressPerCard;
        let cardProgress =
          (progress - cardStart) / progressPerCard;
        cardProgress = gsap.utils.clamp(0, 1, cardProgress);

        const targetX = index * HORIZONTAL_GAP;

        const maxYPosition =
          TOP_GAP + index * VERTICAL_STACK_OFFSET;

        const y =
          cardProgress === 1
            ? maxYPosition
            : SAFE_HEIGHT -
              cardProgress *
              (SAFE_HEIGHT - maxYPosition);

        gsap.set(card, {
          x: cardProgress * targetX,
          y,
          opacity: cardProgress,
        });
      });
    },
  });

  const onResize = () => {
    setInitialState();
    ScrollTrigger.refresh();
  };

  window.addEventListener('resize', onResize);

  return () => {
    trigger.kill();
    window.removeEventListener('resize', onResize);
  };
}, []);



  return (
    <>

    {/* dexstop view */}
  <section
  ref={sectionRef}
  className="relative hidden pt-16  h-[90vh] xl:h-[90vh] lg:flex w-full "
>

        <Container
          size="default"
        className="relative  "
        >

      <div 
          ref={containerRef}
        className="relative  "
        >
          <div className="relative lg:absolute lg:top-0 lg:right-0 pt-16 text-right max-w-[520px] mx-auto lg:mx-0">

            <div className="flex flex-col lg:flex-row items-start lg:items-center mb-12 justify-between gap-6 px-4 sm:px-0">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-end gap-3 mb-4"
                >
                  <motion.div
                    className="h-px w-12 bg-pink-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '3rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <span className="text-sm font-semibold tracking-wider text-pink-500 uppercase">
                    My Expertise
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-5xl flex flex-col md:flex-row gap-2 md:text-6xl justify-end font-bold text-white mb-4"
                >
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    WHAT I
                  </motion.span>
                  <motion.span
                    className="text-pink-500"
                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    BUILD
                  </motion.span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-lg text-gray-300 text-right max-w-2xl"
                >
                  High-impact digital products crafted with performance, scalability, and adaptability.
                  From websites to dashboards, eCommerce to real-time applications, my skills apply
                  across domains including AI, Blockchain, SaaS, and enterprise systems.
                </motion.p>
              </div>
            </div>
          </div>

          {cardsData.map((card) => (
            <div
              key={card.id}
             className="card absolute top-0 left-0
h-[clamp(360px,50vh,520px)]
w-[clamp(320px,65%,460px)]

border border-white/10
bg-gradient-to-br from-[#111] to-[#0b0b0b]
shadow-[0_20px_60px_rgba(0,0,0,0.25)]
p-8 flex flex-col justify-between"

            >
              <div>
                <div className="text-6xl font-bold text-pink-500">
                  {card.id}
                </div>

                <h3 className="mt-6 text-3xl font-bold text-gray-200">
                  {card.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {card.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-500 uppercase">
                  {card.stack}
                </p>
              </div>
            </div>
          ))}

          </div>
        </Container>
      </section> 




 
 {/* mobile view */}
      <section className="relative flex  lg:hidden  w-full overflow-visible md:overflow-hidden"      >
        {/* Desktop + Tablet */}
        <Container
          size="default"
          className="relative h-full overflow-hidden"
        >
          <div className="relative  text-right mb-12">

            
                {/* Animated heading */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-end gap-3 mb-4"
                >
                  <motion.div
                    className="h-px w-12 bg-pink-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '3rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <span className="text-sm font-semibold tracking-wider text-pink-500 uppercase">
                    My Expertise
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-5xl flex flex-col md:flex-row gap-2 md:text-6xl justify-end font-bold text-white mb-4"
                >
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    WHAT I
                  </motion.span>
                  <motion.span
                    className="text-pink-500"
                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    BUILD
                  </motion.span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-lg text-gray-300 text-right"
                >
                  High-impact digital products crafted with performance, scalability, and adaptability.
                  From websites to dashboards, eCommerce to real-time applications, my skills apply
                  across domains including AI, Blockchain, SaaS, and enterprise systems.
                </motion.p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>


            {cardsData.map((card) => (
              <div
                key={card.id}
                className="
              h-[400px]
              w-full 
              border border-white/10
              bg-gradient-to-br from-[#111] to-[#0b0b0b]
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="text-6xl font-bold text-pink-500">
                    {card.id}
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-gray-200">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-gray-400">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500 uppercase">
                    {card.stack}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

