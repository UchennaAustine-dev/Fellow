"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Paintbrush, LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  experience: string;
}

interface SkillCategory {
  category: string;
  icon: LucideIcon;
  description: string;
  items: Skill[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Code2,
    description: "Building responsive and interactive user interfaces",
    items: [
      { name: "HTML", level: 95, experience: "5+ years" },
      { name: "CSS", level: 90, experience: "5+ years" },
      { name: "JavaScript", level: 85, experience: "4+ years" },
      { name: "React", level: 80, experience: "3+ years" },
      { name: "TypeScript", level: 80, experience: "2+ years" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    description: "Developing robust server-side applications",
    items: [
      { name: "Node.js", level: 75, experience: "3+ years" },
      { name: "Python", level: 70, experience: "2+ years" },
    ],
  },
  {
    category: "Design",
    icon: Paintbrush,
    description: "Creating intuitive and beautiful user experiences",
    items: [{ name: "UI/UX Design", level: 85, experience: "4+ years" }],
  },
];

const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  skillBar: {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  },
};

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <motion.div
      className="relative w-full group"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <Badge
                variant="secondary"
                className="text-[10px] px-2 py-0 h-4 font-normal"
              >
                {skill.experience}
              </Badge>
            </div>
          </div>
          <span className="text-xs text-muted-foreground font-medium group-hover:text-primary transition-colors">
            {skill.level}%
          </span>
        </div>

        <div className="h-2 w-full bg-secondary/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
            variants={animations.skillBar}
            custom={skill.level}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  );
};

interface CategoryCardProps {
  category: SkillCategory;
  items: Skill[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, items }) => {
  const Icon = category.icon;

  return (
    <motion.div variants={animations.item}>
      <Card className="overflow-hidden backdrop-blur-sm bg-background/95 border-primary/10 hover:border-primary/20 transition-colors">
        <div className="p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Icon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight mb-1">
                {category.category}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {items.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export function SkillsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={animations.container}
        className="container px-4 md:px-6 max-w-5xl mx-auto relative z-10"
      >
        <motion.div variants={animations.item} className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Professional Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive overview of my technical expertise and professional
            capabilities
          </p>
        </motion.div>

        <div className="grid gap-8">
          {skills.map((category) => (
            <CategoryCard
              key={category.category}
              category={category}
              items={category.items}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SkillsSection;
