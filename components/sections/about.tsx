"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  Award,
  Briefcase,
  Users,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Globe,
  Languages,
  Calendar,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const metrics = [
  {
    icon: Briefcase,
    label: "Years Experience",
    value: "5",
    description: "Professional Development",
  },
  {
    icon: Users,
    label: "Satisfied Clients",
    value: "97",
    description: "Worldwide",
  },
  {
    icon: Award,
    label: "Awards Won",
    value: "8",
    description: "International & Local",
  },
  {
    icon: GraduationCap,
    label: "Certifications",
    value: "15",
    description: "Industry Recognition",
  },
];

const personalInfo = {
  basic: [
    { icon: Calendar, label: "Age", value: "27 Years" },
    { icon: MapPin, label: "Location", value: "Lagos, NIGERIA" },
    { icon: Languages, label: "Languages", value: "English, French" },
    { icon: Globe, label: "Nationality", value: "American" },
  ],
  contact: [
    { icon: Mail, label: "Email", value: "dickson@gmail.com" },
    { icon: Phone, label: "Phone", value: "+1 234 567 890" },
    { icon: Briefcase, label: "Freelance", value: "Available" },
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-secondary/30 to-background"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="container px-4 md:px-6 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a track record of delivering exceptional
            results
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="contact">Contact</TabsTrigger>
                  </TabsList>
                  <TabsContent value="basic" className="space-y-4 mt-4">
                    {personalInfo.basic.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center space-x-3"
                      >
                        <item.icon className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{item.label}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="contact" className="space-y-4 mt-4">
                    {personalInfo.contact.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center space-x-3"
                      >
                        <item.icon className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{item.label}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>

                <Button className="w-full" variant="default">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="grid gap-6 sm:grid-cols-2">
              {metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <metric.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-3xl font-bold tracking-tight">
                            {metric.value}
                          </div>
                          <p className="text-sm font-medium">{metric.label}</p>
                          <p className="text-xs text-muted-foreground">
                            {metric.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
