"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  Users, 
  Zap, 
  ArrowRight, 
  BookOpen, 
  PlayCircle,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Brain
} from "lucide-react";
import { cn } from "@/lib/utils";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const bentoItems = [
  {
    title: "The Solo Founder's AI Team",
    description: "Stop grinding 24/7. Build a fleet of autonomous agents that handle the boring stuff while you focus on the big picture.",
    className: "md:col-span-2 md:row-span-2",
    icon: <Cpu className="w-10 h-10 text-cyber-blue" />,
    image: `${basePath}/hermes_agent_os_hero_1777882398119.png`,
    cta: "Launch Your Team",
    href: "/book/introduction"
  },
  {
    title: "Hermes: Zero Friction",
    description: "The world's easiest setup. No complex code, no cloud required. Just pure agent power on your machine.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Rocket className="w-6 h-6 text-accent" />,
    cta: "See How It Works"
  },
  {
    title: "100% Privacy",
    description: "Your data stays yours. Run everything locally with Ollama and keep your business secrets safe.",
    className: "md:col-span-1 md:row-span-1",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />
  },
  {
    title: "Agent Memory",
    description: "Your agents remember everything. Build a collective brain for your business that scales with you.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Brain className="w-6 h-6 text-green-400" />
  },
  {
    title: "Hyperscale Ops",
    description: "One person, infinite capacity. Automate lead gen, research, and support without hiring a single soul.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Zap className="w-6 h-6 text-cyber-blue" />
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-12 md:px-8 lg:py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] pointer-events-none opacity-50" />
      
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Next-Gen Agent OS
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Build Your Own <br />
              <span className="text-primary italic">AI Team</span> for Solo Founders
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-secondary md:text-xl">
              The world's easiest way to build a high-performance AI team using <span className="text-foreground font-semibold">Hermes</span>. 
              No fluff, no endless prompting—just autonomous execution.
            </p>
          </motion.div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 lg:gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-white/20",
                item.className,
                "glass-light"
              )}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 rounded-2xl bg-white/5 p-3 w-fit group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-bold md:text-2xl">{item.title}</h2>
                  <p className="mt-2 text-sm text-secondary md:text-base">
                    {item.description}
                  </p>
                </div>

                {item.image && (
                  <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {item.cta && (
                  <Link 
                    href={item.href || "/book/introduction"} 
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                  >
                    {item.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Access Footer */}
        <footer className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/5 pt-8 text-secondary">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm">Master the OS</span>
          </div>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-5 h-5" />
            <span className="text-sm">Zero Internet Required</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="text-sm">Built for Solo Players</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
