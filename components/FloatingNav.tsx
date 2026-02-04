"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Home, User, Briefcase, FileText, Menu } from "lucide-react";
import { Container } from "@/components/Component";

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  type: "scroll" | "route";
  to: string;
};

const items: NavItem[] = [
  { id: "home", label: "Home", icon: <Home size={16} />, type: "route", to: "/" },
  { id: "about", label: "About", icon: <User size={16} />, type: "scroll", to: "about" },
  { id: "work", label: "Work", icon: <Briefcase size={16} />, type: "scroll", to: "work" },
  { id: "resume", label: "Resume", icon: <FileText size={16} />, type: "route", to: "/resume" },
];

export default function FloatingNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
const menuRef = useRef<HTMLDivElement | null>(null);


  const isRouteActive = (to: string) => pathname === to;

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  const itemVariants: Variants = {
    rest: { x: 0, opacity: 0.85 },
    hover: { x: 6, opacity: 1 },
  };

useEffect(() => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setHideNav(entry.isIntersecting);
    },
    {
      threshold: 0.2, // footer visible 20% → hide nav
    }
  );

  observer.observe(footer);

  return () => observer.disconnect();
}, []);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      open &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [open]);



  return (
    <motion.nav
      initial="hidden"
       animate={hideNav ? "hidden" : "visible"}
      variants={containerVariants}
      className="fixed inset-x-0 bottom-6 z-50 pointer-events-none"
    >
      <Container className="pointer-events-auto flex justify-end">

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-2 bg-gradient-to-br from-[#111] to-[#0b0b0b] border border-white/10 rounded-xl px-2 py-2 shadow-lg">
          {items.map((item) =>
            item.type === "scroll" ? (
              <ScrollLink
                key={item.id}
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="active-scroll"
              >
                <motion.button
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm
                             text-white/80 hover:text-pink-500
                             [&.active-scroll]:text-pink-400 transition cursor-pointer"
                >
                  {item.icon}
                  {item.label}
                </motion.button>
              </ScrollLink>
            ) : (
              <motion.button
                key={item.id}
                onClick={() => router.push(item.to)}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition cursor-pointer
                  ${isRouteActive(item.to)
                    ? "text-pink-400"
                    : "text-white/80 hover:text-pink-500"}`}
              >
                {item.icon}
                {item.label}
              </motion.button>
            )
          )}
        </div>

        {/* MOBILE */}
      <div ref={menuRef} className="md:hidden relative">

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="w-14 h-14 rounded-lg  bg-gradient-to-br from-[#111] to-[#0b0b0b] border border-white/10  flex items-center justify-center"
          >
            <Menu size={22} />
          </button>

          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute right-0 bottom-16 w-48  bg-gradient-to-br from-[#111] to-[#0b0b0b] border border-white/10  rounded-xl overflow-hidden"
            >
              {items.map((item) =>
                item.type === "scroll" ? (
                  <ScrollLink
                    key={item.id}
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-80}
                    spy
                    activeClass="active-scroll"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex items-center cursor-pointer gap-3 px-4 py-3
                                    text-white/80 hover:bg-white/5
                                    [&.active-scroll]:text-pink-400">
                      {item.icon}
                      {item.label}
                    </div>
                  </ScrollLink>
                ) : (
                  <div
                    key={item.id}
                    onClick={() => {
                      setOpen(false);
                      router.push(item.to);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer
                      ${isRouteActive(item.to)
                        ? "text-pink-400"
                        : "text-white/80 hover:bg-white/5"}`}
                  >
                    {item.icon}
                    {item.label}
                  </div>
                )
              )}
            </motion.div>
          )}
        </div>
      </Container>
    </motion.nav>
  );
}
