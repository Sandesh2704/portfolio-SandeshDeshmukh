import React from 'react'
import codenest from "../assets/project/CodeNest.png"
import crmPortol from "../assets/project/project-crm-portol.webp"
import rebelprotocal from "../assets/project/project-rebel-protocol.jpg"
import toobdog from "../assets/project/project-toob-dog.webp"
import ui from "../assets/project/project-ui.webp"
import previousPortfolio from "../assets/project/PortfolioWebsite.png"

import { SiChartdotjs, SiExpress, SiFramer, SiMongodb, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { GiSpadeSkull } from 'react-icons/gi'

const projectdeta = [

  
  
  {
    src: codenest,
    url: 'https://codenest-portfolio.firebaseapp.com/',
    title: "Innovative Website Design for a Web Agency",
    color: "#ff8ae4",
    subtitle: "Design & Development",
    content: "Developed a modern web agency website using React.js and Tailwind CSS, featuring smooth scrolling effects, GSAP animations, and Framer Motion for dynamic and interactive user experiences.",
    techStack: [
      { icon: <SiReact />, title: "React.js" },
      { icon: <SiTailwindcss />, title: "Tailwind CSS" },
      { icon: <SiFramer />, title: "Framer Motion" },
      { icon: <GiSpadeSkull />, title: "Gsap" },
    ],
  },

  {
    src: crmPortol,
    title: "CRM Portal for Company Management",
    color: "#74edcd",
    subtitle: "Design & Development",
    content: "A multi-role portal with dashboards tailored for task management, attendance tracking, and performance monitoring.",
    techStack: [
      { icon: <SiReact />, title: "React.js" },
      { icon: <SiNextdotjs />, title: "Node.js" },
      { icon: <SiMongodb />, title: "MongoDB" },
      { icon: <SiExpress />, title: "Express.js" },
    ],
  },
  {
    src: rebelprotocal,
    url : 'https://rebel-protocol-96wiljsxr-sandesh-deshmukhs-projects.vercel.app/',
    title: "Token Presale Platform",
    color: "#958aff ",
    subtitle: "Development",
    content: "A front-end for a token presale platform supporting multiple blockchain currencies and responsive design.",
    techStack: [
      { icon: <SiNextdotjs />, title: "Next.js" },
      { icon: <SiTailwindcss />, title: "Tailwind CSS" },
      { icon: <SiFramer />, title: "Framer Motion" },
      { icon: <SiChartdotjs />, title: "Chart.js" },
    ],
  },
  {
    src:toobdog,
    url : 'https://toobdog-2q49s21vb-sandesh-deshmukhs-projects.vercel.app/',
    title: "UI Design Conversion to Code",
    color: "#f9ff42",
    subtitle: "Development",
    content: "Successfully converted a complex design into a fully functional and responsive user interface.",
    techStack: [
      { icon: <SiReact />, title: "React.js" },
      { icon: <SiTailwindcss />, title: "Tailwind CSS" },
    ],
  },

  {
    src: previousPortfolio,
    url : 'https://sandeshdeshmukhportfolio.vercel.app/',
    title: "Portfolio Website (Previous Design)",
    color: "#1e71e6",
    subtitle: "Design & Development",
    content: "A responsive portfolio built with Next.js and Tailwind CSS to showcase projects and professional achievements effectively.",
    techStack: [
      { icon: <SiNextdotjs />, title: "Next.js" },
      { icon: <SiFramer />, title: "Framer Motion" },
      { icon: <SiTailwindcss />, title: "Tailwind CSS" },
    ],
  },
  {
    src: ui,
    title: "Frontend & UI Development for Web Applications",
    color: "#8affa7",
    subtitle: "Design & Development",
    content: "Responsive and user-centric web applications using the MERN stack and Next.js, ensuring seamless user experiences.",
    techStack: [
      { icon: <SiNextdotjs />, title: "Next.js" },
      { icon: <SiReact />, title: "React.js" },
      { icon: <SiMongodb />, title: "MongoDB" },
      { icon: <SiExpress />, title: "Express.js" },
    ],
  },
];

export  default projectdeta 