'use client';

import {
  Atom,
  Layout,
  Code,
  Palette,
  Server,
  GitBranch,
  Database,
  Terminal,
  Shield,
  Cloud,
  Figma,
  Cpu,
  Globe,
  Zap,
  Monitor,
  Boxes,
  Sparkles,
  Key,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProfilChat from '@/components/ProfileChat';
import { Container } from '@/components/Component';
import Link from 'next/link';
import siteConfig from '@/config/site.config';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { social } = siteConfig;
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo(
        '.about-card',
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Pulse animation for timeline dots
      gsap.to('.timeline-dot', {
        scale: 1.3,
        opacity: 0.6,
        duration: 1.5,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      period: 'Feb 2025 — Present',
      title: 'Frontend Developer',
      company: 'Jithvar Consultancy Services',
      location: 'Lucknow, India',
    },
    {
      period: 'Jan 2024 — Jan 2025',
      title: 'MERN Stack Developer',
      company: 'Eliora Technology Pvt. Ltd.',
      location: 'Nagpur, India',
    },
    {
      period: 'Oct 2023 — Jan 2024',
      title: 'Software Engineering Intern',
      company: 'Riple Technologies Ltd.',
      location: 'Remote',
    },
  ];

  const education = [
    {
      period: '2018 — 2022',
      title: 'Bachelor of Engineering',
      field: 'Mechanical Engineering',
      institute: 'RTMNU, Nagpur',
    },
    {
      period: '2022',
      title: 'Master in Blockchain Development',
      field: 'Certification Program',
      institute: 'Jetking, Nagpur',
    },
  ];

  const technicalSkills = [
    { name: 'React.js', icon: Atom },
    { name: 'Next.js', icon: Layout },
    { name: 'JavaScript', icon: Code },
    { name: 'TypeScript', icon: Code },
    { name: 'Redux Toolkit', icon: Cpu },
    { name: 'Zustand', icon: Boxes },
    { name: 'Node.js', icon: Server },
    { name: 'Express.js', icon: Terminal },
    { name: 'REST APIs', icon: Globe },
    { name: 'APIs Integration', icon: Globe },
    { name: 'JWT Auth', icon: Shield },
    { name: 'ShadCN UI', icon: Palette },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Material UI', icon: Palette },
    { name: 'Bootstrap', icon: Palette },
    { name: 'Framer Motion', icon: Sparkles },
    { name: 'Responsive Design', icon: Monitor },
    { name: 'MongoDB', icon: Database },
    { name: 'Firestore', icon: Database },
    { name: 'Web3.js', icon: Globe },
    { name: 'Solidity (Basics)', icon: Key },
    { name: 'Smart Contracts', icon: Shield },
  ];

  const tools = [
    { name: 'Git', icon: GitBranch },
    { name: 'GitHub', icon: GitBranch },
        { name: 'Vite', icon: Zap },
    { name: 'Postman', icon: Zap },

    { name: 'Figma', icon: Figma },
    { name: 'Framer', icon: Sparkles },
    { name: 'Firebase', icon: Cloud },
    { name: 'Vercel', icon: Cloud },
    { name: 'Netlify', icon: Cloud },
    { name: 'Lighthouse', icon: Zap },
    { name: 'Google Analytics', icon: Globe },
  ];





  return (
    <section ref={sectionRef} id="about" className="">
      <Container size="default" className="">


        <div className="flex flex-col xl:flex-row items-start xl:items-center mb-6 justify-between gap-6 px-4 sm:px-0">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                className="h-px w-12 bg-pink-500"
                initial={{ width: 0 }}
                whileInView={{ width: '3rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-sm font-semibold tracking-wider text-pink-500 uppercase">
                About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl flex flex-col md:flex-row gap-2 md:text-6xl font-bold text-white mb-4 section-heading"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                My
              </motion.span>
              <motion.span
                className="text-pink-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Journey
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-300 max-w-2xl"
            >
              Frontend Developer passionate about creating exceptional digital experiences
              through clean code, thoughtful design, and modern technologies.
            </motion.p>
          </div>
        </div>


        <div ref={cardsRef} className="flex flex-col gap-6">



          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Bio & Social */}
            <div className="space-y-6 ">
              <motion.div
                className="about-card bg-gradient-to-br from-[#111] to-[#0b0b0b] rounded-xl p-6 border border-white/10 h-fit"
                whileHover={{ scale: 1.02, borderColor: 'rgba(236, 72, 153, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-gray-300 mb-6 leading-[1.7]">
                  Frontend Developer with
                  <span className="text-pink-400 font-medium"> 2+ years of experience</span>, focused on
                  <span className="text-pink-400 font-medium"> building clean, user-centered web applications</span>{' '}
                  with modern, high-performance interfaces.
                </p>

                <div className='flex flex-col sm:flex-row gap-3 sm:items-center justify-between '>

                  <div className="flex gap-2">
                    {social.map((item, i) => (
                      <motion.a
                        target='_blank'
                        key={i}
                        href={item.url}
                        className="p-2 bg-white/5  text-gray-300 rounded-lg hover:bg-pink-600 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <item.icon className='h-[16px] w-[16px]' />
                      </motion.a> 
                    ))}


                  </div>

                  <motion.div
                  
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/resume" target="_blank" rel="noopener noreferrer"   className="w-fit px-3 py-1.5 bg-pink-600 text-gray-300 rounded-lg flex items-center justify-center gap-2 text-sm font-medium">
                      <ExternalLink size={16} /> Resume
                    </Link>
                  </motion.div>
                </div>

              </motion.div>

              <motion.div
                className="about-card bg-gradient-to-br from-[#111] to-[#0b0b0b] rounded-xl p-6 border border-white/10 h-fit"
                whileHover={{ scale: 1.02, borderColor: 'rgba(236, 72, 153, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-pink-500">MY BACKGROUND</h3>

                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-gray-300">
                    Growing up in India, I was surrounded by creativity, problem-solving, and curiosity. From an early
                    age, I was drawn to how things work, which evolved into a deep interest in
                    <span className="text-pink-400 font-medium"> technology and digital experiences</span>.
                  </p>

                  <p className="text-sm leading-relaxed text-gray-300">
                    This curiosity became a
                    <span className="text-pink-400 font-medium"> passion for frontend development</span>, where logic
                    meets design. Studying Computer Science helped me explore how thoughtful interfaces and
                    well-engineered systems significantly improve user experiences.
                  </p>

                  <p className="text-sm leading-relaxed text-gray-300">
                    Today, I focus on building products that are functional yet memorable. By combining
                    <span className="text-pink-400 font-medium">
                      {' '}
                      design sensibility, performance optimization, and clean code
                    </span>
                    , I transform complex ideas into elegant, user-friendly solutions.
                    <span className="text-pink-400 font-medium">
                      {' '}
                      I continually refine my skills to create interfaces that feel fast, intuitive, and reliable.
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              className="about-card bg-gradient-to-br from-[#111] to-[#0b0b0b] rounded-xl p-0 border border-white/10 overflow-hidden"
              whileHover={{ scale: 1.02, borderColor: 'rgba(236, 72, 153, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full min-h-[500px]">
                <Image
                  src="/profile.webp"
                  alt="Profile"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                {/* Animated Chat Bubbles */}
                <ProfilChat />
              </div>
            </motion.div>

            {/* Experience & Education */}
            <div className="xl:col-span-1 gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 col-span-1 md:col-span-2 xl:col-span-1">
              <motion.div
                className="about-card bg-gradient-to-br from-[#0f0f0f] to-[#080808] rounded-2xl p-6 border border-white/10 relative overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: 'rgba(236, 72, 153, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase mb-6 text-pink-500 tracking-wider">Experience</h3>

                <div className="space-y-5">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={i}
                      className="relative pl-10 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="absolute left-[5px] top-0 h-full w-px bg-pink-500/20" />
                      <span className="timeline-dot absolute left-0 top-1.5 w-3 h-3 rounded-xs bg-pink-500 shadow-lg" />

                      <p className="text-xs text-gray-400 mb-1">{exp.period}</p>
                      <p className="text-sm font-semibold text-white mb-1">{exp.title}</p>
                      <p className="text-xs text-gray-300">{exp.company}</p>
                      <p className="text-xs text-gray-500">{exp.location}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="about-card bg-gradient-to-br from-[#0f0f0f] to-[#080808] rounded-2xl p-6 border border-white/10"
                whileHover={{ scale: 1.02, borderColor: 'rgba(236, 72, 153, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase mb-6 text-pink-500 tracking-wider">Education</h3>

                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <motion.div
                      key={i}
                      className="relative group pl-10 transition"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="absolute left-[5px] top-0 h-full w-px bg-pink-500/20" />
                      <span className="timeline-dot absolute left-0 top-1.5 w-3 h-3 rounded-xs bg-pink-500 shadow-lg" />

                      <p className="text-xs text-gray-400 mb-1">{edu.period}</p>
                      <p className="text-sm font-semibold text-white">{edu.title}</p>
                      <p className="text-xs text-gray-300">{edu.field}</p>
                      <p className="text-xs text-gray-500 mt-1">{edu.institute}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Second Row - Skills, Tools, and NEW CARDS */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Technical Skills - col-span-2 */}
            <motion.div
              className="about-card xl:col-span-2 bg-gradient-to-br from-[#111] to-[#0b0b0b] rounded-xl p-6 border border-white/10 h-full overflow-hidden"
              whileHover={{ scale: 1.01, borderColor: 'rgba(236, 72, 153, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm font-bold uppercase mb-6 text-pink-500">Technical Skills</h3>
              <div className="h-[calc(100%-2rem)] overflow-y-auto pr-2">
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.02 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <skill.icon
  className="text-pink-500 w-4 h-4 sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]"
/>

                      <span className="text-xs md:text-sm text-gray-200 font-medium text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="about-card bg-gradient-to-br from-[#111] to-[#0b0b0b] rounded-xl p-6 border border-white/10 h-fit"
              whileHover={{ scale: 1.02, borderColor: 'rgba(236, 72, 153, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm font-bold uppercase mb-6 text-pink-500">Development Tools</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <item.icon
                      className="text-pink-500 w-4 h-4 sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]"
                    />

                    <span className="text-xs md:text-sm text-gray-200 font-medium text-center">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
     </Container>
  </section>
  );
}



