"use client";

import { Button } from "@/components/ui/button";
import { poppins } from "@/lib/font";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Palette } from "lucide-react";

export function HeroSection() {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative px-4 md:px-6 py-8 md:py-12 z-10"
      >
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="relative flex h-1.5 md:h-2 w-1.5 md:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-primary" />
            </span>
            <span className="text-xs md:text-sm text-primary">
              Available for freelance work
            </span>
          </motion.div>
          <div className="space-y-3 md:space-y-4 max-w-3xl">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={cn(
                poppins.className,
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
              )}
            >
              Crafting Digital Experiences with Passion &#39; Purpose
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4"
            >
              I transform ideas into exceptional digital experiences through
              creative design and cutting-edge development. Let&#39;s build
              something amazing together.
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col w-full sm:w-auto gap-3 sm:flex-row px-4"
          >
            <Button
              onClick={() => handleScroll("contact")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-sm md:text-base"
            >
              Let&apos;s Talk
              <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              onClick={() => handleScroll("portfolio")}
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/10 w-full sm:w-auto text-sm md:text-base"
            >
              View My Work
            </Button>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12 w-full px-4"
          >
            {[
              { icon: Layout, label: "UI/UX Design", value: "100+" },
              { icon: Code, label: "Development", value: "150+" },
              { icon: Palette, label: "Branding", value: "80+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex flex-col items-center p-4 md:p-6 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2" />
                <div className="text-xl md:text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 w-full h-16 md:h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
