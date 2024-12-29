
import { AnimatePresence, motion } from "framer-motion";
import {  useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { socialMedia } from "../deta/otherdeta"


const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "calc(100% + 100px)", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
};

const slide = {
    initial: { x: 80 },
    enter: (i) => ({
        x: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
    exit: (i) => ({
        x: 80,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
};

const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } },
};

const navItems = [
    { title: "Home", href: "/" },
    { title: "Resume", href: "/resume" },
];





export default function MenuSideBar() {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);
  
  
  
    const handleClick = () => {
      setIsActive(false); // Close the sidebar
    };


     

    return (
        <>

            {isActive && (
                <div
                    className="fixed top-0 h-full inset-0 bg-black/60 z-0"
                    onClick={handleClick}
                ></div>
            )}
            {/* Sidebar toggle button */}
            <div className="fixed bottom-5 right-5 z-40">
                 <div
                    onClick={() => setIsActive(!isActive)}
                    className="flex items-center justify-center shadow-md h-[65px] w-[65px] bg-white rounded-full cursor-pointer"
                >
                    <div className="relative w-5">
                        <span
                            className={`block h-[2px] w-full bg-black transform transition-transform duration-300 ${isActive
                                ? "rotate-45 absolute top-[50%] left-[50%] transform -translate-x-[50%] translate-y-[50%]"
                                : "translate-y-[-6px]"
                                }`}
                        ></span>
                        <span
                            className={`block h-[2px] w-full bg-black transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"
                                }`}
                        ></span>
                        <span
                            className={`block h-[2px] w-full bg-black transform transition-transform duration-300 ${isActive
                                ? "-rotate-45 absolute top-[50%] left-[50%] transform -translate-x-[50%] translate-y-[50%]"
                                : "translate-y-[6px]"
                                }`}
                        ></span>
                    </div>
                </div> 
            </div>



            {/* Sidebar menu */}
            <AnimatePresence mode="wait">
                {isActive && (
                    <>
                        <motion.div
                            variants={menuSlide}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="fixed w-[80%] md:w-[40%] lg:w-[30%] top-0 right-0 h-screen bg-[#282828] text-white"
                        >
                            <Curve />
                            <div className="relative z-50 h-full px-24 flex flex-col">
                                {/* Navigation items */}
                                <div
                                    onMouseLeave={() => {
                                        setSelectedIndicator(location.pathname);
                                    }}
                                    className="flex flex-col font-semibold text-5xl gap-3 mt-20"
                                >
                                    <div className="text-gray-400 text-xs border-b border-gray-400 mb-10 uppercase">
                                        Navigation
                                    </div>

                                    {navItems.map((data, index) => (
                                        <MenuLink
                                            key={index}
                                            data={{ ...data, index }}
                                            isActive={selectedIndicator === data.href}
                                            setSelectedIndicator={setSelectedIndicator}
                                            setIsActive={setIsActive}
                                            handleClick={handleClick}
                                        />
                                    ))}
                                </div>

                                {/* Social media links */}
                                <div className="flex flex-wrap justify-center gap-10 mt-20 gap-x-9 gap-y-5">
                                    {socialMedia.map((item, index) => (
                                        <div key={index}>
                                            <Link
                                                to={item.url}
                                                className="flex items-center font-regular group hover:text-blue-500 transition"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <h1 className="text-base sm:text-lg">{item.title}</h1>
                                                <div className="pl-1 flex items-center cursor-pointer">
                                                    <GoArrowUpRight className="text-xl lg:text-2xl  transition" />
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}


            </AnimatePresence>
        </>
    );
}

const MenuLink = ({ data, isActive, setSelectedIndicator, handleClick }) => {
    const { title, href, index } = data;


    return (
        <motion.div
            className="relative z-40 flex items-center"
            onMouseEnter={() => { setSelectedIndicator(href) }}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.div
                variants={scale}
                animate={isActive ? "open" : "closed"}
                className="w-2.5 h-2.5 bg-white rounded-full absolute left-[-30px]"
            ></motion.div>

            <Link to={href} className="text-white" onClick={handleClick}>
                {title}
            </Link>
        </motion.div>
    );
};

const Curve = () => {
    const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

    const curve = {
        initial: { d: initialPath },
        enter: { d: targetPath, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
        exit: { d: initialPath, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    };

    return (
        <svg className="absolute top-0 z-40 left-[-99px] w-[90%] md:w-[100px] h-full fill-[#282828] stroke-none">
            <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
        </svg>
    );
};
