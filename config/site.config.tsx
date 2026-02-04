// Correct way to import from lucide-react
import { 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle, 
  Twitter 
} from 'lucide-react';

// app/site.config.ts
export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

export interface SocialMediaItem {
  url: string;
  title: string;
  display: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph?: {
    type?: 'website' | 'article';
    image?: string;
  };
}

export interface SiteConfig {
  // Basic Info
  name: string;
  url: string;
  defaultLocale: string;
  author: {
    name: string;
    url: string;
    jobTitle: string;
  };
  
  // SEO Defaults
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
  
  // Social Profiles - Fixed: Changed from tuple to array
  social: SocialMediaItem[];
  
  // Navigation
  navigation: NavigationItem[];
  
  // Pages Metadata
  pages: {
    home: PageMetadata;
    resume: PageMetadata;
  };
  
  // Images
  images: {
    profile: string;
    ogDefault: string;
    twitterDefault: string;
  };
}

const siteConfig: SiteConfig = {
  // Basic Info
  name: "Sandesh Deshmukh Portfolio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-sandesh-deshmukh.vercel.app",
  defaultLocale: "en",
  author: {
    name: "Sandesh Deshmukh",
    url: "https://portfolio-sandesh-deshmukh.vercel.app",
    jobTitle: "Frontend Developer & UI Engineer",
  },
  
  // SEO Defaults
  defaultTitle: "Sandesh Deshmukh — Frontend Developer & UI Engineer",
  defaultDescription: "Frontend Developer & UI Engineer crafting scalable, high-performance web applications with modern UI, smooth animations, and conversion-focused design.",
  defaultKeywords: [
    "Frontend Developer",
    "UI Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer India",
    "UI Engineer",
    "Tailwind CSS",
    "Framer Motion",
    "Modern Web Applications",
    "TypeScript Developer",
  ],
  
  // Social Profiles - Fixed: Added display property
  social: [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/sandesh-deshmukh-036b4624b",
      display: "linkedin.com/in/sandesh-deshmukh",
      icon: Linkedin,
    },
    {
      title: "GitHub",
      url: "https://github.com/Sandesh2704",
      display: "github.com/Sandesh2704",
      icon: Github,
    },
    {
      title: "Twitter",
      url: "https://x.com/SandeshD33951",
      display: "x.com/SandeshD33951",
      icon: Twitter,
    },
    {
      title: "WhatsApp",
      url: "https://wa.me/qr/Y23HE5ZKAU2UF1",
      display: "+91 9307712744",
      icon: MessageCircle,
    },
    {
      title: "Email",
      url: "mailto:sandeshdeshmukh2704@gmail.com",
      display: "sandeshdeshmukh2704@gmail.com",
      icon: Mail,
    },
  ],
  
  // Navigation
  navigation: [
    {
      name: "Home",
      href: "/",
      description: "Portfolio homepage",
    },
    {
      name: "Resume",
      href: "/resume",
      description: "Professional experience and skills",
    },
  ],
  
  // Pages Metadata
  pages: {
    home: {
      title: "Sandesh Deshmukh — Frontend Developer & UI Engineer",
      description: "Frontend Developer & UI Engineer crafting scalable, high-performance web applications with modern UI, smooth animations, and conversion-focused design.",
      keywords: [
        "Frontend Developer",
        "UI Developer",
        "Next.js Developer",
        "React Developer",
        "Web Developer India",
        "UI Engineer",
        "Tailwind CSS",
        "Framer Motion",
        "Modern Web Applications",
      ],
    },
    resume: {
      title: "Resume | Sandesh Deshmukh",
      description: "Professional resume, skills, experience, and projects of Sandesh Deshmukh - Frontend Developer & UI Engineer.",
      keywords: [
        "Resume",
        "Experience",
        "Skills",
        "Projects",
        "Web Development",
        "Frontend Development",
        "UI Engineering",
      ],
    },
  },
  
  // Images
  images: {
    profile: "/profile.webp",
    ogDefault: "/profile.webp",
    twitterDefault: "/profile.webp",
  },
};

export default siteConfig;