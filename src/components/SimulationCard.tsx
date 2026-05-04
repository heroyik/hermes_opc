"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Activity, Eye, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SimulationStep {
  type: "thought" | "action" | "observation";
  content: string;
}

interface SimulationCardProps {
  steps: SimulationStep[];
  title?: string;
}

const iconMap = {
  thought: <Brain className="w-4 h-4 text-accent" />,
  action: <Activity className="w-4 h-4 text-primary" />,
  observation: <Eye className="w-4 h-4 text-green-400" />,
};

const labelMap = {
  thought: "THOUGHT",
  action: "ACTION",
  observation: "OBSERVATION",
};

const bgMap = {
  thought: "bg-accent/10 border-accent/20",
  action: "bg-primary/10 border-primary/20",
  observation: "bg-green-400/10 border-green-400/20",
};

export default function SimulationCard({ steps = [], title = "Agent Reasoning Chain" }: SimulationCardProps) {
  // Defensive check for steps
  const safeSteps = Array.isArray(steps) ? steps : [];

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl glass">
      <h4 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary/60">
        <Activity className="w-4 h-4" />
        {title}
      </h4>

      <div className="space-y-4">
        {safeSteps.length === 0 && (
          <p className="text-xs text-secondary/50">No simulation steps provided.</p>
        )}
        {safeSteps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "relative flex flex-col gap-3 rounded-2xl border p-4 transition-all hover:scale-[1.02]",
                bgMap[step.type]
              )}
            >
              <div className="flex items-center gap-2 text-[10px] font-black tracking-tighter">
                {iconMap[step.type]}
                <span>{labelMap[step.type]}</span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">
                {step.content}
              </p>
            </motion.div>
            
            {index < steps.length - 1 && (
              <div className="flex justify-center py-1 opacity-20">
                <ArrowDown className="w-4 h-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
