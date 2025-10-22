import clockwiseImage from "../assets/clockwise_landing_page.png";
import leadtrackrImage from "../assets/leadTrackr_landing_page.png";

import checkinnImage from "../assets/checkinn_landing_page.png";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
      "Redux",
    ],
    color: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs"],
    color: "from-green-500 to-emerald-500",
    delay: 0.2,
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Database Design"],
    color: "from-purple-500 to-violet-500",
    delay: 0.3,
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "AWS", "Postman", "CI/CD"],
    color: "from-orange-500 to-red-500",
    delay: 0.4,
  },
];

export const projects = [
  {
    title: "Clockwise",
    description:
      "A meeting scheduler built with Next.js and TypeScript. Allows users to create, update, and delete meeting events, and automatically generates Google Meet links via Google Calendar API integration.",
    image: clockwiseImage,
    tech: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Clerk",
      "ShadcnUI",
      "Google Calendar API",
    ],
    liveUrl: "https://clockwise-eight.vercel.app",
    githubUrl: "https://github.com/Zaeden/clockwise",
    gradient: "from-cyan-500 to-blue-700",
  },
  {
    title: "LeadTrackr",
    description:
      "Custom CRM solution for managing university admission leads. Features include advanced search & filters, inline editing, role-based dashboards, and CSV/PDF exports. Built with scalability and real user workflows in mind.",
    image: leadtrackrImage,
    tech: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "JWT Auth"],
    liveUrl: "https://leadtrackr.onrender.com",
    githubUrl: "https://github.com/Zaeden/LeadTrackr",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "CheckInn",
    description:
      "Hotel booking platform with user authentication, availability checking, dynamic pricing, and admin room management. Mobile responsive with secure APIs and PostgreSQL storage.",
    image: checkinnImage,
    tech: ["Next.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://checkinn-cvce.onrender.com",
    githubUrl: "https://github.com/Zaeden/checkinn",
    gradient: "from-orange-500 to-red-600",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Zummit Infolabs",
    period: "April 2025 - Present",
    location: "Remote",
    description:
      "Contributing to the development of a scalable HRMS (Human Resource Management System) platform used by multiple enterprise clients. Actively involved in both frontend and backend development using modern technologies and clean architecture patterns.",
    achievements: [
      "Developed dynamic employee and attendance management modules using Next.js and TypeScript",
      "Built RESTful APIs with Express.js and Prisma ORM for complex HR workflows",
      "Designed and optimized MongoDB data models for scalable document storage",
      "Integrated authentication and role-based access control across the application",
      "Collaborated with UI/UX designers and backend engineers in Agile sprints",
    ],
    skills: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "REST API",
      "JWT Auth",
      "Git",
      "Agile",
    ],
  },
];
