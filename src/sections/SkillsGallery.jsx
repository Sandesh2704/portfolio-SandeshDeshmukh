// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SectionTitle from "../components/SectionTitle";
// import  {skillsData} from "../deta/deta" 
// gsap.registerPlugin(ScrollTrigger);

// export default function SkillsGallery() {
//   const [expandedIndex, setExpandedIndex] = useState(0);
//   const sectionRef = useRef(null);
//   const categoryRefs = useRef([]);



//   const isMobile = window.innerWidth <= 850;

//   useEffect(() => {
//     // Only enable GSAP on devices larger than 768px (tablet and up)
//     if (window.innerWidth > 850) {
//       const section = sectionRef.current;
//       const categories = categoryRefs.current;

//       if (section && categories.length) {
//         gsap.to(categories, {
//           scrollTrigger: {
//             trigger: section,
//             start: "top top", // Pin starts when the section hits the top of the viewport
//             pin: true,
//             end: "+=1500", // Adjusted the scroll distance
//             scrub: 1, // Smooth scrolling effect
//             markers: false, // Enable markers for debugging
//             onUpdate: (self) => {
//               const progress = self.progress;
//               const index = Math.min(
//                 Math.floor(progress * categories.length),
//                 categories.length - 1
//               );
//               setExpandedIndex(index);
//             },
//           },
//         });
//       }
//     }
//   }, []);

//   const handleClick = (index) => {
//     if (expandedIndex === index && index === skillsData.length - 1) {
//       setExpandedIndex(0);
//     } else {
//       setExpandedIndex(expandedIndex === index ? null : index);
//     }
//   };

//   const skillsVariant = {
//     hidden: { opacity: 0, y: 10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.3 },
//     }),
//   };



//   return (
//     <section ref={sectionRef} className={`py-20 ${isMobile ? "" : "mt-7 xl:mt-10"} `}>
//       <SectionTitle title="SKILLS" text="end" />
//       <div
//         className={`w-full mt-4 flex ${isMobile ? "flex-col h-fit gap-y-10" : "md:h-[28rem] md:flex-row gap-1"} `}
//       >
//         {skillsData.map((category, index) => (
//           <div
//             key={index}
//             ref={(el) => (categoryRefs.current[index] = el)}
//             className={`relative h-full rounded-2xl overflow-hidden border border-gray-600 bg-gradient-to-b from-gray-900 to-transparent ${expandedIndex === index || isMobile ? "w-full" : "w-36"} transition-all duration-500 `}
//             onClick={!isMobile ? () => handleClick(index) : undefined} // Disable click on mobile
//           >

//             <motion.div
//               className="mb-4"
//               initial={false}
//               animate={{
//                 height: expandedIndex === index ? "fit-content" : "100%",
//                 opacity: 1,
//               }}
//               transition={{ duration: 0.5 }}
//             >


//               <h1
//                 className={`${isMobile
//                   ? "py-4 flex text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-[2.5rem] md:leading-[3.5rem] xl:leading-[5.5rem]"
//                   : expandedIndex === index
//                     ? "flex text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-[2.5rem] md:leading-[3.5rem] xl:leading-[5.5rem]"
//                     : "hidden"
//                   } text-shadow px-4 text-gray-500/80 font-bold pointer-events-none`}
//               >
//                 {category.title}
//               </h1>

//               {!isMobile && expandedIndex !== index && (
//                 <h1
//                   className="flex text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 leading-none whitespace-nowrap"
//                 >
//                   {category.title}
//                 </h1>
//               )}
//             </motion.div>


//             {/* Skills Grid */}
//             <motion.div
//               className="w-full h-full"
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: { opacity: 1, transition: { duration: 0.5 } },
//               }}
//             >
//               <div className="flex flex-wrap justify-center px-6 pb-6 gap-y-6 gap-5">
//                 {category.skills.map((skill, i) => (
//                   <motion.div
//                     key={skill.name}
//                     className={`flex w-20 lg:w-28 xl:w-36 h-20 lg:h-28 xl:h-36 flex-col text-center items-center justify-center transform hover:scale-110 transition-transform duration-300 ${isMobile ? "text-3xl lg:text-[4.5rem]" : "text-2xl lg:text-3xl xl:text-[4.5rem]"}`}
//                     custom={i}
//                     variants={skillsVariant}
//                     initial="hidden"
//                     animate="visible" >
//                     <div className="text-gray-400">{skill.icon}</div>
//                     <span className={`${isMobile ? "text-sm lg:text-base mt-3 lg:mt-5" : "text-base mt-5"}`}>
//                       {skill.name}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";
import { skillsData } from "../deta/otherdeta";
gsap.registerPlugin(ScrollTrigger);

export default function SkillsGallery() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);
  const sectionWrapperRef = useRef(null);

  const isMobile = window.innerWidth <= 850;

  useEffect(() => {
    // Only enable GSAP on devices larger than 768px (tablet and up)
    if (window.innerWidth > 850) {
      const section = sectionRef.current;
      const categories = categoryRefs.current;
      const sectionWrapper = sectionWrapperRef.current;

      if (section && categories.length) {
        gsap.to(categories, {
          scrollTrigger: {
            trigger: section,
            start: "top top", // Pin starts when the section hits the top of the viewport
            pin: true,
            end: "+=1500", // Adjust the scroll distance (increased for smoother scrolling)
            scrub: 1, // Smooth scrolling effect
            markers: false, // Enable markers for debugging
            onUpdate: (self) => {
              const progress = self.progress;
              const index = Math.min(
                Math.floor(progress * categories.length),
                categories.length - 1
              );
              setExpandedIndex(index);
            },
          },
        });
      }

      // Ensuring proper layout of the next sections after this
      gsap.fromTo(
        sectionWrapper,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: sectionWrapper,
            start: "top bottom", // Trigger when the section is in view
            end: "bottom top",
            scrub: 0.5, // Smooth effect when scrolling through sections
          },
        }
      );
    }

    // Cleanup ScrollTrigger when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleClick = (index) => {
    if (expandedIndex === index && index === skillsData.length - 1) {
      setExpandedIndex(0);
    } else {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  const skillsVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <section ref={sectionRef} className={`py-20 ${isMobile ? "" : "mt-7 xl:mt-10"}`}>
      <SectionTitle title="SKILLS" text="end" />
      <div
        className={`w-full mt-4 flex ${isMobile ? "flex-col h-fit gap-y-10" : "md:h-[28rem] md:flex-row gap-1"}`}
      >
        {skillsData.map((category, index) => (
          <div
            key={index}
            ref={(el) => (categoryRefs.current[index] = el)}
            className={`relative h-full rounded-2xl overflow-hidden border border-gray-600 bg-gradient-to-b from-gray-900 to-transparent ${expandedIndex === index || isMobile ? "w-full" : "w-36"} transition-all duration-500`}
            onClick={!isMobile ? () => handleClick(index) : undefined}
          >
            <motion.div
              className="mb-4"
              initial={false}
              animate={{
                height: expandedIndex === index ? "fit-content" : "100%",
                opacity: 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className={`${isMobile
                  ? "py-4 flex text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-[3rem] md:leading-[3.5rem] xl:leading-[5.5rem]"
                  : expandedIndex === index
                    ? "flex text-[3rem] lg:text-[4rem] xl:text-[5rem] md:leading-[3.5rem] xl:leading-[5.5rem]"
                    : "hidden"
                  } text-shadow px-4 text-gray-500/80 font-bold pointer-events-none`}
              >
                {category.title}
              </h1>

              {!isMobile && expandedIndex !== index && (
                <h1 className="flex text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 leading-none whitespace-nowrap">
                  {category.title}
                </h1>
              )}
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="w-full h-full"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <div className="flex flex-wrap justify-center px-6 pb-6 gap-y-16 md:gap-y-12 lg::gap-y-6 gap-x-7">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className={`flex w-16 sm:w-20 lg:w-28 xl:w-36 h-16 sm:h-20 lg:h-28 xl:h-36 flex-col text-center items-center justify-center transform hover:scale-110 transition-transform duration-300 ${isMobile ? "text-3xl lg:text-[4.5rem]" : "text-2xl lg:text-3xl xl:text-[4.5rem]"}`}
                    custom={i}
                    variants={skillsVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="text-gray-400">{skill.icon}</div>
                    <span className={`${isMobile ? "text-sm lg:text-base mt-3 lg:mt-5" : "text-base mt-5"}`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div> 


          </div>
        ))}
      </div>
    </section>
  );
}
