import { PhoneCall, Mail, Github, Linkedin } from "lucide-react";

const resumeData = {
    personalInfo: {
        profile: "/profile.jpg",
        name: "Sandesh Deshmukh",
        title: "Frontend Engineer | React.js | Next.js | React Native",
        contact: [
            {
                title: "+91 9767359779",
                icon: PhoneCall,
                link: "tel:+919767359779",
            },
            {
                title: "Email",
                icon: Mail,
                link: "mailto:sandeshdeshmukh2704@gmail.com",
            },
            {
                title: "GitHub",
                icon: Github,
                link: "https://github.com/Sandesh2704",
            },
            {
                title: "LinkedIn",
                icon: Linkedin,
                link: "https://www.linkedin.com/in/sandesh-deshmukh-036b4624b",
            },
        ],
    },

    summary:
        "Frontend Engineer with 3+ years of professional software development experience building production SaaS platforms, eCommerce applications, ERP systems, admin dashboards, and responsive web applications using React.js, Next.js, TypeScript, and React Native. Experienced in building reusable UI components, integrating REST APIs, managing application state, implementing authentication and role-based workflows, and optimizing frontend performance. Hands-on experience with Redux Toolkit, Zustand, TanStack Query, Tailwind CSS, ShadCN UI, payment integrations, and mobile application features. Strong focus on clean architecture, responsive design, user experience, and reliable production-ready applications.",

    keySkills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "React Native",
        "Node.js",
        "REST APIs",
        "Redux Toolkit",
        "TanStack Query",
        "Tailwind CSS",
        "Performance Optimization",
    ],

    technicalSkills: [
        {
            category: "Frontend",
            skills: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "React Native",
                "Expo",
                "Redux Toolkit",
                "Zustand",
                "TanStack Query",
                "React Router",
                "Tailwind CSS",
                "ShadCN UI",
                "Material UI",
                "Framer Motion",
                "HTML5",
                "CSS3",
                "Responsive Web Design",
            ],
        },

        {
            category: "Backend",
            skills: [
                "Node.js",
                "Express.js",
                "NestJS",
                "REST APIs",
                "JWT Authentication",
                "Prisma",
            ],
        },

        {
            category: "Databases",
            skills: [
                "MongoDB",
                "PostgreSQL",
                "Firebase",
                "Supabase",
            ],
        },

        {
            category: "State & Data",
            skills: [
                "Redux Toolkit",
                "Zustand",
                "TanStack Query",
                "API Caching",
                "Async Data Handling",
            ],
        },

        {
            category: "Payments",
            skills: [
                "Razorpay",
                "ICICI Payment Gateway",
                "Payment Verification",
                "Order & Transaction Workflows",
            ],
        },

        {
            category: "Tools",
            skills: [
                "Git",
                "GitHub",
                "Postman",
                "Figma",
                "VS Code",
                "Cursor",
                "ChatGPT",
                "Claude",
                "GitHub Copilot",
            ],
        },

        {
            category: "Other",
            skills: [
                "Web3.js",
                "Solidity",
                "Blockchain Fundamentals",
                "SEO",
                "Accessibility",
                "Performance Optimization",
            ],
        },
    ],
experience: [
    {
        company: "Jithvar Consultancy Services",
        location: "Lucknow, India",
        role: "Frontend Engineer (React.js / Next.js)",
        duration: "February 2025 – Present",
        tasks: [
            "Built production SaaS platforms, ERP systems, eCommerce applications, and admin dashboards using React.js, Next.js, TypeScript, and Tailwind CSS.",

            "Developed complex multi-role dashboards with permissions, asynchronous data handling, REST API integrations, and workflow-driven interfaces.",

            "Implemented Redux Toolkit and TanStack Query for state management, API caching, synchronization, and frontend performance optimization.",

            "Integrated payment and order workflows using Razorpay and ICICI payment services, including payment verification and transaction-related flows.",

            "Collaborated with backend teams on NestJS, PostgreSQL, Prisma, authentication systems, and REST API architecture.",

            "Contributed to React Native mobile features involving API integration, product selection, checkout workflows, and asynchronous application state.",

            "Built reusable UI components and scalable frontend patterns across multiple product modules.",

            "Debugged production issues and optimized frontend performance, reliability, and responsive behavior.",
        ],
    },

    {
        company: "Eliora Technology Pvt. Ltd.",
        location: "Nagpur, India",
        role: "MERN Stack Developer",
        duration: "January 2024 – January 2025",
        tasks: [
            "Developed and maintained 5+ production web applications using React.js, Node.js, Express.js, MongoDB, and REST APIs.",

            "Built authentication and role-based access workflows using JWT and reusable application architecture.",

            "Developed reusable React components, integrated third-party APIs, and optimized frontend performance by approximately 15%.",

            "Collaborated on backend APIs, database schemas, debugging, and production deployments.",
        ],
    },

    {
        company: "Riple Technologies Ltd.",
        location: "Remote",
        role: "Software Engineering Intern",
        duration: "October 2023 – January 2024",
        tasks: [
            "Developed reusable React.js components and frontend features for MERN stack applications.",

            "Worked on REST API integrations, backend connectivity, debugging, and feature implementation.",
        ],
    },
],

    projects: [
        {
            name: "QualiFlux",
            type: "AI Sales & Marketing Automation SaaS",
            duration: "2026 – Present",
            link: "https://qualiflux.vercel.app",
            description:
                "Building a multi-tenant AI-powered SaaS platform focused on CRM automation, lead management, workflow automation, analytics dashboards, and business process automation.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "React",
                "AI",
                "REST APIs",
            ],
        },
    ],

    professionalCourse: {
        institution: "Jetking Nagpur",
        course: "Master in Blockchain Development",
        duration: "2022",
    },

    education: [
        {
            institution:
                "Smt. Radhikatai Pandav College of Engineering, Nagpur",
            degree: "BE (Mechanical Engineering)",
            duration: "June 2018 – August 2022",
        },
    ],

    softSkills: [
        "Effective Communication",
        "Team Collaboration",
        "Problem Solving",
        "Adaptability",
        "Quick Learning",
        "Ownership",
    ],

    languages: ["English", "Hindi", "Marathi"],
};

export default resumeData;
