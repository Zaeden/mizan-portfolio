"use client";

import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Lightbulb } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500/50 transition-colors duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a passionate full-stack developer with a love for creating
                  elegant, efficient solutions to complex problems. My journey
                  in software development began with curiosity and has evolved
                  into a commitment to crafting exceptional user experiences.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Proficient in both front-end and back-end development,
                  delivering clean, maintainable, and performant code across the
                  full stack.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Continuously exploring emerging technologies and best
                  practices to stay at the forefront of software development.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/30"
            >
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">
                  Clean Code Advocate
                </h3>
              </div>
              <p className="text-gray-300">
                I believe in writing code that's not just functional, but
                readable, maintainable, and elegant.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30"
            >
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-purple-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">
                  User-Centric Design
                </h3>
              </div>
              <p className="text-gray-300">
                Every line of code I write is with the end user in mind,
                ensuring exceptional experiences across all platforms.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-6 rounded-xl border border-green-500/30"
            >
              <div className="flex items-center mb-4">
                <Lightbulb className="w-8 h-8 text-green-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">
                  Innovation Driver
                </h3>
              </div>
              <p className="text-gray-300">
                Constantly exploring emerging technologies and methodologies to
                stay at the forefront of development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
