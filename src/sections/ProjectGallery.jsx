import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react';
import SectionTitle from "../components/SectionTitle"
import projectdeta from '../deta/projectdeta';
import { Link } from 'react-router-dom';


export default function ProjectGallery() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <section className="py-20 md:mb-10 lg:mb-16 overflow-x-hidden">
        <SectionTitle title="SELECTED WORK" text="start" />
        <main className="flex items-center justify-center mt-10">
          <div className="w-[90%] flex flex-col items-center justify-center">
            {/* Mobile View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6">
              {projectdeta.map((project, index) => (
                <div key={index} className="border border-gray-600 rounded-lg overflow-hidden shadow-lg">
                  <img src={project.src} width={400} height={300} priority alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4 bg-gradient-to-b from-gray-900 to-transparent">
                    <h3 className="text-lg font-semibold mb-2 font-regular">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{project.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs md:text-sm text-gray-400 border rounded-full border-gray-600 px-3 py-2">
                          {tech.icon}
                          <span>{tech.title}</span>
                        </div>
                      ))}
                    </div>

                    {
                      project.url && (
                        <Link
                          to={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-500 text-white text-sm mt-4 font-medium px-4 py-2 rounded-md"
                        >
                          View
                        </Link>
                      )
                    }

                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex flex-col items-center justify-center w-full">
              {projectdeta.map((project, index) => (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setModal({ active: true, index });
                  }}
                  onMouseLeave={() => {
                    setModal({ active: false, index });
                  }}
                  className="flex w-full justify-between items-center px-12 xl:px-24 py-12 border-t border-gray-300 cursor-pointer transition-all duration-200 last:border-b hover:opacity-50"
                >
                  <h2 className="text-4xl font-regular font-normal transition-all duration-400 hover:translate-x-[-10px]">
                    {project.title}
                  </h2>
                  <p className="font-light transition-all duration-400 hover:translate-x-[10px]">{project.subtitle}</p>
                </div>
              ))}

              <Modal modal={modal} projects={projectdeta} />

            </div>
          </div>
        </main>
      </section>
    </>
  );
}

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    let xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
  };

  const project = projects[index];
  const hasUrl = project?.url;  // Check if URL exists

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={`absolute h-[250px] w-[400px] overflow-hidden pointer-events-none flex items-center justify-center ${hasUrl ? 'bg-white' : 'bg-transparent'}`}
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className="flex relative h-full w-full items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img src={src} width={300} height={200} alt={color} />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className={`absolute z-10 flex items-center justify-center w-20 h-20 bg-white text-black rounded-full font-light text-sm pointer-events-none  ${hasUrl ? "flex" : "hidden"}`}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />

      {/* Show the cursor label only if there is a URL */}

      <motion.div
        ref={cursorLabel}
        className={`absolute z-10  items-center justify-center w-20 h-20 bg-transparent text-black rounded-full font-light text-sm pointer-events-none  ${hasUrl ? "flex" : "hidden"}`}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        {/* This div will allow the link to be clickable but won't affect the animation */}
        <div className="relative pointer-events-auto">
          <Link to={project.url} target="_blank">
            View
          </Link>
        </div>
      </motion.div>

    </>
  );
};


// workiong

// const Modal = ({ modal, projects }) => {
//   const { active, index } = modal;
//   const modalContainer = useRef(null);
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   useEffect(() => {
//     let xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
//     let yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
//     let xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
//     let yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
//     let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
//     let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

//     const handleMouseMove = (e) => {
//       const { pageX, pageY } = e;
//       xMoveContainer(pageX);
//       yMoveContainer(pageY);
//       xMoveCursor(pageX);
//       yMoveCursor(pageY);
//       xMoveCursorLabel(pageX);
//       yMoveCursorLabel(pageY);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const scaleAnimation = {
//     initial: { scale: 0, x: "-50%", y: "-50%" },
//     enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
//     closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
//   };

//   return (
//     <>

   

//       <motion.div
//         ref={modalContainer}
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//         className="absolute  h-[250px] w-[400px] bg-white overflow-hidden pointer-events-none flex items-center justify-center"
//       >
//         <div
//           style={{ top: index * -100 + "%" }}
//           className="absolute    h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
//         >
//           {projects.map((project, index) => {
//             const { src, color, } = project;
//             return (
//               <div
//                 className="flex relative h-full w-full items-center justify-center"
//                 style={{ backgroundColor: color }}
//                 key={`modal_${index}`}
//               >
//                  <img src={src} width={300} height={200} alt={color} /> 
             
//               </div>

           
//             );
//           })}
//         </div>
//       </motion.div>
 

//       <motion.div
//         ref={cursor}
//         className="absolute z-10 flex items-center justify-center w-20 h-20 bg-white text-black rounded-full font-light text-sm pointer-events-none"
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//       >

//       </motion.div>
//       <motion.div
//         ref={cursorLabel}
//         className="absolute z-10 bg-red-200 flex items-center justify-center w-20 h-20 bg-transparent text-black rounded-full font-light text-sm pointer-events-none"
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//       >

// <Link to={{ pathname: projects[index]?.url }} target="_blank">
//     View
//   </Link>

//       </motion.div> 


//     </>
//   );
// };


