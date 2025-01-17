"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, ExternalLink, Github } from "lucide-react";

const categories = [
  { id: "ALL", label: "All Projects" },
  { id: "WEB_DESIGN", label: "Web Design" },
  { id: "MOBILE_APP", label: "Mobile Apps" },
  { id: "BRANDING", label: "Branding" },
];

const portfolioItems = [
  {
    id: 1,
    category: "WEB_DESIGN",
    image: "/placeholder.svg?height=400&width=600",
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with seamless user experience.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    features: [
      "Responsive design",
      "Cart functionality",
      "Payment integration",
    ],
  },
  {
    id: 2,
    category: "MOBILE_APP",
    image: "/placeholder.svg?height=400&width=600",
    title: "Fitness Tracker App",
    description: "Mobile application for tracking workouts and nutrition.",
    technologies: ["React Native", "Firebase", "Redux"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    features: ["Workout tracking", "Nutrition planning", "Progress analytics"],
  },
  // ... Add more items with similar structure
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "ALL" || item.category === activeCategory
  );

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-background to-secondary/10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="container px-4 md:px-6 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work across web development, mobile apps, and
            branding
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="rounded-full px-6"
              size="sm"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                layout
                className="group"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="relative aspect-video">
                          <Image
                            src={item.image}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="secondary" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              View Project
                            </Button>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-semibold text-lg mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="aspect-video relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                        <div>
                          <h4 className="font-semibold mb-2">Key Features</h4>
                          <ul className="list-disc pl-4 space-y-1">
                            {item.features.map((feature) => (
                              <li
                                key={feature}
                                className="text-sm text-muted-foreground"
                              >
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-3">
                          <Button size="sm" asChild>
                            <a
                              href={item.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={item.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default PortfolioSection;
