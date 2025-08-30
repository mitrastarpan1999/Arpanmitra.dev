

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: "bookverse",
    title: "Bookverse",
    description: "Worked on both frontend and backend of a book notes website with database.",
    source: "https://github.com/mitrastarpan1999/Bookverse",
    live: "https://bookverse-nyr4.onrender.com/",
    tech: ["Postgres", "React", "Node.js"],
  details: "A full-stack book notes web app built with Express.js, EJS, and PostgreSQL. Features include adding, editing, deleting, and organizing books, marking favorites, and viewing reading stats. Integrates with the OpenLibrary API for book data and cover images. All data is stored in a PostgreSQL database.",
  },
  {
    id: "weather",
    title: "Weather Website",
    description: "Created a weather website using open weather API.",
    source: "https://github.com/mitrastarpan1999/weather-app",
    live: "https://weather-app-voyc.onrender.com/",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  details: "A Node.js and Express web app using EJS templates and the OpenWeatherMap API. Users can search for any city to get real-time weather data, including temperature, humidity, wind, and rain status. Features geocoding for city lookup, error handling for invalid input, and a clean, user-friendly interface.",
  },
  {
    id: "blog",
    title: "Simple Blog Website",
    description: "A blog website where users can create, edit, and delete blog posts. Hosted live on Render.",
    source: "https://github.com/mitrastarpan1999/Simple-blog-website-Capstone_project-", 
    live: "https://simple-blog-website-capstone-project.onrender.com/",   
    tech: ["Node.js", "Express", "EJS", "PostgresSql"],
  details: "A simple blog platform built with Express.js and EJS. Users can create, edit, and delete blog posts, all stored in memory (no database). Features a clean UI, post editing, and deletion, with all data managed during the server session.",
  },
  {
    id: "personal-website",
    title: "Personal-website",
    description: "This is my authentic personal website as I am learning web development. Therefore, this is also a part of my capstone project till bootstrap css.",
    source: "https://github.com/mitrastarpan1999/Personal-website", 
    live: "https://mitrastarpan1999.github.io/Personal-website/",   
    tech: ["HTML", "Bootstrap", "CSS"],
  details: "A static personal website built with HTML, CSS, JavaScript, and Bootstrap. Features a hero section, skills, contact info, and downloadable CV. Custom CSS and Bootstrap are used for layout and styling. All content and code are original, with generative AI used only for some images.",
  },
  {
    id: "portfolio",
    title: "Responsive Portfolio Website",
    description: "A fully responsive portfolio website showcasing projects and skills.",
    source: "#",
    live: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    details: "Modern design, mobile-first, and optimized for performance. Includes animated sections and contact form.",
  },
  {
    id: "simple-login-page",
    title: "A-simple-login-page",
    description: "This is a simple login page using HTML and CSS.",
    source: "https://github.com/mitrastarpan1999/A-simple-login-page", 
    live: "https://mitrastarpan1999.github.io/A-simple-login-page/",   
    tech: ["HTML", "CSS", "JavaScript"],
  details: "A simple and clean login/sign-up page built with HTML, CSS, and JavaScript. Features client-side form validation, toggle between sign-in and sign-up modes, and instant feedback for password mismatch. All logic is handled on the client side with no backend integration.",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const cardRefs = useRef({});

  // Expand card if URL hash matches project id
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const idx = projects.findIndex(p => p.id === hash);
      if (idx !== -1) {
        setExpanded(idx);
        // Scroll to card
        setTimeout(() => {
          cardRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
      }
    }
  }, []);

  return (
    <section className="min-h-[60vh] px-4 py-16 bg-gradient-to-br from-[#1a1333] via-[#2d1e4f] to-[#1a1333]">
      <motion.div
        className="relative w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-16 border border-white/20 flex flex-col items-center"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-10 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Projects
        </motion.h2>
        <div className="w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              ref={el => cardRefs.current[project.id] = el}
              layout
              className={`relative rounded-2xl p-1 cursor-pointer transition-all duration-300 shadow-xl ${expanded === idx ? 'z-20 scale-105' : 'hover:scale-105'}`}
              style={{}}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.15, duration: 0.7 }}
              onClick={() => setExpanded(expanded === idx ? null : idx)}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col min-h-[260px] border border-white/10">
                <h3 className="text-xl font-semibold mb-2 text-violet-200">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <AnimatePresence>
                  {expanded === idx && (
                    <motion.div
                      key="details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mb-3"
                    >
                      <div className="mb-2">
                        <span className="font-semibold text-violet-300">Tech Stack:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {project.tech.map(t => (
                            <span key={t} className="px-2 py-0.5 bg-violet-800/60 text-violet-100 rounded-full text-xs font-medium">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="text-gray-200 text-sm mb-2">{project.details}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.source}
                    className="inline-block px-3 py-1 bg-gray-800 text-violet-200 rounded-full text-sm font-medium hover:bg-violet-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                  >
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    className="inline-block px-3 py-1 bg-violet-700 text-white rounded-full text-sm font-medium hover:bg-violet-800 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
