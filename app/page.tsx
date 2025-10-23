"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import HeroSection from "../components/hero";
import AboutSection from "../components/about";
import SkillsSection from "../components/skills";
import ProjectsSection from "../components/project";
import ExperienceSection from "../components/experience";
import ContactSection from "../components/contact";
import Navigation from "../components/navigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-[100dvh] bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
        {/* Background */}
        <motion.div
          className="fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.2) 0%, transparent 50%)",
            opacity: backgroundOpacity,
          }}
        />

        {/* Floating Navigation */}
        <Navigation activeSection={activeSection} />

        {/* Main Content */}
        <div className="relative z-10">
          <section id="hero">
            <HeroSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="skills">
            <SkillsSection />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="experience">
            <ExperienceSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform-gpu z-50"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />
      </div>
    </>
  );
}
