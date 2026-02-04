"use client"
import { JSX, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cpu,
  Code2,
  Layers,
  Database,
  Terminal,
  Layout,
  Palette,
  Globe,
  BarChart3,
  Shield,
  Zap,
  Server,
  FileCode,
  Wifi,
  Cloud,
  Network,
  Rocket,
  Box,
  Code,
  Eye,
  ShoppingBag,
  CpuIcon,
  ChevronRightSquare,
  AirVent,
  CreditCard,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { Container } from "@/components/Component";
gsap.registerPlugin(ScrollTrigger);

type Category =
  | 'Design & Development'
  | 'ERP & Admin Panels'
  | 'Fintech'
  | 'UI/UX Development'
  | 'Portfolio'
  | 'Full Stack Development'
  | 'E-Commerce'
  | 'Dashboards & CMS'
  | 'CMS & AI Tools';

const categoryIcons: Record<Category, JSX.Element> = {
  'Design & Development': <Palette size={12} className="inline mr-1" />,
  'ERP & Admin Panels': <ChevronRightSquare size={12} className="inline mr-1" />,
  'Fintech': <BarChart3 size={12} className="inline mr-1" />,
  'UI/UX Development': <Layout size={12} className="inline mr-1" />,
  'Portfolio': <Globe size={12} className="inline mr-1" />,
  'Full Stack Development': <Layers size={12} className="inline mr-1" />,
  'E-Commerce': <ShoppingBag size={12} className="inline mr-1" />,
  'Dashboards & CMS': <BarChart3 size={12} className="inline mr-1" />,
  'CMS & AI Tools': <CpuIcon size={12} className="inline mr-1" />
};

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category | string; // string allows fallback
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Innovative Website Design for a Web Agency",
    description: "Developed a modern web agency website using React.js and Tailwind CSS, featuring smooth scrolling effects, GSAP animations, and Framer Motion for dynamic and interactive user experiences.",
    category: "Design & Development",
    stack: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    liveUrl: "https://codenest-portfolio.firebaseapp.com/",
    githubUrl: "#",
    image: "/project/CodeNest.webp"
  },
  {
    id: 2,
    title: "CRM Portal for Company Management",
    description: "A multi-role portal with dashboards tailored for task management, attendance tracking, and performance monitoring.",
    category: "ERP & Admin Panels",
    stack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/project/project-crm-portol.webp"
  },
  {
    id: 3,
    title: "Token Presale Platform",
    description: "A front-end for a token presale platform supporting multiple blockchain currencies and responsive design.",
    category: "Fintech",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Chart.js"],
    liveUrl: "https://rebel-protocol-96wiljsxr-sandesh-deshmukhs-projects.vercel.app/",
    githubUrl: "#",
    image: "/project/project-rebel-protocol.webp"
  },
  {
    id: 4,
    title: "UI Design Conversion to Code",
    description: "Successfully converted a complex design into a fully functional and responsive user interface.",
    category: "UI/UX Development",
    stack: ["React.js", "Tailwind CSS"],
    liveUrl: "https://toobdog-2q49s21vb-sandesh-deshmukhs-projects.vercel.app/",
    githubUrl: "#",
    image: "/project/project-toob-dog.webp"
  },
  {
    id: 5,
    title: "Portfolio Website (Previous Design)",
    description: "A responsive portfolio built with Next.js and Tailwind CSS to showcase projects and professional achievements effectively.",
    category: "Portfolio",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://sandeshdeshmukhportfolio.vercel.app/",
    githubUrl: "#",
    image: "/project/project-ui.webp"
  },
  {
    id: 6,
    title: "Frontend & UI Development for Web Applications",
    description: "Responsive and user-centric web applications using the MERN stack and Next.js, ensuring seamless user experiences.",
    category: "Full Stack Development",
    stack: ["Next.js", "React.js", "MongoDB", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/project/project-ui.webp"
  },
];

// Icon mapping for different technologies
const techIcons = {
  // Frameworks & Libraries
  'react.js': <Cpu size={14} className="inline mr-1.5" />,
  'react': <Cpu size={14} className="inline mr-1.5" />,
  'next.js': <Rocket size={14} className="inline mr-1.5" />,
  'next': <Rocket size={14} className="inline mr-1.5" />,
  'node.js': <Server size={14} className="inline mr-1.5" />,
  'node': <Server size={14} className="inline mr-1.5" />,
  'express.js': <Terminal size={14} className="inline mr-1.5" />,
  'express': <Terminal size={14} className="inline mr-1.5" />,
  'framer motion': <Eye size={14} className="inline mr-1.5" />,
  'framer': <Eye size={14} className="inline mr-1.5" />,

  // Styling
  'tailwind css': <Palette size={14} className="inline mr-1.5" />,
  'tailwind': <Palette size={14} className="inline mr-1.5" />,

  // Databases
  'mongodb': <Database size={14} className="inline mr-1.5" />,
  'mongo': <Database size={14} className="inline mr-1.5" />,

  // Visualization & Charts
  'chart.js': <BarChart3 size={14} className="inline mr-1.5" />,
  'chart': <BarChart3 size={14} className="inline mr-1.5" />,

  // Animation
  'gsap': <Zap size={14} className="inline mr-1.5" />,

  // General
  'javascript': <Code2 size={14} className="inline mr-1.5" />,
  'typescript': <FileCode size={14} className="inline mr-1.5" />,
  'html': <Code size={14} className="inline mr-1.5" />,
  'css': <Layout size={14} className="inline mr-1.5" />,
  'webpack': <Box size={14} className="inline mr-1.5" />,
  'vite': <Zap size={14} className="inline mr-1.5" />,
  'vercel': <Cloud size={14} className="inline mr-1.5" />,
  'firebase': <CpuIcon size={14} className="inline mr-1.5" />,
  'graphql': <Network size={14} className="inline mr-1.5" />,
  'websockets': <Wifi size={14} className="inline mr-1.5" />,
  'redux': <Layers size={14} className="inline mr-1.5" />,
  'jwt': <Shield size={14} className="inline mr-1.5" />,
  'stripe': <CreditCard size={14} className="inline mr-1.5" />,
  'd3.js': <BarChart3 size={14} className="inline mr-1.5" />,
  'openai': <AirVent size={14} className="inline mr-1.5" />,
  'postgresql': <Database size={14} className="inline mr-1.5" />,
  'redis': <Database size={14} className="inline mr-1.5" />,

  // Default
  'default': <Code2 size={14} className="inline mr-1.5" />
};

// Category icons

export default function SelectedWork() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        borderRadius: "250px",
      },
      {
        borderRadius: "12px",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  // Function to get appropriate icon for each technology
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();

    // Check for exact matches first
    for (const [key, icon] of Object.entries(techIcons)) {
      if (techLower.includes(key.toLowerCase())) {
        return icon;
      }
    }

    // Check for partial matches
    if (techLower.includes('js')) return techIcons['javascript'];
    if (techLower.includes('ts')) return techIcons['typescript'];
    if (techLower.includes('css')) return techIcons['css'];
    if (techLower.includes('html')) return techIcons['html'];
    if (techLower.includes('api')) return <Globe size={14} className="inline mr-1.5" />;
    if (techLower.includes('auth')) return <Shield size={14} className="inline mr-1.5" />;
    if (techLower.includes('anim')) return <Zap size={14} className="inline mr-1.5" />;

    return techIcons['default'];
  };

  // Function to get category icon
  const getCategoryIcon = (category: string) => {
    return (categoryIcons as Record<string, JSX.Element>)[category] || <Globe size={12} className="inline mr-1" />;
  };





  return (
    <section id="work" className="">
      <Container
        ref={sectionRef}
        className="bg-gradient-to-br from-[#111] to-[#0b0b0b] border border-white/10 pt-12 lg:!px-6  pb-6    overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-2 justify-between gap-6">
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
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl flex flex-col md:flex-row gap-2 md:text-6xl font-bold text-white mb-3"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Featured
              </motion.span>
              <motion.span
                className="text-transparent bg-clip-text bg-pink-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Projects
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-300 max-w-2xl"
            >
              Real-world applications built with modern tech stacks,
              focusing on performance, scalability, and exceptional user experiences.
            </motion.p>
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-3"
          >
            <motion.button
              ref={prevRef}
              className="w-10 h-10  md:w-12 md:h-12 cursor-pointer rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/10 transition-all duration-300 group"
              aria-label="Previous projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} className="text-white group-hover:text-white" />
            </motion.button>
            <motion.button
              ref={nextRef}
              className="w-10 h-10  md:w-12 md:h-12 cursor-pointer rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/10 transition-all duration-300 group"
              aria-label="Next projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} className="text-white group-hover:text-white" />
            </motion.button>
          </motion.div>
        </div>

        <Swiper
          modules={[Navigation]}

          loop={true}
          slidesPerView={2.5}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 2.5 },
          }}
          onBeforeInit={(swiper: SwiperClass) => {
            if (typeof swiper.params.navigation !== "boolean") {
              const nav = swiper.params.navigation as NavigationOptions;
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }
          }}

          onSwiper={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >

          {projectsData.map((project) => (
            <SwiperSlide key={project.id} className="pt-5">
              <motion.div
                key={project.id}
                className="group  min-h-[420px] relative flex flex-col rounded-2xl overflow-hidden
  bg-[#0b0b0b] border border-white/10
  shadow-[0_20px_60px_rgba(0,0,0,0.3)]
  transition-all hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                {/* Image section */}
                <div className="relative aspect-[16/10] min-h-[180px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 z-10 text-xs font-medium px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-gray-200 border border-white/10 flex items-center gap-1.5">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>

                {/* Content section */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-pink-500 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-pink-500/50 hover:text-pink-400 transition flex items-center"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>

          ))}
        </Swiper>


      </Container>
    </section>
  );
}





