"use client";

import { motion } from "framer-motion";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  interface NavItem {
    id: string;
    label: string;
  }

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Work" },
    { id: "experience", label: "Exp" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-4 left-4 right-4 z-50 flex justify-center"
    >
      <div className="bg-gray-800/90 backdrop-blur-md rounded-full px-2 py-2 border border-gray-700 shadow-lg max-w-fit">
        <div className="flex items-center justify-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
