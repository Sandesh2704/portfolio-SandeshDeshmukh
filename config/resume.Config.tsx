import { PhoneCall, Mail, Github, Linkedin } from "lucide-react";

const resumeData = {
    personalInfo: {
        profile: '/profile.jpg',
        name: "Sandesh Deshmukh",
        title: "Next.js Developer | MERN stack Developer | UI Developer",
        contact: [
            { title: '+91 9767359779', icon: PhoneCall, link: 'tel:+919767359779' },
            { title: 'Email', icon: Mail, link: 'mailto:sandeshdeshmukh2704@gmail.com' },
            { title: 'GitHub', icon: Github , link: 'https://github.com/Sandesh2704' },
            { title: 'LinkedIn', icon: Linkedin , link: 'https://www.linkedin.com/in/sandesh-deshmukh-036b4624b' },
        ]
    },
    summary: "Passionate Frontend Developer with 1+ years of experience crafting responsive, scalable web applications using React.js, Next.js, and the MERN stack. Specialized in building eCommerce platforms, admin dashboards, and custom UI components from Figma designs. Skilled in API integration, state management using Redux, and enhancing performance and user engagement. Experienced in using Tailwind CSS, ShadCN UI, and Firebase for both static and dynamic projects. Adept at working in agile, cross-functional teams to deliver high-quality solutions on time. Seeking to contribute to a dynamic development team and solve real-world problems through clean, efficient code.",
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
         duration: "January 2024 – January 2025",
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
        company: "Jithvar Consultancy Services",
        location: "Lucknow",
        role: "Frontend Developer (Next.js / React.js)",
        duration: "February 2025 – Present",
        tasks: [
            "Worked on multiple frontend projects including eCommerce websites, admin dashboards, static landing pages, and Firebase-based applications using React.js and Next.js.",
            "Implemented Redux Toolkit in eCommerce applications for efficient state management, cart handling, and optimized API data flow.",
            "Developed CMS dashboards and internal tools using modular Next.js architecture, Tailwind CSS, and ShadCN UI with a focus on performance and usability without Redux.",
            "Converted Figma designs into pixel-perfect, fully responsive user interfaces following design systems and accessibility standards.",
            "Created reusable custom React hooks for centralized API operations (GET, POST, PUT, DELETE) with token-based authentication and Redux integration.",
            "Built real-time applications using Firebase Authentication and Firestore, including both public-facing websites and admin dashboards in Next.js.",
            "Delivered SEO-optimized static websites using HTML, CSS, and JavaScript, collaborating in Agile sprints with designers and backend teams."
        ]
    },

    {
        company: "ELIORA TECHNOLOGIES",
        location: "Nagpur",
        role: "MERN Stack Developer",
        tasks: [
            "Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
            "Enhanced application performance by 15% through efficient code refactoring and optimized resource usage.",
            "Integrated RESTful APIs, improving backend functionality and data flow.",
            "Collaborated with cross-functional teams to deliver features within deadlines."
        ]
    },

    {
        company: "Riple Technologies LTD.",
        location: "",
        role: "MERN Stack Developer Intern (Remote, Contract)",
        duration: "September 2023 – December 2023",
        tasks: [
            "Assisted with software engineering tasks to improve overall project efficiency.",
            "Designed and implemented UI components using React.js, increasing user engagement by 20%.",
            "Developed RESTful APIs using Node.js and Express.js, improving backend performance by 15%."
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