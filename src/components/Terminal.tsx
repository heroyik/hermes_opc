"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, Check, Copy } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "error" | "success";
  content: string;
}

interface TerminalProps {
  lines: TerminalLine[];
  title?: string;
  autoPlay?: boolean;
}

export default function Terminal({ lines, title = "hermes-cli", autoPlay = true }: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoPlay && currentIndex < lines.length) {
      const line = lines[currentIndex];
      setIsTyping(true);
      
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        setCurrentIndex((prev) => prev + 1);
        setIsTyping(false);
      }, line.type === "input" ? 1000 : 500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, lines, autoPlay]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines, isTyping]);

  const copyToClipboard = () => {
    const text = lines.map(l => l.content).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl backdrop-blur-xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/50" />
            <div className="h-3 w-3 rounded-full bg-amber-500/50" />
            <div className="h-3 w-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-secondary">
            <TerminalIcon className="h-3 w-3" />
            <span>{title}</span>
          </div>
        </div>
        <button 
          onClick={copyToClipboard}
          className="rounded-md p-1 text-secondary transition-colors hover:bg-white/10 hover:text-primary"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="h-[300px] overflow-y-auto p-5 font-mono text-sm leading-relaxed"
      >
        <div className="space-y-2">
          {visibleLines.map((line, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex gap-2"
            >
              {line.type === "input" && <span className="text-primary font-bold">➜</span>}
              <span className={cn(
                line.type === "output" && "text-secondary",
                line.type === "error" && "text-red-400",
                line.type === "success" && "text-green-400",
                line.type === "input" && "text-foreground font-semibold"
              )}>
                {line.content}
              </span>
            </motion.div>
          ))}
          
          {isTyping && (
            <div className="flex gap-2 items-center">
              <span className="text-primary font-bold">➜</span>
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="h-4 w-2 bg-primary"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
