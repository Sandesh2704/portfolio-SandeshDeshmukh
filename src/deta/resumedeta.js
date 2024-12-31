import { FaPhoneAlt, FaBriefcase, FaLinkedin, FaGithub,  } from "react-icons/fa";
import {  MdEmail } from "react-icons/md";


const resumeData = {
    personalInfo: {
        name: "Sandesh Deshmukh",
        title: "Next.js Developer | MERN stack Developer | UI Developer",
        contact: [
            { title: '+91 9767359779', icon: <FaPhoneAlt />, link: 'tel:+919767359779'  },
            { title: 'Email',  icon: <MdEmail/>, link: 'mailto:sandeshdeshmukh2704@gmail.com' },
            { title: 'Portfolio', icon: <FaBriefcase />, link: 'https://www.linkedin.com/in/sandesh-deshmukh-036b4624b' },
            { title: 'GitHub', icon: <FaGithub />, link: 'https://github.com/Sandesh2704' },
            { title: 'LinkedIn', icon: <FaLinkedin />, link: 'www.linkedin.com/in/sandesh-deshmukh-036b4624b' },
        ]
    },
    summary: "Results-driven Next.js Developer with 1+ years of experience in building dynamic, responsive web applications using the MERN stack. Skilled in React.js, Next.js, Node.js, and MongoDB. Proven ability to optimize performance, improving efficiency by up to 15%. Experienced in integrating RESTful APIs and delivering user-centric UI/UX solutions. Strong team collaboration and deadline-driven performance. Actively seeking new opportunities to contribute to innovative development teams.",
    keySkills: ["React.js", "Next.js", "Node.js", "MongoDB", "RESTful APIs", "Performance Optimization"],
    technicalSkills: [
        {
            category: "Frontend",
            skills: ["React.js", "Next.js", "JavaScript", "Redux Toolkit", "React Router", "Framer Motion", "Bootstrap", "Tailwind CSS", "Material-UI", "HTML5", "CSS3", "Responsive Web Design"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express.js", "RESTful API", "MongoDB", "Python"]
        },
        {
            category: "Tools",
            skills: ["Postman", "Git", "GitHub", "ChatGPT", "BlackBox.ai"]
        },
        {
            category: "Other",
            skills: ["Solidity", "Web3.js", "Blockchain fundamentals"]
        },
        {
            category: "Currently Learning",
            skills: ["TypeScript", "Angular"]
        }
    ],
    experience: [
        {
            company: "ELIORA TECHNOLOGIES",
            location: "Nagpur",
            role: "MERN Stack Developer",
            duration: "July 2024 - Present",
            tasks: [
                "Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
                "Enhanced application performance by 15% through efficient code refactoring and optimizing resource usage.",
                "Integrated RESTful APIs, improving backend functionality and data flow.",
                "Collaborated with cross-functional teams to deliver features within deadlines, improving communication and team efficiency."
            ]
        },
        {
            company: "Riple Technologies LTD.",
            location: "London",
            role: "MERN Stack Developer Intern (Remote, Contract)",
            duration: "March 2024 - June 2024",
            tasks: [
                "Assisted with various software engineering tasks, contributing to the overall efficiency of projects.",
                "Designed and implemented UI components with React.js, resulting in a 20% increase in user engagement.",
                "Developed RESTful APIs with Node.js and Express.js, achieving a 15% improvement in backend performance."
            ]
        }
    ],
    professionalCourse: {
        institution: "Jetking Networking Institute, Hyderabad",
        course: "Master in Blockchain Development",
        duration: "December 2022 - Present"
    },
    education: [
        {
            institution: "Smt. Radhika tai Pandav College of Engineering, Nagpur",
            degree: "BE (Mechanical)",
            duration: "June 2018 - August 2022"
        }
    ],
    softSkills: [
        "Effective communication",
        "Team collaboration",
        "Problem-solving",
        "Adaptability",
        "Strong aptitude for learning new technologies"
    ],
    languages: ["English", "Hindi", "Marathi"]
};

export default  resumeData