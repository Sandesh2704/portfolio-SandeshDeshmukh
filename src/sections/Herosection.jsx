import ScrollDownButton from '../components/ScrollDownButton'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Herosection() {
  // const src="https://lottie.host/5fd52997-c40a-4704-be9b-39c6fc0a0e30/SOXFIMO0Br.lottie"

const src="https://lottie.host/4cbbb981-3451-4809-a9d3-b3fc2e347c06/KhsV7nXpH6.lottie"



  return (
    <div>
      <section className="w-full py-12 md:py-20 xl:py-32 flex flex-col justify-center items-center relative overflow-hidden">
        <DotLottieReact
          src={src || null}
          loop
          autoplay
          className="relative mb-12 xl:mb-0 sm:hidden xl:flex lg:absolute w-48 lg:w-[320px] sm:bottom-0 sm:-left-9"
          width={100}
          height={100}
        />

        <div>
          <div className="ml-10 sm:ml-40 text-xs lg:text-base flex justify-start font-regular">
            Sandesh Deshmukh
          </div>
          <div className="font-regular flex flex-col items-center justify-center xl:text-[120px] lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[110px] lg:leading-[90px] sm:leading-[72px]  leading-[49px]  text-primary text-center font-semibold">
            <h1 className="lg:mr-40 flex items-center gap-1 md:gap-2">
              DESIGN
              <div className="h-1 sm:h-3 xl:h-4 w-3 md:w-10 lg:w-20 bg-white  " />
              <span className="text-customGray ">TUNED</span>
            </h1>
            <h1 className="lg:mr-40">INNOVATIVE</h1>
            <h1 className="lg:ml-40">DEVELOPER</h1>
          </div>
        </div>
        <div className='hidden lg:flex '>
          <ScrollDownButton />
        </div>
      </section>
    </div>
  )
}




// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function Herosection() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 5000); // Preloader duration
//     return () => clearTimeout(timer);
//   }, []);

//   const letterVariants = {
//     initial: {
//       y: "-100vh", // Start above the screen
//       rotate: -45, // Start rotated
//       x: "-50vw", // Start off to the left
//     },
//     animate: {
//       y: 0, // Move to original position
//       x: 0,
//       rotate: 0, // Rotate to original angle
//       transition: {
//         type: "spring",
//         damping: 10,
//         stiffness: 100,
//         delay: 0.5,
//       },
//     },
//     hover: {
//       scale: 1.2, // Slight scaling on hover
//     },
//   };

//   const letters = [
//     { id: 1, text: "D" },
//     { id: 2, text: "E" },
//     { id: 3, text: "S" },
//     { id: 4, text: "I" },
//     { id: 5, text: "G" },
//     { id: 6, text: "N" },
//     { id: 7, text: "T" },
//     { id: 8, text: "U" },
//     { id: 9, text: "N" },
//     { id: 10, text: "E" },
//     { id: 11, text: "D" },
//   ];

//   return (
//     <div>
//       {loading ? (
//         <div className="w-full h-screen flex justify-center items-center bg-black">
//           <motion.div
//             className="flex gap-2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             {letters.map((letter, index) => (
//               <motion.div
//                 key={letter.id}
//                 className="text-white text-4xl font-bold"
//                 variants={letterVariants}
//                 initial="initial"
//                 animate="animate"
//                 whileHover="hover"
//                 transition={{ delay: index * 0.2 }}
//               >
//                 {letter.text}
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       ) : (
//         <section className="w-full py-12 md:py-20 xl:py-32 flex flex-col justify-center items-center relative overflow-hidden">
//           <div>
//             <div className="ml-10 sm:ml-40 text-xs lg:text-base flex justify-start font-regular">
//               Sandesh Deshmukh
//             </div>
//             <div className="font-regular flex flex-col items-center justify-center xl:text-[120px] lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[110px] lg:leading-[90px] sm:leading-[72px] leading-[49px] text-primary text-center font-semibold">
//               <h1 className="lg:mr-40 flex items-center gap-1 md:gap-2">
//               DESIGN
//                 <div className="h-1 sm:h-3 xl:h-4 w-3 md:w-10 lg:w-20 bg-white " />
//                 <span className="text-customGray">TUNED</span>
//               </h1>
//               <h1 className="lg:mr-40">INNOVATIVE</h1>
//               <h1 className="lg:ml-40">DEVELOPER</h1>
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }





// {/* <div className='hidden lg:flex '>
// <ScrollDownButton />
// </div> */}





