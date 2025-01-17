"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Frontend",
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
    items: [
      { name: "Node.js", level: 75, experience: "3+ years" },
      { name: "Python", level: 70, experience: "2+ years" },
    ],
  },
  {
    category: "Design",
    items: [{ name: "UI/UX Design", level: 85, experience: "4+ years" }],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function SkillsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="container px-4 md:px-6 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Professional Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional
            capabilities
          </p>
        </motion.div>

        <div className="grid gap-8">
          {skills.map((category) => (
            <motion.div key={category.category} variants={fadeInUp}>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {category.items.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-3"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{skill.name}</h3>
                              <Badge variant="secondary" className="text-xs">
                                {skill.experience}
                              </Badge>
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="relative h-2 w-full bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="absolute h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              ease: [0.34, 1.56, 0.64, 1],
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SkillsSection;
