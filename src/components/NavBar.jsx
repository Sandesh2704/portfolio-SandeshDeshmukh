'use client'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavBar() {
    const [time, setTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            setTime(now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }))
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    const dropVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2,
                type: 'spring',
                stiffness: 50
            }
        })
    }


    return (
        <>
            <nav className="py-6 absolute w-full flex items-center justify-between">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    variants={dropVariants}
                >
                    <Link to="/" className="text-base tracking-wider font-regular">
                        Sandesh Deshmukh ®
                    </Link>
                </motion.div>

                <div
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="flex lg:hidden xl:flex relative lg:absolute lg:left-1/2 lg:-translate-x-1/2"
                >
                    <h1 className="px-3 sm:px-4 py-2 text-xs sm:text-sm border border-customGray rounded-full font-regular">
                        {time}
                    </h1>
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={dropVariants}
                    className="hidden lg:flex text-base items-center space-x-2 font-regular"
                >
                    <h1 className="">say hi —</h1>
                    <div className="relative group">
                        <Link
                            to="mailto:sandeshdeshmukh2704@gmail.com"
                            className="flex items-center text-customGray transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            sandeshdeshmukh2704@gmail.com
                        </Link>
                        <div className="absolute h-[2px] bg-gray-custom bottom-0 left-0 w-0 group-hover:w-full transition-all duration-200" />
                    </div>
                </motion.div>
            </nav>
        </>
    )
}