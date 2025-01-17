"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

const timelineItems = [
  {
    type: "work",
    title: "Senior Web Designer",
    company: "Envato",
    location: "San Francisco, CA",
    period: "2019 - Present",
    description:
      "Led the design team in creating innovative web solutions for high-profile clients.",
    achievements: [
      "Led team of 5 designers on 20+ major projects",
      "Increased client satisfaction by 40%",
      "Implemented new design system",
    ],
    skills: ["UI/UX", "Design Systems", "Team Leadership"],
  },
  {
    type: "work",
    title: "UI/UX Designer",
    company: "Themeforest",
    location: "New York, NY",
    period: "2017 - 2019",
    description:
      "Developed user-centric designs for various web and mobile applications.",
    achievements: [
      "Designed 30+ responsive websites",
      "Reduced user error rates by 60%",
      "Created mobile-first design guidelines",
    ],
    skills: ["Figma", "User Research", "Prototyping"],
  },
  {
    type: "work",
    title: "Frontend Consultant",
    company: "Wplovers",
    location: "Boston, MA",
    period: "2015 - 2017",
    description:
      "Provided expert consultation on frontend technologies and best practices.",
    achievements: [
      "Consulted for 15+ startups",
      "Improved performance metrics by 70%",
      "Developed coding standards",
    ],
    skills: ["React", "Vue.js", "Performance Optimization"],
  },
  {
    type: "education",
    title: "Master's Degree",
    company: "New York University",
    location: "New York, NY",
    period: "2012 - 2015",
    description:
      "Completed Master's in Interactive Telecommunications Program (ITP).",
    achievements: [
      "4.0 GPA",
      "Published 2 research papers",
      "Led student design committee",
    ],
    skills: ["Research", "Interactive Design", "Creative Computing"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export function TimelineSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container px-4 md:px-6 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional development and academic
            achievements
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[50%] h-full w-px bg-border/50" />

          <motion.div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "justify-end md:justify-start"
                    : "justify-end"
                }`}
              >
                <motion.div
                  className="absolute left-[50%] w-4 h-4 rounded-full border-4 border-background bg-primary transform -translate-x-1/2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />

                <Card
                  className={`w-full md:w-[calc(50%-2rem)] hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <CardHeader className="p-6 pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      {item.type === "work" ? (
                        <Building2 className="h-4 w-4 text-primary" />
                      ) : (
                        <GraduationCap className="h-4 w-4 text-primary" />
                      )}
                      <Badge variant="secondary">
                        {item.type === "work" ? "Experience" : "Education"}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-3 w-3" />
                        <span>{item.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default TimelineSection;
