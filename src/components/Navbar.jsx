import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ];

  // Used a consistent animated gradient glassy navbar for all pages
  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={
          "fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#1a1333cc] via-[#2d1e4fcc] to-[#1a1333cc] backdrop-blur-lg"
        }
        style={{ boxShadow: "0 4px 32px 0 rgba(80,60,180,0.10)" }}
      >
        {/* Animated gradient blob always visible */}
        <motion.div
          className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full filter blur-2xl opacity-30 animate-pulse z-0"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
  <div className="relative max-w-6xl mx-auto flex items-center justify-between px-4 py-6 z-10">
          <Link to="/" className="text-xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Hi! this is Arpan
          </Link>
          <div className="sm:hidden flex items-center">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <ul className="hidden sm:flex items-center gap-8 font-semibold text-violet-100 text-lg">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`hover:text-blue-400 transition ${
                    location.pathname === link.to ? "text-blue-400 font-bold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
      {/* Mobile menu as left-side sliding drawer rendered outside nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            className="fixed top-0 left-0 h-full w-64 z-[9999] shadow-2xl sm:hidden flex flex-col p-8 gap-6 bg-white"
            style={{}}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-violet-200 hover:text-fuchsia-400 focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={28} />
            </button>
            <nav className="mt-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-2 py-2 rounded-lg text-lg font-bold transition
                    ${location.pathname === link.to
                      ? "text-blue-600"
                      : "text-violet-700 hover:text-blue-500"}
                  `}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
