"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AppConfig } from "@/lib/config";

interface MobileMenuProps {
  config: AppConfig;
  currentSlug: string;
}

export default function MobileMenu({ config, currentSlug }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="rounded-md p-2 hover:bg-white/5 transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-[80%] max-w-sm border-r border-white/5 bg-background p-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 font-bold text-primary"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Hermes Book</span>
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="rounded-md p-2 hover:bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-8 overflow-y-auto max-h-[calc(100vh-120px)]">
                {config.navigation.map((mod) => (
                  <div key={mod.module}>
                    <h3 className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60">
                      {mod.module}
                    </h3>
                    <div className="space-y-1">
                      {mod.chapters.map((ch) => (
                        <Link
                          key={ch.slug}
                          href={`/book/${ch.slug}/`}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center rounded-xl px-3 py-3 text-sm transition-all duration-200",
                            currentSlug === ch.slug
                              ? "bg-primary/10 text-primary font-semibold ring-1 ring-primary/20"
                              : "text-secondary hover:bg-white/5 hover:text-foreground"
                          )}
                        >
                          {ch.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
