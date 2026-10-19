"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Wallet,
  PieChart,
  TrendingUp,
  ArrowLeftRight,
  Activity,
  Zap,
} from "lucide-react";

import { Container } from "@/components/Component";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Wallet Connect",
    icon: Wallet,
    desc: "Phantom and Solflare integration with Solana wallet adapter flows.",
  },
  {
    title: "Live Portfolio",
    icon: PieChart,
    desc: "Track SOL and SPL balances with real-time price feeds.",
  },
  {
    title: "Yield Positions",
    icon: TrendingUp,
    desc: "Vault preview with APY, earnings estimates, and position state.",
  },
  {
    title: "On-chain Tx",
    icon: ArrowLeftRight,
    desc: "Deposit, withdraw, and transaction history in one dashboard.",
  },
];

export default function YieldVaultWork() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".yv-pillar",
        { opacity: 0, y: 80 },
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
        ".yv-preview",
        { opacity: 0, scale: 0.9, y: 100 },
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
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-1/3 top-20 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-pink-500/5 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="mb-10 flex flex-col-reverse xl:flex-row items-center justify-between gap-20">
          <div className="relative flex-1 flex items-center justify-start self-stretch w-full">
            <motion.div
              className="yv-preview relative w-full max-w-[720px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a] shadow-[0_20px_100px_rgba(0,0,0,0.5)]"
              whileHover={{ rotate: 1, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative aspect-[16/9] w-full bg-[#080c17]">
                <Image
                  src="/project/yieldvault.webp"
                  alt="YieldVault Solana Dashboard"
                  fill
                  className="object-contain object-center p-4 sm:p-6"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              className="yv-preview hidden xl:flex absolute -right-2 top-10 w-[210px] rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
              whileHover={{ y: -8 }}
            >
              <div className="flex w-full items-center gap-3">
                <div className="rounded-lg bg-pink-500/20 p-2">
                  <Zap size={18} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Est. APY</p>
                  <h3 className="text-2xl font-bold text-white">12.4%</h3>
                </div>
              </div>
              <div className="mt-4 flex h-8 items-end gap-1">
                {[40, 55, 48, 70, 62, 85, 78, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-pink-500/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="yv-preview hidden xl:flex absolute -bottom-4 left-8 w-[250px] rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
              whileHover={{ y: -8 }}
            >
              <div className="mb-4 flex w-full items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Network</p>
                  <h3 className="text-xl font-bold text-white">Solana</h3>
                </div>
                <Activity className="text-pink-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink-500" />
                </span>
                <span className="text-sm text-gray-300">Devnet live feed</span>
              </div>
            </motion.div>
          </div>

          <div className="max-w-[620px] flex-shrink-0 xl:text-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-5 flex items-center gap-3 xl:justify-end"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
                Web3 Product
              </span>
              <div className="h-px w-12 bg-pink-500" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight text-white"
            >
              YIELD<span className="text-pink-500">VAULT</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-7 text-base leading-[1.8] text-gray-400"
            >
              <p>
                A premium Solana DeFi dashboard for connecting wallets,
                tracking portfolio value, exploring yield positions, and
                managing on-chain deposits — built as a polished product
                experience around real Solana data.
              </p>
              <p className="mt-3">
                Focused on glassmorphic UI systems, wallet-adapter flows,
                live price aggregation, and a dashboard architecture ready
                for protocol-level vault integrations.
              </p>
            </motion.div>

            <div className="mt-7 flex flex-wrap gap-3 xl:justify-end">
              {[
                "Next.js",
                "TypeScript",
                "Solana",
                "Wallet Adapter",
                "Recharts",
                "Tailwind CSS",
                "ShadCN",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-4 xl:justify-end">
              <Link
                href="https://yieldvault-967l.vercel.app/"
                target="_blank"
                className="group flex items-center gap-2 rounded bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03]"
              >
                View Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="https://github.com/Sandesh2704/yieldvault"
                target="_blank"
                className="rounded border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-pink-500/30 hover:bg-white/10"
              >
                Source Code
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[18px] top-0 h-full w-px bg-gradient-to-b from-pink-500/0 via-pink-500/30 to-pink-500/0 xl:hidden" />
          <div className="hidden xl:block absolute top-[42px] left-[8%] right-[8%] h-px bg-gradient-to-r from-pink-500/0 via-pink-500/35 to-pink-500/0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {pillars.map((item, index) => (
              <motion.div
                key={item.title}
                className="yv-pillar group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0b0b0b] p-5 transition-all duration-500 hover:border-pink-500/30"
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[70px]" />
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                      0{index + 1}
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <item.icon className="text-pink-500" size={16} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

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
