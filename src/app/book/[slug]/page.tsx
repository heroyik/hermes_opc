import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};
import { notFound } from "next/navigation";
import { BookOpen, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { getChapterContent } from "@/lib/mdx";
import { getAppConfig } from "@/lib/config";

import MobileMenu from "@/components/MobileMenu";

export async function generateStaticParams() {
  const config = getAppConfig();
  const allChapters = config.navigation.flatMap((m) => m.chapters);
  return allChapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ReaderPage({ params }: PageProps) {
  const { slug } = await params;
  const config = getAppConfig();
  
  // Flatten navigation to find the current chapter and its module
  let activeChapter = null;
  let activeModule = null;

  for (const mod of config.navigation) {
    const ch = mod.chapters.find((c) => c.slug === slug);
    if (ch) {
      activeChapter = ch;
      activeModule = mod;
      break;
    }
  }

  if (!activeChapter) {
    notFound();
  }

  const mdxData = await getChapterContent(slug);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar (Desktop) */}
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-white/5 bg-deep-black/50 backdrop-blur-xl lg:block">
        <div className="flex h-16 items-center border-b border-white/5 px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-primary group">
            <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Hermes Book</span>
          </Link>
        </div>
        <nav className="p-4 overflow-y-auto max-h-[calc(100vh-64px)]">
          <div className="space-y-6">
            {config.navigation.map((mod) => (
              <div key={mod.module}>
                <h3 className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60">
                  {mod.module}
                </h3>
                <div className="space-y-1">
                  {mod.chapters.map((ch) => (
                    <Link
                      key={ch.slug}
                      href={`/book/${ch.slug}/`}
                      className={cn(
                        "flex items-center rounded-xl px-3 py-2.5 text-sm transition-all duration-200",
                        slug === ch.slug
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
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-72">
        {/* Mobile Header */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-white/5 bg-background/80 px-4 backdrop-blur-md lg:hidden">
          <Link href="/" className="font-bold text-primary">HB</Link>
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-xs font-medium truncate max-w-[200px]">{activeChapter.title}</span>
          </div>
          <MobileMenu config={config} currentSlug={slug} />
        </header>

        {/* Article */}
        <article className="mx-auto max-w-3xl px-6 py-12 lg:px-12 lg:py-20">
          <div className="mb-10 flex items-center gap-2 text-sm">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary ring-1 ring-primary/20">
              Module: {activeModule?.module}
            </span>
          </div>
          
          <h1 className="mb-10 text-3xl font-black tracking-tight md:text-5xl lg:text-6xl text-balance">
            {activeChapter.title}
          </h1>

          <div className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-p:text-secondary/90 prose-p:leading-relaxed prose-p:text-lg">
            {mdxData ? mdxData.content : (
              <p className="text-red-400">Content for this chapter is still being prepared.</p>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-24 flex items-center justify-between border-t border-white/5 pt-12">
            <Link 
              href="#" 
              className="group flex flex-col gap-2"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Previous</span>
              <div className="flex items-center gap-2 text-secondary group-hover:text-foreground transition-colors">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold">Getting Started</span>
              </div>
            </Link>
            <Link 
              href="#" 
              className="group flex flex-col items-end gap-2 text-right"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Next Chapter</span>
              <div className="flex items-center gap-2 text-primary group-hover:text-cyber-blue transition-colors">
                <span className="font-bold">Setting up the Desk</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
