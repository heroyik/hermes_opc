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
  LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

const bentoItems = [
  {
    title: "The Agent OS 101",
    description: "Transform from a solo founder to a high-scale operator with AI agents.",
    className: "md:col-span-2 md:row-span-2",
    icon: <Cpu className="w-10 h-10 text-cyber-blue" />,
    image: "/hermes_agent_os_hero_1777882398119.png",
    cta: "Start Reading",
    href: "/book/introduction"
  },
  {
    title: "1-Person Playbook",
    description: "Real-world simulation of running a company single-handedly.",
    className: "md:col-span-1 md:row-span-1",
    icon: <LayoutDashboard className="w-6 h-6 text-accent" />,
    cta: "Explore Playbook"
  },
  {
    title: "Agent Roster",
    description: "Sales, Research, and Ops agents at your command.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Users className="w-6 h-6 text-primary" />
  },
  {
    title: "Interactive Terminal",
    description: "Learn by doing. Live terminal simulations for agent control.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Terminal className="w-6 h-6 text-green-400" />
  },
  {
    title: "Elite Performance",
    description: "Built for speed. 100/100 Lighthouse score guaranteed.",
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
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Hermes <span className="text-primary">Agent OS</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-secondary md:text-xl">
              The definitive 101 guide for solo entrepreneurs to build, manage, and scale 
              AI agent fleets for autonomous business operations.
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
                    href={item.href || "#"} 
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
            <span className="text-sm">7 Modules</span>
          </div>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-5 h-5" />
            <span className="text-sm">Simulation Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="text-sm">Community Support</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
