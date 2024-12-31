import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap,  } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiRedux, SiFramer, SiTailwindcss, SiMaterialdesign, SiPostman, SiExpress, SiMongodb, SiOpenai, SiBlackmagicdesign, SiSolidity, SiWeb3Dotjs } from "react-icons/si";
import { MdDevices  } from "react-icons/md";
import { HiOutlineViewGridAdd } from "react-icons/hi";


const socialMedia = [
  { url: "www.linkedin.com/in/sandesh-deshmukh-036b4624b", title: "LinkedIn" },
  { url: "https://github.com/Sandesh2704", title: "GitHub" },
  { url: "https://x.com/SandeshD33951", title: "Twitter" },
  { url: "https://wa.me/qr/Y23HE5ZKAU2UF1", title: "WhatsApp" },
  { url: "mailto:sandeshdeshmukh2704@gmail.com", title: "Gmail" },
];


 const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <TbBrandNextjs /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Redux Toolkit", icon: <SiRedux /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "Responsive Web Design", icon: <MdDevices /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Material-UI", icon: <SiMaterialdesign /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "RESTful API", icon: <SiPostman /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      title: "Tools & Other Knowledge",
      skills: [
        { name: "Postman", icon: <SiPostman /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "ChatGPT", icon: <SiOpenai /> },
        { name: "BlackBox.ai", icon: <SiBlackmagicdesign /> },
        { name: "Solidity", icon: <SiSolidity /> },
        { name: "Web3.js", icon: <SiWeb3Dotjs /> },
        { name: "Blockchain Fundamentals", icon: <HiOutlineViewGridAdd /> },
      ],
    },
  ];
  



export { skillsData , socialMedia };