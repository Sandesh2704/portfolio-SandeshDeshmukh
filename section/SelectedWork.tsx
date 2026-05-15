// "use client"
// import { JSX, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   Cpu,
//   Code2,
//   Layers,
//   Database,
//   Terminal,
//   Layout,
//   Palette,
//   Globe,
//   BarChart3,
//   Shield,
//   Zap,
//   Server,
//   FileCode,
//   Wifi,
//   Cloud,
//   Network,
//   Rocket,
//   Box,
//   Code,
//   Eye,
//   ShoppingBag,
//   CpuIcon,
//   ChevronRightSquare,
//   AirVent,
//   CreditCard,
//   ChevronLeft,
//   ChevronRight
// } from "lucide-react";
// import Image from "next/image";
// import { motion } from "motion/react";
// import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { NavigationOptions } from "swiper/types";
// import { Container } from "@/components/Component";
// gsap.registerPlugin(ScrollTrigger);

// type Category =
//   | 'Design & Development'
//   | 'ERP & Admin Panels'
//   | 'Fintech'
//   | 'UI/UX Development'
//   | 'Portfolio'
//   | 'Full Stack Development'
//   | 'E-Commerce'
//   | 'Dashboards & CMS'
//   | 'CMS & AI Tools';

// const categoryIcons: Record<Category, JSX.Element> = {
//   'Design & Development': <Palette size={12} className="inline mr-1" />,
//   'ERP & Admin Panels': <ChevronRightSquare size={12} className="inline mr-1" />,
//   'Fintech': <BarChart3 size={12} className="inline mr-1" />,
//   'UI/UX Development': <Layout size={12} className="inline mr-1" />,
//   'Portfolio': <Globe size={12} className="inline mr-1" />,
//   'Full Stack Development': <Layers size={12} className="inline mr-1" />,
//   'E-Commerce': <ShoppingBag size={12} className="inline mr-1" />,
//   'Dashboards & CMS': <BarChart3 size={12} className="inline mr-1" />,
//   'CMS & AI Tools': <CpuIcon size={12} className="inline mr-1" />
// };

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   category: Category | string; // string allows fallback
//   stack: string[];
//   liveUrl: string;
//   githubUrl: string;
//   image: string;
// }

// const projectsData: Project[] = [
//   {
//     id: 1,
//     title: "Innovative Website Design for a Web Agency",
//     description: "Developed a modern web agency website using React.js and Tailwind CSS, featuring smooth scrolling effects, GSAP animations, and Framer Motion for dynamic and interactive user experiences.",
//     category: "Design & Development",
//     stack: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
//     liveUrl: "https://codenest-portfolio.firebaseapp.com/",
//     githubUrl: "#",
//     image: "/project/CodeNest.webp"
//   },
//   {
//     id: 2,
//     title: "CRM Portal for Company Management",
//     description: "A multi-role portal with dashboards tailored for task management, attendance tracking, and performance monitoring.",
//     category: "ERP & Admin Panels",
//     stack: ["React.js", "Node.js", "MongoDB", "Express.js"],
//     liveUrl: "#",
//     githubUrl: "#",
//     image: "/project/project-crm-portol.webp"
//   },
//   {
//     id: 3,
//     title: "Token Presale Platform",
//     description: "A front-end for a token presale platform supporting multiple blockchain currencies and responsive design.",
//     category: "Fintech",
//     stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Chart.js"],
//     liveUrl: "https://rebel-protocol-96wiljsxr-sandesh-deshmukhs-projects.vercel.app/",
//     githubUrl: "#",
//     image: "/project/project-rebel-protocol.webp"
//   },
//   {
//     id: 4,
//     title: "UI Design Conversion to Code",
//     description: "Successfully converted a complex design into a fully functional and responsive user interface.",
//     category: "UI/UX Development",
//     stack: ["React.js", "Tailwind CSS"],
//     liveUrl: "https://toobdog-2q49s21vb-sandesh-deshmukhs-projects.vercel.app/",
//     githubUrl: "#",
//     image: "/project/project-toob-dog.webp"
//   },
//   {
//     id: 5,
//     title: "Portfolio Website (Previous Design)",
//     description: "A responsive portfolio built with Next.js and Tailwind CSS to showcase projects and professional achievements effectively.",
//     category: "Portfolio",
//     stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
//     liveUrl: "https://sandeshdeshmukhportfolio.vercel.app/",
//     githubUrl: "#",
//     image: "/project/project-ui.webp"
//   },
//   {
//     id: 6,
//     title: "Frontend & UI Development for Web Applications",
//     description: "Responsive and user-centric web applications using the MERN stack and Next.js, ensuring seamless user experiences.",
//     category: "Full Stack Development",
//     stack: ["Next.js", "React.js", "MongoDB", "Express.js"],
//     liveUrl: "#",
//     githubUrl: "#",
//     image: "/project/project-ui.webp"
//   },
// ];

// // Icon mapping for different technologies
// const techIcons = {
//   // Frameworks & Libraries
//   'react.js': <Cpu size={14} className="inline mr-1.5" />,
//   'react': <Cpu size={14} className="inline mr-1.5" />,
//   'next.js': <Rocket size={14} className="inline mr-1.5" />,
//   'next': <Rocket size={14} className="inline mr-1.5" />,
//   'node.js': <Server size={14} className="inline mr-1.5" />,
//   'node': <Server size={14} className="inline mr-1.5" />,
//   'express.js': <Terminal size={14} className="inline mr-1.5" />,
//   'express': <Terminal size={14} className="inline mr-1.5" />,
//   'framer motion': <Eye size={14} className="inline mr-1.5" />,
//   'framer': <Eye size={14} className="inline mr-1.5" />,

//   // Styling
//   'tailwind css': <Palette size={14} className="inline mr-1.5" />,
//   'tailwind': <Palette size={14} className="inline mr-1.5" />,

//   // Databases
//   'mongodb': <Database size={14} className="inline mr-1.5" />,
//   'mongo': <Database size={14} className="inline mr-1.5" />,

//   // Visualization & Charts
//   'chart.js': <BarChart3 size={14} className="inline mr-1.5" />,
//   'chart': <BarChart3 size={14} className="inline mr-1.5" />,

//   // Animation
//   'gsap': <Zap size={14} className="inline mr-1.5" />,

//   // General
//   'javascript': <Code2 size={14} className="inline mr-1.5" />,
//   'typescript': <FileCode size={14} className="inline mr-1.5" />,
//   'html': <Code size={14} className="inline mr-1.5" />,
//   'css': <Layout size={14} className="inline mr-1.5" />,
//   'webpack': <Box size={14} className="inline mr-1.5" />,
//   'vite': <Zap size={14} className="inline mr-1.5" />,
//   'vercel': <Cloud size={14} className="inline mr-1.5" />,
//   'firebase': <CpuIcon size={14} className="inline mr-1.5" />,
//   'graphql': <Network size={14} className="inline mr-1.5" />,
//   'websockets': <Wifi size={14} className="inline mr-1.5" />,
//   'redux': <Layers size={14} className="inline mr-1.5" />,
//   'jwt': <Shield size={14} className="inline mr-1.5" />,
//   'stripe': <CreditCard size={14} className="inline mr-1.5" />,
//   'd3.js': <BarChart3 size={14} className="inline mr-1.5" />,
//   'openai': <AirVent size={14} className="inline mr-1.5" />,
//   'postgresql': <Database size={14} className="inline mr-1.5" />,
//   'redis': <Database size={14} className="inline mr-1.5" />,

//   // Default
//   'default': <Code2 size={14} className="inline mr-1.5" />
// };

// // Category icons

// export default function SelectedWork() {
//   const prevRef = useRef<HTMLButtonElement>(null);
//   const nextRef = useRef<HTMLButtonElement>(null);

//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       {
//         borderRadius: "250px",
//       },
//       {
//         borderRadius: "12px",
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "top top",
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   // Function to get appropriate icon for each technology
//   const getTechIcon = (tech: string) => {
//     const techLower = tech.toLowerCase();

//     // Check for exact matches first
//     for (const [key, icon] of Object.entries(techIcons)) {
//       if (techLower.includes(key.toLowerCase())) {
//         return icon;
//       }
//     }

//     // Check for partial matches
//     if (techLower.includes('js')) return techIcons['javascript'];
//     if (techLower.includes('ts')) return techIcons['typescript'];
//     if (techLower.includes('css')) return techIcons['css'];
//     if (techLower.includes('html')) return techIcons['html'];
//     if (techLower.includes('api')) return <Globe size={14} className="inline mr-1.5" />;
//     if (techLower.includes('auth')) return <Shield size={14} className="inline mr-1.5" />;
//     if (techLower.includes('anim')) return <Zap size={14} className="inline mr-1.5" />;

//     return techIcons['default'];
//   };

//   // Function to get category icon
//   const getCategoryIcon = (category: string) => {
//     return (categoryIcons as Record<string, JSX.Element>)[category] || <Globe size={12} className="inline mr-1" />;
//   };





//   return (
//     <section id="work" className="">
//       <Container
//         ref={sectionRef}
//         className="bg-gradient-to-br from-[#111] to-[#0b0b0b] border border-white/10 pt-12 lg:!px-6  pb-6    overflow-hidden"
//       >
//         <div className="flex flex-col lg:flex-row items-start lg:items-center mb-2 justify-between gap-6">
//           <div className="flex-1">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="flex items-center gap-3 mb-4"
//             >
//               <motion.div
//                 className="h-px w-12 bg-pink-500"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: '3rem' }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               />
//               <span className="text-sm font-semibold tracking-wider text-pink-500 uppercase">
//                 Selected Work
//               </span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-5xl flex flex-col md:flex-row gap-2 md:text-6xl font-bold text-white mb-3"
//             >
//               <motion.span
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//               >
//                 Featured
//               </motion.span>
//               <motion.span
//                 className="text-transparent bg-clip-text bg-pink-500"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//               >
//                 Projects
//               </motion.span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="text-lg text-gray-300 max-w-2xl"
//             >
//               Real-world applications built with modern tech stacks,
//               focusing on performance, scalability, and exceptional user experiences.
//             </motion.p>
//           </div>

//           {/* Navigation Buttons */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.7 }}
//             className="flex gap-3"
//           >
//             <motion.button
//               ref={prevRef}
//               className="w-10 h-10  md:w-12 md:h-12 cursor-pointer rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/10 transition-all duration-300 group"
//               aria-label="Previous projects"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <ChevronLeft size={20} className="text-white group-hover:text-white" />
//             </motion.button>
//             <motion.button
//               ref={nextRef}
//               className="w-10 h-10  md:w-12 md:h-12 cursor-pointer rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/10 transition-all duration-300 group"
//               aria-label="Next projects"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <ChevronRight size={20} className="text-white group-hover:text-white" />
//             </motion.button>
//           </motion.div>
//         </div>

//         <Swiper
//           modules={[Navigation]}

//           loop={true}
//           slidesPerView={2.5}
//           spaceBetween={24}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1280: { slidesPerView: 2.5 },
//           }}
//           onBeforeInit={(swiper: SwiperClass) => {
//             if (typeof swiper.params.navigation !== "boolean") {
//               const nav = swiper.params.navigation as NavigationOptions;
//               nav.prevEl = prevRef.current;
//               nav.nextEl = nextRef.current;
//             }
//           }}

//           onSwiper={(swiper) => {
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//         >

//           {projectsData.map((project) => (
//             <SwiperSlide key={project.id} className="pt-5">
//               <motion.div
//                 key={project.id}
//                 className="group  min-h-[420px] relative flex flex-col rounded-2xl overflow-hidden
//   bg-[#0b0b0b] border border-white/10
//   shadow-[0_20px_60px_rgba(0,0,0,0.3)]
//   transition-all hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)]"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 whileHover={{ y: -8 }}
//               >
//                 {/* Image section */}
//                 <div className="relative aspect-[16/10] min-h-[180px] overflow-hidden">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                   <span className="absolute top-4 left-4 z-10 text-xs font-medium px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-gray-200 border border-white/10 flex items-center gap-1.5">
//                     {getCategoryIcon(project.category)}
//                     {project.category}
//                   </span>
//                 </div>

//                 {/* Content section */}
//                 <div className="p-6 flex-1 flex flex-col justify-between gap-4">
//                   <div>
//                     <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-pink-500 transition">
//                       {project.title}
//                     </h3>
//                     <p className="text-sm text-gray-300 line-clamp-3">
//                       {project.description}
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-2 pt-2 mt-auto">
//                     {project.stack.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1.5 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-pink-500/50 hover:text-pink-400 transition flex items-center"
//                       >
//                         {getTechIcon(tech)}
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>

//           ))}
//         </Swiper>


//       </Container>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  BrainCircuit,
  Database,
  Workflow,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/Component";

gsap.registerPlugin(ScrollTrigger);

const workflow = [
  {
    title: "Lead Sources",
    icon: Database,
    desc: "Capture leads from forms, campaigns, CRM imports, and external channels.",
  },
  {
    title: "Validation",
    icon: ShieldCheck,
    desc: "Validate and enrich lead data before qualification workflows.",
  },
  {
    title: "AI Qualification",
    icon: BrainCircuit,
    desc: "Score and prioritize leads using AI-driven qualification logic.",
  },
  {
    title: "Automation",
    icon: Workflow,
    desc: "Assign leads, trigger workflows, reminders, and follow-ups.",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    desc: "Track conversion flow, pipeline insights, and operational metrics.",
  },
];

export default function SelectedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".workflow-card",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".preview-card",
        {
          opacity: 0,
          scale: 0.9,
          y: 100,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative  overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-20 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-pink-500/5 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        {/* Heading */}
      


        <div className="mb-10 flex flex-col xl:flex-row items-center justify-between gap-20">
  
  {/* LEFT CONTENT */}
  <div className="max-w-[620px] flex-shrink-0">
    
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-5 flex items-center gap-3"
    >
      <div className="h-px w-12 bg-pink-500" />

      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
        Featured System
      </span>
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight text-white"
    >
      QUALI<span className="text-pink-500">FLUX</span>
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mt-7 text-base leading-[1.8] text-gray-400"
    >
      <p>
        Currently designing and developing a scalable multi-tenant SaaS
        platform focused on AI-powered sales and marketing automation,
        built around workflow-driven systems including lead capture,
        AI qualification, CRM pipelines, automation flows,
        and analytics dashboards.
      </p>

      <p className="mt-3">
        The project focuses on creating a modern product experience
        with a scalable dashboard architecture, reusable UI systems,
        and structured frontend workflows designed for long-term
        product growth.
      </p>
    </motion.div>

    {/* TECH STACK */}
    <div className="mt-7 flex flex-wrap gap-3">
      {[
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
              "ShadCN",
        "PostgreSQL",
        "Prisma",
        "Nest.js",
        "Redis",
      ].map((item) => (
        <div
          key={item}
          className="rounded border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur-sm "
        >
          {item}
        </div>
      ))}
    </div>

    {/* BUTTONS */}
    <div className="mt-7 flex flex-wrap gap-4">
      <Link
        href="https://qualiflux.vercel.app"
        target="_blank"
        className="group flex items-center gap-2 rounded bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03]"
      >
        Live Preview

        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </Link>

      <Link
        href="https://qualiflux.vercel.app/dashboard"
        target="_blank"
        className="rounded border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-pink-500/30 hover:bg-white/10"
      >
        Dashboard
      </Link>
    </div>
  </div>

  {/* RIGHT PREVIEW */}
  <div className="relative flex-1 flex items-center justify-end self-stretch ">

    {/* Main Dashboard */}
    <motion.div
      className="preview-card relative w-full max-w-[720px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a] shadow-[0_20px_100px_rgba(0,0,0,0.5)]"
      whileHover={{
        rotate: -1,
        y: -8,
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/project/qualiflux.png"
          alt="Qualiflux Dashboard"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </motion.div>

    {/* Floating Card 1 */}
    <motion.div
      className="preview-card hidden xl:flex  absolute -left-6  w-[220px] rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
      whileHover={{
        y: -8,
      }}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-pink-500/20 p-2">
          <Sparkles size={18} className="text-pink-400" />
        </div>

        <div>
          <p className="text-sm text-gray-400">
            AI Score
          </p>

          <h3 className="text-2xl font-bold text-white">
            92%
          </h3>
        </div>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[92%] rounded-full bg-pink-500" />
      </div>
    </motion.div>

    {/* Floating Card 2 */}
    <motion.div
      className="preview-card hidden xl:flex  absolute -bottom-6 right-6 w-[260px] rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
      whileHover={{
        y: -8,
      }}
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">
            Active Pipelines
          </p>

          <h3 className="text-3xl font-bold text-white">
            18
          </h3>
        </div>

        <Workflow className="text-pink-500" />
      </div>

      <div className="space-y-3">
        {[80, 60, 95].map((v, i) => (
          <div
            key={i}
            className="h-2 overflow-hidden rounded-full bg-white/10"
          >
            <div
              className="h-full rounded-full bg-pink-500"
              style={{
                width: `${v}%`,
              }}
            />
          </div>
        ))}
      </div>
    </motion.div>

  </div>
</div>

        {/* Workflow */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 h-full w-px bg-gradient-to-b from-pink-500/0 via-pink-500/30 to-pink-500/0 xl:hidden" />

          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
            {workflow.map((item, index) => (
  <motion.div
  key={index}
  className="workflow-card group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0b0b0b] p-5 transition-all duration-500 hover:border-pink-500/30"
  whileHover={{
    y: -6,
  }}
>
  {/* Glow */}
  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    <div className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[70px]" />
  </div>

  <div className="relative z-10 flex flex-col h-full">
    
    {/* Top Row */}
    <div className="flex items-center justify-between mb-4">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
        0{index + 1}
      </div>

      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
        <item.icon className="text-pink-500" size={16} />
      </div>
    </div>

    {/* Content */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold leading-tight text-white">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-400 line-clamp-3">
        {item.desc}
      </p>
    </div>

    {/* Bottom Line */}
    <div className="mt-5 flex items-center gap-2">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-pink-500/40 to-transparent" />
      <div className="h-1.5 w-1.5 rounded-full bg-pink-500" />
    </div>

  </div>
</motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

