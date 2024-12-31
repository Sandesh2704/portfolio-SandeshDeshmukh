import Herosection from '../sections/Herosection'
import ProjectGallery from '../sections/ProjectGallery';
import IntroSection from '../sections/IntroSection';
import SkillsGallery from '../sections/SkillsGallery';
import Footer from '../components/Footer.jsx'
import NavBar from "../components/NavBar"
export default function Home() {

    return (
        <>
            <div className="home-body  px-4 md:px-7 xl:px-10">
                <NavBar />
                <Herosection />
                <IntroSection />
                <SkillsGallery />
                <ProjectGallery />
                <Footer />
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

//         let lastY = 0; // Keeps track of the last Y position of the falling letter
//         const containerHeight = container.clientHeight; // Height of the container

//         // Animate each letter
//         letters.forEach((letter) => {
//             const duration = random(2, 4);
//             const startX = random(0, window.innerWidth - 50);
//             const letterHeight = parseInt(window.getComputedStyle(letter).fontSize);
//             const adjustedStartY = -200; // Start above the screen
            
//             // Ensure the letters stay within the container
//             const adjustedEndY = Math.min(lastY + letterHeight + 20, containerHeight - letterHeight - 20);
//             lastY = adjustedEndY; // Update lastY for the next letter

//             const zIndex = Math.floor(random(1, 10));

//             gsap.fromTo(
//                 letter,
//                 {
//                     y: adjustedStartY,
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
//             className="relative w-screen h-screen bg-black overflow-hidden"
//         >
//             {/* Render letters */}
//             {"INNOVATIVE DEVELOPER DESIGN".split("").map((char, index) => (
//                 <div
//                     key={index}
//                     className="letter absolute text-[15rem] font-bold text-white"
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
//     const containerRef = useRef(null);

//     useEffect(() => {
//         const container = containerRef.current;
//         const letters = container.querySelectorAll(".letter");
//         const random = (min, max) => Math.random() * (max - min) + min;

//         let lastY = 0; // Keeps track of the last Y position of the falling letter
//         const containerHeight = container.clientHeight; // Height of the container

//         // Animate each letter
//         letters.forEach((letter, index) => {
//             const duration = random(2, 4);
//             const startX = random(0, window.innerWidth - 50);
//             const letterHeight = parseInt(window.getComputedStyle(letter).fontSize);
//             const adjustedStartY = -200; // Start above the screen

//             // Calculate the Y position ensuring letters are stacked correctly
//             let adjustedEndY = lastY + letterHeight + 20; // Stack on top of the last letter
//             if (adjustedEndY + letterHeight > containerHeight) {
//                 // If the letter would overflow the screen, reset its position
//                 adjustedEndY = containerHeight - letterHeight - 20;
//             }
//             lastY = adjustedEndY; // Update lastY for the next letter

//             const zIndex = Math.floor(random(1, 10));

//             gsap.fromTo(
//                 letter,
//                 {
//                     y: adjustedStartY,
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
//             className="relative w-screen h-screen bg-black overflow-hidden"
//         >
//             {/* Render letters */}
//             {"INNOVATIVE DEVELOPER DESIGN".split("").map((char, index) => (
//                 <div
//                     key={index}
//                     className="letter absolute text-[15rem] font-bold text-white"
//                 >
//                     {char === " " ? "\u00A0" : char}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Home;
// const Home = () => {
//     const text = [
//       { item: 'I', x: '10%', y: '10%' },
//       { item: 'N', x: '20%', y: '5%' },
//       { item: 'N', x: '30%', y: '15%' },
//       { item: 'O', x: '40%', y: '10%' },
//       { item: 'V', x: '50%', y: '20%' },
//       { item: 'A', x: '60%', y: '5%' },
//       { item: 'T', x: '70%', y: '10%' },
//       { item: 'I', x: '80%', y: '15%' },
//       { item: 'V', x: '90%', y: '20%' },
//       { item: 'E', x: '5%', y: '25%' },
//       { item: 'D', x: '10%', y: '30%' },
//       { item: 'E', x: '15%', y: '35%' },
//       { item: 'V', x: '25%', y: '40%' },
//       { item: 'E', x: '35%', y: '45%' },
//       { item: 'L', x: '45%', y: '50%' },
//       { item: 'O', x: '55%', y: '55%' },
//       { item: 'P', x: '65%', y: '60%' },
//       { item: 'E', x: '75%', y: '65%' },
//       { item: 'R', x: '85%', y: '70%' },
//       { item: 'D', x: '95%', y: '75%' },
//       { item: 'E', x: '5%', y: '80%' },
//       { item: 'S', x: '15%', y: '85%' },
//       { item: 'I', x: '25%', y: '90%' },
//       { item: 'G', x: '35%', y: '95%' },
//       { item: 'N', x: '45%', y: '5%' },
//     ];
  
//     return (
//       <div className="relative w-full h-screen overflow-hidden">
//         {text.map((letter, index) => (
//           <div
//             key={index}
//             className="absolute text-[12rem] font-bold leading-none"
//             style={{
//               left: letter.x,
//               top: letter.y,
//               transform: `rotate(${Math.random() * 60 - 30}deg)`, // Random rotation for a dynamic effect
//             }}
//           >
//             {letter.item}
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default Home;
  
  
  



// const Home = () => {
//     const text = [
//       { items: 'I', top: "top-10", left: "left-10", rotation: "rotate-45",  },
//       { items: 'N', top: "top-16", left: "left-32", rotation: "-rotate-", },
//      { items: 'N', top: "top-24", left: "left-44", rotation: "rotate-[15]",  },
//     //   { items: 'O', top: "top-12", right: "right-12", rotation: "-rotate-[10]", translateY: "translate-y-[10]" },
//     //   { items: 'V', top: "top-32", left: "left-64", rotation: "rotate-[25]", translateX: "translate-x-[-20]" },
//     //   { items: 'A', bottom: "bottom-16", left: "left-10", rotation: "-rotate-[30]", translateY: "translate-y-[10]" },
//     //   { items: 'T', top: "top-40", right: "right-20", rotation: "rotate-[35]", translateX: "translate-x-[15]" },
//     //   { items: 'I', bottom: "bottom-20", left: "left-36", rotation: "-rotate-[5]", translateY: "translate-y-[20]" },
//     //   { items: 'V', bottom: "bottom-32", right: "right-48", rotation: "rotate-[10]", translateX: "translate-x-[-15]" },
//     //   { items: 'E', top: "top-48", left: "left-56", rotation: "-rotate-[15]", translateX: "translate-x-[10]" },
//     //   { items: 'D', bottom: "bottom-36", left: "left-72", rotation: "rotate-[5]", translateY: "translate-y-[-15]" },
//     //   { items: 'E', top: "top-60", right: "right-16", rotation: "-rotate-[20]", translateX: "translate-x-[-10]" },
//     //   { items: 'V', bottom: "bottom-48", left: "left-28", rotation: "rotate-[30]", translateY: "translate-y-[-10]" },
//     //   { items: 'E', top: "top-72", right: "right-36", rotation: "-rotate-[25]", translateX: "translate-x-[15]" },
//     //   { items: 'L', bottom: "bottom-52", left: "left-50", rotation: "rotate-[20]", translateY: "translate-y-[15]" },
//     //   { items: 'O', top: "top-80", right: "right-24", rotation: "-rotate-[15]", translateX: "translate-x-[-15]" },
//     //   { items: 'P', bottom: "bottom-56", left: "left-80", rotation: "rotate-[10]", translateY: "translate-y-[20]" },
//     //   { items: 'E', top: "top-88", right: "right-20", rotation: "-rotate-[35]", translateX: "translate-x-[10]" },
//     //   { items: 'R', bottom: "bottom-60", left: "left-36", rotation: "rotate-[40]", translateY: "translate-y-[-15]" },
//     //   { items: 'D', top: "top-96", right: "right-48", rotation: "-rotate-[10]", translateX: "translate-x-[20]" },
//     //   { items: 'E', bottom: "bottom-64", left: "left-60", rotation: "rotate-[15]", translateY: "translate-y-[10]" },
//     //   { items: 'S', top: "top-104", right: "right-72", rotation: "-rotate-[5]", translateX: "translate-x-[-10]" },
//     //   { items: 'I', bottom: "bottom-68", left: "left-12", rotation: "rotate-[25]", translateY: "translate-y-[15]" },
//     //   { items: 'G', top: "top-112", right: "right-24", rotation: "-rotate-[20]", translateX: "translate-x-[15]" },
//     //   { items: 'N', bottom: "bottom-0", left: "left-0" },
//     ];
  
//     return (
//       <div className="relative w-full h-screen flex justify-center items-start overflow-hidden">
//         <div className="absolute top-0 w-full flex flex-wrap justify-center space-x-2">
//           {text.map((letter, index) => (
//             <div
//               key={index}
//               className={`letter text-[10rem] font-bold leading-[9rem] absolute 
//                           ${letter.top || ''} ${letter.left || ''} ${letter.right || ''} ${letter.bottom || ''} 
//                           ${letter.rotation} `}
//             >
//               {letter.items}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Home;








