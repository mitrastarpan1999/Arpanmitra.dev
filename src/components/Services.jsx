import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Design",
    desc: "Web development is the process of building, programming, and maintaining websites and web applications. I create visually appealing, user-friendly, and responsive designs tailored to your needs.",
    details: "I offer custom web design services, focusing on modern, responsive layouts, accessibility, and branding. My process includes wireframing, prototyping, and delivering pixel-perfect UIs that engage users and drive results.",
  },
  {
    number: "02",
    title: "Content Writing",
    desc: "I provide engaging and SEO-friendly content writing services to help your website communicate effectively and rank higher in search engines.",
    details: "From blog posts to landing pages, I craft clear, compelling, and original content tailored to your audience and business goals. My writing is optimized for both users and search engines.",
  },
  {
    number: "03",
    title: "SEO Optimization",
    desc: "I help your website rank higher on search engines with keyword research, on-page SEO, and technical improvements for better visibility and traffic.",
    details: "My SEO services include site audits, keyword strategy, meta tag optimization, performance improvements, and ongoing monitoring to boost your site's organic reach.",
  },
  {
    number: "04",
    title: "Website Maintenance",
    desc: "I offer regular updates, bug fixes, backups, and performance monitoring to keep your website secure, fast, and up-to-date.",
    details: "Stay worry-free with my maintenance plans: I handle updates, security patches, uptime monitoring, backups, and quick bug fixes so your site always runs smoothly.",
  },
  {
    number: "05",
    title: "UI/UX Design",
    desc: "I design user interfaces and experiences, including wireframes, prototypes, and usability testing to ensure your website is intuitive and engaging.",
    details: "I create user flows, wireframes, and interactive prototypes, then test and refine them for the best possible user experience. My designs are data-driven and user-focused.",
  },
  {
    number: "06",
    title: "E-commerce Development",
    desc: "I build and customize online stores using Shopify, WooCommerce, or custom solutions to help you sell your products and grow your business online.",
    details: "From product setup to payment integration, I deliver secure, scalable e-commerce solutions tailored to your business, with a focus on conversion and customer experience.",
  },
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-[#1a1333] via-[#2d1e4f] to-[#1a1333] text-gray-100 overflow-hidden">
      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full filter blur-3xl opacity-40 animate-pulse z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 rounded-full filter blur-3xl opacity-40 animate-pulse z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 sm:p-16 border border-white/20 flex flex-col items-center"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {services.map((service, idx) => (
            <div
              key={service.number}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow p-6 border border-white/10 flex flex-col items-start overflow-hidden relative"
            >
              <span className="text-4xl font-extrabold text-violet-300 mb-2">{service.number}</span>
              <div className="text-xl font-bold text-violet-100 mb-2">{service.title}</div>
              <div className="text-gray-200 mb-4">{service.desc}</div>
              <button
                onClick={() => setOpenIdx(idx)}
                className="inline-block mt-auto px-5 py-2 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-600 text-white rounded-full font-semibold shadow hover:scale-105 transition text-sm border border-white/10"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Popup Modal for Service Details */}
        <AnimatePresence>
          {openIdx !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/30 max-w-lg w-full mx-4 text-left"
                initial={{ scale: 0.8, opacity: 0, y: 60 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 60 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="absolute top-4 right-4 text-2xl text-violet-300 hover:text-fuchsia-400 focus:outline-none"
                  onClick={() => setOpenIdx(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="text-5xl font-extrabold text-violet-200 mb-2">{services[openIdx].number}</div>
                <div className="text-2xl font-bold text-violet-100 mb-4">{services[openIdx].title}</div>
                <div className="text-gray-100 mb-4 text-base">{services[openIdx].details}</div>
                <div className="text-gray-300 text-sm">Want to know more? <a href="/contact" className="text-blue-300 underline">Contact me</a></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
