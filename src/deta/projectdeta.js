import React from 'react'
import project1 from "../assets/project/project-crm-portol.webp"
import project2 from "../assets/project/project-rebel-protocol.jpg"
import project3 from "../assets/project/project-toob-dog.webp"
import project4 from "../assets/project/project-ui.webp"

import { SiChartdotjs, SiExpress, SiFramer, SiMongodb, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

const projectdeta = [
  {
    src: project1,
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
    src: project2,
    url : 'https://rebel-protocol-96wiljsxr-sandesh-deshmukhs-projects.vercel.app/',
    title: "Token Presale Platform",
    color: "#8C8C8C",
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
    src: project3,
    url : 'https://toobdog-2q49s21vb-sandesh-deshmukhs-projects.vercel.app/',
    title: "Frontend & UI Development for Web Applications",
    color: "#EFE8D3",
    subtitle: "Design & Development",
    content: "Responsive and user-centric web applications using the MERN stack and Next.js, ensuring seamless user experiences.",
    techStack: [
      { icon: <SiNextdotjs />, title: "Next.js" },
      { icon: <SiReact />, title: "React.js" },
      { icon: <SiMongodb />, title: "MongoDB" },
      { icon: <SiExpress />, title: "Express.js" },
    ],
  },
  {
    src: project4,
    title: "UI Design Conversion to Code",
    color: "#706D63",
    subtitle: "Development",
    content: "Successfully converted a complex design into a fully functional and responsive user interface.",
    techStack: [
      { icon: <SiReact />, title: "React.js" },
      { icon: <SiTailwindcss />, title: "Tailwind CSS" },
    ],
  },
];

export  default projectdeta 