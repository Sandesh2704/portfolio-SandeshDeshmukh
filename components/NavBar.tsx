'use client'
import { useState, useEffect } from 'react'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Container } from './Component'

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

    const dropVariants:Variants = {
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
            <nav className="absolute top-0 left-0 w-full z-50">
   <Container  className="py-6 flex items-center justify-between">
    
    <motion.div
      initial="hidden"
      animate="visible"
      custom={0}
      variants={dropVariants}
    >
      <Link href="/" className="text-base tracking-wider font-regular">
        Sandesh Deshmukh ®
      </Link>
    </motion.div>

    <motion.div
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex lg:hidden xl:flex relative lg:absolute lg:left-1/2 lg:-translate-x-1/2"
    >
      <h3 className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm border border-customGray rounded-lg font-regular">
        {time}
      </h3>
    </motion.div>

    <motion.div
      initial="hidden"
      animate="visible"
      custom={2}
      variants={dropVariants}
      className="hidden lg:flex text-base items-center space-x-2 font-regular"
    >
      <h3>say hi —</h3>
      <div className="relative group">
        <Link
          href="mailto:sandeshdeshmukh2704@gmail.com"
          className="flex items-center hover:text-pink-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          sandeshdeshmukh2704@gmail.com
        </Link>
        <div className="absolute h-[2px] bg-pink-500 bottom-0 left-0 w-0 group-hover:w-full transition-all duration-200" />
      </div>
    </motion.div>

 </Container>
</nav>

        </>
    )
}