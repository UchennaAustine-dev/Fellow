import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio";
import { SkillsSection } from "@/components/sections/skills";
import { TimelineSection } from "@/components/sections/timeline";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
