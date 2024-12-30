import Herosection from '../sections/Herosection'
import ProjectGallery from '../sections/ProjectGallery';
import IntroSection from '../sections/IntroSection';
import SkillsGallery from '../sections/SkillsGallery';




export default function Home() {
 

    return (
        <>



            <div className="">
                {/* <Herosection /> */}
                <IntroSection />
                {/* <SkillsGallery />
                <ProjectGallery /> */}
            </div>
        </>
    )
}


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const Home = () => {
//     const containerRef = useRef(null);

//     useEffect(() => {
//         const container = containerRef.current;
//         const letters = container.querySelectorAll(".letter");
//         const random = (min, max) => Math.random() * (max - min) + min;

//         // Animate each letter
//         letters.forEach((letter) => {
//             const duration = random(2, 4);
//             const startX = random(0, window.innerWidth - 50);
//             const endY = window.innerHeight - 100;
//             const letterHeight = parseInt(window.getComputedStyle(letter).fontSize);
//             const adjustedEndY = endY - letterHeight;
//             const zIndex = Math.floor(random(1, 10));

//             gsap.fromTo(
//                 letter,
//                 {
//                     y: -200,
//                     x: startX,
//                     rotation: random(-30, 30),
//                     zIndex: zIndex,
//                 },
//                 {
//                     y: adjustedEndY,
//                     rotation: 0,
//                     duration: duration,
//                     ease: "bounce.out",
//                 }
//             );
//         });
//     }, []);

//     return (
//         <div
//             ref={containerRef}
//             className="relative w-screen h-screen bg-gradient-to-br from-yellow-300 via-red-300 to-pink-400 overflow-hidden"
//         >
//             {/* Render letters */}
//             {"INNOVATIVE DEVELOPER DESIGN".split("").map((char, index) => (
//                 <div
//                     key={index}
//                     className="letter absolute text-[15rem] font-bold text-black"
//                 >
//                     {char === " " ? "\u00A0" : char}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Home;




// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const Home = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const letters = container.querySelectorAll(".letter");

//     // Helper function for random values
//     const random = (min, max) => Math.random() * (max - min) + min;

//     // Animate each letter
//     letters.forEach((letter) => {
//       const duration = random(2, 4); // Random duration for animation
//       const startX = random(0, window.innerWidth - 50); // Random start X position
//       const endY = window.innerHeight - 100; // Target Y position

//       gsap.fromTo(
//         letter,
//         {
//           y: -200, // Start above the screen
//           x: startX,
//           rotation: random(-30, 30), // Random initial rotation
//         },
//         {
//           y: endY, // End at the bottom
//           rotation: 0, // End with no rotation
//           duration: duration,
//           ease: "bounce.out", // Bounce effect at the end
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-screen h-screen bg-gradient-to-br from-yellow-300 via-red-300 to-pink-400 overflow-hidden"
//     >
//       {/* Render letters */}
//       {"INNOVATIVE DEVELOPER DESIGN".split("").map((char, index) => (
//         <div
//           key={index}
//           className={`letter absolute text-[20rem] font-bold text-black`}
//         >
//           {char === " " ? "\u00A0" : char}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;





// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const Home= () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const boxes = container.querySelectorAll(".box");

//     // Function to generate random values
//     const random = (min, max) => Math.random() * (max - min) + min;

//     // GSAP animation for dropping and rotating
//     boxes.forEach((box) => {
//       gsap.fromTo(
//         box,
//         {
//           y: random(-200, -400),
//           x: random(0, window.innerWidth),
//           rotation: random(-45, 45),
//         },
//         {
//           y: window.innerHeight,
//           rotation: random(0, 360),
//           duration: random(2, 4),
//           ease: "bounce",
//           repeat: -1,
//           repeatDelay: random(1, 3),
//         }
//       );
//     });

//     // Mouse interaction effect
//     const handleMouseMove = (event) => {
//       const { clientX, clientY } = event;
//       boxes.forEach((box) => {
//         gsap.to(box, {
//           x: random(clientX - 50, clientX + 50),
//           y: random(clientY - 50, clientY + 50),
//           duration: 0.5,
//           ease: "power1.out",
//         });
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-screen h-screen bg-gradient-to-br from-yellow-300 via-red-300 to-pink-400 overflow-hidden"
//     >
//       {/* Animated boxes */}
//       {[...Array(5)].map((_, index) => (
//         <div
//           key={index}
//           className="box w-20 h-20 bg-white rounded-lg flex items-center justify-center text-black font-bold shadow-lg absolute"
//         >
//           {index + 1}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;














